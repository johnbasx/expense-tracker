import React, { Children } from "react";

import MainNavbar from "../navbar";
import SidebarMobile from "../navbar/SidebarMobile";
import SidebarDesktop from "../navbar/SidebarDesktop";
// import {
//   useSidebarContext,
//   useSidebarToggleContext,
// } from "../context/SidebarState";

const MainLayout = ({ children }) => {
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* Off-canvas menu for mobile */}
      <SidebarMobile />

      {/* Static sidebar for desktop */}
      <SidebarDesktop />

      {/* // Dashboard Area */}
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <MainNavbar />
        <main
          className="flex-1 relative z-0 overflow-y-auto py-6 focus:outline-none"
          tabIndex={0}
        >
          {children}
          {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            {/* Replace with your content */}
          {/* <div className="py-4">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
            </div> */}
          {/* /End replace */}
          {/* </div> */}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
