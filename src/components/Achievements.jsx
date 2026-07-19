import './Achievements.css'

const ACHIEVEMENTS = [
  {
    type: 'award',
    text: '5th Place \u2014 CSA Hackathon 3.0, UPES',
    detail: 'Recognized for innovation in AI-driven cybersecurity solutions (PhoniX project)',
  },
]

const PROFILES = [
  {
    name: 'LeetCode',
    stat: '400+ problems solved',
    link: 'https://leetcode.com/u/Sakshamm_codes/',
    handle: 'Sakshamm_codes',
  },
  {
    name: 'Codeforces',
    stat: 'Competitive programming',
    link: 'https://codeforces.com/profile/agrawalsaksham14.6',
    handle: 'agrawalsaksham14.6',
  },
  {
    name: 'GitHub',
    stat: 'Projects & source',
    link: 'https://github.com/devSaksham',
    handle: 'devSaksham',
  },
]

function Achievements() {
  return (
    <section id="achievements">
      <div className="container">
        <p className="section-label">achievements</p>
        <h2>Record.</h2>

        <div className="ach-list">
          {ACHIEVEMENTS.map((a) => (
            <div className="ach-item" key={a.text}>
              <span className="ach-item__tag mono">award</span>
              <div>
                <p className="ach-item__text">{a.text}</p>
                <p className="ach-item__detail">{a.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="profile-grid">
          {PROFILES.map((p) => (
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="profile-card"
              key={p.name}
            >
              <div className="profile-card__top">
                <span className="profile-card__name">{p.name}</span>
                <span className="profile-card__arrow">&nearr;</span>
              </div>
              <p className="profile-card__stat mono">{p.stat}</p>
              <p className="profile-card__handle mono">@{p.handle}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
