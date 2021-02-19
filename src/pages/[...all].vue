<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section>
    <h1>{{ t('not-found') }}</h1>
  </section>
</template>

<route lang="yaml">
meta:
  layout: 404
</route>
