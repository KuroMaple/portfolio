

const Contact = () => {
  return (
    <div
      id='contact'
      className='flex min-h-[70vh] min-w-full items-center justify-center'
    >
      <div
        className='flex flex-col items-center justify-center gap-3 p-14 space-y-6'
      >
        <h1
          className='text-center text-5xl md:text-7xl'
        >
          <span
            className='bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent 
              text-4xl font-light md:text-6xl '
          >
            Email me
          </span>
        </h1>
        <p>
          I'm always open to new opportunities, collaborations, and projects. Feel free to email me by clicking below
        </p>
        <a
          href='mailto:hashmihassan47@gmail.com'
          className='text-nowrap rounded-lg border border-sky-700 bg-slate-950 px-5 py-3 text-lg 
            font-bold text-white shadow-lg shadow-emerald-600 hover:shadow-xl hover:bg-sky-700 transition-all duration-300 hover:-translate-y-2'
        >Contact Me</a>
      </div>
    </div>
  )
}

export default Contact