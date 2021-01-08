import Vue from 'vue'
import Router from 'vue-router'
import Sample from './sample'

import HW from '../components/HelloWorld.vue'
import TheCredit from '../views/TheCredit.vue'
import Index2 from '../views/Index2.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    ...Sample,
    { path: '/', component: HW },
    { path: '/credit', component: TheCredit },
    { path: '/index2', component: Index2 },
    { path: '/three_column', component: () => import('../views/ThreeColumn.vue') },
    { path: '/two_column1', component: () => import('../views/TwoColumn1.vue') },
    { path: '/two_column2', component: () => import('../views/TwoColumn2.vue') },
    { path: '/one_column', component: () => import('../views/OneColumn.vue') },
  ]
})

export default router
