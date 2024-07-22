import About from "./Components/About/about"
import Achievements from "./Components/Achievements/achievements"
import Education from "./Components/Education/education"
import Hero from "./Components/Hero/hero"
import Navbar from "./Components/Navbar/navbar"
import Projects from "./Components/Projects/projects"
import Skills from "./Components/Skills/skills"

function App() {

  return (
    <>
      <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
        <div className='fixed top-0 -z-10 h-full w-full'>
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>

        <div className='container mx-auto p-8'>
          <Navbar />
          <Hero />
          <About />
          <Education/>
          <Skills />
          <Projects />
          <Achievements/>
        </div>
      </div>
    </>
  )
}

export default App
