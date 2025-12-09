<script setup lang="ts">
import { Briefcase, Calendar, Bell, User } from 'lucide-vue-next';
import { useRouter, useRoute } from 'vue-router';
import { computed } from 'vue';

const router = useRouter();
const route = useRoute();

const tabs = [
  { id: 'home', path: '/home', label: '行程', icon: Briefcase },
  { id: 'calendar', path: '/calendar', label: '日历', icon: Calendar },
  { id: 'message', path: '/message', label: '群发消息', icon: Bell },
  { id: 'profile', path: '/profile', label: '我的', icon: User },
];

const isActive = (path: string) => {
  return route.path.startsWith(path);
};

const navigate = (path: string) => {
  router.push(path);
};
</script>

<template>
  <div class="bg-white border-t border-gray-100 pb-safe pt-2 px-6 flex justify-between items-center h-16 shadow-[0_-4px_10px_rgba(0,0,0,0.03)]">
    <button
      v-for="item in tabs"
      :key="item.id"
      @click="navigate(item.path)"
      class="flex flex-col items-center justify-center w-16"
    >
      <component 
        :is="item.icon"
        :size="24"
        class="mb-1 transition-colors"
        :class="isActive(item.path) ? 'text-primary fill-current' : 'text-gray-400'"
        :stroke-width="2"
        :fill="isActive(item.path) ? 'currentColor' : 'none'"
      />
      <span 
        class="text-[10px]"
        :class="isActive(item.path) ? 'text-primary font-medium' : 'text-gray-400'"
      >
        {{ item.label }}
      </span>
    </button>
  </div>
</template>