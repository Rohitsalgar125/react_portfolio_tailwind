import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="text-indigo-600 dark:text-indigo-400">About</span> Me
        </h2>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            I am a passionate Front-End Developer with over 3+ years of professional experience 
            in designing and implementing scalable web-based applications across various domains 
            like Logistics and e-commerce.
          </p>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            I have a proven ability to lead and manage full project life cycles, from planning 
            and requirement gathering to testing and deployment of enterprise web applications.
          </p>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            My expertise lies in building Single Page Applications using React ecosystem and 
            creating responsive, user-friendly interfaces with modern CSS frameworks like 
            Tailwind CSS and Bootstrap.
          </p>
          
          <div className="mt-6 flex flex-wrap gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 rounded-full text-indigo-700 dark:text-indigo-200"
            >
              React.js
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 rounded-full text-indigo-700 dark:text-indigo-200"
            >
              Next.js
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 rounded-full text-indigo-700 dark:text-indigo-200"
            >
              Node.js
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 rounded-full text-indigo-700 dark:text-indigo-200"
            >
              Tailwind CSS
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;