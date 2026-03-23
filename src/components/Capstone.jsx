import './Capstone.css'

const requirements = {
  Customer: ['Register and log in securely', 'Manage personal profile', 'Browse & filter services', 'Request and manage bookings', 'Communicate with workers'],
  Worker: ['Register as a service worker', 'Upload credentials & documents', 'Manage worker dashboard', 'View & respond to job requests', 'Track earnings & history'],
  Admin: ['Approve or reject workers', 'Monitor all user activity', 'Manage platform operations', 'Maintain service quality', 'Handle disputes & reports'],
}

const planSteps = [
  'Requirements gathering and stakeholder analysis',
  'Wireframing, UI planning and database schema design',
  'Frontend development using Next.js, React, TypeScript & Tailwind CSS',
  'Backend/API integration and authentication system implementation',
  'Testing, bug fixing, UI polish and final deployment',
]

const implItems = [
  'Frontend built with Next.js, React, TypeScript, Tailwind CSS',
  'App routing handled using Next.js App Router',
  'Role-based auth system for customer, worker and admin roles',
  'REST APIs for all data communication and business logic',
  'Database integration for profiles, bookings and system data',
  'Separate dashboards per role with distinct functionality',
  'File upload for worker document and profile verification',
  'Mock payment system for service transactions',
]

const statuses = [
  { phase: 'Phase 1 — Initial Development', color: '#00F5A0', bg: 'rgba(0,245,160,.08)', border: 'rgba(0,245,160,.25)', title: 'Status Report 1 – Initial Development Phase', body: 'The project progressed according to the initial plan. Backend design was completed and initial development was started. No major delays were encountered, and the team remained on schedule. Backend testing was identified as a pending task, while frontend development was planned for the next phase.' },
  { phase: 'Phase 2 — Feature Implementation', color: '#FFE600', bg: 'rgba(255,230,0,.06)', border: 'rgba(255,230,0,.25)', title: 'Status Report 2 – Feature Implementation Phase', body: 'The team developed core features of the QuickFix platform. The frontend UI was finalized, the authentication system was successfully implemented, and the live chat feature was integrated to improve communication between customers and workers. Some frontend refinements and dashboard improvements were carried forward to the next phase.' },
  { phase: 'Phase 3 — Current / Final Phase', color: '#00E5FF', bg: 'rgba(0,229,255,.06)', border: 'rgba(0,229,255,.25)', title: 'Current Progress – Final Phase', body: 'The project is currently focused on final improvements including dashboard enhancements, fixing file upload issues, and optimizing UI responsiveness. The system is being prepared for testing, presentation, and deployment.' },
]

/* ── SVG Wireframes ── */
function WireLanding() {
  return (
    <svg viewBox="0 0 540 340" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'auto',display:'block'}}>
      <rect width="540" height="340" fill="#111118"/>
      <rect width="540" height="42" fill="#1A1A24"/>
      <rect x="14" y="13" width="70" height="16" rx="3" fill="#2A2A3A"/>
      <rect x="320" y="15" width="38" height="12" rx="2" fill="#252535"/>
      <rect x="366" y="15" width="38" height="12" rx="2" fill="#252535"/>
      <rect x="412" y="15" width="38" height="12" rx="2" fill="#252535"/>
      <rect x="462" y="11" width="64" height="20" rx="10" fill="#6C63FF" opacity=".8"/>
      <text x="494" y="25" fontFamily="monospace" fontSize="8" fill="#fff" textAnchor="middle">Sign Up</text>
      {/* Hero */}
      <rect x="0" y="42" width="540" height="160" fill="#0F0F18"/>
      <rect x="130" y="62" width="280" height="12" rx="3" fill="#2A2A3A"/>
      <rect x="100" y="84" width="340" height="28" rx="4" fill="#222230"/>
      {/* gradient title bar */}
      <rect x="100" y="84" width="340" height="28" rx="4" fill="url(#g1)" opacity=".5"/>
      <defs>
        <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6C63FF"/>
          <stop offset="100%" stopColor="#FF6B9D"/>
        </linearGradient>
      </defs>
      <rect x="150" y="124" width="240" height="10" rx="2" fill="#252535"/>
      <rect x="165" y="148" width="90" height="26" rx="13" fill="#6C63FF" opacity=".7"/>
      <rect x="265" y="148" width="90" height="26" rx="13" fill="none" stroke="#333344" strokeWidth="1.5"/>
      <text x="210" y="165" fontFamily="monospace" fontSize="8" fill="#fff" textAnchor="middle">Find Services</text>
      <text x="310" y="165" fontFamily="monospace" fontSize="8" fill="#888" textAnchor="middle">Learn More</text>
      {/* Services */}
      <text x="20" y="222" fontFamily="monospace" fontSize="9" fill="#555566" letterSpacing="1">POPULAR SERVICES</text>
      {[0,1,2,3].map(i => (
        <g key={i}>
          <rect x={20 + i*130} y="230" width="118" height="82" rx="8" fill="#1A1A26" stroke="#252535" strokeWidth="1"/>
          <rect x={32 + i*130} y="242" width="34" height="34" rx="6" fill="#252535"/>
          <rect x={32 + i*130} y="284" width="80" height="8" rx="2" fill="#252535"/>
          <rect x={32 + i*130} y="296" width="60" height="6" rx="2" fill="#1E1E2C"/>
        </g>
      ))}
      <rect x="0" y="326" width="540" height="14" fill="#1A1A24"/>
      <rect x="195" y="331" width="150" height="6" rx="2" fill="#252535"/>
      <text x="270" y="104" fontFamily="monospace" fontSize="11" fill="#6C63FF" textAnchor="middle" fontWeight="bold" opacity=".8">QuickFix — Landing Page</text>
    </svg>
  )
}

