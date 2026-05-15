'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

type PaletteItem = {
  href: string
  label: string
  shortcut: string
  external?: boolean
  icon: React.ReactNode
}

type PaletteSection = {
  label: string
  items: PaletteItem[]
}

const SECTIONS: PaletteSection[] = [
  {
    label: 'Navigate',
    items: [
      {
        href: '#founder-problems',
        label: 'Where I help founders',
        shortcut: '↵',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M9 12h6" />
          </svg>
        ),
      },
      {
        href: '#process',
        label: 'Build process',
        shortcut: '↵',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18" />
          </svg>
        ),
      },
      {
        href: '#agentic',
        label: 'Agentic engineering',
        shortcut: '↵',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m12 2 9 5-9 5-9-5 9-5Z" />
            <path d="m21 12-9 5-9-5" />
          </svg>
        ),
      },
      {
        href: '#projects',
        label: 'Projects',
        shortcut: '↵',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
          </svg>
        ),
      },
      {
        href: '#experience',
        label: 'Experience (mission log)',
        shortcut: '↵',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <polyline points="12 7 12 12 15 14" />
          </svg>
        ),
      },
      {
        href: '#skills',
        label: 'Skills',
        shortcut: '↵',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m12 2 3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7Z" />
          </svg>
        ),
      },
      {
        href: '#github',
        label: 'Open-source',
        shortcut: '↵',
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.1c-3.2.7-3.87-1.36-3.87-1.36-.52-1.31-1.28-1.66-1.28-1.66-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.4-5.26 5.69.41.36.78 1.06.78 2.13v3.16c0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
          </svg>
        ),
      },
    ],
  },
  {
    label: 'Actions',
    items: [
      {
        href: 'mailto:meherullah97@gmail.com',
        label: 'Email Meher',
        shortcut: '⌘ E',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>
        ),
      },
      {
        href: '/Meher Ullah - Full-Stack Software Engineer.pdf',
        label: 'Download CV',
        shortcut: '⌘ D',
        external: true,
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        ),
      },
      {
        href: 'https://github.com/raj-khan',
        label: 'Open GitHub profile',
        shortcut: '⌘ G',
        external: true,
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.1c-3.2.7-3.87-1.36-3.87-1.36-.52-1.31-1.28-1.66-1.28-1.66-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.4-5.26 5.69.41.36.78 1.06.78 2.13v3.16c0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
          </svg>
        ),
      },
      {
        href: 'https://www.linkedin.com/in/raajkhan/',
        label: 'Open LinkedIn',
        shortcut: '⌘ L',
        external: true,
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 4h4v16H4zM6 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm5 6h4v2.2c.6-1 2-2.4 4.2-2.4 4.5 0 5.3 3 5.3 6.8V20h-4v-6.2c0-1.5 0-3.4-2.1-3.4S16 12 16 13.8V20h-4Z" />
          </svg>
        ),
      },
    ],
  },
]

const FLAT_ITEMS: PaletteItem[] = SECTIONS.flatMap((s) => s.items)

export function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const backdropRef = useRef<HTMLDivElement | null>(null)
  const listRef = useRef<HTMLDivElement | null>(null)

  const visibleIndices = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return FLAT_ITEMS.map((item, idx) => ({ item, idx }))
      .filter(({ item }) => !needle || item.label.toLowerCase().includes(needle))
      .map(({ idx }) => idx)
  }, [query])

  const activate = useCallback((item: PaletteItem) => {
    setOpen(false)
    if (item.href.startsWith('#')) {
      const target = document.querySelector(item.href)
      if (target) {
        ;(target as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else if (item.href.startsWith('mailto:')) {
      window.location.assign(item.href)
    } else {
      window.open(item.href, '_blank')
    }
  }, [])

  // Open events: window event + ⌘K / Ctrl+K
  useEffect(() => {
    const onOpen = () => {
      setQuery('')
      setActiveIndex(0)
      setOpen(true)
    }
    window.addEventListener('open-command-palette', onOpen as EventListener)
    return () => window.removeEventListener('open-command-palette', onOpen as EventListener)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const isMeta = e.metaKey || e.ctrlKey
      if (isMeta && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault()
        setOpen((prev) => {
          if (prev) return false
          setQuery('')
          setActiveIndex(0)
          return true
        })
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  // Focus input when opened
  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 0)
      return () => clearTimeout(t)
    }
  }, [open])

  // Keep active index within visible range
  useEffect(() => {
    if (!visibleIndices.includes(activeIndex)) {
      setActiveIndex(visibleIndices[0] ?? 0)
    }
  }, [visibleIndices, activeIndex])

  // Key handling while open: Escape, arrows, Enter
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        setOpen(false)
        return
      }
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault()
        if (!visibleIndices.length) return
        const cur = visibleIndices.indexOf(activeIndex)
        const safeCur = cur === -1 ? 0 : cur
        const nextPos =
          e.key === 'ArrowDown'
            ? (safeCur + 1) % visibleIndices.length
            : (safeCur - 1 + visibleIndices.length) % visibleIndices.length
        const nextIdx = visibleIndices[nextPos]
        setActiveIndex(nextIdx)
        const el = listRef.current?.querySelector<HTMLDivElement>(
          `[data-cp-index="${nextIdx}"]`,
        )
        el?.scrollIntoView({ block: 'nearest' })
        return
      }
      if (e.key === 'Enter') {
        e.preventDefault()
        const item = FLAT_ITEMS[activeIndex]
        if (item && visibleIndices.includes(activeIndex)) activate(item)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, activeIndex, visibleIndices, activate])

  const onBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === backdropRef.current) setOpen(false)
  }

  if (!open) return null

  let flatCursor = 0

  return (
    <div className="cp-backdrop" ref={backdropRef} onClick={onBackdropClick}>
      <div className="cp" role="dialog" aria-modal="true" aria-label="Command palette">
        <div className="cp-input-row">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <input
            ref={inputRef}
            className="cp-input"
            type="text"
            placeholder="Type to search · jump to section, project, or contact…"
            aria-label="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <span
            className="kbd"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              padding: '2px 6px',
              border: '1px solid var(--border)',
              borderRadius: '4px',
              color: 'var(--fg-dim)',
            }}
          >
            ESC
          </span>
        </div>
        <div className="cp-list" ref={listRef}>
          {SECTIONS.map((section) => {
            const sectionIndices: number[] = []
            const startCursor = flatCursor
            section.items.forEach(() => {
              sectionIndices.push(flatCursor)
              flatCursor += 1
            })
            const anyVisible = sectionIndices.some((i) => visibleIndices.includes(i))
            if (!anyVisible) return null
            return (
              <div key={section.label}>
                <div className="cp-section-label">{section.label}</div>
                {section.items.map((item, i) => {
                  const idx = startCursor + i
                  const hidden = !visibleIndices.includes(idx)
                  if (hidden) return null
                  const isActive = idx === activeIndex
                  return (
                    <div
                      key={item.href}
                      className={`cp-item${isActive ? ' is-active' : ''}`}
                      data-cp-index={idx}
                      onMouseEnter={() => setActiveIndex(idx)}
                      onClick={() => activate(item)}
                    >
                      <div className="cp-ico">{item.icon}</div>
                      <span>{item.label}</span>
                      <span className="cp-shortcut">{item.shortcut}</span>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
        <div className="cp-foot">
          <span>
            <kbd>↑</kbd>
            <kbd>↓</kbd> navigate
          </span>
          <span>
            <kbd>↵</kbd> select
          </span>
          <span>
            <kbd>esc</kbd> close
          </span>
        </div>
      </div>
    </div>
  )
}
