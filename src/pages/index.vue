<template>
  <div>
    <h1>Nuxt Serverless Template {{ this.version }}</h1>
    <p>Say Hello to Node.js 8.10 in AWS Lambda</p>
    <router-link to="/hello">hello</router-link>
    <router-link to="/world">world</router-link>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { State } from 'vuex-class'

@Component
export default class Index extends Vue {
  @State(state => state.version) private version: string
}
</script>
