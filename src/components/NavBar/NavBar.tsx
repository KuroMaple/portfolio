import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import { BiMenu, BiX } from 'react-icons/bi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { TbFileCv } from 'react-icons/tb'
import logo from '../../assets/logo.png'

const sections = ['landing', 'projects', 'experience', 'about'] as const
type Section = (typeof sections)[number]

const navTabs: { id: Section; label: string }[] = [
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About' },
]

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<Section>('landing')
  const prevWidth = useRef(window.innerWidth)

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth
      if (prevWidth.current < 768 && currentWidth >= 768) {
        setIsOpen(false)
      }
      prevWidth.current = currentWidth
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Track which section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as Section)
          }
        })
      },
      { threshold: 0.3 }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const onLanding = activeSection === 'landing'

  return (
    <nav
      className='font-beaufort fixed top-0 z-10 w-full flex items-center justify-between
        px-4 sm:px-8 md:px-12 py-1
        bg-gradient-to-t from-[#4989A2] to-[#0a1428]/77
        border-b border-b-[#c8aa6e]/50'
    >
      {/* Left zone — Logo + HOME pentagon button */}
      <a
        href='#landing'
        className={`relative flex items-center select-none group
          transition-all duration-300 active:scale-95 active:brightness-75
          ${onLanding ? 'opacity-50' : 'opacity-100'}`}
      >
        {/* home button main container */}
        <div className={`w-48 flex items-center border border-[#C79B3B]/50 overflow-hidden rounded-l-full
          bg-[#000810] transition-all duration-300 hover:border-[#c8aa6e] hover:bg-[#0a1428]
          active:scale-95 active:brightness-75
          ${onLanding ? 'opacity-50' : 'opacity-100 shadow-[0_0_15px_rgba(200,170,110,0.3)] hover:shadow-[0_0_25px_rgba(200,170,110,0.6)] animate-gold-glow'}`}>

          {/* Logo */}
          <div className='pl-0.25 pr-0 py-0.25 relative z-11'>
            <img
              src={logo}
              alt="Logo"
              className='h-7 sm:h-9 w-auto'
            />
          </div>

          {/* Layer container */}
          <div
            className='relative'
            >
            {/* Bottom layer */}
          <div
            className='absolute w-37.5 h-8 z-2 bg-[#010a13] border-2 border-l-0
            border-[#1e9de0]/30 transition-all duration-300 group-hover:bg-[#0a1428] group-hover:border-[#3dbdf0]/40'
          />

          
          {/* Top layer */}

          <div
            className="relative w-37.5 h-8 bg-[#1e9de0] z-3"
            style={{ clipPath: 'path("M 138 0 L 0 0 Q 12 17 0 32 L 138 32 L 150 16 Z")' }}
          >
            {/* Inner fill — inset by 2px on all sides */}
            <div
              className="absolute w-full h-full bg-[#1e2328] inset-[1px] ml-0.75"
              style={{ clipPath: 'path("M 131.1 0 L 0 0 Q 11.4 16.15 0 30.4 L 131.1 30.4 L 142.5 15.2 Z")' }}
            >
              <span className='px-8 pr-8 py-0.5 text-lg sm:text-xl font-semibold tracking-wider
                text-[#f8fcef] group-hover:text-white transition-colors duration-300 uppercase'>
                Home
              </span>
            </div>
          </div>

          </div>
          
        </div>
      </a>

      {/* Center zone — Navigation tabs */}
      <ul className='hidden md:flex gap-8 items-center'>
        {navTabs.map((tab) => {
          const isActive = activeSection === tab.id
          return (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              className='relative cursor-pointer uppercase tracking-wider text-lg font-medium
                transition-colors duration-300 pb-3 pt-2'
            >
              {/* V chevron indicator */}
              {isActive && (
                <motion.span
                  layoutId="tab-chevron"
                  className='absolute -top-1 left-1/2 -translate-x-1/2'
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                >
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M6 8L0 0H12L6 8Z" fill="#c8aa6e" />
                  </svg>
                </motion.span>
              )}

              <li className={isActive ? 'text-[#c8aa6e]' : 'text-[#a09b8c] hover:text-[#f0e6d2]'}>
                {tab.label}
              </li>

              {/* Spotlight glow */}
              {isActive && (
                <motion.span
                  layoutId="tab-spotlight"
                  className='absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-[3px] rounded-full'
                  style={{
                    background: 'radial-gradient(ellipse at center, #c8aa6e 0%, transparent 70%)',
                    boxShadow: '0 2px 12px rgba(200, 170, 110, 0.6)',
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </a>
          )
        })}
      </ul>

      {/* Right zone — Social icons */}
      <ul className='hidden md:flex gap-5 items-center'>
        <li
          className='cursor-pointer text-[#a09b8c] transition-all duration-300 hover:text-[#f0e6d2] text-4xl'
          onClick={() => window.open('https://www.linkedin.com/in/hassan-hashmi/', '_blank')}
        >
          <FaLinkedin />
        </li>
        <li
          className='cursor-pointer text-[#a09b8c] transition-all duration-300 hover:text-[#f0e6d2] text-4xl'
          onClick={() => window.open('https://github.com/KuroMaple', '_blank')}
        >
          <FaGithub />
        </li>
        <li
          className='cursor-pointer text-[#a09b8c] transition-all duration-300 hover:text-[#f0e6d2] text-4xl'
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
            {navTabs.map((tab) => (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                className={`cursor-pointer uppercase tracking-wider text-sm font-medium
                  transition-all duration-300 ${activeSection === tab.id ? 'text-[#c8aa6e]' : 'text-[#a09b8c] hover:text-[#f0e6d2]'}`}
                onClick={toggleMenu}
              >
                <li>{tab.label}</li>
              </a>
            ))}
          </ul>

          <ul className='flex flex-wrap gap-5'>
            <li
              className='cursor-pointer text-[#a09b8c] transition-all duration-300 hover:text-[#f0e6d2] text-2xl'
              onClick={() => window.open('https://www.linkedin.com/in/hassan-hashmi/', '_blank')}
            >
              <FaLinkedin />
            </li>
            <li
              className='cursor-pointer text-[#a09b8c] transition-all duration-300 hover:text-[#f0e6d2] text-2xl'
              onClick={() => window.open('https://github.com/KuroMaple', '_blank')}
            >
              <FaGithub />
            </li>
            <li
              className='cursor-pointer text-[#a09b8c] transition-all duration-300 hover:text-[#f0e6d2] text-2xl'
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
