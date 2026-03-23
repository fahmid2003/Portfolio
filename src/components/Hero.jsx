import { useEffect, useRef } from 'react'
import './Hero.css'

const roles = ['Full-Stack Developer', 'React Enthusiast', 'Problem Solver', 'CS Student']

export default function Hero() {
  const roleRef = useRef(null)

  useEffect(() => {
    let i = 0, j = 0, deleting = false, timeout
    function type() {
      const word = roles[i]
      if (!roleRef.current) return
      if (!deleting) {
        roleRef.current.textContent = word.slice(0, j + 1)
        j++
        if (j === word.length) { deleting = true; timeout = setTimeout(type, 1500); return }
      } else {
        roleRef.current.textContent = word.slice(0, j - 1)
        j--
        if (j === 0) { deleting = false; i = (i + 1) % roles.length }
      }
      timeout = setTimeout(type, deleting ? 60 : 100)
    }
    timeout = setTimeout(type, 400)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section id="home" className="hero">
      {/* Background blobs */}
      <div className="blob hero-blob-1" />
      <div className="blob hero-blob-2" />
      <div className="blob hero-blob-3" />

      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            Available for Internships & Opportunities
          </div>

          <h1 className="hero-name">
            Hi, I'm<br />
            <span className="name-grad">Al Shahriar</span><br />
            <span className="name-last">Fahmid</span>
          </h1>

          <div className="hero-role">
            <span className="role-prefix">I'm a </span>
            <span className="role-text" ref={roleRef} />
            <span className="cursor-blink">|</span>
          </div>

          <p className="hero-desc">
            Computer Programming &amp; Analysis student at George Brown College.
            Building modern, scalable web apps across the full stack — from pixel-perfect UIs to robust backends.
          </p>

          <div className="hero-btns">
            <a href="#capstone" className="btn-primary">View Capstone ✦</a>
            <a href="#projects" className="btn-outline">See Projects →</a>
          </div>

          <div className="hero-stats">
            {[['5+','Projects'],['8+','Technologies'],['5.0','HSC GPA'],['2+','Yrs Learning']].map(([n,l]) => (
              <div className="stat" key={l}>
                <span className="stat-n">{n}</span>
                <span className="stat-l">{l}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="code-card">
            <div className="cc-bar">
              <span className="cc-dot red"/>
              <span className="cc-dot yellow"/>
              <span className="cc-dot green"/>
              <span className="cc-title">fahmid.js</span>
            </div>
            <pre className="cc-code"><code>{`const developer = {
  name: "Al Shahriar Fahmid",
  role: "Full-Stack Developer",
  school: "George Brown College",
  stack: [
    "React", "Next.js",
    "Node.js", "PHP", "C#",
    "MySQL", "MongoDB"
  ],
  passion: "Building things that",
  morePassion: "actually matter 🚀",
  status: "open to work ✦"
}`}</code></pre>
          </div>
        </div>
      </div>
    </section>
  )
}
