<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onBeforeMount } from 'vue'

onBeforeMount(() => {
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  const setting = localStorage.getItem('color-schema') || 'auto'

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
  <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <router-view />
    <Footer />
  </main>
</template>
