import { Icon } from '@/components/Icons'

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
            Most of my work is <em>on GitHub.</em>
          </h2>
        </div>
        <p className="section-sub">
          Client work is private. Side projects, CLI tools, and experiments are public. See the projects section above for details.
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
            github.com/raj-khan
          </a>
        </div>
        <div className="gh-body">
          <div className="gh-repos">
            <a className="gh-repo" href="https://github.com/raj-khan" target="_blank" rel="noopener">
              <div className="gh-repo-name">
                <Icon.github />
                <span>View all public repos</span>
              </div>
              <div className="gh-repo-desc">TypeScript, Node.js, Ruby, React. CLI tools, SaaS starters, and side projects.</div>
              <div className="gh-repo-meta">
                <span>github.com/raj-khan</span>
              </div>
            </a>
            <a className="gh-repo" href="https://github.com/aiagentflow" target="_blank" rel="noopener">
              <div className="gh-repo-name">
                <Icon.github />
                <span>aiagentflow org</span>
              </div>
              <div className="gh-repo-desc">Multi-agent AI workflow tooling for software development.</div>
              <div className="gh-repo-meta">
                <span>github.com/aiagentflow</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
