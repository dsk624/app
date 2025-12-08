import React from 'react';
import { Briefcase, Calendar, Bell, User } from 'lucide-react';
import { Tab } from '../types';

interface TabBarProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const TabBar: React.FC<TabBarProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: Tab.HOME, label: '行程', icon: Briefcase },
    { id: Tab.CALENDAR, label: '日历', icon: Calendar },
    { id: Tab.MESSAGE, label: '群发消息', icon: Bell },
    { id: Tab.PROFILE, label: '我的', icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 pb-safe pt-2 px-6 flex justify-between items-center z-50 h-16 shadow-[0_-4px_10px_rgba(0,0,0,0.03)]">
      {tabs.map((item) => {
        const isActive = activeTab === item.id;
        const Icon = item.icon;
        return (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className="flex flex-col items-center justify-center w-16"
          >
            <Icon
              size={24}
              className={`mb-1 transition-colors ${isActive ? 'text-primary fill-current' : 'text-gray-400'}`}
              strokeWidth={isActive ? 2 : 2}
              fill={isActive ? "currentColor" : "none"}
            />
            <span className={`text-[10px] ${isActive ? 'text-primary font-medium' : 'text-gray-400'}`}>
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default TabBar;