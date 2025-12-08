<script setup lang="ts">
import { ref } from 'vue';
import { Tab } from './types';
import TabBar from './components/TabBar.vue';
import HomeScreen from './screens/HomeScreen.vue';
import CalendarScreen from './screens/CalendarScreen.vue';
import MessageScreen from './screens/MessageScreen.vue';
import ProfileScreen from './screens/ProfileScreen.vue';
import LicenseScreen from './screens/LicenseScreen.vue';

const activeTab = ref<Tab>(Tab.HOME);
const subPage = ref<string | null>(null);

const handleNavigate = (screen: string) => {
  subPage.value = screen;
};

const handleBack = () => {
  subPage.value = null;
};
</script>

<template>
  <div class="max-w-md mx-auto min-h-screen bg-gray-50 shadow-2xl relative overflow-hidden">
    <!-- Sub Page Rendering -->
    <LicenseScreen v-if="subPage === 'license'" @back="handleBack" />

    <!-- Main Tabs Rendering -->
    <template v-else>
      <HomeScreen v-if="activeTab === Tab.HOME" />
      <CalendarScreen v-else-if="activeTab === Tab.CALENDAR" />
      <MessageScreen v-else-if="activeTab === Tab.MESSAGE" />
      <ProfileScreen v-else-if="activeTab === Tab.PROFILE" @navigate="handleNavigate" />
      
      <!-- Tab Bar -->
      <TabBar :activeTab="activeTab" @update:activeTab="(val) => activeTab = val" />
    </template>
  </div>
</template>