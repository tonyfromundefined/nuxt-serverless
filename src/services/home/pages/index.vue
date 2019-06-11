<template>
  <div id='page-index'>
    Page Index
    {{ hello }}
    {{ $store.state.environments.NUXT_APP_VERSION }}
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class PageIndex extends Vue {
  hello: string = 'Hello, World'
}
</script>

<style lang='scss'>
#page-index {
  font-size: 2rem;
}
</style>
