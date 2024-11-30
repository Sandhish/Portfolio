import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring', stiffness: 200, damping: 15,
      },
    },
  };

  const textHover = {
    scale: 1.1,
    transition: { duration: 0.3 },
  };

  return (
    <div id='navbar' className='flex items-center justify-between pt-4 px-4'>
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
            className={`lg:flex items-center justify-center gap-2.5 text-xl cursor-pointer flex flex-col absolute top-6 right-0 shadow-lg rounded-2xl py-4 px-7 bg-neutral-900 lg:flex-row`}>
            <button onClick={toggleMenu} className="text-xl absolute top-2 right-2 lg:hidden hover:text-white">
              <FaTimes />
            </button>
            <motion.div whileHover={textHover} onClick={() => setIsOpen(false)}>
              <Link to="home" smooth={true} duration={900}>Home</Link>
            </motion.div>
            <motion.div whileHover={textHover} onClick={() => setIsOpen(false)}>
              <Link to="about" smooth={true} duration={900}>About</Link>
            </motion.div>
            <motion.div whileHover={textHover} onClick={() => setIsOpen(false)}>
              <Link to="skills" smooth={true} duration={1000}>Skills</Link>
            </motion.div>
            <motion.div whileHover={textHover} onClick={() => setIsOpen(false)}>
              <Link to="projects" smooth={true} duration={1050}>Projects</Link>
            </motion.div>
            <motion.div whileHover={textHover} onClick={() => setIsOpen(false)}>
              <Link to="certifications" smooth={true} duration={1100}>Certifications</Link>
            </motion.div>
            <motion.div whileHover={textHover} onClick={() => setIsOpen(false)}>
              <Link to="achievements" smooth={true} duration={1150}>Achievements</Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className='hidden lg:flex items-center justify-center gap-9 text-xl cursor-pointer'>
        <motion.div whileHover={textHover}>
          <Link to="home" smooth={true} duration={900}>Home</Link>
        </motion.div>
        <motion.div whileHover={textHover}>
          <Link to="about" smooth={true} duration={900}>About</Link>
        </motion.div>
        <motion.div whileHover={textHover}>
          <Link to="skills" smooth={true} duration={1000}>Skills</Link>
        </motion.div>
        <motion.div whileHover={textHover}>
          <Link to="projects" smooth={true} duration={1050}>Projects</Link>
        </motion.div>
        <motion.div whileHover={textHover}>
          <Link to="certifications" smooth={true} duration={1100}>Certifications</Link>
        </motion.div>
        <motion.div whileHover={textHover}>
          <Link to="achievements" smooth={true} duration={1150}>Achievements</Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
