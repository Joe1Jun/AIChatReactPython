import React from 'react';
import { SidebarView } from '../types/DisplayComponents';
import { useSidebar } from '../context/sidebarContext';

const Sidebar: React.FC = () => {
  const { activeView, setActiveView } = useSidebar(); // Use context
  console.log("re rendered")
  const sidebarItems = [
    { view: SidebarView.CHAT, label: 'Chat' },
    { view: SidebarView.SETTINGS, label: 'Settings' },
    { view: SidebarView.HISTORY, label: 'History' },
    { view: SidebarView.PROFILE, label: 'Profile' },
  ];

  return (
    <div className="w-64 bg-gray-100 h-screen p-4">
      {sidebarItems.map(({ view, label }) => (
        <button
          key={view}
          onClick={() => setActiveView(view)}
          className={`w-full text-left p-2 mb-2 rounded ${
            activeView === view ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default React.memo(Sidebar);
