import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import Axios from "axios"

// filters
import '@/lib/filters'

// axios interceptors
Axios.interceptors.request.use((config) => {
  const notif = {
    msg: 'Loading...',
    type: 'default'
  }
  store.dispatch('showNotif', notif)
  
  if (store.getters.getToken) {
    config.headers.Authorization = `token ${store.getters.getToken}`
  }
  
  return config
}, (error) => {
  store.dispatch('hideNotif')
  return Promise.reject(error)
})

Axios.interceptors.response.use((config) => {
  store.dispatch('hideNotif')
  return config
}, (error) => {
  let notif = {}
  
  if (error.response.data.message == 'Bad credentials') {
    store.dispatch('deleteToken')
    notif.msg = 'Please login again.'
    notif.type = 'error'
    store.dispatch('showNotif', notif)
    router.push({name: 'home', params: {error: 'Please re-login to continue'}})
    return Promise.reject(error)
  }

  notif.msg = 'Sorry. There was some problem fetching data (check console).'
  notif.type = 'error'
  store.dispatch('showNotif', notif)
  return Promise.reject(error)

})

// router guard
router.beforeEach((to, from, next) => {
  if (['home', 'about', 'token'].includes(to.name)) {
    return next()
  }
  if (store.getters.getToken) {
    next()
  } else {
    next({name: 'home'})
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
