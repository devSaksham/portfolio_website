import './Skills.css'

const GROUPS = [
  { label: 'Languages', items: ['Python', 'Java', 'SQL', 'C'] },
  { label: 'Backend & APIs', items: ['FastAPI', 'REST APIs'] },
  { label: 'LLM / GenAI', items: ['Gemini API', 'Structured Outputs', 'RAG'] },
  {
    label: 'AI / ML',
    items: ['PyTorch', 'scikit-learn', 'NumPy', 'pandas', 'CNN', 'GRU/LSTM', 'KAN'],
  },
  {
    label: 'Databases & Infra',
    items: ['MySQL', 'MongoDB', 'PostgreSQL', 'Vector/Embedding Search', 'ORM', 'Git'],
  },
]

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <p className="section-label">skills</p>
        <h2>The toolkit.</h2>

        <div className="skills-grid">
          {GROUPS.map((g) => (
            <div className="skills-group" key={g.label}>
              <h3 className="skills-group__label mono">{g.label}</h3>
              <div className="skills-group__items">
                {g.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
