import React from "react";
import { NavLink } from "react-router-dom";
import { Settings } from "lucide-react";

const Navbar = ({ user }) => {
  const menuItems = [
    { name: "Dashboard", path: "/student-dashboard" },
    { name: "Attendance", path: "/student-attendance" },
    { name: "Calendar", path: "/student-calendar" },
    { name: "Chat", path: "/student-chat" },
  ];

  const getInitials = (name) => {
    if (!name) return "ST";
    return name.split(" ").map(n => n[0]).join("").toUpperCase();
  };

  return (
    <nav className="w-full bg-[#0f1117]/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-800 px-8 py-3 flex items-center justify-between">

      {/* LEFT SIDE */}
      <div className="flex items-center gap-6">

        {/* Avatar */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-semibold shadow-lg shadow-purple-500/20">
            {user ? getInitials(user.name) : "ST"}
          </div>

          <span className="text-white font-semibold text-lg">
            {user ? user.role : "Student"}
          </span>
        </div>

        {/* MENU */}
        <div className="flex items-center gap-4 ml-6">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm ${isActive
                  ? "bg-[#1a1d24] text-white"
                  : "text-gray-400 hover:text-white"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* More Dropdown */}
          <div className="text-gray-400 hover:text-white cursor-pointer px-3 py-2">
            More ▾
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="text-gray-400 hover:text-white cursor-pointer">
        <Settings size={20} />
      </div>

    </nav>
  );
};

export default Navbar;