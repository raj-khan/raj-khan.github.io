import { Icon } from '@/components/Icons'

const EXP = [
  {
    when: '2022 – Present',
    role: 'Software Engineer',
    company: 'Snappymob',
    loc: 'Kuala Lumpur, Malaysia',
  },
  {
    when: '2022',
    role: 'PHP Developer',
    company: 'Wipro Bangladesh Limited',
    loc: 'Dhaka, Bangladesh',
  },
  {
    when: '2019 – 2022',
    role: 'Software Developer',
    company: 'SCT-Bangla Limited',
    loc: 'Dhaka, Bangladesh',
  },
  {
    when: '2017 – 2019',
    role: 'Full-Stack Web Developer',
    company: 'Bangladesh Software Development (BSD)',
    loc: 'Dhaka, Bangladesh',
  },
]

export function Experience() {
  return (
    <section className="section container">
      <div className="section-head">
        <h2 className="section-title">My Experience</h2>
        <a
          className="section-link"
          href="https://www.linkedin.com/in/raajkhan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn <Icon.external />
        </a>
      </div>

      <div className="exp-list">
        {EXP.map((e, i) => (
          <div className="exp-row" key={i}>
            <div className="exp-when">{e.when}</div>
            <div>
              <div className="exp-role">{e.role}</div>
              <div className="exp-company">
                <Icon.briefcase /> {e.company}
                <span className="sep">·</span>
                <Icon.pin /> {e.loc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
