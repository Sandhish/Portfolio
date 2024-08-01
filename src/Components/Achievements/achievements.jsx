import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Achievements = () => {
    const [cards, setCards] = useState([
        { id: 1, title: "1st Prize in 'Guess the Code' Event - NAEVUS'23", date: "04/11/2023", description: "As a part of a duo team, I secured the 1st prize in the 'Guess the Code' event organized by the Computer Society of India (CSI) of KEC during NAEVUS'23. This coding competition saw participation from students across various departments, where we showcased our exceptional coding skills and problem-solving abilities, emerging victorious in a highly competitive environment." },
        { id: 2, title: "3rd Prize in 'Proof Of Concept'", date: "25/10/2023", description: "I secured the 3rd prize in the project presentation titled 'Proof of Concept' with the project 'Automatic Railway Gates,' contributing as the team lead in a team of six. This achievement highlights our innovative approach and effective teamwork in developing a functional and impactful project, competing successfully against other participants."},
        { id: 3, title: "3rd prize in Paper Presentation", date: "24/04/2024", description: "I won the 3rd prize in the project presentation titled 'Machine Learning for Predicting Cloud Security' at Nacreous'2k24. Our project focused on detecting DDOS attacks using SVM and J48 algorithms. As part of a two-member team, we successfully demonstrated the application of machine learning techniques to enhance cloud security." },
        { id: 4, title: "1st Prize in 'Mystery Box'", date: "30/09/2023", description: "I won the 1st prize in the non-technical event 'Mystery Box', which brought fun and excitement among various competitors. Competing as part of a duo, we showcased our creativity and quick thinking, standing out in a light-hearted yet competitive environment." },
        { id: 5, title: "3rd Prize in 'Department Newsletter Quiz'", date: "2023 - 2024", description: "I won the 3rd prize in our department’s newsletter quiz. This achievement reflects my knowledge and engagement with departmental topics, showcasing my ability to excel in a competitive quiz format within our academic community." },
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
        <div id='achievements' className='relative flex flex-col items-center justify-center'>
            <motion.h1 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.0 }} className='mb-[95px] mt-12 text-center text-4xl'>
                Achievements
            </motion.h1>

            <div className='relative lg:w-2/4 w-3/4 h-[280px]'>
                <AnimatePresence>
                    {cards.map((card, index) => (
                        <motion.div
                            key={card.id}
                            className='absolute w-full lg:h-60 md:h-72 h-96 cursor-pointer rounded-3xl p-4 shadow-xl bg-neutral-900 border border-gray-300 flex flex-col justify-between'
                            style={{
                                zIndex: cards.length - index,
                                top: `${-index * 12}px`,
                                left: `${index * 12}px`
                            }}
                            onClick={index === 0 && !isAnimating ? handleCardClick : undefined}
                            initial={{ opacity: 0, y: 150 }}
                            whileInView={index === 0 && isAnimating ? { opacity: 0, y: 73 } : { opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}>

                            <div className="relative font-normal">
                                <div className="absolute top-[5px] right-4 text-sm text-gray-400 hidden lg:block">{card.date}</div>
                                <h2 className='text-xl font-bold'>{card.title}</h2>
                                <p className='mt-4 text-gray-400'>{card.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Achievements;
