import './ExtraCurricular.css'

const ROLES = [
  {
    role: 'President (Registrations Head, 2025\u20132026)',
    org: 'Cloud Security Alliance (CSA), UPES',
    period: '2026 \u2014 Present',
    bullets: [
      'Lead the UPES CSA chapter, directing cross-functional technical, event management, and communications teams on community-wide cloud security initiatives',
      'Managed end-to-end registration workflows for a 400+ participant event as Registrations Head, coordinating onboarding across teams to reduce process bottlenecks',
      'Drove outreach initiatives that grew measurable community engagement around cloud security awareness',
    ],
  },
]

function ExtraCurricular() {
  return (
    <section id="extracurricular">
      <div className="container">
        <p className="section-label">extra-curricular</p>
        <h2>Outside the coursework.</h2>

        <div className="ec-list">
          {ROLES.map((r) => (
            <article className="ec-item" key={r.org}>
              <div className="ec-item__time mono">{r.period}</div>
              <div className="ec-item__body">
                <h3 className="ec-item__role">{r.role}</h3>
                <p className="ec-item__org">{r.org}</p>
                <ul className="ec-item__bullets">
                  {r.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExtraCurricular
