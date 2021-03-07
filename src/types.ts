import { Ref } from '@vue/reactivity'
import { ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export type AvailableLanguages = Ref<'en' | 'hu'>
