import { motion } from 'motion/react'

const Landing = () => {
  return (
    <div
      id='landing'
      className='flex min-h-screen w-full items-center justify-center flex-col gap-4 px-6 md:px-16'
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className='opacity-90 text-3xl sm:text-5xl select-none font-semibold md:text-6xl text-[#f8fcef] text-center'>
          Hi, I'm Hassan Hashmi
        </span>
      </motion.h1>

      <motion.p
        className='mt-2 text-[#f8fcef] text-lg'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        I write production code by day and make games by night
      </motion.p>
      <motion.div
        className='flex flex-wrap gap-4 justify-center mt-2'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <a
          href='#projects'
          className='text-nowrap rounded-lg border-2 border-green-500 bg-green-400 px-6 py-3 text-lg
            font-bold text-[#f8fcef] shadow-lg shadow-green-500/50 hover:shadow-xl
            hover:bg-green-600 transition-all duration-300 hover:-translate-y-2 hover:scale-105'
        >
          Games
        </a>
        <a
          href='#technologies'
          className='text-nowrap rounded-lg border-2 border-green-500 bg-green-400 px-6 py-3 text-lg
            font-bold text-[#f8fcef] shadow-lg shadow-green-500/50 hover:shadow-xl
            hover:bg-green-600 transition-all duration-300 hover:-translate-y-2 hover:scale-105'
        >
          Work Experience
        </a>
        <a
          href='#about'
          className='text-nowrap rounded-lg border-2 border-green-500 bg-green-400 px-6 py-3 text-lg
            font-bold text-[#f8fcef] shadow-lg shadow-green-500/50 hover:shadow-xl
            hover:bg-green-600 transition-all duration-300 hover:-translate-y-2 hover:scale-105'
        >
          Get in Touch
        </a>
      </motion.div>
    </div>
  )
}

export default Landing
