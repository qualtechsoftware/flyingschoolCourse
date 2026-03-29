import { useState } from 'react'
import { CockpitSvg } from '../components/Illustrations'

const questions = [
  {
    id: 1,
    text: 'The primary function of the atmosphere in relation to fixed-wing aircraft flight is to:',
    options: [
      { key: 'A', text: 'Provide a vacuum environment for minimal drag.' },
      { key: 'B', text: 'Supply oxygen to the passengers.' },
      { key: 'C', text: 'Act as the physical fluid medium that the wing\u2019s shape acts upon to generate lift.' },
      { key: 'D', text: 'Generate forward thrust through kinetic energy.' },
    ],
    answer: 'C',
    explanation:
      'Just like water for a boat, the atmosphere provides the physical substance (\u201Cthickness\u201D) that the airfoil pushes against to create lift.',
  },
  {
    id: 2,
    text: 'Assuming an aircraft maintains a constant true airspeed, what will happen to the mass flow of air over the wing if the air density decreases?',
    options: [
      { key: 'A', text: 'The mass flow will increase.' },
      { key: 'B', text: 'The mass flow will remain constant.' },
      { key: 'C', text: 'The mass flow will decrease.' },
      { key: 'D', text: 'The mass flow will fluctuate unpredictably.' },
    ],
    answer: 'C',
    explanation:
      'Mass flow is directly dependent on density. If the air is \u201Cthinner\u201D (less dense), there are fewer molecules to flow over the wing in a given second, meaning mass flow drops.',
  },
  {
    id: 3,
    text: 'An aircraft is climbing to a higher altitude where the air density is significantly lower. To maintain the exact same lift force as it had at a lower altitude, the aircraft must:',
    options: [
      { key: 'A', text: 'Decrease its speed through the air.' },
      { key: 'B', text: 'Increase its speed through the air.' },
      { key: 'C', text: 'Maintain the exact same speed.' },
      { key: 'D', text: 'Lower its landing gear.' },
    ],
    answer: 'B',
    explanation:
      'If density drops, mass flow drops, causing lift to drop. To compensate and scoop up the required amount of air molecules per second, the aircraft must fly faster.',
  },
  {
    id: 4,
    text: 'How does atmospheric pressure behave as altitude increases from mean sea level up to 40,000 ft?',
    options: [
      { key: 'A', text: 'It falls steadily initially, then remains constant above 36,000 ft.' },
      { key: 'B', text: 'It falls steadily and continuously.' },
      { key: 'C', text: 'It remains constant.' },
      { key: 'D', text: 'It falls until 10,000 ft and then increases.' },
    ],
    answer: 'B',
    explanation:
      'Atmospheric pressure falls steadily all the way up. (It\u2019s temperature that stops falling at 36,000 ft).',
  },
  {
    id: 5,
    text: 'In the standard atmosphere, the environmental temperature falls steadily with increasing altitude up to a certain point. At approximately what altitude does the temperature stop dropping and remain roughly constant?',
    options: [
      { key: 'A', text: '10,000 ft' },
      { key: 'B', text: '18,000 ft' },
      { key: 'C', text: '36,000 ft' },
      { key: 'D', text: '45,000 ft' },
    ],
    answer: 'C',
    explanation:
      'Temperature drops continuously until it hits the boundary of the stratosphere at roughly 36,000 ft, after which it remains relatively constant.',
  },
  {
    id: 6,
    text: 'Because air is a compressible fluid, how is the mass of the atmosphere distributed?',
    options: [
      { key: 'A', text: 'The greater part of the mass is concentrated in the lower layers near sea level.' },
      { key: 'B', text: 'The mass is evenly distributed at all altitudes up to the stratosphere.' },
      { key: 'C', text: 'The greater part of the mass is concentrated in the stratosphere.' },
      { key: 'D', text: 'The mass density increases as altitude increases.' },
    ],
    answer: 'A',
    explanation:
      'Gravity pulls the air molecules down, compressing the bottom layers under the weight of the air above it. Therefore, the air at sea level is the most compressed and dense.',
  },
]

