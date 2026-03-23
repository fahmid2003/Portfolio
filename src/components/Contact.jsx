import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="section contact-sec">
      <div className="blob contact-blob" />
      <div className="container">
        <div className="sec-header">
          <span className="sec-tag">✦ Get In Touch</span>
          <h2 className="sec-title">Let's <span>Connect</span></h2>
        </div>

        <div className="contact-grid">
          <div className="contact-left">
            <p className="contact-intro">I'm open to internship opportunities, collaborative projects, and conversations about software development. Feel free to reach out through any channel below!</p>

            <div className="contact-links">
              {[
                { ico: '✉️', label: 'Email', val: 'alshahriarfahmid4@gmail.com', href: 'mailto:alshahriarfahmid4@gmail.com', color: 'var(--violet)' },
                { ico: '🐙', label: 'GitHub', val: 'github.com/AlShahriarFahmid', href: 'https://github.com/fahmid2003', color: 'var(--cyan)' },
                { ico: '💼', label: 'LinkedIn', val: 'linkedin.com/in/al-shahriar-fahmid', href: 'https://linkedin.com', color: 'var(--pink)' },
              ].map(l => (
                <a key={l.label} href={l.href} className="c-link" target="_blank" rel="noopener">
                  <span className="c-link-ico" style={{ color: l.color }}>{l.ico}</span>
                  <div>
                    <div className="c-link-label">{l.label}</div>
                    <div className="c-link-val">{l.val}</div>
                  </div>
                  <span className="c-link-arrow">→</span>
                </a>
              ))}
            </div>

            <div className="availability-badge">
              <span className="avail-dot" />
              <span>Currently available for Summer 2026 internships</span>
            </div>
          </div>

          <div className="contact-right">
            <div className="card form-card">
              <h3 className="form-title">Send a Message</h3>
              {sent && <div className="success-msg">✦ Message sent! I'll get back to you soon.</div>}
              <form className="c-form" onSubmit={handleSubmit}>
                <div className="f-row">
                  <div className="f-group">
                    <label>Name</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
                  </div>
                  <div className="f-group">
                    <label>Email</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required />
                  </div>
                </div>
                <div className="f-group">
                  <label>Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="What's on your mind?" rows={5} required />
                </div>
                <button type="submit" className="btn-primary" style={{width:'100%',justifyContent:'center'}}>
                  Send Message ✦
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
