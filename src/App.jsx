import { NavLink, Navigate, Route, Routes } from 'react-router-dom'
import IntroPage from './pages/IntroPage'
import RevisionPage from './pages/RevisionPage'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">
          <span className="brand-tag">
            <span className="plane-icon">✈</span> Flying School
          </span>
          <h1>The Atmosphere: Pilot Essentials</h1>
        </div>
        <nav className="nav-links">
          <NavLink to="/intro">Intro &amp; Concepts</NavLink>
          <NavLink to="/revision">Revision Notes</NavLink>
        </nav>
      </header>

      <main className="page-wrap">
        <Routes>
          <Route path="/" element={<Navigate to="/intro" replace />} />
          <Route path="/intro" element={<IntroPage />} />
          <Route path="/revision" element={<RevisionPage />} />
        </Routes>
      </main>

      <footer className="page-footer">
        Flying School Ground Training — The Atmosphere Module
      </footer>
    </div>
  )
}

export default App
