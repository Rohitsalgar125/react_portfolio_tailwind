import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div id="experience" className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-center text-4xl my-20"
      >
        Experience
      </motion.h1>
      <div>
        {EXPERIENCES?.map((experience, index) => {
          return (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4 "
              >
                <p className="mb-2 text-sm text-neutral-400">
                  {experience.year}
                </p>
              </motion.div>
              <motion.div
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full max-x-xl lg:w-3/4"
              >
                <h6 className="mb-2 font-semibold ">
                  {experience.role} -{" "}
                  <span className="text-sm text-purple-100">
                    {experience.company}
                  </span>
                </h6>
                <p className="mb-4 text-neutral-400 ">
                  {experience.description}
                </p>
                {experience.technologies?.map((tech, i) => {
                  return (
                    <span
                      className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                      key={i}
                    >
                      {tech}
                    </span>
                  );
                })}
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
