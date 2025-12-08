import React, { useState, useEffect } from 'react';
import { ScanLine, MessageSquareMore, CloudSun } from 'lucide-react';

const HomeScreen: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    // Update date on mount to ensure accuracy
    setCurrentDate(new Date());
    
    // Optional: Update every minute to keep it fresh if app stays open
    const timer = setInterval(() => setCurrentDate(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  // Format date parts
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const weekDayIndex = currentDate.getDay();
  const weekDays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
  const weekDay = weekDays[weekDayIndex];

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-900">
      {/* Background Image */}
      <img 
        src="https://picsum.photos/id/29/800/1200" 
        alt="Background" 
        className="absolute inset-0 w-full h-[70%] object-cover"
      />
      
      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent h-[40%]"></div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-between items-center px-5 pt-12 pb-4 text-white">
          <ScanLine size={26} strokeWidth={1.5} />
          <span className="text-[17px] font-medium tracking-wide">首页</span>
          <MessageSquareMore size={26} strokeWidth={1.5} />
        </div>

        {/* Date & Weather Section */}
        <div className="px-6 mt-10 text-white select-none">
          <div className="flex items-start">
             <span className="text-[8px] font-bold mr-1 mt-2">"</span>
          </div>
          <div className="flex items-baseline -mt-4">
            <span className="text-[76px] font-bold font-sans leading-none tracking-tighter">{day}</span>
            <div className="flex flex-col text-[13px] font-medium opacity-90 ml-2 mb-2">
              <span className="tracking-wider">日 / {weekDay} / {year} 年 {month} 月</span>
            </div>
          </div>
          
          <div className="w-full h-px bg-white/30 my-2"></div>

          <div className="flex items-center mt-2 space-x-2">
            <CloudSun size={18} className="text-white fill-current" />
            <span className="text-[13px] font-medium tracking-wide">晴 / 20-28</span>
          </div>
        </div>

        {/* White Card Section - With margins from outer border */}
        <div className="flex-1 mt-auto mx-3 mb-3 bg-gradient-to-b from-white/95 to-white rounded-[2rem] backdrop-blur-md pt-16 px-4 pb-20 flex flex-col items-center shadow-[0_0px_20px_rgba(0,0,0,0.2)]">
            
            {/* Plane Illustration */}
            <div className="w-full relative h-48 mb-4 flex justify-center items-center">
               <svg width="320" height="180" viewBox="0 0 320 180" className="drop-shadow-lg">
                 {/* Plane Body */}
                 <defs>
                   <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                     <stop offset="0%" stopColor="#00D18B" />
                     <stop offset="100%" stopColor="#00A86B" />
                   </linearGradient>
                 </defs>
                 
                 {/* Wings */}
                 <path d="M160,80 L60,40 L70,30 L170,70 Z" fill="#00D18B" />
                 <path d="M160,80 L260,40 L250,30 L150,70 Z" fill="#00D18B" />
                 
                 {/* Fuselage */}
                 <path d="M20,90 Q160,60 300,90 C310,92 310,98 300,100 Q160,130 20,100 C10,98 10,92 20,90 Z" fill="url(#bodyGrad)" />
                 
                 {/* Windows */}
                 <circle cx="80" cy="85" r="2" fill="white" opacity="0.8" />
                 <circle cx="100" cy="84" r="2" fill="white" opacity="0.8" />
                 <circle cx="120" cy="83" r="2" fill="white" opacity="0.8" />
                 <circle cx="140" cy="83" r="2" fill="white" opacity="0.8" />
                 <circle cx="160" cy="83" r="2" fill="white" opacity="0.8" />
                 <circle cx="180" cy="83" r="2" fill="white" opacity="0.8" />
                 
                 {/* Engine/Turbine prominent in screenshot */}
                 <g transform="translate(130, 100)">
                    <circle cx="0" cy="0" r="16" fill="#333" stroke="white" strokeWidth="3" />
                    <circle cx="0" cy="0" r="8" fill="#00D18B" />
                    <circle cx="0" cy="0" r="4" fill="#333" />
                 </g>
                 
                 {/* Text Line graphic */}
                 <line x1="150" y1="100" x2="280" y2="100" stroke="#00D18B" strokeWidth="1" />
                 <circle cx="280" cy="100" r="2" fill="#00D18B" />
               </svg>
               
               <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 translate-y-4 flex items-center space-x-3 w-full justify-center">
                 <div className="h-px w-6 bg-primary/50"></div>
                 <span className="text-primary font-medium text-[15px] tracking-wide">暂无当前执业信息</span>
                 <div className="h-px w-6 bg-primary/50"></div>
               </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default HomeScreen;