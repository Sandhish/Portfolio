import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const texts = ["Full Stack Developer", "Programmer", "Enthusiastic", "Quick Learner"];
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    }
  });

  return (
    <div id="home" className="border-b border-neutral-900">
      <div className="flex flex-wrap pb-4 mt-8">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:pl-20 lg:items-start">
            <motion.h1 variants={container(0)} initial="hidden" animate="visible"
              className="pb-4 lg:p-4 text-4xl font-light tracking-tight mt-12 lg:mt-48 lg:text-7xl">Hello, I'm</motion.h1>
            <motion.h1 variants={container(0)} initial="hidden" animate="visible"
              className="pb-8 lg:p-4 text-6xl font-light tracking-tight lg:text-7xl">Sandhish</motion.h1>

            <motion.div variants={container(0.5)} initial="hidden" animate="visible"
              className="lg:p-5 p-2 flex items-center justify-center gap-5 text-3xl cursor-pointer">
              <a href="mailto:sandhish19@gmail.com"><SiGmail /></a>
              <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/sandhish-j-74359b256/"><FaLinkedin /></a>
              <a target='_blank' rel="noopener noreferrer" href="https://github.com/sandhish"><FaGithub /></a>
              <a target='_blank' rel="noopener noreferrer" href="https://www.instagram.com/sandhish._/"><FaInstagram /></a>
              <a target='_blank' rel="noopener noreferrer" href="https://www.facebook.com/sandhish.jaganathan"><FaFacebook /></a>
            </motion.div>

            <motion.div variants={container(1)} initial="hidden" animate="visible" className="lg:px-5 py-4 flex justify-center items-center">
              <AnimatePresence mode='wait'>
                <motion.span key={textIndex} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}
                  className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-wide text-transparent">
                  {texts[textIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <motion.a href="https://drive.google.com/file/d/19NplZ9O4kq6pmqkL3VdgVJHcHTzbZj25/view?usp=drive_link" download="Sandhish_Resume.pdf"
              variants={container(1.5)} initial="hidden" animate="visible"
              className="mt-2 lg:ml-3 bg-zinc-950 rounded-3xl text-lg px-5 py-2.5 text-center me-2 mb-2 border border-white text-gray-300">
              Download Resume
            </motion.a>
          </div>
        </div>

        <div className="w-full lg:px-16 lg:p-10 h-5/6 lg:w-1/2 flex justify-center lg:justify-end">
          <motion.img
            initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.2 }}
            src="https://i.imgur.com/8lH5EON.png" className="rounded-[32px] p-6" alt="Sandhish" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
