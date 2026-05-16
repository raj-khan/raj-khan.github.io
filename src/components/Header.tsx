'use client'

import { useEffect, useState } from 'react'
import { Icon } from '@/components/Icons'

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
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const openPalette = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    window.dispatchEvent(new CustomEvent('open-command-palette'))
  }

  return (
    <header className={'nav ' + (scrolled ? 'scrolled' : '')}>
      <div className="container nav-inner">
        <a href="#top" className="nav-brand">
          <span className="prompt">~/</span>
          <span>meherullah</span>
          <span className="cursor"></span>
        </a>
        <nav className="nav-links">
          <a href="#work">work</a>
          <a href="#process">process</a>
          <a href="#projects">projects</a>
          <a href="#skills">skills</a>
          <a href="#github">github</a>
          <a href="#contact">contact</a>
        </nav>
        <button
          type="button"
          className="nav-search"
          onClick={openPalette}
          aria-label="Open command palette"
        >
          <Icon.search />
          <span className="label">Search or jump to…</span>
          <span className="kbd">⌘ K</span>
        </button>
      </div>
    </header>
  )
}
