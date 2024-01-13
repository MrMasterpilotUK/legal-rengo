import { createRouter, createWebHistory } from 'vue-router'
import TOS from './pages/Documentation.vue'
import PP from './pages/Guides.vue'
import Help from './pages/Help.vue'
import Cookies from './pages/cookies.vue'


const routerHistory = createWebHistory()

const router = createRouter({
  scrollBehavior(to) {
    if (to.hash) {
      window.scroll({ top: 0 })
    } else {
      document.querySelector('html').style.scrollBehavior = 'auto'
      window.scroll({ top: 0 })
      document.querySelector('html').style.scrollBehavior = ''
    }
  },  
  history: routerHistory,
  routes: [
    {
      path: '/',
      redirect: '/terms-service'
    },
    {
      path: '/terms-service',
      component: TOS
    },
    {
      path: '/privacy-policy',
      component: PP
    },
    {
      path: '/help',
      component: Help
    },
    {
      path: '/cookies-policy',
      component: Cookies
    }
  ]
})

export default router
