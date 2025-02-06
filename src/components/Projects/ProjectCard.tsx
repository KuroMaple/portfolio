import { motion } from 'motion/react'
import { FaCodeBranch } from 'react-icons/fa6'
import { FiExternalLink } from 'react-icons/fi'


export type Project = {
  title: string
  description: string
  image: string
  link: string
  repo: string
  technologies: string[]
  background: string
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
  console.log(project.background)
  return (
    <ScrollReveal>
      <div
        key={project.title}
        className={`flex flex-col items-center gap-8 md:flex-row md:gap-24 rounded-2xl h-[400px] 
        transition-all duration-300 ease-[cubic-bezier(0.25, 1, 0.5, 1)] hover:scale-105
        shadow-[0px_10px_30px_-5px_rgba(255,255,255,0.5)]
        justify-center cursor-pointer overflow-hidden relative
        ${project.title === project.selectedProject?.title 
      ? 'w-[80px] sm:w-[200px] md:w-[400px] lg:w-[500px]' 
      : 'w-[40px] sm:w-[60px] md:w-[200px] lg:w-[100px]'}       
      `}
        onClick={() => {

          if (project.title === project.selectedProject.title){
            window.open(project.link, '_blank')
          }
          else{
            project.setSelectedProject(project)
          }
        }}
      >
        {
          project.title === project.selectedProject.title &&
          <FiExternalLink 
            className='absolute top-2 right-2 text-3xl text-white'
          />
        }
        
        <img
          src={project.background}
          alt={project.title}
          className='absolute inset-0 w-full h-full object-cover opacity-20' />
        

        <div
          className='flex flex-col gap-5'
        >
        
        
          <div className="flex flex-col"> {/* Outer container for vertical layout */}
            <div className="flex flex-row items-center gap-4 justify-center"> {/* Row for image, title, and icon */}
              <img
                src={project.image}
                alt={project.title}
                className="sm:w-[50px] md:w-[50px] h-auto w-[50px] cursor-pointer rounded-2xl"
              />
              {project.title === project.selectedProject.title && ( // Conditional rendering
                <div
                  className='flex flex-row items-center gap-2'
                >
                  <span className="font-semibold">{project.title}</span> {/* Title in a span */}
                  <FaCodeBranch
                    className="text-3xl cursor-pointer p-1 transition-all duration-300 text-green-500 hover:bg-green-500/40 hover:rounded-lg z-10"
                    onClick={() => window.open(project.repo, '_blank')}
                  />
                </div>
              )}
            </div>
            {/* Description below the row */}
            {project.title === project.selectedProject.title && (
              <div className="flex mt-3 justify-center"> {/* Add some top margin */}
                <p className="text-white text-sm font-semibold">
                  {project.description}
                </p>
              
              </div>
            )}

            {project.title === project.selectedProject.title && ( // Conditionally render technologies
              <div className="mt-5 flex flex-wrap gap-5 justify-center"> {/* Added margin-top and flex-wrap */}
                {project.technologies.map((tech, index) => (
                  <div key={index} className="rounded-full px-4 py-1 text-xs">
                    <span className="rounded-lg bg-slate-600 p-3">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        

        </div>
      </div>
    </ScrollReveal>
  )
}

export default ProjectCard