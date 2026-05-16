import { Icon } from '@/components/Icons'

const SKILL_GROUPS = [
  { ico: <Icon.target />, name: 'Product Engineering', items: ['MVPs', 'SaaS', 'Dashboards', 'Internal tools', 'Spec → ship'] },
  { ico: <Icon.layers />, name: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Design systems'] },
  { ico: <Icon.cpu />, name: 'Backend', items: ['Node.js', 'NestJS', 'REST', 'GraphQL', 'PostgreSQL', 'Queues'] },
  { ico: <Icon.cloud />, name: 'Cloud & DevOps', items: ['AWS ECS', 'S3', 'Docker', 'GitHub Actions', 'CI/CD', 'Observability'] },
  { ico: <Icon.sparkle />, name: 'AI Workflow', items: ['Claude', 'Cursor', 'Agentic CLI', 'Prompt design', 'Eval loops'] },
  { ico: <Icon.shield />, name: 'Quality', items: ['Code review', 'Testing', 'Architecture', 'Maintainability', 'Security basics'] },
]

export function Skills() {
  return (
    <section className="section container reveal" id="skills">
      <div className="section-head">
        <div>
          <div className="section-eyebrow">
            <span className="num">07 /</span> <span className="dot"></span>{' '}
            <span>capabilities</span>
          </div>
          <h2 className="section-title">What I bring to the build.</h2>
        </div>
        <p className="section-sub">
          No percentage bars. Just tools I actually use to ship every week.
        </p>
      </div>
      <div className="skills-grid">
        {SKILL_GROUPS.map((g, i) => (
          <div className="skill-card" key={i}>
            <div className="skill-head">
              <span className="ico">{g.ico}</span>
              <strong>{g.name}</strong>
            </div>
            <div className="skill-list">
              {g.items.map((it) => (
                <span key={it}>{it}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
