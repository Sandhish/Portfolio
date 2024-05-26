import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='mb-20 flex  items-center justify-between py-1'>
      <div className='flex flex-shrink-0 items-center text-3xl '>
        JS
      </div>
      <div className="m-6 flex items-center justify-center gap-5 text-3xl">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
        <FaFacebook />
      </div>
    </div>
  )
}

export default Navbar