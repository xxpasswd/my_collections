import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Mix from '@/components/Mix'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: '',
          component: Mix
        },
        {
          path: 'mix',
          component: Mix
        },
        {
          path: 'skill'
        },
        {
          path: 'other'
        },
        {
          path: 'home'
        }
      ]
    }
  ]
})
