'use client'

import { useEffect, useState } from 'react'
import { Profile, type Tab } from '@/components/Profile'
import { Projects } from '@/components/Projects'
import { Experience } from '@/components/Experience'
import { Articles } from '@/components/Articles'
import { Footer } from '@/components/Footer'

export function HomeContent() {
  const [tab, setTab] = useState<Tab>('work')
  const [hash, setHash] = useState('')

  // Hash-based routing: /#work and /#articles work from any page.
  // The header links to /#work and /#articles; on this page (or a fresh
  // load from /blog), the hash decides which tab is active.
  useEffect(() => {
    const applyHash = () => {
      const h = window.location.hash
      setHash(h)
      if (h === '#articles') setTab('articles')
      else if (h === '#work') setTab('work')
    }
    applyHash()
    window.addEventListener('hashchange', applyHash)
    return () => window.removeEventListener('hashchange', applyHash)
  }, [])

  // After the tab renders (and whenever the hash changes), scroll to the
  // requested section. The requestAnimationFrame lets the section mount first.
  useEffect(() => {
    if (!hash) return
    const el = document.querySelector(hash)
    if (!el) return
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [hash, tab])

  const handleTabChange = (t: Tab) => {
    setTab(t)
    // Clear the hash so switching tabs doesn't fight with the anchor target.
    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname)
    }
  }

  return (
    <>
      <Profile tab={tab} onTabChange={handleTabChange} articleCount={7} />
      {tab === 'work' ? (
        <main id="work-section">
          <Projects />
          <Experience />
        </main>
      ) : (
        <main>
          <Articles />
        </main>
      )}
      <Footer />
    </>
  )
}
