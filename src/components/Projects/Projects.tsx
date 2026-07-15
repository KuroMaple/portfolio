import badminton from '../../assets/badmintonIcon.png'
import pokeball from '../../assets/pokeballIcon.png'
import cards from '../../assets//card-games-icon.png'
import { motion } from 'motion/react'
import ProjectCard, { Project } from './ProjectCard'
import { FaCodeBranch, FaYoutube } from 'react-icons/fa6'
import boidsDemo from '../../assets/2500BoidsDemo.mp4'
import pokeViewBG from '../../assets/pokeviewBG.png'
import uwbcwebBG from '../../assets/uwbcwebBG.png'
import nimBG from '../../assets/nimBG.png'

const projectsData: Project[] = [
  {
    title: 'REDACTED Card Game',
    description: 'A math based card game that is surprisingly addictive',
    image: cards,
    link: 'https://redacted-game.web.app/',
    repo: 'https://github.com/KuroMaple/redacted_card_game',
    technologies: ['Flutter'],
    background: nimBG,
  },
  {
    title: 'PokeView',
    description: 'A web app to view and compare your favourite Pokemon.',
    image: pokeball,
    link: 'https://poke-view.netlify.app',
    repo: 'https://github.com/KuroMaple/Poke-View',
    technologies: ['React', 'HTML', 'CSS'],
    background: pokeViewBG,
  },
  {
    title: 'UWBC Web',
    description: 'A tool for the University of Waterloo Badminton Club.',
    image: badminton,
    link: 'https://uwbc-web-demo.netlify.app',
    repo: 'https://github.com/KuroMaple/uwbc-web',
    technologies: ['React', 'Django', 'PostgreSQL'],
    background: uwbcwebBG,
  },
]


const Projects = () => {
  return (
    <div
      id='projects'
      className='flex min-h-screen w-full flex-col items-center justify-center gap-8 sm:gap-12 px-4 py-16 md:px-14 md:py-24 scroll-mt-15'
    >
      <h1 className="text-3xl sm:text-4xl font-semibold text-[#f8fcef] md:text-6xl">
        Projects
      </h1>

      {/* Highlighted project — Boids Simulation */}
      <div className="w-full max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative overflow-hidden rounded-2xl bg-black/40 backdrop-blur-sm border border-emerald-400/30
            text-[#f8fcef] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(52,211,153,0.25)] flex flex-col"
          >
            <div className="w-full aspect-video bg-black">
              {/* Optimized demo clip (converted from the source gif for performance) */}
              <video
                src={boidsDemo}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 sm:p-6 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg sm:text-xl font-semibold">Boids Simulation</h3>
                <div className="flex items-center gap-3 shrink-0 ml-2">
                  <a
                    href="https://youtu.be/NU3UaTgnD5M"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors duration-200"
                    title="Watch on YouTube"
                  >
                    <FaYoutube className="text-lg" />
                  </a>
                  <a
                    href="https://github.com/KuroMaple/boids-cpp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors duration-200"
                    title="Source code"
                  >
                    <FaCodeBranch className="text-lg" />
                  </a>
                  <span className="rounded-full bg-emerald-400/20 border border-emerald-400/40 px-3 py-1 text-xs text-emerald-300">
                    Featured
                  </span>
                </div>
              </div>
              <p className="text-sm opacity-75 leading-relaxed">
                A real-time flocking simulation written in C++ that uses optimization algorithms
                to simulate thousands of physics entities.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-white/10 border border-white/10 px-3 py-1 text-xs opacity-80">C++</span>
                <span className="rounded-full bg-white/10 border border-white/10 px-3 py-1 text-xs opacity-80">SFML</span>
                <span className="rounded-full bg-white/10 border border-white/10 px-3 py-1 text-xs opacity-80">CMake</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Unreal projects — video row (same card size as the project grid below) */}
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-fr">

        {/* Shinobi Bounce — YouTube embed */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-full"
        >
          <div className="relative overflow-hidden rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10
            text-[#f8fcef] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(52,211,153,0.2)] h-full flex flex-col"
          >
            <div className="w-full aspect-video">
              <iframe
                src="https://www.youtube.com/embed/auN-RbY9Xqk"
                title="Shinobi Bounce"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="p-4 sm:p-6 flex flex-col gap-3 flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-lg sm:text-xl font-semibold">Shinobi Bounce</h3>
                <a
                  href="https://github.com/KuroMaple/ShinobiBounce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors duration-200 shrink-0 ml-2"
                  title="Source code"
                >
                  <FaCodeBranch className="text-lg" />
                </a>
              </div>
              <p className="text-sm opacity-75">A Naruto-inspired take on Pong, built in Unreal Engine and C++</p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-white/10 border border-white/10 px-3 py-1 text-xs opacity-80">Unreal Engine</span>
                <span className="rounded-full bg-white/10 border border-white/10 px-3 py-1 text-xs opacity-80">C++</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* DDR Clone — YouTube embed */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-full"
        >
          <div className="relative overflow-hidden rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10
            text-[#f8fcef] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(52,211,153,0.2)] h-full flex flex-col"
          >
            <div className="w-full aspect-video">
              <iframe
                src="https://www.youtube.com/embed/t5xNpEB1FV0"
                title="Dance Dance Revolution Clone"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="p-4 sm:p-6 flex flex-col gap-3 flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-lg sm:text-xl font-semibold">DDR Clone</h3>
                <a
                  href="https://github.com/KuroMaple/DDR-Clone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors duration-200 shrink-0 ml-2"
                  title="Source code"
                >
                  <FaCodeBranch className="text-lg" />
                </a>
              </div>
              <p className="text-sm opacity-75">A DDR-inspired rhythm game built in Unreal Engine and C++</p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-white/10 border border-white/10 px-3 py-1 text-xs opacity-80">Unreal Engine</span>
                <span className="rounded-full bg-white/10 border border-white/10 px-3 py-1 text-xs opacity-80">C++</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Raven Rally — YouTube embed */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="h-full"
        >
          <div className="relative overflow-hidden rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10
            text-[#f8fcef] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(52,211,153,0.2)] h-full flex flex-col"
          >
            <div className="w-full aspect-video">
              <iframe
                src="https://www.youtube.com/embed/qx9_uQITqI4"
                title="Raven Rally"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="p-4 sm:p-6 flex flex-col gap-3 flex-1">
              <h3 className="text-lg sm:text-xl font-semibold">Raven Rally</h3>
              <p className="text-sm opacity-75">A mini game focused on exploration and collecting gems</p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-white/10 border border-white/10 px-3 py-1 text-xs opacity-80">Unreal Engine</span>
                <span className="rounded-full bg-white/10 border border-white/10 px-3 py-1 text-xs opacity-80">C++</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Project grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-5xl auto-rows-fr'>
        {projectsData.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            className="h-full"
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects
