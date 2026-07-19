import './Contact.css'

const CHANNELS = [
  { label: 'Email', value: 'agrawalsaksham14.6@gmail.com', href: 'mailto:agrawalsaksham14.6@gmail.com' },
  { label: 'Phone', value: '+91 63773 63427', href: 'tel:+916377363427' },
  { label: 'LinkedIn', value: 'linkedin.com/in/sakshamhere', href: 'https://www.linkedin.com/in/sakshamhere' },
  { label: 'GitHub', value: 'github.com/devSaksham', href: 'https://github.com/devSaksham' },
]

function Contact() {
  return (
    <section id="contact">
      <div className="container contact__grid">
        <div>
          <p className="section-label">contact</p>
          <h2>
            Let's talk AI,
            <br />
            or anything else.
          </h2>
          <p className="contact__text">
            Open to internships and roles in AI/ML and full-stack engineering.
            Reach out if you're building something in that space, or want to
            talk about RAG pipelines, vishing detection, or the CSA chapter's
            next event.
          </p>
        </div>

        <div className="contact__channels">
          {CHANNELS.map((c) => (
            <a
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="contact__channel"
              key={c.label}
            >
              <span className="contact__channel-label mono">{c.label}</span>
              <span className="contact__channel-value">{c.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
