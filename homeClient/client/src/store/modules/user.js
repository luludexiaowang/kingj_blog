/**
* 用户信息状态管理
*/

import { get } from '@/lib/axios'
import router from '@/router'

// state
const state = {
  auth: {}
}

// getters
const getters = {

}

// actions
const actions = {
  async getAuth ({commit}) {
    get('/api').then(resp => {
      console.log(resp)
    }).catch(err => {
      console.log(err)
      router.push('/entry')
    })
  }
}

// mutations
const mutations = {

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
