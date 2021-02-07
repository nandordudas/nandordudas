<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { isDark } from '~/logics'

const { t } = useI18n()
</script>

<template>
  <nav class="text-xl mt-6">
    <a class="icon-btn mx-2" :title="t('button.toggle_dark')" @click="isDark = !isDark">
      <carbon-moon v-if="isDark" />
      <carbon-sun v-else />
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
  </nav>
</template>
