'use client'

import { useEffect, useState } from 'react'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const isMeta = e.metaKey || e.ctrlKey
      if (isMeta && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault()
        window.dispatchEvent(new CustomEvent('open-command-palette'))
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const openPalette = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    window.dispatchEvent(new CustomEvent('open-command-palette'))
  }

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`} role="banner">
      <div className="container-x nav-inner">
        <a className="nav-brand" href="#top" aria-label="Home">
          <span className="prompt">~/</span>
          <span>meher</span>
          <span className="cursor" aria-hidden="true"></span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#process">process</a>
          <a href="#projects">projects</a>
          <a href="#experience">experience</a>
          <a href="#skills">skills</a>
          <a href="#github">open-source</a>
          <a href="#contact">contact</a>
        </nav>
        <button
          type="button"
          className="nav-search"
          aria-label="Open command palette"
          onClick={openPalette}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="14"
            height="14"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <span className="label">Search portfolio…</span>
          <span className="kbd">⌘K</span>
        </button>
      </div>
    </header>
  )
}
