<template lang="pug">
section#test-intro
  .home-page-message
    h2 Бесплатный доступ ко всем урокам по программированию для детей на время каникул.
  #intro(style={height: '500px'})
    .container
      v-row.align-center.justify-center
        v-col
          h1 Программирование для детей! Просто и весело!
          p Всё, что нужно для изучения программирования для детей! Начиная с 5 лет.
          a.v-btn.outlined Начать игру!
        .col
  #threeblocks
    .container
      v-row.align-center.justify-center.aaa
        v-col.text-center
          h2 Kinik: Воодушевляем детей творить
          p с помощью компьютера и интернета
      v-row.align-center.justify-center
        v-col.text-center
          img(src='../assets/img/bg/main-bg.jpg')/
          h3 Один
          p Один Один Один Один Один Один Один Один Один Один Один Один Один Один 
          a.v-btn.outlined Один
        v-col.text-center
          img(src='../assets/img/bg/main-bg.jpg')/
          h3 Два
          p Два Два Два Два Два Два Два Два Два Два Два Два Два Два Два Два Два 
          a.v-btn.outlined Два
        v-col.text-center
          img(src='../assets/img/bg/main-bg.jpg')/
          h3 Три
          p Три Три Три Три Три Три Три Три Три Три Три Три Три Три Три Три Три 
          a.v-btn.outlined Три
  #features
    .container
      v-row.align-center.justify-center
        v-col
          v-row.align-center.justify-center
            v-col.text-center
              v-icon.notranslate.yellow--text mdi-star
              br
              span Раз Раз Раз Раз Раз Раз Раз Раз
            v-col.text-center
              v-icon.notranslate.yellow--text mdi-star
              br
              span Два Два Два Два Два Два Два Два
            v-col.text-center
              v-icon.notranslate.yellow--text mdi-star
              br
              span Три Три Три Три Три Три Три
          v-row.align-center.justify-center
            v-col.text-center
              v-icon.notranslate.yellow--text mdi-star
              br
              span Четыре Четыре Четыре Четыре
            v-col.text-center
              v-icon.notranslate.yellow--text mdi-star
              br
              span Пять Пять Пять Пять Пять Пять
            v-col.text-center
              v-icon.notranslate.yellow--text mdi-star
              br
              span Есть Есть Есть Есть Есть Есть
        v-col
          h2 Самый лучший способ обучать детей программированию
          p Tynker fuels creativity in thousands of schools and powers the imagination of 60 million kids worldwide.
          p With 40+ award-winning block & text-based courses and over 3,700 learning modules, there's a learning path for every kid no matter their age or level.
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Test extends Vue {}
</script>

<style lang="scss">
#test-intro {
  .home-page-message
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
  #intro {
    vertical-align: middle;
    background: url("../assets/img/bg/main-bg.jpg") center center;
  }
  #threeblocks img {
    width: inherit;
  }
}
</style>