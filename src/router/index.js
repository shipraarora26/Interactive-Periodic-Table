import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LoadingPage from '@/components/LoadingPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Loading',
      component: LoadingPage
    },
    {
      path: '/app',
      name: 'App',
      component: HelloWorld
    }
  ]
})
