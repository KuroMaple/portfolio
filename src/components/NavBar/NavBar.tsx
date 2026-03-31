import { useEffect, useRef, useState } from 'react'
import { BiMenu, BiX } from 'react-icons/bi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { TbFileCv } from 'react-icons/tb'
import logo from '../../assets/logo.png'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [onLanding, setOnLanding] = useState(true)
  const prevWidth = useRef(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth

      if (prevWidth.current < 768 && currentWidth >= 768) {
        setIsOpen(false)
      }
      prevWidth.current = currentWidth
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const landingEl = document.getElementById('landing')
    if (!landingEl) return

    const observer = new IntersectionObserver(
      ([entry]) => setOnLanding(entry.isIntersecting),
      { threshold: 0.3 }
    )
    observer.observe(landingEl)
    return () => observer.disconnect()
  }, [])
  
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav
      className='fixed top-0 z-10 w-full flex items-center justify-between
      border-b border-b-[#f8fcef] px-4 sm:px-8 md:px-16 py-4 md:py-6 text-[#f8fcef] backdrop-blur-md md:justify-evenly'
    >
      <a
        href='#landing'
        className='opacity-80 transition-all duration-300 hover:opacity-100 select-none'>
        <img
          src={logo}
          alt="Logo"
          className={`h-15 w-auto ${!onLanding ? 'animate-bounce-subtle' : ''}`}
        />
      </a>
      <ul
        className='hidden md:flex gap-10'
      >
        <a
          href='#experience'
          className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-teal-400'
        >
          <li>Experience</li>
        </a>
        <a
          href='#projects'
          className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-cyan-400'
        >
          <li>Projects</li>
        </a>
         <a
          href='#about'
          className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-emerald-400'
        >
          <li>About</li>
        </a>
      </ul>

      <ul
        className='hidden md:flex gap-5'>
        <li
          className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-emerald-400 text-3xl'
          onClick={() => window.open('https://www.linkedin.com/in/hassan-hashmi/', '_blank')}
        >
          <FaLinkedin />
        </li>
        <li
          className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-teal-400 text-3xl'
          onClick={() => window.open('https://github.com/KuroMaple', '_blank')}
        >
          <FaGithub />
        </li>
        <li
          className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-cyan-400 text-3xl'
          onClick={() => window.open('https://kuromaple.github.io/resume/', '_blank')}
        >
          <TbFileCv />
        </li>
      </ul>

      {isOpen ? (
        <BiX 
          className='block md:hidden cursor-pointer text-3xl'
          onClick={toggleMenu} />
      ) : (
        < BiMenu
          className='block md:hidden cursor-pointer text-3xl'
          onClick={toggleMenu} />
      )}

      {isOpen && (
        <div
          className={`fixed right-0 top-[70px] flex h-screen w-3/4 sm:w-1/2 flex-col items-start justify-start gap-6 border-1
            border-slate-100 backdrop-blur-md p-6 sm:p-12 ${isOpen ? 'block' : 'hidden'} bg-slate-950/75`}
        >
          <ul
            className='flex flex-col gap-9'
          >
            <a
              href='#experience'
              className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-teal-400'
              onClick={toggleMenu}
            >
              <li>Experience</li>
            </a>
            <a
              href='#projects'
              className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-cyan-400'
              onClick={toggleMenu}
            >
              <li>Projects</li>
            </a>
            <a
              href='#about'
              className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-emerald-400'
              onClick={toggleMenu}
            >
              <li>About</li>
            </a>
          </ul>

          <ul
            className='flex flex-wrap gap-5'>
            <li
              className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-emerald-400 text-3xl'
              onClick={() => window.open('https://www.linkedin.com/in/hassan-hashmi/', '_blank')}
            >
              <FaLinkedin 
                
              />
            </li>
            <li
              className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-teal-400 text-3xl'
              onClick={() => window.open('https://github.com/KuroMaple', '_blank')}
            >
              <FaGithub />
            </li>
            <li
              className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-cyan-400 text-3xl'
              onClick={() => window.open('https://kuromaple.github.io/resume/', '_blank')}
            >
              <TbFileCv />
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default NavBar