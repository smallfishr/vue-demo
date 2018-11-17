import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import insure from '@/components/insure'
import paySuccess from '@/components/paySuccess'
import headers from '@/components/common/headers'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'insure',
      component: insure
    },
    {
      path: '/paySuccess',
      name: 'paySuccess',
      component: paySuccess
    },

  ]
})
