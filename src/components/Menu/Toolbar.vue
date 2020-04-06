<template lang="pug">
nav
  v-app-bar(app dense hide-on-scroll)
    v-app-bar-nav-icon(@click="drawer = true")

    v-divider.mx-5(inset vertical)

    v-toolbar-title.headline.text-uppercase
      router-link(to="/")
        span Kinik

    v-divider.mx-5(inset vertical)

    v-btn(text to="/play")
      span Играть

    v-btn(text to="/parents")
      span Родителям

    v-btn(text to="/teachers")
      span Учителям

    v-btn(text to="/support")
      span Поддержка

    v-spacer

    v-btn(text to="/login")
      v-icon mdi-login
      span Вход

    v-btn(text to="/register")
      v-icon mdi-account-plus-outline
      span Регистрация



  v-navigation-drawer(
    v-model="drawer"
    absolute
    temporary
    color="primary"
    :mini-variant.sync="mini"
    )
    v-list(dense).bot-avatar
      v-list-item
        v-list-item-avatar(tile)
          v-img(src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/8e/8e481bfd4b5ceae7707cdd4207e519df8c94327f_medium.jpg")
        v-list-item-title John Doe
        v-btn(icon @click.stop="mini = !mini")
          v-icon mdi-chevron-left

    v-divider
    v-list(dense)
      v-list-item(v-for="item in items" :key="item.title" link)
        v-list-item-icon
          v-icon {{ item.icon }}
        v-list-item-content
          v-list-item-title {{ item.title }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Toolbar extends Vue {
  private drawer = false
  private mini = true
  private items = [
    { title: 'Home', icon: 'mdi-home-city' },
    { title: 'My Account', icon: 'mdi-account' },
    { title: 'Users', icon: 'mdi-account-group-outline' },
  ]
}
</script>

<style lang="scss">
.bot-avatar {
  margin-left: -7px;
}
</style>
