import { useState } from 'react'

export default function ChapterAccordion({ chapter }) {
  const { chapterMeta, SummaryContent, RevisionContent, questions } = chapter

  const [open, setOpen] = useState({})
  const [selected, setSelected] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [showAnswers, setShowAnswers] = useState(false)

  const toggle = (key) => setOpen((prev) => ({ ...prev, [key]: !prev[key] }))

  const pick = (q, key) => {
    if (submitted) return
    setSelected((prev) => {
      if (q.multi) {
        const cur = prev[q.id] || []
        const next = cur.includes(key) ? cur.filter((k) => k !== key) : [...cur, key]
        return { ...prev, [q.id]: next }
      }
      return { ...prev, [q.id]: key }
    })
  }

  const allPicked = questions.length > 0 && questions.every((q) => {
    const val = selected[q.id]
    return q.multi ? Array.isArray(val) && val.length > 0 : !!val
  })

  const isCorrect = (q) => {
    const val = selected[q.id]
    if (q.multi) {
      if (!Array.isArray(val)) return false
      const sorted = [...val].sort()
      const ans = [...q.answer].sort()
      return sorted.length === ans.length && sorted.every((v, i) => v === ans[i])
    }
    return val === q.answer
  }

  const correctCount = questions.filter(isCorrect).length
  const pct = questions.length ? Math.round((correctCount / questions.length) * 100) : 0

  const handleSubmit = () => setSubmitted(true)
  const retake = () => { setSelected({}); setSubmitted(false); setShowAnswers(false) }

  return (
    <div className="chapter-block">
      <div className="chapter-header-bar" style={{ borderLeftColor: chapterMeta.color }}>
        <span className="chapter-num" style={{ background: chapterMeta.color }}>
          {chapterMeta.number}
        </span>
        <h3 className="chapter-title">{chapterMeta.title}</h3>
      </div>

      {/* Summary */}
      <div className="accordion-item">
        <button className={`accordion-trigger${open.summary ? ' open' : ''}`} onClick={() => toggle('summary')}>
          <span className="acc-label"><span className="acc-icon">📖</span> Summary</span>
          <span className="acc-toggle">{open.summary ? '−' : '+'}</span>
        </button>
        {open.summary && (
          <div className="accordion-panel">
            <SummaryContent />
          </div>
        )}
      </div>

      {/* Revision Notes */}
      <div className="accordion-item">
        <button className={`accordion-trigger${open.revision ? ' open' : ''}`} onClick={() => toggle('revision')}>
          <span className="acc-label"><span className="acc-icon">📝</span> Revision Notes</span>
          <span className="acc-toggle">{open.revision ? '−' : '+'}</span>
        </button>
        {open.revision && (
          <div className="accordion-panel">
            <RevisionContent />
          </div>
        )}
      </div>

      {/* Q&A */}
      <div className="accordion-item">
        <button className={`accordion-trigger${open.qna ? ' open' : ''}`} onClick={() => toggle('qna')}>
          <span className="acc-label"><span className="acc-icon" style={{ color: '#e74c3c' }}>?</span> Questions &amp; Answers</span>
          <span className="acc-toggle">{open.qna ? '−' : '+'}</span>
        </button>
        {open.qna && (
          <div className="accordion-panel">
            <p className="qna-intro">Test your understanding — answer every question then submit.</p>

            {questions.map((q, idx) => {
              const userVal = selected[q.id]
              const isMulti = !!q.multi
              const userKeys = isMulti ? (Array.isArray(userVal) ? userVal : []) : []
              return (
                <div className="glass-card qna-card" key={q.id}>
                  <p className="qna-q">
                    <strong>Q{idx + 1}.</strong> {q.text}
                    {isMulti && <span className="qna-multi-badge">Multi-select</span>}
                  </p>
                  <div className="qna-opts">
                    {q.options.map((o) => {
                      let cls = 'qna-opt'
                      const isSel = isMulti ? userKeys.includes(o.key) : userVal === o.key
                      if (isSel) cls += ' selected'
                      if (showAnswers) {
                        const isAns = isMulti ? q.answer.includes(o.key) : o.key === q.answer
                        if (isAns) cls += ' correct'
                        else if (isSel) cls += ' wrong'
                      }
                      return (
                        <button key={o.key} className={cls} onClick={() => pick(q, o.key)}>
                          <span className="opt-key">{isMulti ? (isSel ? '☑' : '☐') : o.key}</span> {o.text}
                        </button>
                      )
                    })}
                  </div>
                  {showAnswers && (
                    <p className="qna-explanation"><strong>Explanation:</strong> {q.explanation}</p>
                  )}
                </div>
              )
            })}

            {!submitted ? (
              <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                <button
                  className={`qna-btn qna-btn-submit${allPicked ? '' : ' disabled'}`}
                  onClick={allPicked ? handleSubmit : undefined}
                >
                  Submit Assessment
                </button>
              </div>
            ) : (
              <section className="glass-card qna-results">
                <h3 className="qna-results-title">Your Results</h3>
                <div className="qna-results-ring">
                  <svg viewBox="0 0 120 120" className="qna-ring-svg">
                    <circle cx="60" cy="60" r="52" fill="none" stroke="#e8ecf0" strokeWidth="10" />
                    <circle
                      cx="60" cy="60" r="52" fill="none"
                      stroke={pct >= 80 ? '#27ae60' : pct >= 50 ? '#f39c12' : '#e74c3c'}
                      strokeWidth="10" strokeLinecap="round"
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
                <div className="qna-result-btns">
                  {!showAnswers && (
                    <button className="qna-btn qna-btn-reveal" onClick={() => setShowAnswers(true)}>
                      Reveal Answers
                    </button>
                  )}
                  <button className="qna-btn qna-btn-retake" onClick={retake}>
                    Retake Quiz
                  </button>
                </div>
              </section>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
