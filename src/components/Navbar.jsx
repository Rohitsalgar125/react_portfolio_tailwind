import React from "react";
import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const linkVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <nav className="mb-20 flex justify-between items-center py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="Logo" />
      </div>
      <div className="flex-grow flex justify-center items-center gap-8">
        <motion.div
          variants={linkVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5 }}
        >
          <a href="#home" className="text-2xl">
            Home
          </a>  
        </motion.div>
        <motion.div
          variants={linkVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <a href="#technologies" className="text-2xl">
            Technologies
          </a>
        </motion.div>
        <motion.div
          variants={linkVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <a href="#projects" className="text-2xl">
            Projects
          </a>
        </motion.div>
        <motion.div
          variants={linkVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <a href="#experience" className="text-2xl">
            Experience 
          </a>
        </motion.div>
        <motion.div
          variants={linkVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <a href="#contact" className="text-2xl">
            Contact
          </a>
        </motion.div>
        

      </div>
      <div className="flex gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
      </div>
    </nav>
  );
};

export default Navbar;
