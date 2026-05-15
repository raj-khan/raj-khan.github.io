'use client'

import { useEffect, useRef } from 'react'

type TerminalLine = { delay: number; html: string }

const TERMINAL_LINES: TerminalLine[] = [
  { delay: 200, html: '<span class="line"><span class="prompt">$</span> <span class="cmd">npx meherullah --profile</span></span>' },
  { delay: 400, html: '<span class="line comment"># Resolving developer identity…</span>' },
  { delay: 350, html: '<span class="line"><span class="key">role</span><span class="arrow">:</span> <span class="val-accent">AI-Augmented Full-Stack Engineer</span></span>' },
  { delay: 250, html: '<span class="line"><span class="key">experience</span><span class="arrow">:</span> <span class="val">8+ years</span></span>' },
  { delay: 250, html: '<span class="line"><span class="key">focus</span><span class="arrow">:</span> <span class="val">TypeScript, Node.js, React, AWS, Agentic AI</span></span>' },
  { delay: 250, html: '<span class="line"><span class="key">location</span><span class="arrow">:</span> <span class="val">Kuala Lumpur, Malaysia</span></span>' },
  { delay: 250, html: '<span class="line"><span class="key">status</span><span class="arrow">:</span> <span class="val-green">building production systems + AI workflows</span></span>' },
  { delay: 400, html: '<span class="line"></span>' },
  { delay: 300, html: '<span class="line"><span class="prompt">$</span> <span class="cmd">founder build --with meher</span></span>' },
  { delay: 350, html: '<span class="line"><span class="key">idea</span><span class="arrow">→</span> <span class="val">rough product concept</span></span>' },
  { delay: 250, html: '<span class="line"><span class="key">spec</span><span class="arrow">→</span> <span class="val">developer-ready tasks</span></span>' },
  { delay: 250, html: '<span class="line"><span class="key">stack</span><span class="arrow">→</span> <span class="val">Next.js · NestJS · PostgreSQL · AWS</span></span>' },
  { delay: 250, html: '<span class="line"><span class="key">workflow</span><span class="arrow">→</span> <span class="val">architect → build → review → test → ship</span></span>' },
  { delay: 300, html: '<span class="line"><span class="ok">✓ production-ready</span></span>' },
]

export function Hero() {
  const termBodyRef = useRef<HTMLDivElement | null>(null)
  const rootRef = useRef<HTMLElement | null>(null)

  // Reveal observer
  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const els = root.querySelectorAll<HTMLDivElement>('.reveal')
    if (!('IntersectionObserver' in window) || !els.length) {
      els.forEach((el) => el.classList.add('in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  // Terminal animation
  useEffect(() => {
    const body = termBodyRef.current
    if (!body) return
    body.innerHTML = ''
    let cancelled = false
    let i = 0
    const timeouts: ReturnType<typeof setTimeout>[] = []
    const tick = () => {
      if (cancelled) return
      if (i >= TERMINAL_LINES.length) {
        body.insertAdjacentHTML(
          'beforeend',
          '<span class="line"><span class="prompt">$</span> <span class="term-cursor"></span></span>',
        )
        return
      }
      const ln = TERMINAL_LINES[i++]
      const t = setTimeout(() => {
        if (cancelled || !termBodyRef.current) return
        body.insertAdjacentHTML('beforeend', ln.html)
        body.scrollTop = body.scrollHeight
        tick()
      }, ln.delay)
      timeouts.push(t)
    }
    tick()
    return () => {
      cancelled = true
      timeouts.forEach(clearTimeout)
    }
  }, [])

  return (
    <section className="hero" ref={rootRef}>
      <div className="container-x hero-grid">
        <div className="reveal">
          <div className="hero-eyebrow">
            <span className="pulse" aria-hidden="true"></span>
            <span>Available for founder &amp; team engagements</span>
          </div>
          <h1>
            I help founders turn <span className="ul">ideas</span> into{' '}
            <span className="accent">production-ready</span> software.
          </h1>
          <p className="hero-sub">
            <strong>Meher Ullah Khan Raj</strong> — 8+ years building full-stack web systems.
            From rough idea to architecture, implementation, and launch — with AI-assisted
            workflows that actually ship.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#contact">
              Work with me
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a className="btn btn-ghost" href="#projects">
              View projects
            </a>
            <a
              className="btn btn-ghost"
              href="/Meher Ullah - Full-Stack Software Engineer.pdf"
              target="_blank"
              rel="noopener"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </a>
            <a
              className="btn btn-link"
              href="https://github.com/raj-khan"
              target="_blank"
              rel="noopener"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.1c-3.2.7-3.87-1.36-3.87-1.36-.52-1.31-1.28-1.66-1.28-1.66-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.4-5.26 5.69.41.36.78 1.06.78 2.13v3.16c0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
              </svg>
              GitHub
            </a>
          </div>
          <div className="hero-meta">
            <div className="hero-meta-item">
              <span className="ico" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              Kuala Lumpur, Malaysia
            </div>
            <div className="hero-meta-item">
              <span className="ico" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </span>
              8+ years shipping production systems
            </div>
            <div className="hero-meta-item">
              <span className="ico" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="14" rx="2" />
                  <path d="m7 9 3 3-3 3" />
                  <path d="M13 15h4" />
                </svg>
              </span>
              Full-stack · AWS · Agentic AI
            </div>
          </div>
        </div>

        <div className="reveal">
          <div className="term" role="img" aria-label="Terminal showing Meher's profile output">
            <div className="term-bar" aria-hidden="true">
              <span className="term-dot r"></span>
              <span className="term-dot y"></span>
              <span className="term-dot g"></span>
              <span className="term-title">~/meherullah — zsh</span>
            </div>
            <div className="term-tabs" aria-hidden="true">
              <div className="term-tab active">
                <svg
                  viewBox="0 0 24 24"
                  width="11"
                  height="11"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="4 17 10 11 4 5" />
                  <line x1="12" y1="19" x2="20" y2="19" />
                </svg>
                profile
                <span className="close">×</span>
              </div>
              <div className="term-tab">
                <svg
                  viewBox="0 0 24 24"
                  width="11"
                  height="11"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="4 17 10 11 4 5" />
                  <line x1="12" y1="19" x2="20" y2="19" />
                </svg>
                build
                <span className="close">×</span>
              </div>
            </div>
            <div className="term-body" ref={termBodyRef}></div>
          </div>
        </div>
      </div>
    </section>
  )
}
