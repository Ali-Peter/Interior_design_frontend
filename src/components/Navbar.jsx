import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = ["Home", "Services", "Products", "Blog", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Prevent scrolling when the hamburger menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    // Cleanup on component unmount or when isOpen changes
    return () => {
      document.body.style.overflow = "auto"; // Ensure overflow is reset
    };
  }, [isOpen]);

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed w-full px-4 py-3 bg-white shadow-md flex items-center justify-center sm:justify-between z-50 h-16 sm:h-auto">
        {/* Center: Company Name */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 font-bold text-lg uppercase text-center whitespace-nowrap font-unit"
        >
          DeRain <br /> Interiors
        </div>

        {/* Right: Search Bar */}
        <div className="hidden sm:flex items-center ml-auto">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-full px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </nav>

      {/* Fixed Hamburger */}
      <div className="fixed top-4 left-4 z-[100]">
        <button
          className="text-gray-800 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Sidebar and Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-70 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />

            {/* Sidebar */}
            <motion.aside
              className="fixed top-12 left-0 h-screen w-[30%] bg-white shadow-lg z-50 px-4 py-6"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <ul className="flex flex-col items-start gap-6">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link}
                    className="text-gray-800 text-base font-medium cursor-pointer hover:text-blue-500"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {link}
                  </motion.li>
                ))}
              </ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
