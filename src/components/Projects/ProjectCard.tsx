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

interface ProjectCardProps extends Project {
  selectedProject: Project
  setSelectedProject: React.Dispatch<React.SetStateAction<Project>>
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

const ProjectCard:React.FC<ProjectCardProps> = (project) => {
  
  return (
    //<ScrollReveal>
    <div
      className={`flex flex-col items-center gap-8 md:flex-row md:gap-24 rounded-2xl h-[400px] 
        overflow-hidden
        transition-all duration-300 ease-[cubic-bezier(0.25, 1, 0.5, 1)] hover:scale-105
        shadow-[0px_10px_30px_-5px_rgba(255,255,255,0.5)]
        justify-center
        ${project.title === project.selectedProject.title ? 'w-[600px] ' : 'w-[80px] '}`}
      onClick={() => project.setSelectedProject(project)}
    >

        

      <div
        className='flex flex-col gap-5'
      >
        <div
          className='flex flex-col gap-3'
        >
          
          <p
            className='text-gray-400 flex flex-col justify-center overflow-hidden 
            h-20 w-[520px] opacity-0 translate-y-[30px] transition-all duration-300 ease-in delay-300'
          >
            {project.description}
          </p>  
        </div>
        
        {/* <div
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
          </div> */}
        <div
          className='flex flex-wrap text-sm font-semibold gap-4'
        >
          {project.title}
          {/* <FaCodeBranch 
            className='text-3xl cursor-pointer  p-1 transition-all duration-300 hover:scale-105 text-green-500'
            onClick={() => window.open(project.repo, '_blank')}
          /> */}
        </div>
        <img
          src={project.image}
          alt={project.title}
          className='sm:w-[50px] md:w-[50px] h-auto w-[50px] cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 
          hover:shadow-2xl hover:shadow-cyan-600 bg-slate-700/20'
          onClick={() => window.open(project.link, '_blank')}
        />

      </div>
    </div>
    //</ScrollReveal>
  )
}

export default ProjectCard