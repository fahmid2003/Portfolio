import './Credentials.css'

const courses = [
  'Web Development', 'Object-Oriented Programming',
  'Database Management Systems', 'Data Structures & Algorithms',
  'Software Development Lifecycle', '.NET Development',
  'Software Testing', 'Mobile App Development',
]

const achievements = [
  { icon: '🏆', text: 'Perfect GPA — 5.00/5.00 in Higher Secondary Certificate (Science)' },
  { icon: '💻', text: 'Built 5+ full-stack projects across academic and personal work' },
  { icon: '📈', text: 'Consistent academic performance throughout the diploma program' },
  { icon: '🤝', text: 'Peer tutoring and study group leadership within the CS program' },
  { icon: '🚀', text: 'Capstone project spanning complete SDLC from planning to deployment' },
]

export default function Credentials() {
  return (
    <section id="credentials" className="section cred-sec">
      <div className="blob cred-blob" />
      <div className="container">
        <div className="sec-header">
          <span className="sec-tag">✦ Academic Credentials</span>
          <h2 className="sec-title">Education & <span>Awards</span></h2>
        </div>

        <div className="cred-top-grid">
          {/* GBC Card */}
          <div className="card cred-card gbc-card">
            <div className="cred-badge">🎓</div>
            <div className="cred-grad-bar" style={{ background: 'var(--grad-1)' }} />
            <h3 className="cred-deg">Computer Programming and Analysis</h3>
            <p className="cred-type">Advanced Diploma</p>
            <p className="cred-school">George Brown College · Toronto, Ontario</p>
            <p className="cred-period">January 2024 – April 2026 (Expected)</p>
            <div className="cred-divider" />
            <p className="cred-courses-lbl">Relevant Coursework</p>
            <div className="courses-grid">
              {courses.map(c => (
                <span key={c} className="course-chip">→ {c}</span>
              ))}
            </div>
          </div>

          {/* HSC Card */}
          <div className="card cred-card hsc-card">
            <div className="cred-badge">📜</div>
            <div className="cred-grad-bar" style={{ background: 'var(--grad-3)' }} />
            <h3 className="cred-deg">Higher Secondary Certificate (HSC)</h3>
            <p className="cred-type">Science Stream</p>
            <p className="cred-school">Saidpur Government Science College</p>
            <p className="cred-period">Completed: 2021</p>
            <div className="gpa-spotlight">
              <span className="gpa-num">5.00</span>
              <span className="gpa-label">/ 5.00 GPA — Perfect Score</span>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="ach-section">
          <h3 className="ach-title">✦ Achievements & Recognition</h3>
          <div className="ach-grid">
            {achievements.map((a, i) => (
              <div key={i} className="card ach-card" style={{ '--delay': `${i * 80}ms` }}>
                <span className="ach-icon">{a.icon}</span>
                <p className="ach-text">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
