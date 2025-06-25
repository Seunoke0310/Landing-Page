import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { FaFigma, FaGithub, FaSlack, FaTrello, FaReact, FaNodeJs } from "react-icons/fa";
import { SiVercel, SiFirebase, SiTailwindcss, SiRedux } from "react-icons/si";

const logos = [
  <FaFigma size={24} />, <FaGithub size={24} />, <FaSlack size={24} />,
  <FaTrello size={24} />, <FaReact size={24} />, <FaNodeJs size={24} />,
  <SiVercel size={24} />, <SiFirebase size={24} />, <SiTailwindcss size={24} />, <SiRedux size={24} />
];

// fixed positions on a circle
const getCirclePosition = (radiusPercent, count) => {
  const positions = [];
  for (let i = 0; i < count; i++) {
    const angle = (2 * Math.PI * i) / count;
    const top = 50 + radiusPercent * Math.sin(angle);
    const left = 50 + radiusPercent * Math.cos(angle);
    positions.push({ top: `${top}%`, left: `${left}%` });
  }
  return positions;
};

const LogoCloud = () => {
  //  positions to keep logos in a fixed position
  const positions = useMemo(() => {
    const outer = getCirclePosition(35, 4);
    const middle = getCirclePosition(25, 4);
    const inner = getCirclePosition(12, 2);
    return [...outer, ...middle, ...inner];
  }, []);

  return (
    <section className="bg-white text-black py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
            Trusted by teams worldwide <br /> powering modern development
          </h2>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed">
            From startups to enterprises, these tools and platforms help bring ideas to life,
            boost productivity, and streamline team collaboration across every project phase.
          </p>
          <button className="bg-[#E3FFCC] text-[#142F32] px-6 py-2 rounded-full font-semibold">
            Work With Us
          </button>
        </motion.div>

        {/* divs that has circles */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative w-[90%] aspect-square bg-[#E3FFCC] rounded-xl flex items-center justify-center overflow-hidden mx-auto"
        >
          {/* Outer Circle */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="absolute w-[65%] h-[65%] rounded-full border-2 border-gray-500 flex items-center justify-center"
          >
            {/* Middle Circle */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="w-[60%] h-[60%] rounded-full border-2 border-gray-500 flex items-center justify-center"
            >
              {/* Inner Circle */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="w-[35%] h-[35%] rounded-full border-2 border-gray-500 flex items-center justify-center"
              >
        
              </motion.div>
            </motion.div>
          </motion.div>

          {/* this is for the icons or logos to appear affter the circles have appeared */}
          {logos.map((icon, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.3 }}
              viewport={{ once: true }}
              className="absolute text-[#142F32]"
              style={{
                top: positions[idx]?.top,
                left: positions[idx]?.left,
                transform: "translate(-50%, -50%)"
              }}
            >
              {icon}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoCloud;