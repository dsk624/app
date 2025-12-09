<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/user';

const router = useRouter();
const userStore = useUserStore();
</script>

<template>
  <div class="flex flex-col min-h-screen bg-white font-sans text-[#333]">
    <!-- Navbar -->
    <nav class="h-[50px] flex justify-between items-center px-4 bg-white relative shrink-0 z-10">
      <div class="w-10 h-full flex items-center cursor-pointer -ml-2" @click="router.back()">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="ml-2">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </div>
      <div class="text-[18px] font-medium text-black absolute left-1/2 -translate-x-1/2 tracking-wide">
        导游证
      </div>
      <div class="text-[14px] text-[#6fa69c] flex items-center gap-1 cursor-pointer">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#6fa69c" stroke="#6fa69c" stroke-width="2" class="mt-0.5">
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
          <line x1="4" y1="22" x2="4" y2="15"></line>
        </svg>
        <span class="font-medium">APP开启</span>
      </div>
    </nav>

    <!-- Rank Title Area -->
    <div class="flex items-center justify-center w-full py-[22px] px-0 overflow-hidden">
      <div class="h-[16px] bg-[#9cb988] flex-1 mr-[12px] rounded-r-[2px]"></div>
      <!-- KaiTi Font -->
      <div class="font-kaiti text-[54px] text-[#9cb988] leading-none tracking-[4px] pt-1 font-bold text-shadow-bold transform scale-y-105">
        {{ userStore.userInfo.rank }}
      </div>
      <div class="h-[16px] bg-[#9cb988] flex-1 ml-[12px] rounded-l-[2px]"></div>
    </div>

    <!-- Green Card Section -->
    <section class="bg-[#9cb988] w-full py-[60px] pb-[70px] flex flex-col items-center text-white shadow-sm">
      <div class="bg-white w-[140px] h-[196px] mb-[18px] overflow-hidden border-[3px] border-white shadow-md">
        <img 
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop" 
          alt="User Photo" 
          class="w-full h-full object-cover block"
        />
      </div>
      <div class="text-[28px] font-semibold mb-[4px] tracking-[2px] font-sans drop-shadow-md">
        {{ userStore.userInfo.name }}
      </div>
      <div class="text-[14px] font-normal uppercase opacity-90 tracking-[1px] font-arial drop-shadow-sm">
        DUAN SHUAI
      </div>
    </section>

    <!-- Text Info Section -->
    <section class="px-[20px] pt-[70px] pb-[40px] text-center flex-1 bg-white">
      <div class="mb-[50px]">
        <div class="text-[#9cb988] text-[16px] mb-[10px] font-medium tracking-wider">导游证号</div>
        <div class="text-[#333] text-[20px] font-normal font-sans tracking-wide">{{ userStore.userInfo.licenseNo }}</div>
      </div>
      <div class="mb-[20px]">
        <div class="text-[#9cb988] text-[16px] mb-[10px] font-medium tracking-wider">导游语种</div>
        <div class="text-[#333] text-[20px] font-normal font-sans tracking-wide">{{ userStore.userInfo.language }}</div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-[#9cb988] text-white text-center py-[28px] text-[13px] tracking-[1.5px] font-medium mt-auto">
      中华人民共和国文化和旅游部监制
    </footer>
  </div>
</template>

<style scoped>
:root {
    --primary-green: #9cb988;
    --link-color: #6fa69c;
}
.font-qingke {
    font-family: 'ZCOOL QingKe HuangYou', sans-serif; 
}
.font-kaiti {
    font-family: "KaiTi", "STKaiti", "楷体", "BiauKai", serif;
}
.text-shadow-bold {
    text-shadow: 1px 0 0 currentColor;
}
</style>