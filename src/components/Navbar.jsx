import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <nav className="mb-20 flex flex-col md:flex-row justify-between items-center py-6 px-4">
      <div className="flex flex-shrink-0 items-center mb-4 md:mb-0">
        <motion.h4
          variants={linkVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5 }}
          className="text-3xl mr-10"
        >
          RS
        </motion.h4>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex items-center justify-center text-2xl"
      >
        {isOpen ? "✖" : "☰"}
      </button>
      <div
        className={`flex-grow flex flex-col md:flex-row items-center gap-6 ${
          isOpen ? "flex" : "hidden"
        } md:flex`}
      >
        {["home", "technologies", "projects", "experience", "contact"].map(
          (section, index) => (
            <motion.div
              key={section}
              variants={linkVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-lg md:text-xl"
            >
              <Link to={section} smooth={true} duration={500}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </motion.div>
          )
        )}
      </div>
      <div className="flex gap-4 text-xl mt-4 md:mt-0">
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
