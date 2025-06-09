import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TbBrandProducthunt } from "react-icons/tb";
import { FiArrowUpRight, FiBox,  FiShield  } from "react-icons/fi";
import { TiSpanner } from "react-icons/ti";
import { GoGraph } from "react-icons/go";
import { FaStarOfLife } from "react-icons/fa6";

const items = [
  {
    title: "Smart Automation",
    iconLeft: <FaStarOfLife size={20} />,
    iconRight: <FiArrowUpRight size={20} />,
    description: "Streamline production tasks with precision and minimal downtime.",
  },
  {
    title: "Quality Assurance",
    iconLeft: <TbBrandProducthunt size={20} />,
    iconRight: <FiArrowUpRight size={20} />,
    description: "Ensure each product meets top-tier standards consistently.",
  },
  {
    title: "Rapid Prototyping",
    iconLeft: <TiSpanner size={20} />,
    iconRight: <FiArrowUpRight size={20} />,
    description: "Quickly build and test designs for faster innovation.",
  },
  {
    title: "Integrated Systems",
    iconLeft: < FiShield  size={20} />,
    iconRight: <FiArrowUpRight size={20} />,
    description: "Synchronize operations for smooth and seamless workflows.",
  },
  {
    title: "Equipment Optimization",
    iconLeft: <FiBox size={20} />,
    iconRight: <FiArrowUpRight size={20} />,
    description: "Maximize machinery performance through data-driven decisions.",
  },
  {
    title: "Inventory Control",
    iconLeft: <GoGraph size={20} />,
    iconRight: <FiArrowUpRight size={20} />,
    description: "Monitor stock in real-time for just-in-time manufacturing.",
  },
];


const fromLeftVariant = {
  hidden: { opacity: 0, x: -60 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: "easeOut",
    },
  }),
};

const Workflow = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-[#142F32] text-white py-20 px-4 md:px-10">
      <motion.div
        className="max-w-6xl mx-auto text-center mb-12"
        variants={fromLeftVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
          Efficient and Integrated <br />
          <span>Manufacturing Services</span>
        </h2>
        <p className="text-sm sm:text-sm text-gray-200">
          Simplify operations with our efficient, quality-focused services.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {items.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={fromLeftVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-6 text-left shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-white">{item.iconLeft}</div>
              <div className="text-white">{item.iconRight}</div>
            </div>
            <h3 className="text-lg font-semibold mb-2 pt-8">{item.title}</h3>
            <p className="text-sm font-light text-gray-300 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Workflow;

