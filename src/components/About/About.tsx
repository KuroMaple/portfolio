import { useState } from 'react'
import { motion } from 'motion/react'
import { FaLinkedin } from 'react-icons/fa'
import { TbMail } from 'react-icons/tb'
import avatar from '../../assets/avatar.png'

const favouriteGames = [
  'Tekken',
  'Hades',
  'Ghost of Tsushima',
  'Pokémon Platinum',
  'Pokémon Mystery Dungeon: Explorers of Sky',
  'Megaman Star Force 3',
  'League of Legends',
]

const About = () => {
  const [copied, setCopied] = useState(false)
  return (
    <div
      id='about'
      className='px-6 flex min-h-screen w-full items-center justify-center py-28 md:px-12 flex-col gap-8 scroll-mt-20'
    >
      {/* Main card: avatar + intro */}
      <motion.div
        className='flex flex-col text-[#f8fcef]
          bg-black/30 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden w-full max-w-3xl'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Top row: heading + avatar */}
        <div className='flex items-center justify-between p-8 md:px-12 md:pt-10 md:pb-4'>
          <h3
            className='bg-gradient-to-r from-amber-200 to-emerald-300 bg-clip-text text-transparent opacity-90 text-2xl select-none md:text-3xl'
          >
            About me
          </h3>
          
        </div>

        {/* Body text + contact */}
        <div className='flex flex-col gap-4 px-8 pb-8 md:px-12 md:pb-10'>
          <p className='text-sm md:text-base opacity-80 leading-relaxed'>
            Growing up, games shaped the way I think about problem solving
            and led me to pursue a Computer Science degree at the University of Waterloo.
          </p>

          <p className='text-sm md:text-base opacity-80 leading-relaxed'>
            Currently I'm exploring Unreal Engine and C++ game development.
          </p>
          <p className='text-sm md:text-base opacity-80 leading-relaxed'>
            When I'm not coding, you can find me lifting, playing volleyball, or having an adventure irl.
          </p>
          <p className='text-sm md:text-base opacity-80 leading-relaxed'>
            If you want to chat about games, software, or just life in general, let's connect!
          </p>

          {/* Contact links */}
          <div
            className='flex items-center justify-center gap-8 mt-2'
          >
          <div className='flex flex-col gap-3'>
            <a
              href='https://www.linkedin.com/in/hassan-hashmi/'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 text-sm opacity-70 transition-all duration-300 hover:opacity-100 hover:text-emerald-400'
            >
              <FaLinkedin className='text-xl' />
              <span>hassan-hashmi</span>
            </a>
            <button
              onClick={() => {
                navigator.clipboard.writeText('hashmihassan47@gmail.com')
                setCopied(true)
                setTimeout(() => setCopied(false), 2000)
              }}
              className='flex items-center gap-2 text-sm opacity-70 transition-all duration-300 hover:opacity-100 hover:text-emerald-400 cursor-pointer'
            >
              <TbMail className='text-xl' />
              <span className='relative'>
                hashmihassan47@gmail.com
                {copied && (
                  <span className='absolute top-5 left-0 text-xs text-emerald-400 whitespace-nowrap'>Copied to clipboard</span>
                )}
              </span>
            </button>
          </div>
          <img
            src={avatar}
            alt="Avatar"
            className='w-[120px] h-[120px] md:w-[170px] md:h-[170px] rounded-2xl object-cover
              transition-all duration-300 hover:-translate-y-2
              shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_35px_rgba(34,197,94,0.5)]'
          />
          </div>
          
        </div>
      </motion.div>

      {/* Games I've Played section */}
      <motion.div
        className='w-full max-w-3xl bg-black/30 backdrop-blur-sm rounded-2xl border border-white/10 p-8 text-[#f8fcef]'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h3 className='text-lg md:text-xl font-semibold mb-4 bg-gradient-to-r from-amber-200 to-emerald-300 bg-clip-text text-transparent'>
          Current Favourite Games
        </h3>
        <div className='flex flex-wrap gap-2'>
          {favouriteGames.map((game) => (
            <span
              key={game}
              className='rounded-full bg-white/10 border border-white/10 px-3 py-1 text-sm opacity-80
                transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 cursor-default'
            >
              {game}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default About
