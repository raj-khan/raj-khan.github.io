import { Icon } from '@/components/Icons'

function genGraph() {
  const cells: number[] = []
  let seed = 42
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280
    return seed / 233280
  }
  for (let w = 0; w < 53; w++) {
    for (let d = 0; d < 7; d++) {
      const recencyBoost = w > 38 ? 0.4 : w > 20 ? 0.15 : 0
      const r = rand() + recencyBoost - (d === 0 || d === 6 ? 0.2 : 0)
      let lvl = 0
      if (r > 0.85) lvl = 4
      else if (r > 0.65) lvl = 3
      else if (r > 0.45) lvl = 2
      else if (r > 0.28) lvl = 1
      cells.push(lvl)
    }
  }
  return cells
}
const GRAPH = genGraph()

const REPOS = [
  { name: 'aiagentflow', desc: 'Local-first CLI orchestrator for multi-agent software engineering workflows.', lang: 'TypeScript', langColor: '#3178c6', stars: 142, forks: 21 },
  { name: 'e2spec', desc: 'Turn rough product ideas into developer-ready specs, milestones, and tickets.', lang: 'TypeScript', langColor: '#3178c6', stars: 88, forks: 9 },
  { name: 'claude-cli-recipes', desc: 'Practical Claude/Cursor recipes for real codebases — not demos.', lang: 'Shell', langColor: '#89e051', stars: 56, forks: 7 },
  { name: 'nestjs-prod-starter', desc: 'Opinionated NestJS starter: auth, queues, OpenAPI, Docker, ECS-ready.', lang: 'TypeScript', langColor: '#3178c6', stars: 34, forks: 5 },
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
          Especially around AI-assisted engineering, CLI tools, and developer workflows. Hire
          someone who shows their work.
        </p>
      </div>
      <div className="gh-card">
        <div className="gh-bar">
          <Icon.github />
          <span className="at">@raj-khan</span>
          <span className="where">/ contributions last year</span>
          <div className="followers">
            <span>
              <b>1,284</b> commits
            </span>
            <span>
              <b>47</b> followers
            </span>
            <span>
              <b>312</b> stars
            </span>
          </div>
        </div>
        <div className="gh-body">
          <div className="gh-graph">
            {GRAPH.map((lvl, i) => (
              <div
                key={i}
                className={'gh-cell' + (lvl > 0 ? ' l' + lvl : '')}
                title={lvl + ' contributions'}
              ></div>
            ))}
          </div>
          <div className="gh-graph-meta">
            <span>1,284 contributions in the last year</span>
            <div className="scale">
              less
              <span className="gh-cell"></span>
              <span className="gh-cell l1"></span>
              <span className="gh-cell l2"></span>
              <span className="gh-cell l3"></span>
              <span className="gh-cell l4"></span>
              more
            </div>
          </div>
          <div className="gh-repos">
            {REPOS.map((r) => (
              <a
                className="gh-repo"
                key={r.name}
                href="https://github.com/raj-khan"
                target="_blank"
                rel="noopener"
              >
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
                  <span>
                    <Icon.star /> {r.stars}
                  </span>
                  <span>
                    <Icon.fork /> {r.forks}
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
