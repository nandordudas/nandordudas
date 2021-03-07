<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { isDark, localeLanguage, toggleDark } from '~/logics'
import type { AvailableLanguages } from '~/types'

const { t, availableLocales, locale } = useI18n()
const toggleLocales = () => {
  const locales = availableLocales

  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
  localeLanguage.value = (locale as AvailableLanguages).value
}
</script>

<template>
  <nav class="text-xl mt-6 dark:text-gray-300">
    <router-link class="icon-btn mx-2" :title="t('button.home')" to="/">
      <carbon-home />
    </router-link>

    <a class="icon-btn mx-2" :title="t('button.toggle_dark')" @click="toggleDark">
      <carbon-moon v-if="isDark" />
      <carbon-sun v-else />
    </a>

    <a class="icon-btn mx-2" :title="t('button.toggle_langs')" @click="toggleLocales">
      <carbon-language />
    </a>

    <a
      class="icon-btn mx-2"
      rel="noreferrer noopener"
      href="https://github.com/nandordudas"
      target="_blank"
      title="GitHub"
    >
      <carbon-logo-github />
    </a>

    <router-link
      to="/cv"
      class="icon-btn mx-2"
      title="CV"
    >
      <carbon-user />
    </router-link>
  </nav>
</template>
