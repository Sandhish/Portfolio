import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='mb-14 flex  items-center justify-between '>
      <div className='flex flex-shrink-0 items-center text-4xl font-bold cursor-pointer'>JS</div>
      <div className="m-6 flex items-center justify-center gap-5 text-3xl cursor-pointer">
        <a href="https://www.linkedin.com/in/sandhish-j-74359b256/"><FaLinkedin /></a>
        <a href="https://github.com/sandhish"><FaGithub /></a> 
        <a href="https://www.instagram.com/sandhish._/"><FaInstagram /></a> 
        <a href="https://www.facebook.com/sandhish.jaganathan"><FaFacebook /></a>
      </div>
    </div>
  )
}

export default Navbar