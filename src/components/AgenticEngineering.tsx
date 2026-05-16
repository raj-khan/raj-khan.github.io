import { Fragment } from 'react'
import { Icon } from '@/components/Icons'

const AGENTS = [
  { name: 'Founder Goal', role: 'the business outcome we\'re building toward', icon: <Icon.target />, status: 'input', type: '' },
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
          I use AI agents and CLI workflows for leverage — never as autopilot. Founders get faster
          delivery without losing the engineering quality that keeps a product alive in year two.
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
          <h3>Speed without losing the plot.</h3>
          <p>
            The AI handles the volume work — boilerplate, scaffolds, drafts, test stubs. I handle
            the decisions that matter: what to build, how to structure it, what to refuse to build,
            and when &ldquo;the agent&rsquo;s suggestion&rdquo; is actually a maintenance bomb six
            months out.
          </p>
          <p>
            Founders don&rsquo;t need a pure prompter or a pure engineer. They need someone who can
            hold both.
          </p>
          <div className="agent-principles">
            <div className="agent-principle">
              <span className="pn">01.</span>
              <span>
                <strong>AI for speed,</strong> not for judgment. Architecture and trade-offs stay
                human.
              </span>
            </div>
            <div className="agent-principle">
              <span className="pn">02.</span>
              <span>
                <strong>Every output gets reviewed.</strong> If I wouldn&rsquo;t merge it from a
                junior, I don&rsquo;t merge it from an agent.
              </span>
            </div>
            <div className="agent-principle">
              <span className="pn">03.</span>
              <span>
                <strong>Tests are the contract.</strong> Generated code earns trust the same way
                human code does.
              </span>
            </div>
            <div className="agent-principle">
              <span className="pn">04.</span>
              <span>
                <strong>Boring works.</strong> Postgres, queues, monoliths — chosen on merit, not
                novelty.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
