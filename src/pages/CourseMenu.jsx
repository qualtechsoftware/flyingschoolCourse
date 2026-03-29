import { Link } from 'react-router-dom'
import { CockpitSvg, TropopauseSvg, WingLiftSvg, CautionSvg } from '../components/Illustrations'

const chapters = [
  {
    number: 1,
    title: 'Intro & The Physical Properties of Air',
    description:
      'The foundational topic every student pilot needs — understand the atmosphere as a physical medium, why density is king, how altitude changes your aircraft\'s performance, and the exam traps to avoid.',
    color: '#2874a6',
    Illustration: CockpitSvg,
    items: [
      {
        to: '/ch1/revision',
        label: 'Revision Notes',
        icon: '📝',
        desc: 'Concise bullet-point revision — key formula, memory aids, altitude table, performance links, exam mistakes & 3 golden facts.',
        Illustration: TropopauseSvg,
        accent: '#d68910',
      },
      {
        to: '/ch1/summary',
        label: 'Summary',
        icon: '📖',
        desc: 'Full lesson with analogies & explanations — atmosphere basics, density, compressibility, altitude effects, and common student mistakes.',
        Illustration: WingLiftSvg,
        accent: '#2874a6',
      },
      {
        to: '/ch1/qna',
        label: 'Questions & Answers',
        icon: '❓',
        desc: '6 exam-style multiple choice questions with detailed answer explanations to test your understanding.',
        Illustration: CautionSvg,
        accent: '#8e44ad',
      },
    ],
  },
]

function CourseMenu() {
  return (
    <div className="course-menu">
      <section className="course-hero">
        <p className="eyebrow">✈ Flying School — Ground Training</p>
        <h2 className="course-title">The Atmosphere: Pilot Essentials</h2>
        <p className="course-desc">
          This course covers the introduction and physical properties of air —
          the foundational knowledge every student pilot needs before moving
          into Principles of Flight. Select a chapter below to begin studying.
        </p>
        <div className="course-stats">
          <div className="stat-item">
            <span className="stat-num">{chapters.length}</span>
            <span className="stat-label">{chapters.length === 1 ? 'Chapter' : 'Chapters'}</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">3</span>
            <span className="stat-label">Resources / Ch</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">5</span>
            <span className="stat-label">Sections</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">6</span>
            <span className="stat-label">Questions</span>
          </div>
        </div>
      </section>

      {chapters.map((ch) => (
        <div key={ch.number} className="chapter-block">
          <div className="chapter-header" style={{ '--ch-color': ch.color }}>
            <span className="chapter-num" style={{ background: ch.color }}>
              Ch {ch.number}
            </span>
            <div className="chapter-info">
              <h3 className="chapter-title">{ch.title}</h3>
              <p className="chapter-desc">{ch.description}</p>
            </div>
            <div className="chapter-illus">
              <ch.Illustration />
            </div>
          </div>

          <div className="chapter-items">
            {ch.items.map((item) => (
              <Link
                to={item.to}
                key={item.label}
                className="chapter-item"
                style={{ '--ci-accent': item.accent }}
              >
                <div className="ci-top">
                  <span className="ci-icon">{item.icon}</span>
                  <h4 className="ci-label">{item.label}</h4>
                </div>
                {item.Illustration && (
                  <div className="ci-illus">
                    <item.Illustration />
                  </div>
                )}
                <p className="ci-desc">{item.desc}</p>
                <span className="ci-cta" style={{ background: item.accent }}>
                  Open →
                </span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default CourseMenu
