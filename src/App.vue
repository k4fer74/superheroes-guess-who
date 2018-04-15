<template>
  <div class="container">
    <Board/>
    <div class="hints"></div>
  </div>
</template>

<style lang="sass">
  .container
    width: 1100px
    display: flex
    margin: 0 auto

  .hints
    width: 300px
</style>

<script>
  import Board from './components/Board.vue'

  export default {
    components: {
      Board
    }
  }
</script>

<style lang="sass">
</style>
