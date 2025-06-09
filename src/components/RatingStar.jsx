import React, { useState } from "react";
import { motion } from "framer-motion";
import { GiRoundStar } from "react-icons/gi"; 

const RatingStar = () => {
  const [rating, setRating] = useState(5);

  return (
    <motion.div
      className="flex items-center gap-2 mt-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 }}
    >
      <div className="flex space-x-1 cursor-pointer">
        {[1, 2, 3, 4, 5].map((star) => (
          <GiRoundStar
            key={star}
            onClick={() => setRating(star)}
            size={18}
            className={`${
              star <= rating ? "text-[#FFC000]" : "text-gray-300"
            } transition-colors duration-200`}
          />
        ))}
      </div>
      <span className="text-gray-700 font-medium">{rating.toFixed(1)}</span>
    </motion.div>
  );
};

export default RatingStar;
