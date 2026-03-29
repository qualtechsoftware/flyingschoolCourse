import { NavLink, Route, Routes } from 'react-router-dom'
import CourseMenu from './pages/CourseMenu'
import SummaryPage from './pages/SummaryPage'
import RevisionPage from './pages/RevisionPage'
import QnAPage from './pages/QnAPage'
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
          <NavLink to="/" end>Course Menu</NavLink>
          <span className="nav-divider">|</span>
          <span className="nav-group-label">Ch 1</span>
          <NavLink to="/ch1/revision">Revision</NavLink>
          <NavLink to="/ch1/summary">Summary</NavLink>
          <NavLink to="/ch1/qna">Q&amp;A</NavLink>
        </nav>
      </header>

      <main className="page-wrap">
        <Routes>
          <Route path="/" element={<CourseMenu />} />
          <Route path="/ch1/summary" element={<SummaryPage />} />
          <Route path="/ch1/revision" element={<RevisionPage />} />
          <Route path="/ch1/qna" element={<QnAPage />} />
        </Routes>
      </main>

      <footer className="page-footer">
        Flying School Ground Training — The Atmosphere Module
      </footer>
    </div>
  )
}

export default App
