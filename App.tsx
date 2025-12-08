import React, { useState } from 'react';
import TabBar from './components/TabBar';
import HomeScreen from './screens/HomeScreen';
import CalendarScreen from './screens/CalendarScreen';
import MessageScreen from './screens/MessageScreen';
import ProfileScreen from './screens/ProfileScreen';
import { Tab } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.HOME);

  const renderScreen = () => {
    switch (activeTab) {
      case Tab.HOME:
        return <HomeScreen />;
      case Tab.CALENDAR:
        return <CalendarScreen />;
      case Tab.MESSAGE:
        return <MessageScreen />;
      case Tab.PROFILE:
        return <ProfileScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="max-w-md mx-auto min-h-screen bg-gray-50 shadow-2xl relative overflow-hidden">
      {renderScreen()}
      <TabBar activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default App;