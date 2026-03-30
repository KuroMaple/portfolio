import { motion } from 'motion/react'

import avatar from '../../assets/avatar.png'

const About = () => {
  return (
    <div
      id='about'
      className='px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-12 flex-col'
    >
      <motion.div
        className='flex flex-col md:flex-row items-center justify-center text-[#f8fcef]
          bg-black/30 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div
          className='flex flex-col items-center md:items-start justify-center gap-3 text-center md:text-left
            p-8 md:p-12 w-full md:w-[70%]'
        >
          
          <h3
            className='bg-gradient-to-r from-amber-200 to-emerald-300 bg-clip-text text-transparent opacity-90 text-2xl select-none md:text-3xl'
          >
            Software Developer
          </h3>

        </div>

        <div className='w-full flex items-center justify-center p-6 md:p-1'>
          <img
            src={avatar}
            alt="Avatar"
            className='w-[180px] md:w-full max-w-[220px] rounded-2xl object-cover
              transition-all duration-300 hover:-translate-y-3
              shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_50px_rgba(34,197,94,0.5)]'
          />
        </div>
      </motion.div>

    </div>
  )
}

export default About
