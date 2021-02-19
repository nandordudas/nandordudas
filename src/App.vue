<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onBeforeMount } from 'vue'

onBeforeMount(() => {
  const { matches: prefersDark } = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')
  const setting = localStorage.getItem('color-schema') ?? 'auto'

  if (setting === 'dark' || (prefersDark && setting !== 'light'))
    document.documentElement.classList.toggle('dark', true)
})

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
