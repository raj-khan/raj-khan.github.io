export function Projects() {
	return (
		<section className="section" id="projects">
			<div className="container-x">
				<div className="section-head reveal">
					<div>
						<div className="section-eyebrow">
							<span className="dot"></span>
							<span className="num">05</span>
							<span>build artifacts</span>
						</div>
						<h2 className="section-title">
							Selected work &amp; <em>open-source builds.</em>
						</h2>
					</div>
					<p className="section-sub">
						A mix of public projects and production systems I&apos;ve owned —
						each one is proof, not portfolio filler.
					</p>
				</div>

				<div className="projects-grid reveal">
					<article className="project">
						<header className="project-head">
							<div className="project-folder">
								<svg
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									aria-hidden="true"
								>
									<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
								</svg>
							</div>
							<div className="project-title-row">
								<div className="project-title">
									<span className="slash">raj-khan /</span>
									<span>aiagentflow</span>
									<span className="badge">FEATURED</span>
								</div>
								<div className="project-tagline">
									Local-first CLI workflow for agentic software engineering.
								</div>
							</div>
						</header>
						<div className="project-body">
							<div className="project-row">
								<span className="k">Problem</span>
								<span className="v">
									Most agentic tooling is cloud-locked, opaque, and hard to
									wire into a real engineering workflow.
								</span>
							</div>
							<div className="project-row">
								<span className="k">Built</span>
								<span className="v">
									<strong>A local-first orchestrator</strong> that runs
									multiple coding agents against a real repo, with review
									&amp; checkpointing in the loop.
								</span>
							</div>
							<div className="project-row">
								<span className="k">Why</span>
								<span className="v">
									Engineers should own their agents — not the other way
									around.
								</span>
							</div>
						</div>
						<footer className="project-foot">
							<div className="project-stack">
								<span>TypeScript</span>
								<span>Node.js</span>
								<span>CLI</span>
								<span>LLM</span>
							</div>
							<div className="project-links">
								<a
									href="https://github.com/raj-khan"
									target="_blank"
									rel="noopener"
									aria-label="View on GitHub"
								>
									<svg viewBox="0 0 24 24" fill="currentColor">
										<path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.1c-3.2.7-3.87-1.36-3.87-1.36-.52-1.31-1.28-1.66-1.28-1.66-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.4-5.26 5.69.41.36.78 1.06.78 2.13v3.16c0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
									</svg>
									<span>GitHub</span>
								</a>
							</div>
						</footer>
					</article>

					<article className="project">
						<header className="project-head">
							<div className="project-folder">
								<svg
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									aria-hidden="true"
								>
									<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
									<polyline points="14 2 14 8 20 8" />
								</svg>
							</div>
							<div className="project-title-row">
								<div className="project-title">
									<span className="slash">raj-khan /</span>
									<span>e2spec</span>
									<span className="badge">FOUNDER TOOL</span>
								</div>
								<div className="project-tagline">
									Turns rough ideas into developer-ready specifications.
								</div>
							</div>
						</header>
						<div className="project-body">
							<div className="project-row">
								<span className="k">Problem</span>
								<span className="v">
									Founders pitch ideas; engineers need tickets. The gap
									costs weeks.
								</span>
							</div>
							<div className="project-row">
								<span className="k">Built</span>
								<span className="v">
									<strong>A guided pipeline</strong> that converts vague
									product ideas into structured PRDs, user stories, and
									task breakdowns.
								</span>
							</div>
							<div className="project-row">
								<span className="k">Why</span>
								<span className="v">
									Clear specs are the cheapest leverage in software
									delivery.
								</span>
							</div>
						</div>
						<footer className="project-foot">
							<div className="project-stack">
								<span>Next.js</span>
								<span>TypeScript</span>
								<span>LLM</span>
								<span>Postgres</span>
							</div>
							<div className="project-links">
								<a
									href="https://github.com/raj-khan"
									target="_blank"
									rel="noopener"
								>
									<svg viewBox="0 0 24 24" fill="currentColor">
										<path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.1c-3.2.7-3.87-1.36-3.87-1.36-.52-1.31-1.28-1.66-1.28-1.66-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.4-5.26 5.69.41.36.78 1.06.78 2.13v3.16c0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
									</svg>
									<span>GitHub</span>
								</a>
							</div>
						</footer>
					</article>

					<article className="project">
						<header className="project-head">
							<div className="project-folder">
								<svg
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									aria-hidden="true"
								>
									<path d="M3 3h18v18H3z" />
									<path d="M3 9h18" />
									<path d="M9 21V9" />
								</svg>
							</div>
							<div className="project-title-row">
								<div className="project-title">
									<span className="slash">raj-khan /</span>
									<span>SEORanksLab</span>
									<span className="badge">PRODUCT</span>
								</div>
								<div className="project-tagline">
									GSC data → SEO action workflows.
								</div>
							</div>
						</header>
						<div className="project-body">
							<div className="project-row">
								<span className="k">Problem</span>
								<span className="v">
									Search Console gives data; teams need decisions and
									actions.
								</span>
							</div>
							<div className="project-row">
								<span className="k">Built</span>
								<span className="v">
									<strong>An SEO action platform</strong> that ingests GSC,
									prioritizes opportunities, and tracks the work to ship
									them.
								</span>
							</div>
							<div className="project-row">
								<span className="k">Why</span>
								<span className="v">
									Insights without workflows are wallpaper.
								</span>
							</div>
						</div>
						<footer className="project-foot">
							<div className="project-stack">
								<span>Next.js</span>
								<span>NestJS</span>
								<span>Postgres</span>
								<span>AWS</span>
							</div>
							<div className="project-links">
								<a
									href="https://github.com/raj-khan"
									target="_blank"
									rel="noopener"
								>
									<svg viewBox="0 0 24 24" fill="currentColor">
										<path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.1c-3.2.7-3.87-1.36-3.87-1.36-.52-1.31-1.28-1.66-1.28-1.66-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.4-5.26 5.69.41.36.78 1.06.78 2.13v3.16c0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
									</svg>
									<span>GitHub</span>
								</a>
							</div>
						</footer>
					</article>

					<article className="project">
						<header className="project-head">
							<div className="project-folder">
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
									<path d="m9 14 2 2 4-4" />
								</svg>
							</div>
							<div className="project-title-row">
								<div className="project-title">
									<span className="slash">raj-khan /</span>
									<span>quick-memorial</span>
									<span className="badge">SHIPPED</span>
								</div>
								<div className="project-tagline">
									Memorial page generator with QR sharing.
								</div>
							</div>
						</header>
						<div className="project-body">
							<div className="project-row">
								<span className="k">Problem</span>
								<span className="v">
									Families need a respectful, low-friction way to remember
									loved ones together.
								</span>
							</div>
							<div className="project-row">
								<span className="k">Built</span>
								<span className="v">
									<strong>A small SaaS</strong> that creates shareable
									memorial pages with QR codes and quiet, accessible
									design.
								</span>
							</div>
							<div className="project-row">
								<span className="k">Why</span>
								<span className="v">Soft tech for hard moments.</span>
							</div>
						</div>
						<footer className="project-foot">
							<div className="project-stack">
								<span>Next.js</span>
								<span>TypeScript</span>
								<span>S3</span>
								<span>QR</span>
							</div>
							<div className="project-links">
								<a
									href="https://github.com/raj-khan"
									target="_blank"
									rel="noopener"
								>
									<svg viewBox="0 0 24 24" fill="currentColor">
										<path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.1c-3.2.7-3.87-1.36-3.87-1.36-.52-1.31-1.28-1.66-1.28-1.66-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.4-5.26 5.69.41.36.78 1.06.78 2.13v3.16c0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
									</svg>
									<span>GitHub</span>
								</a>
							</div>
						</footer>
					</article>
				</div>
			</div>
		</section>
	);
}
