<script setup lang="ts">
import TabBar from '../components/TabBar.vue';
</script>

<template>
  <div class="h-full w-full relative bg-gray-50">
    <!-- Main content scrollable area -->
    <!-- pb-20 ensures content is not hidden behind the TabBar (h-16) -->
    <div class="h-full w-full overflow-y-auto overflow-x-hidden pb-20 scroll-smooth">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
    
    <!-- TabBar fixed at the bottom of this container -->
    <TabBar class="absolute bottom-0 left-0 w-full z-50" />
  </div>
</template>