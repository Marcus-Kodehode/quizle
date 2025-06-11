import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CategoryMathView from '@/views/CategoryMathView.vue'
import CategoryGeographyView from '@/views/CategoryGeographyView.vue'
import CategoryHistoryView from '@/views/CategoryHistoryView.vue'
import CategoryAnimalsView from '@/views/CategoryAnimalsView.vue'
import QuizView from '@/views/QuizView.vue'
import ResultView from '@/views/ResultView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/category/matte', name: 'CategoryMath', component: CategoryMathView },
  { path: '/category/geografi', name: 'CategoryGeography', component: CategoryGeographyView },
  { path: '/category/historie', name: 'CategoryHistory', component: CategoryHistoryView },
  { path: '/category/dyr', name: 'CategoryAnimals', component: CategoryAnimalsView },
  { path: '/quiz/:id', name: 'Quiz', component: QuizView, props: true },
  { path: '/result', name: 'Result', component: ResultView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
