import { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
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
    },
  },
});

const skillsData = [
  { icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-500" />, tooltip: 'ReactJs', percentage: 'Intermediate' },
  { icon: <FaHtml5 className="text-4xl lg:text-6xl text-red-600" />, tooltip: 'HTML5', percentage: 'Intermediate' },
  { icon: <SiMongodb className="text-4xl lg:text-6xl text-green-500" />, tooltip: 'MongoDB', percentage: 'Intermediate' },
  { icon: <RiTailwindCssFill className="text-4xl lg:text-6xl text-cyan-300" />, tooltip: 'Tailwind CSS', percentage: 'Intermediate' },
  { icon: '', image: 'js-logo.png', tooltip: 'JavaScript', percentage: 'Intermediate' },
  { icon: <FaNodeJs className="text-4xl lg:text-6xl text-green-500" />, tooltip: 'NodeJs', percentage: 'Intermediate' },
  { icon: <GrMysql className="text-4xl lg:text-6xl text-sky-800" />, tooltip: 'MySQL', percentage: 'Intermediate' },
  { icon: '', image: 'figma.png', tooltip: 'Figma', percentage: 'Intermediate' },
  { icon: <FaGithub className="text-4xl lg:text-6xl text-white" />, tooltip: 'Github', percentage: 'Intermediate' },
  { icon: '', image: 'aws.png', tooltip: 'AWS', percentage: 'Beginner' },
  { icon: '', image: 'react-native.png', tooltip: 'React Native', percentage: 'Basic' },
  { icon: '', image: 'firebase.png', tooltip: 'Firebase', percentage: 'Basic' },
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 200, damping: 20 };
  const rotate = useSpring(useTransform(x, [-100, 100], [-25, 25]), springConfig);
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);

  const handleMouseMove = (event, index) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
    setHoveredSkill(index);
  };

  return (
    <div id="skills" className="border-b border-neutral-800 pb-16">
      <motion.h1 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.0 }} className="my-12 text-center text-4xl" >
        Skills
      </motion.h1>

      <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4" >
        {skillsData.map((skill, index) => (
          <motion.div key={index} variants={iconVar(2.5 + index * 0.5)} initial="initial" animate="animate"
            className="relative group rounded-2xl border-4 border-neutral-800 p-4"
            onMouseMove={(event) => handleMouseMove(event, index)} onMouseLeave={() => setHoveredSkill(null)}
          >
            {skill.image ? (
              <img src={skill.image} alt={skill.tooltip} className="object-contain w-10 h-10 lg:w-16 lg:h-16" />
            ) : (
              skill.icon
            )}

            {hoveredSkill === index && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 200, damping: 10 }, }}
                style={{ translateX: translateX, rotate: rotate, whiteSpace: "nowrap" }}
                className="absolute top-[-63px] -left-1 transform -translate-x-1/2 flex flex-col items-center bg-black text-white rounded-xl px-4 py-2 z-50 shadow-lg"
              >
                <div className="absolute inset-x-8 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />
                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />
                <div className="font-bold text-sm">{skill.tooltip}</div>
                <div className="text-xs">{skill.percentage}</div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;