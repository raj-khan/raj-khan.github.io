'use client'

import { useEffect, useState } from 'react'

export function Footer() {
  const [year, setYear] = useState<number>(2026)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="foot">
      <div className="container foot-inner">
        <div>© <span data-year>{year}</span> Md. Meher Ullah Khan Raj · Built with care &amp; AI as leverage.</div>
        <div className="live">
          <span className="dot" aria-hidden="true"></span>
          <span>system status · operational</span>
        </div>
      </div>
    </footer>
  )
}
