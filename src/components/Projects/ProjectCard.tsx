import { motion } from 'motion/react'
import { FaCodeBranch } from 'react-icons/fa6'

export type Project = {
  title: string
  description: string
  image: string
  link: string
  repo: string
  technologies: string[]
}


export const ScrollReveal = ({children}: {children: React.ReactNode}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{once: true}}
      transition={{ duration: 0.8}}
    >
      {children}
    </motion.div>
  )
}

const ProjectCard:React.FC<Project> = (project) => {
  return (
    <ScrollReveal>
      <div
        className='flex flex-col items-center gap-8 md:flex-row md:gap-24 bg-amber-200 rounded-2xl h-[400px]'
      >

        <img
          src={project.image}
          alt={project.title}
          className='sm:w-[100px] md:w-[120px] h-auto w-[80px] cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 
          hover:shadow-2xl hover:shadow-cyan-600 bg-slate-700/20'
          onClick={() => window.open(project.link, '_blank')}
        />

        <div
          className='flex flex-col gap-5'
        >
          <div
            className='flex flex-col gap-3'
          >
            <div
              className='flex flex-wrap text-xl font-semibold gap-4'
            >
              {project.title}
              <FaCodeBranch 
                className='text-3xl cursor-pointer  p-1 transition-all duration-300 hover:scale-105 text-green-500'
                onClick={() => window.open(project.repo, '_blank')}
              />
            </div>
            <p
              className='text-gray-400'
            >
              {project.description}
            </p>  
          </div>
        
          <div
            className='flex flex-wrap gap-5'
          >
            {
              project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className='rounded-full px-4 py-1 text-xs'
                >
                  <span
                    key={index}
                    className='rounded-lg bg-slate-600 p-3'
                  >
                    {tech}
                  </span>
                </div>
              ))
            }
          </div>

        </div>
      </div>
    </ScrollReveal>
  )
}

export default ProjectCard