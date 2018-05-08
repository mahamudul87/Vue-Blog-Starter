import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment-timezone'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const state = {
  posts: [],
  lables: [],
  months: [],
  filterLabel:'',
  filterMonth:'',
  viewablePosts:[]
}

const mutations = {
  POST_LIST: (state, posts) => {
    state.posts = posts
    state.viewablePosts=posts
  },
  LABLE_LIST: (state, lables) => {
    state.lables = lables
  },
  MONTH_LIST: (state, months) => {
      state.months = months
    },
  FILTER_LABLE: (state,lable) => {
    state.filterLabel = lable
    state.viewablePosts= state.posts.filter(function(obj){
        return obj.label_id.indexOf(state.filterLabel)!=-1
      })
  },
  FILTER_BY_TITLE: (state,word) => {
    state.viewablePosts= state.posts.filter(function(obj){
        return (obj.title.toLowerCase().indexOf(word.toLowerCase())!=-1)
      })
  },
  FILTER_MONTH: (state,month) => {
    state.filterMonth = month
  state.viewablePosts= state.posts.filter(function(obj){
      return (moment(obj.date_of_post).format('MMMM YYYY').toLowerCase()===state.filterMonth.toLowerCase())
    })
  },
}

export default function () {
  return new Vuex.Store({
    state,
    actions,
    mutations,
    getters
  })
}
