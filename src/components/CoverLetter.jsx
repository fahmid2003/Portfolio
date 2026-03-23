import './CoverLetter.css'

export default function CoverLetter() {
  return (
    <section id="cover-letter" className="section cl-sec">
      <div className="container">
        <div className="sec-header">
          <span className="sec-tag">✦ Personal Data</span>
          <h2 className="sec-title">Cover <span>Letter</span></h2>
        </div>
        <div className="cl-card card">
          <div className="cl-meta">
            <span className="pill pill-p">Template · Junior Full-Stack Developer</span>
            <span className="cl-date">March 2026</span>
          </div>
          <div className="cl-body">
            <p>Dear Hiring Manager,</p>
            <p>I am writing to express my strong interest in the Junior Full-Stack Developer position at your organization. As a second-year Computer Programming and Analysis student at George Brown College, I have built a solid foundation in both frontend and backend web development through rigorous academic coursework and independently driven projects.</p>
            <p>My capstone project, QuickFix — a service marketplace platform — required me to design and implement role-based authentication, responsive UI components, REST API integrations, and a relational database schema. This experience taught me how to translate ambiguous business requirements into concrete, scalable technical decisions, and how to collaborate effectively under deadline pressure.</p>
            <p>Beyond the capstone, I've developed a voting application (PHP/MySQL), a dynamic e-commerce website (React.js), and a library management system (C#) — each requiring different problem-solving approaches and reinforcing my belief that versatility is one of a developer's greatest assets. I'm comfortable working across the stack, learning unfamiliar technologies quickly, and writing code that teammates can understand and extend.</p>
            <p>I bring an earnest work ethic shaped by both academic discipline — reflected in my perfect 5.0 GPA in high school — and real-world experience balancing a part-time role while maintaining strong academic performance. I am eager to contribute meaningfully from day one while continuing to grow as an engineer.</p>
            <p>I would welcome the opportunity to discuss how my background aligns with your team's needs. Thank you sincerely for your time and consideration.</p>
            <p>Warm regards,</p>
            <div className="cl-sig">Al Shahriar Fahmid</div>
            <p className="cl-email">Alshahriarfahmid4@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}
