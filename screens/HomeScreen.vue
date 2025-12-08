<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { ScanLine, MessageSquareMore, CloudSun } from 'lucide-vue-next';

const currentDate = ref(new Date());
let timer: any = null;

onMounted(() => {
  timer = setInterval(() => {
    currentDate.value = new Date();
  }, 60000);
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});

const day = computed(() => currentDate.value.getDate());
const year = computed(() => currentDate.value.getFullYear());
const month = computed(() => currentDate.value.getMonth() + 1);
const weekDay = computed(() => {
  const days = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
  return days[currentDate.value.getDay()];
});
</script>

<template>
  <div class="relative h-screen w-full overflow-hidden bg-gray-900">
    <!-- Background Image -->
    <img 
      src="https://picsum.photos/id/29/800/1200" 
      alt="Background" 
      class="absolute inset-0 w-full h-[70%] object-cover"
    />
    
    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent h-[40%]"></div>

    <!-- Content Layer -->
    <div class="relative z-10 flex flex-col h-full">
      <!-- Header -->
      <div class="flex justify-between items-center px-5 pt-12 pb-4 text-white">
        <ScanLine :size="26" :stroke-width="1.5" />
        <span class="text-[17px] font-medium tracking-wide">首页</span>
        <MessageSquareMore :size="26" :stroke-width="1.5" />
      </div>

      <!-- Date & Weather Section -->
      <div class="px-6 mt-10 text-white select-none">
        <div class="flex items-start">
           <span class="text-[8px] font-bold mr-1 mt-2">"</span>
        </div>
        <div class="flex items-baseline -mt-4">
          <span class="text-[76px] font-bold font-sans leading-none tracking-tighter">{{ day }}</span>
          <div class="flex flex-col text-[13px] font-medium opacity-90 ml-2 mb-2">
            <span class="tracking-wider">日 / {{ weekDay }} / {{ year }} 年 {{ month }} 月</span>
          </div>
        </div>
        
        <div class="w-full h-px bg-white/30 my-2"></div>

        <div class="flex items-center mt-2 space-x-2">
          <CloudSun :size="18" class="text-white fill-current" />
          <span class="text-[13px] font-medium tracking-wide">晴 / 20-28</span>
        </div>
      </div>

      <!-- White Card Section -->
      <div class="flex-1 mt-auto mx-3 mb-3 bg-gradient-to-b from-white/95 to-white rounded-[2rem] backdrop-blur-md pt-16 px-4 pb-20 flex flex-col items-center shadow-[0_0px_20px_rgba(0,0,0,0.2)]">
          
          <!-- Plane Illustration & Status Text -->
          <div class="w-full relative h-auto mb-4 flex justify-center items-center mt-2">
              <div class="relative w-full max-w-[340px]">
                  <img 
                      src="https://img.icons8.com/clouds/500/airplane-take-off.png"
                      alt="Current Status" 
                      class="w-full h-auto object-contain drop-shadow-sm"
                  />
                  
                  <!-- Text Overlay -->
                  <div class="absolute top-[65%] right-2 flex flex-col items-start z-10">
                      <span class="text-[#2E8B57] font-bold text-[17px] tracking-wide drop-shadow-sm" style="font-family: 'Microsoft YaHei', 'SimHei', sans-serif">
                          暂无当前执业信息
                      </span>
                      <div class="flex items-center mt-1 w-full pl-0.5">
                          <div class="w-1.5 h-1.5 border-[1.5px] border-[#4DB6AC] mr-1 shrink-0 bg-white/50"></div>
                          <div class="h-[2px] w-36 bg-[#4DB6AC]"></div>
                      </div>
                  </div>
              </div>
          </div>

      </div>
    </div>
  </div>
</template>