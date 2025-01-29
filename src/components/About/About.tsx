import headshot from '../../assets/facePic.png'
import { motion } from 'motion/react'

const About = () => {
  return (
    <div 
      id='about'
      className='px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32'  
    >
      
      <div
        className='flex flex-col items-center justify-center gap-10 text-white'
      >
        <a href='#contact'>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src={headshot} 
              className='w-[300px] cursor-pointer rounded-full shadow-xl 
          shadow-emerald-800 transition-all duration-300 hover:-translate-y-5 
          hover:scale-105 hover:shadow-2xl hover:shadow-cyan-600 md:w-[350px] select-none'  
            />
          </motion.div>
        </a>
        <motion.div 
          className='flex max-w-[600px] flex-col items-center justify-center gap-3 text-center'
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }} 
        >
          <h1
            className='bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent opacity-80 text-5xl select-none font-light md:text-7xl'
          >
            Hassan Hashmi
          </h1>
          <h3
            className='bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent opacity-80 text-2xl select-none md:text-3xl'
          >
            Software Developer
          </h3>
          {/* <p>
            Back in 2015, I discovered&nbsp;
            <a href='https://create.roblox.com' className='' id='welcome-roblox' target='_blank'>
              Roblox Studio
            </a>
            &nbsp;and set out to create a game that would make me "Robux Rich." 
            While initially driven by  greed, I quickly became captivated by the process of coding and the ability to bring my most creative and unconventional ideas to life. 
          </p> */}
          <p className="md:text-base text-pretty text-sm text-slate-300">
            Passionate developer whose had the privilege of building software for a&nbsp;
            <a href="https://www.janacorporation.com" 
              className="bg-gradient-to-r hover:from-green-100 hover:to-green-500 text-transparent bg-clip-text from-green-500 to-green-100" 
              target="_blank">SaaS company</a>,&nbsp;
            my&nbsp;
            <a href="https://badmintonclub.uwaterloo.ca" 
              className="bg-gradient-to-r hover:from-cyan-100 hover:to-cyan-500 text-transparent bg-clip-text from-cyan-500 to-cyan-100" 
              target="_blank">university badminton club</a> 
            &nbsp;, and my fellow&nbsp;
            <a href="https://poke-view.netlify.app" 
              className="bg-gradient-to-r hover:from-red-100 hover:to-red-600 text-transparent bg-clip-text from-red-600 to-red-100" 
              target="_blank">Pokémon fans</a>
            &nbsp;.
          </p>
        </motion.div>
      </div>

    </div>
  )
}

export default About