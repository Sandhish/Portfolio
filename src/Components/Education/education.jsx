import { motion } from "framer-motion";

const RadialProgressBar = ({ percentage, isMobile }) => {
    const radius = isMobile ? 23 : 30;
    const stroke = 4;
    const normalizedRadius = radius - stroke;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <svg height={radius * 2} width={radius * 2} className="relative">
            <circle stroke="#e2e8f0" fill="transparent" strokeWidth={stroke}
                r={normalizedRadius} cx={radius} cy={radius} />
            <motion.circle stroke="#3b82f6" fill="transparent"
                strokeWidth={stroke} strokeDasharray={circumference + " " + circumference}
                style={{ strokeDashoffset }} strokeLinecap="round" r={normalizedRadius} 
                cx={radius} cy={radius} initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset }} transition={{ duration: 1 }} />
            <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize={isMobile ? "9" : "10"} fill="#fff">
                {percentage}%
            </text>
        </svg>
    );
};

const Education = () => {
    const isMobile = window.innerWidth <= 768;

    return (
        <div className='border-b border-neutral-900 pb-14'>
            <motion.h1 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.0 }} className='my-12 text-center text-4xl'>
                Education
            </motion.h1>

            <div className="flex justify-center">
                <ol className="relative border-0 lg:flex lg:justify-between lg:w-full lg:border-0">

                    <motion.li whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -70 }} transition={{ duration: 0.7, delay: 0.2 }}
                        className="mb-10 ms-7 lg:mb-0 lg:flex lg:items-center lg:flex-col lg:relative lg:ms-0 lg:px-8">
                        <div className="flex items-center">
                            <RadialProgressBar percentage={97.2} isMobile={isMobile} />
                            <div className="ms-4">
                                <h3 className="text-lg mb-1 font-semibold dark:text-white">SSLC</h3>
                                <time className="block mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">(2019 - 2020)</time>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">K.V.M.Hr.Sec.School, Chennimalai</p>
                            </div>
                        </div>
                    </motion.li>

                    <motion.li whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -70 }} transition={{ duration: 0.7, delay: 0.3 }}
                        className="mb-10 ms-7 lg:mb-0 lg:flex lg:items-center lg:flex-col lg:relative lg:ms-0 lg:px-8">
                        <div className="flex items-center">
                            <RadialProgressBar percentage={92.5} isMobile={isMobile} />
                            <div className="ms-4">
                                <h3 className="text-lg mb-1 font-semibold dark:text-white">HSC</h3>
                                <time className="block mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">(2020 - 2022)</time>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">K.V.M.Hr.Sec.School, Chennimalai</p>
                            </div>
                        </div>
                    </motion.li>

                    <motion.li whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -70 }} transition={{ duration: 0.7, delay: 0.4 }}
                        className="ms-7 lg:flex lg:items-center lg:flex-col lg:relative lg:ms-0 lg:px-8">
                        <div className="flex items-center">
                            <RadialProgressBar percentage={86} isMobile={isMobile} />
                            <div className="ms-4">
                                <h3 className="text-lg mb-1 font-semibold dark:text-white">B.E CSE</h3>
                                <time className="block mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">(2022 - Till date)</time>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Kongu Engineering College, Perundurai</p>
                            </div>
                        </div>
                    </motion.li>

                </ol>
            </div>
        </div>
    );
};

export default Education;
