import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue' 
import OurProjectPage from '../views/OurProjectPage.vue'
import ProjectDetailPage from '../views/ProjectDetailPage.vue'
import BlogPage from '../views/BlogPage.vue' 
import BlogDetailsPage from '../views/BlogDetailsPage.vue' 
import NotFound from '../views/404.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView    
  },  
  {
    path: '/ourProject',
    name: 'our Project',
    component: () => import('../views/OurProjectPage.vue')
  },
  {
    path: '/projectDetail',
    name: 'Project Detail',
    component: () => import('../views/ProjectDetailPage.vue')
  },
  {
    path: '/blogPage',
    name: 'Blog Page',
    component: () => import('../views/BlogPage.vue')
  },
  {
    path: '/blogDetailsPage',
    name: 'Blog Details Page',
    component: () => import('../views/BlogDetailsPage.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
