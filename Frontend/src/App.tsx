import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import { SidebarView } from './types';
import ChatView from './components/ChatView';
import SettingsView from './components/SettingsView';
import HistoryView from './components/HistoryView';
import ProfileView from './components/ProfileView';

const COMPONENT_MAP: Record<SidebarView, React.FC> = {
  [SidebarView.CHAT]: ChatView,
  [SidebarView.SETTINGS]: SettingsView,
  [SidebarView.HISTORY]: HistoryView,
  [SidebarView.PROFILE]: ProfileView,
};

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<SidebarView>(SidebarView.CHAT);

  const Component = COMPONENT_MAP[activeView];

  return (
    <div className="flex">
      {/* Render Sidebar */}
      <Sidebar activeView={activeView} onViewChange={setActiveView} />

      {/* Render Active Component as Main Content */}
      <div className="flex-1 p-4">
        <Component />
      </div>
    </div>
  );
};

export default App;
