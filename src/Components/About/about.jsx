import React from 'react'
import { ABOUT_TEXT } from '../../Constants/constant'
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id='about' className='border-b border-neutral-900 pb-4'>
      <motion.h1 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.0 }} className='my-12 text-center text-4xl'>
        About
        <span className='text-neutral-500'> Me</span>
      </motion.h1>

      <div className='flex flex-wrap'>
        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 0.7 }} className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex items-center justify-center'>
            <img className='rounded-2xl p-7 2xl:p-0 xl:p-0 lg:p-0 md:p-4 sm:p-6 transform' width={300} height={300} src="https://media.architecturaldigest.com/photos/5f241de2c850b2a36b415024/master/w_1600%2Cc_limit/Luke-logo.png" alt="about" />
          </div>
        </motion.div>
        
        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 0.7 }} className='w-full lg:w-1/2'>
          <div className='flex justify-center lg:justify-start lg:mt-9'>
            <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About