import './About.css'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="blob about-blob" />
      <div className="container">
        <div className="sec-header">
          <span className="sec-tag">✦ Personal Data</span>
          <h2 className="sec-title">About <span>Me</span></h2>
        </div>

        <div className="about-grid">
          <div className="about-left">
            <div className="card about-card">
              <p>I'm a motivated and detail-oriented Computer Programming and Analysis student at George Brown College in Toronto. I've built a solid foundation in full-stack web development, OOP, and database systems through both coursework and real-world projects.</p>
              <p style={{marginTop:'1rem'}}>I work across JavaScript, C#, PHP, Python, and SQL — building dynamic web apps, implementing backend logic, and connecting frontends with backend services. I'm highly adaptable and passionate about solving real problems through clean, maintainable code.</p>
            </div>

            <div className="card phil-card">
              <div className="phil-label">✦ Philosophy &amp; Career Goal</div>
              <p>I believe software development is as much an act of empathy as it is engineering. Every line of code is a decision about how a person will experience technology — and that responsibility motivates me deeply.</p>
              <p style={{marginTop:'1rem'}}>My goal is not simply to secure a job in tech, but to build products that genuinely improve people's lives. I strive to carry forward the discipline I developed through academic excellence into every project I undertake, and I'm committed to lifelong learning as the landscape keeps evolving.</p>
            </div>
          </div>

          <div className="about-right">
            <div className="info-grid">
              {[
                ['👤','Name','Al Shahriar Fahmid'],
                ['🎓','Program','Computer Programming & Analysis'],
                ['🏫','College','George Brown College'],
                ['📍','Location','Toronto, ON, Canada'],
                ['📅','Graduation','April 2026 (Expected)'],
                ['📧','Email','Alshahriarfahmid4@gmail.com'],
                ['💼','Focus','Full-Stack Web Development'],
                ['✅','Status','Open to Opportunities'],
              ].map(([ico, lbl, val]) => (
                <div className="info-item" key={lbl}>
                  <span className="info-ico">{ico}</span>
                  <div>
                    <div className="info-lbl">{lbl}</div>
                    <div className="info-val">{val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
