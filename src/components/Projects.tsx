import { Icon } from '@/components/Icons'

type ProjectLink = { label: string; icon: React.ReactNode; href: string }
type Project = {
  name: string
  badge: string
  tagline: string
  problem: string
  role: string
  impact: string
  stack: string[]
  links: ProjectLink[]
}

const PROJECTS: Project[] = [
  {
    name: 'raj-khan/aiagentflow',
    badge: 'featured',
    tagline: 'Local-first CLI for orchestrating multi-agent software engineering workflows.',
    problem: 'Coding agents are powerful but chaotic — no shared context, no review gates, no auditability.',
    role: 'Creator & maintainer · architecture, CLI, agent contracts, ops',
    impact: 'Brings agent runs into a structured pipeline with checkpoints, review, and replay — usable on real codebases.',
    stack: ['TypeScript', 'Node.js', 'CLI', 'LLM tooling', 'git'],
    links: [
      { label: 'github', icon: <Icon.github />, href: 'https://github.com/raj-khan' },
      { label: 'readme', icon: <Icon.book />, href: '#' },
    ],
  },
  {
    name: 'raj-khan/e2spec',
    badge: 'featured',
    tagline: 'Turn rough product ideas into developer-ready specs in minutes.',
    problem: 'Founders pitch ideas; engineers need scope. The translation layer is where most projects stall.',
    role: 'Creator · spec generation pipeline, prompt design, output schema',
    impact: 'Converts a 2-paragraph idea into milestones, user stories, data model sketch, and a ticket-shaped backlog.',
    stack: ['TypeScript', 'Next.js', 'LLM', 'structured output'],
    links: [
      { label: 'github', icon: <Icon.github />, href: 'https://github.com/raj-khan' },
      { label: 'live', icon: <Icon.external />, href: '#' },
    ],
  },
  {
    name: 'snappymob/SEORanksLab',
    badge: 'client',
    tagline: 'Turn Google Search Console data into a prioritised SEO action workflow.',
    problem: 'GSC dumps thousands of queries; teams don\'t know which 20 to act on this week.',
    role: 'Full-stack engineer · backend pipeline, scoring engine, dashboard UI',
    impact: 'Ranks opportunities by impact × effort, generates briefs, and tracks delta. Used by content teams weekly.',
    stack: ['Next.js', 'NestJS', 'PostgreSQL', 'AWS', 'GSC API'],
    links: [
      { label: 'case study', icon: <Icon.book />, href: '#' },
      { label: 'live', icon: <Icon.external />, href: '#' },
    ],
  },
  {
    name: 'raj-khan/quick-memorial',
    badge: 'side',
    tagline: 'Generate beautiful memorial pages with QR-code sharing — in under five minutes.',
    problem: 'Families want a digital place to gather memories; existing tools are slow, ugly, or paywalled.',
    role: 'Solo build · product, design, full-stack, hosting',
    impact: 'Free public templates, QR cards for graveside scanning, contributor messages without account creation.',
    stack: ['Next.js', 'Tailwind', 'PostgreSQL', 'S3', 'QR'],
    links: [{ label: 'live', icon: <Icon.external />, href: '#' }],
  },
  {
    name: 'private/enterprise-systems',
    badge: 'production',
    tagline: 'Financial, HRM, and internal tools across multiple enterprise clients.',
    problem: 'Enterprise teams stuck on legacy back-offices need modern web apps without ripping everything out.',
    role: 'Full-stack lead · architecture, frontend, NestJS APIs, AWS, CI/CD, handoff',
    impact: 'Shipped finance dashboards, HRM workflows, and internal admin tools running in production with real users.',
    stack: ['React', 'NestJS', 'PostgreSQL', 'AWS ECS', 'Docker'],
    links: [{ label: 'summary', icon: <Icon.book />, href: '#' }],
  },
  {
    name: 'raj-khan/lab',
    badge: 'experiment',
    tagline: 'Public experiments — CLI scaffolds, agent recipes, dev-workflow probes.',
    problem: 'Most AI-assisted patterns only show up after you\'ve shipped a few. So I keep shipping them.',
    role: 'Hacking in public · weekly-ish',
    impact: 'Small, opinionated repos that map directly to things I use in client work.',
    stack: ['TypeScript', 'CLI', 'Claude', 'agentic'],
    links: [{ label: 'github', icon: <Icon.github />, href: 'https://github.com/raj-khan' }],
  },
]

export function Projects() {
  return (
    <section className="section container reveal" id="projects">
      <div className="section-head">
        <div>
          <div className="section-eyebrow">
            <span className="num">05 /</span> <span className="dot"></span>{' '}
            <span>build artifacts</span>
          </div>
          <h2 className="section-title">
            Selected work — <em>proof, not portfolio.</em>
          </h2>
        </div>
        <p className="section-sub">
          Six representative builds across products, client work, and open-source. Each one shipped
          to real users.
        </p>
      </div>
      <div className="projects-grid">
        {PROJECTS.map((p, i) => (
          <article className="project" key={i}>
            <div className="project-head">
              <div className="project-folder">
                <Icon.folder />
              </div>
              <div className="project-title-row">
                <div className="project-title">
                  <span className="slash">{p.name.split('/')[0]}/</span>
                  <span>{p.name.split('/')[1]}</span>
                  <span className="badge">{p.badge}</span>
                </div>
                <div className="project-tagline">{p.tagline}</div>
              </div>
            </div>
            <div className="project-body">
              <div className="project-row">
                <span className="k">problem</span>
                <span className="v">{p.problem}</span>
              </div>
              <div className="project-row">
                <span className="k">role</span>
                <span className="v">{p.role}</span>
              </div>
              <div className="project-row">
                <span className="k">impact</span>
                <span className="v">{p.impact}</span>
              </div>
            </div>
            <div className="project-foot">
              <div className="project-stack">
                {p.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
              <div className="project-links">
                {p.links.map((l, j) => (
                  <a
                    key={j}
                    href={l.href}
                    target={l.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener"
                  >
                    {l.icon} {l.label}
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
