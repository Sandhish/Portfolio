import React from 'react';
import { PROJECTS } from '../../Constants/constant';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div id='projects' className='border-b border-neutral-900 pb-4'>
      <motion.h1 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.0}} className='my-12 text-center text-4xl'>Projects</motion.h1>
      <div className='flex flex-col items-center'>
        {PROJECTS.map((project, index) => (
          <div key={index} className='mb-4 lg:w-3/4 flex flex-wrap justify-center border border-neutral-800'>
            <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1}} className='w-full lg:w-1/4 flex justify-center'>
              <img src={project.image} className='my-3 rounded-xl p-2' alt={project.title} style={{ height: '220px' }} />
            </motion.div>

            <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className="w-full max-w-xl lg:w-full p-5">
              <h6 className='mb-2 font-semibold flex lg:justify-start justify-center lg:ml-4'>{project.title}</h6>
              <p className='mb-4 text-neutral-400 flex justify-center lg:ml-4'>{project.description}</p>
              <div className='flex justify-center lg:justify-start flex-wrap lg:ml-4'>
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className='mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700'>
                    {tech}
                  </span>
                ))}
              </div>

              <div className='flex justify-center lg:justify-start lg:ml-4 mt-3'>
                <a href={project.demo} target='_blank' rel='noopener noreferrer' className='mr-4 cursor-pointer bg-purple-800 text-sm text-white px-3 rounded-3xl flex items-center'>
                  Try Now <span className='ml-2'>&rarr;</span>
                </a>

                <a href={project.github} target='_blank' rel='noopener noreferrer' className='bg-neutral-900 text-sm text-white px-4 py-2 rounded-lg'>
                  GitHub
                </a>
              </div>

            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
