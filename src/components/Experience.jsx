import './Experience.css'

const JOBS = [
  {
    period: 'Jun \u2014 Jul 2024',
    duration: '8 weeks',
    role: 'Social Intern',
    org: 'Gram Rajya Vikas Evam Prashikshan Sansthan',
    bullets: [
      'Assisted legal authorities in more than 5 rescue and rehabilitation operations related to child labor cases',
      'Supported more than 20 interventions under child protection and POCSO regulations',
    ],
    tags: ['Field Coordination', 'Documentation', 'Community Engagement', 'Teamwork'],
  },
]

function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <p className="section-label">experience</p>
        <h2>Time on the ground.</h2>

        <div className="exp-list">
          {JOBS.map((job) => (
            <article className="exp-item" key={job.org}>
              <div className="exp-item__time mono">
                <span>{job.period}</span>
                <span className="exp-item__duration">{job.duration}</span>
              </div>
              <div className="exp-item__body">
                <h3 className="exp-item__role">{job.role}</h3>
                <p className="exp-item__org">{job.org}</p>
                <ul className="exp-item__bullets">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className="exp-item__tags">
                  {job.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
