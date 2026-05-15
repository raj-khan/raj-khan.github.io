export function FounderProblems() {
  return (
    <section className="section" id="founder-problems">
      <div className="container-x">
        <div className="section-head reveal">
          <div>
            <div className="section-eyebrow">
              <span className="dot" aria-hidden="true"></span>
              <span className="num">01</span>
              <span>where I help most</span>
            </div>
            <h2 className="section-title">
              Problems founders bring me <em>&mdash; and how I solve them.</em>
            </h2>
          </div>
          <p className="section-sub">
            You don&apos;t need another contractor who only writes code. You
            need a technical partner who can think with you about
            product, architecture, and delivery.
          </p>
        </div>

        <div className="problems-grid reveal">
          <article className="problem">
            <div className="problem-issue">
              <span className="badge">ISSUE #01</span>
              <span>no technical roadmap</span>
            </div>
            <h3 className="problem-q">You have a clear idea, but no path to a working product.</h3>
            <p className="problem-a">
              I translate fuzzy product ideas into developer-ready
              requirements, an architecture sketch, and an honest delivery
              plan you can ship from.
            </p>
            <div className="problem-tags">
              <span className="problem-tag">discovery</span>
              <span className="problem-tag">spec</span>
              <span className="problem-tag">roadmap</span>
            </div>
          </article>

          <article className="problem">
            <div className="problem-issue">
              <span className="badge">ISSUE #02</span>
              <span>messy MVP</span>
            </div>
            <h3 className="problem-q">Your MVP works, but it&apos;s slow, fragile, or hard to extend.</h3>
            <p className="problem-a">
              I stabilize and refactor full-stack apps &mdash; database, APIs,
              frontend &mdash; so you can grow on top of them instead of around
              them.
            </p>
            <div className="problem-tags">
              <span className="problem-tag">refactor</span>
              <span className="problem-tag">performance</span>
              <span className="problem-tag">postgres</span>
            </div>
          </article>

          <article className="problem">
            <div className="problem-issue">
              <span className="badge">ISSUE #03</span>
              <span>fractured ownership</span>
            </div>
            <h3 className="problem-q">You need one person who can own the whole build.</h3>
            <p className="problem-a">
              Frontend, backend, cloud, CI/CD, product decisions &mdash; I run
              the whole stack so you don&apos;t have to coordinate five
              vendors to ship one feature.
            </p>
            <div className="problem-tags">
              <span className="problem-tag">full-stack</span>
              <span className="problem-tag">aws</span>
              <span className="problem-tag">ci/cd</span>
            </div>
          </article>

          <article className="problem">
            <div className="problem-issue">
              <span className="badge">ISSUE #04</span>
              <span>AI without chaos</span>
            </div>
            <h3 className="problem-q">You want to use AI without shipping broken code.</h3>
            <p className="problem-a">
              I use agents and CLI workflows for speed, but with review,
              testing, and engineering judgment in the loop. AI is
              leverage &mdash; not a substitute for ownership.
            </p>
            <div className="problem-tags">
              <span className="problem-tag">agents</span>
              <span className="problem-tag">review</span>
              <span className="problem-tag">testing</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
