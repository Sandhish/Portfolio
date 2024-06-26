import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // fixed top-0 left-0 w-full flex items-center justify-between p-4 shadow-lg z-50
    <div id='navbar' className='flex items-center justify-between p-4'>
      <div className='flex flex-shrink-0 items-center text-5xl font-bold cursor-pointer mt-1'>
        <a href="#navbar">JS</a>
      </div>
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-3xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div className={`lg:flex items-center justify-center gap-6 text-xl cursor-pointer ${isOpen ? 'block' : 'hidden'} lg:block`}>
        <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        <a href="#skills" onClick={() => setIsOpen(false)}>Skill Sets</a>
        <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
      </div>
    </div>
  );
}

export default Navbar;
