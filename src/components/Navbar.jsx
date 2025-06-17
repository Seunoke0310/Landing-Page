import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.jpeg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ["Home", "Workflow", "Services", "Pricing"];

  return (
    <motion.nav
      className="bg-white text-[#142F32] px-6 py-4 fixed w-full top-0 z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
          <span className="font-medium text-base">Shaymast</span>
        </div>

        <div className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={`#${link.toLowerCase()}`}
              className="hover:text-emerald-600 transition-colors font-normal text-sm"
            >
              {link}
            </a>
          ))}
        </div>

        
        <div className="flex items-center space-x-4">
          <a
            href="#signup"
            className="hidden md:inline-block bg-[#142F32] text-white px-4 py-2 rounded-3xl font-normal text-sm hover:bg-emerald-500 transition"
          >
            Sign Up
          </a>

          
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="#142F32"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 8h16M4 16h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      
      {menuOpen && (
        <div className="md:hidden mt-3 space-y-2 px-4">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={`#${link.toLowerCase()}`}
              className="block py-2 text-[#142F32] hover:bg-emerald-100 rounded text-sm font-medium"
            >
              {link}
            </a>
          ))}
          <a
            href="#signup"
            className="block bg-[#142F32] text-white text-center px-4 py-2 rounded font-semibold hover:bg-emerald-500 transition"
          >
            Sign Up
          </a>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
