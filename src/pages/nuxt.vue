<template>
  <div class="page-nuxt">
    <h1>{{ this.greeting }}</h1>
    <nuxt-link to="/">home</nuxt-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class PageNuxt extends Vue {
  private head() {
    return {
      title: 'Hello, Nuxt 2.0',
    }
  }

  private greeting: string = 'Hello, Nuxt 2.0!'
}
</script>
