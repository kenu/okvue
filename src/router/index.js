import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', component: () => import('../components/HelloWorld.vue') },
    { path: '/credit', component: () => import('../views/TheCredit.vue') },
    { path: '/index2', component: () => import('../views/Index2.vue') },
    { path: '/three_column', component: () => import('../views/ThreeColumn.vue') },
  ]
})

export default router
