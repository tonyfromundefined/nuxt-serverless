<template>
  <div>
    <h1>{{ this.greeting }}</h1>
    <router-link to="/">home</router-link>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Hello extends Vue {
  private greeting: string = "Hello, TypeScript!"
}
</script>
