<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ChevronLeft, ChevronRight } from 'lucide-vue-next';

const router = useRouter();

// Define the structure for the data groups to render them efficiently
const groups = [
  // Group 1: Personal Info
  [
    { label: '姓名', value: '郑丽' },
    { label: '拼音', value: 'ZHENGLI' },
    { label: '性别', value: '女' },
    { label: '出生日期', value: '1991.08.10' },
    { label: '血型', value: 'A型血', hasArrow: true },
    { label: '政治面貌', value: '中共党员', hasArrow: true },
    { label: '联系电话', value: '13187886760' },
    { label: '身份证号', value: '410225199108106129' },
    { label: '身份证有效期止', value: '2040-06-28' },
    { label: '民族', value: '汉族' },
    { label: '学历', value: '硕士' },
    { label: '毕业院校', value: '云南大学' },
    { label: '专业', value: '职业技术教育学' },
    { label: '特长', value: '' }, // Empty value as seen in screenshot
  ],
  // Group 2: License Info
  [
    { label: '导游证号', value: 'AKI7197S' },
    { label: '语种 1', value: '普通话' },
    { label: '等级', value: '初级' },
    { label: '等级证号', value: '-' },
    { label: '资格证号', value: 'DZG2019YN10239' },
    { label: '资格证发证日期', value: '-' },
    { label: '资格证发证地点', value: '-' },
    { label: '导游证发证日期', value: '2025.05.12' },
    { label: '所在地', value: '河南省郑州市' },
    { label: '发证机关', value: '河南省文化和旅游厅' },
  ],
  // Group 3: Agency & Permissions
  [
    { label: '所在机构', value: '河南省旅游协会导游分会' },
    { label: '出境领队资格', value: '否' },
    { label: '港澳领队资格', value: '否' },
  ]
];
</script>

<template>
  <div class="min-h-screen bg-[#F5F6F8] font-sans pb-10">
    <!-- Header -->
    <div class="bg-primary text-white h-[44px] flex items-center justify-between px-4 sticky top-0 z-20 shadow-sm">
      <button class="-ml-2 w-10 h-full flex items-center justify-center active:opacity-80" @click="router.back()">
        <ChevronLeft :size="24" stroke-width="2" />
      </button>
      <span class="text-[17px] font-medium absolute left-1/2 -translate-x-1/2 tracking-wide">基本资料</span>
      <button class="text-[14px] font-medium active:opacity-80">资料管理</button>
    </div>

    <!-- Content List -->
    <div class="p-3 space-y-3">
      
      <!-- Loop through groups -->
      <div v-for="(group, groupIndex) in groups" :key="groupIndex" class="bg-white rounded-lg overflow-hidden shadow-sm">
        
        <!-- Loop through items in group -->
        <div 
          v-for="(item, itemIndex) in group" 
          :key="itemIndex"
          class="flex justify-between items-center min-h-[50px] px-4 py-3 border-b border-gray-50 last:border-0"
        >
          <!-- Label -->
          <span class="text-[#666] text-[15px] shrink-0 mr-4">{{ item.label }}</span>
          
          <!-- Value & Arrow -->
          <div class="flex items-center justify-end text-right overflow-hidden">
            <span class="text-[#333] text-[15px] truncate">{{ item.value }}</span>
            <ChevronRight 
              v-if="item.hasArrow" 
              :size="16" 
              class="text-gray-300 ml-1 shrink-0" 
            />
            <!-- Placeholder for alignment if no arrow, to keep visuals consistent if needed, 
                 though screenshot suggests right-alignment simply flows to the end -->
          </div>
        </div>

      </div>

    </div>
  </div>
</template>