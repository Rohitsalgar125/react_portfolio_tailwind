import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  const linkVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <nav className="mb-20 flex justify-between items-center py-6">
      <div className="flex flex-shrink-0 items-center">
        <motion.h4
          variants={linkVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5 }}
          className="text-4xl"
        >
          RS
        </motion.h4>
      </div>
      <div className="flex-grow flex justify-center items-center gap-8">
        <motion.div
          variants={linkVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5 }}
        >
          <Link to="home" smooth={true} duration={500} className="text-2xl">
            Home
          </Link>
        </motion.div>
        <motion.div
          variants={linkVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link
            to="technologies"
            smooth={true}
            duration={500}
            className="text-2xl"
          >
            Technologies
          </Link>
        </motion.div>
        <motion.div
          variants={linkVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="text-2xl"
          >
            Projects
          </Link>
        </motion.div>
        <motion.div
          variants={linkVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link
            to="experience"
            smooth={true}
            duration={500}
            className="text-2xl"
          >
            Experience
          </Link>
        </motion.div>
        <motion.div
          variants={linkVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link to="contact" smooth={true} duration={500} className="text-2xl">
            Contact
          </Link>
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
