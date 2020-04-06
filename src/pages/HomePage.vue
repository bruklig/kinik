<template>
  <div class="home">
    <Test/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Test from '@/components/Test.vue'

@Component({
  components: {Test},
})
export default class HomePage extends Vue {}
</script>
