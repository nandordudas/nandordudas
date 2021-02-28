<script setup lang="ts">
import { nextTick } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()

const setLocale = async(lang: string) => {
  locale.value = lang

  await nextTick()
  print()
}

const print = () => window.print()
</script>

<template>
  <div class="print:hidden flex">
    <div class="h-screen grid place-items-center w-full">
      <button
        class="flex-shrink-0 bg-purple-600 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 dark:bg-purple-300 dark:hover:bg-purple-400 dark:text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
        @click="setLocale('en')"
      >
        {{ t('pages.cv.print') }}
        <carbon-printer class="inline-block mr-4" />
        <twemoji-flag-for-flag-united-states class="inline-block" />
      </button>
      <button
        class="flex-shrink-0 bg-purple-600 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 dark:bg-purple-300 dark:hover:bg-purple-400 dark:text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
        @click="setLocale('hu')"
      >
        {{ t('pages.cv.print') }}
        <carbon-printer class="inline-block mr-4" />
        <twemoji-flag-for-flag-hungary class="inline-block" />
      </button>
      <Footer />
    </div>
  </div>
  <section class="hidden print:block py-2cm px-1.8cm divide-y divide-gray-100">
    <div class="flex justify-between mb-4">
      <div>
        <h1 class="text-4xl">
          {{ t('pages.cv.name') }}
        </h1>
        <div>
          <carbon-logo-github class="inline-block mr-2" />
          <a href="https://github.com/nandordudas" title="https://github.com/nandordudas" target="_blank" rel="noopener noreferrer" class="inline-block">
            https://github.com/nandordudas
          </a>
        </div>
      </div>
      <div class="flex flex-col justify-end text-right">
        <a href="tel:+36-50-113-6414" :title="t('pages.cv.phone')">
          +36-50-113-6414
        </a>
        <a href="mailto:nandor.dudas@gmail.com" :title="t('pages.cv.email')" target="_blank">
          nandor.dudas@gmail.com
        </a>
      </div>
    </div>
    <div class="h-10" />
    <div class="pt-4 mb-4">
      <p class="indent-8">
        {{ t('pages.cv.bio') }}
      </p>
    </div>
    <div class="h-10" />
    <div class="grid grid-cols-3 gap-4 py-4">
      <h3 class="text-2xl w-40">
        {{ t('pages.cv.work_experience') }}
      </h3>
      <div class="flex items-center">
        2019.05 - {{ t('pages.cv.present_day') }}
      </div>
      <div class="flex flex-col justify-center">
        <h3 class="text-xl">
          {{ t('pages.cv.media_developer') }}
        </h3>
        <p class="italic">
          {{ t('pages.cv.planmaster_software_ltd') }}
        </p>
      </div>
      <div />
      <div class="flex items-center">
        2017.12 - 2019.01
      </div>
      <div class="flex flex-col justify-center">
        <h3 class="text-xl">
          {{ t('pages.cv.intern') }}
        </h3>
        <p class="italic">
          {{ t('pages.cv.dbi_software_ltd') }}
        </p>
      </div>
      <div />
      <div class="flex items-center">
        2012.03 - 2017.07
      </div>
      <div class="flex flex-col justify-center">
        <h3 class="text-xl w-64 flex flex-col justify-center">
          {{ t('pages.cv.raw_material_sampler') }}
        </h3>
        <p class="italic">
          {{ t('pages.cv.teva_pharmaceutical_ltd') }}
        </p>
      </div>
    </div>
    <div class="grid grid-cols-7 gap-x-4 gap-y-8 pt-4">
      <h3 class="text-2xl">
        {{ t('pages.cv.skills') }}
      </h3>
      <div class="col-span-4">
        {{ t('pages.cv.skill_list.first') }}
        <br>
        I am Weasel!
      </div>
      <div class="col-span-2">
        MySQL, Nodejs, PHP, Typescript, Bash, Flutter, Vue, Chrome, Git, VSCode, &hellip;
      </div>
      <div class="col-span-4">
        {{ t('pages.cv.skill_list.second') }}
      </div>
      <div class="col-span-3">
        {{ t('pages.cv.skill_list.third') }}
      </div>
    </div>
  </section>
</template>

<style scoped>
.indent-8 {
  text-indent: 2rem;
}
</style>

<route lang="yaml">
meta:
  layout: cv
</route>
