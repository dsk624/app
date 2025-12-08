<script setup lang="ts">
import { Briefcase, Calendar, Bell, User } from 'lucide-vue-next';
import { Tab } from '../types';

defineProps<{
  activeTab: Tab
}>();

const emit = defineEmits<{
  (e: 'update:activeTab', tab: Tab): void
}>();

const tabs = [
  { id: Tab.HOME, label: '行程', icon: Briefcase },
  { id: Tab.CALENDAR, label: '日历', icon: Calendar },
  { id: Tab.MESSAGE, label: '群发消息', icon: Bell },
  { id: Tab.PROFILE, label: '我的', icon: User },
];
</script>

<template>
  <div class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 pb-safe pt-2 px-6 flex justify-between items-center z-50 h-16 shadow-[0_-4px_10px_rgba(0,0,0,0.03)]">
    <button
      v-for="item in tabs"
      :key="item.id"
      @click="emit('update:activeTab', item.id)"
      class="flex flex-col items-center justify-center w-16"
    >
      <component 
        :is="item.icon"
        :size="24"
        class="mb-1 transition-colors"
        :class="activeTab === item.id ? 'text-primary fill-current' : 'text-gray-400'"
        :stroke-width="2"
        :fill="activeTab === item.id ? 'currentColor' : 'none'"
      />
      <span 
        class="text-[10px]"
        :class="activeTab === item.id ? 'text-primary font-medium' : 'text-gray-400'"
      >
        {{ item.label }}
      </span>
    </button>
  </div>
</template>