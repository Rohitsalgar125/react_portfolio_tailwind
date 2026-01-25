import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import photo from '../assets/profile.jpg'

const Hero = () => {
  return (
    <section id="home" className="py-20 md:py-32">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I am{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Rohit Salgar
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
           Senior Front-End Developer
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            I build exceptional digital experiences with modern web
            technologies. With over 4+ years of professional experience in
            designing and implementing scalable web-based applications.
          </p>

          <div className="space-y-3">
            <div className="flex items-center text-gray-700 dark:text-gray-300">
              <FiMail className="mr-3" />
              <span>rhohitsalgar@gmail.com</span>
            </div>
            <div className="flex items-center text-gray-700 dark:text-gray-300">
              <FiPhone className="mr-3" />
              <span>(+91) 8779404201</span>
            </div>
            <div className="flex items-center text-gray-700 dark:text-gray-300">
              <FiMapPin className="mr-3" />
              <span>Solapur, Maharashtra</span>
            </div>
          </div>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-8 px-8 py-3 bg-indigo-600 text-white rounded-lg font-medium shadow-lg hover:bg-indigo-700 transition-colors"
          >
            Contact Me
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-indigo-100 dark:bg-indigo-900 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute inset-4 border-4 border-indigo-500 rounded-full animate-spin-slow"></div>
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <div className="w-48 h-48 md:w-64 md:h-64 bg-indigo-500 rounded-full overflow-hidden shadow-xl">
                {/* Replace with your actual image */}
                <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                  <img src={photo} alt="profilephoto" className=" object-fill" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
