import { Icon } from '@/components/Icons'

const REPOS = [
  {
    name: 'aiagentflow.dev',
    desc: 'Site & resources for the aiagentflow project — agentic engineering workflows.',
    lang: 'TypeScript',
    langColor: '#3178c6',
    href: 'https://github.com/raj-khan/aiagentflow.dev',
  },
  {
    name: 'nextjs-supabase-saas-boilerplate',
    desc: 'Reusable architecture, coding-agent workflow, and engineering conventions for Next.js + Supabase SaaS projects.',
    lang: 'TypeScript',
    langColor: '#3178c6',
    href: 'https://github.com/raj-khan/nextjs-supabase-saas-boilerplate',
  },
  {
    name: 'pre-school-keyboard',
    desc: 'A playful browser typing game for one child — large keys, voice feedback, and friendly emoji reactions.',
    lang: 'TypeScript',
    langColor: '#3178c6',
    href: 'https://github.com/raj-khan/pre-school-keyboard',
  },
  {
    name: 'meher-jq',
    desc: 'Command-line JSON processor — exploration of jq-style filtering in C.',
    lang: 'C',
    langColor: '#555555',
    href: 'https://github.com/raj-khan/meher-jq',
  },
]

export function GitHubDashboard() {
  return (
    <section className="section container reveal" id="github">
      <div className="section-head">
        <div>
          <div className="section-eyebrow">
            <span className="num">08 /</span> <span className="dot"></span>{' '}
            <span>open source</span>
          </div>
          <h2 className="section-title">
            I build &amp; experiment <em>in public.</em>
          </h2>
        </div>
        <p className="section-sub">
          A few public repos around AI-assisted engineering, CLI tools, and developer workflows.
          Most client work lives in private repos — these are the ones you can read.
        </p>
      </div>
      <div className="gh-card">
        <div className="gh-bar">
          <Icon.github />
          <span className="at">@raj-khan</span>
          <a
            className="where"
            href="https://github.com/raj-khan"
            target="_blank"
            rel="noopener"
            style={{ marginLeft: 'auto', textDecoration: 'none', color: 'inherit' }}
          >
            github.com/raj-khan →
          </a>
        </div>
        <div className="gh-body">
          <div className="gh-repos">
            {REPOS.map((r) => (
              <a className="gh-repo" key={r.name} href={r.href} target="_blank" rel="noopener">
                <div className="gh-repo-name">
                  <Icon.folder />
                  <span>{r.name}</span>
                  <span className="pub">public</span>
                </div>
                <div className="gh-repo-desc">{r.desc}</div>
                <div className="gh-repo-meta">
                  <span>
                    <span className="lang-dot" style={{ background: r.langColor }}></span>
                    {r.lang}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
