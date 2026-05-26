import { Fragment } from 'react'
import { Icon } from '@/components/Icons'

const AGENTS = [
  { name: 'Product Goal', role: 'the outcome we are building toward', icon: <Icon.target />, status: 'input', type: '' },
  { name: 'Architect Agent', role: 'system design, data model, API boundaries', icon: <Icon.layers />, status: 'auto', type: '' },
  { name: 'Coder Agent', role: 'implements modules under defined contracts', icon: <Icon.builder />, status: 'auto', type: '' },
  { name: 'Reviewer Agent', role: 'static analysis, style, anti-patterns', icon: <Icon.reviewer />, status: 'auto', type: '' },
  { name: 'Tester Agent', role: 'writes + runs tests, finds edge cases', icon: <Icon.tester />, status: 'auto', type: '' },
  { name: 'Human Judgment', role: 'architecture, security, trade-offs, what NOT to build', icon: <Icon.human />, status: 'human', type: 'is-human' },
  { name: 'Production Release', role: 'shipped, monitored, owned end-to-end', icon: <Icon.rocket />, status: 'ok', type: 'is-output' },
]

export function AgenticEngineering() {
  return (
    <section className="section container reveal">
      <div className="section-head">
        <div>
          <div className="section-eyebrow">
            <span className="num">03 /</span> <span className="dot"></span>{' '}
            <span>signature approach</span>
          </div>
          <h2 className="section-title">
            AI-assisted, <em>human-owned</em> engineering.
          </h2>
        </div>
        <p className="section-sub">
          I use AI agents and CLI tools daily. They handle volume. I handle decisions. The output still has to meet the same bar as code I wrote by hand.
        </p>
      </div>
      <div className="agentic-grid">
        <div className="agent-flow">
          {AGENTS.map((a, i) => (
            <Fragment key={i}>
              <div className={'agent-node ' + a.type}>
                <div className="agent-icon">{a.icon}</div>
                <div style={{ minWidth: 0 }}>
                  <div className="agent-name">{a.name}</div>
                  <div className="agent-role">{a.role}</div>
                </div>
                <div
                  className={
                    'agent-status ' +
                    (a.status === 'ok' ? 'ok' : a.status === 'human' ? 'human' : '')
                  }
                >
                  <span className="dot"></span> {a.status}
                </div>
              </div>
              {i < AGENTS.length - 1 && <div className="agent-arrow"></div>}
            </Fragment>
          ))}
        </div>
        <div className="agent-copy">
          <h3>Fast output, real standards.</h3>
          <p>
            AI handles the repetitive parts: boilerplate, scaffolds, test stubs, first drafts. I handle what actually requires thought: system design, security, trade-offs, and whether something should be built at all.
          </p>
          <p>
            Code from an agent goes through the same review as code from anyone else. If I would not merge it from a junior engineer, I do not merge it from a model.
          </p>
          <div className="agent-principles">
            <div className="agent-principle">
              <span className="pn">01.</span>
              <span>
                <strong>AI for repetitive work.</strong> Architecture and trade-offs stay human.
              </span>
            </div>
            <div className="agent-principle">
              <span className="pn">02.</span>
              <span>
                <strong>Every output gets reviewed.</strong> Same bar as any other code review.
              </span>
            </div>
            <div className="agent-principle">
              <span className="pn">03.</span>
              <span>
                <strong>Tests are the contract.</strong> Generated code earns trust the same way hand-written code does.
              </span>
            </div>
            <div className="agent-principle">
              <span className="pn">04.</span>
              <span>
                <strong>Boring is fine.</strong> Postgres, queues, monoliths. Chosen because they work, not because they are interesting.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
