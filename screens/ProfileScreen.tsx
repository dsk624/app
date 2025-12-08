import React from 'react';
import { 
  ChevronRight, 
  User, 
  Settings, 
  ShieldCheck, 
  MessageCircle,
  Award,
  FileBadge,
  CreditCard,
  Power,
  FilePenLine,
  Contact,
  ClipboardList,
  Leaf,
  MonitorPlay,
  Database,
  IdCard,
  NotebookPen
} from 'lucide-react';

const ProfileScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F5F6F8] pb-24 relative overflow-y-auto">
      {/* Green Header Background */}
      <div className="bg-primary h-64 w-full absolute top-0 left-0 z-0 rounded-b-[2rem]"></div>

      <div className="relative z-10 pt-14">
        {/* User Profile Info */}
        <div className="px-6 flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-white p-0.5 overflow-hidden border-2 border-white/30 shrink-0">
            <img src="https://picsum.photos/id/64/200/200" alt="Avatar" className="w-full h-full rounded-full object-cover" />
          </div>
          <div className="text-white flex-1">
            <div className="flex flex-col">
               <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold tracking-wide">郑丽</h2>
                  <div className="flex space-x-0.5">
                    {[1, 2, 3].map(i => (
                      <span key={i} className="text-yellow-400 text-sm">★</span>
                    ))}
                  </div>
               </div>
               <p className="text-sm opacity-90 mt-1 font-medium tracking-wide">13187886760</p>
            </div>
          </div>
        </div>

        {/* Level Banner */}
        <div className="mx-4 relative z-20">
          <div className="bg-[#1A1A1A] rounded-t-xl p-4 flex justify-between items-center h-14 shadow-lg overflow-hidden">
             {/* Subtle pattern overlay could go here */}
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
             
             <div className="flex items-center space-x-2 text-[#E5CFA0] relative z-10">
               <User size={14} fill="#E5CFA0" />
               <span className="font-medium text-sm">初级 (当前等级)</span>
             </div>
             <div className="flex items-center text-[#E5CFA0] text-xs opacity-90 relative z-10">
               <span>查看导游信息</span>
               <ChevronRight size={12} className="ml-1" />
             </div>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white mx-0 rounded-t-2xl shadow-sm -mt-2 pt-2 relative z-10 pb-6">
            
            {/* Grid Menu - Icons Green */}
            <div className="grid grid-cols-4 py-6 border-b border-gray-100">
               <div className="flex flex-col items-center justify-center space-y-3 cursor-pointer active:opacity-70">
                  <IdCard className="text-primary" size={28} strokeWidth={1.5} />
                  <span className="text-[#333] text-xs font-medium">基本资料</span>
               </div>
               <div className="flex flex-col items-center justify-center space-y-3 cursor-pointer active:opacity-70">
                  <NotebookPen className="text-primary" size={28} strokeWidth={1.5} />
                  <span className="text-[#333] text-xs font-medium">执业记录</span>
               </div>
               <div className="flex flex-col items-center justify-center space-y-3 cursor-pointer active:opacity-70">
                  <Award className="text-primary" size={28} strokeWidth={1.5} />
                  <span className="text-[#333] text-xs font-medium">奖惩记录</span>
               </div>
               <div className="flex flex-col items-center justify-center space-y-3 cursor-pointer active:opacity-70">
                  <Leaf className="text-primary" size={28} strokeWidth={1.5} />
                  <span className="text-[#333] text-xs font-medium">游客评价</span>
               </div>
            </div>

            {/* List Menu - Icons Orange */}
            <div className="mt-2 pl-4">
               {[
                 { label: '导游证', icon: Contact, color: 'text-[#FF7F50]' }, // Contact often resembles ID card portrait
                 { label: '电子证照', icon: FileBadge, color: 'text-[#FF7F50]' },
                 { label: '在线培训', icon: MonitorPlay, color: 'text-[#FF7F50]' },
                 { label: '微信公众号', icon: MessageCircle, color: 'text-[#FF7F50]' },
                 { label: '知识库', icon: Database, color: 'text-[#FF7F50]' },
                 { label: '隐私政策', icon: ShieldCheck, color: 'text-[#FF7F50]' },
                 { label: '修改密码和手机号', icon: FilePenLine, color: 'text-[#FF7F50]' },
                 { label: '退出登录', icon: Power, color: 'text-[#FF7F50]' },
               ].map((item, idx) => (
                 <div key={idx} className="flex items-center justify-between py-4 pr-4 border-b border-gray-50 active:bg-gray-50 last:border-0 cursor-pointer">
                    <div className="flex items-center space-x-3">
                       <item.icon className={item.color} size={20} strokeWidth={1.5} />
                       <span className="text-[#333] text-[15px]">{item.label}</span>
                    </div>
                    <ChevronRight className="text-gray-300" size={18} />
                 </div>
               ))}
            </div>

            {/* Danger Button */}
            <div className="px-4 mt-8 mb-4">
               <button className="w-full bg-[#FF4D4F] text-white py-3 rounded-full text-[15px] font-medium shadow-[0_4px_14px_rgba(255,77,79,0.3)] tracking-wide active:scale-[0.99] transition-transform">
                 注销用户
               </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;