import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/slotparent',
    name: 'slotparent',
    component: () => import('../views/SlotParent.vue')
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited. 
  },
  {
    path: '/propsparent',
    name: 'propsparent',
    component: () => import('../views/PropsParent.vue')
  },
  {
    path: '/watcher',
    name: 'watcher',
    component: () => import('../components/watch/WatcherExample.vue')
  },
  {
    path: '/watchercomposition',
    name: 'watchercomposition',
    component: () => import('../components/watch/WatcherComposition.vue')
  },
  {
    path: '/tempconverter',
    name: 'tempconverter',
    component: () => import('../components/watch/TempConverterCompoAPI.vue')
  },
  {
    path: '/countdowntime',
    name: 'countdowntime',
    component: () => import('../components/watch/CountTime.vue')
  },
  {
    path: '/grandparent',
    name: 'grandparent',
    component: () => import('../components/PropsDrilling/GrandParent.vue')
  },
  {
    path: '/eventmain',
    name: 'eventmain',
    component: () => import('../components/eventemit/EventMain.vue')
  },
  {
    path: '/eventmainex',
    name: 'eventmainex',
    component: () => import('../components/eventemit/EventMainEx.vue')
  },
  {
    path: '/templaterefs',
    name: 'templaterefs',
    component: () => import('../components/Concepts/TemplateRefs.vue')
  },
  {
    path: '/templaterefscomp',
    name: 'templaterefscomp',
    component: () => import('../components/Concepts/TemplateRefsComp.vue')
  },

  ]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
