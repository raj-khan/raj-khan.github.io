import { Icon } from '@/components/Icons'

const SERVICES = [
  { ico: <Icon.zap />, name: 'MVP development', desc: 'Idea to working product. Weekly progress, real milestones, actual launch at the end.' },
  { ico: <Icon.layers />, name: 'SaaS product build', desc: 'Multi-tenant, billing, auth, dashboards. The unglamorous backbone that paid SaaS actually needs.' },
  { ico: <Icon.code />, name: 'Full-stack feature delivery', desc: 'Drop into an existing team and ship vertical slices: frontend, API, data, deploy.' },
  { ico: <Icon.cpu />, name: 'Backend & API architecture', desc: 'Data model, contracts, jobs, queues. Built to scale before scale becomes the problem.' },
  { ico: <Icon.sparkle />, name: 'AI workflow integration', desc: 'Agents, RAG, CLI automation, prompt pipelines. Integrated into a real codebase, not a demo.' },
  { ico: <Icon.terminal />, name: 'Developer tooling & CLIs', desc: 'Internal tools, scripts, CLIs that save your team time every single week.' },
  { ico: <Icon.target />, name: 'Technical planning', desc: 'Rough product idea turned into engineering scope, milestones, and honest estimates.' },
  { ico: <Icon.shield />, name: 'Production debugging', desc: "Things on fire? I dig into logs, fix the root cause, and write the runbook so it doesn't happen again." },
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
          Things I work on daily and dig into in my own time. Full-stack, AI tooling, the whole build.
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
