<script setup>
import { SpeedInsights } from "@vercel/speed-insights/vue";

import { Dialog, DialogPanel } from "@headlessui/vue";

const navigation = [
  // { name: 'Courses', href: '#' },
  { name: "About PTE", href: "/about" },
  { name: "Our Achivements", href: "/result" },
  { name: "Contact", href: "/contact" },
  { name: "Inquiry", href: "/inquiry" },
];

const mobileMenuOpen = ref(false);
</script>

<template>
  <SpeedInsights />
  <header class="">
    <nav
      class="flex items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <a href="/" class="-m-1.5 p-1.5">
          <span class="sr-only">PTE with Tejal</span>
          <img class="h-12 w-auto" src="/img/pwt logo.png" alt="" />
        </a>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Icon
            name="material-symbols:menu"
            class="h-6 w-6"
            aria-hidden="true"
          />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <NuxtLink
          v-for="item in navigation"
          :key="item.name"
          :to="item.href"
          class="cursor-pointer text-sm font-semibold leading-6 text-gray-900"
          >{{ item.name }}</NuxtLink
        >
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <button class="btn-primary">
          <a href="https://practice.ptewithtejal.com/" class=""
            >Log in <Icon name="line-md:arrow-right" class="text-xl"/></a
          >
        </button>
      </div>
    </nav>
    <Dialog
      as="div"
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-50" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-12 w-auto" src="/img/pwt logo.png" alt="" />
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <Icon
              name="material-symbols:close-rounded"
              class="h-6 w-6"
              aria-hidden="true"
            />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <NuxtLink
                v-for="item in navigation"
                :key="item.name"
                :to="item.href"
                @click="mobileMenuOpen = false"
                class="-mx-3 block cursor-pointer rounded-lg px-3 py-2 text-base font-normal leading-7 text-gray-900 hover:bg-gray-50"
                >{{ item.name }}</NuxtLink
              >
            </div>
            <div class="py-6">
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >Log in <Icon name="line-md:arrow-right" class="text-xl"/></a
              >
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>

  <NuxtPage />

  <footer class="bg-primary text-bkg">
    <div class="container footer p-10">
      <nav>
        <header class="footer-title">Links</header>
        <a class="link-hover link" v-for="item in navigation" :href="item.href">
          {{ item.name }}
        </a>
      </nav>
      <nav>
        <header class="footer-title">Company</header>
        <NuxtLink class="link-hover link" to="/contact">Promises</NuxtLink>
        <NuxtLink class="link-hover link" to="/inquiry">Inquiry</NuxtLink>
        <NuxtLink class="link-hover link" to="/result">Results</NuxtLink>
        <NuxtLink class="link-hover link" to="/about">About</NuxtLink>

      </nav>
      <nav>
        <header class="footer-title">Legal</header>
        <a class="link-hover link">Terms of use</a>
        <a class="link-hover link">Privacy policy</a>
        <a class="link-hover link">Cookie policy</a>
      </nav>
      <form>
        <header class="footer-title">Newsletter</header>
        <fieldset class="form-control w-80">
          <label class="label">
            <span class="">Enter your email address</span>
          </label>
          <div class="join">
            <input
              type="text"
              placeholder="username@site.com"
              class="input join-item input-bordered"
            />
            <button
              class="join-item h-12 w-24 border-l-2 bg-bkg text-accent hover:bg-accent hover:text-bkg"
            >
              Subscribe
            </button>
          </div>
        </fieldset>
        <header class="footer-title">Social</header>
        <div class="grid grid-flow-col gap-4 text-bkg">
          <a
            href="https://www.instagram.com/ptewithtejal/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="line-md:instagram" class="text-[1.5rem]" />
          </a>
          <a
            href="https://www.facebook.com/ptewithtejal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="line-md:facebook" class="text-[1.5rem]" />
          </a>
          <a
            href="https://www.youtube.com/@ptewithtejal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="line-md:youtube" class="text-[1.5rem]" />
          </a>
          <a href="" rel="noopener noreferrer">
            <Icon name="line-md:linkedin" class="text-[1.5rem]" />
          </a>
        </div>
      </form>
    </div>
  </footer>
</template>