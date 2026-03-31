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

export const ScrollReveal = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  )
}

const ProjectCard: React.FC<Project> = ({
  title, description, image, link, repo, technologies, background,
}) => {
  return (
    <div
      className="relative overflow-hidden rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10
        text-[#f8fcef] transition-all duration-300 hover:-translate-y-2
        hover:shadow-[0_0_25px_rgba(52,211,153,0.2)] h-full"
    >
      {/* Background image */}
      <img
        src={background}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none"
      />

      <div className="relative z-10 p-4 sm:p-6 flex flex-col gap-3 sm:gap-4">
        {/* Header: icon + title + links */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src={image}
              alt={title}
              className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] object-contain rounded-lg"
            />
            <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors duration-200"
              title="Source code"
            >
              <FaCodeBranch className="text-lg" />
            </a>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f8fcef] opacity-50 hover:opacity-100 transition-opacity duration-200"
              title="Live demo"
            >
              <FiExternalLink className="text-lg" />
            </a>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm opacity-75 leading-relaxed">{description}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="rounded-full bg-white/10 border border-white/10 px-3 py-1 text-xs opacity-80"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
