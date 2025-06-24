import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const Workflow = () => {
  return (
    <section className="py-20 px-4 md:px-10 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        
        <motion.div
          className="bg-gray-100 rounded-xl p-4 w-full max-w-sm mx-auto text-xs"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <div className="text-gray-600 font-medium mb-1">Total Projects</div>
          <div className="text-2xl font-bold text-black mb-2">
            1,475 <span className="text-green-500 text-xs">+8%</span>
          </div>

          <hr className="my-3" />

          <div className="space-y-2">
            {[
              { label: "Finished", percent: 50, color: "[#142F32]" },
              { label: "In Progress", percent: 13, color: "[#142F32]" },
              { label: "Rejected", percent: 30, color: "[#142F32]" },
            ].map(({ label, percent, color }, i) => (
              <div key={i}>
                <div className="flex justify-between text-gray-700 mb-1">
                  <span>{label}</span>
                  <span>{percent}%</span>
                </div>
                <div className="w-full bg-gray-300 h-2 rounded-full">
                  <div
                    className={`h-full bg-${color} rounded-full`}
                    style={{ width: `${percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <hr className="my-3" />

          <div>
            <div className="flex justify-between text-gray-700 mb-1">
              <span>Overall Progress</span>
              <span>73%</span>
            </div>
            <div className="w-full bg-gray-300 h-2.5 rounded-full">
              <div className="h-full bg-green-600 rounded-full w-[73%]"></div>
            </div>
          </div>

          <div className="flex justify-between items-end gap-1 mt-4 h-14">
            {[60, 40, 80, 30, 70, 90, 50].map((height, i) => (
              <div
                key={i}
                className="bg-[#142F32] rounded w-1.5"
                style={{ height: `${height}%` }}
              ></div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-semibold text-black">
            Why Choose Our Platform?
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            We simplify your workflow, empower your decisions, and accelerate growth with intelligent tools and reliable insights.
          </p>

          <div className="space-y-4">
            {[
              {
                title: "Smart Analytics",
                desc: "Our dashboards help you analyze your data and reveal powerful insights to make informed decisions.",
              },
              {
                title: "Reliable Performance",
                desc: "Lightning-fast load times and stable uptime to keep your work uninterrupted across all environments.",
              },
              {
                title: "Seamless Collaboration",
                desc: "Work together in real time, regardless of department or location, for better productivity and outcomes.",
              },
            ].map((item, i) => (
              <div key={i}>
                <h5 className="inline-flex items-center gap-2 font-semibold text-sm text-black mb-1">
                  <FaCheckCircle className="text-[#142F32]" />
                  {item.title}
                </h5>
                <p className="text-xs text-gray-600 leading-snug max-w-md">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Workflow;



