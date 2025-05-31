import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
            Rohit Salgar
          </h2>
          
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-center max-w-md">
            Front-End Developer passionate about building exceptional digital experiences with modern web technologies.
          </p>
          
          <div className="flex space-x-6 mb-6">
            <motion.a
              href="https://github.com/Rohitsalgar125"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <FaGithub size={24} />
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/rohit-salgar-rohit125/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <FaLinkedin size={24} />
            </motion.a>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-700 w-full pt-6 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Rohit Salgar. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;