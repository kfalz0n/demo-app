<template>
  <v-container fluid>
    <v-row
      align="center"
      justify="center"
      no-gutters
    >
    <v-col md="4" v-for="(game, index) in gameList" :id="index" :key="game.id">
      <v-card flat @click="selectGame(game.id)" class="d-flex justify-center">
        <v-img
          :src="game.game_thumbnail"
          :lazy-src="game.game_thumbnail"
          contain
          width="200px"
          class="grey darken-4"
        ></v-img>
      </v-card>
    </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapGetters,  mapMutations, mapActions } from 'vuex'
export default {
  name: 'CasinoLobby',
  data() {
    return {
      gameList: []
    }
  },
  computed: {
    ...mapState('games', ['searchField']),
    ...mapGetters('games', ['getGames']),
  },
  async mounted() {
    await this.pullGames()
    this.gameList = this.getFilteredGames(this.getGames)
  },
  methods: {
    ...mapMutations('games', ['updateGames']),
    ...mapActions('games', ['pullGames']),
    selectGame(gameId) {
      this.updateGames({key: 'selectedGameId', value: gameId})
      this.$router.push({
        name: 'GameInfo',
      })
    },
    getFilteredGames(getterFunc) {
      return this.searchField == null ? getterFunc : getterFunc.filter((g) => g.title.toLowerCase().includes(this.searchField.toLowerCase()))
    }
  },
  watch: {
    searchField() {
      this.gameList = this.getFilteredGames(this.getGames)
    }
  }
}
</script>

<style scoped>
</style>
