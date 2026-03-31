import { motion } from 'motion/react'

const Landing = () => {
  return (
    <div
      id='landing'
      className='flex min-h-screen w-full items-center justify-center flex-col gap-2 px-6 md:px-16'
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='text-center'
      >
        <span className='opacity-90 text-3xl sm:text-5xl select-none font-semibold md:text-6xl text-[#f8fcef]'>
          Hi, I'm Hassan Hashmi
        </span>
      </motion.h1>

      <motion.p
        className='text-xs md:text-sm text-[#f8fcef] select-none italic tracking-widest'
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.45, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
      >
        aka KuroMaple
      </motion.p>

      <motion.p
        className='text-[#f8fcef] text-lg md:text-xl mt-4 text-center'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.85, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        I write production code by day and make games by night
      </motion.p>

      <motion.div
        className='flex flex-wrap gap-4 justify-center mt-6'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <a
          href='#experience'
          className='text-nowrap rounded-lg border border-emerald-400/50 bg-black/30 backdrop-blur-sm
            px-6 py-3 text-lg font-semibold text-[#f8fcef]
            shadow-[0_0_15px_rgba(52,211,153,0.15)] hover:shadow-[0_0_25px_rgba(52,211,153,0.35)]
            hover:border-emerald-400 hover:bg-black/40
            transition-all duration-300 hover:-translate-y-1'
        >
          Work Experience
        </a>
        <a
          href='#projects'
          className='text-nowrap rounded-lg border border-emerald-400/50 bg-black/30 backdrop-blur-sm
            px-6 py-3 text-lg font-semibold text-[#f8fcef]
            shadow-[0_0_15px_rgba(52,211,153,0.15)] hover:shadow-[0_0_25px_rgba(52,211,153,0.35)]
            hover:border-emerald-400 hover:bg-black/40
            transition-all duration-300 hover:-translate-y-1'
        >
          Projects
        </a>
        <a
          href='#about'
          className='text-nowrap rounded-lg border border-emerald-400/50 bg-black/30 backdrop-blur-sm
            px-6 py-3 text-lg font-semibold text-[#f8fcef]
            shadow-[0_0_15px_rgba(52,211,153,0.15)] hover:shadow-[0_0_25px_rgba(52,211,153,0.35)]
            hover:border-emerald-400 hover:bg-black/40
            transition-all duration-300 hover:-translate-y-1'
        >
          Get in Touch
        </a>
      </motion.div>
    </div>
  )
}

export default Landing
