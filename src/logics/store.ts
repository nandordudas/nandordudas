import type { Ref } from 'vue'
import { useStorage } from '@vueuse/core'
import type { AvailableLanguages } from '~/types'

type ColorSchema = Ref<'auto' | 'dark' | 'light'>

export const colorSchema = useStorage('color-schema', 'auto') as ColorSchema

export const localeLanguage = useStorage('locale', 'en') as AvailableLanguages
