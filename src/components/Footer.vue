<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { isDark } from '~/logics'

const { t, availableLocales, locale } = useI18n()
const toggleLocales = () => {
  const locales = availableLocales

  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <nav class="text-xl mt-6 dark:text-gray-300">
    <a class="icon-btn mx-2" :title="t('button.toggle_dark')" @click="isDark = !isDark">
      <carbon-moon v-if="isDark" />
      <carbon-sun v-else />
    </a>

    <a class="icon-btn mx-2" :title="t('button.toggle_langs')" @click="toggleLocales">
      <carbon-language />
    </a>

    <a
      class="icon-btn mx-2"
      rel="noreferrer"
      href="https://github.com/nandordudas/nandordudas"
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
