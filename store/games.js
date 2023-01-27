import games from '@utils/games.json'

const defaultState = {
  searchField: '',
  games: [],
  selectedGameId: null,
}

export const state = () => Object.assign({}, defaultState)

// Getters
export const getters = {
  getGames: (state) => {
    return state.games;
  },
  getSelectedGame: (state) => {
    if (state.selectedGameId !== null)
      return state.games.filter((g) => g.id === state.selectedGameId)[0]

    return []
  }
}

export const mutations = {
  resetState(state) {
    Object.assign(state, defaultState)
  },
  updateGames(state, {key, value}) {
    state[key] = value
  },
  setSearchedGame(state, search){
    state.searchField = search
  },
  setGames(state, payload) {
    state.games = Object.values(payload)
  },
}


function pullGames({commit}) {
  commit('setGames', games)
}

export const actions = {
  pullGames,
}
