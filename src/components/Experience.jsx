import './Experience.css'

export default function Experience() {
  return (
    <section id="experience" className="section exp-sec">
      <div className="blob exp-blob" />
      <div className="container">
        <div className="sec-header">
          <span className="sec-tag">✦ Professional Summary</span>
          <h2 className="sec-title">Work <span>Experience</span></h2>
        </div>

        {/* Main job */}
        <div className="card exp-card">
          <div className="exp-top">
            <div className="exp-logo">7E</div>
            <div className="exp-head">
              <div className="exp-title-row">
                <h3 className="exp-role">Sales Associate</h3>
                <span className="pill pill-g">May 2024 – Present</span>
              </div>
              <p className="exp-company">7-Eleven Canada Inc · Toronto, Ontario</p>
            </div>
          </div>
          <div className="exp-duties">
            {[
              'Processed customer transactions accurately using POS systems in a high-paced retail environment',
              'Delivered fast, friendly, and efficient service — consistently received positive customer feedback',
              'Maintained store cleanliness, organization, and inventory levels to brand standards',
              'Assisted with restocking and monitored product availability and stock rotation',
              'Followed safety procedures and store policies to ensure smooth daily operations',
              'Balanced academic responsibilities with part-time employment, demonstrating strong time management',
            ].map(d => (
              <div key={d} className="exp-duty"><span className="duty-arrow">→</span>{d}</div>
            ))}
          </div>
          <div className="exp-takeaways">
            <span className="takeaway">💬 Communication</span>
            <span className="takeaway">⏱ Time Management</span>
            <span className="takeaway">🤝 Teamwork</span>
            <span className="takeaway">⚡ Fast-paced Environments</span>
          </div>
        </div>

        {/* Community */}
        <div className="card vol-card">
          <div className="vol-header">
            <span className="vol-icon">🤝</span>
            <div>
              <h3 className="vol-title">Community Service &amp; Volunteer Work</h3>
              <p className="vol-sub">George Brown College · Toronto, ON</p>
            </div>
          </div>
          <p className="vol-body">Actively participated in peer tutoring within the Computer Programming program, assisting fellow students with programming concepts, debugging, and coursework. Contributed to study groups and collaborative sessions that supported the academic success of peers. Committed to giving back to the learning community and open to additional volunteer opportunities in technology education.</p>
        </div>
      </div>
    </section>
  )
}
