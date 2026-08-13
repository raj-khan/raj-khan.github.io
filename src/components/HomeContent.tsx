'use client'

import { useState } from 'react'
import { Profile, type Tab } from '@/components/Profile'
import { Projects } from '@/components/Projects'
import { Experience } from '@/components/Experience'
import { Articles } from '@/components/Articles'
import { Footer } from '@/components/Footer'

export function HomeContent() {
  const [tab, setTab] = useState<Tab>('work')

  return (
    <>
      <Profile tab={tab} onTabChange={setTab} articleCount={7} />
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
