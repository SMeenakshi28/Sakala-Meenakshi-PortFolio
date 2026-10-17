import { Mail, Linkedin, Github, MapPin } from 'lucide-react'
import Navbar from './components/Navbar.jsx'
import Section from './components/Section.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import { projects } from './data/projects.js'
import { certifications, achievements } from './data/certifications.js'

const EMAIL = 'sakalameenakshi13@gmail.com'
const LINKEDIN = 'https://www.linkedin.com/in/meenakshi-sakala-a72407306'
const GITHUB = 'https://github.com/SMeenakshi28'
// Put your resume at public/resume.pdf, then set this to true.
const HAS_RESUME = false

const skills = {
  'Programming': ['Python', 'Java', 'C', 'JavaScript'],
  'Web development': ['HTML', 'CSS', 'Flask', 'Streamlit'],
  'AI/ML and data': ['scikit-learn', 'Pandas', 'NumPy', 'Machine learning', 'Generative AI'],
  'Database and tools': ['SQL', 'Git', 'GitHub', 'VS Code'],
  'Fundamentals': ['Data Structures and Algorithms', 'Object-Oriented Programming'],
}

const education = [
  { degree: 'B.Tech, Computer Science Engineering (AI & ML)', school: 'KKR & KSR Institute of Technology and Sciences, Guntur, Andhra Pradesh', years: '2023–2027', score: 'CGPA 8.68' },
  { degree: 'Intermediate (MPC)', school: 'Bhashyam Junior College, Guntur', years: '2021–2023', score: '91.3%' },
  { degree: 'SSC', school: 'Bhashyam Educational Institutions', years: '2020–2021', score: '99%' },
]

const ext = { target: '_blank', rel: 'noopener noreferrer' }

export default function App() {
  // Featured projects first; otherwise keeps the order in projects.js
  const sorted = [...projects].sort((a, b) => Number(!!b.featured) - Number(!!a.featured))
  return (
    <>
      <Navbar />
      <main id="top">
        <section className="hero container">
          <div className="card hero-card">
            <h1>Sakala Meenakshi</h1>
            <p className="headline">Computer Science student (AI & ML) building practical technology</p>
            <p className="lead">Interested in artificial intelligence, machine learning and software development. Graduating in 2027.</p>
            <div className="actions">
              <a className="btn btn-primary" href="#projects">View Projects</a>
              <a className="btn" href="#contact">Contact Me</a>
              {HAS_RESUME && <a className="btn" href="/resume.pdf" download>Download Resume</a>}
            </div>
          </div>
        </section>

        <Section id="about" title="About Me">
          <p className="prose">I am a B.Tech Computer Science Engineering student specializing in AI & ML. I enjoy applying machine learning and programming to practical problems, and I am looking for fresher roles in AI/ML, software development and related areas.</p>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid">{sorted.map(p => <ProjectCard key={p.id} project={p} />)}</div>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid">
            {Object.entries(skills).map(([group, items]) => (
              <div className="card" key={group}>
                <h3>{group}</h3>
                <div className="tags">{items.map(s => <span className="tag" key={s}>{s}</span>)}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education">
          <div className="stack">
            {education.map(e => (
              <div className="card edu" key={e.degree}>
                <div><h3>{e.degree}</h3><p>{e.school}</p></div>
                <p className="meta">{e.years}<br /><strong>{e.score}</strong></p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="certifications" title="Certifications and Achievements">
          <div className="grid">
            {certifications.map(c => (
              <div className="card" key={c.id}>
                <h3>{c.title}</h3>
                <p>{c.issuer}</p>
                {c.link && <a className="btn" href={c.link} {...ext}>Verify</a>}
              </div>
            ))}
          </div>
          <h3 className="sub">Achievements</h3>
          <ul className="prose">{achievements.map(a => <li key={a}>{a}</li>)}</ul>
        </Section>

        <Section id="contact" title="Contact">
          <div className="card contact">
            <p><MapPin size={18} /> Andhra Pradesh, India</p>
            <div className="actions">
              <a className="btn btn-primary" href={`mailto:${EMAIL}`}><Mail size={16} /> {EMAIL}</a>
              <a className="btn" href={LINKEDIN} {...ext}><Linkedin size={16} /> LinkedIn</a>
              <a className="btn" href={GITHUB} {...ext}><Github size={16} /> GitHub</a>
            </div>
          </div>
        </Section>
      </main>
      <footer className="footer"><p>© {new Date().getFullYear()} Sakala Meenakshi</p></footer>
    </>
  )
}
