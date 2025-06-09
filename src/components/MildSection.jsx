import React from "react";
import { motion } from "framer-motion";

const MildSection = () => {
  return (
    <section className="bg-[#142F32] p-10 text-white shadow-lg flex flex-col items-center text-center">
      <motion.div 
        initial={{ y: -50, opacity: 0 }} 
        whileInView={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="flex flex-col items-center"
      >
        <motion.h2 
          initial={{ y: -30, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-3xl font-semibold"
        >
          From Ideas to Production In Days
        </motion.h2>

        <motion.p 
          initial={{ y: -30, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="mt-6 leading-relaxed max-w-lg text-sm text-gray-400"
        >
          Discover a world of possibilities with our cutting-edge solutions.
          Whether you're looking to enhance productivity or streamline processes,
          we've got you covered. Join us and unlock new opportunities today.
        </motion.p>

        <motion.button 
          initial={{ y: -30, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{ duration: 1.4, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="mt-6 bg-[#E3FFCC] text-[#142F32] py-2 px-6 rounded-full font-medium hover:bg-[#D1EEBB] transition"
        >
          Get Started
        </motion.button>
      </motion.div>
    </section>
  );
};

export default MildSection;


