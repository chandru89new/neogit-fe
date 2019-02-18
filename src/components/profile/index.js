import UserProfileCard from '@/components/userProfileCard/userProfileCard'
import Repos from '@/components/repos/repos'
export default {
  components: { UserProfileCard, Repos },
  computed: {
    user() {
      return this.$route.params.user
    }
  }
}