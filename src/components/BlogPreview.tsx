export function BlogPreview() {
  return (
    <section className="section" id="writing">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="section-eyebrow">
              <span className="dot"></span>
              <span className="num">09</span>
              <span>engineering notes</span>
            </div>
            <h2 className="section-title">
              Notes from the field.
            </h2>
          </div>
          <p className="section-sub">
            Practical writing on architecture, AI workflows, and getting
            things to production. No hype.
          </p>
        </div>

        <div className="writing-list reveal">
          <a className="writing-row" href="https://github.com/raj-khan" target="_blank" rel="noopener">
            <span className="date">2026 · 04</span>
            <span>
              <h3 className="title">Agents as drafts, humans as decisions</h3>
              <span className="meta"><span className="tag">#agentic</span><span>~6 min read</span></span>
            </span>
            <span className="arrow-btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span>
          </a>
          <a className="writing-row" href="https://github.com/raj-khan" target="_blank" rel="noopener">
            <span className="date">2026 · 02</span>
            <span>
              <h3 className="title">Scaling a sleepy NestJS app on AWS without rewriting it</h3>
              <span className="meta"><span className="tag">#backend</span><span>~9 min read</span></span>
            </span>
            <span className="arrow-btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span>
          </a>
          <a className="writing-row" href="https://github.com/raj-khan" target="_blank" rel="noopener">
            <span className="date">2025 · 11</span>
            <span>
              <h3 className="title">Idea → spec → tickets: the cheapest leverage in product</h3>
              <span className="meta"><span className="tag">#process</span><span>~7 min read</span></span>
            </span>
            <span className="arrow-btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span>
          </a>
          <a className="writing-row" href="https://github.com/raj-khan" target="_blank" rel="noopener">
            <span className="date">2025 · 08</span>
            <span>
              <h3 className="title">CLI workflows beat dashboards (until they don&apos;t)</h3>
              <span className="meta"><span className="tag">#devtools</span><span>~5 min read</span></span>
            </span>
            <span className="arrow-btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span>
          </a>
        </div>
      </div>
    </section>
  )
}
