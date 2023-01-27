<template>
  <v-container>
    <v-row v-if="selectedGame">
      <v-col md="4">
        <v-img
          :src="selectedGame.game_thumbnail"
          :lazy-src="selectedGame.game_thumbnail"
          contain
          width="200px"
          class="grey darken-4"
        ></v-img>
      </v-col>
      <v-col md="8">
        <p v-html="selectedGame.content"/>
      </v-col>
    </v-row>
    <v-row>
      <v-btn :to="{ name: 'Lobby' }">Back to lobby</v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "GameDetail",
  props: {
    selectedGame: {
      type: Object,
      default() {
        return{}
      }
    }
  },
}
</script>

<style scoped>

</style>
