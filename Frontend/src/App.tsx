import React, { useState } from 'react';
import Sidebar from './Components/Sidebar';
import { SidebarView } from './types/DisplayComponents';
import { SidebarProvider, useSidebar } from './context/sidebarContext';
import Chat from './Components/chat';
import Settings from ""
import Historyfrom './components/History';
import Profile from './components/Profile';

const COMPONENT_MAP: Record<SidebarView, React.FC> = {
  [SidebarView.CHAT]: Chat,
  [SidebarView.SETTINGS]: Settings,
  [SidebarView.HISTORY]: HistoryView,
  [SidebarView.PROFILE]: Profile,
};

const MainContent: React.FC = () => {
  const { activeView } = useSidebar(); // Access state from context
  const Component = COMPONENT_MAP[activeView];

  return (
    <div className="flex-1 p-4">
      <Component />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <SidebarProvider>
      <div className="flex">
        <Sidebar />
        <MainContent />
      </div>
    </SidebarProvider>
  );
};

export default App;
