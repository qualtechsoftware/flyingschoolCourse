import {
  CockpitSvg, WingLiftSvg, DensitySvg,
  AirFluidSvg, TropopauseSvg, CautionSvg, GoldenSvg,
} from '../components/Illustrations'

export const chapterMeta = {
  number: 1,
  title: 'Intro & The Physical Properties of Air',
  color: '#2874a6',
}

export function SummaryContent() {
  return (
    <div className="summary-page">
      <section className="glass-card summary-intro">
        <CockpitSvg />
        <h3>Before We Begin — Why Should You Care About This?</h3>
        <p>Imagine you&rsquo;re driving a car. You don&rsquo;t think much about the road beneath your tyres — it&rsquo;s just there. But what if the road could become thinner, softer, or less grippy depending on where you drove? You&rsquo;d study the road very carefully, wouldn&rsquo;t you?</p>
        <p>For a pilot, the atmosphere is your road. Your aircraft doesn&rsquo;t sit on anything solid — it&rsquo;s entirely held up by air. So understanding air isn&rsquo;t optional. It is the foundation of everything you will learn in Principles of Flight.</p>
      </section>

      <section className="glass-card study-section">
        <h3><span className="section-icon">🌍</span> SECTION 1 — What Is the Atmosphere?</h3>
        <DensitySvg />
        <h4 className="smry-sub">The Big Picture</h4>
        <p>The atmosphere is a blanket of gases that wraps around the Earth, held in place by gravity. It&rsquo;s not nothingness — it is a physical medium, just like water is a medium for a fish or the ocean is a medium for a ship.</p>
        <div className="analogy-box">
          <strong>Daily Life Analogy:</strong> Think of a swimming pool. A swimmer is supported by water. The swimmer pushes water backwards, and that reaction pushes the swimmer forward. Now replace the swimmer with an aircraft, and replace the water with air. The aircraft pushes air, and the air pushes back — generating lift and thrust reactions. The key difference? Air is about 800 times less dense than water, so the aircraft must move much faster to get the same support.
        </div>
        <h4 className="smry-sub">Why the Atmosphere Matters for Lift</h4>
        <p>The wing of an aircraft works by changing the properties of the air flowing over it — specifically its speed and pressure. The atmosphere provides the raw material (air) that the wing works with.</p>
        <p>Here&rsquo;s the single most important idea in this entire topic:</p>
        <div className="key-idea-box">
          🔑 <strong>KEY IDEA:</strong> The property of air that matters most is its density — how much &ldquo;stuff&rdquo; (mass) is packed into each cubic metre of air.
        </div>
        <p>Think of density like the thickness of a milkshake. A thick milkshake gives your straw a lot to work with. A watery milkshake gives very little resistance. Your wing is the straw. Denser air = more lift potential.</p>
        <div className="recap-box">
          <h4>📋 SECTION 1 RECAP</h4>
          <ul>
            <li>The atmosphere is the physical medium in which your aircraft flies</li>
            <li>It is not empty — it has substance, just like water</li>
            <li>The most important property of air, for a pilot, is its density</li>
            <li>The wing uses air to generate lift — less dense air means the wing has less to work with</li>
          </ul>
        </div>
      </section>

      <section className="glass-card study-section">
        <h3><span className="section-icon">💨</span> SECTION 2 — Air Has Mass (More Than You Think)</h3>
        <WingLiftSvg />
        <h4 className="smry-sub">Air Is Not &ldquo;Nothing&rdquo;</h4>
        <p>One of the most common misconceptions students bring into ground school is that air is essentially nothing — just empty space. This is completely wrong, and understanding why it&rsquo;s wrong will change how you think about flight forever.</p>
        <div className="analogy-box">
          <strong>Daily Life Analogy:</strong> Have you ever held your hand out of a moving car window at 60 km/h? You felt a genuine force pushing your hand back. Now imagine what happens at 100 knots (185 km/h). That same &ldquo;nothing&rdquo; air can tear apart poorly built structures. Hurricanes and tornadoes — both made of air — destroy buildings. Air has real, significant mass.
        </div>
        <h4 className="smry-sub">Mass Flow — The Hidden Concept</h4>
        <p>Here&rsquo;s a concept your textbook introduces quietly but is worth understanding deeply:</p>
        <div className="formula-box">
          <strong>Mass Flow</strong> = the mass of air (in kilograms) that flows over the wing every second (kg/s)
        </div>
        <p>Think of it like a river. If a wide, fast river flows through a turbine, it generates a lot of power. If the river becomes narrow and slow, it generates less. Your wing is the turbine. The river is the airflow.</p>
        <ul className="exact-list">
          <li>High density air flowing at a given speed → high mass flow → lots of lift potential</li>
          <li>Low density air flowing at the same speed → lower mass flow → less lift</li>
        </ul>
        <div className="analogy-box">
          <strong>Flying Analogy:</strong> This is exactly why aircraft take longer to get airborne on a hot day at a high-altitude airfield. The air is thin (low density), mass flow over the wing is reduced, and the wing needs more speed to generate the same lift. The runway needed becomes longer.
        </div>
        <h4 className="smry-sub">The Compensating Rule</h4>
        <p>Your textbook gives you a critical rule here:</p>
        <div className="key-idea-box">
          If air density decreases → to maintain the same lift → <strong>you must fly faster</strong>
        </div>
        <p>By flying faster, you push more air per second over the wing, compensating for the reduced mass in each cubic metre. You are restoring the mass flow to its required value.</p>
        <div className="recap-box">
          <h4>📋 SECTION 2 RECAP</h4>
          <ul>
            <li>Air has real mass and kinetic energy — it is not &ldquo;nothing&rdquo;</li>
            <li>Mass flow (kg/s) = how much air passes over the wing per second</li>
            <li>Lift depends on mass flow — density AND speed both affect it</li>
            <li>Lower density → must increase speed to maintain the same lift</li>
            <li>This is why performance degrades at high altitude and on hot days</li>
          </ul>
        </div>
      </section>

      <section className="glass-card study-section">
        <h3><span className="section-icon">🫧</span> SECTION 3 — Air as a Compressible Fluid</h3>
        <AirFluidSvg />
        <h4 className="smry-sub">Fluid? But It&rsquo;s Not Wet!</h4>
        <p>In physics, a fluid is anything that flows and takes the shape of its container. Both liquids and gases are fluids. Air is a fluid — it flows, it moves, it adjusts.</p>
        <p>What makes air special is that it is a <strong>compressible fluid</strong>. Unlike water (which barely compresses), air can be squeezed into a smaller volume. This has enormous implications in aviation, especially at high speeds.</p>
        <div className="analogy-box">
          <strong>Daily Life Analogy:</strong> Squeeze a plastic water bottle that&rsquo;s full of water — almost nothing happens. Now squeeze a balloon filled with air — it compresses, the pressure inside rises, and the air redistributes. Air is squeezable. Water is not (for practical purposes).
        </div>
        <h4 className="smry-sub">How Air Flows</h4>
        <p>Air flows from high pressure to low pressure — always. It will find any gap, any opening, and move toward lower pressure. The viscosity of air (its internal friction, its &ldquo;thickness as a fluid&rdquo;) is extremely low. This means even the tiniest pressure difference will set air molecules in motion.</p>
        <div className="analogy-box">
          <strong>Daily Life Analogy:</strong> Honey has high viscosity — it moves slowly and resists flow. Water has low viscosity. Air has even lower viscosity than water. The slightest pressure nudge and air molecules start moving.
        </div>
        <p>This is why the shape of a wing can manipulate airflow so effectively — even a gently curved surface creates small pressure differences that redirect the entire airflow, generating lift.</p>
        <div className="recap-box">
          <h4>📋 SECTION 3 RECAP</h4>
          <ul>
            <li>Air is a fluid — it flows and takes the shape of its container</li>
            <li>Air is compressible — unlike water, it can be squeezed</li>
            <li>Air always flows from high pressure → low pressure</li>
            <li>Air has very low viscosity — even tiny pressure differences move it</li>
            <li>The wing exploits this by creating pressure differences to redirect airflow and generate lift</li>
          </ul>
        </div>
      </section>

      <section className="glass-card study-section">
        <h3><span className="section-icon">⬆️</span> SECTION 4 — How the Atmosphere Changes With Altitude</h3>
        <TropopauseSvg />
        <h4 className="smry-sub">The Layered Atmosphere</h4>
        <p>Think of the atmosphere as a stack of blankets on a bed. The lower blankets are squashed by the weight of all the blankets above them — they are compressed, dense, and heavy. The top blankets are loose, fluffy, and light. This is exactly how the atmosphere behaves.</p>
        <div className="key-idea-box">
          <strong>Key principle:</strong> The lower layers of the atmosphere contain the greater part of the total mass of the atmosphere — because all the air above is compressing them downward.
        </div>
        <h4 className="smry-sub">What Changes With Altitude?</h4>
        <p>As you climb, three things happen: pressure falls, density falls, and temperature falls.</p>
        <h4 className="smry-sub">The Tropopause — A Critical Boundary</h4>
        <p>Temperature doesn&rsquo;t keep falling forever. At approximately 36,000 ft (the Tropopause), the temperature stops falling and remains roughly constant as you enter the Stratosphere. This boundary is enormously important in aviation:</p>
        <ul className="exact-list">
          <li>Most jet airliners cruise just at or above this boundary</li>
          <li>Weather systems (which need temperature variation to develop) are mostly confined below the Tropopause</li>
          <li>Above it, the air is stable, clear, and smooth — ideal for cruise flight</li>
        </ul>
        <div className="analogy-box">
          <strong>Daily Life Analogy:</strong> Imagine a tall building. On the lower floors, the heating system is working — temperatures vary floor by floor. Above a certain floor, the heating stops and the temperature just plateaus. The Tropopause is that floor.
        </div>
        <h4 className="smry-sub">Why Pressure Falling Matters to You as a Pilot</h4>
        <p>As you climb, the pressure falls. Your altimeter works by measuring air pressure. If the pressure setting is not correctly managed, your altimeter will give you a false reading — you could think you&rsquo;re at 5,000 ft when you are actually much lower. This is not a theoretical concern — incorrect altimeter settings have caused controlled flight into terrain (CFIT) accidents.</p>
        <div className="recap-box">
          <h4>📋 SECTION 4 RECAP</h4>
          <ul>
            <li>The atmosphere is denser and more compressed at lower altitudes</li>
            <li>Pressure falls steadily all the way up</li>
            <li>Temperature falls steadily up to ~36,000 ft, then stays constant (Stratosphere)</li>
            <li>The boundary between these two regions is the Tropopause</li>
            <li>Density falls with altitude → aircraft performance reduces with altitude</li>
          </ul>
        </div>
      </section>

      <section className="glass-card study-section mistakes-card">
        <h3><span className="section-icon">⚠️</span> SECTION 5 — Common Student Mistakes on This Topic</h3>
        <CautionSvg />
        <p>Here are the errors students most frequently make — study these carefully:</p>
        <div className="mistake-item">
          <p><strong>❌ Mistake 1: &ldquo;Altitude affects only pressure, not density&rdquo;</strong></p>
          <p>Truth: Pressure, density, and temperature are all related. When pressure drops with altitude, density drops too. All three properties change.</p>
        </div>
        <div className="mistake-item">
          <p><strong>❌ Mistake 2: &ldquo;On a cold day, air is thinner&rdquo;</strong></p>
          <p>Truth: The opposite. Cold air is denser (molecules are more tightly packed). Hot air is less dense. This is why aircraft perform better on cold days.</p>
        </div>
        <div className="mistake-item">
          <p><strong>❌ Mistake 3: &ldquo;If I fly faster, I always generate more lift — problem solved&rdquo;</strong></p>
          <p>Truth: Flying faster does increase lift — but it also dramatically increases drag. There are structural speed limits. And on approach to land, you cannot simply fly at high speed. This is why density altitude matters so much for take-off and landing performance calculations.</p>
        </div>
        <div className="mistake-item">
          <p><strong>❌ Mistake 4: &ldquo;The atmosphere is uniform — it doesn&rsquo;t change much day to day&rdquo;</strong></p>
          <p>Truth: Temperature, pressure, and humidity all vary daily and seasonally. These variations directly affect your aircraft&rsquo;s performance and your altimeter readings.</p>
        </div>
        <div className="mistake-item">
          <p><strong>❌ Mistake 5: Confusing &ldquo;altitude&rdquo; with &ldquo;density altitude&rdquo;</strong></p>
          <p>Truth: Your aircraft doesn&rsquo;t care how high it is geographically. It only cares how dense the air is. A hot, humid day at a high-altitude airfield can give you the effective performance of being thousands of feet higher than you actually are.</p>
        </div>
      </section>

      <section className="glass-card study-section golden-facts-card">
        <h3>FINAL OVERALL RECAP — The Three Big Ideas</h3>
        <GoldenSvg />
        <div className="final-idea">
          <p><strong>1. Air has mass and density.</strong> The atmosphere is a real physical medium. Air density is the single most important atmospheric property for a pilot. Less dense air = less lift potential.</p>
        </div>
        <div className="final-idea">
          <p><strong>2. Mass flow governs lift.</strong> Your wing needs a certain mass of air flowing over it per second. If density drops, you must go faster to maintain that mass flow and therefore maintain lift.</p>
        </div>
        <div className="final-idea">
          <p><strong>3. The atmosphere changes with altitude.</strong> Pressure and density fall steadily with height. Temperature falls only to about 36,000 ft (the Tropopause), then levels off in the Stratosphere. These changes have direct, measurable effects on aircraft performance every single flight.</p>
        </div>
      </section>
    </div>
  )
}

