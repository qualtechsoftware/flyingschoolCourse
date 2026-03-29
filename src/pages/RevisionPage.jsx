import { DensitySvg, AirFluidSvg, TropopauseSvg, PerformanceSvg, CautionSvg, GoldenSvg, CockpitSvg, WingLiftSvg } from '../components/Illustrations'

const sectionOne = [
  'Mass flow (kg/s) = density × velocity × area — the key quantity for lift',
  'Density is the most important atmospheric property for a pilot',
  'Lower layers of atmosphere are denser — compressed by weight of air above',
]

const sectionTwo = [
  'Air has real mass — 100-knot wind can destroy structures; air is not "nothing"',
  'Compressible fluid — can be squeezed, unlike water',
  'Very low viscosity — even tiny pressure differences set air in motion',
  'Always flows: high pressure → low pressure',
  'Wing exploits pressure differences to redirect airflow and generate lift',
]

const sectionThree = [
  'Tropopause ≈ 36,000 ft — temperature stops falling; Stratosphere begins above',
  'Most weather is confined below the Tropopause — jets cruise at/above it for smooth air',
  'Pressure falls steadily all the way up — no plateau',
]

const sectionFour = [
  'Hot day → ↓ density → longer take-off roll, reduced climb rate',
  'Cold day → ↑ density → better performance',
  'High-altitude airfield = physically thinner air = same effect as a hot day',
  'Density Altitude = the altitude your aircraft thinks it\u2019s at (performance-wise)',
  'Altimeter reads pressure — incorrect QNH setting = wrong altitude reading → CFIT risk',
]

const sectionFive = [
  '❌ Wrong: "Only pressure changes with altitude" → Density changes too',
  '❌ Wrong: "Cold air is thin" → Cold air is denser (better performance)',
  '❌ Wrong: "Fly faster = always fine" → Speed has structural limits; drag increases with V²',
  '❌ Wrong: "Atmosphere is constant" → Temp, pressure, humidity vary daily',
  '❌ Wrong: Confusing altitude with density altitude — aircraft feel density, not geography',
]

const goldenFacts = [
  '1.  Density ↓  →  must fly faster to maintain lift',
  '2.  Temperature stops falling at ≈ 36,000 ft  (Tropopause)',
  '3.  Air is compressible, low-viscosity, and always flows high → low pressure.',
]

function RevisionPage() {
  return (
    <div className="revision-page">
      <section className="glass-card revision-hero revision-hero-grid">
        <div>
          <p className="eyebrow">✈ Revision Notes</p>
          <h2>Intro &amp; The Physical Properties of Air</h2>
        </div>
        <div className="inline-images">
          <CockpitSvg />
          <WingLiftSvg />
          <TropopauseSvg />
        </div>
      </section>

      <section className="glass-card study-section">
        <h3>1.  The Single Most Important Idea</h3>
        <DensitySvg />
        <div className="formula-box">
          <p>Air density = mass of air per unit volume (kg/m³)</p>
          <p>↓ Density  →  ↓ Mass flow over wing  →  ↓ Lift</p>
          <p>To restore lift: increase airspeed  →  restores mass flow (kg/s)</p>
        </div>
        <ul className="exact-list">
          {sectionOne.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="memory-aid">
          <strong>Memory aid:</strong> &ldquo;Thin air, fast pair&rdquo; — thin air demands faster speed to keep lift the same.
        </p>
      </section>

      <section className="glass-card study-section">
        <h3>2.  Physical Properties of Air</h3>
        <AirFluidSvg />
        <ul className="exact-list">
          {sectionTwo.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="memory-aid">
          <strong>Memory aid:</strong> &ldquo;Air has ACT&rdquo; — Air is a fluid with real mass that Compresses and is Thin (low viscosity).
        </p>
      </section>

      <section className="glass-card study-section">
        <h3>3.  How the Atmosphere Changes with Altitude</h3>
        <TropopauseSvg />
        <div className="altitude-table">
          <div className="table-head">Property</div>
          <div className="table-head">Change with ↑ altitude</div>
          <div className="table-head">Stops changing?</div>
          <div className="table-cell">Pressure</div>
          <div className="table-cell">↓ Steadily</div>
          <div className="table-cell">Never (up to 40,000 ft)</div>
          <div className="table-cell">Density</div>
          <div className="table-cell">↓ Steadily</div>
          <div className="table-cell">Never</div>
          <div className="table-cell">Temperature</div>
          <div className="table-cell">↓ Steadily</div>
          <div className="table-cell">≈ 36,000 ft — Tropopause</div>
        </div>
        <ul className="exact-list">
          {sectionThree.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="memory-aid">
          <strong>Memory aid:</strong> &ldquo;PPT falls, T stops at Tropo&rdquo; — Pressure, density (ρ), Temperature all fall… but T stops at 36,000 ft.
        </p>
      </section>

      <section className="glass-card study-section">
        <h3>4.  Density → Pilot Performance Link</h3>
        <PerformanceSvg />
        <ul className="exact-list">
          {sectionFour.map((item) => (
            <li
              key={item}
              className={
                item.startsWith('Hot day') ? 'hot' : item.startsWith('Cold day') ? 'cold' : ''
              }
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="glass-card study-section mistakes-card">
        <h3>5.  Common Exam Mistakes</h3>
        <CautionSvg />
        <ul className="exact-list">
          {sectionFive.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="glass-card study-section golden-facts-card">
        <h3>3 Golden Facts to Memorise</h3>
        <GoldenSvg />
        <ul className="exact-list">
          {goldenFacts.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default RevisionPage
