export function Skills() {
  const skillCategories = [
    {
      title: 'AI & Development',
      icon: '🤖',
      skills: [
        { name: 'Cursor AI', level: 95 },
        { name: 'GitHub Copilot', level: 90 },
        { name: 'Claude', level: 90 },
        { name: 'Prompt Engineering', level: 85 },
      ]
    },
    {
      title: 'Languages',
      icon: '💻',
      skills: [
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'SQL', level: 85 },
        { name: 'HTML/CSS', level: 90 },
      ]
    },
    {
      title: 'Frameworks',
      icon: '⚡',
      skills: [
        { name: 'Node.js', level: 95 },
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'NestJS', level: 80 },
      ]
    },
    {
      title: 'Databases',
      icon: '🗄️',
      skills: [
        { name: 'PostgreSQL', level: 90 },
        { name: 'MongoDB', level: 75 },
        { name: 'Redis', level: 80 },
        { name: 'MySQL', level: 75 },
      ]
    },
    {
      title: 'DevOps & Cloud',
      icon: '☁️',
      skills: [
        { name: 'AWS (ECS/RDS/S3)', level: 85 },
        { name: 'Docker', level: 85 },
        { name: 'Kubernetes', level: 75 },
        { name: 'CI/CD (GitHub)', level: 90 },
      ]
    },
    {
      title: 'Monitoring',
      icon: '📊',
      skills: [
        { name: 'New Relic', level: 80 },
        { name: 'DataDog', level: 75 },
        { name: 'CloudWatch', level: 85 },
        { name: 'ELK Stack', level: 70 },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 opacity-50"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to craft exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-800 hover:-translate-y-2"
            >
              {/* Category Header */}
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group/skill">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover/skill:text-purple-600 dark:group-hover/skill:text-purple-400 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-xs font-bold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 px-2 py-1 rounded-full">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out group-hover/skill:scale-x-105"
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 bg-white/30 animate-shimmer"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-10 blur-2xl transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* Additional Skills Pills */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Other Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'AI Code Review',
              'Prompt Engineering',
              'RESTful APIs',
              'GraphQL',
              'WebSocket',
              'Microservices',
              'Swagger/OpenAPI',
              'SonarCloud',
              'TDD',
              'Agile/Scrum',
              'System Design',
              'Performance Optimization'
            ].map((tech, index) => (
              <div
                key={index}
                className="group px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-default"
              >
                <span className="relative z-10">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
