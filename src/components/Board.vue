<template>
  <ul>
    <li v-for="hero in heroes">{{hero.name}}</li>
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
