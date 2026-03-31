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
        {/* Outer faded rectangle */}
        <div className='bg-[#0a1e2e]/40 px-1 py-1 rounded-sm flex'>
          <div className={`flex items-center border border-[#c8aa6e]/60 overflow-hidden
          bg-[#010a13] transition-all duration-300 hover:border-[#c8aa6e] hover:bg-[#0a1428]
          active:scale-95 active:brightness-75 
          ${onLanding ? 'opacity-50' : 'opacity-100 shadow-[0_0_15px_rgba(200,170,110,0.3)] hover:shadow-[0_0_25px_rgba(200,170,110,0.6)] animate-gold-glow'}`}>
            <div className='px-2 py-1.5'>
            <img
              src={logo}
              alt="Logo"
              className='h-8 sm:h-10 w-auto'
            />
          </div>
          {/* Pentagon border layer */}
            <div
              className='bg-[#1e9de0] p-[2px] transition-all duration-300 group-hover:bg-[#3dbdf0]'
              style={{ clipPath: 'polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)' }}
            >
              {/* Pentagon inner fill */}
              <div
                className='bg-[#010a13] flex items-center transition-all duration-300 group-hover:bg-[#0a1428]'
                style={{ clipPath: 'polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)' }}
              >
                <span className='px-4 pr-8 py-1.5 text-lg sm:text-xl font-semibold tracking-wider
                  text-[#f8fcef] group-hover:text-white transition-colors duration-300 uppercase'>
                  Home
                </span>
              </div>
            </div> 
            {/* Pentagon border layer */}
            <div
              className='bg-[#1e9de0] p-[2px] transition-all duration-300 group-hover:bg-[#3dbdf0]'
              style={{ clipPath: 'polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)' }}
            >
              {/* Pentagon inner fill */}
              <div
                className='bg-[#010a13] flex items-center transition-all duration-300 group-hover:bg-[#0a1428]'
                style={{ clipPath: 'polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)' }}
              >
                <span className='px-4 pr-8 py-1.5 text-lg sm:text-xl font-semibold tracking-wider
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
