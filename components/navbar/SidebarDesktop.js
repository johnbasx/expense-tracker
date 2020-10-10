import React from "react";
import SidebarItem from "./SidebarItem";

import { sidebarData } from "./sidebarData";

const SidebarDesktop = () => {
  return (
    //   {/* Static sidebar for desktop */}
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex items-center h-16 flex-shrink-0 px-4 bg-white">
          <img className="h-14 w-auto" src="./images/Logo.svg" alt="Workflow" />
        </div>
        <div className="h-0 flex-1 flex flex-col overflow-y-auto">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <nav className="flex-1 px-2 py-4 bg-white">
            {sidebarData.map((data) => (
              <SidebarItem
                title={data.title}
                href={data.href}
                Icon={data.Icon}
              />
            ))}
            {/* <SidebarItem title="Dashboard" Icon={FaTachometerAlt} href="/" />

            <SidebarItem
              title="Incomes"
              Icon={FaMoneyBillAlt}
              href="/incomes"
            />

            <SidebarItem title="Expenses" Icon={FaCreditCard} />
            <SidebarItem title="History" Icon={FaClock} />
            <SidebarItem title="Categories" Icon={FaArchive} />
            <SidebarItem title="Reports" Icon={FaClipboardCheck} /> */}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SidebarDesktop;
