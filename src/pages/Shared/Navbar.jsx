import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "research", label: "Research", path: "/research-interest" },
    { id: "awards", label: "Experience", path: "/awards-experience" },
    { id: "tools", label: "Tools/Software", path: "/research-tools" },
    { id: "courses", label: "Courses", path: "/completed-courses" },
    { id: "academics", label: "Academics", path: "/academic-degree" },
    { id: "workshops", label: "Workshops", path: "/workshops-seminars" },
    { id: "gallery", label: "Gallery", path: "/gallery" },
    { id: "contact", label: "Contact", path: "/contact" },
    { id: "referees", label: "Referees", path: "/referees" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#163A2D]/95 backdrop-blur-md text-white shadow-md font-['Playfair_Display',serif] border-b border-emerald-900/30">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* BRAND / NAME */}
          <div className="flex-shrink-0">
            <NavLink 
              to="/" 
              className="text-lg sm:text-2xl font-bold tracking-wide text-amber-300 hover:text-white transition-colors duration-200"
            >
              Ramen Kumar Das
            </NavLink>
          </div>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) => `
                  px-3 py-2 rounded-md font-sans text-xs xl:text-sm font-medium transition-all duration-200 whitespace-nowrap
                  ${
                    isActive
                      ? "text-amber-300 font-bold border-b-2 border-amber-400 bg-white/10"
                      : "text-gray-200 hover:text-white hover:bg-white/5"
                  }
                `}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* MOBILE HAMBURGER BUTTON */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              type="button"
              className="p-2 rounded-lg text-gray-200 hover:text-white hover:bg-[#123025] focus:outline-none cursor-pointer border border-emerald-800/40"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="lg:hidden bg-[#123025] border-t border-emerald-800/50 px-4 pt-2 pb-6 space-y-1 font-sans shadow-2xl">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              end={item.path === "/"}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `
                block px-3 py-2.5 rounded-md text-sm font-medium transition-colors duration-200
                ${
                  isActive
                    ? "bg-emerald-900/80 text-amber-300 font-bold border-l-4 border-amber-400 pl-4"
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