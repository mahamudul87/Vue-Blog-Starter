import request from 'axios'

request.defaults.baseURL = 'http://localhost:3000/'

export const getLablesFromDB = ({ commit, state }) => {
  return request.get('getLabel').then((response) => {
    if (response.statusText === 'OK') {
      commit('LABLE_LIST', response.data)
    }
  }).catch((error) => {
    console.log(error)
  })
}


export const getMonthsFromDB = ({ commit, state }) => {
  return request.get('getMonths').then((response) => {
    if (response.statusText === 'OK') {
      commit('MONTH_LIST', response.data)
    }
  }).catch((error) => {
    console.log(error)
  })
}

export const getPostsFromDB = ({ commit, state }) => {
  return request.get('getPosts').then((response) => {
    if (response.statusText === 'OK') {
      console.log(response.data)
      commit('POST_LIST', response.data)
    }
  }).catch((error) => {
    console.log(error)
  })
}
