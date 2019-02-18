import Axios from "axios"
import apiURL from '@/lib/api'
export default {
  props: {
    user: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      userProfile: this.$store.getters.getUserProfile(this.user) || null
    }
  },
  beforeMount() {
    const self = this 
    if (!self.$store.getters.getUserProfile(self.user)) {
      const options = {
        url: apiURL.user + this.user,
        method: 'get'
      }
      Axios(options)
      .then(r => {
        self.userProfile = r.data
        return self.$store.dispatch('addUserProfile', {user: self.user, data: r.data})
      })
      .catch(() => {
        return null // TODO handle this error
      })
    }
  },
  methods: {
    getURL(url) {
      const regex = /^(https|http|ftp|mailto):\/\//g
      if (regex.test(url)) return url
      return `https://${url}`
    }
  }
}