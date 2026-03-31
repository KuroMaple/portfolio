import { motion } from 'motion/react'
import avatar from '../../assets/avatar.png'

const favouriteGames = [
  'Pokémon Diamond/Pearl/Platinum',
  'Megaman Star Force 3',
  'The Legend of Zelda: Breath of the Wild',
  'League of Legends',
  'Tekken',
  'Minecraft',
  'Hades',
  'Ghost of Tsushima',
  
]

const About = () => {
  return (
    <div
      id='about'
      className='px-6 flex min-h-screen w-full items-center justify-center py-28 md:px-12 flex-col gap-8 scroll-mt-20'
    >
      {/* Main card: avatar + intro */}
      <motion.div
        className='flex flex-col md:flex-row items-center justify-center text-[#f8fcef]
          bg-black/30 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden w-full max-w-3xl'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Left: text */}
        <div
          className='flex flex-col items-center md:items-start justify-center gap-4 text-center md:text-left
            p-8 md:p-12 w-full md:w-[70%]'
        >
          <h3
            className='bg-gradient-to-r from-amber-200 to-emerald-300 bg-clip-text text-transparent opacity-90 text-2xl select-none md:text-3xl'
          >
            Software Developer
          </h3>

          <p className='text-sm md:text-base opacity-80 leading-relaxed'>
            {/* TODO: Replace with your story */}
            I'm a software developer with a deep passion for game development.
            Growing up, games shaped the way I think about problem solving, creativity,
            and building experiences that pull people in. Now I channel that same energy
            into crafting software — whether it's production apps by day or game prototypes by night.
          </p>

          <p className='text-sm md:text-base opacity-80 leading-relaxed'>
            {/* TODO: Replace with more about your journey */}
            What drives me is the intersection of technical challenge and creative expression.
            I love building systems that feel responsive and rewarding — the same qualities
            that make a great game feel great.
          </p>
        </div>

        {/* Right: avatar */}
        <div className='w-full md:w-[30%] flex items-center justify-center p-6 md:p-4'>
          <img
            src={avatar}
            alt="Avatar"
            className='w-[180px] md:w-full max-w-[220px] rounded-2xl object-cover
              transition-all duration-300 hover:-translate-y-3
              shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_50px_rgba(34,197,94,0.5)]'
          />
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
          Some of My Favourite Games
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
