export function AgenticEngineering() {
  return (
    <section className="section" id="agentic">
      <div className="container-x">
        <div className="section-head reveal">
          <div>
            <div className="section-eyebrow">
              <span className="dot"></span>
              <span className="num">03</span>
              <span>agentic engineering</span>
            </div>
            <h2 className="section-title">
              AI-assisted, <em>human-owned</em> engineering.
            </h2>
          </div>
          <p className="section-sub">
            Agents move drafts. Humans own decisions. The handoff between
            them is where most teams get burned &mdash; that&apos;s the part I take
            care of.
          </p>
        </div>

        <div className="agentic-grid">
          <div className="agent-flow reveal" aria-hidden="false">
            <div className="agent-node is-human">
              <div className="agent-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>
              </div>
              <div>
                <div className="agent-name">founder.goal</div>
                <div className="agent-role">What outcome are we shipping?</div>
              </div>
              <div className="agent-status human"><span className="dot"></span>input</div>
            </div>
            <span className="agent-arrow"></span>

            <div className="agent-node">
              <div className="agent-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m21 16-9 5-9-5"/><path d="m21 12-9 5-9-5"/><path d="m12 2 9 5-9 5-9-5 9-5Z"/></svg>
              </div>
              <div>
                <div className="agent-name">architect.agent</div>
                <div className="agent-role">data model &middot; API contracts &middot; constraints</div>
              </div>
              <div className="agent-status ok"><span className="dot"></span>ready</div>
            </div>
            <span className="agent-arrow"></span>

            <div className="agent-node">
              <div className="agent-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              <div>
                <div className="agent-name">coder.agent</div>
                <div className="agent-role">drafts typed full-stack implementation</div>
              </div>
              <div className="agent-status ok"><span className="dot"></span>running</div>
            </div>
            <span className="agent-arrow"></span>

            <div className="agent-node">
              <div className="agent-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m9 12 2 2 4-4"/></svg>
              </div>
              <div>
                <div className="agent-name">reviewer.agent</div>
                <div className="agent-role">static analysis &middot; security &middot; diffs</div>
              </div>
              <div className="agent-status ok"><span className="dot"></span>passed</div>
            </div>
            <span className="agent-arrow"></span>

            <div className="agent-node">
              <div className="agent-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <div>
                <div className="agent-name">tester.agent</div>
                <div className="agent-role">unit + integration on real DBs</div>
              </div>
              <div className="agent-status ok"><span className="dot"></span>green</div>
            </div>
            <span className="agent-arrow"></span>

            <div className="agent-node is-human">
              <div className="agent-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"/></svg>
              </div>
              <div>
                <div className="agent-name">human.judgment</div>
                <div className="agent-role">architecture &amp; trade-offs &middot; the part that matters</div>
              </div>
              <div className="agent-status human"><span className="dot"></span>me</div>
            </div>
            <span className="agent-arrow"></span>

            <div className="agent-node is-output">
              <div className="agent-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7"/><path d="M16 6l-4-4-4 4"/><path d="M12 2v14"/></svg>
              </div>
              <div>
                <div className="agent-name">production.release</div>
                <div className="agent-role">shipped &middot; monitored &middot; accountable</div>
              </div>
              <div className="agent-status ok"><span className="dot"></span>live</div>
            </div>
          </div>

          <div className="agent-copy reveal">
            <h3>I use AI as leverage. I don&apos;t outsource judgment to it.</h3>
            <p>
              Agents draft code fast. They also confidently produce subtle
              bugs, security holes, and architectures that don&apos;t survive
              contact with real users. I keep humans in the loop where it
              counts.
            </p>
            <div className="agent-principles">
              <div className="agent-principle">
                <span className="pn">01</span>
                <span><strong>Architecture is owned.</strong> Data models, service boundaries, and trade-offs are decided deliberately &mdash; not whatever the model felt like emitting.</span>
              </div>
              <div className="agent-principle">
                <span className="pn">02</span>
                <span><strong>Every diff is read.</strong> AI-generated code goes through the same review bar as anything I&apos;d write by hand.</span>
              </div>
              <div className="agent-principle">
                <span className="pn">03</span>
                <span><strong>Tests on real infrastructure.</strong> Mocked tests aren&apos;t proof &mdash; integration tests against real databases are.</span>
              </div>
              <div className="agent-principle">
                <span className="pn">04</span>
                <span><strong>Maintainability over cleverness.</strong> If the next engineer can&apos;t read it in a week, it doesn&apos;t ship.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
