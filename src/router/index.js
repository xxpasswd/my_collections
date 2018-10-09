import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Mix from '@/components/Mix'
import Skill from '@/components/Skill'
import SkillBase from '@/components/skill_components/SkillBase'
import All from '@/components/skill_components/All'
import Front from '@/components/skill_components/Front'
import Backend from '@/components/skill_components/Backend'
import Other from '@/components/skill_components/Other'
import Database from '@/components/skill_components/Database'
import Deploy from '@/components/skill_components/Deploy'
import Tools from '@/components/Tools'


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
              component: All
            },
            {
              path: '/skill/skill_base',
              component: SkillBase
            },
            {
              path: '/skill/front',
              component: Front,
            },
            {
              path: '/skill/backend',
              component: Backend
            },
            {
              path: '/skill/database',
              component: Database
            },
            {
              path: '/skill/deploy',
              component: Deploy
            },
            {
              path: '/skill/other',
              component: Other
            }
          ]
        },
        {
          path: '/tools',
          component: Tools
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
