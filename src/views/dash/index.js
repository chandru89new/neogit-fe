import Loader from '@/components/loader/loader'
export default {
  components: { Loader },
  computed: {
    user() {
      return this.$route.params.user || ''
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('deleteToken')
      this.$router.push({name: 'home'})
    }
  }
}