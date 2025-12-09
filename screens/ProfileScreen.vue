<script setup lang="ts">
import { 
  ChevronRight, 
  User, 
  ShieldCheck, 
  MessageCircle,
  Award,
  FileBadge,
  Power,
  FilePenLine,
  Contact,
  MonitorPlay,
  Database,
  IdCard,
  NotebookPen,
  Leaf
} from 'lucide-vue-next';
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/user';

const router = useRouter();
const userStore = useUserStore();

const handleItemClick = (label: string) => {
  if (label === '导游证') {
    router.push('/license');
  }
};

const menuItems = [
 { label: '导游证', icon: Contact, color: 'text-[#FF7F50]' },
 { label: '电子证照', icon: FileBadge, color: 'text-[#FF7F50]' },
 { label: '在线培训', icon: MonitorPlay, color: 'text-[#FF7F50]' },
 { label: '微信公众号', icon: MessageCircle, color: 'text-[#FF7F50]' },
 { label: '知识库', icon: Database, color: 'text-[#FF7F50]' },
 { label: '隐私政策', icon: ShieldCheck, color: 'text-[#FF7F50]' },
 { label: '修改密码和手机号', icon: FilePenLine, color: 'text-[#FF7F50]' },
 { label: '退出登录', icon: Power, color: 'text-[#FF7F50]' },
];
</script>

<template>
  <div class="min-h-screen bg-[#F5F6F8] relative">
    <!-- Green Header Background -->
    <div class="bg-primary h-64 w-full absolute top-0 left-0 z-0 rounded-b-[2rem]"></div>

    <div class="relative z-10 pt-14">
      <!-- User Profile Info -->
      <div class="px-6 flex items-center space-x-4 mb-6">
        <div class="w-16 h-16 rounded-full bg-white p-0.5 overflow-hidden border-2 border-white/30 shrink-0">
          <img :src="userStore.userInfo.avatar" alt="Avatar" class="w-full h-full rounded-full object-cover" />
        </div>
        <div class="text-white flex-1">
          <div class="flex flex-col">
             <div class="flex items-center justify-between">
                <h2 class="text-xl font-bold tracking-wide">{{ userStore.userInfo.name }}</h2>
                <div class="flex space-x-0.5">
                  <span v-for="i in userStore.userInfo.stars" :key="i" class="text-yellow-400 text-sm">★</span>
                </div>
             </div>
             <p class="text-sm opacity-90 mt-1 font-medium tracking-wide">{{ userStore.userInfo.phone }}</p>
          </div>
        </div>
      </div>

      <!-- Level Banner -->
      <div class="mx-4 relative z-20">
        <div class="bg-[#1A1A1A] rounded-t-xl p-4 flex justify-between items-center h-14 shadow-lg overflow-hidden relative">
           <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 4px 4px;"></div>
           
           <div class="flex items-center space-x-2 text-[#E5CFA0] relative z-10">
             <User :size="14" fill="#E5CFA0" />
             <span class="font-medium text-sm">{{ userStore.userInfo.rank }} (当前等级)</span>
           </div>
           <div class="flex items-center text-[#E5CFA0] text-xs opacity-90 relative z-10">
             <span>查看导游信息</span>
             <ChevronRight :size="12" class="ml-1" />
           </div>
        </div>
      </div>

      <!-- Main Content Card -->
      <div class="bg-white mx-0 rounded-t-2xl shadow-sm -mt-2 pt-2 relative z-10 pb-6">
          
          <!-- Grid Menu -->
          <div class="grid grid-cols-4 py-6 border-b border-gray-100">
             <div class="flex flex-col items-center justify-center space-y-3 cursor-pointer active:opacity-70">
                <IdCard class="text-primary" :size="28" :stroke-width="1.5" />
                <span class="text-[#333] text-xs font-medium">基本资料</span>
             </div>
             <div class="flex flex-col items-center justify-center space-y-3 cursor-pointer active:opacity-70">
                <NotebookPen class="text-primary" :size="28" :stroke-width="1.5" />
                <span class="text-[#333] text-xs font-medium">执业记录</span>
             </div>
             <div class="flex flex-col items-center justify-center space-y-3 cursor-pointer active:opacity-70">
                <Award class="text-primary" :size="28" :stroke-width="1.5" />
                <span class="text-[#333] text-xs font-medium">奖惩记录</span>
             </div>
             <div class="flex flex-col items-center justify-center space-y-3 cursor-pointer active:opacity-70">
                <Leaf class="text-primary" :size="28" :stroke-width="1.5" />
                <span class="text-[#333] text-xs font-medium">游客评价</span>
             </div>
          </div>

          <!-- List Menu -->
          <div class="mt-2 pl-4">
             <div 
               v-for="(item, idx) in menuItems"
               :key="idx" 
               @click="handleItemClick(item.label)"
               class="flex items-center justify-between py-4 pr-4 border-b border-gray-50 active:bg-gray-50 last:border-0 cursor-pointer"
             >
                <div class="flex items-center space-x-3">
                   <component :is="item.icon" :class="item.color" :size="20" :stroke-width="1.5" />
                   <span class="text-[#333] text-[15px]">{{ item.label }}</span>
                </div>
                <ChevronRight class="text-gray-300" :size="18" />
             </div>
          </div>

          <!-- Danger Button -->
          <div class="px-4 mt-8 mb-4">
             <button class="w-full bg-[#FF4D4F] text-white py-3 rounded-full text-[15px] font-medium shadow-[0_4px_14px_rgba(255,77,79,0.3)] tracking-wide active:scale-[0.99] transition-transform">
               注销用户
             </button>
          </div>
      </div>
    </div>
  </div>
</template>