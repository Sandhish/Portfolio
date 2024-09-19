import { IoMail } from "react-icons/io5";
import { FaLocationArrow, FaWhatsapp } from "react-icons/fa";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import emailjs from 'emailjs-com';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [hovered, setHovered] = useState(false);

    const springConfig = { stiffness: 100, damping: 5 };
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotate = useSpring(
        useTransform(x, [-100, 100], [-45, 45]),
        springConfig
    );
    const translateX = useSpring(
        useTransform(x, [-100, 100], [-50, 50]),
        springConfig
    );

    const handleMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;
        x.set(offsetX - rect.width / 2);
        y.set(offsetY - rect.height / 2);
    };

    const iconHover = {
        scale: 1.2,
        transition: { duration: 0.2 },
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const templateParams = {
            from_email: email,
        };

        const promise = emailjs.send(
            import.meta.env.VITE_REACT_APP_SERVICEID,
            import.meta.env.VITE_REACT_APP_TEMPLATEID,
            templateParams,
            import.meta.env.VITE_REACT_APP_PUBLICKEY
        );

        toast.promise(promise, {
            loading: 'Sending...',
            success: 'Email Sent!',
            error: 'Failed to send Email',
        });

        try {
            await promise;
            setEmail('');
        } catch (error) {
            console.error('Failed to send email:', error);
        }
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
                        <FaLocationArrow className="text-xl" />
                    </motion.button>
                </motion.form>

                <div className="relative flex items-center justify-center" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                    <motion.a
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} whileHover={iconHover}
                        href="https://wa.me/919500896146" target="_blank" rel="noopener noreferrer" onMouseMove={handleMouseMove} className="relative">
                        <FaWhatsapp className="text-3xl ml-3 text-green-500" />
                    </motion.a>

                    {hovered && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.6 }}
                            animate={{
                                opacity: 1, y: 0, scale: 1,
                                transition: { type: "spring", stiffness: 260, damping: 10 },
                            }}
                            style={{ translateX: translateX, rotate: rotate, whiteSpace: "nowrap" }}
                            className="absolute top-[-57px] cursor-pointer -left-8 transform -translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2">
                            <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />
                            <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />
                            <div className="font-bold text-white relative z-30 text-sm"> WhatsApp </div>
                            <div className="text-white text-xs">+91 9500896146</div>
                        </motion.div>
                    )}
                </div>
            </motion.div>

            <div className="text-center lg:text-sm text-xs text-gray-500 pt-4">
                Copyright &copy; 2024 | All rights reserved | 💙 by Sandhish
            </div>

            <Toaster position="top-center" reverseOrder={false} />
        </div>
    );
};

export default Footer;
