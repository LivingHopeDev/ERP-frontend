import React, { useState } from "react";
import Sidebar from "./Sidebar";

interface SidebarWrapperProps {
  role: "admin" | "employee";
  children: React.ReactNode;
}

const SidebarWrapper: React.FC<SidebarWrapperProps> = ({ role, children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
    console.log("Sidebar State:", isSidebarOpen);
  };

  return (
    <div className="flex">
      <div
        className={`fixed z-10 inset-y-0 left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:w-64`}
      >
        <Sidebar role={role} />
      </div>

      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "ml-64" : "ml-0"
        } lg:ml-0`}
      >
        <div className="p-4 bg-gray-100 border-b flex justify-between items-center">
          <button
            className="text-gray-800 p-2 rounded-md border border-gray-300"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? "Close" : "Menu"}
          </button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default SidebarWrapper;
