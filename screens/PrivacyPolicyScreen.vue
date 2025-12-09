<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ChevronLeft } from 'lucide-vue-next';

const router = useRouter();
</script>

<template>
  <div class="h-full overflow-y-auto bg-white font-sans text-[#333]">
    <!-- Navbar -->
    <div class="bg-white px-4 h-[44px] flex items-center justify-between sticky top-0 z-10 shadow-[0_1px_0px_rgba(0,0,0,0.05)]">
      <button class="-ml-2 w-10 h-full flex items-center justify-center active:opacity-60" @click="router.back()">
         <ChevronLeft :size="24" class="text-[#333]" stroke-width="1.5" />
      </button>
      <span class="text-[17px] font-medium text-[#333] absolute left-1/2 -translate-x-1/2">隐私政策</span>
      <div class="w-8"></div>
    </div>

    <!-- Content -->
    <div class="p-5 pb-10">
      <h1 class="text-[20px] font-bold text-center mb-6 mt-2">全国导游之家App隐私政策</h1>
      
      <div class="text-[14px] leading-relaxed text-[#333] space-y-6 text-justify">
        <p>
          中华人民共和国文化和旅游部（以下称“我们”）作为全国导游之家的运营者，深知个人信息对用户（“您”）的重要性，我们将严格依据法律法规以及遵循正当、合法、必要的原则，保护您的个人信息及隐私安全。
        </p>
        <p>
          本概要将帮助您直观、简明地了解我们是如何收集、处理和保护您的个人信息以及如何保护您的隐私安全。
        </p>

        <!-- Section 1 -->
        <section>
          <h2 class="font-bold text-[15px] mb-2">1. 适用范围</h2>
          <div class="space-y-2 text-gray-600">
            <p>(a) 在您注册本应用帐号时，您根据本应用要求提供的个人注册信息；</p>
            <p>(b) 在您使用本应用网络服务，或访问本应用平台网页时，本应用自动接收并记录的您的浏览器和计算机上的信息，包括但不限于您的IP地址、浏览器的类型、使用的语言、访问日期和时间、软硬件特征信息及您需求的网页记录等数据；</p>
            <p>(c) 本应用通过合法途径从商业伙伴处取得的用户个人数据。</p>
            <p class="mt-2 text-[#333]">您了解并同意，以下信息不适用本隐私权政策：</p>
            <p>(a) 您在使用本应用平台提供的搜索服务时输入的关键字信息；</p>
            <p>(b) 本应用收集到的您在本应用发布的有关信息数据，包括但不限于参与活动、成交信息及评价详情；</p>
            <p>(c) 违反法律规定或违反本应用规则行为及本应用已对您采取的措施。</p>
          </div>
        </section>

        <!-- Section 2 -->
        <section>
          <h2 class="font-bold text-[15px] mb-2">2. 信息共享与使用</h2>
          <p class="mb-3">
            我们非常重视个人信息保护，除法律另有规定外，我们不会与任何公司、组织和个人共享您的个人信息。您理解并确认，为了向您提供更完善、优质的产品和服务，我们的某些服务将由关联公司或授权合作伙伴提供。我们会要求关联公司和授权合作伙伴遵守信息保护义务并签署保密协议，您可以查看目前我们服务中包含的第三方合作伙伴。
          </p>
          
          <div class="pl-2 border-l-2 border-gray-100 space-y-4">
            <div>
              <h3 class="font-bold text-sm">友盟</h3>
              <p class="text-xs text-gray-500 mt-1">运营方：友盟同欣（北京）科技有限公司、北京锐讯灵通科技有限公司</p>
              <p class="text-xs text-gray-500 mt-1">功能：用于上报报错信息给开发者，让开发者能够快速的定位错误位置。</p>
              <p class="text-xs text-gray-500 mt-1">收集个人信息类型：设备信息（IMEI, MAC地址, Android ID, IDFA, OPENUDID, GUID, SIM卡IMSI）、地理位置、运行中进程、外部文件存储目录信息、移动设备国家代码MCC、移动设备网络代码MNC。</p>
              <p class="text-xs text-blue-500 mt-1 break-all">隐私权政策链接：https://www.umeng.com/policy</p>
            </div>

            <div>
              <h3 class="font-bold text-sm">高德位置服务</h3>
              <p class="text-xs text-gray-500 mt-1">运营方：高德软件有限公司</p>
              <p class="text-xs text-gray-500 mt-1">功能：获取位置信息，以便监管部门进行监管。</p>
              <p class="text-xs text-gray-500 mt-1">收集个人信息类型：位置信息（包括GNSS信息、IP地址、WLAN热点、基站信息、蓝牙设备以及其他能够用于定位的传感器信息）、设备信息（包括终端设备唯一标识符...）</p>
              <p class="text-xs text-blue-500 mt-1 break-all">https://lbs.amap.com/home/privacy</p>
            </div>
          </div>
        </section>

        <!-- Section 3 -->
        <section>
          <h2 class="font-bold text-[15px] mb-2">3. 基于系统权限的附加服务</h2>
          <p class="mb-3">
            为向您提供更便捷、更优质的产品及/或服务，努力提升您的体验，我们在向您提供的以下附加服务中可能会通过开启系统权限以收集和使用您的个人信息。如果您不同意开启相关权限，不会影响您使用我们的基本服务，但您可能无法获得这些附加服务给您带来的用户体验。
          </p>
          <p class="mb-3 font-medium">您可自行决定这些权限随时的开启或关闭。</p>
          
          <div class="space-y-3">
             <div>
                <span class="font-bold text-sm block">STORAGE</span>
                <span class="text-xs text-gray-500">权限功能说明：读写外部存储</span>
                <p class="text-xs text-gray-500">使用场景或目的：读写外部存储设备，存储或者获取应用需要的文件。</p>
             </div>
             <div>
                <span class="font-bold text-sm block">CAMERA</span>
                <span class="text-xs text-gray-500">权限功能说明：访问摄像头</span>
                <p class="text-xs text-gray-500">使用场景或目的：允许访问摄像头进行拍照和扫描二维码。</p>
             </div>
             <div>
                <span class="font-bold text-sm block">READ_PHONE_STATE</span>
                <span class="text-xs text-gray-500">权限功能说明：获取电话状态</span>
                <p class="text-xs text-gray-500">使用场景或目的：获取设备信息（IMEI、IMSI、手机号）。</p>
             </div>
             <div>
                <span class="font-bold text-sm block">LOCATION</span>
                <span class="text-xs text-gray-500">权限功能说明：获取位置信息</span>
                <p class="text-xs text-gray-500">使用场景或目的：获取位置信息，以便监管部门进行监管。</p>
             </div>
          </div>
        </section>

        <!-- Section 4 -->
        <section>
          <h2 class="font-bold text-[15px] mb-2">4. 信息披露</h2>
          <p>在如下情况下，本应用将依据您的个人意愿或法律的规定全部或部分的披露您的个人信息：</p>
          <div class="mt-2 space-y-2 text-gray-600">
            <p>(a) 经您事先同意，向第三方披露；</p>
            <p>(b) 为提供您所要求的产品和服务，而必须和第三方分享您的个人信息；</p>
            <p>(c) 根据法律的有关规定，或者行政或司法机构的要求，向第三方或者行政、司法机构披露；</p>
            <p>(d) 如您出现违反中国有关法律、法规或者本应用服务协议或相关规则的情况，需要向第三方披露；</p>
            <p>(e) 如您是适格的知识产权投诉人并已提起投诉，应被投诉人要求，向被投诉人披露，以便双方处理可能的权利纠纷；</p>
          </div>
        </section>

        <!-- Section 5 -->
        <section>
          <h2 class="font-bold text-[15px] mb-2">5. Cookie的使用</h2>
          <div class="space-y-2 text-gray-600">
            <p>(a) 在您未拒绝接受cookies的情况下，本应用会在您的计算机上设定或取用cookies，以便您能登录或使用依赖于cookies的本应用平台服务或功能。</p>
            <p>(b) 您有权选择接受或拒绝接受cookies。您可以通过修改浏览器设置的方式拒绝接受cookies。但如果您选择拒绝接受cookies，则您可能无法登录或使用依赖于cookies的本应用网络服务或功能。</p>
          </div>
        </section>

        <!-- Section 6 -->
        <section>
          <h2 class="font-bold text-[15px] mb-2">6. 信息安全</h2>
          <p class="text-gray-600">
            (a) 本应用帐号均有安全保护功能，请妥善保管您的用户名及密码信息。本应用将通过对用户密码进行加密等安全措施确保您的信息不丢失，不被滥用和变造。尽管有前述安全措施，但同时也请您注意在信息网络上不存在“完善的安全措施”。
          </p>
        </section>
        
         <!-- Section 7 -->
        <section>
          <h2 class="font-bold text-[15px] mb-2">7. 本隐私政策的更改</h2>
          <p class="text-gray-600">
            (a) 如果决定更改隐私政策，我们会在本政策中、本公司网站中以及我们认为适当的位置发布这些更改，以便您了解我们如何收集、使用您的个人信息，哪些人可以访问这些信息，以及在什么情况下我们会透露这些信息。
          </p>
        </section>
        
        <!-- Section 8 -->
        <section>
          <h2 class="font-bold text-[15px] mb-2">8. 联系我们</h2>
          <p class="text-gray-600">
            您可以通过【andriod@12301.cn】与我们联系（请您注明与【隐私保护】有关，并说明具体事实情况），需注意的是，我们可能不会回复与本政策或您的个人信息权利无关的问题。如果您对我们的回复不满意，特别是您认为我们的个人信息处理行为损害了您的合法权益，您还可以通过向被告住所地有管辖权的法院提起诉讼来寻求解决方案。
          </p>
        </section>

      </div>
    </div>
  </div>
</template>