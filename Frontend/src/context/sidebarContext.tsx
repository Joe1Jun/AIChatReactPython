import React, { createContext, useContext, useState } from 'react';
import { SidebarView } from '../types/DisplayComponents';

// Define Context Type
interface SidebarContextType {
  activeView: SidebarView;
  setActiveView: (view: SidebarView) => void;
}

// Create Context
const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

// Provider Component
export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeView, setActiveView] = useState<SidebarView>(SidebarView.CHAT);

  return (
    <SidebarContext.Provider value={{ activeView, setActiveView }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Custom Hook for Accessing Sidebar Context
export const useSidebar = (): SidebarContextType => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};
