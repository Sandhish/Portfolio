import { IoMail } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';
import { useState } from 'react';

const Footer = () => {
    const [email, setEmail] = useState('');

    const iconHover = {
        scale: 1.2,
        transition: { duration: 0.2 },
      };

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            from_email: email,
        };

        emailjs.send(import.meta.env.VITE_REACT_APP_SERVICEID,import.meta.env.VITE_REACT_APP_TEMPLATEID, templateParams, import.meta.env.VITE_REACT_APP_PUBLICKEY)
            .then((response) => {
                console.log('Email sent successfully:', response);
                setEmail('');
            }, (error) => {
                console.error('Failed to send email:', error);
            });
    };

    return (
        <div className='border-b border-neutral-900 p-4'>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="py-4 flex justify-center">
                
                <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex items-center">
                    <IoMail className="mr-2 text-2xl" />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                        className="bg-transparent border-b border-gray-400 outline-none p-1 mr-2 lg:w-56 w-[220px]" 
                        placeholder="Send email to get connected..." required />
                    <motion.button type="submit" whileHover={iconHover}>
                        <FaLocationArrow className="text-2xl" />
                    </motion.button>
                </motion.form>

                <motion.a initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={iconHover} href="https://wa.me/919500896146" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="text-2xl ml-2 mt-1 text-green-500" />
                </motion.a>
            </motion.div>

            <div className="text-center lg:text-sm text-xs text-gray-500 pt-4">
                Copyright &copy; 2024 | All rights reserved | 💙 by Sandhish
            </div>
        </div>
    );
};

export default Footer;
