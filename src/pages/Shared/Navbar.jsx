import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "awards", label: "Experience", path: "/awards-experience" },
    { id: "tools", label: "Tools", path: "/research-tools" },
    { id: "research", label: "Research", path: "/research-interest" },
    { id: "courses", label: "Courses", path: "/completed-courses" },
    { id: "academics", label: "Academics", path: "/academic-degree" },
    { id: "workshops", label: "Workshops", path: "/workshops-seminars" },
    { id: "gallery", label: "Gallery", path: "/gallery" },
    { id: "contact", label: "Contact", path: "/contact" },
    { id: "referees", label: "Referees", path: "/referees" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#163A2D] text-white shadow-lg backdrop-blur-md font-['Playfair_Display',serif]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* ==================== LEFT SIDE: BRAND / NAME ==================== */}
          <div className="flex-shrink-0">
            <NavLink 
              to="/" 
              className="text-lg sm:text-2xl font-bold tracking-wide hover:text-emerald-200 transition-colors duration-200"
            >
              Ramen Kumar Das
            </NavLink>
          </div>

          {/* ==================== RIGHT SIDE: DESKTOP NAV LINKS ==================== */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) => `
                  px-3 py-2 rounded-md font-medium transition-all duration-200 whitespace-nowrap
                  ${
                    isActive
                      ? "text-white font-bold border-b-2 border-emerald-400 bg-white/10"
                      : "text-gray-200 hover:text-white hover:bg-white/5"
                  }
                `}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* ==================== MOBILE HAMBURGER BUTTON ==================== */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              type="button"
              className="p-2 rounded-md text-gray-200 hover:text-white hover:bg-[#123025] focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* ==================== MOBILE MENU DROPDOWN ==================== */}
      {isOpen && (
        <div className="lg:hidden bg-[#123025] border-t border-emerald-800/50 px-4 pt-2 pb-6 space-y-1 transition-all duration-300">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              end={item.path === "/"}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `
                block px-3 py-2.5 rounded-md text-base font-medium transition-colors duration-200
                ${
                  isActive
                    ? "bg-emerald-900/60 text-white font-bold border-l-4 border-emerald-400 pl-4"
                    : "text-gray-200 hover:bg-white/5 hover:text-white"
                }
              `}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;