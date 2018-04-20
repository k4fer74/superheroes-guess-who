<template>
  <div class="cards__item"
       v-bind:class="{'cards__item--hidden': isHidden(hero)}"
       :style="{backgroundColor: hero.color}"
       v-on:click="toggleHero(hero)">
    <div class="cards__title">
      {{hero.name}}
    </div>
    <img :src="hero.avatar" height="120">
  </div>
</template>

<style lang="sass">
  .cards__item
    width: 32%
    text-align: center
    padding: 34px 0
    border-radius: 6px
    margin-bottom: 20px

  .cards__item--hidden
    opacity: 0.5
</style>

<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex'

  export default {
    props: ['hero'],
    data() {
      hero: this.hero
    },
    computed: {
      ...mapGetters([
        'isHidden'
      ])
    },
    methods: {
      ...mapActions([
        'toggleHero'
      ])
    }
  }
</script>
