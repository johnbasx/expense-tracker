import React from "react";
import { useSidebarToggleContext } from "../../context/SidebarState";

const menuButton = () => {
  const toggleSidebar = useSidebarToggleContext();
  return (
    <button
      onClick={toggleSidebar}
      className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-600 md:hidden"
      aria-label="Open sidebar"
    >
      <svg
        className="h-6 w-6"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h7"
        />
      </svg>
    </button>
  );
};

export default menuButton;
