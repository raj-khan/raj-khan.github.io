'use client'

import { useEffect, useState } from 'react'
import { Icon } from '@/components/Icons'

export function Footer() {
  const [year, setYear] = useState<number>(2026)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="foot">
      <div className="container foot-inner">
        <div className="foot-left">
          <span>
            © {year} Meher Ullah Khan Raj
          </span>
          <span>·</span>
          <span>
            <span className="foot-dot"></span>
            available for work
          </span>
        </div>
        <div className="foot-socials">
          <a href="https://github.com/raj-khan" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Icon.github />
          </a>
          <a href="https://www.linkedin.com/in/raajkhan/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Icon.linkedin />
          </a>
          <a href="https://medium.com/@rajkhaan" target="_blank" rel="noopener noreferrer" aria-label="Medium">
            <Icon.medium />
          </a>
          <a href="https://peerlist.io/raajkhan" target="_blank" rel="noopener noreferrer" aria-label="Peerlist">
            <Icon.peerlist />
          </a>
        </div>
      </div>
    </footer>
  )
}