function QnAPage() {
  const [selected, setSelected] = useState({})
  const [revealed, setRevealed] = useState({})

  const pick = (qId, key) => {
    if (revealed[qId]) return
    setSelected((prev) => ({ ...prev, [qId]: key }))
  }

  const reveal = (qId) => {
    setRevealed((prev) => ({ ...prev, [qId]: true }))
  }

  const revealAll = () => {
    const all = {}
    questions.forEach((q) => { all[q.id] = true })
    setRevealed(all)
  }

  const reset = () => {
    setSelected({})
    setRevealed({})
  }

  const answeredCount = Object.keys(revealed).length
  const correctCount = questions.filter(
    (q) => revealed[q.id] && selected[q.id] === q.answer
  ).length
  const allAnswered = answeredCount === questions.length
  const pct = allAnswered ? Math.round((correctCount / questions.length) * 100) : 0

  return (
    <div className="qna-page">
      <section className="glass-card qna-hero qna-hero-grid">
        <div>
          <p className="eyebrow">✈ Chapter 1 — Questions &amp; Answers</p>
          <h2>Intro &amp; The Physical Properties of Air</h2>
          <p className="qna-hero-sub">
            Test your understanding with these exam-style multiple choice
            questions. Select an answer, then reveal the explanation.
          </p>
        </div>
        <CockpitSvg />
      </section>

      <section className="qna-controls glass-card">
        <div className="qna-score">
          <span className="qna-score-num">{answeredCount}</span>
          <span className="qna-score-label">/ {questions.length} answered</span>
          {answeredCount > 0 && (
            <>
              <span className="qna-score-sep">·</span>
              <span className="qna-score-correct">{correctCount} correct</span>
            </>
          )}
        </div>
        <div className="qna-btns">
          <button className="qna-btn qna-btn-reveal" onClick={revealAll}>
            Reveal All Answers
          </button>
          <button className="qna-btn qna-btn-reset" onClick={reset}>
            Reset
          </button>
        </div>
      </section>

      {questions.map((q) => {
        const isRevealed = revealed[q.id]
        const isCorrect = selected[q.id] === q.answer
        return (
          <section
            key={q.id}
            className={`glass-card qna-card${isRevealed ? (isCorrect ? ' qna-correct' : ' qna-wrong') : ''}`}
          >
            <h3 className="qna-q-num">Question {q.id}</h3>
            <p className="qna-q-text">{q.text}</p>

            <div className="qna-options">
              {q.options.map((opt) => {
                let cls = 'qna-opt'
                if (selected[q.id] === opt.key) cls += ' selected'
                if (isRevealed && opt.key === q.answer) cls += ' correct-answer'
                if (isRevealed && selected[q.id] === opt.key && opt.key !== q.answer)
                  cls += ' wrong-answer'
                return (
                  <button
                    key={opt.key}
                    className={cls}
                    onClick={() => pick(q.id, opt.key)}
                  >
                    <span className="opt-key">{opt.key}</span>
                    <span className="opt-text">{opt.text}</span>
                  </button>
                )
              })}
            </div>

            {!isRevealed && selected[q.id] && (
              <button className="qna-btn qna-btn-check" onClick={() => reveal(q.id)}>
                Check Answer
              </button>
            )}

            {isRevealed && (
              <div className={`qna-explanation ${isCorrect ? 'correct' : 'wrong'}`}>
                <p className="qna-verdict">
                  {isCorrect ? '✅ Correct!' : `❌ Incorrect — the answer is ${q.answer}`}
                </p>
                <p>{q.explanation}</p>
              </div>
            )}
          </section>
        )
      })}

      {allAnswered && (
        <section className="glass-card qna-results">
          <h3 className="qna-results-title">Your Results</h3>
          <div className="qna-results-ring">
            <svg viewBox="0 0 120 120" className="qna-ring-svg">
              <circle cx="60" cy="60" r="52" fill="none" stroke="#e8ecf0" strokeWidth="10" />
              <circle
                cx="60" cy="60" r="52"
                fill="none"
                stroke={pct >= 80 ? '#27ae60' : pct >= 50 ? '#f39c12' : '#e74c3c'}
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray={`${(pct / 100) * 327} 327`}
                transform="rotate(-90 60 60)"
              />
            </svg>
            <span className="qna-ring-pct">{pct}%</span>
          </div>
          <p className="qna-results-detail">
            You scored <strong>{correctCount}</strong> out of <strong>{questions.length}</strong>
          </p>
          <p className="qna-results-msg">
            {pct === 100
              ? 'Perfect score! You\'ve mastered this chapter.'
              : pct >= 80
                ? 'Great work! You have a strong grasp of the material.'
                : pct >= 50
                  ? 'Good effort — review the topics you missed and try again.'
                  : 'Keep studying — revisit the Revision Notes and Summary, then retry.'}
          </p>
          <button className="qna-btn qna-btn-reset" onClick={reset} style={{ alignSelf: 'center' }}>
            Retake Quiz
          </button>
        </section>
      )}
    </div>
  )
}

export default QnAPage
