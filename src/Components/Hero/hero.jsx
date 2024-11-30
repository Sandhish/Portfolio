import { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';
import { TiHome } from "react-icons/ti";
import { SiGmail, SiLeetcode } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

const Hero = () => {
  const texts = ["Full Stack Developer", "Enthusiastic", "Quick Learner", "Programmer"];
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000);
    return () => clearInterval(interval);
  });

  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    }
  });

  const iconHover = {
    scale: 1.2,
    transition: { duration: 0.3 },
  };

  return (
    <div id="home" className="border-b border-neutral-900">
      <div className="flex flex-wrap pb-3 mt-8">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center 2xl:pl-44 lg:pl-24 lg:items-start">
            <motion.h1 variants={container(0)} initial="hidden" animate="visible"
              className="pb-4 lg:p-4 text-4xl font-light tracking-tight 2xl:text-7xl 2xl:mt-44 mt-12 xl:text-6xl xl:mt-40 lg:mt-24 lg:text-5xl">Hello, I'm</motion.h1>
            <motion.h1 variants={container(0)} initial="hidden" animate="visible"
              className="pb-8 lg:p-4 text-6xl font-light tracking-tight 2xl:text-7xl xl:text-6xl lg:text-6xl">Sandhish</motion.h1>

            <motion.div variants={container(0.5)} initial="hidden" animate="visible"
              className="lg:p-5 p-2 flex items-center justify-center gap-5 text-3xl cursor-pointer">
              <motion.a href="mailto:sandhish19@gmail.com" whileHover={iconHover}><SiGmail /></motion.a>
              <motion.a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/sandhish/" whileHover={iconHover}><FaLinkedin /></motion.a>
              <motion.a target='_blank' rel="noopener noreferrer" href="https://github.com/sandhish" whileHover={iconHover}><FaGithub /></motion.a>
              <motion.a target='_blank' rel="noopener noreferrer" href="https://leetcode.com/u/Sandhish/" whileHover={iconHover}><SiLeetcode /></motion.a>
              <motion.a target='_blank' rel="noopener noreferrer" href="https://www.instagram.com/sandhish._/" whileHover={iconHover}><FaInstagram /></motion.a>
              <motion.a target='_blank' rel="noopener noreferrer" href="https://www.facebook.com/sandhish.jaganathan" whileHover={iconHover}><FaFacebook /></motion.a>
            </motion.div>

            <motion.div variants={container(1)} initial="hidden" animate="visible" className="lg:px-5 py-3 flex justify-center items-center">
              <AnimatePresence mode='wait'>
                <motion.span key={textIndex} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}
                  className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-wide text-transparent">
                  {texts[textIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <motion.a href="https://drive.google.com/file/d/12tVmtdBqix1Kaaoa8MiizGgmqdZX-rbH/view?usp=sharing" download="Sandhish_Resume.pdf"
              variants={container(1.5)} initial="hidden" animate="visible" whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              className="mt-2 lg:ml-4 flex gap-2 bg-zinc-950 rounded-3xl text-lg px-5 py-1.5 text-center me-2 mb-2 border border-white text-gray-300">
              Resume
              <svg height="28" width="20" viewBox="0 0 640 512">
                <path
                  d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"
                  fill="white"
                ></path>
              </svg>
            </motion.a>
          </div>
        </div>

        <div className="w-full lg:px-16 2xl:px-32 lg:p-10 h-5/6 lg:w-1/2 flex justify-center lg:justify-end">
          <motion.img
            initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.2 }}
            src="https://i.imgur.com/8lH5EON.png" className="rounded-[32px] p-6" alt="Sandhish" />
        </div>
      </div>

      <Link to="navbar" smooth={true} duration={1300}>
        <button className="fixed bottom-4 right-4 z-50 bg-neutral-700 hover:bg-neutral-900 text-white font-bold rounded-full shadow-lg transition duration-300 ease-in-out flex items-center justify-center w-12 h-12">
          <TiHome className="text-2xl" />
        </button>
      </Link>
    </div>
  );
}

export default Hero;
