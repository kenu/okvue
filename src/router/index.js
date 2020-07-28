import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', component: () => import('../components/HelloWorld.vue') },
    { path: '/credit', component: () => import('../views/TheCredit.vue') },
    { path: '/index2', component: () => import('../views/Index2.vue') },
    { path: '/three_column', component: () => import('../views/ThreeColumn.vue') },
    { path: '/two_column1', component: () => import('../views/TwoColumn1.vue') },
    { path: '/two_column2', component: () => import('../views/TwoColumn2.vue') },
    { path: '/one_column', component: () => import('../views/OneColumn.vue') },
  ]
})

export default router
