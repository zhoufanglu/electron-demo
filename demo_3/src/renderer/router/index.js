import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const test = ()=> import('../views/test.vue')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
