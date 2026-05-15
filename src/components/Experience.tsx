export function Experience() {
	return (
		<section className="section" id="experience">
			<div className="container-x">
				<div className="section-head reveal">
					<div>
						<div className="section-eyebrow">
							<span className="dot"></span>
							<span className="num">06</span>
							<span>mission log</span>
						</div>
						<h2 className="section-title">
							Eight years of{" "}
							<em>shipping software in production.</em>
						</h2>
					</div>
					<p className="section-sub">
						Enterprise systems, SaaS products, and internal tools — owned
						end-to-end across frontend, backend, and infrastructure.
					</p>
				</div>

				<div className="experience-grid">
					<div className="stats-grid reveal">
						<div className="stat">
							<div className="stat-num">
								8<span className="small">+</span>
							</div>
							<div className="stat-label">years shipping</div>
						</div>
						<div className="stat">
							<div className="stat-num">
								40<span className="small">%</span>
							</div>
							<div className="stat-label">
								response-time gain · scaling work
							</div>
						</div>
						<div className="stat">
							<div className="stat-num">4</div>
							<div className="stat-label">production stacks owned</div>
						</div>
						<div className="stat">
							<div className="stat-num">0</div>
							<div className="stat-label">
								days of prod downtime · post-scaling
							</div>
						</div>
					</div>

					<div className="mission-log reveal">
						<div className="mission-row">
							<span className="when">2022 — now</span>
							<span className="what">
								<strong>Senior Software Engineer</strong>
								<span className="where">
									Snappymob · Kuala Lumpur, Malaysia
								</span>
							</span>
							<span className="status status-active">Active</span>
						</div>
						<div className="mission-row">
							<span className="when">2022</span>
							<span className="what">
								<strong>PHP Developer</strong>
								<span className="where">
									Wipro Bangladesh Limited · Dhaka
								</span>
							</span>
							<span className="status status-done">Done</span>
						</div>
						<div className="mission-row">
							<span className="when">2019 — 2022</span>
							<span className="what">
								<strong>Software Developer</strong>
								<span className="where">
									SCT-Bangla Limited · Dhaka
								</span>
							</span>
							<span className="status status-done">Done</span>
						</div>
						<div className="mission-row">
							<span className="when">2017 — 2019</span>
							<span className="what">
								<strong>Full-Stack Web Developer</strong>
								<span className="where">
									Bangladesh Software Development (BSD) · Dhaka
								</span>
							</span>
							<span className="status status-done">Done</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
