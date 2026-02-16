"use client";
import React from "react";
import { useState, useEffect } from "react";
import SidebarHeader from "../components/DashboardNav";
import { Menu, Bell, ChevronDown } from "lucide-react";
import Link from "next/link";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [sidebarOpen]);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <SidebarHeader
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {sidebarOpen && (
        <div
          className="fixed inset-0  bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="relative flex-1 flex flex-col  overflow-hidden">
        <header
         
          className=" bg-gray-50 p-4 md:p-6"
        >
          <div className="flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 bg-[#010B28] rounded-lg hover:bg-gray-300 transition-colors"
            >
              <Menu className="w-6 h-6 text-gray-400 " />
            </button>

            <div className="lg:hidden"></div>

            <div className="flex items-center gap-4 ml-auto">
              <Bell className="w-5 h-5 lg:w-6 lg:h-6 text-gray-500" />
              <div className="border border-gray-400 w-0.5 h-5 lg:h-6"></div>
              <div  onClick={() => setOpenDropdown(!openDropdown)} className="flex items-center gap-2 cursor-pointer">
                <h1 className="text-gray-400 text-lg lg:text-xl font-bold bg-gray-300 rounded-full w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center">
                  PD
                </h1>
                <div className="flex flex-col">
                  <h1 className="text-gray-400 text-xs lg:text-sm font-bold">
                    Admin
                  </h1>
                  <h1 className="text-black font-bold text-sm lg:text-lg">
                    Prerit Das
                  </h1>
                </div>
                <ChevronDown
                  className={`w-4 h-4 lg:w-6 lg:h-6 text-black ml-1 lg:ml-2 transition-transform ${
                    openDropdown ? "rotate-180" : ""
                  }`}
                />
              </div>
            </div>
          </div>
          {openDropdown && (
            <div className="absolute right-4 mt-3 w-32 bg-gray-400  shadow-lg rounded-lg border border-gray-200 z-50">
              <Link href="/">
                <button className="w-full text-left px-4 py-2 text-sm  rounded-lg">
                  Sign Out
                </button>
              </Link>
            </div>
          )}
        </header>

        <main className="flex-1 overflow-y-auto">
          <div className="p-4 md:p-6">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
