import { Icon } from '@/components/Icons'

const CHANNELS = [
  { ico: <Icon.mail />, label: 'email', val: 'meherullah97@gmail.com', href: 'mailto:meherullah97@gmail.com' },
  { ico: <Icon.linkedin />, label: 'linkedin', val: '/in/raajkhan', href: 'https://www.linkedin.com/in/raajkhan/' },
  { ico: <Icon.github />, label: 'github', val: '@raj-khan', href: 'https://github.com/raj-khan' },
  { ico: <Icon.download />, label: 'cv', val: 'Download (PDF)', href: '/Meher Ullah - Full-Stack Software Engineer.pdf' },
]

export function Contact() {
  return (
    <section className="contact container reveal" id="contact">
      <div className="contact-card">
        <div className="contact-prompt">
          <span>$ founder contact --to meher</span>
          <span
            className="term-cursor"
            style={{ display: 'inline-block', width: 7, height: 13, background: 'var(--accent)', verticalAlign: -1 }}
          ></span>
        </div>
        <h2>
          Got an idea you want to turn into <em>real software?</em>
        </h2>
        <p className="contact-sub">
          If you&apos;re a founder, startup, or team with a product idea, an AI workflow problem,
          or a build that&apos;s stalled — let&apos;s talk. I reply within a day, in your timezone.
        </p>
        <div className="contact-actions">
          <a className="btn btn-primary" href="mailto:meherullah97@gmail.com">
            <Icon.send /> Send an email <Icon.arrowRight />
          </a>
          <a className="btn btn-ghost" href="https://www.linkedin.com/in/raajkhan/" target="_blank" rel="noopener">
            Connect on LinkedIn
          </a>
        </div>
        <div className="contact-channels">
          {CHANNELS.map((c, i) => (
            <a
              className="channel"
              key={i}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener"
            >
              <span className="channel-ico">{c.ico}</span>
              <div>
                <div className="channel-label">{c.label}</div>
                <div className="channel-val">{c.val}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
