import { useEffect, useRef } from 'react'
import './Skills.css'

const techSkills = [
  { name: 'HTML5 / CSS3', pct: 95, color: 'var(--grad-3)' },
  { name: 'JavaScript (ES6+)', pct: 88, color: 'var(--grad-3)' },
  { name: 'React.js / Next.js', pct: 82, color: 'var(--grad-1)' },
  { name: 'TypeScript', pct: 76, color: 'var(--grad-1)' },
  { name: 'PHP', pct: 78, color: 'var(--grad-2)' },
  { name: 'C# / .NET', pct: 74, color: 'var(--grad-2)' },
  { name: 'Node.js / REST APIs', pct: 80, color: 'var(--grad-4)' },
  { name: 'MySQL / MongoDB', pct: 83, color: 'var(--grad-4)' },
  { name: 'Git & GitHub', pct: 86, color: 'var(--grad-1)' },
]

const softSkills = ['Communication','Teamwork','Problem Solving','Adaptability','Time Management','Customer Service','Critical Thinking','Attention to Detail','Collaboration']

export default function Skills() {
  const sectionRef = useRef(null)
  const barsRef = useRef([])

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        barsRef.current.forEach((bar, i) => {
          if (bar) setTimeout(() => bar.classList.add('filled'), i * 80)
        })
        obs.disconnect()
      }
    }, { threshold: .2 })
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills" className="section skills-sec" ref={sectionRef}>
      <div className="blob skills-blob" />
      <div className="container">
        <div className="sec-header">
          <span className="sec-tag">✦ Technical Profile</span>
          <h2 className="sec-title">My <span>Skills</span></h2>
        </div>
        <div className="skills-grid">
          <div className="card sk-card">
            <h3 className="sk-group-title">⚡ Technical Skills</h3>
            <div className="sk-bars">
              {techSkills.map((s, i) => (
                <div className="sk-item" key={s.name}>
                  <div className="sk-label">
                    <span>{s.name}</span>
                    <span className="sk-pct">{s.pct}%</span>
                  </div>
                  <div className="sk-track">
                    <div
                      className="sk-fill"
                      style={{ '--pct': `${s.pct}%`, '--color': s.color }}
                      ref={el => barsRef.current[i] = el}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="card sk-card">
            <h3 className="sk-group-title">🤝 Soft Skills</h3>
            <div className="soft-grid">
              {softSkills.map((s, i) => (
                <div className="soft-pill" key={s} style={{ '--delay': `${i * 60}ms` }}>
                  <span className="sp-dot" />
                  {s}
                </div>
              ))}
            </div>
            <div className="tools-section">
              <h3 className="sk-group-title" style={{marginTop:'2rem'}}>🛠 Tools & Methods</h3>
              <div className="soft-grid">
                {['VS Code','Git / GitHub','Visual Paradigm','Postman','SDLC','Agile/Scrum','OOP Principles','REST Architecture'].map(t => (
                  <div className="soft-pill pill-c" key={t}><span className="sp-dot" />{t}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
