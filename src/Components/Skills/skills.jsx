import { RiReactjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { animate, motion } from "framer-motion";

const iconVar = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
})

const Skills = () => {
  return (
    <div id="skills" className='border-b border-neutral-800 pb-16'>
      <motion.h1 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.0 }} className='my-12 text-center text-4xl'>Skill Sets</motion.h1>
      <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.5 }} className='flex flex-wrap items-center justify-center gap-4'>

        <motion.div variants={iconVar(2.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
          <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-500" />
        </motion.div>

        <motion.div variants={iconVar(3)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaHtml5 className="text-4xl lg:text-6xl text-red-600" />
        </motion.div>

        <motion.div variants={iconVar(2)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiMongodb className="text-4xl lg:text-6xl text-green-500" />
        </motion.div>

        <motion.div variants={iconVar(5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
          <RiTailwindCssFill className="text-4xl lg:text-6xl text-cyan-300" />
        </motion.div>

        <motion.div variants={iconVar(3)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaNodeJs className="text-4xl lg:text-6xl text-green-500" />
        </motion.div>

        <motion.div variants={iconVar(4)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
          <GrMysql className="text-4xl lg:text-6xl text-sky-800" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Skills