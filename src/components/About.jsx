import './About.css'

const FACTS = [
  { key: 'location', val: 'Dehradun, India' },
  { key: 'degree', val: 'B.Tech CSE (AI/ML), UPES' },
  { key: 'graduating', val: '2027' },
  { key: 'cgpa', val: '8.69 / 10.00' },
  { key: 'status', val: 'Open to internships' },
]

function About() {
  return (
    <section id="about">
      <div className="container about__grid">
        <div>
          <p className="section-label">about</p>
          <h2>
            Mostly models and backends.
            <br />
            Sometimes a lot more grounded than that.
          </h2>
          <p className="about__text">
            Most of what I build lives at the intersection of a trained model and
            the system around it &mdash; getting a classifier from a notebook
            into something that scores real audio in real time, or wiring an LLM
            into a pipeline that has to be right, not just fluent. Right now
            that's Jobgenie, an AI job-search copilot I'm building solo end to
            end: FastAPI backend, RAG grounding for match scoring, and a Next.js
            frontend on top.
          </p>
          <p className="about__text">
            I also lead the UPES Cloud Security Alliance chapter, and I spend a
            fair amount of time on competitive programming &mdash; 400+ problems
            in on LeetCode. One stretch outside of code: eight weeks assisting
            legal authorities on child protection and rescue operations, which
            is a different kind of systems thinking entirely.
          </p>
        </div>

        <div className="about__facts mono">
          {FACTS.map((f) => (
            <div className="about__fact" key={f.key}>
              <span className="about__fact-key">{f.key}</span>
              <span className="about__fact-val">{f.val}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
