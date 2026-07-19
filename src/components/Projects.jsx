import './Projects.css'

const PROJECTS = [
  {
    name: 'Jobgenie',
    tagline: 'AI-powered job search & application assistant',
    link: 'https://jobgenie.tech',
    linkLabel: 'jobgenie.tech',
    stack: ['Python', 'FastAPI', 'Gemini API', 'RAG', 'JavaScript'],
    bullets: [
      'Built a full-stack AI copilot with a FastAPI backend and Gemini API for resume parsing, ATS score simulation, and job-description matching',
      'Designed a RAG pipeline that retrieves relevant resume snippets to ground LLM outputs and reduce hallucination in match scoring',
      'Built an LLM analytics dashboard to evaluate prompt performance and model output quality, plus multi-resume A/B testing and interview tracking modules',
    ],
  },
  {
    name: 'PhoniX',
    tagline: 'AI-powered vishing detection system',
    stack: ['Python', 'PyTorch', 'Audio Processing', 'Deep Learning'],
    bullets: [
      'Engineered a real-time dialer that detects voice phishing attacks by classifying live audio streams with a trained binary classification model',
      'Designed and trained a deep learning pipeline distinguishing authentic human speech from deepfake-generated audio, achieving 89.68% accuracy on real-world samples',
      'Applied audio signal processing for feature extraction (spectrograms), evaluated via precision, recall, and F1-score; secured 5th place at CSA Hackathon 3.0',
    ],
  },
  {
    name: 'Session-Based Recommendation System',
    tagline: 'GRU + KAN hybrid architecture',
    stack: ['Python', 'PyTorch', 'Deep Learning'],
    bullets: [
      'Developed a next-item recommendation engine on sequential clickstream data from the YooChoose e-commerce dataset (50K sessions, 128K+ training samples)',
      'Implemented and benchmarked three architectures from scratch: GRU Baseline, Pure Recurrent KAN, and Hybrid GRU+KAN using learnable B-Spline activations for improved interpretability',
      'Trained using AdamW with cosine LR scheduling; GRU baseline achieved 58.08% HR@10 and 39.42% NDCG@10',
    ],
  },
]

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <p className="section-label">projects</p>
        <h2>Things I've shipped and trained.</h2>

        <div className="proj-list">
          {PROJECTS.map((p, i) => (
            <article className="proj-card" key={p.name}>
              <div className="proj-card__num mono">{String(i + 1).padStart(2, '0')}</div>
              <div className="proj-card__body">
                <div className="proj-card__head">
                  <div>
                    <h3 className="proj-card__name">{p.name}</h3>
                    <p className="proj-card__tagline">{p.tagline}</p>
                  </div>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="proj-card__link mono"
                    >
                      {p.linkLabel} &nearr;
                    </a>
                  )}
                </div>
                <ul className="proj-card__bullets">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className="proj-card__stack">
                  {p.stack.map((s) => (
                    <span className="tag" key={s}>
                      {s}
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

export default Projects
