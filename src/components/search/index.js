import apiURL from '@/lib/api'
import constants from '@/lib/constants'

export default {
  data() {
    return {
      username: ''
    }
  },
  computed: {
    error() {
      return this.$route.params.error || ''
    },
    loggedIn() {
      return this.$store.getters.getToken && true
    },
    loginURL() {
      return `${apiURL.login}?client_id=${constants.clientID}&scope=${constants.scope}`
    }
  },
  watch: {
    username(val) {
      if (val.trim()) {
        document.querySelector('#go').disabled = false 
      } else {
        document.querySelector('#go').disabled = true
      }
    }
  },
  methods: {
    goToProfile() {
      if (this.username) {
        this.$router.push({
          name: 'profile',
          params: {
            user: this.username
          }
        })
      }
    }
  }
}