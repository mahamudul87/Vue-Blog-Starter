import Vue from 'vue'
import Home from '../components/Home.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default function () {
  return new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
      { path: '/', component: Home }
    ]
  })
}
