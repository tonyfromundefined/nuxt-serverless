import Vue from 'vue'
import VueRouter, { Route } from 'vue-router'
import VueMeta, { MetaInfo } from 'vue-meta'
import { Store } from 'vuex';
import { ApolloClient } from 'apollo-client'
import { AxiosStatic } from 'axios'

declare global {
  interface Window {
    PasswordCredential?: any
    Quill?: any
    MarkdownShortcuts?: any
  }
  interface Navigator {
    credentials: any
  }
}

declare module '*.vue' {
  const _default: Vue
  export default _default
}

declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosStatic
  }
}

declare module 'vue/types/options' {
  interface ExtendedVue extends Vue {
    apolloProvider: {
      defaultClient: ApolloClient<any>
    }
  }
  interface ParsedRequest extends Request {
    cookies: any
    body: any
  }
  interface NuxtContext {
    app: ExtendedVue
    isClient: boolean
    isServer: boolean
    isStatic: boolean
    isDev: boolean
    isHMR: boolean
    route: Route
    store: Store<any>
    env: any
    params: any
    query: any
    req: ParsedRequest
    res: Response
    redirect: (to: string) => void
    error: (err: Error) => void
    nuxtState: any
    beforeNuxtRender: any
  }
  interface ComponentOptions<V extends Vue> {
    head?: any
    layout?: string
    middleware?: string
    asyncData?: (context: NuxtContext) => any
  }
}