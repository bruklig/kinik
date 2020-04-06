<template lang='pug'>
v-content.home-page-message
    h2 Бесплатный доступ ко всем урокам по программированию для детей на время каникул.

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class HeaderNotice extends Vue {}
</script>

<style lang="scss">
.home-page-message {
  h2 {
    color: #fff;
    text-align: center;
    background: rgba(169,3,41,1);
    background: -moz-linear-gradient(-45deg, rgba(169,3,41,1) 0%, rgba(143,2,34,1) 44%, rgba(109,0,25,1) 100%);
    background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(169,3,41,1)), color-stop(44%, rgba(143,2,34,1)), color-stop(100%, rgba(109,0,25,1)));
    background: -webkit-linear-gradient(-45deg, rgba(169,3,41,1) 0%, rgba(143,2,34,1) 44%, rgba(109,0,25,1) 100%);
    background: -o-linear-gradient(-45deg, rgba(169,3,41,1) 0%, rgba(143,2,34,1) 44%, rgba(109,0,25,1) 100%);
    background: -ms-linear-gradient(-45deg, rgba(169,3,41,1) 0%, rgba(143,2,34,1) 44%, rgba(109,0,25,1) 100%);
    background: linear-gradient(135deg, rgba(169,3,41,1) 0%, rgba(143,2,34,1) 44%, rgba(109,0,25,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a90329', endColorstr='#6d0019', GradientType=1 );
    padding: 20px;
  }
}
</style>