'use client'

import { useEffect, useRef } from 'react'

export function GitHubDashboard() {
  const graphRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const graph = graphRef.current
    if (!graph) return
    const total = 53 * 7
    let frag = ''
    for (let i = 0; i < total; i++) {
      const seed = (i * 9301 + 49297) % 233280
      const r = seed / 233280
      const week = Math.floor(i / 7)
      const recent = week > 36 ? 0.25 : 0
      const v = r + recent
      let cls = ''
      if (v > 0.92) cls = 'l4'
      else if (v > 0.78) cls = 'l3'
      else if (v > 0.6) cls = 'l2'
      else if (v > 0.4) cls = 'l1'
      frag += `<div class="gh-cell ${cls}"></div>`
    }
    graph.innerHTML = frag
  }, [])

  return (
    <section className="section" id="github">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="section-eyebrow">
              <span className="dot"></span>
              <span className="num">08</span>
              <span>open-source</span>
            </div>
            <h2 className="section-title">
              I build &amp; experiment <em>in public.</em>
            </h2>
          </div>
          <p className="section-sub">
            Especially around AI-assisted software engineering, CLI
            tools, and developer workflows.
          </p>
        </div>

        <div className="gh-card reveal">
          <div className="gh-bar">
            <span><span className="at">@</span>raj-khan</span>
            <span className="where">github.com/raj-khan</span>
            <span className="followers">
              <span><b>Repos</b> · public</span>
              <span><b>Focus</b> · agentic + full-stack</span>
            </span>
          </div>
          <div className="gh-body">
            <div className="gh-graph" data-gh-graph aria-hidden="true" ref={graphRef}></div>
            <div className="gh-graph-meta">
              <span>contribution graph · last year</span>
              <span className="scale">
                less
                <span className="gh-cell"></span>
                <span className="gh-cell l1"></span>
                <span className="gh-cell l2"></span>
                <span className="gh-cell l3"></span>
                <span className="gh-cell l4"></span>
                more
              </span>
            </div>

            <div className="gh-repos">
              <a className="gh-repo" href="https://github.com/raj-khan" target="_blank" rel="noopener">
                <div className="gh-repo-name">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                  aiagentflow
                  <span className="pub">Public</span>
                </div>
                <p className="gh-repo-desc">Local-first CLI workflow for orchestrating coding agents on real repos.</p>
                <div className="gh-repo-meta">
                  <span><span className="lang-dot" style={{ background: '#3178c6' }}></span>TypeScript</span>
                  <span><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg> agentic</span>
                  <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/></svg> CLI</span>
                </div>
              </a>
              <a className="gh-repo" href="https://github.com/raj-khan" target="_blank" rel="noopener">
                <div className="gh-repo-name">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                  e2spec
                  <span className="pub">Public</span>
                </div>
                <p className="gh-repo-desc">Idea → spec pipeline that produces developer-ready tickets and PRDs.</p>
                <div className="gh-repo-meta">
                  <span><span className="lang-dot" style={{ background: '#3178c6' }}></span>TypeScript</span>
                  <span>founder-tool</span>
                  <span>LLM</span>
                </div>
              </a>
              <a className="gh-repo" href="https://github.com/raj-khan" target="_blank" rel="noopener">
                <div className="gh-repo-name">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                  SEORanksLab
                  <span className="pub">Public</span>
                </div>
                <p className="gh-repo-desc">GSC-based platform turning search data into SEO action workflows.</p>
                <div className="gh-repo-meta">
                  <span><span className="lang-dot" style={{ background: '#3178c6' }}></span>TypeScript</span>
                  <span>Next.js</span>
                  <span>NestJS</span>
                </div>
              </a>
              <a className="gh-repo" href="https://github.com/raj-khan" target="_blank" rel="noopener">
                <div className="gh-repo-name">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                  quick-memorial
                  <span className="pub">Public</span>
                </div>
                <p className="gh-repo-desc">Tiny SaaS for QR-shareable memorial pages — small surface, high care.</p>
                <div className="gh-repo-meta">
                  <span><span className="lang-dot" style={{ background: '#3178c6' }}></span>TypeScript</span>
                  <span>Next.js</span>
                  <span>S3</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