function WireCustomer() {
  return (
    <svg viewBox="0 0 540 340" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'auto',display:'block'}}>
      <rect width="540" height="340" fill="#111118"/>
      <rect x="0" y="0" width="130" height="340" fill="#0E0E16"/>
      <rect x="12" y="16" width="80" height="16" rx="3" fill="#252535"/>
      {['Dashboard','My Bookings','Messages','Browse','Profile'].map((lbl,i) => (
        <g key={lbl}>
          <rect x="12" y={48+i*34} width="106" height="26" rx="5" fill={i===0?'#6C63FF':'#1A1A26'} opacity={i===0?.7:1}/>
          <text x="65" y={65+i*34} fontFamily="monospace" fontSize="8" fill={i===0?'#fff':'#555566'} textAnchor="middle">{lbl}</text>
        </g>
      ))}
      <rect x="130" y="0" width="410" height="40" fill="#1A1A24"/>
      <rect x="146" y="13" width="120" height="14" rx="2" fill="#252535"/>
      <rect x="460" y="10" width="64" height="20" rx="10" fill="#1E1E2C"/>
      {/* Stat cards */}
      {[[4,'Bookings'],[1,'Active'],[3,'Messages']].map(([n,l],i) => (
        <g key={l}>
          <rect x={146+i*128} y="52" width="118" height="64" rx="8" fill="#1A1A26" stroke="#252535" strokeWidth="1"/>
          <text x={205+i*128} y="80" fontFamily="monospace" fontSize="20" fill="#6C63FF" textAnchor="middle" fontWeight="bold" opacity=".8">{n}</text>
          <text x={205+i*128} y="96" fontFamily="monospace" fontSize="7.5" fill="#555566" textAnchor="middle">{l}</text>
        </g>
      ))}
      {/* Table */}
      <text x="146" y="136" fontFamily="monospace" fontSize="9" fill="#444455" letterSpacing=".5">RECENT BOOKINGS</text>
      <rect x="146" y="144" width="378" height="24" rx="2" fill="#1A1A26"/>
      {['SERVICE','DATE','STATUS'].map((h,i) => (
        <text key={h} x={160+i*130} y="160" fontFamily="monospace" fontSize="7" fill="#444455">{h}</text>
      ))}
      {[0,1,2].map(i=>(
        <g key={i}>
          <rect x="146" y={172+i*28} width="378" height="24" rx="2" fill={i%2===0?'#16161F':'#111118'}/>
          <rect x="152" y={180+i*28} width="100" height="8" rx="2" fill="#252535"/>
          <rect x="280" y={180+i*28} width="70" height="8" rx="2" fill="#252535"/>
          <rect x="375" y={177+i*28} width="50" height="14" rx="7" fill={i===0?'rgba(0,245,160,.15)':'#1A1A26'}/>
          <text x="400" y={187+i*28} fontFamily="monospace" fontSize="6.5" fill={i===0?'#00F5A0':'#444455'} textAnchor="middle">{i===0?'Active':'Done'}</text>
        </g>
      ))}
      <rect x="146" y="262" width="180" height="36" rx="18" fill="#6C63FF" opacity=".7"/>
      <text x="236" y="285" fontFamily="monospace" fontSize="9" fill="#fff" textAnchor="middle">+ Book New Service</text>
    </svg>
  )
}

