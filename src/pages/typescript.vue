<template>
  <div class="page-typescript">
    <h1>{{ this.greeting }}</h1>
    <nuxt-link to="/">home</nuxt-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class PageTypescript extends Vue {
  private head() {
    return {
      title: 'Hello, TypeScript',
    }
  }

  private greeting: string = 'Hello, TypeScript!'
}
</script>
