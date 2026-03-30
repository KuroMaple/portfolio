import About from './components/About/About'
import Contact from './components/Contact/Contact'
import NavBar from './components/NavBar/NavBar'
import Projects from './components/Projects/Projects'
import Technologies from './components/Technogies/Technologies'
import forestBg from './assets/portfolio-forest-bg.png'

function App() {

  return (
    <>
      <div className="fixed -z-10 min-h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: `url(${forestBg})` }}></div>
      <main
        className='flex flex-col items-center px-4 md:px-8 lg:px-16 text-[#f8fcef]'
      >
        <NavBar />
        <About />
        <Technologies />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
