<script setup lang="ts">
import TabBar from '../components/TabBar.vue';
</script>

<template>
  <div class="h-full relative pb-16"> <!-- Padding bottom for TabBar -->
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    
    <TabBar class="absolute bottom-0 left-0 w-full z-50" />
  </div>
</template>