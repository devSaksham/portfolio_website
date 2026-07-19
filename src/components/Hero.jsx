import profile from '../assets/profile.jpg'
import './Hero.css'

const METRICS = [
  { label: 'leetcode_solved', value: '400+' },
  { label: 'vishing_detection_acc', value: '89.68%' },
  { label: 'recsys_hr@10', value: '58.08%' },
  { label: 'cgpa', value: '8.69/10' },
]

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="section-label">computer science &mdash; ai/ml</p>
          <h1 className="hero__title">
            Saksham Agrawal.
            <br />
            <span className="hero__title-sub">
              I build systems that <em>score</em>, <em>rank</em>, and{' '}
              <em>catch what shouldn't get through</em>.
            </span>
          </h1>
          <p className="hero__desc">
            B.Tech CSE (AI/ML) undergrad at UPES Dehradun. I spend most of my time
            training models and shipping the backend around them &mdash; a
            vishing-detection classifier, a session-based recommender, and now a
            full-stack AI copilot for job search. The rest goes to competitive
            programming and, for eight weeks last year, fieldwork on child
            protection cases.
          </p>
          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              See the work
            </a>
            <a href="mailto:agrawalsaksham14.6@gmail.com" className="btn btn--ghost">
              Get in touch
            </a>
          </div>
        </div>

        <div className="hero__side">
          <div className="hero__portrait">
            <img src={profile} alt="Saksham Agrawal" />
          </div>
          <div className="hero__ledger mono">
            <div className="hero__ledger-head">
              <span className="hero__ledger-dot" />
              status.log
            </div>
            {METRICS.map((m) => (
              <div className="hero__ledger-row" key={m.label}>
                <span className="hero__ledger-key">{m.label}</span>
                <span className="hero__ledger-val">{m.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
