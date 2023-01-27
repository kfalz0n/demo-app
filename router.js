import Vue from 'vue'
import Router from 'vue-router'
import Index from './pages/index.vue'
import GameInfo from './pages/game-info'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'Lobby',
        component: Index
      },
      {
        path: '/game',
        name: 'GameInfo',
        component: GameInfo
      }
    ]
  })
}
