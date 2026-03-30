import {
  PressureFormuaSvg, StaticPressureSvg, PressureAltitudeSvg,
  StaticPortSvg, HapsMnemonicSvg, PressureBlanketsSvg, CautionSvg,
} from '../components/Illustrations'

export const chapterMeta = {
  number: 2,
  title: 'Static Pressure',
  color: '#2874a6',
}

/* ═══════════════════════════════════════════════════════════════
   SUMMARY CONTENT
   ═══════════════════════════════════════════════════════════════ */

export function SummaryContent() {
  return (
    <div className="summary-page">

      {/* ── INTRO ── */}
      <section className="glass-card summary-intro">
        <h3>Before We Begin &mdash; Why Should You Care About This?</h3>
        <p>Every instrument in your cockpit that tells you <strong>where you are vertically</strong> &mdash; your altimeter, your vertical speed indicator, your airspeed indicator &mdash; runs on one thing: <strong>static pressure</strong>.</p>
        <p>If you don&rsquo;t understand static pressure, you cannot truly understand why those instruments work, when they lie to you, and what to do when they fail. This is not background theory. This is the foundation of your instrument scan on every single flight.</p>
      </section>

      {/* ── SECTION 1 ── */}
      <section className="glass-card study-section">
        <h3><span className="section-icon">📐</span> SECTION 1 &mdash; What Is Pressure? Starting From Zero</h3>
        <PressureFormuaSvg />
        <h4 className="smry-sub">The Everyday Version</h4>
        <p>Imagine you&rsquo;re lying on a soft mattress. Your body weight presses down on the mattress &mdash; the mattress pushes back up on you with exactly the same force. That pushing force, spread across the area of your body, is pressure.</p>
        <p>Now imagine standing on a crowded bus. The weight of all the people above you on a double-decker is pressing down through the floor. People on the lower deck feel more &ldquo;squash&rdquo; than people on the upper deck. This is almost exactly how atmospheric pressure works.</p>
        <div className="key-idea-box">
          <strong>Key insight:</strong> Pressure is not just force. It is force spread over an area.
        </div>
        <h4 className="smry-sub">The Formula That Defines Pressure</h4>
        <div className="formula-box">
          <p><strong>Pressure = Force (Newtons) / Area (square metres)</strong></p>
        </div>
        <p>The unit is therefore <strong>Newtons per square metre (N/m&sup2;)</strong>.</p>
        <p>1 N/m&sup2; has a special name: <strong>1 Pascal (Pa)</strong> &mdash; named after the French mathematician Blaise Pascal who studied pressure in the 17th century.</p>
        <p><strong>Scale check:</strong> 1 Pascal is a tiny amount of pressure. To give you a feel &mdash; a single &pound;1 coin resting flat on a table exerts roughly 100 Pascals on the surface beneath it. The atmosphere at sea level pushes down with about <strong>101,325 Pascals</strong>. That is an enormous force &mdash; roughly equivalent to a 1-tonne car sitting on every square metre of surface.</p>
        <h4 className="smry-sub">Why Aviation Uses Hectopascals (hPa)</h4>
        <p>Working in units of 101,325 is inconvenient. Aviation uses <strong>hectopascals (hPa)</strong> instead:</p>
        <ul className="exact-list">
          <li>&ldquo;Hecto&rdquo; = 100</li>
          <li>So 1 hPa = 100 Pa</li>
          <li>Sea level standard pressure = <strong>1013.25 hPa</strong></li>
        </ul>
        <div className="analogy-box">
          🔧 <strong>Critical fact:</strong> 1 hPa = 1 millibar (mb). These are the same thing. Older charts and weather reports use &ldquo;mb&rdquo; &mdash; your altimeter uses &ldquo;hPa.&rdquo; Don&rsquo;t let this confuse you. They are identical.
        </div>
        <div className="recap-box">
          <h4>📋 SECTION 1 RECAP</h4>
          <ul>
            <li>Pressure = Force &divide; Area, measured in <strong>N/m&sup2;</strong></li>
            <li>1 N/m&sup2; = 1 <strong>Pascal (Pa)</strong> &mdash; a very small unit</li>
            <li>Aviation uses <strong>hectopascals (hPa)</strong> where 1 hPa = 100 Pa</li>
            <li>1 hPa = 1 millibar &mdash; same thing, different name</li>
            <li>Sea level standard pressure = <strong>1013.25 hPa</strong></li>
          </ul>
        </div>
      </section>

      {/* ── SECTION 2 ── */}
      <section className="glass-card study-section">
        <h3><span className="section-icon">🌀</span> SECTION 2 &mdash; What Is Static Pressure?</h3>
        <PressureBlanketsSvg />
        <h4 className="smry-sub">The Name Explained</h4>
        <p>The word &ldquo;static&rdquo; comes from the Greek <em>statikos</em> &mdash; meaning &ldquo;causing to stand&rdquo; or &ldquo;at rest.&rdquo; Static pressure is the pressure of air in its <strong>stationary, undisturbed state</strong>. The air is simply sitting there, not moving relative to the aircraft&rsquo;s skin &mdash; it is just <em>present</em>, pressing inward.</p>
        <p>This distinguishes it from <strong>dynamic pressure</strong>, which is the additional pressure created by the air&rsquo;s <em>movement</em> (we will study that in a future topic). For now, all we need is this:</p>
        <div className="key-idea-box">
          <strong>Static pressure = the pressure of still, undisturbed air pressing on a surface</strong>
        </div>
        <h4 className="smry-sub">Where Does Static Pressure Come From?</h4>
        <p>Think of the atmosphere as an enormous stack of heavy blankets piled on top of the Earth. Each blanket is a layer of air. Every blanket pressing down adds to the weight felt by the blankets below.</p>
        <div className="analogy-box">
          <strong>Daily Life Analogy:</strong> You&rsquo;ve probably noticed that your ears &ldquo;pop&rdquo; when you drive up a mountain road or take off in a pressurised aircraft. That pop is your ears equalising to a change in the weight of air pressing down on your eardrum. You are literally feeling static pressure change.
        </div>
        <p>At sea level, the entire weight of the atmosphere above is pressing down &mdash; roughly 101,325 Pa of force on every square metre of surface, including your body right now.</p>
        <p>As you go higher, there are fewer layers of air above you. Less weight. Less pressure. Static pressure decreases with altitude &mdash; always, steadily, and predictably.</p>
        <div className="recap-box">
          <h4>📋 SECTION 2 RECAP</h4>
          <ul>
            <li>&ldquo;Static&rdquo; means the air is at rest &mdash; not moving relative to the surface</li>
            <li>Static pressure is caused by the <strong>weight of the atmosphere above</strong> pressing down</li>
            <li>More air above = more weight = more pressure &rarr; <strong>sea level has highest static pressure</strong></li>
            <li>As altitude increases, static pressure <strong>decreases steadily</strong></li>
            <li>Static pressure acts on your aircraft at all times &mdash; on the ground and in flight</li>
          </ul>
        </div>
      </section>

      {/* ── SECTION 3 ── */}
      <section className="glass-card study-section">
        <h3><span className="section-icon">🎈</span> SECTION 3 &mdash; A Critical Property: Static Pressure Acts Equally in All Directions</h3>
        <StaticPressureSvg />
        <h4 className="smry-sub">The Balloon Demonstration</h4>
        <p>Blow up a balloon and hold it. The air inside presses outward on the rubber &mdash; equally in all directions. The top of the balloon, the bottom, the sides &mdash; all experience the same pressure from the air inside.</p>
        <p>This is a fundamental property of pressure in a fluid (and remember, air is a fluid). Pressure at any given point acts <strong>equally in all directions simultaneously</strong>.</p>
        <div className="analogy-box">
          <strong>Flying Analogy:</strong> Your aircraft sitting at the gate has static pressure pressing on its nose, its tail, its top, its bottom, its left side, its right side &mdash; all equally. 101,325 Pascals per square metre on every surface, all at once. It doesn&rsquo;t tip forward or backward because the pressure is balanced on all sides.
        </div>
        <h4 className="smry-sub">What This Means for Your Aircraft</h4>
        <p>Your textbook states: <em>&ldquo;Static pressure will exert the same force per square metre on all surfaces of an aeroplane.&rdquo;</em></p>
        <p>This seems almost too simple, but it has a profound implication. The static pressure itself doesn&rsquo;t push your aircraft in any particular direction. It doesn&rsquo;t create lift. It doesn&rsquo;t create drag. It is a <strong>balanced, omnidirectional pressing force</strong> that your aircraft sits inside, like a submarine in water.</p>
        <p>What creates the aerodynamic forces you care about (lift and drag) is the <em>difference</em> in pressure caused by the wing&rsquo;s shape changing the airflow. Static pressure is the background &mdash; the baseline. The wing creates a <em>departure</em> from that baseline. But we are getting ahead of ourselves &mdash; that&rsquo;s aerodynamics, which builds on this foundation.</p>
        <div className="recap-box">
          <h4>📋 SECTION 3 RECAP</h4>
          <ul>
            <li>Static pressure acts <strong>equally on all surfaces</strong> of the aircraft &mdash; top, bottom, sides, nose, tail</li>
            <li>Because it is equal on all sides, it doesn&rsquo;t push the aircraft in any particular direction</li>
            <li>It is the background pressure &mdash; aerodynamic forces are created by <em>changes</em> from this background</li>
            <li>The aircraft is always immersed in static pressure, like a submarine in water</li>
          </ul>
        </div>
      </section>

      {/* ── SECTION 4 ── */}
      <section className="glass-card study-section">
        <h3><span className="section-icon">⬆️</span> SECTION 4 &mdash; Static Pressure and Altitude: The Practical Pilot Connection</h3>
        <PressureAltitudeSvg />
        <h4 className="smry-sub">The Squashed Layers Model</h4>
        <p>Here is the most important mental model for understanding pressure and altitude:</p>
        <p>Imagine 10 people standing in a tower, each standing on the shoulders of the person below. The person at the bottom feels the weight of all 9 people above. The person at the top feels nobody above them. Now replace people with layers of air. Sea level = bottom of the tower (maximum weight above = maximum pressure). 40,000 ft = near the top (very little weight above = very low pressure).</p>
        <div className="altitude-table">
          <div className="table-head">Altitude</div>
          <div className="table-head">Approximate Static Pressure</div>
          <div className="table-cell">Sea level (ISA)</div>
          <div className="table-cell"><strong>1013.25 hPa</strong></div>
          <div className="table-cell">5,000 ft</div>
          <div className="table-cell">~843 hPa</div>
          <div className="table-cell">10,000 ft</div>
          <div className="table-cell">~697 hPa</div>
          <div className="table-cell">18,000 ft</div>
          <div className="table-cell">~500 hPa (pressure halves!)</div>
          <div className="table-cell">35,000 ft</div>
          <div className="table-cell">~238 hPa</div>
        </div>
        <p>Notice: pressure doesn&rsquo;t halve every 10,000 ft &mdash; it halves every approximately <strong>18,000 ft</strong>. This non-linear relationship is important to understand conceptually.</p>
        <h4 className="smry-sub">Why This Matters for Your Instruments</h4>
        <p>Your <strong>altimeter</strong> is nothing more than a barometer &mdash; a pressure-measuring device &mdash; with an altitude scale printed on it instead of a pressure scale. It works because there is a predictable, consistent relationship between static pressure and altitude (defined by the <strong>International Standard Atmosphere</strong> &mdash; a topic you&rsquo;ll study next).</p>
        <p>When static pressure decreases (you&rsquo;re going higher), your altimeter reads a higher altitude. When static pressure increases (you&rsquo;re descending), it reads lower. That is the entire principle.</p>
        <div className="analogy-box">
          <strong>Flying Analogy:</strong> Imagine you had a ruler that measured height by how squashed a spring was. At sea level, the heavy air squashes the spring almost flat. At 35,000 ft, the light air barely squashes the spring at all. By measuring how squashed the spring is, you can read off your altitude. That is your altimeter &mdash; except the &ldquo;spring&rdquo; is a sealed, flexible capsule called an <strong>aneroid capsule</strong>.
        </div>
        <h4 className="smry-sub">The Symbol and Unit &mdash; Getting Them Right in Exams</h4>
        <p>Aviation exams are precise. You must know:</p>
        <ul className="exact-list">
          <li>Symbol for static pressure: <strong>lower-case p</strong></li>
          <li>Unit: <strong>N/m&sup2;</strong> or equivalently <strong>Pa (Pascal)</strong> or in aviation <strong>hPa (hectopascal)</strong></li>
          <li>Sea level ISA standard: <strong>1013.25 hPa</strong> (you will write this number many times in your career)</li>
        </ul>
        <div className="recap-box">
          <h4>📋 SECTION 4 RECAP</h4>
          <ul>
            <li>Static pressure decreases with altitude &mdash; steadily and predictably</li>
            <li>Sea level ISA = <strong>1013.25 hPa</strong>; pressure roughly halves every 18,000 ft</li>
            <li>Your altimeter is a <strong>pressure gauge</strong> &mdash; it reads altitude from static pressure</li>
            <li>Symbol = lower-case <strong>p</strong>, unit = <strong>N/m&sup2;</strong> = Pa, aviation unit = <strong>hPa</strong></li>
            <li>1 hPa = 1 millibar &mdash; the same unit, two names</li>
          </ul>
        </div>
      </section>

      {/* ── SECTION 5 ── */}
      <section className="glass-card study-section">
        <h3><span className="section-icon">✈️</span> SECTION 5 &mdash; Static Pressure on the Aircraft: Always Present</h3>
        <StaticPortSvg />
        <h4 className="smry-sub">You Cannot Escape It</h4>
        <p>Your textbook makes a quietly important statement: <em>&ldquo;An aircraft always has static pressure acting upon it.&rdquo;</em></p>
        <p>This is true on the ground, in the climb, at cruise, on final approach &mdash; there is no phase of flight where static pressure disappears. Even in space (which aircraft don&rsquo;t reach), static pressure doesn&rsquo;t switch off &mdash; it just approaches zero very gradually.</p>
        <p>This is why aircraft are designed to be <strong>pressure-tight</strong> at high altitude. At 40,000 ft, the outside static pressure is roughly 188 hPa &mdash; about 18% of sea level pressure. Without a pressurised fuselage maintaining cabin pressure artificially, passengers and crew would lose consciousness within minutes. The fuselage is fighting against the enormous difference between inside and outside static pressure.</p>
        <div className="analogy-box">
          <strong>Daily Life Analogy:</strong> You&rsquo;ve seen crisp packets (or any sealed air-filled bag) puff up when you take them to altitude. The static pressure outside drops, but the air inside the packet is sealed at a higher pressure &mdash; so the bag inflates. A pressurised airliner fuselage works on the same principle, just with very much stronger walls.
        </div>
        <h4 className="smry-sub">The Static Port</h4>
        <p>Aircraft measure static pressure through a small flush opening in the fuselage called the <strong>static port</strong> (or static vent). It is deliberately positioned where the airflow is as undisturbed as possible &mdash; so that the pressure being sensed is truly the ambient static pressure, not disturbed by the aircraft&rsquo;s movement through the air.</p>
        <p>This static pressure feeds directly into:</p>
        <ul className="exact-list">
          <li>The <strong>altimeter</strong></li>
          <li>The <strong>vertical speed indicator (VSI)</strong></li>
          <li>The <strong>airspeed indicator (ASI)</strong></li>
        </ul>
        <p>If the static port becomes blocked (by ice, insects, or a maintenance cover left in place), all three instruments fail simultaneously. This is a genuine in-flight emergency scenario, and it all traces back to this single concept: static pressure.</p>
        <div className="recap-box">
          <h4>📋 SECTION 5 RECAP</h4>
          <ul>
            <li>Static pressure <strong>always</strong> acts on an aircraft &mdash; there is no escape from it</li>
            <li>At altitude, the difference between cabin pressure and outside static pressure requires a strong pressurised fuselage</li>
            <li>Static pressure is measured through the <strong>static port</strong> on the fuselage</li>
            <li>The static port feeds the <strong>altimeter, VSI, and ASI</strong> simultaneously</li>
            <li>A blocked static port = three instruments fail at once &mdash; a critical emergency</li>
          </ul>
        </div>
      </section>

      {/* ── SECTION 6 ── */}
      <section className="glass-card study-section mistakes-card">
        <h3><span className="section-icon">⚠️</span> SECTION 6 &mdash; Common Student Mistakes on This Topic</h3>
        <CautionSvg />
        <p>Here are the errors that appear repeatedly in ground school and exams:</p>
        <div className="mistake-item">
          <p><strong>❌ Mistake 1: Confusing static pressure with dynamic pressure</strong></p>
          <p>Static pressure is the background, omnidirectional pressure of undisturbed air. Dynamic pressure is additional pressure caused by the air&rsquo;s <em>motion</em>. They are completely separate. Total pressure = static + dynamic &mdash; but that comes in a later topic. For now: static = still air, dynamic = moving air.</p>
        </div>
        <div className="mistake-item">
          <p><strong>❌ Mistake 2: Thinking 1 millibar and 1 hPa are different units</strong></p>
          <p>They are not. 1 hPa = 1 mb. Exactly. Some older documents, weather forecasts, and instructors use &ldquo;millibar.&rdquo; Your altimeter uses &ldquo;hPa.&rdquo; Same number. Same pressure. No conversion needed.</p>
        </div>
        <div className="mistake-item">
          <p><strong>❌ Mistake 3: Forgetting that static pressure acts equally on ALL surfaces</strong></p>
          <p>A common misconception is that static pressure &ldquo;pushes down&rdquo; on the aircraft. It does not &mdash; it pushes inward equally on every surface. It is balanced. Only <em>differences</em> in pressure (like those created by the wing&rsquo;s shape) produce net aerodynamic forces.</p>
        </div>
        <div className="mistake-item">
          <p><strong>❌ Mistake 4: Assuming pressure halves every 10,000 ft</strong></p>
          <p>This is a very common rough estimate that is wrong. Pressure approximately halves every <strong>18,000 ft</strong>. At 18,000 ft, pressure is roughly half of sea level. This matters when you are calculating pressure altitude or estimating instrument errors.</p>
        </div>
        <div className="mistake-item">
          <p><strong>❌ Mistake 5: Not knowing the standard sea level pressure value precisely</strong></p>
          <p>In exams, you will need: <strong>1013.25 hPa</strong>. Some students round to 1013 &mdash; fine for most purposes &mdash; but the precise value is 1013.25. Know both. The QNH setting on your altimeter sub-scale is always referenced to this standard.</p>
        </div>
        <div className="mistake-item">
          <p><strong>❌ Mistake 6: Thinking a blocked static port only affects the altimeter</strong></p>
          <p>It affects all three pressure instruments (altimeter, VSI, and ASI) simultaneously. Students often forget the VSI and ASI also depend on the static source.</p>
        </div>
      </section>

      {/* ── FINAL RECAP ── */}
      <section className="glass-card study-section golden-facts-card">
        <h3>FINAL OVERALL RECAP &mdash; The Four Pillars of Static Pressure</h3>
        <div className="final-idea">
          <p><strong>1. Definition:</strong> Static pressure is the omnidirectional force exerted by undisturbed air, measured in N/m&sup2; (Pascals). In aviation, we use <strong>hPa</strong> (= millibar).</p>
        </div>
        <div className="final-idea">
          <p><strong>2. Cause:</strong> It results from the <strong>weight of the atmosphere above</strong>. More air above = more weight = more pressure. Sea level pressure (ISA) = <strong>1013.25 hPa</strong>.</p>
        </div>
        <div className="final-idea">
          <p><strong>3. Behaviour with altitude:</strong> Static pressure <strong>decreases steadily</strong> with increasing altitude. It is not constant &mdash; it approximately halves every 18,000 ft.</p>
        </div>
        <div className="final-idea">
          <p><strong>4. Practical importance:</strong> Static pressure is the working principle behind the altimeter, VSI, and airspeed indicator. It enters the aircraft through the <strong>static port</strong>. A blocked static port disables all three instruments &mdash; understanding this begins with understanding static pressure itself.</p>
        </div>
      </section>

    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   REVISION CONTENT
   ═══════════════════════════════════════════════════════════════ */

export function RevisionContent() {
  return (
    <div className="revision-page">

      {/* 01 — Key Definitions */}
      <section className="glass-card study-section">
        <h3>01&ensp;Key Definitions</h3>
        <PressureFormuaSvg />
        <div className="altitude-table" style={{ gridTemplateColumns: '1fr 2fr' }}>
          <div className="table-head">Term</div>
          <div className="table-head">Definition / Exam Answer</div>
          <div className="table-cell"><strong>Static Pressure</strong></div>
          <div className="table-cell">The pressure exerted by the weight of the atmosphere on all surfaces equally, in all directions, by undisturbed (stationary) air. Symbol: lower-case <strong>p</strong>. Unit: N/m&sup2; (Pascal).</div>
          <div className="table-cell"><strong>Pascal (Pa)</strong></div>
          <div className="table-cell">The SI unit of pressure. 1 Pa = 1 N/m&sup2;. It is a small unit; sea-level atmospheric pressure &asymp; 101,325 Pa.</div>
          <div className="table-cell"><strong>Hectopascal (hPa)</strong></div>
          <div className="table-cell">The aviation unit of pressure. 1 hPa = 100 Pa. Used on altimeter sub-scales and weather reports. Identical to 1 millibar (mb).</div>
          <div className="table-cell"><strong>Millibar (mb)</strong></div>
          <div className="table-cell">Older meteorological unit. Exactly equal to 1 hPa. No conversion needed &mdash; they are the same value.</div>
          <div className="table-cell"><strong>ISA Sea-Level Pressure</strong></div>
          <div className="table-cell">The International Standard Atmosphere defines sea-level static pressure as 1013.25 hPa (= 1013.25 mb = 101,325 Pa).</div>
          <div className="table-cell"><strong>Static Port</strong></div>
          <div className="table-cell">A flush opening in the fuselage, positioned where airflow is undisturbed, through which ambient static pressure is sensed by instruments.</div>
          <div className="table-cell"><strong>Dynamic Pressure</strong></div>
          <div className="table-cell">The additional pressure created by air in motion (NOT static pressure). Symbol: q. Total pressure = static + dynamic.</div>
        </div>
      </section>

      {/* 02 — Core Concepts */}
      <section className="glass-card study-section">
        <h3>02&ensp;Core Concepts Frequently Examined</h3>
        <PressureAltitudeSvg />

        <h4 className="smry-sub">Concept 1 &mdash; What causes static pressure?</h4>
        <div className="key-idea-box">
          Static pressure is caused by the <strong>weight of the atmosphere pressing down</strong> on the air below it. The greater the mass of air above a given level, the higher the static pressure at that level. At sea level, the entire atmospheric column presses down; at altitude, there is less air above, so pressure is lower.
        </div>

        <h4 className="smry-sub">Concept 2 &mdash; Static pressure acts equally in all directions</h4>
        <div className="key-idea-box">
          At any point in a fluid (and air is a fluid), pressure acts <strong>equally on all surfaces simultaneously</strong> &mdash; top, bottom, left, right, nose, tail. Static pressure does not produce a net force in any direction. It does not create lift or drag. Only <em>differences</em> in pressure (such as those created by a wing&rsquo;s shape) produce aerodynamic forces.
        </div>

        <h4 className="smry-sub">Concept 3 &mdash; Static pressure decreases with altitude</h4>
        <div className="altitude-table">
          <div className="table-head">Altitude</div>
          <div className="table-head">Pressure (hPa)</div>
          <div className="table-head">Note</div>
          <div className="table-cell">Sea level (ISA)</div>
          <div className="table-cell"><strong>1013.25 hPa</strong></div>
          <div className="table-cell"><em>Standard reference value &mdash; memorise exactly</em></div>
          <div className="table-cell">5,000 ft</div>
          <div className="table-cell">~843 hPa</div>
          <div className="table-cell"></div>
          <div className="table-cell">10,000 ft</div>
          <div className="table-cell">~697 hPa</div>
          <div className="table-cell"></div>
          <div className="table-cell"><strong>18,000 ft</strong></div>
          <div className="table-cell"><strong>~506 hPa</strong></div>
          <div className="table-cell"><em>Pressure halves here &mdash; exam favourite!</em></div>
          <div className="table-cell">35,000 ft</div>
          <div className="table-cell">~238 hPa</div>
          <div className="table-cell"><em>Typical jet cruise altitude</em></div>
          <div className="table-cell">40,000 ft</div>
          <div className="table-cell">~188 hPa</div>
          <div className="table-cell"><em>&asymp;18% of sea-level pressure</em></div>
        </div>
        <div className="analogy-box">
          ⚠️ <strong>Examiner&rsquo;s favourite fact:</strong> Static pressure approximately halves every 18,000 ft &mdash; NOT every 10,000 ft. The relationship is non-linear (logarithmic). This is the most commonly mis-stated figure in PPL/CPL written papers.
        </div>

        <h4 className="smry-sub">Concept 4 &mdash; Static pressure is always present on an aircraft</h4>
        <div className="key-idea-box">
          There is no phase of flight &mdash; ground roll, climb, cruise, approach, or parking &mdash; during which static pressure ceases to act. At very high altitude it approaches (but never reaches) zero. This &lsquo;always present&rsquo; nature is why it is called <strong>static</strong>: it is the permanent, background pressure of air in its stationary state.
        </div>
      </section>

      {/* 03 — Memory Tricks */}
      <section className="glass-card study-section">
        <h3>03&ensp;Memory Tricks &amp; Mnemonics</h3>
        <HapsMnemonicSvg />
        <p className="memory-aid">
          <strong>HAPS:</strong> H = Hectopascal is the aviation pressure unit. A = Always acts on the aircraft. P = Presses equally on all surfaces. S = Static means stationary air.
        </p>
        <p className="memory-aid">
          <strong>&ldquo;1013 is the key&rdquo;:</strong> Sea-level ISA pressure = 1013.25 hPa. Remember it as: &lsquo;1-0-1-3&rsquo; like a security code. You will write this number on every altimeter setting exercise.
        </p>
        <p className="memory-aid">
          <strong>&ldquo;Higher = lighter&rdquo;:</strong> Higher altitude &rarr; lighter air above &rarr; lower static pressure. The word &lsquo;lighter&rsquo; applies both to the weight of air above AND the lower pressure reading.
        </p>
        <p className="memory-aid">
          <strong>&ldquo;18 to halve&rdquo;:</strong> Pressure halves every 18,000 ft &mdash; NOT 10,000. The number 18 rhymes with &lsquo;halve the weight&rsquo;. Write it on your revision card.
        </p>
        <p className="memory-aid">
          <strong>&ldquo;1 hPa = 1 mb: same baby&rdquo;:</strong> Hectopascal and millibar are numerically identical. Never convert between them. Same number, same pressure, different name.
        </p>
        <p className="memory-aid">
          <strong>&ldquo;AVA fails together&rdquo;:</strong> A = Altimeter, V = VSI, A = ASI &mdash; all three are fed by the static port. Block the static port and all three AVA instruments fail simultaneously.
        </p>
      </section>

      {/* 04 — Typical Exam Questions */}
      <section className="glass-card study-section">
        <h3>04&ensp;Typical Exam Questions with Model Answers</h3>
        <StaticPortSvg />
        <p><em>Instructions: Cover the answers and attempt each question independently before reading the model answer.</em></p>

        <div className="mistake-item" style={{ borderLeftColor: 'var(--navy-700)', background: 'var(--sky-50)' }}>
          <p><strong>Q1. What is the SI unit of pressure, and what special name is given to this unit?</strong></p>
          <p>A: The SI unit of pressure is N/m&sup2; (Newtons per square metre). The special name given to 1 N/m&sup2; is one Pascal (Pa).</p>
        </div>
        <div className="mistake-item" style={{ borderLeftColor: 'var(--navy-700)', background: 'var(--sky-50)' }}>
          <p><strong>Q2. What unit of pressure is used in aviation, and how does it relate to the Pascal?</strong></p>
          <p>A: Aviation uses the hectopascal (hPa). The prefix &lsquo;hecto&rsquo; means 100, so 1 hPa = 100 Pa. It is numerically identical to 1 millibar (mb).</p>
        </div>
        <div className="mistake-item" style={{ borderLeftColor: 'var(--navy-700)', background: 'var(--sky-50)' }}>
          <p><strong>Q3. State the standard sea-level pressure in the International Standard Atmosphere.</strong></p>
          <p>A: 1013.25 hPa (also acceptable: 1013.25 mb or 101,325 Pa).</p>
        </div>
        <div className="mistake-item" style={{ borderLeftColor: 'var(--navy-700)', background: 'var(--sky-50)' }}>
          <p><strong>Q4. Why is pressure lower at high altitude than at sea level?</strong></p>
          <p>A: Because at high altitude there are fewer layers of air above the measurement point. Static pressure results from the weight of the atmosphere pressing down; with less air above, the weight (and therefore the pressure) is lower.</p>
        </div>
        <div className="mistake-item" style={{ borderLeftColor: 'var(--navy-700)', background: 'var(--sky-50)' }}>
          <p><strong>Q5. On which surfaces of an aircraft does static pressure act?</strong></p>
          <p>A: Static pressure acts equally on ALL surfaces of the aircraft &mdash; top, bottom, sides, nose, and tail &mdash; simultaneously and with equal force per unit area at a given altitude.</p>
        </div>
        <div className="mistake-item" style={{ borderLeftColor: 'var(--navy-700)', background: 'var(--sky-50)' }}>
          <p><strong>Q6. An aircraft is at 18,000 ft ISA. Approximately what is the static pressure, and what is significant about this altitude?</strong></p>
          <p>A: At 18,000 ft, static pressure is approximately 506 hPa &mdash; approximately half the sea-level value of 1013.25 hPa. This altitude is significant because it is the point at which static pressure is approximately halved. Pressure does not halve every 10,000 ft as students often assume.</p>
        </div>
        <div className="mistake-item" style={{ borderLeftColor: 'var(--navy-700)', background: 'var(--sky-50)' }}>
          <p><strong>Q7. Name the three flight instruments that use the aircraft&rsquo;s static pressure source.</strong></p>
          <p>A: The Altimeter, the Vertical Speed Indicator (VSI), and the Airspeed Indicator (ASI) all use static pressure from the aircraft&rsquo;s static port.</p>
        </div>
        <div className="mistake-item" style={{ borderLeftColor: 'var(--navy-700)', background: 'var(--sky-50)' }}>
          <p><strong>Q8. What is a static port, and why is its position on the fuselage important?</strong></p>
          <p>A: A static port is a small flush opening in the fuselage that allows ambient outside air pressure to reach the pressure instruments. Its position is carefully chosen where the airflow is minimally disturbed by the aircraft&rsquo;s movement, so that the pressure sensed is as close as possible to the true ambient (undisturbed) static pressure.</p>
        </div>
        <div className="mistake-item" style={{ borderLeftColor: 'var(--navy-700)', background: 'var(--sky-50)' }}>
          <p><strong>Q9. What are the immediate consequences of a blocked static port?</strong></p>
          <p>A: If the static port is blocked, the Altimeter, VSI, and ASI all simultaneously receive no updated pressure information. The altimeter will freeze at its last reading, the VSI will show zero rate of climb/descent, and the ASI will give erroneous or frozen readings. This is a critical instrument failure requiring use of the alternate static source (if fitted).</p>
        </div>
        <div className="mistake-item" style={{ borderLeftColor: 'var(--navy-700)', background: 'var(--sky-50)' }}>
          <p><strong>Q10. Explain why static pressure alone does not generate lift on an aircraft wing.</strong></p>
          <p>A: Static pressure acts equally on all surfaces of the wing &mdash; upper and lower. Because it is equal and omnidirectional, it produces no net upward force. Lift is generated by a difference in pressure between the upper and lower wing surfaces, which is created dynamically by the wing&rsquo;s shape (camber) accelerating airflow over the upper surface. This is dynamic, not static, pressure at work.</p>
        </div>
      </section>

      {/* 05 — Common Traps */}
      <section className="glass-card study-section mistakes-card">
        <h3>05&ensp;Common Traps &amp; Confusing Points</h3>
        <div className="altitude-table" style={{ gridTemplateColumns: '1fr 2fr' }}>
          <div className="table-head">Common Trap</div>
          <div className="table-head">The Correct Answer</div>
          <div className="table-cell" style={{ color: 'var(--red-500)', fontWeight: 700 }}>hPa &ne; hPa&times;100</div>
          <div className="table-cell">1 hPa = 100 Pa. Students sometimes write &lsquo;1 hPa = 0.01 Pa&rsquo; (inverting the relationship). Remember: hecto means 100, so hPa is LARGER than Pa, not smaller. 1013 hPa = 101,300 Pa.</div>
          <div className="table-cell" style={{ color: 'var(--red-500)', fontWeight: 700 }}>hPa vs mb: not the same name for different things</div>
          <div className="table-cell">These are exactly the same unit. 1 hPa = 1 mb. Period. No conversion. No difference. They are the same physical quantity with different historical names.</div>
          <div className="table-cell" style={{ color: 'var(--red-500)', fontWeight: 700 }}>Pressure halves every 10,000 ft</div>
          <div className="table-cell">Wrong. Pressure approximately halves every 18,000 ft. This appears in distractors on both PPL and CPL written papers. The pressure&ndash;altitude relationship is logarithmic, not linear.</div>
          <div className="table-cell" style={{ color: 'var(--red-500)', fontWeight: 700 }}>Static pressure pushes the aircraft downward</div>
          <div className="table-cell">Wrong. Static pressure acts equally on ALL surfaces &mdash; it is omnidirectional and balanced. It does not push the aircraft in any net direction. Only pressure differences create forces.</div>
          <div className="table-cell" style={{ color: 'var(--red-500)', fontWeight: 700 }}>Blocking the static port only affects the altimeter</div>
          <div className="table-cell">Wrong. The static port feeds all three instruments: Altimeter, VSI, and ASI. All three fail simultaneously on a blocked static port.</div>
          <div className="table-cell" style={{ color: 'var(--red-500)', fontWeight: 700 }}>Static pressure only acts when the aircraft is stationary</div>
          <div className="table-cell">Wrong. The word &lsquo;static&rsquo; refers to the undisturbed nature of the air, not to the aircraft being stationary. Static pressure acts on the aircraft continuously throughout all phases of flight including at cruise speed.</div>
          <div className="table-cell" style={{ color: 'var(--red-500)', fontWeight: 700 }}>Dynamic pressure and static pressure are interchangeable</div>
          <div className="table-cell">They are completely separate quantities. Static = omnidirectional background pressure from air&rsquo;s weight. Dynamic = additional pressure from air&rsquo;s motion. Total pressure = static + dynamic.</div>
        </div>
      </section>

    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   QUESTIONS
   ═══════════════════════════════════════════════════════════════ */

export const questions = [
  {
    id: 1,
    text: 'The altimeter in a typical light aircraft measures which physical property to determine altitude?',
    options: [
      { key: 'A', text: 'Temperature of the ambient air.' },
      { key: 'B', text: 'Static air pressure sensed through the static port.' },
      { key: 'C', text: 'Dynamic (pitot) pressure created by forward motion.' },
      { key: 'D', text: 'Air density calculated from humidity sensors.' },
    ],
    answer: 'B',
    explanation:
      'The altimeter works by sensing static air pressure through the static port. An evacuated aneroid capsule inside the instrument expands or contracts with changes in ambient static pressure, and a mechanical linkage translates that movement into an altitude indication on the dial.',
  },
  {
    id: 2,
    text: 'A pilot is departing from an airfield and sets QNH on the altimeter subscale. The altimeter will indicate:',
    options: [
      { key: 'A', text: 'Height above the airfield elevation.' },
      { key: 'B', text: 'Altitude above mean sea level.' },
      { key: 'C', text: 'Flight Level referenced to 1013.25 hPa.' },
      { key: 'D', text: 'Density altitude corrected for temperature.' },
    ],
    answer: 'B',
    explanation:
      'QNH is the atmospheric pressure at mean sea level for a given location and time. When set on the subscale, the altimeter reads altitude above mean sea level (AMSL). This is the standard reference used below the Transition Altitude to ensure terrain and obstacle clearance.',
  },
  {
    id: 3,
    text: 'In the International Standard Atmosphere (ISA), the sea-level temperature and pressure are:',
    options: [
      { key: 'A', text: '15\u00B0C and 1013.25 hPa.' },
      { key: 'B', text: '0\u00B0C and 1013.25 hPa.' },
      { key: 'C', text: '15\u00B0C and 1025.00 hPa.' },
      { key: 'D', text: '20\u00B0C and 1013.25 hPa.' },
    ],
    answer: 'A',
    explanation:
      'The ISA defines standard sea-level conditions as a pressure of 1013.25 hPa (29.92 inHg) and a temperature of 15\u00B0C (59\u00B0F). Temperature then decreases at approximately 2\u00B0C per 1,000 ft up to the tropopause at about 36,000 ft.',
  },
  {
    id: 4,
    text: 'The Vertical Speed Indicator (VSI) works by comparing the static pressure inside the capsule with the pressure in the instrument case. The case pressure changes slowly because:',
    options: [
      { key: 'A', text: 'The case is completely sealed with no connection to the static source.' },
      { key: 'B', text: 'The case is connected to the static source through a calibrated leak (metering orifice).' },
      { key: 'C', text: 'The case is connected to the pitot source rather than the static source.' },
      { key: 'D', text: 'The case contains a heating element that controls air expansion.' },
    ],
    answer: 'B',
    explanation:
      'The VSI case is connected to the static source through a calibrated leak (also called a metering orifice or restricted choke). This means the case pressure equalises with ambient pressure only slowly. The capsule, connected directly to the static source, responds immediately. The resulting pressure difference between capsule and case drives the needle and indicates rate of climb or descent.',
  },
  {
    id: 5,
    text: 'An aircraft is flying from a warm air mass into a significantly colder air mass without changing the altimeter subscale setting. The effect on the altimeter is that it will:',
    options: [
      { key: 'A', text: 'Under-read \u2014 true altitude will be higher than indicated.' },
      { key: 'B', text: 'Over-read \u2014 true altitude will be lower than indicated.' },
      { key: 'C', text: 'Remain accurate because the subscale corrects for temperature automatically.' },
      { key: 'D', text: 'Fluctuate rapidly between over-reading and under-reading.' },
    ],
    answer: 'B',
    explanation:
      'In colder-than-ISA conditions, the air column is compressed and pressure levels are pushed closer to the ground. The altimeter, calibrated to ISA, interprets the pressure it senses as a higher altitude than the aircraft\u2019s true position. The rule is: \u201CFrom high to low (temperature or pressure), look out below\u201D \u2014 your true altitude is lower than indicated.',
  },
  {
    id: 6,
    text: 'Above the Transition Altitude, all aircraft are required to set their altimeter subscale to:',
    options: [
      { key: 'A', text: 'The local QNH for the nearest aerodrome.' },
      { key: 'B', text: 'QFE for terrain clearance reference.' },
      { key: 'C', text: '1013.25 hPa (standard pressure) to read Flight Levels.' },
      { key: 'D', text: 'The regional QNH issued by the area control centre.' },
    ],
    answer: 'C',
    explanation:
      'Above the Transition Altitude, all aircraft set 1013.25 hPa (standard pressure) on the subscale. This provides a common reference so that all aircraft in the same airspace share the same vertical datum, ensuring safe vertical separation. Altitude indications based on 1013 are called Flight Levels (e.g. FL350 = 35,000 ft on 1013).',
  },
]
