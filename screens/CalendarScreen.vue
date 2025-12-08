<script setup lang="ts">
import { ref, computed } from 'vue';
import { ChevronLeft, ChevronRight } from 'lucide-vue-next';
import { CalendarDay } from '../types';

const weekDays = ['日', '一', '二', '三', '四', '五', '六'];
const today = new Date();

const monthOffset = ref(0);
const selectedDate = ref(today.toDateString());

const targetDate = computed(() => new Date(today.getFullYear(), today.getMonth() + monthOffset.value, 1));
const currentYear = computed(() => targetDate.value.getFullYear());
const currentMonth = computed(() => targetDate.value.getMonth());

const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

const days = computed<CalendarDay[]>(() => {
  const year = currentYear.value;
  const month = currentMonth.value;
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  
  const result: CalendarDay[] = [];
  
  // Empty slots
  for (let i = 0; i < firstDay; i++) {
    result.push({ day: '', isCurrentMonth: false });
  }
  
  // Days
  for (let i = 1; i <= daysInMonth; i++) {
    result.push({ 
      day: i, 
      isCurrentMonth: true,
      isToday: i === today.getDate() && monthOffset.value === 0
    });
  }
  return result;
});

const handlePrevMonth = () => {
  if (monthOffset.value > -3) {
    monthOffset.value--;
  }
};

const handleNextMonth = () => {
  if (monthOffset.value < 3) {
    monthOffset.value++;
  }
};

const handleDateClick = (day: number | string) => {
  if (typeof day === 'number') {
    const newDate = new Date(currentYear.value, currentMonth.value, day);
    selectedDate.value = newDate.toDateString();
  }
};

const isSelected = (day: number) => {
  const d = new Date(currentYear.value, currentMonth.value, day);
  return d.toDateString() === selectedDate.value;
};
</script>

<template>
  <div class="min-h-screen bg-white pb-24">
    <!-- Header -->
    <div class="bg-primary text-white pt-12 pb-4 px-4 text-center text-lg font-medium relative shadow-sm">
      <span>日历</span>
    </div>

    <!-- Month Navigation -->
    <div class="flex justify-between items-center px-6 py-4 text-textMain border-b border-gray-50 select-none">
      <div 
        @click="handlePrevMonth"
        class="flex items-center text-sm font-medium transition-colors"
        :class="monthOffset > -3 ? 'cursor-pointer text-gray-500 hover:text-primary' : 'text-gray-200 cursor-not-allowed'"
      >
        <ChevronLeft :size="18" />
        <span>上月</span>
      </div>
      
      <span class="text-lg font-bold text-[#333]">
        {{ currentYear }}年{{ currentMonth + 1 }}月
      </span>
      
      <div 
        @click="handleNextMonth"
        class="flex items-center text-sm font-medium transition-colors"
        :class="monthOffset < 3 ? 'cursor-pointer text-gray-500 hover:text-primary' : 'text-gray-200 cursor-not-allowed'"
      >
        <span>下月</span>
        <ChevronRight :size="18" />
      </div>
    </div>

    <!-- Calendar Grid -->
    <div class="px-4 mt-4">
      <!-- Week Header -->
      <div class="grid grid-cols-7 mb-4">
        <div v-for="d in weekDays" :key="d" class="text-center text-gray-400 text-sm font-medium">
          {{ d }}
        </div>
      </div>

      <!-- Days -->
      <div class="grid grid-cols-7 gap-y-4">
        <div 
          v-for="(dayObj, index) in days"
          :key="index" 
          class="flex flex-col items-center justify-center h-12 relative cursor-pointer"
          @click="handleDateClick(dayObj.day)"
        >
          <div 
            v-if="dayObj.day"
            class="w-9 h-9 flex items-center justify-center rounded-full text-[15px] font-medium transition-all duration-200"
            :class="typeof dayObj.day === 'number' && isSelected(dayObj.day) 
              ? 'bg-[#FF6B00] text-white shadow-md scale-110' 
              : 'text-[#333] hover:bg-gray-50'"
          >
            {{ dayObj.day }}
          </div>
        </div>
      </div>
    </div>

    <!-- Legend / Info -->
    <div class="px-6 mt-12 space-y-4">
      <div class="flex items-start space-x-3 text-xs text-gray-400">
         <span class="mt-0.5 text-[10px] scale-75">▶</span>
         <span>表示当天有带团，点击可查看带团详细信息</span>
      </div>
      <div class="flex items-start space-x-3 text-xs text-gray-400">
         <span class="text-base leading-none">📅</span>
         <span class="leading-relaxed">日历中展示了导游在企业承接的所有订单，点击未带团的日期可设置“休息”或“空闲”，设置后的状态会同步给各企业，便于游客下单。</span>
      </div>
    </div>
  </div>
</template>