'use client'

import { Icon } from '@/components/Icons'

export type Tab = 'work' | 'articles'

const SKILLS = [
  'TypeScript',
  'JavaScript',
  'React',
  'Next.js',
  'Node.js',
  'NestJS',
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'AWS',
  'PHP',
  'Docker',
]

const STATS = [
  { icon: <Icon.repo />, value: '43', label: 'public repos' },
  { icon: <Icon.users />, value: '29', label: 'followers' },
  { icon: <Icon.briefcase />, value: '8+', label: 'years shipping' },
  { icon: <Icon.file />, value: '6', label: 'articles' },
]

const SOCIALS = [
  {
    label: 'GitHub',
    href: 'https://github.com/raj-khan',
    icon: <Icon.github />,
    primary: false,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/raajkhan/',
    icon: <Icon.linkedin />,
    primary: false,
  },
  {
    label: 'Medium',
    href: 'https://medium.com/@rajkhaan',
    icon: <Icon.medium />,
    primary: false,
  },
  {
    label: 'Peerlist',
    href: 'https://peerlist.io/raajkhan',
    icon: <Icon.peerlist />,
    primary: false,
  },
  {
    label: 'Email',
    href: 'mailto:meherullah97@gmail.com',
    icon: <Icon.mail />,
    primary: true,
  },
]

export function Profile({
  tab,
  onTabChange,
  articleCount,
}: {
  tab: Tab;
  onTabChange: (t: Tab) => void;
  articleCount: number;
}) {
  return (
    <section className="profile container" id="top">
      <div className="profile-top">
        <img
          src="/avatar.jpg"
          alt="Meher Ullah Khan Raj"
          className="avatar"
          width={88}
          height={88}
        />
        <div style={{ minWidth: 0 }}>
          <div className="profile-name-row">
            <h1 className="profile-name">Meher Ullah Khan Raj</h1>
            <span className="verified" title="Verified profile">
              <Icon.check /> verified
            </span>
          </div>
          <p className="profile-role">
            <strong>Software Engineer</strong> at Snappymob
          </p>
          <div className="profile-loc">
            <Icon.pin />
            <span>Kuala Lumpur, Malaysia</span>
          </div>
        </div>
      </div>

      <div className="skills">
        {SKILLS.map((s) => (
          <span className="skill-chip" key={s}>
            {s}
          </span>
        ))}
      </div>

      <div className="gh-stats">
        {STATS.map((s, i) => (
          <span className="gh-stat" key={i}>
            {s.icon}
            <b>{s.value}</b> {s.label}
          </span>
        ))}
      </div>

      <div className="socials">
        {SOCIALS.map((s) => (
          <a
            key={s.label}
            className={'social-pill' + (s.primary ? ' is-primary' : '')}
            href={s.href}
            target={s.href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
          >
            {s.icon}
            {s.label}
          </a>
        ))}
      </div>

      <div className="tabs" role="tablist" aria-label="Sections">
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'work'}
          className={'tab' + (tab === 'work' ? ' active' : '')}
          onClick={() => onTabChange('work')}
        >
          WORK
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'articles'}
          className={'tab' + (tab === 'articles' ? ' active' : '')}
          onClick={() => onTabChange('articles')}
        >
          ARTICLES <span className="count">{articleCount}</span>
        </button>
      </div>
    </section>
  )
}
