import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library'
import NodeCache from 'node-cache';

const runtimeConfig = useRuntimeConfig()
const serviceAccountAuth = new JWT({
  // env var values here are copied from service account credentials generated by google
  // see "Authentication" section in docs for more info
  email: runtimeConfig.GOOGLE_CLIENT_EMAIL,
  key: runtimeConfig.GOOGLE_PRIVATE_KEY,
  scopes: [
    'https://www.googleapis.com/auth/spreadsheets',
  ],
});

// Create a new Google Spreadsheet document instance
const doc = new GoogleSpreadsheet('12_6AF5KehrIbbwsDkc4WNA9CVfg-mwGcBJgsoo5kRdI', serviceAccountAuth);

// Load document info
doc.loadInfo();

const cache = new NodeCache({ stdTTL: 600, checkperiod: 600 });

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)

    // Select the appropriate sheet
    const sheet = doc.sheetsByTitle[query.sheet];

    // Check if the sheet data is already cached
    const cachedSheetData = cache.get(sheet.title);
    if (cachedSheetData) {
      const sheetData = cachedSheetData;
      // Extract request parameters
      const formData = [
        query.name,
        query.phone,
        query.email,
        query.city || query.message, // Assuming either city or message exist
      ];

      // Append data as a new row
      await sheet.addRow(formData);

      return {
        res: formData
      };
    }

    // If the sheet data is not cached, load it from the API
    await sheet.loadCells();

    // Cache the sheet data for future use
    cache.set(sheet.title, sheet.cells);

    // Extract request parameters
    const formData = [
      query.name,
      query.phone,
      query.email,
      query.city || query.message, // Assuming either city or message exist
    ];

    // Append data as a new row
    await sheet.addRow(formData);

    return {
      res: formData
    };
  } catch (error) {
    console.error(error);
    return "Error";
  }
});