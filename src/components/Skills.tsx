export function Skills() {
	return (
		<section className="section" id="skills">
			<div className="container-x">
				<div className="section-head reveal">
					<div>
						<div className="section-eyebrow">
							<span className="dot"></span>
							<span className="num">07</span>
							<span>capabilities</span>
						</div>
						<h2 className="section-title">
							Tools I reach for, <em>grouped by what they do.</em>
						</h2>
					</div>
					<p className="section-sub">
						No fake percentage bars — just the actual stack I use to ship
						production software.
					</p>
				</div>

				<div className="skills-grid reveal">
					<div className="skill-card">
						<div className="skill-head">
							<span className="ico">
								<svg
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									aria-hidden="true"
								>
									<rect x="3" y="3" width="18" height="18" rx="2" />
									<path d="M3 9h18" />
								</svg>
							</span>
							<strong>Product Engineering</strong>
						</div>
						<div className="skill-list">
							<span>MVPs</span>
							<span>SaaS</span>
							<span>Dashboards</span>
							<span>Internal tools</span>
							<span>Multi-tenant</span>
						</div>
					</div>
					<div className="skill-card">
						<div className="skill-head">
							<span className="ico">
								<svg
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									aria-hidden="true"
								>
									<polyline points="4 17 10 11 4 5" />
									<line x1="12" y1="19" x2="20" y2="19" />
								</svg>
							</span>
							<strong>Frontend</strong>
						</div>
						<div className="skill-list">
							<span>React</span>
							<span>Next.js</span>
							<span>TypeScript</span>
							<span>Tailwind</span>
							<span>Vite</span>
						</div>
					</div>
					<div className="skill-card">
						<div className="skill-head">
							<span className="ico">
								<svg
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									aria-hidden="true"
								>
									<ellipse cx="12" cy="5" rx="9" ry="3" />
									<path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" />
									<path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
								</svg>
							</span>
							<strong>Backend</strong>
						</div>
						<div className="skill-list">
							<span>Node.js</span>
							<span>NestJS</span>
							<span>REST</span>
							<span>GraphQL</span>
							<span>PostgreSQL</span>
							<span>MySQL</span>
						</div>
					</div>
					<div className="skill-card">
						<div className="skill-head">
							<span className="ico">
								<svg
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									aria-hidden="true"
								>
									<path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" />
									<polyline points="8 19 12 23 16 19" />
									<line x1="12" y1="13" x2="12" y2="23" />
								</svg>
							</span>
							<strong>Cloud &amp; DevOps</strong>
						</div>
						<div className="skill-list">
							<span>AWS</span>
							<span>EC2</span>
							<span>S3</span>
							<span>RDS</span>
							<span>Docker</span>
							<span>GitHub Actions</span>
							<span>CI/CD</span>
						</div>
					</div>
					<div className="skill-card">
						<div className="skill-head">
							<span className="ico">
								<svg
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									aria-hidden="true"
								>
									<path d="m21 16-9 5-9-5" />
									<path d="m21 12-9 5-9-5" />
									<path d="m12 2 9 5-9 5-9-5 9-5Z" />
								</svg>
							</span>
							<strong>AI Workflow</strong>
						</div>
						<div className="skill-list">
							<span>Claude</span>
							<span>Cursor</span>
							<span>Copilot</span>
							<span>Agent workflows</span>
							<span>Prompt engineering</span>
							<span>CLI automation</span>
						</div>
					</div>
					<div className="skill-card">
						<div className="skill-head">
							<span className="ico">
								<svg
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									aria-hidden="true"
								>
									<circle cx="12" cy="12" r="9" />
									<path d="m9 12 2 2 4-4" />
								</svg>
							</span>
							<strong>Quality &amp; Delivery</strong>
						</div>
						<div className="skill-list">
							<span>Testing</span>
							<span>Code review</span>
							<span>Architecture</span>
							<span>Observability</span>
							<span>Monitoring</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
