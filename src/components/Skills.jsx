import { motion } from 'framer-motion';
import { skills } from '../constants/skills';

const Skills = () => {
  const categories = [
    { name: 'Frontend', color: 'bg-blue-100 dark:bg-blue-900', text: 'text-blue-700 dark:text-blue-200' },
    { name: 'Backend', color: 'bg-green-100 dark:bg-green-900', text: 'text-green-700 dark:text-green-200' },
    { name: 'Database', color: 'bg-purple-100 dark:bg-purple-900', text: 'text-purple-700 dark:text-purple-200' },
    { name: 'Tools', color: 'bg-yellow-100 dark:bg-yellow-900', text: 'text-yellow-700 dark:text-yellow-200' },
  ];

  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">
          My <span className="text-indigo-600 dark:text-indigo-400">Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <motion.div
              key={category.name}
              whileHover={{ y: -5 }}
              className={`${category.color} p-6 rounded-xl shadow-md`}
            >
              <h3 className={`${category.text} text-xl font-semibold mb-4`}>{category.name}</h3>
              <div className="flex flex-wrap gap-3">
                {skills
                  .filter((skill) => skill.category === category.name.toLowerCase())
                  .map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.1 }}
                      className={`px-4 py-2 ${category.color} ${category.text} rounded-full flex items-center`}
                    >
                      {skill.icon && <skill.icon className="mr-2" />}
                      {skill.name}
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;