import { motion } from "framer-motion";

const Education = () => {
    return (
        <div className='border-b border-neutral-900 pb-14'>
            <motion.h1 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.0 }} className='my-12 text-center text-4xl'>Education</motion.h1>

            <div className="flex justify-center">
                <ol className="relative border-l-2 border-gray-200 dark:border-gray-700 lg:flex lg:justify-between lg:w-full lg:border-0 lg:before:content-[''] lg:before:absolute lg:before:top-3 lg:before:left-0 lg:before:right-0 lg:before:h-0.5 lg:before:bg-gray-200 dark:lg:before:bg-gray-700">

                    <motion.li whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -70 }} transition={{ duration: 0.7, delay: 0.2 }}
                        className="mb-10 ms-7 lg:mb-0 lg:flex lg:items-center lg:flex-col lg:relative lg:ms-0 lg:px-8" >
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-gray-900 dark:bg-blue-900 lg:static lg:mb-4">
                            <svg className="w-3.5 h-3.5 text-blue-600 lg:w-4 lg:h-4 dark:text-blue-300" aria-hidden="true" fill="none" viewBox="0 0 16 11">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                        </span>
                        <h3 className="flex items-center mb-1 text-lg font-semibold dark:text-white lg:mt-0 lg:mb-1">SSLC</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 lg:mb-4">(2019 - 2020)</time>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 lg:mb-0 lg:text-center">K.V.M.Hr.Sec.School, Chennimalai</p>
                    </motion.li>

                    <motion.li whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -70 }} transition={{ duration: 0.7, delay: 0.3 }}
                        className="mb-10 ms-7 lg:mb-0 lg:flex lg:items-center lg:flex-col lg:relative lg:ms-0 lg:px-8">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-gray-900 dark:bg-blue-900 lg:static lg:mb-4">
                            <svg className="w-3.5 h-3.5 text-blue-600 lg:w-4 lg:h-4 dark:text-blue-300" aria-hidden="true" fill="none" viewBox="0 0 16 11">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                        </span>
                        <h3 className="mb-1 text-lg font-semibold dark:text-white lg:mt-0 lg:mb-1">HSC</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 lg:mb-4">(2020 - 2022)</time>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400 lg:mb-0 lg:text-center">K.V.M.Hr.Sec.School, Chennimalai</p>
                    </motion.li>

                    <motion.li whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -70 }} transition={{ duration: 0.7, delay: 0.4 }}
                        className="ms-7 lg:flex lg:items-center lg:flex-col lg:relative lg:ms-0 lg:px-8">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-gray-900 dark:bg-blue-900 lg:static lg:mb-4">
                            <svg className="w-4 h-4 text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100" aria-hidden="true" fill="currentColor" viewBox="-1 0 22 16">
                                <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0-2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0-2Z" />
                            </svg>
                        </span>
                        <h3 className="mb-1 text-lg font-semibold dark:text-white lg:mt-0 lg:mb-1">B.E CSE</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 lg:mb-4">(2022 - Till date)</time>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400 lg:mb-0 lg:text-center">Kongu Engineering College, Perundurai</p>
                    </motion.li>

                </ol>
            </div>
        </div>
    );
};

export default Education;
