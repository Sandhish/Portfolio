import { RiReactjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { RxFigmaLogo } from "react-icons/rx";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";

const iconVar = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: [0.42, 0, 0.58, 1],
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
});

const skillsData = [
  { icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-500" />, tooltip: 'ReactJs', percentage: '50%' },
  { icon: <FaHtml5 className="text-4xl lg:text-6xl text-red-600" />, tooltip: 'HTML5' , percentage: '80%'},
  { icon: <SiMongodb className="text-4xl lg:text-6xl text-green-500" />, tooltip: 'MongoDB' , percentage: '50%'},
  { icon: <RiTailwindCssFill className="text-4xl lg:text-6xl text-cyan-300" />, tooltip: 'Tailwind CSS' , percentage: '40%'},
  { icon: <FaNodeJs className="text-4xl lg:text-6xl text-green-500" />, tooltip: 'NodeJs' , percentage: '40%'},
  { icon: <GrMysql className="text-4xl lg:text-6xl text-sky-800" />, tooltip: 'MySQL' , percentage: '40%'},
  { icon: <RxFigmaLogo className="text-4xl lg:text-6xl" />, tooltip: 'Figma' , percentage: '45%'},
  { icon: <FaGithub className="text-4xl lg:text-6xl text-white" />, tooltip: 'Github' , percentage: '60%'},
];

const Skills = () => {
  return (
    <div id="skills" className='border-b border-neutral-800 pb-16'>
      <motion.h1 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.0 }} className='my-12 text-center text-4xl'>Skills</motion.h1>
      <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.5 }} className='flex flex-wrap items-center justify-center gap-4'>

        {skillsData.map((skill, index) => (
          <motion.div key={index} variants={iconVar(2.5 + index * 0.5)} initial="initial" animate="animate" className='relative group rounded-2xl border-4 border-neutral-800 p-4'>
            {skill.icon}
            <div className="absolute left-1/2 bottom-full mb-2 hidden w-max -translate-x-1/2 transform px-2 py-1 text-sm bg-black rounded-md opacity-0 group-hover:block group-hover:opacity-100 transition-opacity duration-300">
              {skill.tooltip}<br />
              <div className="text-center">
                {skill.percentage}
              </div>
            </div>
          </motion.div>
        ))}

      </motion.div>
    </div>
  )
}

export default Skills;
