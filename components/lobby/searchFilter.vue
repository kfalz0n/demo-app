<template>
  <v-container>
    <v-row>
    Search:
      <v-text-field v-model="searchGame" @keyup="searchForGame"></v-text-field>
    </v-row>
  </v-container>
</template>

<script>

import { mapMutations } from 'vuex'

export default {
  name: "SearchFilter",
  data() {
    return {
      searchGame: '',
    }
  },
  methods: {
    ...mapMutations('games', ['setSearchedGame']),
    searchForGame() {
      this.setSearchedGame(this.searchGame.trim())
    }
  }
}
</script>

<style scoped>

</style>
