export default {
  computed: {
    visible() {
      return this.$store.getters.getNotif.visible
    },
    msg() {
      return this.$store.getters.getNotif.msg
    },
    type() {
      return this.$store.getters.getNotif.type
    },
    timeout() {
      return this.$store.getters.getNotif.timeout || 5000
    }
  },
  watch: {
    msg() {
      const self = this
      setTimeout(() => {
        self.$store.dispatch('hideNotif')
      }, self.timeout)
    }
  }
}