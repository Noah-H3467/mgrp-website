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
      component: () => import('../views/DearReaderView.vue'),
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
    {
      path: '/repetend/1',
      name: 'repetend-1',
      component: () => import('../views/Repetend1View.vue'),
    },
    {
      path: '/repetend/2',
      name: 'repetend-2',
      component: () => import('../views/Repetend2View.vue'),
    },
    {
      path: '/repetend/3',
      name: 'repetend-3',
      component: () => import('../views/Repetend3View.vue'),
    },
    {
      path: '/repetend/4',
      name: 'repetend-4',
      component: () => import('../views/Repetend4View.vue'),
    },
    {
      path: '/repetend/5',
      name: 'repetend-5',
      component: () => import('../views/Repetend5View.vue'),
    },
    {
      path: '/repetend/6',
      name: 'repetend-6',
      component: () => import('../views/Repetend6View.vue'),
    },
    {
      path: '/repetend/7',
      name: 'repetend-7',
      component: () => import('../views/Repetend7View.vue'),
    },
    {
      path: '/repetend/8',
      name: 'repetend-8',
      component: () => import('../views/Repetend8View.vue'),
    },
  ],
})

export default router
