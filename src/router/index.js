import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import BlogView from '../views/BlogView.vue'
import NotfoundView from '../views/NotfoundView.vue'
import AuthView from '../views/AuthView.vue'
import {useAuthStore} from '../stores/authStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
      meta: {requiresAuth: true},
    },
    {
      path: '/:cathtAll(.*)*',
      component: NotfoundView
    },
  ]
})

router.beforeEach((to, from) => {

  const userStore = useAuthStore ();

 if(to.meta.requiresAuth){
  if(!userStore.user.email && !userStore.user.id){
    alert("Halama ini cuman bisa di akses oleh user yang sudah login")
    return{
      path:'/'
    }
  }
 }
})

export default router