function WireWorker() {
  return (
    <svg viewBox="0 0 540 340" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'auto',display:'block'}}>
      <rect width="540" height="340" fill="#111118"/>
      <rect x="0" y="0" width="130" height="340" fill="#0E0E16"/>
      <rect x="12" y="16" width="80" height="16" rx="3" fill="#252535"/>
      {['Dashboard','Job Requests','Earnings','Profile'].map((lbl,i) => (
        <g key={lbl}>
          <rect x="12" y={48+i*34} width="106" height="26" rx="5" fill={i===0?'#FF6B9D':'#1A1A26'} opacity={i===0?.6:1}/>
          <text x="65" y={65+i*34} fontFamily="monospace" fontSize="8" fill={i===0?'#fff':'#555566'} textAnchor="middle">{lbl}</text>
        </g>
      ))}
      <rect x="130" y="0" width="410" height="40" fill="#1A1A24"/>
      <rect x="146" y="13" width="160" height="14" rx="2" fill="#252535"/>
      {/* Profile bar */}
      <text x="146" y="58" fontFamily="monospace" fontSize="9" fill="#444455">PROFILE COMPLETION</text>
      <rect x="146" y="64" width="378" height="8" rx="4" fill="#1A1A26"/>
      <rect x="146" y="64" width="284" height="8" rx="4" fill="#FF6B9D" opacity=".6"/>
      <text x="530" y="72" fontFamily="monospace" fontSize="8" fill="#555566" textAnchor="end">75%</text>
      {/* Earnings + jobs */}
      <rect x="146" y="82" width="178" height="80" rx="8" fill="#1A1A26" stroke="#252535" strokeWidth="1"/>
      <text x="235" y="108" fontFamily="monospace" fontSize="9" fill="#555566" textAnchor="middle">This Month</text>
      <text x="235" y="132" fontFamily="monospace" fontSize="22" fill="#00F5A0" textAnchor="middle" fontWeight="bold" opacity=".8">$284</text>
      <text x="235" y="150" fontFamily="monospace" fontSize="7.5" fill="#444455" textAnchor="middle">↑ 12% from last month</text>
      <rect x="336" y="82" width="188" height="80" rx="8" fill="#1A1A26" stroke="#252535" strokeWidth="1"/>
      <text x="430" y="108" fontFamily="monospace" fontSize="9" fill="#555566" textAnchor="middle">Jobs Completed</text>
      <text x="430" y="132" fontFamily="monospace" fontSize="22" fill="#FFE600" textAnchor="middle" fontWeight="bold" opacity=".8">7</text>
      <text x="430" y="150" fontFamily="monospace" fontSize="7.5" fill="#444455" textAnchor="middle">Rating: ★ 4.8 / 5</text>
      {/* Job requests */}
      <text x="146" y="184" fontFamily="monospace" fontSize="9" fill="#444455" letterSpacing=".5">INCOMING JOB REQUESTS</text>
      {[0,1,2].map(i=>(
        <g key={i}>
          <rect x="146" y={194+i*46} width="378" height="38" rx="8" fill="#1A1A26" stroke="#252535" strokeWidth="1"/>
          <rect x="156" y={202+i*46} width="90" height="8" rx="2" fill="#252535"/>
          <rect x="156" y={214+i*46} width="140" height="7" rx="2" fill="#1E1E2C"/>
          <rect x="440" y={199+i*46} width="72" height="22" rx="6" fill="#FF6B9D" opacity=".6"/>
          <text x="476" y={213+i*46} fontFamily="monospace" fontSize="7" fill="#fff" textAnchor="middle">Accept</text>
        </g>
      ))}
    </svg>
  )
}

