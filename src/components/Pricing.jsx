import React from "react";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  "24/7 Support",
  "Real-time Analytics",
  "Unlimited Projects",
  "Team Collaboration",
];

// Heading animation
const fadeInDown = {
  hidden: { opacity: 0, y: -40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Card container 
const staggerUnroll = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

// Card unroll effect
const unrollEffect = {
  hidden: { scaleY: 0, opacity: 0, transformOrigin: "top" },
  show: {
    scaleY: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Pricing = () => {
  return (
    <section className="bg-black text-white py-20 px-4 md:px-10">
      <motion.div
        className="max-w-5xl mx-auto text-center mb-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInDown}
      >
        <h2 className="text-3xl sm:text-4xl font-semibold mb-2">Our Pricing Plans</h2>
        <p className="text-sm text-gray-400">Choose a plan that suits your business needs</p>
      </motion.div>

      <motion.div
        className="max-w-5xl mx-auto grid grid-cols-1 gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerUnroll}
      >

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto w-full md:w-[90%]">
          <motion.div className="bg-white/10 rounded-xl p-6 backdrop-blur-md text-left flex flex-col" variants={unrollEffect}>
            <h3 className="text-xl font-semibold mb-2 text-left">Starter</h3>
            <p className="text-sm text-gray-400 mb-8 text-left">
              Ideal for individuals and small teams just starting out.
            </p>
            <p className="text-3xl font-bold mb-4 text-left">
              $39<span className="text-sm font-normal text-gray-400">/month</span>
            </p>
            <div className="flex justify-center mb-6">
              <button className=" text-white border border-[#E3FFCC] px-6 py-2 rounded-full font-semibold">
                Get Started
              </button>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-1 h-px bg-white/20" />
              <span className="text-sm text-gray-400">Features</span>
              <div className="flex-1 h-px bg-white/20" />
            </div>
            <ul className="space-y-3 text-sm text-gray-300">
              {features.map((feat, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="bg-gray-300 text-[#142F32] p-2 rounded-full">
                    <FaCheck size={12} />
                  </span>
                  {feat}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="bg-white/10 rounded-xl p-6 backdrop-blur-md text-left flex flex-col" variants={unrollEffect}>
            <h3 className="text-xl font-semibold mb-2 text-left">Enterprise</h3>
            <p className="text-sm text-gray-400 mb-8 text-left">
              Best for growing businesses and large teams.
            </p>
            <p className="text-3xl font-bold mb-4 text-left">
              $99<span className="text-sm font-normal text-gray-400">/month</span>
            </p>
            <div className="flex justify-center mb-6">
              <button className="text-white border border-[#E3FFCC] px-6 py-2 rounded-full font-semibold">
                Get Started
              </button>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-1 h-px bg-white/20" />
              <span className="text-sm text-gray-400">Features</span>
              <div className="flex-1 h-px bg-white/20" />
            </div>
            <ul className="space-y-3 text-sm text-gray-300">
              {features.map((feat, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="bg-gray-300 text-[#142F32] p-2 rounded-full">
                    <FaCheck size={12} />
                  </span>
                  {feat}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="bg-[#142F32] rounded-xl backdrop-blur-md p-6 text-center w-full md:w-[90%] mx-auto"
          variants={unrollEffect}
        >
          <h5 className="text-xl font-semibold mb-2">Professional</h5>
          <p className="text-sm text-gray-400 mb-6">
            Designed for professionals who need advanced features and integrations.
          </p>
          <button className="bg-[#E3FFCC] text-[#142F32] px-6 py-2 rounded-full font-semibold">
            Get Started
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Pricing;

