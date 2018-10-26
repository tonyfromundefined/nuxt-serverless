<template>
  <div class="page-index">
    <h1>Nuxt Serverless Template {{ this.version }}</h1>
    <p>{{ message }}</p>
    <nuxt-link to="/typescript">typescript</nuxt-link>
    <nuxt-link to="/nuxt">nuxt</nuxt-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { State } from 'vuex-class'

@Component
export default class PageIndex extends Vue {
  /**
   * You can fetch data from remote server with 'asyncData()' method
   */
  private async asyncData() {
    return {
      message: 'Say Hello to Node.js 8.10 in AWS Lambda and Nuxt 2.0',
    }
  }

  /**
   * overide tags in <head> with 'head()' method
   */
  private head() {
    return {
      title: 'Hello, Nuxt Serverless Template',
    }
  }

  @State((state) => state.version) private version: string
}
</script>

<style lang="scss">
.page-index {
  h1 {
    color: #087f5b;
  }
}
</style>
