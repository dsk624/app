import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CalendarDay } from '../types';

const CalendarScreen: React.FC = () => {
  const weekDays = ['日', '一', '二', '三', '四', '五', '六'];
  const today = new Date();
  
  // State for the currently displayed month (relative to today)
  // 0 = current month, -1 = previous, 1 = next
  const [monthOffset, setMonthOffset] = useState(0);
  const [selectedDate, setSelectedDate] = useState<string>(today.toDateString());

  // Calculate the displayed year and month
  const targetDate = new Date(today.getFullYear(), today.getMonth() + monthOffset, 1);
  const currentYear = targetDate.getFullYear();
  const currentMonth = targetDate.getMonth(); // 0-indexed

  // Helper to get days in month
  const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);

  // Generate calendar grid
  const days: CalendarDay[] = [];
  
  // Empty slots for previous month
  for (let i = 0; i < firstDay; i++) {
    days.push({ day: '', isCurrentMonth: false });
  }

  // Days of current month
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({ 
      day: i, 
      isCurrentMonth: true,
      isToday: i === today.getDate() && monthOffset === 0
    });
  }

  const handlePrevMonth = () => {
    if (monthOffset > -3) {
      setMonthOffset(prev => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (monthOffset < 3) {
      setMonthOffset(prev => prev + 1);
    }
  };

  const handleDateClick = (day: number | string) => {
    if (typeof day === 'number') {
      const newDate = new Date(currentYear, currentMonth, day);
      setSelectedDate(newDate.toDateString());
    }
  };

  const isSelected = (day: number) => {
    const d = new Date(currentYear, currentMonth, day);
    return d.toDateString() === selectedDate;
  };

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header */}
      <div className="bg-primary text-white pt-12 pb-4 px-4 text-center text-lg font-medium relative shadow-sm">
        <span>日历</span>
      </div>

      {/* Month Navigation */}
      <div className="flex justify-between items-center px-6 py-4 text-textMain border-b border-gray-50 select-none">
        <div 
          onClick={handlePrevMonth}
          className={`flex items-center text-sm font-medium transition-colors ${monthOffset > -3 ? 'cursor-pointer text-gray-500 hover:text-primary' : 'text-gray-200 cursor-not-allowed'}`}
        >
          <ChevronLeft size={18} />
          <span>上月</span>
        </div>
        
        <span className="text-lg font-bold text-[#333]">
          {currentYear}年{currentMonth + 1}月
        </span>
        
        <div 
          onClick={handleNextMonth}
          className={`flex items-center text-sm font-medium transition-colors ${monthOffset < 3 ? 'cursor-pointer text-gray-500 hover:text-primary' : 'text-gray-200 cursor-not-allowed'}`}
        >
          <span>下月</span>
          <ChevronRight size={18} />
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="px-4 mt-4">
        {/* Week Header */}
        <div className="grid grid-cols-7 mb-4">
          {weekDays.map((d) => (
            <div key={d} className="text-center text-gray-400 text-sm font-medium">
              {d}
            </div>
          ))}
        </div>

        {/* Days */}
        <div className="grid grid-cols-7 gap-y-4">
          {days.map((dayObj, index) => {
            const isDaySelected = typeof dayObj.day === 'number' && isSelected(dayObj.day);
            
            return (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center h-12 relative cursor-pointer"
                onClick={() => handleDateClick(dayObj.day)}
              >
                {dayObj.day && (
                  <>
                    <div 
                      className={`
                        w-9 h-9 flex items-center justify-center rounded-full text-[15px] font-medium transition-all duration-200
                        ${isDaySelected 
                          ? 'bg-[#FF6B00] text-white shadow-md scale-110' 
                          : 'text-[#333] hover:bg-gray-50'}
                      `}
                    >
                      {dayObj.day}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Legend / Info */}
      <div className="px-6 mt-12 space-y-4">
        <div className="flex items-start space-x-3 text-xs text-gray-400">
           <span className="mt-0.5 text-[10px] scale-75">▶</span>
           <span>表示当天有带团，点击可查看带团详细信息</span>
        </div>
        <div className="flex items-start space-x-3 text-xs text-gray-400">
           <span className="text-base leading-none">📅</span>
           <span className="leading-relaxed">日历中展示了导游在企业承接的所有订单，点击未带团的日期可设置“休息”或“空闲”，设置后的状态会同步给各企业，便于游客下单。</span>
        </div>
      </div>
    </div>
  );
};

export default CalendarScreen;