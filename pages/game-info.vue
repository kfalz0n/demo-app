<template>
  <v-container>
    <game-detail :selected-game="game"/>
  </v-container>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "GameInfo",
  data() {
    return {
      game: null
    }
  },
  computed: {
    ...mapGetters('games', ['getSelectedGame'])
  },
  mounted() {
    this.game = this.getSelectedGame

    if (this.game.length === 0)
      this.$router.push('/')
  }
}
</script>

<style scoped>

</style>
