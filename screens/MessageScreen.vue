<script setup lang="ts">
import { ref } from 'vue';
import { UserPlus, ChevronRight } from 'lucide-vue-next';

const message = ref('');
</script>

<template>
  <div class="min-h-screen bg-[#F5F6F8] pb-24 font-sans">
    <!-- Header -->
    <div class="bg-white px-4 pt-12 pb-3 flex justify-between items-center sticky top-0 z-30 shadow-[0_1px_0px_rgba(0,0,0,0.05)]">
      <div class="w-10"></div> 
      <span class="text-[17px] font-medium text-[#333]">群发消息</span>
      <button class="text-primary font-medium text-[15px] px-2">发送</button>
    </div>

    <div class="p-4 space-y-4">
      <!-- Recipient Input -->
      <div class="bg-white rounded-lg px-4 py-4 flex items-center justify-between shadow-sm">
        <div class="flex items-center text-[15px] flex-1">
          <span class="text-[#333] font-medium mr-2">接收人：</span>
          <span class="text-gray-400 font-normal">请添加</span>
        </div>
        <UserPlus class="text-[#333]" :size="20" :stroke-width="1.5" />
      </div>

      <!-- Message Content -->
      <div class="bg-white rounded-lg p-4 shadow-sm h-72 flex flex-col">
        <div class="flex justify-between items-center mb-3">
          <span class="text-[#333] font-medium text-[15px]">消息内容</span>
          <div class="flex items-center text-[#333] text-[13px] cursor-pointer active:opacity-70">
            <span>选择消息模版</span>
            <ChevronRight :size="14" class="text-primary ml-1" />
          </div>
        </div>
        
        <textarea
          class="flex-1 w-full resize-none outline-none text-[14px] placeholder-gray-400 leading-relaxed"
          placeholder="请输入您要发送的内容"
          v-model="message"
        ></textarea>
        
        <div class="text-right text-gray-400 text-xs mt-2">
          {{ message.length }}/200
        </div>
      </div>

      <!-- Info / QR Section -->
      <div class="mt-10 flex flex-row items-start justify-between px-2">
        <div class="flex-1 pr-6 pt-1">
           <div class="flex items-center space-x-2 mb-3 text-gray-400">
              <span class="text-[13px]">💡 友情提示</span>
           </div>
           <p class="text-[12px] text-gray-400 leading-6 text-justify">
             团员扫描二维码关注“全国旅游监管服务”公众号，即可在公众号里接收导游推送的群发消息哦！
           </p>
        </div>
        
        <div class="bg-white p-1.5 rounded-md shadow-sm border border-gray-100 shrink-0">
           <!-- Inline SVG QR Code -->
           <div class="w-24 h-24 relative bg-white">
             <svg viewBox="0 0 100 100" class="w-full h-full" fill="#333">
               <rect x="0" y="0" width="100" height="100" fill="white" />
               <!-- Markers -->
               <rect x="10" y="10" width="20" height="20" stroke="black" stroke-width="5" fill="none"/>
               <rect x="17.5" y="17.5" width="5" height="5" fill="black"/>
               <rect x="70" y="10" width="20" height="20" stroke="black" stroke-width="5" fill="none"/>
               <rect x="77.5" y="17.5" width="5" height="5" fill="black"/>
               <rect x="10" y="70" width="20" height="20" stroke="black" stroke-width="5" fill="none"/>
               <rect x="17.5" y="77.5" width="5" height="5" fill="black"/>
               <!-- Dots -->
               <rect x="40" y="10" width="5" height="5" fill="black"/>
               <rect x="50" y="15" width="5" height="5" fill="black"/>
               <rect x="60" y="10" width="5" height="5" fill="black"/>
               <rect x="40" y="25" width="5" height="5" fill="black"/>
               <rect x="55" y="25" width="5" height="5" fill="black"/>
               <rect x="45" y="35" width="5" height="5" fill="black"/>
               <rect x="70" y="40" width="5" height="5" fill="black"/>
               <rect x="80" y="50" width="5" height="5" fill="black"/>
               <rect x="40" y="60" width="5" height="5" fill="black"/>
               <rect x="55" y="70" width="5" height="5" fill="black"/>
               <rect x="75" y="75" width="5" height="5" fill="black"/>
               <rect x="85" y="85" width="5" height="5" fill="black"/>
               <rect x="40" y="80" width="5" height="5" fill="black"/>
               <rect x="50" y="90" width="5" height="5" fill="black"/>
             </svg>
             
             <!-- Center Logo -->
             <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full flex items-center justify-center p-0.5 shadow-sm border border-gray-100">
                <div class="w-full h-full bg-blue-600 rounded-full flex items-center justify-center">
                  <span class="text-[8px] text-white">旅</span>
                </div>
             </div>
           </div>
        </div>
      </div>

    </div>
  </div>
</template>