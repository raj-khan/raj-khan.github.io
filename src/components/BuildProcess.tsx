export function BuildProcess() {
  return (
    <section className="section" id="process">
      <div className="container-x">
        <div className="section-head reveal">
          <div>
            <div className="section-eyebrow">
              <span className="dot"></span>
              <span className="num">02</span>
              <span>build pipeline</span>
            </div>
            <h2 className="section-title">
              From idea to shipped product, <em>step by step.</em>
            </h2>
          </div>
          <p className="section-sub">
            A repeatable pipeline for founders who want clarity at every
            stage &mdash; not just a black-box &ldquo;we&rsquo;ll get it done&rdquo;.
          </p>
        </div>

        <div className="pipeline reveal">
          <div className="pipeline-bar">
            <span className="dot ok"></span>
            <span><strong>pipeline</strong> &middot; idea &rarr; production</span>
            <span className="path">build/founder-engagement.yml</span>
            <span className="ts">runtime &middot; weeks, not months</span>
          </div>

          <div className="pipeline-steps">
            <div className="pipe-step">
              <div className="idx"><span className="ind"></span>01 &middot; idea</div>
              <h4>clarify</h4>
              <p>Sharpen the goal, users, and constraints.</p>
              <span className="arrow"></span>
            </div>
            <div className="pipe-step">
              <div className="idx"><span className="ind"></span>02 &middot; spec</div>
              <h4>scope</h4>
              <p>Developer-ready tasks &amp; milestones.</p>
              <span className="arrow"></span>
            </div>
            <div className="pipe-step">
              <div className="idx"><span className="ind"></span>03 &middot; arch</div>
              <h4>design</h4>
              <p>System, data, API boundaries.</p>
              <span className="arrow"></span>
            </div>
            <div className="pipe-step">
              <div className="idx"><span className="ind"></span>04 &middot; ui</div>
              <h4>build</h4>
              <p>Next.js / React product interfaces.</p>
              <span className="arrow"></span>
            </div>
            <div className="pipe-step">
              <div className="idx"><span className="ind"></span>05 &middot; api</div>
              <h4>wire</h4>
              <p>NestJS / Node services &amp; Postgres.</p>
              <span className="arrow"></span>
            </div>
            <div className="pipe-step">
              <div className="idx"><span className="ind"></span>06 &middot; test</div>
              <h4>verify</h4>
              <p>Unit + integration, real DBs.</p>
              <span className="arrow"></span>
            </div>
            <div className="pipe-step">
              <div className="idx"><span className="ind"></span>07 &middot; ship</div>
              <h4>deploy</h4>
              <p>AWS, Docker, CI/CD.</p>
              <span className="arrow"></span>
            </div>
            <div className="pipe-step">
              <div className="idx"><span className="ind"></span>08 &middot; loop</div>
              <h4>monitor</h4>
              <p>Logs, metrics, real user feedback.</p>
            </div>
          </div>

          <div className="pipeline-log">
            <div className="row"><span className="ts">00:00.12</span><span className="tag info">info</span><span className="msg">discovery call &middot; founder goal captured</span></div>
            <div className="row"><span className="ts">00:01.43</span><span className="tag info">spec</span><span className="msg">requirements &rarr; tasks &middot; estimate locked</span></div>
            <div className="row"><span className="ts">00:02.07</span><span className="tag ok">ok</span><span className="msg">architecture &middot; postgres schema + REST boundary signed off</span></div>
            <div className="row"><span className="ts">00:04.51</span><span className="tag info">build</span><span className="msg">next.js shell + auth + dashboards landed</span></div>
            <div className="row"><span className="ts">00:05.18</span><span className="tag warn">review</span><span className="msg">human-in-the-loop pass &middot; 3 AI suggestions rejected</span></div>
            <div className="row"><span className="ts">00:06.02</span><span className="tag ok">deploy</span><span className="msg">aws &middot; zero-downtime cut &middot; monitoring green</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
