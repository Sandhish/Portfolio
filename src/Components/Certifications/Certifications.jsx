import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

const Certifications = () => {
    const certifications = [
        {
            id: 1,
            img: 'Raattai.png',
            title: 'Frontend Dev in the MERN & MEAN Stack',
            desc: '-- Raattai (FreeLancer)',
        },
        {
            id: 2,
            img: 'mongodb.jpg',
            title: 'MongoDB Associate Developer',
            desc: '-- MongoDB University',
        },
        {
            id: 3,
            img: 'excel.png',
            title: 'Excel Skills Job Simulation',
            desc: '-- JP Morgan',
        },
    ];

    return (
        <div className="border-b border-neutral-800 pb-16" id="certifications">
            <motion.h1 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1 }} className="my-12 text-center text-4xl" >
                Certifications and Internships
            </motion.h1>

            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1, delay: 0.2 }} >
                <Swiper className="mx-auto max-w-[850px]" loop={true} grabCursor={true} spaceBetween={24} pagination={{ clickable: true }}
                    breakpoints={{
                        576: { slidesPerView: 2 },
                        768: { slidesPerView: 2, spaceBetween: 48 },
                    }}
                    modules={[Pagination]}
                >
                    {certifications.map(({ id, img, title, desc }) => (
                        <SwiperSlide
                            className="bg-transparent border border-gray-200 p-6 rounded-2xl mb-12 flex flex-col gap-4"
                            key={id}
                        >
                            <img src={img} alt={title} className="w-16 h-16 rounded-full" />
                            <h3 className="text-lg font-medium mb-1">{title}</h3>
                            <p className="text-sm text-gray-400">{desc}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>

            <style>
                {`
                    .swiper-pagination-bullet {
                        background-color: #ddd5e9;
                    }
                    .swiper-pagination-bullet-active {
                        background-color: #1d4ed8;
                    }
                `}
            </style>
        </div>
    );
};

export default Certifications;
