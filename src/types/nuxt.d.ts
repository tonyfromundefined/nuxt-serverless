import Vue from 'vue'
import { Route } from 'vue-router'
import { MetaInfo } from 'vue-meta'

declare module 'vue/types/options' {
  type Context = any
  interface Transition {
    name?: string
    mode?: string,
    css?: boolean,
    duration?: number,
    type?: string,
    enterClass?: string,
    enterToClass?: string,
    enterActiveClass?: string,
    leaveClass?: string,
    leaveToClass?: string,
    leaveActiveClass?: string
  }

  interface ComponentOptions<V extends Vue> {
    asyncData?: (ctx: Context) => object
    fetch?: (ctx: Context) => Promise<void> | void
    head?: MetaInfo | (() => MetaInfo)
    layout?: string | ((ctx: Context) => string)
    middleware?: string | string[]
    scrollToTop?: boolean
    transition?: string | Transition | ((to: Route, from: Route) => string)
    validate?: (ctx: Context) => Promise<boolean> | boolean
    watchQuery?: boolean | string[]
  }
}
