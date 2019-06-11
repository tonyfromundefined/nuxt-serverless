<template>
  <div class='page-index'>
    <h1>Nuxt Serverless Template {{ environments.NUXT_APP_VERSION }}</h1>
    <p>{{ message }}</p>
    <nuxt-link to='/typescript'>typescript</nuxt-link>
    <nuxt-link to='/nuxt'>nuxt</nuxt-link>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator'
import { State } from 'vuex-class'
import { IEnvironments } from '~/store'

@Component
export default class PageIndex extends Vue {
  @State((state) => state.environments)
  environments: IEnvironments

  /**
   * You can fetch data from remote server with 'asyncData()' method
   */
  async asyncData() {
    return {
      message: 'Say Hello to Node.js 8.10 in AWS Lambda and Nuxt 2.0',
    }
  }
  /**
   * overide tags in <head> with 'head()' method
   */
  head() {
    return {
      title: 'Hello, Nuxt Serverless Template',
    }
  }
}
</script>

<style lang='scss'>
.page-index {
  h1 {
    color: #087f5b;
  }
}
</style>
