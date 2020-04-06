<template lang="pug">
  v-app
    Toolbar

    HeaderNotice

    v-content
      router-view
    
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Toolbar from '@/components/Menu/Toolbar.vue'
import HeaderNotice from '@/components/Menu/HeaderNotice.vue'

@Component({
  components: {
    Toolbar,
    HeaderNotice,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">

</style>
