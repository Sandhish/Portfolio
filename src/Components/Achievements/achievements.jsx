import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Achievements = () => {
    const [cards, setCards] = useState([
        { id: 1, title: "1st prize in Guess The Code", description: "Description" },
        { id: 2, title: "3rd prize in POC", description: "Description" },
        { id: 3, title: "3rd prize in Paper Presentation", description: "Description" },
    ]);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleCardClick = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setCards((prevCards) => {
                const [firstCard, ...rest] = prevCards;
                return [...rest, firstCard];
            });
            setIsAnimating(false);
        }, 500);
    };

    return (
        <div id='achievements' className='relative flex flex-col items-center justify-center mt-6 mb-10'>
            <motion.h1 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.0 }} className='mb-12 text-center text-4xl'>
                Achievements
            </motion.h1>

            <div className='relative lg:w-2/4 w-3/4 h-72'>
                <AnimatePresence>
                    {cards.map((card, index) => (
                        <motion.div
                            key={card.id}
                            className='absolute w-full h-36 bg-neutral-900 rounded-lg shadow-lg p-3 flex flex-col items-center justify-center cursor-pointer border border-slate-400'
                            style={{ zIndex: cards.length - index, top: `${index * 20}px`, left: `${index * 20}px` }}
                            onClick={index === 0 && !isAnimating ? handleCardClick : undefined} initial={{ opacity: 0, y: 150 }}
                            whileInView={index === 0 && isAnimating ? { opacity: 0, y: 100 } : { opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 150 }} transition={{ duration: 0.7 }}>

                            <h2 className='text-xl font-bold text-slate-200'>{card.title}</h2>
                            <p className='mt-4 text-gray-400'>{card.description}</p>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Achievements;
