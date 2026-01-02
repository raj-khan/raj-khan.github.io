export function Projects() {
	const projects = [
		{
			title: "Personality Test Web App",
			description:
				"Interactive personality assessment tool featuring 16 MBTI-style personality types across 4 role categories. Built with modern Next.js, includes anonymous testing, beautiful result photocards, and social sharing capabilities.",
			technologies: [
				"Next.js",
				"TypeScript",
				"Tailwind CSS",
				"Zustand",
				"Turbo",
			],
			icon: "🧠",
			githubUrl:
				"https://github.com/raj-khan/raj-khan.github.io/tree/main/project/personality-app-web",
			liveUrl: "/project/personality-web-app",
		},
		{
			title: "Financial Application",
			description:
				"Enterprise-grade financial management system with real-time transaction processing, multi-currency support, automated reporting, and compliance features. Built with scalable architecture to handle high-volume transactions.",
			technologies: ["TypeScript", "NestJS", "PostgreSQL", "AWS ECS", "Redis"],
			icon: "💰",
			githubUrl: "https://github.com/raj-khan",
			liveUrl: null,
		},
		{
			title: "HRM Application",
			description:
				"Comprehensive Human Resource Management system featuring employee onboarding, payroll processing, attendance tracking, performance reviews, and leave management. Streamlines HR workflows for organizations.",
			technologies: ["Node.js", "React", "PostgreSQL", "Docker", "GraphQL"],
			icon: "👥",
			githubUrl: "https://github.com/raj-khan",
			liveUrl: null,
		},
		{
			title: "In-House Social Media App",
			description:
				"Custom enterprise social networking platform for internal team collaboration. Features include real-time messaging, content sharing, activity feeds, and team engagement analytics.",
			technologies: ["Next.js", "NestJS", "WebSocket", "MongoDB", "AWS S3"],
			icon: "🌐",
			githubUrl: "https://github.com/raj-khan",
			liveUrl: null,
		},
		{
			title: "Custom Software Solutions",
			description:
				"Expert in building tailored software solutions from scratch. Specialized in AI-augmented development workflows, rapid prototyping, and delivering production-ready code that solves complex business challenges.",
			technologies: ["TypeScript", "AI Tools", "Microservices", "AWS", "CI/CD"],
			icon: "🛠️",
			githubUrl: "https://github.com/raj-khan",
			liveUrl: null,
		},
	];

	return (
		<section
			id="projects"
			className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-gray-800 dark:to-gray-900"
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
						Featured Projects
					</h2>
					<div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-6"></div>
					<p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
						Expert custom software maker specializing in Financial, HRM, and
						Social Media applications
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{projects.map((project, index) => (
						<div
							key={index}
							className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-800 hover:-translate-y-2"
						>
							{/* Gradient Header */}
							<div
								className={`relative h-48 bg-gradient-to-br ${
									index === 0
										? "from-purple-500 to-pink-500"
										: index === 1
										? "from-blue-500 to-cyan-500"
										: index === 2
										? "from-green-500 to-teal-500"
										: "from-orange-500 to-yellow-500"
								} flex items-center justify-center overflow-hidden`}
							>
								{/* Decorative elements */}
								<div className="absolute inset-0 bg-black/10"></div>
								<div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
								<div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>

								{/* Icon */}
								<div className="relative z-10 text-8xl group-hover:scale-110 transition-transform duration-300">
									{project.icon}
								</div>

								{/* Gradient overlay on hover */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
							</div>

							{/* Content */}
							<div className="p-6">
								<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
									{project.title}
								</h3>

								<p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
									{project.description}
								</p>

								{/* Technologies */}
								<div className="flex flex-wrap gap-2 mb-6">
									{project.technologies.map((tech, techIndex) => (
										<span
											key={techIndex}
											className="px-3 py-1.5 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 text-xs font-semibold rounded-lg border border-purple-200 dark:border-purple-800 hover:scale-105 transition-transform"
										>
											{tech}
										</span>
									))}
								</div>

								{/* Action Buttons */}
								<div className="flex gap-3">
									{project.liveUrl && (
										<a
											href={project.liveUrl}
											target={
												project.liveUrl.startsWith("http") ? "_blank" : "_self"
											}
											rel={
												project.liveUrl.startsWith("http")
													? "noopener noreferrer"
													: undefined
											}
											className="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
										>
											<svg
												className="w-4 h-4 mr-2"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
												/>
											</svg>
											View Live
										</a>
									)}
									{project.githubUrl && (
										<a
											href={project.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
											className={`${
												project.liveUrl ? "flex-1" : "w-full"
											} inline-flex items-center justify-center px-4 py-2.5 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-105`}
										>
											<svg
												className="w-4 h-4 mr-2"
												fill="currentColor"
												viewBox="0 0 24 24"
											>
												<path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
											</svg>
											GitHub
										</a>
									)}
								</div>
							</div>

							{/* Decorative corner */}
							<div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/30 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
						</div>
					))}
				</div>

				{/* View More */}
				<div className="mt-12 text-center">
					<a
						href="https://github.com/raj-khan"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
					>
						<svg
							className="w-6 h-6 mr-2"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
						</svg>
						View More on GitHub
					</a>
				</div>
			</div>
		</section>
	);
}
