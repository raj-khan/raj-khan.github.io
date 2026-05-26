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
    name: 'aiagentflow/cli',
    badge: 'open source',
    tagline: 'CLI tool that orchestrates multi-agent AI workflows for software development.',
    about: 'Command-line tool for running structured multi-agent pipelines. Handles task routing, agent handoffs, and output validation so AI-assisted dev stays predictable.',
    stack: ['Node.js', 'TypeScript', 'Commander.js', 'Vitest'],
    links: [
      { label: 'github', icon: <Icon.github />, href: 'https://github.com/aiagentflow' },
      { label: 'aiagentflow.dev', icon: <Icon.external />, href: 'https://aiagentflow.dev' },
    ],
  },
  {
    name: 'raj-khan/e2spec',
    badge: 'open source',
    tagline: 'Turns project estimates into structured development specs and LLM-ready prompts.',
    about: 'Ruby CLI that takes rough project estimates and outputs structured specs, implementation plans, and prompts ready to drop into any LLM. Built on the OpenAI API.',
    stack: ['Ruby', 'OpenAI API', 'CLI'],
    links: [
      { label: 'e2spec.com', icon: <Icon.external />, href: 'https://e2spec.com' },
    ],
  },
  {
    name: 'raj-khan/seorankslab',
    badge: 'open source',
    tagline: 'Turns Search Console data into prioritized SEO tasks and AI-ready prompts.',
    about: 'Connects to Google Search Console and scores your pages deterministically in code. Outputs weekly reports and prompts you can hand to an LLM. GSC data never leaves your machine.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    links: [
      { label: 'github', icon: <Icon.github />, href: 'https://github.com/raj-khan/seorankslab' },
      { label: 'seorankslab.com', icon: <Icon.external />, href: 'https://seorankslab.com' },
    ],
  },
  {
    name: 'raj-khan/nextjs-supabase-saas-boilerplate',
    badge: 'public',
    tagline: 'Reusable architecture and engineering conventions for Next.js + Supabase SaaS.',
    about: 'Repo structure, auth, database, and deploy patterns I reach for when starting a new SaaS. Opinionated but lightweight.',
    stack: ['TypeScript', 'Next.js', 'Supabase', 'SaaS'],
    links: [{ label: 'github', icon: <Icon.github />, href: 'https://github.com/raj-khan/nextjs-supabase-saas-boilerplate' }],
  },
  {
    name: 'raj-khan/pre-school-keyboard',
    badge: 'public',
    tagline: 'A browser typing game built for one kid. Large keys, voice feedback, emoji reactions.',
    about: 'Built for my own kid. Each key press shows the character in large text, speaks it aloud, changes colors, and shows a friendly emoji. Taught me a lot about input latency and audio cues.',
    stack: ['TypeScript', 'Web Audio', 'React'],
    links: [{ label: 'github', icon: <Icon.github />, href: 'https://github.com/raj-khan/pre-school-keyboard' }],
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
            Public work. <em>Code you can read.</em>
          </h2>
        </div>
        <p className="section-sub">
          A few open repos. Most client work is private. These are the projects with public code.
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
