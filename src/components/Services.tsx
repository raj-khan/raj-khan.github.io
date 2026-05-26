import { Icon } from '@/components/Icons'

const SERVICES = [
  { ico: <Icon.zap />, name: 'MVP development', desc: 'Idea → working product. 4–10 week sprints with weekly demos and a real launch at the end.' },
  { ico: <Icon.layers />, name: 'SaaS product build', desc: 'Multi-tenant, billing, auth, dashboards. The non-glamorous backbone that paid SaaS needs.' },
  { ico: <Icon.code />, name: 'Full-stack feature delivery', desc: 'Drop into an existing team and ship vertical slices — frontend, API, data, deploy.' },
  { ico: <Icon.cpu />, name: 'Backend & API architecture', desc: 'Data model, contracts, jobs, queues. Designed to scale before scale is a problem.' },
  { ico: <Icon.sparkle />, name: 'AI workflow integration', desc: 'Agents, RAG, CLI automation, prompt pipelines — integrated into your real codebase, not a demo.' },
  { ico: <Icon.terminal />, name: 'Developer tooling & CLIs', desc: 'Internal tools, scripts, CLIs that make your team faster every week, not just once.' },
  { ico: <Icon.target />, name: 'Technical planning', desc: 'Turning rough product ideas into engineering scope, milestones, and honest estimates.' },
  { ico: <Icon.shield />, name: 'Production debugging', desc: 'Things on fire? I read logs, fix the root cause, and write the runbook so it doesn\'t repeat.' },
]

export function Services() {
  return (
    <section className="section container reveal">
      <div className="section-head">
        <div>
          <div className="section-eyebrow">
            <span className="num">04 /</span> <span className="dot"></span>{' '}
            <span>how i can help</span>
          </div>
          <h2 className="section-title">Eight areas I focus on and enjoy building in.</h2>
        </div>
        <p className="section-sub">
          These are the kinds of problems I work on day-to-day and explore in side projects — full-stack, AI workflows, and everything in between.
        </p>
      </div>
      <div className="services-grid">
        {SERVICES.map((s, i) => (
          <div className="service" key={i}>
            <div className="service-ico">{s.ico}</div>
            <h4>{s.name}</h4>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
