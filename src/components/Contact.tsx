export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container reveal">
        <div className="contact-card">
          <div className="contact-prompt">
            <span className="prompt" style={{ color: 'var(--accent)' }}>$</span>
            <span>founder build --with meher</span>
          </div>
          <h2>
            Have an idea you want to turn <em>into software?</em>
          </h2>
          <p className="contact-sub">
            If you&apos;re a founder, startup, or engineering team with a
            product idea, technical challenge, or AI workflow problem —
            I can help you clarify it, build it, and ship it.
          </p>
          <div className="contact-actions">
            <a className="btn btn-primary" href="mailto:meherullah97@gmail.com">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
              Email me
            </a>
            <a className="btn btn-ghost" href="https://www.linkedin.com/in/raajkhan/" target="_blank" rel="noopener">
              Connect on LinkedIn
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
            </a>
            <a className="btn btn-ghost" href="https://github.com/raj-khan" target="_blank" rel="noopener">
              View GitHub
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
            </a>
          </div>

          <div className="contact-channels">
            <a className="channel" href="mailto:meherullah97@gmail.com">
              <div className="channel-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg></div>
              <div>
                <div className="channel-label">Email</div>
                <div className="channel-val">meherullah97@gmail.com</div>
              </div>
            </a>
            <a className="channel" href="https://www.linkedin.com/in/raajkhan/" target="_blank" rel="noopener">
              <div className="channel-ico"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 4h4v16H4zM6 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm5 6h4v2.2c.6-1 2-2.4 4.2-2.4 4.5 0 5.3 3 5.3 6.8V20h-4v-6.2c0-1.5 0-3.4-2.1-3.4S16 12 16 13.8V20h-4Z"/></svg></div>
              <div>
                <div className="channel-label">LinkedIn</div>
                <div className="channel-val">linkedin.com/raajkhan</div>
              </div>
            </a>
            <a className="channel" href="https://github.com/raj-khan" target="_blank" rel="noopener">
              <div className="channel-ico"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.1c-3.2.7-3.87-1.36-3.87-1.36-.52-1.31-1.28-1.66-1.28-1.66-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.4-5.26 5.69.41.36.78 1.06.78 2.13v3.16c0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z"/></svg></div>
              <div>
                <div className="channel-label">GitHub</div>
                <div className="channel-val">github.com/raj-khan</div>
              </div>
            </a>
            <a className="channel" href="/Meher Ullah - Full-Stack Software Engineer.pdf" target="_blank" rel="noopener">
              <div className="channel-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>
              <div>
                <div className="channel-label">CV</div>
                <div className="channel-val">Download (PDF)</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
