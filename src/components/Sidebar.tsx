import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC<{ role: "admin" | "employee" }> = ({ role }) => {
  const menuItems =
    role === "admin"
      ? [
          { path: "/admin/dashboard", label: "Dashboard" },
          { path: "/admin/employee", label: "Employees" },
        ]
      : [
          { path: "/dashboard", label: "Dashboard" },
          { path: "/profile", label: "Profile" },
        ];

  return (
    <div className="w-64 bg-[#1F2937] text-white min-h-screen flex flex-col ">
      <div className="p-4 text-2xl font-bold border-b border-gray-700">
        HR ERP
      </div>
      <nav className="flex-1 p-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md mb-2 hover:bg-gray-700 ${
                isActive ? "bg-gray-700" : ""
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
