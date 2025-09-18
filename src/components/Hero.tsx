import Link from 'next/link'

export function Hero() {
  return (
    <section id="hero" className="min-h-screen pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm{' '}
            <span className="text-blue-600 dark:text-blue-400">Meher Ullah Khan Raj</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Full-Stack Developer specializing in JavaScript, TypeScript, Node.js, and modern web technologies
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            With 7+ years of experience building scalable web applications, APIs, and database solutions using PostgreSQL and cutting-edge frameworks.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="#projects" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
              View My Work
            </Link>
            <Link href="#contact" className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
              Get In Touch
            </Link>
            <a
              href="/Meher Ullah - Full-Stack Software Engineer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-md font-medium transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </a>
          </div>

          {/* Tech Icons */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 dark:text-gray-500">
            {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Next.js', 'PostgreSQL'].map((tech) => (
              <span key={tech} className="text-sm font-medium px-3 py-1 bg-white/20 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
