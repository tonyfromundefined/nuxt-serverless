<template>
  <div class='page-nuxt'>
    <h1>{{ greeting }}</h1>
    <nuxt-link to='/'>home</nuxt-link>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class PageNuxt extends Vue {
  greeting: string = 'Hello, Nuxt 2.8.1!'

  head() {
    return {
      title: 'Hello, Nuxt 2.8.1',
    }
  }
}
</script>
