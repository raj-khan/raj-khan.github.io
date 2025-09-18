export function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container-max-width section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                I'm a passionate full-stack developer with over 7 years of experience in building 
                robust web applications and scalable backend systems. My expertise lies in JavaScript 
                ecosystem, particularly with TypeScript, Node.js, and modern frameworks.
              </p>
              <p>
                Throughout my career, I've worked extensively with PostgreSQL databases, designing 
                efficient schemas and optimizing complex queries. I specialize in creating RESTful 
                APIs, microservices architecture, and real-time applications.
              </p>
              <p>
                I'm particularly drawn to solving complex problems and creating elegant solutions 
                that balance performance, maintainability, and user experience. I enjoy staying 
                up-to-date with the latest technologies and best practices in the industry.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Experience Highlights
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  7+ years of JavaScript/TypeScript development
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Expert in Node.js backend development
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  PostgreSQL database design & optimization
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  React, Next.js, and NestJS frameworks
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
