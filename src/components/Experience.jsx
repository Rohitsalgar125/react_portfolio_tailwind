import { motion } from 'framer-motion';
import { experience } from '../constants/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">
          Work <span className="text-indigo-600 dark:text-indigo-400">Experience</span>
        </h2>
        
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                  {exp.position}
                </h3>
                <span className="text-gray-600 dark:text-gray-300">
                  {exp.company} | {exp.location} | {exp.duration}
                </span>
              </div>
              
              <ul className="space-y-2">
                {exp.responsibilities.map((responsibility, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 5 }}
                    className="flex items-start text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-indigo-500 mr-2">•</span>
                    {responsibility}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;