import Vue from 'vue'
import App from './App.vue'
import createStore from './vuex/store'
import createRouter from './router'
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'
import {
  sync
}
from 'vuex-router-sync'
export function createApp() {
  const store = createStore()
  const router = createRouter()
    // Synchronous route status(route state)and store
  sync(store, router)
    // Create an application instance that will router and store injection
  const app = new Vue({
      router,
      store,
      render: h => h(App)
    })
    Vue.use(VueMoment, {
    moment,
})
    // Exposed app, router and store
  return {
    app,
    router,
    store
  }
}
