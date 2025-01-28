import { motion } from 'motion/react'
import { BiLogoMongodb, BiLogoTypescript } from 'react-icons/bi'
import { FaReact } from 'react-icons/fa'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiExpress } from 'react-icons/si'
import pythonIcon from '../../assets/python.png'
import cPlusPlusIcon from '../../assets/c-.png'

const Technologies = () => {

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div 
      id='technologies'
      className='flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32'
    >
      <motion.h1
        variants={variants}
        initial='hidden'
        whileInView='visible'
        transition={{ duration: 0.8, delay: 0.2 }}
        className='text-4xl font-light text-white md:text-6xl'
      >
        Technologies
      </motion.h1>
      <div
        className='flex flex-wrap items-center justify-center gap-10 p-5'
      >
        <motion.div 
          variants={variants}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <FaReact
            className='cursor-pointer text-[77px] text-blue-400 transition-all duration-300 hover:-translate-y-5
              sm:text-[100px] md:text-[120px]'
          />
        </motion.div>
        <motion.div
          variants={variants}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img 
            src={pythonIcon} 
            alt="Python Icon"
            className="cursor-pointer transition-all duration-300 hover:-translate-y-5 sm:w-[100px] md:w-[120px] h-auto w-[77px]"
          />
        </motion.div>
        <motion.div 
          variants={variants}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <BiLogoTypescript 
            className='cursor-pointer text-[77px] text-sky-500 transition-all duration-300 hover:-translate-y-5
              sm:text-[100px] md:text-[120px]'
          />
        </motion.div>

        <motion.div 
          variants={variants}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <img 
            src={cPlusPlusIcon} 
            alt="C++ Icon"
            className="cursor-pointer transition-all duration-300 hover:-translate-y-5 sm:w-[100px] md:w-[120px] h-auto w-[77px]"
          />
        </motion.div>

        
        <motion.div 
          variants={variants}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <RiTailwindCssFill
            className='cursor-pointer text-[77px] text-sky-400 transition-all duration-300 hover:-translate-y-5
              sm:text-[100px] md:text-[120px]'
          />
        </motion.div>

        <motion.div 
          variants={variants}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <SiExpress
            className='cursor-pointer text-[77px] text-gray-600 transition-all duration-300 hover:-translate-y-5
              sm:text-[100px] md:text-[120px]'
          />
        </motion.div>

        <motion.div 
          variants={variants}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <BiLogoMongodb
            className='cursor-pointer text-[77px] text-green-500 transition-all duration-300 hover:-translate-y-5
              sm:text-[100px] md:text-[120px]'
          />
        </motion.div>

        

      </div>
    </div>
  )
}

export default Technologies