<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Nandor Dudas',
  meta: [
    { name: 'description', content: 'Personal website' },
  ],
})
</script>

<template>
  <router-view />
</template>
