import './Projects.css'

const projects = [
  {
    num: '01',
    title: 'QuickFix — Capstone',
    desc: 'A full-stack service marketplace platform connecting customers with workers for household and repair services. Features complete role-based auth, dashboards, bookings, and mock payments.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'REST API', 'MongoDB'],
    features: ['Role-based auth (customer/worker/admin)', 'Service browsing & booking workflow', 'Admin approval & monitoring panel', 'Mock payment integration'],
    color: 'var(--grad-1)',
    pill: 'pill-v',
    link: '#capstone',
    linkLabel: 'Full Details →',
  },
  {
    num: '02',
    title: 'Voting Application',
    desc: 'Full-featured voting platform with user registration, login, topic creation, real-time vote tracking, leaderboard system, and robust security measures.',
    tags: ['PHP', 'JavaScript', 'MySQL', 'HTML/CSS'],
    features: ['User auth & session management', 'CRUD for voting topics', 'Real-time leaderboard', 'SQL injection & CSRF protection'],
    color: 'var(--grad-3)',
    pill: 'pill-y',
    link: '#',
    linkLabel: 'View on GitHub →',
  },
  {
    num: '03',
    title: 'Dynamic E-commerce Website',
    desc: 'Responsive e-commerce web application with a modern React UI, dynamic discount system, personalized suggestions, and optimized relational database design.',
    tags: ['React.js', 'JavaScript', 'MySQL', 'CSS3'],
    features: ['Interactive product browsing', 'Dynamic discount system', 'Personalized product suggestions', 'Modular JS architecture'],
    color: 'var(--grad-2)',
    pill: 'pill-c',
    link: '#',
    linkLabel: 'View on GitHub →',
  },
  {
    num: '04',
    title: 'Library Management System',
    desc: 'Console-based application applying OOP principles to manage library operations including borrowing, returns, and user account management.',
    tags: ['C#', 'OOP', '.NET'],
    features: ['Book borrowing & return system', 'User account management', '10-book limit enforcement', 'Scalable OOP architecture'],
    color: 'var(--grad-4)',
    pill: 'pill-g',
    link: '#',
    linkLabel: 'View on GitHub →',
  },
  {
    num: '05',
    title: 'Developer Portfolio Website',
    desc: 'This portfolio site — a full React SPA (Vite) designed and developed as an academic deliverable demonstrating front-end architecture and modern React patterns.',
    tags: ['React', 'Vite', 'CSS3', 'JavaScript'],
    features: ['Responsive across all devices', 'Intersection Observer animations', 'Typewriter effect & scroll tracking', 'Component-based architecture'],
    color: 'var(--grad-1)',
    pill: 'pill-p',
    link: '#',
    linkLabel: 'You\'re here! ✦',
    badge: null,
  },
  {
    num: '06',
    title: 'MedRemind — Medication Reminder',
    desc: 'A personal Android app built and tested on a Pixel 7. Helps users stay on top of their daily medications with smart alarms, dosage tracking, and a full history log. Play Store release planned.',
    tags: ['Android Studio', 'Java', 'XML', 'AlarmManager', 'SQLite'],
    features: ['Daily medication schedule view', 'Alarm & push notification reminders', 'Add / edit / delete medications', 'Dosage tracking per medication', 'Full medication history log'],
    color: 'var(--grad-4)',
    pill: 'pill-g',
    link: '#',
    linkLabel: 'Play Store — Coming Soon ↗',
    badge: 'Personal Project',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section projects-sec">
      <div className="blob proj-blob" />
      <div className="container">
        <div className="sec-header">
          <span className="sec-tag">✦ Academic & Personal Work</span>
          <h2 className="sec-title">Projects & Work <span>Samples</span></h2>
        </div>

        <div className="proj-grid">
          {projects.map((p) => (
            <div key={p.num} className={`card proj-card${p.badge ? ' proj-card-personal' : ''}`}>
              <div className="proj-top-bar" style={{ background: p.color }} />
              <div className="proj-header">
                <span className="proj-num">{p.num}</span>
                <div className={`pill ${p.pill} proj-type-pill`}>{p.badge ?? 'Academic'}</div>
              </div>
              <h3 className="proj-title">{p.title}</h3>
              <p className="proj-desc">{p.desc}</p>
              <ul className="proj-features">
                {p.features.map(f => <li key={f}>{f}</li>)}
              </ul>
              <div className="proj-footer">
                <div className="proj-tags">
                  {p.tags.map(t => <span key={t} className={`pill ${p.pill}`}>{t}</span>)}
                </div>
                <a href={p.link} className="proj-link">{p.linkLabel}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
