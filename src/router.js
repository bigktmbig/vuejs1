import Home from './components/home.vue'
import User from './components/user/user.vue'
import Posts from './components/posts/user-posts.vue'
import Profile from './components/profile/user-profile.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  history: false
})

router.map({
  '/': {
    component: Home
  },
  '/user': {
    component: User
  },
  '/posts': {
    component: Posts
  },
  '/profile': {
    component: Profile
  }
})

export default router