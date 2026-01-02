export function Contact() {
  const socialLinks = [
    {
      name: 'Email',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      href: 'mailto:meherullah97@gmail.com',
      label: 'meherullah97@gmail.com',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      href: 'https://linkedin.com/in/raajkhan',
      label: 'linkedin.com/in/raajkhan',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'GitHub',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      href: 'https://github.com/raj-khan',
      label: 'github.com/raj-khan',
      color: 'from-gray-500 to-gray-700'
    },
    {
      name: 'Medium',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
        </svg>
      ),
      href: 'https://rajkhaan.medium.com',
      label: 'rajkhaan.medium.com',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-purple-100 mb-8">
                Feel free to reach out through any of these channels. I typically respond within 24 hours.
              </p>

              {/* Social Links */}
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.name !== 'Email' ? '_blank' : undefined}
                    rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="group flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      {link.icon}
                    </div>
                    <div>
                      <div className="font-semibold">{link.name}</div>
                      <div className="text-sm text-purple-100">{link.label}</div>
                    </div>
                    <svg className="w-5 h-5 ml-auto group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
