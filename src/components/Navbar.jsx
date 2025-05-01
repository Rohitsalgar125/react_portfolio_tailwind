import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { GITHUB_URL, INSTA_URL, LINKEDIN_URL } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const linkVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };

  const menuVariants = {
    open: { 
      opacity: 1,
      height: "auto",
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    },
    closed: { 
      opacity: 0,
      height: 0,
      transition: { 
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  return (
    <nav id="nav" className="mb-20 flex flex-col md:flex-row justify-between items-center py-6 px-4 relative">
      <div className="flex-shrink-0 flex items-center w-full md:w-auto justify-between md:justify-start">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold"
        >
          Rohit Salgar
        </motion.div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl absolute right-4 top-6 z-50"
          aria-label="Toggle menu"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      <AnimatePresence>
        {(isOpen || !isMobile) && (
          <motion.div
            initial="closed"
            animate={isOpen || !isMobile ? "open" : "closed"}
            exit="closed"
            variants={menuVariants}
            className={`md:flex flex-col md:flex-row items-center gap-6 w-full md:w-auto mt-4 md:mt-0 overflow-hidden`}
          >
            {["home", "technologies", "projects", "experience", "contact"].map(
              (section,) => (
                <motion.div
                  key={section}
                  variants={linkVariants}
                  initial="initial"
                  animate={isOpen || !isMobile ? "animate" : "initial"}
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="text-lg md:text-xl cursor-pointer hover:border-b border-indigo-300"
                  onClick={() => setIsOpen(false)}
                >
                  <Link to={section} smooth={true} duration={500}>
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                </motion.div>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className={`${isMobile && !isOpen ? "hidden" : "flex"} gap-4 text-xl mt-4 md:mt-0`}
      >
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-indigo-400 transition-colors" />
        </a>
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-indigo-400 transition-colors" />
        </a>
        <a href={INSTA_URL} target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-indigo-400 transition-colors" />
        </a>
      </motion.div>
    </nav>
  );
};

export default Navbar;