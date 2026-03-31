import { motion } from 'motion/react'
import { BiLogoTypescript } from 'react-icons/bi'
import { FaReact, FaVuejs } from 'react-icons/fa'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiFlutter } from 'react-icons/si'
import cPlusPlusIcon from '../../assets/c-.png'
import cSharpIcon from '../../assets/c-sharp.png'
import pythonIcon from '../../assets/python.png'
import type { ReactNode } from 'react'

interface ExperienceEntry {
  company: string
  title: string
  periods: string[]
  techIcons: ReactNode[]
}

const experiences: ExperienceEntry[] = [
  {
    company: 'i3 Solutions Inc.',
    title: 'Software Developer',
    periods: ['Jul 2025 - Present'],
    techIcons: [
      <img key="CSharp" src={cSharpIcon} alt="C#" className="w-8 h-8 object-contain" />,
      <img key="cpp" src={cPlusPlusIcon} alt="C++" className="w-8 h-8 object-contain" />,
      <FaVuejs key="vue" className="text-3xl text-green-400" />,
      <SiFlutter key="flutter" className="text-3xl text-blue-400" />,
      
    ],
  },
  {
    company: 'JANA Corporation',
    title: 'Software Developer',
    periods: ['May 2024 - Aug 2024', 'May 2023 - Dec 2023'],
    techIcons: [
      <FaReact key="react" className="text-3xl text-blue-400" />,
      <BiLogoTypescript key="ts" className="text-3xl text-sky-500" />,
      <RiTailwindCssFill key="tailwind" className="text-3xl text-teal-400" />,
      <img key="CSharp" src={cSharpIcon} alt="C#" className="w-8 h-8 object-contain" />,
    ],
  },
  {
    company: 'University of Waterloo',
    title: 'Compilers Instructional Assistant',
    periods: ['Sep 2022 - Apr 2023'],
    techIcons: [
      <img key="cpp" src={cPlusPlusIcon} alt="C++" className="w-8 h-8 object-contain" />,
      <img key="python" src={pythonIcon} alt="Python" className="w-8 h-8 object-contain" />,
    ],
  },
]

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

const Experience = () => {
  return (
    <div
      id="experience"
      className="flex min-h-screen w-full flex-col items-center justify-start gap-8 sm:gap-12 py-16 md:py-28 px-4 md:px-16 scroll-mt-15"
    >
      <h1 className="text-3xl sm:text-4xl font-semibold text-[#f8fcef] md:text-6xl">
        Experience
      </h1>

      <div className="flex flex-col gap-4 sm:gap-6 w-full max-w-2xl max-h-[55vh] sm:max-h-[60vh] md:max-h-[65vh]  pr-2 scrollbar-thin">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 * i }}
            className="bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:px-8 md:py-6 text-[#f8fcef]
              flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          >
            {/* Left: company, title, tech */}
            <div>
              <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold">{exp.company}</h2>
              <h3 className="text-base sm:text-lg md:text-xl bg-gradient-to-r from-amber-200 to-emerald-300 bg-clip-text text-transparent mb-3">
                {exp.title}
              </h3>
              <div className="flex flex-wrap gap-3 sm:gap-4 items-center">
                {exp.techIcons.map((icon, j) => (
                  <span
                    key={j}
                    className="transition-all duration-300 hover:-translate-y-1 text-2xl sm:text-3xl md:text-4xl"
                  >
                    {icon}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: dates (vertically centred via parent sm:items-center) */}
            <div className="flex flex-col items-start sm:items-end shrink-0">
              {exp.periods.map((p, j) => (
                <span key={j} className="text-sm md:text-base opacity-50 whitespace-nowrap">{p}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Experience
