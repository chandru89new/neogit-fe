import Axios from "axios"
import apiURL from "@/lib/api"
export default {
  props: {
    user: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      repos: null,
      page: 1,
      per_page: 30
    }
  },
  computed: {
    lastPage() {
      return Math.ceil(this.$store.getters.getTotalRepos/this.per_page)
    },
    prevPage() {
      return (this.page > 1) ? true : false
    },
    nextPage() {
      return (this.page < this.lastPage) ? true : false
    }
  },
  watch: {
    page(v) {
      this.getRepos(v)
    }
  },
  mounted() {
    const self = this
    self.getRepos(this.page)
  },
  methods: {
    getRepos(page) {
      const self = this
      const options = {
        url: apiURL.user + this.user + `/repos` + `?sort=updated` + `&per_page=${this.per_page}` + `&page=${page}`,
        method: 'get'
      }
      Axios(options)
      .then(r => {
        self.repos = r.data
        window.scrollTo({top: 0})
        self.addForkRepo()
      })
      .catch(err => console.warn(err))
    },
    addForkRepo() {
      const self = this 
      self.repos.forEach((repo, i) => {
        if (repo.fork) {
          const options = {
            url: apiURL.repo + self.user + `/${repo.name}`,
            method: 'get'
          }
          Axios(options)
          .then(r => {
            self.$set(self.repos[i], 'parent', r.data.source.full_name)
          })
          .catch(() => {
            return null // TODO handle this error (does not cause major issues at the moment)
          })
        }
      })

    }
  }
}