<template>
  <div>
    <h1>Nuxt Serverless Template {{ this.version }}</h1>
    <p>Say Hello to Node.js 8.10 in AWS Lambda</p>
    <nuxt-link to="/hello">hello</nuxt-link>
    <nuxt-link to="/world">world</nuxt-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { State } from 'vuex-class'

@Component
export default class IndexPage extends Vue {
  @State((state) => state.version) private version: string
}
</script>
