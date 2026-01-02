export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {'<Meher />'}
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Full-Stack Software Engineer passionate about creating efficient, scalable web solutions.
              Based in Kuala Lumpur, Malaysia.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/raj-khan"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <span className="sr-only">GitHub</span>
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/raajkhan"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="mailto:meherullah97@gmail.com"
                className="group w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <span className="sr-only">Email</span>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a
                href="https://rajkhaan.medium.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <span className="sr-only">Medium</span>
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-purple-200">Quick Links</h4>
            <ul className="space-y-3">
              {['About', 'Skills', 'Projects', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="group inline-flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://rajkhaan.medium.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <span className="w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Medium
                </a>
              </li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-purple-200">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {['AI Tools', 'TypeScript', 'Node.js', 'React', 'AWS', 'Docker'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-sm text-gray-300 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Meher Ullah Khan Raj. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Built with <span className="text-pink-400">Next.js</span>, <span className="text-purple-400">TypeScript</span> & <span className="text-blue-400">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
