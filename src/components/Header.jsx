/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { FiMoon, FiSun } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = ({ darkMode, setDarkMode }) => {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold text-indigo-600 dark:text-indigo-400"
          >
            Rohit S
          </motion.a>
          
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <motion.a
              href="https://github.com/Rohitsalgar125"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <FaGithub size={20} />
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/rohit-salgar-rohit125/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <FaLinkedin size={20} />
            </motion.a>
            
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;