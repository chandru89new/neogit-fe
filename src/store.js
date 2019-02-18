import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const state = {
  token: localStorage.getItem('neogit_tkn') || null,
  userProfiles: {},
  notif: {
    msg: '',
    visible: false,
    type: ''
  }
}

const getters = {
  getToken: (state) => state.token,
  getUserProfile: (state) => (user) => {
    if (state.userProfiles.hasOwnProperty(user)) {
      return state.userProfiles[user]
    } else {
      return false
    }
  },
  getTotalRepos: (state) => (user) => state.userProfiles[user] && state.userProfiles[user].public_repos,
  getNotif: (state) => state.notif,
}

const mutations = {
  addUserProfile: (state, payload) => {
    state.userProfiles[payload.user] = payload.data
  },
  setNotif: (state, payload) => {
    return state.notif = {
      msg: payload.msg,
      type: payload.type,
      visible: true
    }
  },
  hideNotif: (state) => {
    return state.notif.visible = false
  },
  setToken: (state, payload) => {
    return state.token = payload
  },
  deleteToken: (state) => {
    localStorage.removeItem('neogit_tkn')
    return state.token = null
  }
}

const actions = {
  addUserProfile: (context, payload) => { 
    if (!payload.user || !payload.data) return
    return context.commit('addUserProfile', payload)
  },
  showNotif: (context, payload) => {
    if (!payload) return 
    return context.commit('setNotif', payload)
  },
  hideNotif: (context) => {
    return context.commit('hideNotif')
  },
  setToken: (context, payload) => {
    if (!payload) return
    localStorage.setItem('neogit_tkn', payload)
    return context.commit('setToken', payload)
  },
  deleteToken: (context) => {
    return context.commit('deleteToken')
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
