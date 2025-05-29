import { motion } from "framer-motion";
import logo from "../assets/Logo.jpeg"; 

const text = "Shaymast";

const letterVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 1 + i * 0.15, 
      duration: 0.4,
    },
  }),
};

const SplashScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-white flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 3.5, duration: 1 }}
    >
      
      <div className="flex items-center space-x-4">

        <motion.img
          src={logo}
          alt="Logo"
          className="w-20 h-20"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />

        
        <div className="flex text-4xl font-bold text-gray-800">
          {text.split("").map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={letterVariants}
            >
              {char}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SplashScreen;
