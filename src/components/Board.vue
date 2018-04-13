<template>
  <ul>
    <li v-for="hero in heroes" :style="{backgroundColor: hero.color}">
      <img :src="hero.avatar" height="200">
      {{hero.name}}
    </li>
  </ul>
</template>

<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex'

  export default {
    computed: mapGetters({
      heroes: 'allHeroes'
    }),
    created () {
      this.$store.dispatch('getAllHeroes')
    }
  }
</script>
