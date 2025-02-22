import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/patients',
    name: 'patients',
    component: () => import(/* webpackChunkName: "patients" */ '../views/PatientsView.vue')
  },
  {
    path: '/caretakers',
    name: 'caretakers',
    component: () => import(/* webpackChunkName: "caretakers" */ '../views/CaretakersView.vue')
  },
  {
    path: '/therapists',
    name: 'therapists',
    component: () => import(/* webpackChunkName: "therapists" */ '../views/TherapistsView.vue')
  },
  {
    path: '/appointments',
    name: 'appointments',
    component: () => import(/* webpackChunkName: "appointments" */ '../views/AppointmentsView.vue')
  },
  {
    path: '/payments',
    name: 'payments',
    component: () => import(/* webpackChunkName: "payments" */ '../views/PaymentsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
