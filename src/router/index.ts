import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/proposal',
      name: 'proposal',
      component: () => import('../views/ProposalView.vue'),
    },
    {
      path: '/infographic',
      name: 'infographic',
      component: () => import('../views/InfographicView.vue'),
    },
    {
      path: '/diagram',
      name: 'diagram',
      component: () => import('../views/DiagramView.vue'),
    },
    {
      path: '/analysis',
      name: 'analysis',
      component: () => import('../views/AnalysisView.vue'),
    },
    {
      path: '/lit-crit',
      name: 'lit-crit',
      component: () => import('../views/LitCritView.vue'),
    },
    {
      path: '/poem',
      name: 'poem',
      component: () => import('../views/PoemView.vue'),
    },
    {
      path: '/tutorial',
      name: 'tutorial',
      component: () => import('../views/TutorialView.vue'),
    },
    {
      path: '/glossary',
      name: 'glossary',
      component: () => import('../views/GlossaryView.vue'),
    },
    {
      path: '/references',
      name: 'references',
      component: () => import('../views/ReferencesView.vue'),
    },
  ],
})

export default router
