import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id='navbar' className='flex items-center justify-between p-4'>
      <div className='flex flex-shrink-0 items-center text-5xl font-bold cursor-pointer mt-1'>
        <a href="#navbar">JS</a>
      </div>
      <div className="lg:hidden">
        <button onClick={toggleMenu} className={`text-3xl ${isOpen ? "hidden":"visible"}`}>
          <FaBars />
        </button>
      </div>
      <div className={`lg:flex items-center justify-center gap-7 text-xl cursor-pointer ${isOpen ? 'flex flex-col absolute top-10 right-0 gap-3 shadow-lg rounded-2xl py-4 px-7 bg-neutral-900' : 'hidden'} lg:flex-row`}>
        <button onClick={toggleMenu} className="text-xl absolute top-2 right-2 lg:hidden">
          <FaTimes />
        </button>
        <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        <a href="#skills" onClick={() => setIsOpen(false)}>Skill Sets</a>
        <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
      </div>
    </div>
  );
}

export default Navbar;
