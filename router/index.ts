import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import HomeScreen from '../screens/HomeScreen.vue'
import CalendarScreen from '../screens/CalendarScreen.vue'
import MessageScreen from '../screens/MessageScreen.vue'
import ProfileScreen from '../screens/ProfileScreen.vue'
import LicenseScreen from '../screens/LicenseScreen.vue'
import CertificateListScreen from '../screens/CertificateListScreen.vue'
import BasicInfoScreen from '../screens/BasicInfoScreen.vue'
import OnlineTrainingScreen from '../screens/OnlineTrainingScreen.vue'
import WechatAccountScreen from '../screens/WechatAccountScreen.vue'
import KnowledgeBaseScreen from '../screens/KnowledgeBaseScreen.vue'
import PrivacyPolicyScreen from '../screens/PrivacyPolicyScreen.vue'

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
  },
  {
    path: '/certificates',
    name: 'Certificates',
    component: CertificateListScreen
  },
  {
    path: '/basic-info',
    name: 'BasicInfo',
    component: BasicInfoScreen
  },
  {
    path: '/online-training',
    name: 'OnlineTraining',
    component: OnlineTrainingScreen
  },
  {
    path: '/wechat-account',
    name: 'WechatAccount',
    component: WechatAccountScreen
  },
  {
    path: '/knowledge-base',
    name: 'KnowledgeBase',
    component: KnowledgeBaseScreen
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicyScreen
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router