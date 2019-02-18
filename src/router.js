import Vue from "vue"
import Router from "vue-router"
import Home from '@/views/home/home'
import About from '@/components/about/about'
import Search from '@/components/search/search'
import Dash from '@/views/dash/dash'
import Profile from '@/components/profile/profile'
import Repo from '@/components/repo/repo'
import GetToken from '@/components/getToken'

Vue.use(Router)

// router guard

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/',
          component: Search,
          name: 'home'
        },
        {
          path: '/about',
          name: 'about',
          component: About
        },
        {
          path: '/get_token',
          name: 'token',
          component: GetToken
        }
      ]
    },
    {
      path: '/:user',
      component: Dash,
      children: [
        {
          path: '/',
          name: 'profile',
          component: Profile
        },
        {
          path: ':repo/:path*',
          name: 'repo',
          component: Repo,
          props: (route) => {
            return {
              user: route.params.user,
              repo: route.params.repo,
              path: route.params.path
            }
          }
        }
      ]
    }
  ]
})
