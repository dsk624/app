import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import HomeScreen from '../screens/HomeScreen.vue'
import CalendarScreen from '../screens/CalendarScreen.vue'
import MessageScreen from '../screens/MessageScreen.vue'
import ProfileScreen from '../screens/ProfileScreen.vue'
import LicenseScreen from '../screens/LicenseScreen.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: MainLayout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: HomeScreen
      },
      {
        path: 'calendar',
        name: 'Calendar',
        component: CalendarScreen
      },
      {
        path: 'message',
        name: 'Message',
        component: MessageScreen
      },
      {
        path: 'profile',
        name: 'Profile',
        component: ProfileScreen
      }
    ]
  },
  {
    path: '/license',
    name: 'License',
    component: LicenseScreen
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router