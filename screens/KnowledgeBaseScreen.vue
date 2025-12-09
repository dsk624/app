<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ChevronLeft, ChevronRight, BookOpenText } from 'lucide-vue-next';

const router = useRouter();
</script>

<template>
  <div class="h-full overflow-y-auto bg-[#F5F6F8] font-sans">
    <!-- Navbar -->
    <div class="bg-white px-4 h-[44px] flex items-center justify-between sticky top-0 z-10 shadow-[0_1px_0px_rgba(0,0,0,0.05)]">
      <button class="-ml-2 w-10 h-full flex items-center justify-center active:opacity-60" @click="router.back()">
         <ChevronLeft :size="24" class="text-[#333]" stroke-width="1.5" />
      </button>
      <span class="text-[17px] font-medium text-[#333] absolute left-1/2 -translate-x-1/2">知识库</span>
      <div class="w-8"></div>
    </div>

    <!-- Content List -->
    <div class="mt-3 bg-white">
       <div 
         class="pl-4 pr-4 py-4 flex justify-between items-center active:bg-gray-50 cursor-pointer"
       >
          <div class="flex items-center gap-3">
            <BookOpenText :size="22" class="text-primary" stroke-width="1.5" />
            <span class="text-[#333] text-[16px]">法律法规</span>
          </div>
          <ChevronRight :size="20" class="text-gray-300" stroke-width="1.5" />
       </div>
    </div>
  </div>
</template>