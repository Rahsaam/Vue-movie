import {createRouter, createWebHistory} from 'vue-router'
import { routes } from './routes'

export const router = createRouter({
    history: createWebHistory(),
    routes
    
})

router.beforeEach((to, from, next) => {
    const user = sessionStorage.getItem('user_id')
    if (to.matched.some(record => record.meta.requiresAuth)&&!user)
      return next({name:'login'})
    if(to.name === 'login' && user)
      return next({name:'home'})
    next();
  });