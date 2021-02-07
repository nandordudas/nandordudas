import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons'
import ViteComponents from 'vite-plugin-components'
import Markdown from 'vite-plugin-md'
import { VitePWA } from 'vite-plugin-pwa'
import VueI18n from '@intlify/vite-plugin-vue-i18n'
import Prism from 'markdown-it-prism'

export default defineConfig({
  alias: {
    '~/': `${path.resolve(__dirname, 'src')}/`,
  },
  plugins: [
    Vue({ include: [/\.vue$/, /\.md$/] }),

    Pages({ extensions: ['vue', 'md'] }),

    Markdown({
      wrapperClasses: 'prose prose-sm m-auto',
      headEnabled: true,
      markdownItSetup(md) {
        md.use(Prism)
      },
    }),

    ViteComponents({
      extensions: ['vue', 'md'],
      customLoaderMatcher: id => id.endsWith('.md'),
      customComponentResolvers: [
        ViteIconsResolver({
          componentPrefix: '',
        }),
      ],
    }),

    ViteIcons(),

    VitePWA({
      inlineRegister: false,
      manifest: {
        name: 'Nandor Dudas',
        short_name: 'Nandor Dudas',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),

    VueI18n({ include: [path.resolve(__dirname, 'locales/**')] }),
  ],
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
  },

  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      '@vueuse/core',
    ],
    exclude: [
      'vue-demi',
    ],
  },
})
