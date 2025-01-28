import About from './components/About/About'
import Contact from './components/Contact/Contact'
import NavBar from './components/NavBar/NavBar'
import Projects from './components/Projects/Projects'
import Technologies from './components/Technogies/Technologies'

function App() {

  return (
    <>
      <div className="fixed -z-10 min-h-screen w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      <main
        className='flex flex-col items-center px-4 md:px-8 lg:px-16 text-amber-100'
      >
        <NavBar />
        {/* <About />
        <Technologies />
        <Projects />
        <Contact /> */}
      </main>
    </>
  )
}

export default App
