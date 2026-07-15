import { motion } from 'motion/react'
import { FiArrowLeft, FiExternalLink } from 'react-icons/fi'
import resume from '../../assets/Hassan Hashmi Resume.pdf?url'

// Navigate back to the main site. Prefer history so the visitor lands where they left off;
// fall back to clearing the hash when the resume page was opened directly.
const goBack = () => {
  if (window.history.length > 1) {
    window.history.back()
  } else {
    window.location.hash = ''
  }
}

const ResumePage = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center px-4 py-6 sm:py-8 md:px-8 text-[#f8fcef]">
      {/* Top controls */}
      <div className="mb-4 flex w-full max-w-4xl items-center justify-between gap-4 sm:mb-6">
        <button
          onClick={goBack}
          className="font-beaufort group flex items-center gap-2 rounded-full border border-[#c8aa6e]/50 bg-black/40 px-4 py-2
            text-sm uppercase tracking-wider text-[#f0e6d2] backdrop-blur-sm transition-all duration-300
            hover:border-[#c8aa6e] hover:bg-[#0a1428] hover:shadow-[0_0_20px_rgba(200,170,110,0.4)] active:scale-95 sm:text-base"
        >
          <FiArrowLeft className="text-lg transition-transform duration-300 group-hover:-translate-x-1" />
          Back to site
        </button>

        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm text-[#f8fcef]/80
            backdrop-blur-sm transition-all duration-300 hover:border-emerald-400/40 hover:text-emerald-300 sm:text-base"
        >
          <FiExternalLink className="text-lg" />
          <span className="hidden sm:inline">Open in new tab</span>
        </a>
      </div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4 text-3xl font-semibold text-[#f8fcef] sm:mb-6 sm:text-4xl md:text-5xl"
      >
        Resume
      </motion.h1>

      {/* PDF viewer — native browser rendering (no heavy JS libraries) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-[0_0_40px_rgba(0,0,0,0.45)] backdrop-blur-sm"
      >
        <iframe
          title="Hassan Hashmi — Resume"
          src={`${resume}#toolbar=0&navpanes=0&view=FitH`}
          className="h-[74vh] w-full sm:h-[78vh]"
        />
      </motion.div>

      {/* Fallback for browsers (often mobile) that won't render an inline PDF */}
      <p className="mt-3 text-xs text-[#f8fcef]/50">
        Can&rsquo;t see the resume?{' '}
        <a href={resume} target="_blank" rel="noopener noreferrer" className="text-emerald-300 underline hover:text-emerald-200">
          Open the PDF directly
        </a>
        .
      </p>
    </div>
  )
}

export default ResumePage
