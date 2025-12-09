import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const userInfo = ref({
    name: '郑丽',
    phone: '13187886760',
    avatar: 'https://picsum.photos/id/64/200/200',
    licenseNo: 'AKI7199S',
    rank: '初级导游',
    language: '普通话',
    stars: 3
  })

  return {
    userInfo
  }
})