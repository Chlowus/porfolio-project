import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=>import('@/views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/resume',
    name: 'resume',
    component: ()=>import('@/views/ResumeView.vue')
  },
  {
    path: '/skills',
    name: 'skills',
    component: ()=>import('@/views/SkillsView.vue')
  },
  {
    path: '/testimonials',
    name: 'testimonials',
    component: ()=>import('@/views/TestimonialView.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    component: ()=>import('@/views/ProjectsView.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
