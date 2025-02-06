import badminton from '../../assets/badmintonIcon.png'
import pokeball from '../../assets/pokeballIcon.png'
import cards from '../../assets//card-games-icon.png'
import { motion } from 'motion/react'
import ProjectCard, { Project, ScrollReveal } from './ProjectCard'
import { useState } from 'react'
import pokeViewBG from '../../assets/pokeviewBG.png'
import uwbcwebBG from '../../assets/uwbcwebBG.png'
import nimBG from '../../assets/nimBG.png'

const projectsData: Project[] = [
  {
    title: 'PokeView',
    description: 'A Pokedex web app that allows users to view and search for Pokemon.',
    image: pokeball,
    link: 'https://poke-view.netlify.app',
    repo: 'https://github.com/KuroMaple/Poke-View',
    technologies: ['React', 'HTML', 'CSS'],
    background: pokeViewBG
  },
  {
    title: 'UWBC Web',
    description: 'A website for the University of Waterloo Badminton Club.',
    image: badminton,
    link: 'https://uwbc-web-demo.netlify.app',
    repo: 'https://github.com/KuroMaple/uwbc-web',
    technologies: ['React', 'Django', 'PostgreSQL'],
    background: uwbcwebBG
  },
  {
    title: 'Nim',
    description: 'A math based card game built with a singleplayer and multiplayer mode.',
    image: cards,
    link: 'https://github.com/KuroMaple/nim',
    repo: 'https://github.com/KuroMaple/nim',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    background: nimBG
  },
]



const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project>(projectsData[0])
  return (
    <div
      id='projects'
      className='flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24'
    >
      <ScrollReveal>
        <h1
          className='text-4xl font-light text-white md:text-6xl pb-8'
        >
        Projects
        </h1>
      
        <div
          className={`flex flex-wrap w-full gap-10 text-white flex-col lg:flex-row`}
        >
          {
            projectsData.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <ProjectCard
                  {...project}
                  selectedProject={selectedProject}
                  setSelectedProject={setSelectedProject}
                />
              </motion.div>
            ))
          }
        </div>
      </ScrollReveal>
    </div>
  )
}

export default Projects