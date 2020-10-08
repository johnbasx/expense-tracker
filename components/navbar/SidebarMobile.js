import React from "react";
import Transition from "../Transition";
import SidebarItem from "./SidebarItem";
import {
  useSidebarContext,
  useSidebarToggleContext,
} from "../../context/SidebarState";
import {
  FaArchive,
  FaClipboardCheck,
  FaClock,
  FaCreditCard,
  FaMoneyBillAlt,
  FaTachometerAlt,
} from "react-icons/fa";

const SidebarMobile = () => {
  const menuOpenState = useSidebarContext();
  const toggleSidebar = useSidebarToggleContext();

  return (
    <Transition show={menuOpenState} appear={true}>
      <div className="md:hidden">
        <div className="fixed inset-0 flex z-40">
          <Transition
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0">
              <div
                className="absolute inset-0 bg-gray-500 opacity-75"
                onClick={toggleSidebar}
              />
            </div>
          </Transition>

          <Transition
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
              <div className="absolute top-0 right-0 -mr-14 p-1">
                {menuOpenState && (
                  <button
                    onClick={toggleSidebar}
                    className="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
                    aria-label="Close sidebar"
                  >
                    <svg
                      className="h-6 w-6 text-white"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                )}
              </div>
              <div className="flex-shrink-0 flex items-center px-4">
                {/* <Logo className="h-8 w-auto" /> */}
                <img
                  src="./images/Logo.svg"
                  className="h-14 w-auto"
                  alt="FundTrack"
                />
              </div>
              <div className="mt-6 flex-1 h-0 overflow-y-auto">
                <nav className="px-2">
                  <SidebarItem title="Dashboard" Icon={FaTachometerAlt} />

                  <SidebarItem title="Incomes" Icon={FaMoneyBillAlt} />

                  <SidebarItem title="Expenses" Icon={FaCreditCard} />
                  <SidebarItem title="History" Icon={FaClock} />
                  <SidebarItem title="Categories" Icon={FaArchive} />
                  <SidebarItem title="Reports" Icon={FaClipboardCheck} />
                </nav>
              </div>
            </div>
          </Transition>
          <div className="flex-shrink-0 w-14">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default SidebarMobile;
