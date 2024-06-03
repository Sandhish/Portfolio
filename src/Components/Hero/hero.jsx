import React, { useEffect, useState } from "react";
import styles from './hero.module.css';

const Hero = () => {
  const texts = ["Full Stack Developer", "Programmer", "Enthusiastic", "Quick Learner"];
  const [textIndex, setTextIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState(styles.fadeIn);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass(styles.fadeOut);
      setTimeout(() => {
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setFadeClass(styles.fadeIn);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border-b border-neutral-900 pb-4">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-4 pl-6 text-5xl font-light tracking-tight lg:mt-64 lg:text-7xl">Hello, I'm</h1>
            <h1 className="pb-14 pl-6 text-6xl font-light tracking-tight lg:text-7xl">Sandhish</h1>
            <span className={`bg-gradient-to-r pl-6 from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-wide text-transparent ${fadeClass}`}>
              {texts[textIndex]}
            </span>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-6 flex justify-center lg:justify-end">
          <img src="src\assets\Profile.png" className="rounded-[64px] h-5/6 p-6 w-dvw" alt="Sandhish" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
