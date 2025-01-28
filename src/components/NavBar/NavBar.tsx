import { b } from 'motion/react-client'
import { useState } from 'react'
import { BiMenu, BiX } from 'react-icons/bi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { TbFileCv } from 'react-icons/tb'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav
      className='fixed top-0 z-10 w-full flex items-center justify-between
      border-b border-b-white  px-16 py-6 text-white backdrop-blur-md md:justify-evenly'
    >
      <a 
        href='#home' 
        className='bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100 select-none'>
        Hassan
      </a>
      <ul
        className='hidden md:flex gap-10'
      >
        <a
          href='#home'
          className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-emerald-400'
        >
          <li>Home</li>
        </a>
        <a
          href='#technologies'
          className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-teal-400'
        >
          <li>Technogies</li>
        </a>
        <a
          href='#projects'
          className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-cyan-400'
        >
          <li>Projects</li>
        </a>
        <a
          href='#contact'
          className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-sky-500'
        >
          <li>Contact</li>
        </a>
      </ul>

      <ul
        className='hidden md:flex gap-5'>
        <li
          className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-emerald-400 text-3xl'
        >
          <FaLinkedin />
        </li>
        <li
          className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-teal-400 text-3xl'
        >
          <FaGithub />
        </li>
        <li
          className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-cyan-400 text-3xl'
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
          className={`fixed right-0 top-[85px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-1 
            border-white backdrop-blur-md p-12 ${isOpen ? 'block' : 'hidden'}`}
        >
          <ul
            className='flex flex-col gap-9'
          >
            <a
              href='#home'
              className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-emerald-400'
            >
              <li>Home</li>
            </a>
            <a
              href='#technologies'
              className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-teal-400'
            >
              <li>Technogies</li>
            </a>
            <a
              href='#projects'
              className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-cyan-400'
            >
              <li>Projects</li>
            </a>
            <a
              href='#contact'
              className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-sky-500'
            >
              <li>Contact</li>
            </a>
          </ul>

          <ul
            className='flex flex-wrap gap-5'>
            <li
              className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-emerald-400 text-3xl'
            >
              <FaLinkedin />
            </li>
            <li
              className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-teal-400 text-3xl'
            >
              <FaGithub />
            </li>
            <li
              className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-cyan-400 text-3xl'
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