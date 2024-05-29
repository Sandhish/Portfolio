import { HERO_CONTENT } from "../../Constants/constant"

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <h1 className="pb-4 pl-6 text-6xl font-light tracking-tight lg:mt-28 lg:text-7xl">Hello, I'm</h1>
                    <h1 className="pb-14 pl-6 text-6xl font-light tracking-tight lg:text-7xl">Sandhish</h1>
                    <span className="bg-gradient-to-r pl-6 from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-wide text-transparent">Full Stack Developer</span>
                    <p className="my-2 max-w-xl py-6 font-light tracking-wide">
                    </p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-9">
                <div className="flex justify-center">
                    <img src="" alt="Sandhish" />
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Hero