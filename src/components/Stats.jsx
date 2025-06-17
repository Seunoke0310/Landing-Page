import React from "react";
import { BsWindowSidebar, BsThreeDotsVertical } from "react-icons/bs";
import { MdSentimentVerySatisfied } from "react-icons/md";
import { motion,} from "framer-motion";
import Pics1 from "../assets/Pics1.jpeg";

const fromLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

const fromRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

const fromBottom = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const StatsShowcase = () => {
  return (
    <div className="w-full flex justify-between items-end gap-2 px-2 sm:gap-4 sm:px-0 flex-wrap sm:flex-nowrap">
      
      <motion.div
        variants={fromLeft}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
        className="h-56 w-full sm:w-40 rounded-xl overflow-hidden"
      >
        <img
          src={Pics1}
          alt="Team or Project"
          className="h-full w-full object-cover"
        />
      </motion.div>

      <motion.div
        variants={fromLeft}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, delay: 0.2 }}
        className="h-48 w-full sm:w-40 rounded-xl flex items-center justify-center text-center px-2"
        style={{ backgroundColor: "#142F32" }}
      >
        <p className="text-xs sm:text-xs font-light text-white">
          <span className="font-medium text-xl text-white">100+</span> <br />
          <span>our esteemed</span> <br />
          <span>clients and</span> <br /> partners
        </p>
      </motion.div>

      <motion.div
        variants={fromBottom}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-white shadow-md h-32 w-24 sm:w-40 rounded-xl px-2 py-2 flex flex-col justify-between hidden sm:block"
      >
        <div className="flex items-center justify-between text-[#142F32]">
          <BsWindowSidebar size={20} />
          <BsThreeDotsVertical size={16} />
        </div>
        <div className="text-[10px] sm:text-xs font-medium text-gray-800 text-left">
          <p>Total Projects <span className="text-green-500 text-xs">8%</span></p>
          <p className="text-lg sm:text-xl font-bold text-black mt-2">
            1674+ 
          </p>
          <p className="text-[10px] text-gray-500 mt-2">Increase of <span className="text-green-500">
            126</span> this month</p>
        </div>
      </motion.div>

      <motion.div
        variants={fromRight}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, delay: 0.6 }}
        className="h-48 w-full sm:w-40 rounded-xl flex items-center justify-center text-center px-2"
        style={{ backgroundColor: "#E3FFCC" }}
      >
        <p className="text-xs sm:text-xs font-normal text-gray-700">
          <span className="font-medium text-xl text-black">6+ </span> <br />
          <span>years of</span> <br />
          <span>dedicated</span> <br /> service
        </p>
      </motion.div>

      <motion.div
        variants={fromRight}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, delay: 0.8 }}
        className="h-56 w-full sm:w-40 rounded-xl p-5 flex flex-col items-start justify-end hidden sm:block"
        style={{ backgroundColor: "#142F32" }}
      >
        <MdSentimentVerySatisfied size={24} className="text-white mb-2" />
        <p className="text-xs sm:text-sm text-white text-left font-normal">
          Achieve optimal efficiency and productivity
        </p>
      </motion.div>
    </div>
  );
};

export default StatsShowcase;
