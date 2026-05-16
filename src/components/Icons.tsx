// Icon library — small SVG components used across the portfolio.
// Direct port from /design3/meherullah-dev/project/src/icons.jsx.

import * as React from 'react'

type P = React.SVGProps<SVGSVGElement>

const Search = (p: P) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...p}><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>)
const ArrowRight = (p: P) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" {...p}><path d="M5 12h14M13 5l7 7-7 7"/></svg>)
const ArrowUpRight = (p: P) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" {...p}><path d="M7 17 17 7M8 7h9v9"/></svg>)
const Download = (p: P) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"/></svg>)
const GitHub = (p: P) => (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.55v-2.1c-3.2.69-3.87-1.36-3.87-1.36-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.37.96.1-.75.4-1.26.74-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.19 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.21-1.49 3.19-1.18 3.19-1.18.62 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.35.77 1.04.77 2.1v3.11c0 .3.21.66.79.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/></svg>)
const Mail = (p: P) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>)
const LinkedIn = (p: P) => (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.34 18H5.67V9.67h2.67V18zM7 8.5a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1zM18.34 18h-2.67v-4.06c0-.97-.02-2.22-1.36-2.22s-1.56 1.06-1.56 2.15V18h-2.67V9.67h2.56v1.14h.04c.36-.67 1.22-1.37 2.52-1.37 2.69 0 3.19 1.77 3.19 4.07V18z"/></svg>)
const External = (p: P) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" {...p}><path d="M7 17 17 7M8 7h9v9"/></svg>)
const Folder = (p: P) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...p}><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/></svg>)
const Star = (p: P) => (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8 5.8 21l1.2-6.9-5-4.9 6.9-1L12 2z"/></svg>)
const Fork = (p: P) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" {...p}><circle cx="6" cy="5" r="2"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M6 7v10M18 7v3a4 4 0 0 1-4 4h-4"/></svg>)
const Code = (p: P) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}><path d="m8 6-6 6 6 6M16 6l6 6-6 6M14 4l-4 16"/></svg>)
const Cpu = (p: P) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...p}><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>)
const Cloud = (p: P) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...p}><path d="M17.5 19a4.5 4.5 0 1 0-.6-9 6 6 0 0 0-11.4 2 4 4 0 0 0 .5 8h11.5z"/></svg>)
const Layers = (p: P) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" {...p}><path d="M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>)
const Sparkle = (p: P) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" {...p}><path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1M5.6 18.4l2.1-2.1m8.6-8.6 2.1-2.1"/></svg>)
const Shield = (p: P) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" {...p}><path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3z"/><path d="m9 12 2 2 4-4"/></svg>)
const Zap = (p: P) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" {...p}><path d="M13 2 3 14h8l-1 8 10-12h-8l1-8z"/></svg>)
const Target = (p: P) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...p}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1" fill="currentColor"/></svg>)
const Git = (p: P) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" {...p}><circle cx="6" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><circle cx="6" cy="18" r="2"/><path d="M6 8v8M8 18h8M18 6v10"/></svg>)
const Terminal = (p: P) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>)
const Agent = (p: P) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...p}><rect x="5" y="7" width="14" height="12" rx="2"/><path d="M12 7V3M8 3h8M9 12h.01M15 12h.01M9 16h6"/></svg>)
const Builder = (p: P) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M14.7 6.3a4 4 0 0 1 5 5L14 17l-3 1 1-3 5.6-5.6a1 1 0 0 0-1.4-1.4L10.6 13.6"/><path d="M4 21h6M4 17l4-4"/></svg>)
const Reviewer = (p: P) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...p}><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5M8 11h6M11 8v6"/></svg>)
const Tester = (p: P) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" {...p}><path d="M9 3v6l-5 9a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-5-9V3M9 3h6M9 13h6"/></svg>)
const Human = (p: P) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...p}><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>)
const Rocket = (p: P) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" {...p}><path d="M14 5c2 5 0 11-4 14l-3-3c3-4 9-6 14-4-2 2-4 4-7 5l-3-3z"/><path d="M9 12 5 8c-1 2 0 5 3 7zM12 15c2 3 5 4 7 3l-4-4"/></svg>)
const Flow = (p: P) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" {...p}><circle cx="4" cy="12" r="2"/><circle cx="20" cy="6" r="2"/><circle cx="20" cy="18" r="2"/><path d="M6 12h12M6 12c4 0 8-6 12-6M6 12c4 0 8 6 12 6"/></svg>)
const Send = (p: P) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}><path d="m22 2-7 20-4-9-9-4 20-7zM22 2 11 13"/></svg>)
const FileX = (p: P) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...p}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>)
const Book = (p: P) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...p}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14zM20 17v4H6.5"/></svg>)

export const Icon = {
  search: Search,
  arrowRight: ArrowRight,
  arrowUpRight: ArrowUpRight,
  download: Download,
  github: GitHub,
  mail: Mail,
  linkedin: LinkedIn,
  external: External,
  folder: Folder,
  star: Star,
  fork: Fork,
  code: Code,
  cpu: Cpu,
  cloud: Cloud,
  layers: Layers,
  sparkle: Sparkle,
  shield: Shield,
  zap: Zap,
  target: Target,
  git: Git,
  terminal: Terminal,
  agent: Agent,
  builder: Builder,
  reviewer: Reviewer,
  tester: Tester,
  human: Human,
  rocket: Rocket,
  flow: Flow,
  send: Send,
  filex: FileX,
  book: Book,
}
