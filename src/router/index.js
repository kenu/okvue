import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', component: () => import('../components/HelloWorld.vue') },
    { path: '/credit', component: () => import('../views/TheCredit.vue') },
  ]
})

export default router
