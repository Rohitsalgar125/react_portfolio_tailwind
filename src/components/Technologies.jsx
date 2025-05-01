import { motion } from "framer-motion";
import { DiJavascript } from "react-icons/di";
import { FaCss3, FaGithub, FaHtml5, FaNodeJs, FaWindows } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { useState } from "react";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  const techIcons = [
    { icon: <FaHtml5 className="text-7xl text-orange-700" />, name: "HTML5" },
    { icon: <FaCss3 className="text-7xl text-yellow-400" />, name: "CSS3" },
    { icon: <DiJavascript className="text-7xl text-yellow-700" />, name: "JavaScript" },
    { icon: <RiReactjsLine className="text-7xl text-cyan-700" />, name: "React" },
    { icon: <TbBrandNextjs className="text-7xl text-black-700" />, name: "Next.js" },
    { icon: <SiMongodb className="text-7xl text-green-700" />, name: "MongoDB" },
    { icon: <SiExpress className="text-7xl text-black-500" />, name: "Express" },
    { icon: <FaNodeJs className="text-7xl text-green-500" />, name: "Node.js" },
  ];

  const toolIcons = [
    { icon: <FaGithub className="text-7xl text-gray-500" />, name: "GitHub" },
    { icon: <VscVscode className="text-7xl text-blue-400" />, name: "VS Code" },
    { icon: <FaWindows className="text-7xl text-blue-400" />, name: "Windows" },
  ];

  return (
    <div id="technologies" className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {techIcons.map((tech, index) => (
          <motion.div
            key={index}
            variants={iconVariants(2.5 + index * 0.5)}
            initial="initial"
            animate="animate"
            className="relative rounded-2xl border-4 border-neutral-800 p-4"
            onMouseEnter={() => setHoveredTech(tech.name)}
            onMouseLeave={() => setHoveredTech(null)}
          >
            {tech.icon}
            {hoveredTech === tech.name && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-neutral-800 text-white px-2 py-1 rounded-md text-sm whitespace-nowrap"
              >
                {tech.name}
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col justify-center items-center gap-2 my-10"
      >
        <motion.h4
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="text-center text-2xl"
        >
          Tools
        </motion.h4>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-4 m-4"
        >
          {toolIcons.map((tool, index) => (
            <motion.div
              key={index}
              variants={iconVariants(4)}
              initial="initial"
              animate="animate"
              className="relative rounded-2xl border-4 border-neutral-800 p-4"
              onMouseEnter={() => setHoveredTech(tool.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              {tool.icon}
              {hoveredTech === tool.name && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-neutral-800 text-white px-2 py-1 rounded-md text-sm whitespace-nowrap"
                >
                  {tool.name}
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;