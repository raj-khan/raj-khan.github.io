export function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution built with Next.js, NestJS, and PostgreSQL. Features include user authentication, payment processing, inventory management, and real-time notifications.',
      technologies: ['Next.js', 'NestJS', 'PostgreSQL', 'Stripe API', 'Redis'],
      imageUrl: '/projects/ecommerce.jpg',
      githubUrl: 'https://github.com/yourusername/ecommerce-platform',
      liveUrl: 'https://ecommerce-demo.com',
    },
    {
      title: 'Task Management API',
      description: 'RESTful API built with Node.js and Express for project management. Includes user roles, real-time updates with WebSocket, file uploads, and comprehensive testing suite.',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'WebSocket'],
      imageUrl: '/projects/task-api.jpg',
      githubUrl: 'https://github.com/yourusername/task-management-api',
      liveUrl: null,
    },
    {
      title: 'Real-time Chat Application',
      description: 'Full-stack chat application with React frontend and Node.js backend. Features include private messaging, group chats, file sharing, and message encryption.',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'JWT'],
      imageUrl: '/projects/chat-app.jpg',
      githubUrl: 'https://github.com/yourusername/chat-application',
      liveUrl: 'https://chat-app-demo.com',
    },
    {
      title: 'Analytics Dashboard',
      description: 'Business intelligence dashboard built with React and D3.js. Connects to multiple data sources, provides interactive visualizations, and exports reports.',
      technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'Chart.js'],
      imageUrl: '/projects/analytics.jpg',
      githubUrl: 'https://github.com/yourusername/analytics-dashboard',
      liveUrl: 'https://analytics-demo.com',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container-max-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work and side projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card overflow-hidden">
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                {/* Placeholder for project image */}
                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24
