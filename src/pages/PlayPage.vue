<template lang='pug'>
  v-container.home
    h1 Play page

    v-row
      v-col
        v-img(src='../assets/img/bg/main-bg.jpg')
        h3 Один
        p Один Один Один Один Один Один Один Один Один Один Один Один Один Один 
        a.v-btn.outlined Один
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class PlayPage extends Vue {}
</script>