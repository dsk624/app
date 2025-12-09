<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ChevronLeft, ChevronRight, GraduationCap, Video, BookOpen, FileText, Clock, PlayCircle } from 'lucide-vue-next';
import { useUserStore } from '../stores/user';

const router = useRouter();
const userStore = useUserStore();
</script>

<template>
  <div class="min-h-screen bg-[#F5F6F8] font-sans pb-10">
    <!-- Navbar -->
    <div class="bg-white px-4 h-[44px] flex items-center justify-between sticky top-0 z-20 shadow-sm">
      <button class="-ml-2 w-10 h-full flex items-center justify-center active:opacity-80" @click="router.back()">
        <ChevronLeft :size="24" class="text-[#333]" stroke-width="1.5" />
      </button>
      <span class="text-[16px] font-medium text-[#333] absolute left-1/2 -translate-x-1/2">全国文旅市场管理培训系统</span>
      <div class="w-8"></div>
    </div>

    <!-- Hero Section -->
    <div class="relative bg-gradient-to-br from-[#ff5e62] to-[#ff9966] pb-24 rounded-b-[2rem] pt-6 px-6">
      <div class="flex items-center justify-between text-white mb-6">
        <div class="flex items-center space-x-3">
           <div class="p-1.5 bg-white/20 rounded-lg backdrop-blur-sm">
             <div class="border border-white/50 rounded p-0.5">
               <Video :size="20" />
             </div>
           </div>
           <div>
             <h1 class="text-lg font-bold tracking-wide">全国文化和旅游市场</h1>
             <p class="text-sm opacity-90">在线培训系统</p>
           </div>
        </div>
        <div class="w-12 h-12 rounded-full border-2 border-white/40 overflow-hidden bg-white/20">
           <img :src="userStore.userInfo.avatar" class="w-full h-full object-cover" />
        </div>
      </div>

      <!-- 4 Menu Grid -->
      <div class="grid grid-cols-4 gap-3">
        <div class="bg-white rounded-xl py-3 flex flex-col items-center justify-center shadow-sm space-y-2">
           <GraduationCap class="text-orange-500" :size="24" />
           <span class="text-xs font-medium text-gray-700">我的培训</span>
        </div>
        <div class="bg-white rounded-xl py-3 flex flex-col items-center justify-center shadow-sm space-y-2">
           <Video class="text-pink-500" :size="24" />
           <span class="text-xs font-medium text-gray-700">我的直播</span>
        </div>
        <div class="bg-white rounded-xl py-3 flex flex-col items-center justify-center shadow-sm space-y-2">
           <BookOpen class="text-blue-400" :size="24" />
           <span class="text-xs font-medium text-gray-700">课程学习</span>
        </div>
        <div class="bg-white rounded-xl py-3 flex flex-col items-center justify-center shadow-sm space-y-2">
           <FileText class="text-yellow-500" :size="24" />
           <span class="text-xs font-medium text-gray-700">学习资料</span>
        </div>
      </div>
    </div>

    <!-- Floating Stats Card -->
    <div class="mx-4 -mt-16 bg-white rounded-xl p-4 shadow-sm flex items-center relative z-10">
       <!-- Green Box -->
       <div class="bg-[#36B39C] w-28 rounded-lg p-3 text-white flex flex-col items-center justify-center mr-4 shrink-0 shadow-md">
          <div class="flex items-center space-x-1 mb-1 opacity-90">
             <Clock :size="12" />
             <span class="text-xs">总学时</span>
          </div>
          <span class="text-3xl font-bold">0</span>
       </div>
       
       <!-- Grid Stats -->
       <div class="flex-1 grid grid-cols-2 gap-y-4 gap-x-2">
          <div class="flex flex-col">
             <span class="text-[10px] text-gray-400 mb-0.5">已学课程</span>
             <span class="text-lg font-medium text-[#333]">0</span>
          </div>
          <div class="flex flex-col pl-2 border-l border-gray-100">
             <span class="text-[10px] text-gray-400 mb-0.5">收藏课程</span>
             <span class="text-lg font-medium text-[#333]">0</span>
          </div>
          <div class="flex flex-col">
             <span class="text-[10px] text-gray-400 mb-0.5">培训场次</span>
             <span class="text-lg font-medium text-[#333]">0</span>
          </div>
          <div class="flex flex-col pl-2 border-l border-gray-100">
             <span class="text-[10px] text-gray-400 mb-0.5">直播场次</span>
             <span class="text-lg font-medium text-[#333]">0</span>
          </div>
       </div>
    </div>

    <!-- Recently Watched -->
    <div class="px-4 mt-6">
       <div class="flex justify-between items-center mb-3">
          <span class="font-bold text-[#333]">最近观看</span>
          <div class="flex items-center text-xs text-gray-400">
             <span>更多</span>
             <ChevronRight :size="12" />
          </div>
       </div>
       <div class="bg-white rounded-xl p-8 flex flex-col items-center justify-center text-gray-300 space-y-2 border border-gray-50 shadow-sm">
          <FileText :size="48" stroke-width="1" class="opacity-30" />
          <span class="text-xs">还没有观看过课程哦~</span>
       </div>
    </div>

    <!-- Training In Progress -->
    <div class="px-4 mt-6">
       <div class="flex justify-between items-center mb-3">
          <span class="font-bold text-[#333]">正在培训</span>
          <div class="flex items-center text-xs text-gray-400">
             <span>更多</span>
             <ChevronRight :size="12" />
          </div>
       </div>
       <div class="bg-white rounded-xl p-8 flex flex-col items-center justify-center text-gray-300 space-y-2 border border-gray-50 shadow-sm">
          <FileText :size="48" stroke-width="1" class="opacity-30" />
          <span class="text-xs">还没有培训哦~</span>
       </div>
    </div>

    <!-- Open Courses -->
    <div class="px-4 mt-6">
       <div class="flex justify-between items-center mb-3">
          <span class="font-bold text-[#333]">公开课</span>
          <div class="flex items-center text-xs text-gray-400">
             <span>更多</span>
             <ChevronRight :size="12" />
          </div>
       </div>
       <div class="grid grid-cols-2 gap-3">
          <!-- Course Card 1 -->
          <div class="bg-white rounded-lg overflow-hidden shadow-sm flex flex-col">
             <div class="h-24 bg-purple-500 relative flex items-center justify-center">
                 <img src="https://picsum.photos/id/1/300/200" class="w-full h-full object-cover opacity-50" />
                 <PlayCircle class="absolute text-white/80" />
             </div>
             <div class="p-2">
                <h3 class="text-xs font-medium text-[#333] line-clamp-2">演出市场主体审批（备案）...</h3>
                <div class="mt-2 h-1.5 w-10 bg-gray-100 rounded-full"></div>
             </div>
          </div>
          <!-- Course Card 2 -->
          <div class="bg-white rounded-lg overflow-hidden shadow-sm flex flex-col">
             <div class="h-24 bg-blue-500 relative flex items-center justify-center">
                 <img src="https://picsum.photos/id/2/300/200" class="w-full h-full object-cover opacity-50" />
                 <PlayCircle class="absolute text-white/80" />
             </div>
             <div class="p-2">
                <h3 class="text-xs font-medium text-[#333] line-clamp-2">推行应用文化和旅游市场...</h3>
                <div class="mt-2 h-1.5 w-10 bg-gray-100 rounded-full"></div>
             </div>
          </div>
       </div>
    </div>

  </div>
</template>