const revSectionOne = [
  'Mass flow (kg/s) = density × velocity × area — the key quantity for lift',
  'Density is the most important atmospheric property for a pilot',
  'Lower layers of atmosphere are denser — compressed by weight of air above',
]
const revSectionTwo = [
  'Air has real mass — 100-knot wind can destroy structures; air is not "nothing"',
  'Compressible fluid — can be squeezed, unlike water',
  'Very low viscosity — even tiny pressure differences set air in motion',
  'Always flows: high pressure → low pressure',
  'Wing exploits pressure differences to redirect airflow and generate lift',
]
const revSectionThree = [
  'Tropopause ≈ 36,000 ft — temperature stops falling; Stratosphere begins above',
  'Most weather is confined below the Tropopause — jets cruise at/above it for smooth air',
  'Pressure falls steadily all the way up — no plateau',
]
const revSectionFour = [
  'Hot day → ↓ density → longer take-off roll, reduced climb rate',
  'Cold day → ↑ density → better performance',
  'High-altitude airfield = physically thinner air = same effect as a hot day',
  'Density Altitude = the altitude your aircraft thinks it\u2019s at (performance-wise)',
  'Altimeter reads pressure — incorrect QNH setting = wrong altitude reading → CFIT risk',
]
const revSectionFive = [
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

export function RevisionContent() {
  return (
    <div className="revision-page">
      <section className="glass-card study-section">
        <h3>1.  The Single Most Important Idea</h3>
        <div className="formula-box">
          <p>Air density = mass of air per unit volume (kg/m³)</p>
          <p>↓ Density  →  ↓ Mass flow over wing  →  ↓ Lift</p>
          <p>To restore lift: increase airspeed  →  restores mass flow (kg/s)</p>
        </div>
        <ul className="exact-list">
          {revSectionOne.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <p className="memory-aid">
          <strong>Memory aid:</strong> &ldquo;Thin air, fast pair&rdquo; — thin air demands faster speed to keep lift the same.
        </p>
      </section>
      <section className="glass-card study-section">
        <h3>2.  Physical Properties of Air</h3>
        <ul className="exact-list">
          {revSectionTwo.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <p className="memory-aid">
          <strong>Memory aid:</strong> &ldquo;Air has ACT&rdquo; — Air is a fluid with real mass that Compresses and is Thin (low viscosity).
        </p>
      </section>
      <section className="glass-card study-section">
        <h3>3.  How the Atmosphere Changes with Altitude</h3>
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
          {revSectionThree.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <p className="memory-aid">
          <strong>Memory aid:</strong> &ldquo;PPT falls, T stops at Tropo&rdquo; — Pressure, density (ρ), Temperature all fall… but T stops at 36,000 ft.
        </p>
      </section>
      <section className="glass-card study-section">
        <h3>4.  Density → Pilot Performance Link</h3>
        <ul className="exact-list">
          {revSectionFour.map((item) => (
            <li key={item} className={item.startsWith('Hot day') ? 'hot' : item.startsWith('Cold day') ? 'cold' : ''}>
              {item}
            </li>
          ))}
        </ul>
      </section>
      <section className="glass-card study-section mistakes-card">
        <h3>5.  Common Exam Mistakes</h3>
        <ul className="exact-list">
          {revSectionFive.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>
      <section className="glass-card study-section golden-facts-card">
        <h3>3 Golden Facts to Memorise</h3>
        <ul className="exact-list">
          {goldenFacts.map((fact) => <li key={fact}>{fact}</li>)}
        </ul>
      </section>
    </div>
  )
}

export const questions = [
  { id: 1, text: 'What is the most important property of air that affects the generation of lift?', options: [{ key: 'A', text: 'Temperature' }, { key: 'B', text: 'Air density' }, { key: 'C', text: 'Humidity' }, { key: 'D', text: 'Wind speed' }], answer: 'B', explanation: 'Air density (mass per unit volume) directly determines how much air mass flows over the wing per unit time. Less dense air means less mass flow, which reduces lift.' },
  { id: 2, text: 'If air density decreases, what must a pilot do to maintain the same lift force?', options: [{ key: 'A', text: 'Reduce airspeed to maintain laminar flow' }, { key: 'B', text: 'Increase airspeed to restore mass flow over the wing' }, { key: 'C', text: 'Increase angle of attack indefinitely' }, { key: 'D', text: 'Reduce aircraft weight' }], answer: 'B', explanation: 'Higher airspeed compensates for lower density by increasing the volume of air passing over the wing per second, thereby restoring the required mass flow (kg/s) to maintain lift.' },
  { id: 3, text: 'Air is described as a compressible fluid. What does this mean?', options: [{ key: 'A', text: 'Air can be heated and cooled' }, { key: 'B', text: 'Air can be squeezed into a smaller volume' }, { key: 'C', text: 'Air has no fixed shape and flows like water' }, { key: 'D', text: 'Air always maintains constant pressure' }], answer: 'B', explanation: 'Unlike water, air can be compressed \u2014 squeezed into a smaller volume. This is significant at high aircraft speeds where compressibility effects become pronounced.' },
  { id: 4, text: 'In which direction does air naturally flow?', options: [{ key: 'A', text: 'From low pressure to high pressure' }, { key: 'B', text: 'From high temperature to low temperature' }, { key: 'C', text: 'From high pressure to low pressure' }, { key: 'D', text: 'From low density to high density' }], answer: 'C', explanation: 'Air always flows from an area of high pressure to an area of low pressure. This fundamental principle is what allows a wing to redirect airflow and generate lift.' },
  { id: 5, text: 'At approximately what altitude does the temperature in the atmosphere stop decreasing with altitude?', options: [{ key: 'A', text: '10,000 ft' }, { key: 'B', text: '20,000 ft' }, { key: 'C', text: '36,000 ft' }, { key: 'D', text: '50,000 ft' }], answer: 'C', explanation: 'Temperature decreases steadily with altitude up to approximately 36,000 ft \u2014 the Tropopause. Above this level, in the Stratosphere, temperature remains roughly constant.' },
  { id: 6, text: 'What happens to air pressure as altitude increases?', options: [{ key: 'A', text: 'It increases steadily' }, { key: 'B', text: 'It remains constant' }, { key: 'C', text: 'It decreases steadily' }, { key: 'D', text: 'It decreases up to 36,000 ft then stays constant' }], answer: 'C', explanation: 'Pressure decreases steadily with increasing altitude throughout the troposphere and stratosphere (up to at least 40,000 ft). Unlike temperature, pressure does not plateau at the Tropopause.' },
  { id: 7, text: 'On a hot day at a high-altitude airfield, a pilot should expect:', options: [{ key: 'A', text: 'Shorter take-off run and improved climb performance' }, { key: 'B', text: 'Normal take-off and climb performance' }, { key: 'C', text: 'Longer take-off run and reduced climb performance' }, { key: 'D', text: 'Better engine performance due to reduced air resistance' }], answer: 'C', explanation: 'Hot air is less dense. At a high-altitude airfield, the air is already thin. Combined, these reduce mass flow over the wing and through the engine, resulting in longer take-off runs and a reduced rate of climb.' },
  { id: 8, text: 'Which statement about the lower layers of the atmosphere is correct?', options: [{ key: 'A', text: 'The lower layers contain the least amount of the total air mass' }, { key: 'B', text: 'The lower layers are the least dense part of the atmosphere' }, { key: 'C', text: 'The lower layers contain the greater part of the total mass of the atmosphere' }, { key: 'D', text: 'Air density is equal throughout all layers' }], answer: 'C', explanation: 'Because air is compressible, the weight of all the air above compresses the lower layers. This means most of the atmosphere\u2019s total mass is concentrated in the lower layers.' },
  { id: 9, text: 'Mass flow over a wing is defined as the mass of air passing over the wing per unit time. Which formula correctly expresses mass flow?', options: [{ key: 'A', text: 'Mass flow = Pressure \u00D7 Temperature' }, { key: 'B', text: 'Mass flow = Density \u00D7 Velocity \u00D7 Area' }, { key: 'C', text: 'Mass flow = Lift \u00D7 Velocity' }, { key: 'D', text: 'Mass flow = Weight + Density' }], answer: 'B', explanation: 'Mass flow (kg/s) = density (\u03C1) \u00D7 velocity (V) \u00D7 cross-sectional area (A). This shows that both density and velocity affect how much air mass passes over the wing per second.' },
  { id: 10, text: 'A pilot is operating at an aerodrome with a field elevation of 6,000 ft on a day when the temperature is 35\u00B0C above ISA. Compared to sea-level ISA conditions, the aircraft will experience:', options: [{ key: 'A', text: 'Increased air density and improved performance' }, { key: 'B', text: 'Reduced air density due to both altitude and high temperature' }, { key: 'C', text: 'Normal performance since temperature and altitude effects cancel out' }, { key: 'D', text: 'Improved performance due to reduced aerodynamic drag' }], answer: 'B', explanation: 'Both high altitude and high temperature reduce air density. The two effects are additive, significantly increasing density altitude and degrading aircraft performance.' },
  { id: 11, text: 'The boundary between the Troposphere and the Stratosphere is called the Tropopause. In the Stratosphere, temperature:', options: [{ key: 'A', text: 'Continues to decrease with altitude at the same lapse rate' }, { key: 'B', text: 'Increases rapidly with altitude' }, { key: 'C', text: 'Remains approximately constant with altitude' }, { key: 'D', text: 'Decreases rapidly then increases' }], answer: 'C', explanation: 'Above the Tropopause (approximately 36,000 ft), temperature remains roughly constant through the lower Stratosphere.' },
  { id: 12, text: 'An aircraft altimeter is essentially a pressure-measuring instrument. If a pilot uses an incorrect QNH setting, the most serious risk is:', options: [{ key: 'A', text: 'The airspeed indicator will give false readings' }, { key: 'B', text: 'The aircraft will indicate an incorrect altitude, potentially leading to CFIT' }, { key: 'C', text: 'The magnetic compass will be affected' }, { key: 'D', text: 'The aircraft will experience turbulence' }], answer: 'B', explanation: 'An incorrect QNH causes the altimeter to display an incorrect altitude. If the indicated altitude is higher than actual, the aircraft may be closer to terrain \u2014 a primary cause of Controlled Flight Into Terrain (CFIT).' },
  { id: 13, text: 'The viscosity of air can best be described as:', options: [{ key: 'A', text: 'Very high \u2014 air strongly resists flow' }, { key: 'B', text: 'Moderate \u2014 comparable to water' }, { key: 'C', text: 'Very low \u2014 even minute pressure differences can set air molecules in motion' }, { key: 'D', text: 'Variable \u2014 viscosity increases with temperature' }], answer: 'C', explanation: 'Air has extremely low viscosity. Even tiny pressure differences created by a wing\u2019s cambered surface are sufficient to redirect large volumes of airflow and generate lift.' },
  { id: 14, text: 'Why do most jet airliners cruise at or just above the Tropopause (approximately 35,000\u201339,000 ft)?', options: [{ key: 'A', text: 'The air is warmer above the Tropopause, reducing fuel burn' }, { key: 'B', text: 'Weather systems are mostly confined below the Tropopause, offering smooth air; fuel efficiency is also better in thinner air for jets' }, { key: 'C', text: 'The regulatory ceiling for jets is 36,000 ft' }, { key: 'D', text: 'The engines produce more thrust above the Tropopause' }], answer: 'B', explanation: 'The Tropopause acts as a natural ceiling for most weather systems. Cruising above it gives smooth air and better fuel economy for jet aircraft at cruise Mach numbers.' },
  { id: 15, text: 'An aircraft is climbing from sea level to FL350. Assuming standard atmospheric conditions, which correctly describes the changes in pressure, density, and temperature?', options: [{ key: 'A', text: 'All three decrease steadily throughout the climb' }, { key: 'B', text: 'Pressure and density decrease steadily; temperature decreases to approximately 36,000 ft then remains constant' }, { key: 'C', text: 'Pressure decreases; density and temperature remain constant above 10,000 ft' }, { key: 'D', text: 'Temperature decreases steadily; pressure and density remain constant' }], answer: 'B', explanation: 'Pressure and density decrease steadily. Temperature decreases at approximately 2\u00B0C per 1,000 ft until ~36,000 ft (the Tropopause), above which it remains at approximately \u221256.5\u00B0C.' },
  { id: 16, text: 'A student states: \u2018On a cold winter day, the air is thin so I need a longer take-off run.\u2019 The examiner\u2019s correct response is:', options: [{ key: 'A', text: 'Correct \u2014 cold air has reduced density' }, { key: 'B', text: 'Incorrect \u2014 cold air is denser than warm air, so performance actually improves on cold days' }, { key: 'C', text: 'Correct \u2014 cold air has higher viscosity' }, { key: 'D', text: 'Incorrect \u2014 temperature has no effect on take-off distance' }], answer: 'B', explanation: 'Cold air is denser than warm air because cooler temperatures cause air molecules to pack more tightly together. Take-off distance is shorter on cold days, not longer.' },
  { id: 17, text: 'In the context of aircraft performance, \u2018Density Altitude\u2019 is best defined as:', options: [{ key: 'A', text: 'The actual altitude above mean sea level' }, { key: 'B', text: 'The altitude in the ISA at which the current air density would be found' }, { key: 'C', text: 'The altitude corrected for temperature only' }, { key: 'D', text: 'The pressure altitude corrected for magnetic variation' }], answer: 'B', explanation: 'Density Altitude represents the altitude in the ISA at which the prevailing air density would be found. It is density \u2014 not geography \u2014 that determines aerodynamic and engine performance.' },
  { id: 18, text: 'During a high-altitude cruise, an aircraft encounters an area where OAT is significantly warmer than ISA. The pilot should expect:', options: [{ key: 'A', text: 'Improved performance due to warmer, more energetic air' }, { key: 'B', text: 'No change \u2014 temperature does not affect cruise performance' }, { key: 'C', text: 'Reduced air density, which may reduce engine performance' }, { key: 'D', text: 'Increased air density, requiring lower power' }], answer: 'C', explanation: 'Warmer-than-ISA air is less dense. Engine performance decreases in less dense air. The crew must account for this in fuel planning and performance calculations.' },
]
