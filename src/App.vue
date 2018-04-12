<template>
  <div>
    <h1>Hello heroes!</h1>
    <Board/>
  </div>
</template>

<script>
  import Board from './components/Board.vue'

  export default {
    components: {
      Board
    }
  }
</script>

<style lang="sass">
  h1
    color: blue
</style>
