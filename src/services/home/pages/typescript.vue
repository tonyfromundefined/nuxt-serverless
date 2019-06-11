<template>
  <div class='page-typescript'>
    <h1>{{ greeting }}</h1>
    <nuxt-link to='/'>home</nuxt-link>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class PageTypescript extends Vue {
  greeting: string = 'Hello, TypeScript!'

  head() {
    return {
      title: 'Hello, TypeScript',
    }
  }
}
</script>