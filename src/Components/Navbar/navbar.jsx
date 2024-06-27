import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 15,
      },
    },
  };

  return (
    <div id='navbar' className='flex items-center justify-between p-4'>
      <div className='flex flex-shrink-0 items-center text-5xl font-bold cursor-pointer mt-1'>
        <a href="#navbar">JS</a>
      </div>
      <div className="lg:hidden">
        <button onClick={toggleMenu} className={`text-3xl ${isOpen ? "hidden" : "visible mt-3"}`}>
          <FaBars />
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial="hidden" animate="visible" exit="hidden" variants={menuVariants}
            className={`lg:flex items-center justify-center gap-2.5 text-xl cursor-pointer flex flex-col absolute top-10 right-0 shadow-lg rounded-2xl py-4 px-7 bg-neutral-900 lg:flex-row`}>
            <button onClick={toggleMenu} className="text-xl absolute top-2 right-2 lg:hidden">
              <FaTimes />
            </button>
            <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#about" onClick={() => setIsOpen(false)}>About</a>
            <a href="#skills" onClick={() => setIsOpen(false)}>Skill Sets</a>
            <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          </motion.div>
        )}
      </AnimatePresence>
      <div className='hidden lg:flex items-center justify-center gap-9 text-xl cursor-pointer'>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skill Sets</a>
        <a href="#projects">Projects</a>
      </div>
    </div>
  );
}

export default Navbar;
