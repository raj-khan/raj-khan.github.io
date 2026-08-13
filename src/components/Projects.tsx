import { Icon } from '@/components/Icons'

type Project = {
  name: string;
  href: string;
  tagline: string;
  stars: number;
  lang: string;
  langColor: string;
  updated: string;
  tags: string[];
}

const PROJECTS: Project[] = [
  {
    name: 'markdown.software',
    href: 'https://github.com/raj-khan/markdown.software',
    tagline:
      'Free & open-source Markdown → PDF. Write with a live preview and download a polished, vector-quality PDF — no sign-up.',
    stars: 4,
    lang: 'TypeScript',
    langColor: '#3178c6',
    updated: 'Jun 2026',
    tags: ['Markdown', 'PDF', 'Open Source'],
  },
  {
    name: 'google-contacts-api',
    href: 'https://github.com/raj-khan/google-contacts-api',
    tagline:
      'Export your Google contacts into a JSON file using the Google People API — a clean Node.js reference implementation.',
    stars: 4,
    lang: 'JavaScript',
    langColor: '#f1e05a',
    updated: 'Dec 2020',
    tags: ['Google API', 'Node.js'],
  },
  {
    name: 'nextjs-supabase-saas-boilerplate',
    href: 'https://github.com/raj-khan/nextjs-supabase-saas-boilerplate',
    tagline:
      'Reusable architecture, coding-agent workflow, and engineering conventions for Next.js + Supabase SaaS projects.',
    stars: 0,
    lang: 'TypeScript',
    langColor: '#3178c6',
    updated: 'Jul 2026',
    tags: ['Next.js', 'Supabase', 'SaaS'],
  },
  {
    name: 'tighten',
    href: 'https://github.com/raj-khan/tighten',
    tagline:
      'Tighten padded, AI-written docs: same meaning, fewer words. A plugin skill for Claude Code, Cursor, Codex and 50+ agents.',
    stars: 0,
    lang: 'JavaScript',
    langColor: '#f1e05a',
    updated: 'Jun 2026',
    tags: ['AI', 'Docs', 'Plugin'],
  },
  {
    name: 'subtitle-py',
    href: 'https://github.com/raj-khan/subtitle-py',
    tagline:
      'Live, fully local English subtitles for whatever audio is playing on your laptop — real-time transcription with Whisper.',
    stars: 0,
    lang: 'Python',
    langColor: '#3572A5',
    updated: 'Jun 2026',
    tags: ['Python', 'Whisper', 'Audio'],
  },
  {
    name: 'kiddoschool',
    href: 'https://github.com/raj-khan/kiddoschool',
    tagline:
      'A playful browser typing game for one child — big keys, voice feedback, color changes, and friendly emoji reactions.',
    stars: 0,
    lang: 'TypeScript',
    langColor: '#3178c6',
    updated: 'Jun 2026',
    tags: ['React', 'Game', 'Kids'],
  },
]

export function Projects() {
  return (
    <section className="section container" id="work">
      <div className="section-label">
        <span className="bar"></span> DEV
      </div>
      <div className="section-head">
        <h2 className="section-title">My Projects</h2>
        <a
          className="section-link"
          href="https://github.com/raj-khan?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          all repositories <Icon.external />
        </a>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <a className="project" key={p.name} href={p.href} target="_blank" rel="noopener noreferrer">
            <div className="project-name-row">
              <span className="project-name">{p.name}</span>
              <span className="project-ext">
                <Icon.external />
              </span>
            </div>
            <p className="project-tagline">{p.tagline}</p>
            <div className="project-meta">
              <span className="stars">
                <Icon.star /> {p.stars}
              </span>
              <span className="lang">
                <span className="dot" style={{ background: p.langColor }}></span>
                {p.lang}
              </span>
              <span className="updated">Updated {p.updated}</span>
            </div>
            <div className="project-tags">
              {p.tags.map((t) => (
                <span className="project-tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>

      <div className="show-all">
        <a href="https://github.com/raj-khan" target="_blank" rel="noopener noreferrer">
          Show All <Icon.arrowUpRight />
        </a>
      </div>
    </section>
  )
}