function WireAdmin() {
  return (
    <svg viewBox="0 0 540 340" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'auto',display:'block'}}>
      <rect width="540" height="340" fill="#111118"/>
      <rect x="0" y="0" width="130" height="340" fill="#0E0E16"/>
      <rect x="12" y="12" width="106" height="22" rx="4" fill="#252535"/>
      <text x="65" y="27" fontFamily="monospace" fontSize="8" fill="#6C63FF" textAnchor="middle" letterSpacing="1">ADMIN PANEL</text>
      {['Overview','Users','Workers','Bookings','Reports'].map((lbl,i)=>(
        <g key={lbl}>
          <rect x="12" y={46+i*34} width="106" height="26" rx="5" fill={i===0?'rgba(108,99,255,.4)':'#1A1A26'}/>
          <text x="65" y={63+i*34} fontFamily="monospace" fontSize="8" fill={i===0?'#A89FFF':'#555566'} textAnchor="middle">{lbl}</text>
        </g>
      ))}
      <rect x="130" y="0" width="410" height="40" fill="#1A1A24"/>
      <rect x="146" y="13" width="120" height="14" rx="2" fill="#252535"/>
      {/* 4 stat cards */}
      {[[48,'Users'],[12,'Workers'],[31,'Bookings'],[5,'Pending']].map(([n,l],i)=>(
        <g key={l}>
          <rect x={146+i*102} y="50" width="92" height="58" rx="8" fill="#1A1A26" stroke="#252535" strokeWidth="1"/>
          <text x={192+i*102} y="74" fontFamily="monospace" fontSize="18" fill="#6C63FF" textAnchor="middle" fontWeight="bold" opacity=".8">{n}</text>
          <text x={192+i*102} y="88" fontFamily="monospace" fontSize="7" fill="#555566" textAnchor="middle">{l}</text>
        </g>
      ))}
      {/* Pending approvals */}
      <text x="146" y="126" fontFamily="monospace" fontSize="9" fill="#444455" letterSpacing=".5">PENDING WORKER APPROVALS</text>
      <rect x="146" y="134" width="378" height="22" rx="2" fill="#1A1A26"/>
      {['NAME','SERVICE TYPE','ACTION'].map((h,i)=>(
        <text key={h} x={160+i*145} y="149" fontFamily="monospace" fontSize="7" fill="#444455">{h}</text>
      ))}
      {[0,1,2].map(i=>(
        <g key={i}>
          <rect x="146" y={160+i*28} width="378" height="24" rx="2" fill={i%2===0?'#16161F':'#111118'}/>
          <rect x="152" y={168+i*28} width="90" height="8" rx="2" fill="#252535"/>
          <rect x="268" y={168+i*28} width="100" height="8" rx="2" fill="#252535"/>
          <rect x="408" y={165+i*28} width="42" height="16" rx="4" fill="rgba(0,245,160,.15)"/>
          <rect x="455" y={165+i*28} width="42" height="16" rx="4" fill="rgba(255,107,157,.15)"/>
          <text x="429" y={176+i*28} fontFamily="monospace" fontSize="6.5" fill="#00F5A0" textAnchor="middle">Approve</text>
          <text x="476" y={176+i*28} fontFamily="monospace" fontSize="6.5" fill="#FF6B9D" textAnchor="middle">Reject</text>
        </g>
      ))}
      {/* Activity */}
      <text x="146" y="254" fontFamily="monospace" fontSize="9" fill="#444455" letterSpacing=".5">RECENT PLATFORM ACTIVITY</text>
      <rect x="146" y="262" width="378" height="60" rx="8" fill="#1A1A26" stroke="#252535" strokeWidth="1"/>
      <rect x="158" y="274" width="200" height="8" rx="2" fill="#252535"/>
      <rect x="158" y="288" width="150" height="8" rx="2" fill="#1E1E2C"/>
      <rect x="158" y="302" width="120" height="8" rx="2" fill="#1E1E2C"/>
    </svg>
  )
}

