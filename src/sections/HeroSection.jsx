import React from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";
import RatingStar from "../components/RatingStar";
import StatsShowcase from "../components/Stats";

const HeroSection = () => {
  
  return (
    <section className="py-20 px-4 md:px-8 flex flex-col items-center justify-center min-h-screen">
      <div className="text-center w-full max-w-4xl ">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 leading-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
        >
          The Future of Manufacturing
          <br />
          <span className="text-[#142F32]">With Latest Technology</span>
        </motion.h1>

        <motion.p
          className="mt-4 text-sm sm:text-base text-gray-600"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
        >
          Revolutionizing the way products are made with cutting-edge innovation.
        </motion.p>

        <motion.div
          className="mt-6 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
        >
          <Button text="Get Started" variant="primary" />
          <Button text="Try Demo" variant="secondary" />
        </motion.div>

        <motion.div
          className="mt-4 flex justify-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 1.1 }}
        >
          <RatingStar />
        </motion.div>

        <StatsShowcase/>
        
      </div>
    </section>
  );
};

export default HeroSection;