# Al Shahriar Fahmid — Portfolio


## 🛠 Tech Stack
- **Framework:** React 18 + Vite 5
- **Styling:** Plain CSS with CSS variables (no Tailwind, no UI library)
- **Fonts:** Space Grotesk + Syne (Google Fonts)
- **Deployment:** Vercel

---

## 📁 Project Structure
```
fahmid-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   ├── Hero.jsx / .css         ← Typewriter animation + code card
│   │   ├── About.jsx / .css        ← Bio + Philosophy + Info card
│   │   ├── Resume.jsx / .css       ← Full inline résumé
│   │   ├── CoverLetter.jsx / .css  ← Cover letter template
│   │   ├── Skills.jsx / .css       ← Animated skill bars
│   │   ├── Credentials.jsx / .css  ← Degrees + achievements
│   │   ├── Projects.jsx / .css     ← 5 academic work samples
│   │   ├── Capstone.jsx / .css     ← Full QuickFix section + SVG wireframes
│   │   ├── Experience.jsx / .css   ← Work experience + volunteer
│   │   ├── Contact.jsx / .css      ← Contact form + links
│   │   └── Footer.jsx / .css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
├── vercel.json
└── package.json
```

---

## ⚙️ Local Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Run Locally
```bash
# 1. Clone the repo
git https://github.com/fahmid2003/Portfolio
cd fahmid-portfolio

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev

# 4. Open in browser
# http://localhost:5173
```

### Build for Production
```bash
npm run build
npm run preview
```

---

## 🌐 Deploy to Vercel (Step-by-Step)

### Option A — Vercel CLI
```bash
npm install -g vercel
vercel login
vercel
```

### Option B — Vercel Dashboard (Recommended)
1. Push this project to a **GitHub repo**
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repo
4. Settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**
6. Your site will be live at `https://YOUR-PROJECT.vercel.app`




## 👤 Author
**Al Shahriar Fahmid**
Computer Programming and Analysis — George Brown College
alshahriarfahmid4@gmail.com
