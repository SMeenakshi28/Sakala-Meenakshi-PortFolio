import { ExternalLink, Github } from 'lucide-react'

const safe = 'noopener noreferrer'

export default function ProjectCard({ project: p }) {
  const { title, description, features = [], plannedFeatures = [], technologies = [],
    status = 'Completed', projectType = 'Individual', liveDemo = '', github = '', featured = false } = p
  return (
    <article className={`card project ${featured ? 'is-featured' : ''}`}>
      <div className="badges">
        <span className={`badge ${status === 'In Progress' ? 'badge-wip' : 'badge-done'}`}>{status}</span>
        <span className="badge">{projectType}</span>
        {featured && <span className="badge badge-feat">Featured</span>}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      {features.length > 0 && <ul>{features.map(f => <li key={f}>{f}</li>)}</ul>}
      {plannedFeatures.length > 0 && (
        <ul className="planned">{plannedFeatures.map(f => <li key={f}>Planned: {f}</li>)}</ul>
      )}
      {technologies.length > 0 && (
        <div className="tags">{technologies.map(t => <span className="tag" key={t}>{t}</span>)}</div>
      )}
      {(liveDemo || github) && (
        <div className="actions">
          {liveDemo && <a className="btn btn-primary" href={liveDemo} target="_blank" rel={safe}><ExternalLink size={16} /> Live Demo</a>}
          {github && <a className="btn" href={github} target="_blank" rel={safe}><Github size={16} /> GitHub</a>}
        </div>
      )}
    </article>
  )
}
