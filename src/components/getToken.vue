<template>
  <div class="wrapper">
    <div v-if="!code">
      There was some issue logging you in. Please <router-link :to="{name: 'home'}">click here</router-link> to try again.
    </div>
    <div v-else>
      Logging in ...
    </div>
  </div>
</template>
<script>
import apiURL from '@/lib/api'
import Axios from 'axios'

export default {
  data() {
    return {
      code: this.$route.query.code || null
    }
  },
  created() {
    this.getToken()
  },
  methods: {
    getToken() {
      const self = this
      const options = {
        url: apiURL.token,
        method: 'post',
        data: {
          code: this.$route.query.code
        }
      }
      Axios(options)
      .then(r => {
        if (r.data.error) {
          return self.code = null
        }
        self.$store.dispatch('setToken', r.data.access_token)
        return self.$router.push({name: 'home'})
      })
      .catch(err => console.warn(err))
    }
  }
}
</script>
<style lang="sass" scoped>
  .wrapper
    max-width: 900px 
    width: 90%
    margin: 3em auto 
    text-align: center
</style>

