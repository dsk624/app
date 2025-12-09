<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ChevronLeft } from 'lucide-vue-next';

const router = useRouter();
</script>

<template>
  <div class="min-h-screen bg-[#F5F6F8] font-sans text-[#333]">
    <!-- Navbar -->
    <div class="bg-[#F5F6F8] px-4 h-[44px] flex items-center justify-between sticky top-0 z-10">
      <button class="-ml-2 w-10 h-full flex items-center justify-center active:opacity-60" @click="router.back()">
         <ChevronLeft :size="24" class="text-[#333]" stroke-width="1.5" />
      </button>
      <span class="text-[17px] font-medium text-[#333] absolute left-1/2 -translate-x-1/2">微信公众号</span>
      <div class="w-8"></div>
    </div>

    <!-- Main Card -->
    <div class="mx-3 mt-2 bg-white rounded-lg pt-10 pb-12 px-6 shadow-sm flex flex-col items-center">
      
      <!-- Title -->
      <h1 class="text-[32px] font-serif text-[#1a1a1a] tracking-widest font-medium mb-1">关注</h1>
      
      <!-- Decorative Divider -->
      <div class="flex items-center justify-center w-24 mb-8 opacity-40">
        <div class="h-[1px] bg-teal-700 flex-1"></div>
        <div class="w-1.5 h-1.5 border border-teal-700 rotate-45 mx-1.5"></div>
        <div class="h-[1px] bg-teal-700 flex-1"></div>
      </div>

      <!-- Description Text -->
      <p class="text-[15px] leading-8 text-[#333] text-justify tracking-wide mb-10 font-sans">
        请让当前旅行团中的游客：搜索并关注“全国旅游监管服务”微信公众号或扫描下面的二维码。在你修改了行程后，系统会群发通知团内的游客。
      </p>

      <!-- QR Code Container -->
      <div class="relative w-[180px] h-[180px]">
        <!-- QR Code SVG (Simulated) -->
        <svg viewBox="0 0 100 100" class="w-full h-full" fill="#1a1a1a" shape-rendering="crispEdges">
           <rect width="100" height="100" fill="white" />
           
           <!-- Top Left Marker -->
           <rect x="10" y="10" width="20" height="20" stroke="black" stroke-width="4" fill="none"/>
           <rect x="17" y="17" width="6" height="6" fill="black"/>
           
           <!-- Top Right Marker -->
           <rect x="70" y="10" width="20" height="20" stroke="black" stroke-width="4" fill="none"/>
           <rect x="77" y="17" width="6" height="6" fill="black"/>
           
           <!-- Bottom Left Marker -->
           <rect x="10" y="70" width="20" height="20" stroke="black" stroke-width="4" fill="none"/>
           <rect x="17" y="77" width="6" height="6" fill="black"/>

           <!-- Random Data Patterns -->
           <rect x="40" y="10" width="5" height="5" /> <rect x="50" y="10" width="5" height="5" />
           <rect x="45" y="15" width="5" height="5" /> <rect x="60" y="15" width="5" height="5" />
           <rect x="35" y="25" width="5" height="5" /> <rect x="55" y="25" width="5" height="5" />
           <rect x="40" y="35" width="5" height="5" /> <rect x="80" y="35" width="5" height="5" />
           <rect x="50" y="45" width="5" height="5" /> <rect x="70" y="45" width="5" height="5" />
           <rect x="10" y="45" width="5" height="5" /> <rect x="25" y="45" width="5" height="5" />
           <rect x="60" y="60" width="5" height="5" /> <rect x="80" y="60" width="5" height="5" />
           <rect x="45" y="70" width="5" height="5" /> <rect x="65" y="70" width="5" height="5" />
           <rect x="55" y="80" width="5" height="5" /> <rect x="85" y="80" width="5" height="5" />
           <rect x="40" y="85" width="5" height="5" /> <rect x="75" y="85" width="5" height="5" />
           <rect x="50" y="90" width="5" height="5" /> <rect x="60" y="90" width="5" height="5" />
        </svg>

        <!-- Center Logo Overlay -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-lg p-0.5 shadow-sm border border-gray-100 flex items-center justify-center">
           <img 
             src="https://img.icons8.com/color/96/unicorn.png" 
             alt="Logo" 
             class="w-full h-full object-contain p-1"
           />
        </div>
      </div>

      <!-- Caption -->
      <div class="mt-4 text-[13px] text-[#333] tracking-wide font-medium">
        “全国旅游监管服务”公众号
      </div>

    </div>
  </div>
</template>