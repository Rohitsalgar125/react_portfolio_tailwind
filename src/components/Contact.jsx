import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { Link } from "react-scroll";

const Contact = () => {
  return (
    <div id="contact" className="border-b border-neutral-700 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className="text-center tracking-tighter"
      >
        <p className="my-4 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text:4xl tracking-tight text-transparent">
          {CONTACT.address}
        </p>
        <p className="my-4 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text:4xl tracking-tight text-transparent">
          {CONTACT.phoneNo}
        </p>
        <p
          className="my-4 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text:4xl tracking-tight text-transparent"
        >
          {CONTACT.email}
        </p>
      </motion.div>
      <motion.div className="flex justify-end">
        <Link to="nav" duration={1000} smooth={true}>
          <IoIosArrowDropupCircle
            color="white"
            className=" cursor-pointer bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text:4xl tracking-tight text-transparent"
            size={30}
          />
        </Link>
      </motion.div>
    </div>
  );
};

export default Contact;
