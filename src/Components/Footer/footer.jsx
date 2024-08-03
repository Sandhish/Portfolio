import { IoMail } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <div className='border-b border-neutral-900 p-4'>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="py-4 flex justify-center">

                <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex items-center" >
                    <IoMail className="mr-2 text-2xl" />
                    <input type="email" className="bg-transparent border-b border-gray-400 outline-none p-1 mr-2 lg:w-56 w-[220px]" placeholder="Send email to get connected..." />
                    <button type="submit">
                        <FaLocationArrow className="text-2xl" />
                    </button>
                </motion.form>

                <motion.a initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
                    href="https://wa.me/9500896146" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="text-2xl ml-2 mt-1 text-green-500" />
                </motion.a>

            </motion.div>
            
            <div className="text-center text-gray-500 pt-4">
                Copyright &copy; 2024 | All rights reserved | 💙 by Sandhish
            </div>
        </div>
    )
}

export default Footer;
