import React, { useState, useContext, createContext } from "react";
//import SidebarReducer from './SidebarReducer'

// make a new context
const SidebarContext = createContext();
const SidebarUpdateContext = createContext();

export const useSidebarContext = () => {
  return useContext(SidebarContext);
};

export const useSidebarToggleContext = () => {
  return useContext(SidebarUpdateContext);
};

// create provider
export const SidebarProvider = ({ children }) => {
  const [menuOpenState, setMenuOpenState] = useState(false);

  function toggleSidebar() {
    setMenuOpenState(!menuOpenState);
  }

  return (
    <SidebarContext.Provider value={menuOpenState}>
      <SidebarUpdateContext.Provider value={toggleSidebar}>
        {children}
      </SidebarUpdateContext.Provider>
    </SidebarContext.Provider>
  );
};
