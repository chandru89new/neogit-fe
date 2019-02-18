import Axios from "axios"
import apiURL from '@/lib/api'

export default {
  props: {
    repo: {
      type: String,
      default: ''
    },
    user: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      repoSummary: null
    }
  },
  beforeMount() {
    this.getRepoSummary(this.repo, this.user)
  },
  watch: {
    user(v) {
      this.getRepoSummary(this.repo, this.user)
    },
    repo(v) {
      this.getRepoSummary(this.repo, this.user)
    }
  },
  methods: {
    getRepoSummary(repo, user) {
      const self = this
      if (!repo) return 
      const options = {
        url: `${apiURL.repo}${user}/${repo}`
      }
      Axios(options)
      .then(r => {
        self.repoSummary = r.data
      })
      .catch(() => {
        return null // TODO handle error
      })
    }
  }
}