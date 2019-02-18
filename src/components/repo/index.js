import apiURL from '@/lib/api'
import Axios from 'axios'
import RepoSummary from '@/components/repoSummary/repoSummary'

export default {
  components: { RepoSummary },
  props: {
    user: {
      type: String,
      default: ''
    },
    repo: {
      type: String,
      default: ''
    },
    path: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      files: []
    }
  },
  computed: {
    pathArray() {
      return (this.path) ? this.path.split('/') : []
    }
  },
  watch: {
    path(v) {
      this.getContents(this.user, this.repo, this.path)
    }
  },
  beforeMount() {
    this.getContents(this.user, this.repo, this.path)
  },
  methods: {
    getContents(user, repo, path='') {
      const self = this 
      const endpoint = `${apiURL.repo}${user}/${repo}/contents/${path}`
      const options = {
        url: endpoint,
        method: 'get'
      }
      Axios(options)
      .then(r => {
        self.files = r.data
        window.scrollTo({top: 0})
      })
      .catch(() => {
        if (self.path.length) {
          return self.$router.push({
            name: 'repo',
            params: {
              user: self.user,
              repo: self.repo
            }
          })
        } else {
          return self.$router.push(`/${self.user}`)
        }
      })
    },
    generatePath(file) {
      const self = this
      return `${self.path}/${file}`
    },
    getContent(base64) {
      return atob(base64)
    }
  }
}