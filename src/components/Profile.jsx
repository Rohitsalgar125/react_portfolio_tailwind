import React from "react";
import { HERO_CONTENT, HERO_NAME, HERO_ROLE } from "../constants/index";
import profilepic from "../assets/kevinRushProfile.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
});

const isMobile = window.innerWidth < 768;

const Profile = () => {
  return (
    <div id="home" className=" border-b border-neutral-900 pb-4 lg:mb-35">
      <div className=" flex flex-wrap">
        <div className=" w-full lg:w-1/2 ">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className={`pb-16  font-thin tracking-tight lg:mt-16 ${isMobile ? "text-4xl" : "text-8xl"}`}
            >
              {HERO_NAME}
            </motion.h1>
            <motion.span
              variants={container(0.6)}
              initial="hidden"
              animate="visible"
              className={`bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text  ${isMobile ? "text-4xl" : "text-4xl"} tracking-tight text-transparent`}
            >
              {HERO_ROLE}
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 ">
          <div className="flex justify-center ">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilepic}
              alt="profile"
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