export default function Capstone() {
  return (
    <section id="capstone" className="section cap-sec">
      <div className="blob cap-blob-1" />
      <div className="blob cap-blob-2" />
      <div className="container">
        <div className="sec-header">
          <span className="sec-tag">✦ Academic Work Experience</span>
          <h2 className="sec-title">Capstone: <span>QuickFix</span></h2>
        </div>

        {/* Hero banner */}
        <div className="cap-banner">
          <div className="cap-banner-left">
            <div className="cap-logo">QF</div>
            <div>
              <h3 className="cap-banner-title">QuickFix</h3>
              <p className="cap-banner-sub">Service Marketplace Platform</p>
            </div>
          </div>
          <p className="cap-banner-desc">A full-stack platform connecting customers with workers for household and repair services. Demonstrates a complete SDLC — from requirements and wireframing through frontend development, backend integration, and deployment.</p>
          <div className="cap-tech-chips">
            {['Next.js','React','TypeScript','Tailwind CSS','REST API','MongoDB','Node.js','GitHub'].map(t => (
              <span key={t} className="pill pill-v">{t}</span>
            ))}
          </div>
        </div>

        {/* Summary + Vision */}
        <div className="cap-2col">
          <div className="card">
            <div className="cap-card-label">📋 Project Summary</div>
            <p className="cap-text">QuickFix is designed to simplify finding trusted household and repair services. Customers browse and request services; workers manage profiles and job opportunities; administrators oversee platform activities. The system solves a real-world coordination problem with a clean, reliable digital interface.</p>
          </div>
          <div className="card">
            <div className="cap-card-label">🔭 Project Vision</div>
            <p className="cap-text">To create a convenient, user-friendly, and efficient digital platform where customers quickly find service providers, workers access job opportunities, and administrators maintain quality and reliability. QuickFix aspires to become a trusted local service marketplace that streamlines the entire booking journey from discovery to completion.</p>
          </div>
        </div>

        {/* Business Requirements */}
        <div className="card cap-full-card">
          <div className="cap-card-label">📌 Project / Business Requirements</div>
          <div className="req-list">
            {['User registration and secure login with role assignment','Role-based access for customer, worker, and admin','Customer profile management and personal data editing','Worker profile setup with document upload functionality','Service browsing, filtering, and booking workflow','Admin approval and monitoring system for workers','Mock payment setup for service transactions','Real-time communication between customers and workers'].map(r => (
              <div key={r} className="req-item"><span className="req-dot" />{r}</div>
            ))}
          </div>
        </div>

        {/* Project Plan */}
        <div className="card cap-full-card">
          <div className="cap-card-label">🗓 Project Plan</div>
          <div className="timeline">
            {planSteps.map((s, i) => (
              <div key={i} className="tl-step">
                <div className="tl-indicator">
                  <div className="tl-dot" />
                  {i < planSteps.length - 1 && <div className="tl-line" />}
                </div>
                <div className="tl-body">
                  <span className="tl-phase">Phase {i + 1}</span>
                  <p className="tl-text">{s}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements Analysis */}
        <div className="card cap-full-card">
          <div className="cap-card-label">🔍 Requirements Analysis and Design</div>
          <div className="req-analysis-grid">
            {Object.entries(requirements).map(([role, items]) => (
              <div key={role} className="req-role-card">
                <h4 className="req-role-title">
                  {role === 'Customer' ? '👤' : role === 'Worker' ? '🔧' : '🛡'} {role}
                </h4>
                <ul>
                  {items.map(item => (
                    <li key={item} className="req-role-item">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Wireframes */}
        <div className="cap-card-label" style={{marginBottom:'1.2rem',marginTop:'.5rem'}}>🖼 Wireframes / Mockups</div>
        <p className="wire-intro">Low-fidelity wireframes illustrating the four key screens of the QuickFix platform. These guided frontend development and UX decisions throughout the project lifecycle.</p>
        <div className="wire-grid">
          {[
            { label: 'Screen 1 — Landing / Home Page', comp: <WireLanding /> },
            { label: 'Screen 2 — Customer Dashboard', comp: <WireCustomer /> },
            { label: 'Screen 3 — Worker Dashboard', comp: <WireWorker /> },
            { label: 'Screen 4 — Admin Panel', comp: <WireAdmin /> },
          ].map(w => (
            <div key={w.label} className="wire-item">
              {w.comp}
              <div className="wire-label">{w.label}</div>
            </div>
          ))}
        </div>

        {/* Status Reports */}
        <div className="cap-card-label" style={{marginBottom:'1.2rem'}}>📊 Status Reports</div>
        <div className="status-stack">
          {statuses.map(s => (
            <div key={s.phase} className="status-card" style={{ background: s.bg, borderColor: s.border }}>
              <span className="status-badge" style={{ color: s.color, background: `${s.color}18`, border: `1px solid ${s.color}40` }}>{s.phase}</span>
              <h4 className="status-title">{s.title}</h4>
              <p className="status-body">{s.body}</p>
            </div>
          ))}
        </div>

        {/* System Implementation */}
        <div className="card cap-full-card">
          <div className="cap-card-label">⚙️ System Implementation</div>
          <div className="impl-grid">
            {implItems.map(item => (
              <div key={item} className="impl-item">
                <span className="impl-dot" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
