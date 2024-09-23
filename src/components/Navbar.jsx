import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { GITHUB_URL, INSTA_URL, LINKEDIN_URL } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
  };

  const isMobile = window.innerWidth < 768;

  return (
    <nav
      id="nav"
      className=" mb-20 flex flex-col md:flex-row justify-between items-center py-6 px-4"
    >
      <div className="flex flex-shrink-0 items-center mb-4 md:mb-0">
        <motion.h4
          variants={linkVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5 }}
          className={`text-3xl mr-10  ${isMobile ? "ml-9" : ""}`}
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
        className={`flex-grow flex flex-col md:flex-row items-center ${
          isOpen ? "flex" : "hidden"
        } md:flex ${isMobile ? "gap-1" : "gap-6"}`}
      >
        {["home", "technologies", "projects", "experience", "contact"].map(
          (section, index) => (
            <motion.div
              key={section}
              variants={linkVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-lg md:text-xl cursor-pointer hover:border-b border-indigo-300"
            >
              <Link to={section} smooth={true} duration={500}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </motion.div>
          )
        )}
      </div>
      <div className="flex gap-4 text-xl mt-4 md:mt-0">
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href={INSTA_URL} target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
