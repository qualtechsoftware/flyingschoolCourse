import CourseMenu from './pages/CourseMenu'
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
      </header>

      <main className="page-wrap">
        <CourseMenu />
      </main>

      <footer className="page-footer">
        Flying School Ground Training — The Atmosphere Module
      </footer>
    </div>
  )
}

export default App
