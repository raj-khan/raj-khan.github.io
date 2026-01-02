export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></div>
              <div className="pl-8 space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                <p>
                  I'm an <span className="font-semibold text-purple-600 dark:text-purple-400">AI-augmented software engineer</span> with over 8 years of experience
                  building robust web applications and scalable backend systems. Currently based in{' '}
                  <span className="font-semibold text-purple-600 dark:text-purple-400">Kuala Lumpur, Malaysia</span>, working at Snappymob.
                </p>
                <p>
                  I specialize in <span className="font-semibold">AI-augmented development workflows</span>, leveraging tools like{' '}
                  <span className="font-semibold">Cursor, GitHub Copilot, and Claude</span> for rapid prototyping. My expertise includes creating{' '}
                  <span className="font-semibold text-purple-600 dark:text-purple-400">production-level code</span>, improving AI-generated solutions,
                  and fixing major issues in complex codebases.
                </p>
                <p>
                  Deep expertise in <span className="font-semibold">TypeScript, Node.js, React, Next.js, and NestJS</span>. I excel at
                  structuring codebases for AI agent compatibility, designing efficient database schemas, and building{' '}
                  <span className="font-semibold">RESTful APIs and microservices</span> that scale.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-100 dark:border-purple-800">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">8+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Years Exp</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-100 dark:border-purple-800">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Projects</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-100 dark:border-purple-800">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">8K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Followers</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Experience Card */}
            <div className="group relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-800">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"></div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="w-2 h-8 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full mr-3"></span>
                Experience Highlights
              </h3>

              <ul className="space-y-4">
                <li className="flex items-start group/item">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 flex-1">
                    AI-augmented development with Cursor, Copilot & Claude
                  </span>
                </li>
                <li className="flex items-start group/item">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 flex-1">
                    Production-level code & fixing major issues
                  </span>
                </li>
                <li className="flex items-start group/item">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 flex-1">
                    8+ years TypeScript/JavaScript & Node.js expertise
                  </span>
                </li>
                <li className="flex items-start group/item">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 flex-1">
                    AWS cloud architecture & containerization (Docker/K8s)
                  </span>
                </li>
                <li className="flex items-start group/item">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 flex-1">
                    Automated CI/CD pipelines & code review workflows
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
