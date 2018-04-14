<template>
  <div>
    <h1>{{ this.greeting }}</h1>
    <router-link to="/">home</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class Hello extends Vue {
  private greeting: string = "This is TypeScript World.";
}
</script>
