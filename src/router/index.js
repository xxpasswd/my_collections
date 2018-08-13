import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Mix from '@/components/Mix'
import Skill from '@/components/Skill'
import SkillBase from '@/components/skill_components/SkillBase'
import Base from '@/components/skill_components/Base'


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
          path: '/mix',
          component: Mix
        },
        {
          path: '/skill',
          component: Skill,
          children: [
            {
              path: '/skill',
              component: Base
            },
            {
              path: '/skill/skill_base',
              component: SkillBase
            },
          ]
        },
        {
          path: '/other'
        },
        {
          path: '/home'
        }
      ]
    }
  ]
})
