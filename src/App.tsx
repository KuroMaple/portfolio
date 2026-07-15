import { useEffect, useState } from 'react'
import About from './components/About/About'
import Landing from './components/Landing/Landing'
import NavBar from './components/NavBar/NavBar'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'
import ResumePage from './components/Resume/ResumePage'
import forestBg from './assets/portfolio-forest-bg.png'

const isResumeHash = () => window.location.hash.replace('#', '').toLowerCase() === 'resume'

function App() {
  const [showResume, setShowResume] = useState(isResumeHash)

  // Lightweight hash routing: #resume swaps the main site for the resume page,
  // while the shared forest background stays mounted for a seamless, immersive transition.
  useEffect(() => {
    const onHashChange = () => {
      const resume = isResumeHash()
      setShowResume(resume)
      if (resume) window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return (
    <>
      <div className="fixed -z-10 min-h-screen w-full bg-cover bg-center bg-no-repeat md:bg-fixed" style={{ backgroundImage: `url(${forestBg})` }}></div>
      {showResume ? (
        <ResumePage />
      ) : (
        <main
          className='flex flex-col items-center px-4 md:px-8 lg:px-16 text-[#f8fcef]'
        >
          <NavBar />
          <Landing />
          <Projects />
          <Experience />
          <About />
        </main>
      )}
    </>
  )
}

export default App
