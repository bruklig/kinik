<template lang="pug">
  v-app
    Toolbar

    v-content
      router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Toolbar from '@/components/Toolbar.vue'

@Component({
  components: {
    Toolbar,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">

</style>
