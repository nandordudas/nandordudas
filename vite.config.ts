import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons'
import ViteComponents from 'vite-plugin-components'
import Markdown from 'vite-plugin-md'
import WindiCSS from 'vite-plugin-windicss'
import { VitePWA } from 'vite-plugin-pwa'
import VueI18n from '@intlify/vite-plugin-vue-i18n'
import Prism from 'markdown-it-prism'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),

    Pages({
      extensions: ['md', 'vue'],
    }),

    Layouts(),

    Markdown({
      headEnabled: true,
      markdownItSetup(md) {
        md.use(Prism)
      },
      wrapperClasses: 'prose prose-sm m-auto text-left',
    }),

    ViteComponents({
      customLoaderMatcher: id => id.endsWith('.md'),
      customComponentResolvers: [
        ViteIconsResolver({
          componentPrefix: '',
        }),
      ],
      extensions: ['md', 'vue'],
    }),

    ViteIcons(),

    WindiCSS({
      safelist: 'prose prose-sm m-auto',
    }),

    VitePWA({
      manifest: {
        name: 'Nandor Dudas',
        icons: [
          {
            sizes: '192x192',
            src: '/pwa-192x192.png',
            type: 'image/png',
          },
          {
            sizes: '512x512',
            src: '/pwa-512x512.png',
            type: 'image/png',
          },
          {
            purpose: 'any maskable',
            sizes: '512x512',
            src: '/pwa-512x512.png',
            type: 'image/png',
          },
        ],
        short_name: 'Nandor Dudas',
        theme_color: '#ffffff',
      },
    }),

    VueI18n({
      include: [path.resolve(__dirname, 'locales/**')],
    }),
  ],

  ssgOptions: {
    formatting: 'minify',
    script: 'async',
  },

  optimizeDeps: {
    exclude: [
      'vue-demi',
    ],
    include: [
      'vue',
      'vue-router',
      '@vueuse/core',
    ],
  },
})
