import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";
import lightlogo from "../assets/lightlogo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 text-sm px-6 md:px-12 py-12">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 text-sm">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2">
                <img src={lightlogo} alt="Logo" className="w-10 h-10 object-contain" />
                <span className="text-white text-base font-medium mb-2">Shaymast</span>
              </div>
            
            <p className="text-gray-400 leading-relaxed">
              Our solution makes production faster and cheaper. Contact us for more information.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>About Us</li>
              <li>Customers</li>
              <li>Newsroom</li>
              <li>Events</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-3">Industries</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Manufacturing</li>
              <li>Healthcare</li>
              <li>Education</li>
              <li>Retail</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-3">Products</h4>
            <ul className="space-y-2 text-gray-400">
              <li>SmartFlow</li>
              <li>PulseTracker</li>
              <li>TeamSync</li>
              <li>InsightPro</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-3">Get In Touch</h4>
            <p className="text-gray-400 mb-2">contact@shaymast.com</p>
            <div className="flex gap-4 text-xl text-white">
              <FaInstagram className="hover:text-gray-400 cursor-pointer" />
              <FaLinkedin className="hover:text-gray-400 cursor-pointer" />
              <FaFacebook className="hover:text-gray-400 cursor-pointer" />
            </div>
          </motion.div>
        </div>

        <hr className="border-t border-gray-700" />

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs pt-4 gap-2"
        >
          <p>© 2025 Shaymast, All rights reserved</p>
          <div className="flex gap-4">
            <span className="hover:text-gray-300 cursor-pointer">Terms & Conditions</span>
            <span className="hover:text-gray-300 cursor-pointer">Privacy Policy</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;



