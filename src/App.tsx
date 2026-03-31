import About from './components/About/About'
import Landing from './components/Landing/Landing'
import NavBar from './components/NavBar/NavBar'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'
import forestBg from './assets/portfolio-forest-bg.png'

function App() {

  return (
    <>
      <div className="fixed -z-10 min-h-screen w-full bg-cover bg-center bg-no-repeat md:bg-fixed" style={{ backgroundImage: `url(${forestBg})` }}></div>
      <main
        className='flex flex-col items-center px-4 md:px-8 lg:px-16 text-[#f8fcef]'
      >
        <NavBar />
        <Landing />
        <Projects />
        <Experience />
        <About />
      </main>
    </>
  )
}

export default App
