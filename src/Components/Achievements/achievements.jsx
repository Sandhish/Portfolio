import { motion } from "framer-motion";

const Achievements = () => {
    return (
        <div id='achievements' className='border-b border-neutral-800 pb-4'>
            <motion.h1 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.0 }} className='my-12 text-center text-4xl'>Achievements</motion.h1>


        </div>
    )
}

export default Achievements