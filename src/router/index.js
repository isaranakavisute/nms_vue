import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IsaraView from '../views/IsaraView.vue'
import LoginView from '../views/LoginView.vue'
import WelcomeView from '../views/WelcomeView.vue'
import PaySlipView from '../views/pay_slip.vue'
import HistoryView from '../views/history.vue'
import AdminView from '../views/admin.vue'
import UploadView from '../views/upload.vue'

const routes = [
  {
    path: '/',
    name: 'isarahome',
    component: LoginView
  },
  {
      path: '/home',
      name: 'home',
      component: HomeView
  },
  {
      path: '/isara',
      name: 'isara',
      component: IsaraView
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
        path: '/login',
        name: 'login',
        component: LoginView
  },
  {
          path: '/welcome',
          name: 'welcome',
          component: WelcomeView
  },
  {
            path: '/pay_slip_screen',
            name: 'pay_slip_screen',
            component: PaySlipView
  },
  {
            path: '/history_screen',
            name: 'history_screen',
            component: HistoryView
  },
  {
            path: '/admin',
            name: 'admin',
            component: AdminView
  },
  {
            path: '/upload_screen',
            name: 'upload_screen',
            component: UploadView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
            document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
        }
})

export default router
