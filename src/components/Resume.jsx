import './Resume.css'

export default function Resume() {
  return (
    <section id="resume" className="section resume-sec">
      <div className="blob resume-blob" />
      <div className="container">
        <div className="sec-header">
          <span className="sec-tag">✦ Personal Data</span>
          <h2 className="sec-title">My <span>Résumé</span></h2>
        </div>

        <div className="resume-wrap card">
          <div className="resume-top">
            <div>
              <h2 className="r-name">Al Shahriar Fahmid</h2>
              <p className="r-sub">Full-Stack Developer · Computer Programming & Analysis Student</p>
            </div>
            <div className="r-contact-chips">
              <span className="chip">📧 alshahriarfahmid4@gmail.com</span>
              <span className="chip">📍 Toronto, ON</span>
              <span className="chip">🐙 GitHub</span>
              <span className="chip">💼 LinkedIn</span>
            </div>
          </div>

          <div className="r-divider" />

          <div className="r-section">
            <h3 className="r-sec-title">Professional Summary</h3>
            <p className="r-text">A motivated Computer Programming and Analysis student with hands-on experience in full-stack web development, OOP, and database management. Strong problem-solver, quick learner, and team player eager to contribute to real-world software projects.</p>
          </div>

          <div className="r-section">
            <h3 className="r-sec-title">Technical Skills</h3>
            <div className="badge-wrap">
              {['HTML5','CSS3','JavaScript (ES6+)','TypeScript','React.js','Next.js','Node.js','PHP','C# / .NET','REST APIs','MySQL','PostgreSQL','MongoDB','Git & GitHub','OOP','Agile/Scrum','SDLC'].map(s => (
                <span key={s} className="pill pill-v">{s}</span>
              ))}
            </div>
          </div>

          <div className="r-section">
            <h3 className="r-sec-title">Education</h3>
            <div className="r-entry">
              <div className="r-entry-head">
                <div>
                  <div className="r-entry-title">Computer Programming and Analysis – Advanced Diploma</div>
                  <div className="r-entry-org">George Brown College · Toronto, Ontario</div>
                </div>
                <span className="pill pill-g">Jan 2024 – Apr 2026</span>
              </div>
            </div>
            <div className="r-entry">
              <div className="r-entry-head">
                <div>
                  <div className="r-entry-title">Higher Secondary Certificate (HSC) – Science</div>
                  <div className="r-entry-org">Brindabon Government College · GPA: 5.00 / 5.00</div>
                </div>
                <span className="pill pill-p">Completed 2021</span>
              </div>
            </div>
          </div>

          <div className="r-section">
            <h3 className="r-sec-title">Key Projects</h3>
            {[
              { title:'QuickFix – Capstone', desc:'Full-stack service marketplace with role-based auth (customer/worker/admin), booking system, mock payment.', tags:['Next.js','React','TypeScript','MongoDB'] },
              { title:'Voting Application', desc:'Full-featured voting platform with auth, CRUD, real-time leaderboard, SQL injection & CSRF protection.', tags:['PHP','JavaScript','MySQL'] },
              { title:'E-commerce Website', desc:'Responsive e-commerce app with dynamic discount system, personalized suggestions, optimized DB design.', tags:['React.js','JavaScript','MySQL'] },
              { title:'Library Management System', desc:'Console OOP app: borrowing/return system, user accounts, 10-book limit enforcement.', tags:['C#','OOP','.NET'] },
            ].map(p => (
              <div className="r-entry" key={p.title}>
                <div className="r-entry-title">{p.title}</div>
                <p className="r-text">{p.desc}</p>
                <div className="badge-wrap" style={{marginTop:'.5rem'}}>
                  {p.tags.map(t => <span key={t} className="pill pill-c">{t}</span>)}
                </div>
              </div>
            ))}
          </div>

          <div className="r-section">
            <h3 className="r-sec-title">Work Experience</h3>
            <div className="r-entry">
              <div className="r-entry-head">
                <div>
                  <div className="r-entry-title">Sales Associate</div>
                  <div className="r-entry-org">7-Eleven Canada Inc · Toronto, ON</div>
                </div>
                <span className="pill pill-y">May 2024 – Present</span>
              </div>
              <ul className="r-list">
                <li>Processed transactions using POS systems in high-paced retail environment</li>
                <li>Maintained store organization, inventory, and stock rotation</li>
                <li>Balanced academics with part-time work — strong time management demonstrated</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
