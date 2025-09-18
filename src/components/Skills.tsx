export function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'SQL', level: 85 },
        { name: 'HTML/CSS', level: 90 },
      ]
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'Node.js', level: 95 },
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'NestJS', level: 80 },
      ]
    },
    {
      title: 'Databases & Tools',
      skills: [
        { name: 'PostgreSQL', level: 90 },
        { name: 'Git', level: 95 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
      ]
    },
    {
      title: 'Other Technologies',
      skills: [
        { name: 'RESTful APIs', level: 95 },
        { name: 'GraphQL', level: 75 },
        { name: 'Redis', level: 80 },
        { name: 'Microservices', level: 85 },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container-max-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="card p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-in-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
