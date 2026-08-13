'use client'

import { useEffect, useState } from 'react'
import { Icon } from '@/components/Icons'

// NOTE: Work/Articles point to the homepage with a hash so the links
// work from ANY page (home, /blog, article pages). HomeContent listens
// for the hash and switches tabs + scrolls to the section.
const NAV = [
  { label: 'Work', href: '/#work' },
  { label: 'Articles', href: '/#articles' },
  { label: 'Blog', href: '/blog' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={'topbar ' + (scrolled ? 'scrolled' : '')}>
      <div className="container topbar-inner">
        <a href="/" className="topbar-brand">
          <img
            src="/avatar.jpg"
            alt="Meher Ullah Khan Raj"
            className="mini-avatar"
            width={26}
            height={26}
          />
          <span>Meher Ullah Khan Raj</span>
        </a>
        <nav className="topbar-nav">
          {NAV.map((n) => (
            <a key={n.label} href={n.href}>
              {n.label}
            </a>
          ))}
          <a
            href="https://github.com/raj-khan"
            target="_blank"
            rel="noopener noreferrer"
            className="gh-ico"
            aria-label="GitHub profile"
          >
            <Icon.github />
          </a>
        </nav>
      </div>
    </header>
  )
}
