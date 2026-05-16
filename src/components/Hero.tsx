'use client'

import { useEffect, useState } from 'react'
import { Icon } from '@/components/Icons'

type TermLine =
  | { kind: 'cmd'; text: string }
  | { kind: 'blank' }
  | { kind: 'kv'; k: string; v: string; color: string }
  | { kind: 'arrow'; text: string }
  | { kind: 'ok'; text: string }
  | { kind: 'comment'; text: string }

const TERM_SCRIPT: TermLine[] = [
  { kind: 'cmd', text: 'founder build --with meher' },
  { kind: 'blank' },
  { kind: 'kv', k: 'idea', v: 'rough product concept', color: '' },
  { kind: 'arrow', text: 'running discovery...' },
  { kind: 'kv', k: 'spec', v: 'developer-ready scope + tasks', color: 'accent' },
  { kind: 'kv', k: 'stack', v: 'Next.js · NestJS · PostgreSQL · AWS', color: '' },
  { kind: 'kv', k: 'workflow', v: 'architect → build → review → ship', color: '' },
  { kind: 'kv', k: 'leverage', v: 'AI agents + CLI automation', color: 'accent' },
  { kind: 'kv', k: 'judgment', v: 'senior engineer (human-owned)', color: 'amber' },
  { kind: 'blank' },
  { kind: 'ok', text: '✓ ready to ship — production hardened' },
  { kind: 'blank' },
  { kind: 'comment', text: '# 8+ years · KL, Malaysia · open for Q3 2026' },
]

function TerminalCard() {
  const [step, setStep] = useState(0)
  const [typed, setTyped] = useState('')
  const [cycle, setCycle] = useState(0)

  useEffect(() => {
    let cancelled = false
    const timeouts: ReturnType<typeof setTimeout>[] = []

    async function run() {
      const first = TERM_SCRIPT[0]
      if (first.kind !== 'cmd') return
      const cmd = first.text
      for (let i = 0; i <= cmd.length; i++) {
        if (cancelled) return
        setTyped(cmd.slice(0, i))
        await new Promise<void>((r) => {
          const t = setTimeout(r, 40)
          timeouts.push(t)
        })
      }
      await new Promise<void>((r) => {
        const t = setTimeout(r, 400)
        timeouts.push(t)
      })
      for (let s = 1; s < TERM_SCRIPT.length; s++) {
        if (cancelled) return
        setStep(s)
        const delay = TERM_SCRIPT[s].kind === 'blank' ? 60 : 180
        await new Promise<void>((r) => {
          const t = setTimeout(r, delay)
          timeouts.push(t)
        })
      }
      await new Promise<void>((r) => {
        const t = setTimeout(r, 4000)
        timeouts.push(t)
      })
      if (cancelled) return
      setStep(0)
      setTyped('')
      setCycle((c) => c + 1)
    }

    run()
    return () => {
      cancelled = true
      timeouts.forEach(clearTimeout)
    }
  }, [cycle])

  const firstLine = TERM_SCRIPT[0]
  const cmdComplete = firstLine.kind === 'cmd' && typed.length === firstLine.text.length

  return (
    <div className="term">
      <div className="term-bar">
        <span className="term-dot r"></span>
        <span className="term-dot y"></span>
        <span className="term-dot g"></span>
        <span className="term-title">~/founder-build — zsh — 80×24</span>
      </div>
      <div className="term-tabs">
        <div className="term-tab active">
          <Icon.terminal /> founder-build <span className="close">×</span>
        </div>
        <div className="term-tab">spec.md</div>
        <div className="term-tab">architecture.md</div>
      </div>
      <div className="term-body">
        <span className="line">
          <span className="prompt">$ </span>
          <span className="cmd">{typed}</span>
          {!cmdComplete && <span className="term-cursor"></span>}
        </span>
        {cmdComplete &&
          TERM_SCRIPT.slice(1).map((ln, i) => {
            if (step < i + 1) return null
            if (ln.kind === 'blank') return <span key={i} className="line">&nbsp;</span>
            if (ln.kind === 'kv') {
              const valCls =
                ln.color === 'accent' ? 'val-accent' : ln.color === 'amber' ? 'val-amber' : 'val'
              return (
                <span key={i} className="line">
                  <span className="key">{ln.k.padEnd(10, ' ')}: </span>
                  <span className={valCls}>{ln.v}</span>
                </span>
              )
            }
            if (ln.kind === 'arrow') {
              return (
                <span key={i} className="line">
                  <span className="arrow">→ </span>
                  <span className="comment">{ln.text}</span>
                </span>
              )
            }
            if (ln.kind === 'ok') {
              return (
                <span key={i} className="line">
                  <span className="ok">{ln.text}</span>
                </span>
              )
            }
            if (ln.kind === 'comment') {
              return (
                <span key={i} className="line">
                  <span className="comment">{ln.text}</span>
                </span>
              )
            }
            return null
          })}
        {cmdComplete && step >= TERM_SCRIPT.length - 1 && (
          <span className="line">
            <span className="prompt">$ </span>
            <span className="term-cursor"></span>
          </span>
        )}
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="hero container" id="top">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="hero-eyebrow">
            <span className="pulse"></span>
            <span>Senior engineer · Founder-friendly · KL, MY</span>
          </div>
          <h1>
            I help founders turn <span className="accent">rough ideas</span> into{' '}
            <span className="ul">production-ready software.</span>
          </h1>
          <p className="hero-sub">
            <strong>8+ years</strong> shipping scalable web apps, SaaS products, and AI workflows.
            I work end-to-end — from spec and architecture to backend, frontend, and deployment —
            so you can go from idea to launch with one technical partner.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#contact">
              Work with me <Icon.arrowRight />
            </a>
            <a className="btn btn-ghost" href="#projects">
              View projects
            </a>
            <a className="btn btn-link" href="https://github.com/raj-khan" target="_blank" rel="noopener">
              <Icon.github /> GitHub
            </a>
            <a className="btn btn-link" href="/Meher Ullah - Full-Stack Software Engineer.pdf" target="_blank" rel="noopener">
              <Icon.download /> CV
            </a>
          </div>
          <div className="hero-meta">
            <span className="hero-meta-item"><span className="ico">●</span> Kuala Lumpur, MY · GMT+8</span>
            <span className="hero-meta-item"><span className="ico">●</span> Snappymob, prev. enterprise SaaS</span>
            <span className="hero-meta-item"><span className="ico">●</span> 8+ years</span>
          </div>
        </div>
        <div className="hero-term">
          <TerminalCard />
        </div>
      </div>
    </section>
  )
}
