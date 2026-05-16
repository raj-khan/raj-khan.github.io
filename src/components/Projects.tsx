import { Icon } from '@/components/Icons'

type ProjectLink = { label: string; icon: React.ReactNode; href: string }
type Project = {
  name: string
  badge: string
  tagline: string
  about: string
  stack: string[]
  links: ProjectLink[]
}

const PROJECTS: Project[] = [
  {
    name: 'raj-khan/aiagentflow.dev',
    badge: 'public',
    tagline: 'Site & resources for the aiagentflow project — agentic engineering workflows.',
    about: 'Documentation and resources for orchestrating multi-agent software engineering with structured pipelines, checkpoints, and review.',
    stack: ['TypeScript', 'Next.js', 'Agentic'],
    links: [{ label: 'github', icon: <Icon.github />, href: 'https://github.com/raj-khan/aiagentflow.dev' }],
  },
  {
    name: 'raj-khan/nextjs-supabase-saas-boilerplate',
    badge: 'public',
    tagline: 'Reusable architecture and engineering conventions for Next.js + Supabase SaaS.',
    about: 'Coding-agent workflow, repo structure, and opinionated conventions I reach for when starting a new SaaS — auth, database, and deploy patterns included.',
    stack: ['TypeScript', 'Next.js', 'Supabase', 'SaaS'],
    links: [{ label: 'github', icon: <Icon.github />, href: 'https://github.com/raj-khan/nextjs-supabase-saas-boilerplate' }],
  },
  {
    name: 'raj-khan/pre-school-keyboard',
    badge: 'public',
    tagline: 'A playful browser typing game built for one child — large keys, voice feedback, emoji reactions.',
    about: 'Built for my own kid. Each key press shows the character in large text, speaks it aloud, changes colors, and shows a friendly emoji. A small project that taught me a lot about input latency and audio cues.',
    stack: ['TypeScript', 'Web Audio', 'React'],
    links: [{ label: 'github', icon: <Icon.github />, href: 'https://github.com/raj-khan/pre-school-keyboard' }],
  },
  {
    name: 'raj-khan/meher-jq',
    badge: 'public',
    tagline: 'Command-line JSON processor — a jq-style tool written from scratch in C.',
    about: 'Exploration of how jq-style streaming JSON filtering works under the hood — built for learning, not as a jq replacement.',
    stack: ['C', 'CLI', 'JSON'],
    links: [{ label: 'github', icon: <Icon.github />, href: 'https://github.com/raj-khan/meher-jq' }],
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
            Public work — <em>code you can read.</em>
          </h2>
        </div>
        <p className="section-sub">
          A few open repos. Most client work is private — these are the projects with public code
          to look at.
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
                <span className="k">about</span>
                <span className="v">{p.about}</span>
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
                  <a key={j} href={l.href} target="_blank" rel="noopener">
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
