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
      className='font-beaufort fixed top-0 z-10 w-full flex items-center justify-between
        px-4 sm:px-8 md:px-12 py-3
        bg-gradient-to-t from-[#4989A2] to-[#0a1428]/77
        border-b border-b-[#c8aa6e]/50'
    >
      {/* Left zone — Logo + HOME fused button */}
      <a
        href='#landing'
        className='flex items-center select-none group'
      >
        <div className={`flex items-center border border-[#c8aa6e]/60 rounded-lg overflow-hidden
          bg-[#010a13] transition-all duration-150 hover:border-[#c8aa6e] hover:bg-[#0a1428]
          active:scale-95 active:brightness-75 ${!onLanding && 'shadow-[0_0_15px_rgba(200,170,110,0.3)] hover:shadow-[0_0_25px_rgba(200,170,110,0.6)] animate-gold-glow'}`}>
          <div className='px-2 py-1.5  '>
            <img
              src={logo}
              alt="Logo"
              className={`h-8 sm:h-10 w-auto`}
            />
          </div>
          <span className='px-3 py-1.5 text-sm sm:text-base font-semibold tracking-wider
            text-[#c8aa6e] group-hover:text-[#e8d5a3] transition-colors duration-300 uppercase'>
            Home
          </span>
        </div>
      </a>

      {/* Center zone — Navigation tabs */}
      <ul className='hidden md:flex gap-8 items-center'>
        <a
          href='#projects'
          className='relative cursor-pointer text-[#a09b8c] uppercase tracking-wider text-sm font-medium
            transition-all duration-300 hover:text-emerald-400 pb-2'
        >
          <li>Projects</li>
        </a>
        <a
          href='#experience'
          className='relative cursor-pointer text-[#a09b8c] uppercase tracking-wider text-sm font-medium
            transition-all duration-300 hover:text-emerald-400 pb-2'
        >
          <li>Experience</li>
        </a>
        <a
          href='#about'
          className='relative cursor-pointer text-[#a09b8c] uppercase tracking-wider text-sm font-medium
            transition-all duration-300 hover:text-emerald-400 pb-2'
        >
          <li>About</li>
        </a>
      </ul>

      {/* Right zone — Social icons */}
      <ul className='hidden md:flex gap-5 items-center'>
        <li
          className='cursor-pointer text-[#a09b8c] transition-all duration-300 hover:text-emerald-400 text-2xl'
          onClick={() => window.open('https://www.linkedin.com/in/hassan-hashmi/', '_blank')}
        >
          <FaLinkedin />
        </li>
        <li
          className='cursor-pointer text-[#a09b8c] transition-all duration-300 hover:text-teal-400 text-2xl'
          onClick={() => window.open('https://github.com/KuroMaple', '_blank')}
        >
          <FaGithub />
        </li>
        <li
          className='cursor-pointer text-[#a09b8c] transition-all duration-300 hover:text-cyan-400 text-2xl'
          onClick={() => window.open('https://kuromaple.github.io/resume/', '_blank')}
        >
          <TbFileCv />
        </li>
      </ul>

      {/* Mobile hamburger */}
      {isOpen ? (
        <BiX
          className='block md:hidden cursor-pointer text-3xl text-[#c8aa6e]'
          onClick={toggleMenu} />
      ) : (
        <BiMenu
          className='block md:hidden cursor-pointer text-3xl text-[#c8aa6e]'
          onClick={toggleMenu} />
      )}

      {/* Mobile drawer */}
      {isOpen && (
        <div
          className='fixed right-0 top-[56px] flex h-screen w-3/4 sm:w-1/2 flex-col items-start justify-start gap-8
            border-l border-[#c8aa6e]/30 p-6 sm:p-10
            bg-gradient-to-b from-[#010a13] to-[#0a1428]'
        >
          <ul className='flex flex-col gap-6'>
            <a
              href='#projects'
              className='cursor-pointer text-[#a09b8c] uppercase tracking-wider text-sm font-medium
                transition-all duration-300 hover:text-emerald-400'
              onClick={toggleMenu}
            >
              <li>Projects</li>
            </a>
            <a
              href='#experience'
              className='cursor-pointer text-[#a09b8c] uppercase tracking-wider text-sm font-medium
                transition-all duration-300 hover:text-emerald-400'
              onClick={toggleMenu}
            >
              <li>Experience</li>
            </a>
            <a
              href='#about'
              className='cursor-pointer text-[#a09b8c] uppercase tracking-wider text-sm font-medium
                transition-all duration-300 hover:text-emerald-400'
              onClick={toggleMenu}
            >
              <li>About</li>
            </a>
          </ul>

          <ul className='flex flex-wrap gap-5'>
            <li
              className='cursor-pointer text-[#a09b8c] transition-all duration-300 hover:text-emerald-400 text-2xl'
              onClick={() => window.open('https://www.linkedin.com/in/hassan-hashmi/', '_blank')}
            >
              <FaLinkedin />
            </li>
            <li
              className='cursor-pointer text-[#a09b8c] transition-all duration-300 hover:text-teal-400 text-2xl'
              onClick={() => window.open('https://github.com/KuroMaple', '_blank')}
            >
              <FaGithub />
            </li>
            <li
              className='cursor-pointer text-[#a09b8c] transition-all duration-300 hover:text-cyan-400 text-2xl'
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
