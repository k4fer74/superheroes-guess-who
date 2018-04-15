<template>
  <div class="cards">
    <Card v-for="hero in heroes" :hero="hero" :key="hero.id" />
  </div>
</template>

<style lang="sass">
  .cards
    display: flex
    justify-content: space-between
    flex-flow: row wrap
    align-content: center
</style>

<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex'

  import Card from './Card.vue'

  export default {
    components: {
      Card
    },
    computed: mapGetters({
      heroes: 'allHeroes'
    }),
    created () {
      this.$store.dispatch('getAllHeroes')
    }
  }
</script>
