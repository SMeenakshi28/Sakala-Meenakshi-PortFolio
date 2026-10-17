import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = ['About', 'Projects', 'Skills', 'Education', 'Certifications', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <div className="container nav-in">
        <a href="#top" className="brand">S. Meenakshi</a>
        <button className="menu-btn" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
        <nav className={open ? 'open' : ''} aria-label="Main">
          {links.map(l => <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a>)}
        </nav>
      </div>
    </header>
  )
}
