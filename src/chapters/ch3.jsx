import React from 'react';
import {
  ThermometerScaleSvg, MoleculeMotionSvg, DensityTriangleSvg,
  IdealGasLawSvg, DensityAltSvg, TempLapseRateSvg, CautionSvg,
} from '../components/Illustrations'

/* ─── meta ─── */
export const chapterMeta = {
  number: 3,
  title: 'Temperature & Air Density',
  color: '#2874a6',
};

/* ─────────────────────────────────────────────
   SUMMARY CONTENT
   ───────────────────────────────────────────── */
export function SummaryContent() {
  return (
    <div className="summary-page">

      {/* ── INTRO ── */}
      <section className="glass-card summary-intro">
        <h3>Before We Begin &mdash; Why Should You Care About This?</h3>
        <p>You have already learned that <strong>air density</strong> is the single most important atmospheric property for a pilot. Now we are going to go one level deeper and answer the question you should have been asking: <em>what actually controls density?</em></p>
        <p>The answer is three things &mdash; <strong>pressure, temperature, and humidity.</strong> You already understand pressure. This topic gives you temperature and density together, and shows you exactly how they are connected through a powerful formula called the <strong>Ideal Gas Law.</strong></p>
        <p>By the end of this topic you will understand:</p>
        <ul className="exact-list">
          <li>Why a hot day makes your aircraft feel like it is at a higher altitude than it actually is</li>
          <li>Why density does not simply mirror pressure as you climb</li>
          <li>Why the relationship between temperature and density is the opposite of what many students expect</li>
        </ul>
        <p>This is not background science. Every performance chart in your aircraft&rsquo;s flight manual, every take-off calculation, every density altitude computation &mdash; all of it rests on what you are about to learn.</p>
      </section>

      {/* ── SECTION 1 ── */}
      <section className="glass-card study-section">
        <h3><span className="section-icon">🌡️</span> SECTION 1 &mdash; Temperature: The Basics</h3>
        <h4 className="smry-sub">What Is Temperature, Really?</h4>
        <p>In everyday life, temperature tells you how hot or cold something feels. In physics, temperature is a measure of how fast the molecules in a substance are moving. Hot air = fast-moving molecules. Cold air = slow-moving, closely-packed molecules.</p>
        <div className="analogy-box">
          <strong>Daily Life Analogy:</strong> Imagine a box of table-tennis balls bouncing around. If you heat the box, the balls move faster, spread out, and hit the walls harder and more often. If you cool the box, they slow down, cluster together, and barely touch the walls. Temperature is essentially measuring the average speed of those balls.
        </div>
        <p>This is crucial because <strong>fast-moving, energetic (hot) molecules push each other apart</strong> &mdash; hot air expands and becomes less dense. Slow-moving, cool molecules cluster together &mdash; cold air contracts and becomes denser.</p>
        <h4 className="smry-sub">The Two Temperature Scales You Must Know</h4>
        <p>Aviation uses two temperature scales, and you need to be completely comfortable with both.</p>
        <p><strong>1. Degrees Celsius (&deg;C) &mdash; also called Centigrade</strong></p>
        <p>This is the everyday scale. It is measured relative to the <strong>freezing point of water.</strong></p>
        <ul className="exact-list">
          <li>Water freezes at <strong>0&deg;C</strong></li>
          <li>Water boils at <strong>100&deg;C</strong></li>
          <li>A comfortable room is about <strong>20&deg;C</strong></li>
          <li>ISA sea-level temperature is <strong>+15&deg;C</strong></li>
        </ul>
        <p><strong>2. Kelvin (K) &mdash; the Absolute Scale</strong></p>
        <p>The Kelvin scale is used in scientific calculations, including the Ideal Gas Law formula you will meet shortly. It is measured relative to <strong>absolute zero</strong> &mdash; the theoretical point at which all molecular motion stops completely. Nothing can be colder than absolute zero.</p>
        <p>The critical conversion:</p>
        <div className="formula-box">
          <p><strong>K = &deg;C + 273</strong></p>
        </div>
        <p>So 0&deg;C = 273 K. And +15&deg;C (ISA sea level) = 288 K.</p>
        <p><strong>Why does this matter?</strong> When you put temperature into the Ideal Gas Law formula, you <em>must</em> use Kelvin. If you use Celsius, the formula gives wrong (and sometimes nonsensical) answers. This is one of the most common calculation errors in CPL ground school.</p>
        <p className="memory-aid"><strong>Memory Aid:</strong> &ldquo;Kelvin = Celsius + 273.&rdquo; Think of 273 as the &ldquo;offset&rdquo; &mdash; you are just shifting the Celsius scale so that zero is at the coldest possible point rather than at the freezing point of water.</p>
        <ThermometerScaleSvg />
        <div className="altitude-table">
          <div className="table-head">Temperature Event</div>
          <div className="table-head">&deg;C</div>
          <div className="table-head">K</div>
          <div className="table-cell">Absolute zero</div>
          <div className="table-cell">&minus;273&deg;C</div>
          <div className="table-cell">0 K</div>
          <div className="table-cell">Water freezes</div>
          <div className="table-cell">0&deg;C</div>
          <div className="table-cell">273 K</div>
          <div className="table-cell">ISA sea level</div>
          <div className="table-cell">+15&deg;C</div>
          <div className="table-cell">288 K</div>
          <div className="table-cell">ISA Tropopause</div>
          <div className="table-cell">&minus;56.5&deg;C</div>
          <div className="table-cell">216.5 K</div>
          <div className="table-cell">Body temperature</div>
          <div className="table-cell">+37&deg;C</div>
          <div className="table-cell">310 K</div>
        </div>
        <h4 className="smry-sub">Temperature and Altitude</h4>
        <MoleculeMotionSvg />
        <p>You already know from the atmosphere topic that temperature decreases with altitude. Now let&rsquo;s be more precise:</p>
        <ul className="exact-list">
          <li>In the <strong>Troposphere</strong> (surface to ~36,000 ft): temperature decreases at approximately <strong>2&deg;C per 1,000 ft</strong> (this is the ISA standard lapse rate)</li>
          <li>At the <strong>Tropopause</strong> (~36,000 ft): temperature stops decreasing and levels off at approximately <strong>&minus;56.5&deg;C (216.5 K)</strong></li>
          <li>In the <strong>Stratosphere</strong> (above ~36,000 ft): temperature remains roughly constant</li>
        </ul>
        <div className="analogy-box">
          <strong>Flying Analogy:</strong> You have probably noticed that mountain peaks are always snow-covered, even in summer. The air at altitude is genuinely colder &mdash; not just because it is higher up, but because the atmosphere works like a very large heat engine, with the surface being the main heat source. The further you get from that source, the colder it gets &mdash; until you reach the Tropopause where the mechanism changes.
        </div>
        <TempLapseRateSvg />
        <div className="recap-box">
          <h4>📋 SECTION 1 RECAP</h4>
          <ul>
            <li>Temperature measures the speed of molecular motion &mdash; hot = fast = expanded = less dense</li>
            <li>Two scales: &deg;C (relative to freezing point of water) and K (relative to absolute zero)</li>
            <li>Conversion: <strong>K = &deg;C + 273</strong> &mdash; always use Kelvin in formulas</li>
            <li>ISA sea level = +15&deg;C = 288 K</li>
            <li>Temperature decreases ~2&deg;C per 1,000 ft in the Troposphere, then stays constant above ~36,000 ft</li>
          </ul>
        </div>
      </section>

      {/* ── SECTION 2 ── */}
      <section className="glass-card study-section">
        <h3><span className="section-icon">📦</span> SECTION 2 &mdash; Air Density: What It Is and What Controls It</h3>
        <h4 className="smry-sub">Defining Density</h4>
        <div className="formula-box">
          <p><strong>Density = Mass per unit volume</strong></p>
          <p>Symbol: &rho; (the Greek letter <em>rho</em>, pronounced &ldquo;row&rdquo;) &ensp; Unit: <strong>kg/m&sup3;</strong></p>
        </div>
        <p>The simplest mental image: imagine a cubic metre box filled with air. Density tells you how many kilograms of air are inside that box.</p>
        <div className="analogy-box">
          <strong>Daily Life Analogy:</strong> Think of a suitcase. A suitcase packed full of heavy winter clothes has high density &mdash; lots of mass in a given space. The same suitcase half-filled with empty bottles has low density &mdash; little mass, lots of empty space. Air density tells you how &ldquo;packed&rdquo; the air is with actual mass (molecules).
        </div>
        <p>At ISA sea level, the density of air is approximately <strong>1.225 kg/m&sup3;</strong> &mdash; meaning each cubic metre of air at sea level weighs about 1.225 kg, roughly the same as a litre bottle of water. That seems light, but when you consider a wing sweeping through millions of cubic metres of air per hour, it adds up to an enormous force.</p>
        <h4 className="smry-sub">The Three Things That Control Density</h4>
        <p>Your textbook gives you three variables that affect density. Understanding <em>why</em> each one matters is more important than just memorising the list.</p>
        <h4 className="smry-sub">Variable 1 &mdash; Static Pressure</h4>
        <div className="key-idea-box">
          <strong>If pressure increases &rarr; density increases (and vice versa)</strong>
        </div>
        <p>Think of it this way: pressure is what &ldquo;squeezes&rdquo; the air molecules together. High pressure pushes molecules closer &mdash; more molecules in the same space &mdash; higher density. Low pressure allows molecules to spread out &mdash; fewer molecules in the same space &mdash; lower density.</p>
        <div className="analogy-box">
          <strong>Analogy:</strong> A bicycle tyre has much higher pressure inside than the surrounding air. That is why the air inside is denser &mdash; the tyre walls are squeezing the molecules together. Let some air out (reduce pressure) and the remaining air has more space &mdash; lower density.
        </div>
        <p>This is why density <strong>decreases with altitude</strong> &mdash; as you climb, static pressure falls, and the air is less compressed.</p>
        <h4 className="smry-sub">Variable 2 &mdash; Temperature</h4>
        <div className="key-idea-box">
          <strong>If temperature increases &rarr; density decreases (and vice versa)</strong>
        </div>
        <p>This is the one that trips students up. Your instinct might be that &ldquo;more heat = more energy = more density.&rdquo; Wrong. Heat causes molecules to move faster and spread apart. When air is heated, it expands &mdash; the same number of molecules now occupies a larger volume. Density (mass per unit volume) therefore <strong>falls</strong>.</p>
        <div className="analogy-box">
          <strong>Daily Life Analogy:</strong> A hot air balloon works entirely on this principle. The burner heats the air inside the envelope. The heated air expands and becomes less dense than the cooler air outside. Because the inside air is less dense (lighter per cubic metre), the balloon floats upward. If you switch off the burner and the air cools, the balloon descends.
        </div>
        <div className="analogy-box">
          <strong>Another Analogy:</strong> Think of bread dough. When you add heat (baking), the air bubbles in the dough expand and the bread rises. The same mass of dough now occupies a larger volume &mdash; lower density. Cold dough is compact and dense. Hot bread is expanded and lighter.
        </div>
        <p>This means:</p>
        <ul className="exact-list">
          <li><strong>Hot day</strong> &rarr; air expanded &rarr; <strong>lower density</strong> &rarr; aircraft performs worse</li>
          <li><strong>Cold day</strong> &rarr; air contracted &rarr; <strong>higher density</strong> &rarr; aircraft performs better</li>
        </ul>
        <h4 className="smry-sub">Variable 3 &mdash; Humidity</h4>
        <div className="key-idea-box">
          <strong>If humidity increases &rarr; density decreases</strong>
        </div>
        <p>This is the most counterintuitive one. Surely wet, heavy air is denser than dry air? In fact, no &mdash; and here is why.</p>
        <p>Air is a mixture of gases. Dry air is mostly nitrogen (N&sub2;) and oxygen (O&sub2;), both of which are relatively heavy molecules. Water vapour (H&sub2;O) has a lower molecular weight than both nitrogen and oxygen.</p>
        <p><strong>The Molecular Weight Comparison:</strong></p>
        <ul className="exact-list">
          <li>Nitrogen (N&sub2;) molecular weight: <strong>28</strong></li>
          <li>Oxygen (O&sub2;) molecular weight: <strong>32</strong></li>
          <li>Water vapour (H&sub2;O) molecular weight: <strong>18</strong></li>
        </ul>
        <p>When water vapour enters the air, it displaces the heavier nitrogen and oxygen molecules. The total number of molecules in the air stays roughly the same, but the average molecular weight drops &mdash; so the air becomes <strong>lighter per unit volume &mdash; less dense</strong>.</p>
        <div className="analogy-box">
          <strong>Analogy:</strong> Imagine you have a bag of steel balls (dry air). You replace some steel balls with polystyrene balls (water vapour). The bag is still full, but it is now lighter overall. The water vapour &ldquo;dilutes&rdquo; the heavier air molecules.
        </div>
        <p><strong>Pilot implication:</strong> This is why hot, humid, tropical conditions (high temperature + high humidity) are particularly dangerous for take-off performance. Both temperature and humidity are independently reducing density. Combined, they can make sea-level conditions feel like being at several thousand feet of altitude.</p>
        <DensityTriangleSvg />
        <div className="recap-box">
          <h4>📋 SECTION 2 RECAP</h4>
          <ul>
            <li>Density = <strong>mass per unit volume</strong>, symbol &rho;, unit <strong>kg/m&sup3;</strong></li>
            <li>ISA sea-level density &asymp; <strong>1.225 kg/m&sup3;</strong></li>
            <li>Three variables control density:</li>
            <li>&ensp;&ensp;<strong>Pressure &uarr; &rarr; Density &uarr;</strong> (and Pressure &darr; &rarr; Density &darr;)</li>
            <li>&ensp;&ensp;<strong>Temperature &uarr; &rarr; Density &darr;</strong> (opposite relationship &mdash; very important)</li>
            <li>&ensp;&ensp;<strong>Humidity &uarr; &rarr; Density &darr;</strong> (water vapour is lighter than dry air molecules)</li>
            <li>The temperature effect is the one most commonly misunderstood</li>
          </ul>
        </div>
      </section>

      {/* ── SECTION 3 ── */}
      <section className="glass-card study-section">
        <h3><span className="section-icon">⚖️</span> SECTION 3 &mdash; The Ideal Gas Law: Putting It All Together</h3>
        <h4 className="smry-sub">The Formula</h4>
        <p>The relationship between pressure, temperature, and density is expressed in the <strong>Ideal Gas Law:</strong></p>
        <div className="formula-box">
          <p><strong>&rho; &prop; P / T</strong></p>
          <p>Where: P = static pressure (Pascals or hPa), &rho; = density (kg/m&sup3;), T = temperature <strong>(in Kelvin &mdash; never Celsius)</strong></p>
        </div>
        <p>The symbol &prop; means &ldquo;is proportional to&rdquo; &mdash; it says that density goes up and down in the same ratio as the fraction P/T.</p>
        <IdealGasLawSvg />
        <h4 className="smry-sub">Reading the Formula Intuitively</h4>
        <p>This formula is not just an equation to memorise &mdash; it is a tool to reason with. Let&rsquo;s read it out loud in plain English:</p>
        <div className="key-idea-box">
          <strong>&ldquo;Density is proportional to pressure divided by temperature.&rdquo;</strong>
        </div>
        <p><strong>If pressure (P) goes up</strong> (and T stays the same), the top of the fraction gets bigger &rarr; density <strong>increases.</strong> &#10003;</p>
        <p><strong>If temperature (T) goes up</strong> (and P stays the same), the bottom of the fraction gets bigger &rarr; density <strong>decreases.</strong> &#10003;</p>
        <p><strong>If both P and T go up</strong> equally, the fraction stays the same &rarr; density stays the same.</p>
        <div className="analogy-box">
          <strong>Analogy for the formula:</strong> Think of density as the result of a tug-of-war. Pressure is one team pulling density UP. Temperature is the opposing team pulling density DOWN. The actual density at any point depends on which team is winning.
        </div>
        <h4 className="smry-sub">Applying It: Why Density Decreases With Altitude (The Full Picture)</h4>
        <p>Here is where it gets subtle, and where many students make a mistake.</p>
        <p>As you climb, <strong>two things happen simultaneously:</strong></p>
        <ul className="exact-list">
          <li><strong>Pressure decreases</strong> &rarr; this <em>reduces</em> density (pressure decreasing means less &ldquo;squeeze&rdquo;)</li>
          <li><strong>Temperature decreases</strong> &rarr; this <em>increases</em> density (cooler air is more compact)</li>
        </ul>
        <p>So pressure and temperature are fighting each other as you climb! One is trying to reduce density, the other is trying to increase it.</p>
        <p><strong>Who wins?</strong></p>
        <p>The textbook gives the answer clearly: <strong>&ldquo;The effect of decreasing static pressure is dominant.&rdquo;</strong></p>
        <p>The pressure effect is larger than the temperature effect. So as you climb, density still falls overall &mdash; but not as fast as it would if temperature stayed constant.</p>
        <div className="analogy-box">
          <strong>Analogy:</strong> Imagine two people arm-wrestling. Person A (pressure) is stronger, but Person B (temperature) is putting up a fight. Person A eventually wins, but the match takes longer than if Person B wasn&rsquo;t there. Density decreases with altitude, but not as steeply as pressure alone would suggest.
        </div>
        <h4 className="smry-sub">A Practical Example</h4>
        <p>Let&rsquo;s compare two scenarios at an airfield:</p>
        <div className="altitude-table" style={{ gridTemplateColumns: '1fr 1fr 1fr 1.5fr' }}>
          <div className="table-head">Scenario</div>
          <div className="table-head">Pressure</div>
          <div className="table-head">Temperature</div>
          <div className="table-head">Density Effect</div>
          <div className="table-cell">Cold winter morning</div>
          <div className="table-cell"><strong>High</strong> (cold = dense atmosphere)</div>
          <div className="table-cell"><strong>Low (cold)</strong></div>
          <div className="table-cell">Both effects increase density &rarr; <strong>Very high density</strong> &rarr; excellent performance</div>
          <div className="table-cell">Hot summer afternoon</div>
          <div className="table-cell"><strong>Lower</strong> (hot = expanded, less pressure on lower air)</div>
          <div className="table-cell"><strong>High (hot)</strong></div>
          <div className="table-cell">Both effects reduce density &rarr; <strong>Very low density</strong> &rarr; poor performance</div>
          <div className="table-cell">Normal ISA sea level</div>
          <div className="table-cell">1013.25 hPa</div>
          <div className="table-cell">+15&deg;C (288 K)</div>
          <div className="table-cell">Reference condition</div>
        </div>
        <div className="analogy-box">
          <strong>Flying Analogy:</strong> Airline pilots often depart at night or early morning in hot countries (Dubai, Mumbai, Singapore) partly because the cooler temperature gives better density, allowing them to carry more fuel and payload safely. The midday sun raises temperature, lowers density, and reduces the allowable take-off weight.
        </div>
        <div className="recap-box">
          <h4>📋 SECTION 3 RECAP</h4>
          <ul>
            <li>The Ideal Gas Law: <strong>&rho; &prop; P/T</strong> (density is proportional to pressure divided by temperature)</li>
            <li><strong>Always use Kelvin</strong> when applying this formula</li>
            <li>As altitude increases: <strong>pressure decreases</strong> (reduces density) AND <strong>temperature decreases</strong> (increases density) &mdash; these effects oppose each other</li>
            <li><strong>Pressure effect wins</strong> &mdash; density still decreases with altitude overall</li>
            <li>Cold + high pressure = high density = best performance; Hot + low pressure = low density = worst performance</li>
          </ul>
        </div>
      </section>

      {/* ── SECTION 4 ── */}
      <section className="glass-card study-section">
        <h3><span className="section-icon">📊</span> SECTION 4 &mdash; Density Altitude: The Pilot&rsquo;s Practical Application</h3>
        <h4 className="smry-sub">What Is Density Altitude?</h4>
        <p>Now that you understand density, you can understand <strong>density altitude</strong> &mdash; one of the most important practical concepts in aviation performance.</p>
        <div className="key-idea-box">
          <strong>Density altitude is the altitude in the International Standard Atmosphere at which the current air density would be found.</strong>
        </div>
        <p>In simpler terms: your aircraft doesn&rsquo;t care what the altimeter says. It cares about <strong>what the air is actually like.</strong> Density altitude tells you what &ldquo;altitude&rdquo; the aircraft&rsquo;s performance corresponds to, based on actual air density.</p>
        <div className="analogy-box">
          <strong>Analogy:</strong> Imagine you are running a race at sea level on a very hot, humid day. Physiologically, your body is working as hard as if you were running at altitude in thin air &mdash; your lungs are struggling to extract oxygen. You are at sea level geographically, but your body is performing as if it were at 6,000 ft. That is the human equivalent of density altitude.
        </div>
        <DensityAltSvg />
        <h4 className="smry-sub">The key formula (simplified):</h4>
        <div className="formula-box">
          <p><strong>Density Altitude = Pressure Altitude + (120 &times; (OAT &minus; ISA Temperature))</strong></p>
        </div>
        <p><strong>Example:</strong> Aircraft at 5,000 ft pressure altitude on a day when OAT is +25&deg;C. ISA temperature at 5,000 ft is approximately +5&deg;C.</p>
        <p>Density Altitude = 5,000 + (120 &times; (25 &minus; 5)) = 5,000 + 2,400 = <strong>7,400 ft</strong></p>
        <p>The aircraft is performing as if it were at 7,400 ft &mdash; even though it is physically at 5,000 ft. Every performance figure (take-off run, climb rate, ceiling) must be looked up at 7,400 ft, not 5,000 ft.</p>
        <div className="recap-box">
          <h4>📋 SECTION 4 RECAP</h4>
          <ul>
            <li><strong>Density altitude</strong> = the ISA altitude corresponding to current actual air density</li>
            <li>It is what your aircraft &ldquo;feels&rdquo; &mdash; the altitude its performance corresponds to</li>
            <li>High temperature &rarr; high density altitude &rarr; aircraft performs as if at a higher altitude than actual</li>
            <li>Always check density altitude before take-off at high-elevation or hot airfields &mdash; it can dramatically change your performance figures</li>
          </ul>
        </div>
      </section>

      {/* ── SECTION 5 ── */}
      <section className="glass-card study-section mistakes-card">
        <h3><span className="section-icon">⚠️</span> SECTION 5 &mdash; Common Student Mistakes on This Topic</h3>
        <CautionSvg />
        <div className="mistake-item">
          <p><strong>❌ Mistake 1: Using &deg;C instead of Kelvin in the gas law formula</strong></p>
          <p>The Ideal Gas Law formula requires <strong>absolute temperature in Kelvin.</strong> If you use Celsius, 0&deg;C would make the denominator zero (impossibly suggesting infinite density) and negative temperatures would give negative density &mdash; both physically meaningless. Always convert: K = &deg;C + 273.</p>
        </div>
        <div className="mistake-item">
          <p><strong>❌ Mistake 2: Thinking hot air is denser than cold air</strong></p>
          <p>This is the most common conceptual error. Students associate &ldquo;heavy&rdquo; with &ldquo;hot&rdquo; from everyday experience (steam feels powerful, hot water is heavier in a mug &mdash; but that&rsquo;s liquid water, not air). For gases, hot = expanded = less dense. Cold = contracted = more dense. The hot air balloon is the proof.</p>
        </div>
        <div className="mistake-item">
          <p><strong>❌ Mistake 3: Thinking humid air is denser than dry air</strong></p>
          <p>Humidity reduces density because water vapour (H&sub2;O, molecular weight 18) displaces heavier nitrogen (28) and oxygen (32) molecules. Wet air is lighter than dry air at the same temperature and pressure.</p>
        </div>
        <div className="mistake-item">
          <p><strong>❌ Mistake 4: Thinking density simply follows pressure as you climb</strong></p>
          <p>Density does decrease with altitude &mdash; but temperature also decreases as you climb, which partially offsets the pressure effect. Density falls less steeply than pressure alone would suggest. The pressure effect is dominant, but the temperature effect is real.</p>
        </div>
        <div className="mistake-item">
          <p><strong>❌ Mistake 5: Forgetting density altitude at high-elevation airfields</strong></p>
          <p>Students plan a flight to Addis Ababa (elevation ~7,600 ft) on a hot day and look up performance at 7,600 ft. But with a high temperature, actual density altitude might be 10,000 ft+. Using the wrong density altitude can result in a take-off roll that exceeds the available runway length.</p>
        </div>
        <div className="mistake-item">
          <p><strong>❌ Mistake 6: Confusing the symbol &rho; (rho) with P (pressure)</strong></p>
          <p>Density is <strong>&rho; (rho)</strong> &mdash; a Greek letter that looks like a &lsquo;p&rsquo;. Pressure is <strong>P</strong> (capital) or <strong>p</strong> (static). In the formula &rho; &prop; P/T, &rho; is density and P is pressure. These are different. Mixing them up in an exam costs marks.</p>
        </div>
      </section>

      {/* ── FINAL RECAP ── */}
      <section className="glass-card study-section golden-facts-card">
        <h3>FINAL OVERALL RECAP &mdash; The Five Things to Lock In</h3>
        <div className="final-idea">
          <p><strong>1. Temperature scales:</strong> &deg;C for everyday use, Kelvin for formulas. <strong>K = &deg;C + 273.</strong> ISA sea level = 288 K.</p>
        </div>
        <div className="final-idea">
          <p><strong>2. Temperature decreases with altitude</strong> at ~2&deg;C per 1,000 ft up to ~36,000 ft (Tropopause), then stays constant.</p>
        </div>
        <div className="final-idea">
          <p><strong>3. Density (&rho;, kg/m&sup3;) is controlled by three things:</strong></p>
          <ul className="exact-list">
            <li>Pressure &uarr; &rarr; Density &uarr;</li>
            <li>Temperature &uarr; &rarr; Density &darr; <em>(opposite &mdash; critical)</em></li>
            <li>Humidity &uarr; &rarr; Density &darr; <em>(water vapour is lighter than dry air)</em></li>
          </ul>
        </div>
        <div className="final-idea">
          <p><strong>4. The Ideal Gas Law: &rho; &prop; P/T</strong> &mdash; density is proportional to pressure divided by temperature (T in Kelvin always).</p>
        </div>
        <div className="final-idea">
          <p><strong>5. As altitude increases:</strong> both pressure and temperature fall. Pressure falling reduces density; temperature falling increases density. <strong>Pressure wins</strong> &mdash; density still decreases overall, but not as steeply as pressure alone would suggest.</p>
        </div>
      </section>

    </div>
  );
}

/* ─────────────────────────────────────────────
   REVISION CONTENT
   ───────────────────────────────────────────── */
export function RevisionContent() {
  return (
    <div className="revision-page">

      {/* 01 — Key Definitions */}
      <section className="glass-card study-section">
        <h3>01&ensp;Key Definitions</h3>
        <ThermometerScaleSvg />
        <div className="altitude-table" style={{ gridTemplateColumns: '1fr 2fr' }}>
          <div className="table-head">Term</div>
          <div className="table-head">Definition / Exam Answer</div>
          <div className="table-cell"><strong>Temperature</strong></div>
          <div className="table-cell">A measure of the average kinetic energy (speed) of air molecules. Higher temperature = faster molecules = expanded, less dense air.</div>
          <div className="table-cell"><strong>Degrees Celsius (&deg;C)</strong></div>
          <div className="table-cell">Temperature measured relative to the freezing point of water (0&deg;C = freezing, 100&deg;C = boiling). ISA sea-level = +15&deg;C.</div>
          <div className="table-cell"><strong>Kelvin (K)</strong></div>
          <div className="table-cell">Absolute temperature scale. Measured from absolute zero (the coldest possible temperature: &minus;273&deg;C). Conversion: K = &deg;C + 273. Must be used in gas law calculations.</div>
          <div className="table-cell"><strong>Absolute Zero</strong></div>
          <div className="table-cell">The temperature at which all molecular motion theoretically stops. = &minus;273&deg;C = 0 K. Nothing can be colder than absolute zero.</div>
          <div className="table-cell"><strong>ISA Lapse Rate</strong></div>
          <div className="table-cell">The rate at which temperature decreases with altitude in the Troposphere. Standard value = 2&deg;C per 1,000 ft (approximately).</div>
          <div className="table-cell"><strong>Density (&rho;)</strong></div>
          <div className="table-cell">Mass per unit volume. Symbol: &rho; (Greek letter rho). Unit: kg/m&sup3;. ISA sea-level value = 1.225 kg/m&sup3;.</div>
          <div className="table-cell"><strong>Ideal Gas Law</strong></div>
          <div className="table-cell">The relationship between pressure, density, and temperature: &rho; &prop; P/T. Density is proportional to pressure and inversely proportional to absolute temperature.</div>
          <div className="table-cell"><strong>Density Altitude</strong></div>
          <div className="table-cell">The altitude in the ISA at which the current air density would be found. It represents what altitude the aircraft &lsquo;feels&rsquo; it is at, regardless of actual altitude.</div>
          <div className="table-cell"><strong>Humidity</strong></div>
          <div className="table-cell">The amount of water vapour in the air. Water vapour (H&sub2;O, mol. weight 18) displaces heavier nitrogen (28) and oxygen (32) molecules, so humid air is less dense than dry air.</div>
        </div>
      </section>

      {/* 02 — Core Concepts */}
      <section className="glass-card study-section">
        <h3>02&ensp;Core Concepts Frequently Examined</h3>

        <h4 className="smry-sub">Concept 1 &mdash; The Two Temperature Scales</h4>
        <div className="key-idea-box">
          Both scales appear in CPL/PPL examinations. &deg;C is used for reporting and observation; Kelvin is mandatory in the Ideal Gas Law formula. The conversion is:
          <div className="formula-box" style={{ marginTop: '8px' }}>
            <p><strong>K = &deg;C + 273</strong></p>
          </div>
        </div>
        <div className="altitude-table">
          <div className="table-head">Reference Point</div>
          <div className="table-head">&deg;C</div>
          <div className="table-head">K</div>
          <div className="table-head">Note</div>
          <div className="table-cell">Absolute zero</div>
          <div className="table-cell">&minus;273</div>
          <div className="table-cell">0</div>
          <div className="table-cell"><em>No molecular motion</em></div>
          <div className="table-cell">Water freezes</div>
          <div className="table-cell">0</div>
          <div className="table-cell">273</div>
          <div className="table-cell"><em>Freezing point of water</em></div>
          <div className="table-cell">ISA sea level</div>
          <div className="table-cell">+15</div>
          <div className="table-cell">288</div>
          <div className="table-cell"><strong><em>Memorise this</em></strong></div>
          <div className="table-cell">ISA Tropopause</div>
          <div className="table-cell">&minus;56.5</div>
          <div className="table-cell">216.5</div>
          <div className="table-cell"><em>Constant above ~36,000 ft</em></div>
        </div>

        <h4 className="smry-sub">Concept 2 &mdash; The Ideal Gas Law: &rho; &prop; P/T</h4>
        <IdealGasLawSvg />
        <div className="formula-box">
          <p><strong>Formula:</strong> &rho; = P / (R &times; T) &mdash; simplified as &rho; &prop; P/T</p>
          <p><strong>Where:</strong> &rho; = density (kg/m&sup3;) | P = static pressure (Pa or hPa) | T = temperature (Kelvin &mdash; NEVER Celsius)</p>
        </div>
        <div className="altitude-table" style={{ gridTemplateColumns: '1fr 1fr 2fr' }}>
          <div className="table-head">Change</div>
          <div className="table-head">Effect on Density</div>
          <div className="table-head">Why</div>
          <div className="table-cell" style={{ color: '#2874a6', fontWeight: 700 }}>Pressure &uarr;</div>
          <div className="table-cell">Density &uarr; (increases)</div>
          <div className="table-cell">Molecules squeezed closer</div>
          <div className="table-cell" style={{ color: '#2874a6', fontWeight: 700 }}>Pressure &darr;</div>
          <div className="table-cell">Density &darr; (decreases)</div>
          <div className="table-cell">Less compression, molecules spread</div>
          <div className="table-cell" style={{ color: '#c0392b', fontWeight: 700 }}>Temperature &uarr;</div>
          <div className="table-cell">Density &darr; (decreases)</div>
          <div className="table-cell">Molecules speed up and expand</div>
          <div className="table-cell" style={{ color: '#c0392b', fontWeight: 700 }}>Temperature &darr;</div>
          <div className="table-cell">Density &uarr; (increases)</div>
          <div className="table-cell">Molecules slow, contract together</div>
          <div className="table-cell" style={{ color: '#27ae60', fontWeight: 700 }}>Humidity &uarr;</div>
          <div className="table-cell">Density &darr; (decreases)</div>
          <div className="table-cell">H&sub2;O (mol.wt 18) replaces N&sub2; (28) / O&sub2; (32)</div>
        </div>

        <DensityTriangleSvg />
        <h4 className="smry-sub">Concept 3 &mdash; Why Density Decreases With Altitude (The Full Picture)</h4>
        <div className="key-idea-box">
          As altitude increases, TWO opposing effects occur simultaneously:
          <ul className="exact-list" style={{ marginTop: '6px' }}>
            <li><strong style={{ color: '#c0392b' }}>Pressure decreases</strong> &rarr; This reduces density (less compression).</li>
            <li><strong style={{ color: '#c0392b' }}>Temperature decreases</strong> &rarr; This would increase density (molecules slowing down).</li>
          </ul>
          <p style={{ marginTop: '8px' }}><em><strong>Key exam fact: The pressure effect is dominant.</strong> Density still decreases overall with altitude, but not as steeply as pressure alone would suggest. The temperature decrease partially offsets the pressure effect.</em></p>
        </div>
      </section>

      {/* 03 — Typical Exam Questions */}
      <section className="glass-card study-section">
        <h3>03&ensp;Typical Exam Questions with Model Answers</h3>
        <p><em>Instructions: Cover the answers and attempt each question independently before reading the model answer. These are structured in PPL-to-CPL order of difficulty.</em></p>

        <div className="mistake-item" style={{ borderLeftColor: 'var(--navy-700)', background: 'var(--sky-50)' }}>
          <p><strong>Q1. State the unit and symbol for air density.</strong></p>
          <p>A: Unit: kg/m&sup3; (kilograms per cubic metre). Symbol: &rho; (the Greek letter rho). ISA sea-level value &asymp; 1.225 kg/m&sup3;.</p>
        </div>
        <div className="mistake-item" style={{ borderLeftColor: 'var(--navy-700)', background: 'var(--sky-50)' }}>
          <p><strong>Q2. Convert +15&deg;C to Kelvin.</strong></p>
          <p>A: K = &deg;C + 273 = 15 + 273 = 288 K. This is the ISA sea-level temperature and a critical reference value.</p>
        </div>
        <div className="mistake-item" style={{ borderLeftColor: 'var(--navy-700)', background: 'var(--sky-50)' }}>
          <p><strong>Q3. Convert &minus;56.5&deg;C to Kelvin.</strong></p>
          <p>A: K = &minus;56.5 + 273 = 216.5 K. This is the ISA temperature at the Tropopause (~36,000 ft).</p>
        </div>
        <div className="mistake-item" style={{ borderLeftColor: 'var(--navy-700)', background: 'var(--sky-50)' }}>
          <p><strong>Q4. A pilot flies from sea level to FL350. What happens to air density? Explain why.</strong></p>
          <p>A: Air density decreases with altitude. As altitude increases, static pressure decreases (less air mass above), which is the dominant effect. Although temperature also decreases (which would tend to increase density), the pressure effect outweighs the temperature effect, so density still falls overall.</p>
        </div>
        <div className="mistake-item" style={{ borderLeftColor: 'var(--navy-700)', background: 'var(--sky-50)' }}>
          <p><strong>Q5. Why does an increase in temperature cause a decrease in air density?</strong></p>
          <p>A: Higher temperature means air molecules have greater kinetic energy and move faster. This causes the molecules to spread further apart, so the same volume of air contains fewer molecules. Mass per unit volume (density) therefore decreases.</p>
        </div>
        <div className="mistake-item" style={{ borderLeftColor: 'var(--navy-700)', background: 'var(--sky-50)' }}>
          <p><strong>Q6. Why does humid air have a lower density than dry air at the same temperature and pressure?</strong></p>
          <p>A: Water vapour molecules (H&sub2;O) have a molecular weight of 18, compared to nitrogen (N&sub2; = 28) and oxygen (O&sub2; = 32). When water vapour replaces these heavier molecules in the air mixture, the average molecular weight falls, so the air becomes lighter per unit volume &mdash; lower density.</p>
        </div>
        <div className="mistake-item" style={{ borderLeftColor: 'var(--navy-700)', background: 'var(--sky-50)' }}>
          <p><strong>Q7. State the Ideal Gas Law relationship between density, pressure and temperature.</strong></p>
          <p>A: &rho; &prop; P/T (density is proportional to pressure divided by absolute temperature). Density increases with pressure and decreases with temperature. Temperature must be expressed in Kelvin.</p>
        </div>
        <div className="mistake-item" style={{ borderLeftColor: 'var(--navy-700)', background: 'var(--sky-50)' }}>
          <p><strong>Q8. On a hot day (+35&deg;C) at a sea-level airfield, how will density compare to ISA standard conditions (+15&deg;C, 1013.25 hPa)?</strong></p>
          <p>A: Density will be lower than ISA. Higher temperature causes molecules to expand and spread, reducing mass per unit volume. Lower density reduces mass airflow over the wing and through the engine, degrading take-off and climb performance.</p>
        </div>
        <div className="mistake-item" style={{ borderLeftColor: 'var(--navy-700)', background: 'var(--sky-50)' }}>
          <p><strong>Q9. At what rate does temperature decrease with altitude in the Troposphere under ISA conditions?</strong></p>
          <p>A: Approximately 2&deg;C per 1,000 ft (the ISA environmental lapse rate). This continues until approximately 36,000 ft (the Tropopause), above which temperature remains approximately constant at &minus;56.5&deg;C.</p>
        </div>
        <div className="mistake-item" style={{ borderLeftColor: 'var(--navy-700)', background: 'var(--sky-50)' }}>
          <p><strong>Q10. An aircraft is operating at a high-elevation airfield (6,500 ft) on a hot afternoon (OAT +30&deg;C). ISA temperature at 6,500 ft is approximately +2&deg;C. Calculate approximate density altitude.</strong></p>
          <p>A: Density Altitude = Pressure Altitude + [120 &times; (OAT &minus; ISA Temp)] = 6,500 + [120 &times; (30 &minus; 2)] = 6,500 + [120 &times; 28] = 6,500 + 3,360 = <strong>9,860 ft</strong>. The aircraft performs as if it were at approximately 9,860 ft despite being physically at 6,500 ft.</p>
        </div>
      </section>

      {/* 04 — Memory Tricks */}
      <section className="glass-card study-section">
        <h3>04&ensp;Memory Tricks &amp; Mnemonics</h3>
        <MoleculeMotionSvg />
        <p className="memory-aid">
          <strong>&ldquo;K = C + 273&rdquo;:</strong> The only formula you must memorise for temperature conversion. Say it aloud ten times: &lsquo;Kelvin equals Celsius plus two-seven-three&rsquo;. ISA sea level is +15&deg;C = 288 K. ISA Tropopause is &minus;56.5&deg;C = 216.5 K.
        </p>
        <p className="memory-aid">
          <strong>&ldquo;P up = &rho; up&rdquo;:</strong> Pressure and density move in the SAME direction. Higher pressure squeezes molecules closer = higher density. Remember: P and &rho; are best friends &mdash; they go up and down together.
        </p>
        <p className="memory-aid">
          <strong>&ldquo;T up = &rho; down&rdquo;:</strong> Temperature and density move in OPPOSITE directions. This is the counterintuitive one. Think of a hot air balloon: heat the air &rarr; it rises because it became LESS dense. Temperature up = density down.
        </p>
        <p className="memory-aid">
          <strong>&ldquo;Wet air is light air&rdquo;:</strong> Humid air is LESS dense than dry air because water vapour (H&sub2;O, weight 18) is lighter than nitrogen (28) and oxygen (32). &lsquo;Wet air is light air&rsquo; &mdash; remember this rhyme for exam day.
        </p>
        <p className="memory-aid">
          <strong>&ldquo;PTHD&rdquo; &mdash; Pressure, Temperature, Humidity, Density:</strong> The three factors that control density: Pressure, Temperature, Humidity &mdash; &lsquo;PTH&rsquo;. P&uarr;D&uarr;, T&uarr;D&darr;, H&uarr;D&darr;. Or as a phrase: &lsquo;Push, Temp, Humidity &mdash; know how each affects Density&rsquo;.
        </p>
        <p className="memory-aid">
          <strong>&ldquo;Pressure wins the altitude race&rdquo;:</strong> As you climb, pressure and temperature both fall. Pressure fall REDUCES density; temperature fall INCREASES density. They fight each other. Pressure always wins. Density decreases overall.
        </p>
        <p className="memory-aid">
          <strong>&ldquo;288 at sea, 216 at sky&rdquo;:</strong> ISA sea-level temperature = 288 K (+15&deg;C). ISA Tropopause temperature = 216.5 K (&minus;56.5&deg;C). These two values appear constantly in exam questions and performance calculations.
        </p>
      </section>

      {/* 05 — Common Traps */}
      <section className="glass-card study-section mistakes-card">
        <h3>05&ensp;Common Traps &amp; Confusing Points</h3>
        <CautionSvg />
        <div className="altitude-table" style={{ gridTemplateColumns: '1fr 2fr' }}>
          <div className="table-head">The Trap</div>
          <div className="table-head">The Correct Answer</div>
          <div className="table-cell" style={{ color: 'var(--red-500)', fontWeight: 700 }}>Using &deg;C instead of Kelvin in the gas law</div>
          <div className="table-cell">The formula &rho; &prop; P/T requires temperature in Kelvin. Using 0&deg;C gives T=0 &rarr; division by zero. Using negative &deg;C gives negative density. Always convert: K = &deg;C + 273 before applying any formula.</div>
          <div className="table-cell" style={{ color: 'var(--red-500)', fontWeight: 700 }}>Hot air is denser than cold air</div>
          <div className="table-cell">Wrong. Hot air is less dense. Heat causes molecules to move faster and spread apart. Same volume, fewer molecules, lower mass per m&sup3; = lower density. Hot air balloons float because hot air is lighter.</div>
          <div className="table-cell" style={{ color: 'var(--red-500)', fontWeight: 700 }}>Humid air is denser than dry air</div>
          <div className="table-cell">Wrong. Humid air is less dense. Water vapour (H&sub2;O, mol. wt. 18) displaces heavier N&sub2; (28) and O&sub2; (32). The air mixture becomes lighter per unit volume. Wet air is light air.</div>
          <div className="table-cell" style={{ color: 'var(--red-500)', fontWeight: 700 }}>Density simply follows pressure with altitude</div>
          <div className="table-cell">Partially wrong. Density does decrease with altitude (as pressure does), but it does not fall as steeply, because the falling temperature partially offsets the pressure effect. The final answer is that pressure effect dominates, but temperature is not irrelevant.</div>
          <div className="table-cell" style={{ color: 'var(--red-500)', fontWeight: 700 }}>Temperature falls all the way to space</div>
          <div className="table-cell">Wrong. Temperature falls at ~2&deg;C/1,000 ft only through the Troposphere, up to ~36,000 ft (Tropopause). Above the Tropopause, in the Stratosphere, temperature remains roughly constant.</div>
          <div className="table-cell" style={{ color: 'var(--red-500)', fontWeight: 700 }}>Confusing &rho; (density) with P or p (pressure)</div>
          <div className="table-cell">Density is &rho; (Greek rho), unit kg/m&sup3;. Pressure is P (upper case) or p (lower case), unit hPa or N/m&sup2;. In the formula &rho; &prop; P/T, &rho; is the result (density), P is pressure (input), and T is temperature (input).</div>
          <div className="table-cell" style={{ color: 'var(--red-500)', fontWeight: 700 }}>Density altitude = pressure altitude</div>
          <div className="table-cell">Density altitude accounts for BOTH pressure AND temperature deviation from ISA. Pressure altitude only accounts for pressure. On a hot day, density altitude is significantly higher than pressure altitude.</div>
          <div className="table-cell" style={{ color: 'var(--red-500)', fontWeight: 700 }}>ISA sea-level temp is 0&deg;C</div>
          <div className="table-cell">Wrong. ISA sea-level temperature is +15&deg;C (= 288 K). 0&deg;C is the freezing point of water (= 273 K). These are two different reference points. Confusing them causes errors in every temperature calculation.</div>
        </div>
      </section>

      {/* 06 — Quick Reference */}
      <section className="glass-card study-section golden-facts-card">
        <h3>06&ensp;One-Page Quick Reference &mdash; Read Before the Exam</h3>
        <div className="altitude-table" style={{ gridTemplateColumns: '1fr 1fr' }}>
          <div className="table-head">Temperature</div>
          <div className="table-head">Density (&rho;)</div>
          <div className="table-cell">
            <ul className="exact-list">
              <li>Symbol: &deg;C or K</li>
              <li>ISA sea level: <strong style={{ color: '#27ae60' }}>+15&deg;C = 288 K</strong></li>
              <li>Tropopause: <strong style={{ color: '#27ae60' }}>&minus;56.5&deg;C = 216.5 K</strong> at ~36,000 ft</li>
              <li>Lapse rate: ~2&deg;C per 1,000 ft in Troposphere</li>
              <li>Conversion: <strong style={{ color: '#27ae60' }}>K = &deg;C + 273</strong></li>
            </ul>
          </div>
          <div className="table-cell">
            <ul className="exact-list">
              <li>Unit: kg/m&sup3; | ISA sea level &asymp; 1.225 kg/m&sup3;</li>
              <li>P &uarr; &rarr; &rho; &uarr; (same direction)</li>
              <li>T &uarr; &rarr; &rho; &darr; (opposite direction)</li>
              <li style={{ color: '#27ae60' }}>Humidity &uarr; &rarr; &rho; &darr; (wet air is lighter)</li>
              <li>Formula: <strong>&rho; &prop; P/T</strong> (T in Kelvin!)</li>
            </ul>
          </div>
          <div className="table-head" style={{ color: '#c0392b' }}>Density vs Altitude</div>
          <div className="table-head" style={{ color: '#c0392b' }}>Do NOT Confuse</div>
          <div className="table-cell">
            <ul className="exact-list">
              <li>Density decreases overall as altitude increases</li>
              <li style={{ color: '#c0392b' }}><strong>Pressure falls</strong> &rarr; reduces density (dominant effect)</li>
              <li style={{ color: '#c0392b' }}><strong>Temperature falls</strong> &rarr; would increase density (offset)</li>
              <li><strong>Pressure effect wins</strong> &mdash; density still falls overall</li>
            </ul>
          </div>
          <div className="table-cell">
            <ul className="exact-list">
              <li><strong>&rho;</strong> = density (rho) in kg/m&sup3;</li>
              <li><strong>P</strong> or <strong>p</strong> = pressure in hPa or N/m&sup2;</li>
              <li><strong>T</strong> = temperature in Kelvin (formula only)</li>
              <li><strong>hPa &equiv; mb</strong> <em>(same unit, no conversion needed)</em></li>
            </ul>
          </div>
        </div>
        <div className="key-idea-box" style={{ marginTop: '16px' }}>
          <strong>The Golden Rule for Exams:</strong> Temperature and density are <strong>inversely proportional</strong> &mdash; they move in opposite directions. Pressure and density move in the <strong>same direction</strong>. Humidity always reduces density. And every formula that contains temperature <strong>must use Kelvin</strong>. These four rules account for the majority of marks on temperature and density questions in both PPL and CPL written examinations.
        </div>
      </section>

    </div>
  );
}

/* ─────────────────────────────────────────────
   QUESTIONS
   ───────────────────────────────────────────── */
export const questions = [
  /* ─── PART A — Single Correct Answer (Q1–Q15) ─── */
  {
    id: 1,
    text: 'What is the symbol used for air density?',
    options: [
      { key: 'A', text: 'The letter D' },
      { key: 'B', text: 'The Greek letter ρ (rho)' },
      { key: 'C', text: 'The letter δ (delta)' },
      { key: 'D', text: 'Upper-case P' },
    ],
    answer: 'B',
    explanation:
      'Air density is represented by the Greek letter ρ (rho). Upper-case P or lower-case p denotes pressure. Confusing ρ with P is one of the most common errors in gas-law calculations.',
  },
  {
    id: 2,
    text: 'What is the unit of air density?',
    options: [
      { key: 'A', text: 'Newtons per square metre (N/m²)' },
      { key: 'B', text: 'Pascals (Pa)' },
      { key: 'C', text: 'Kilograms per cubic metre (kg/m³)' },
      { key: 'D', text: 'Kilograms per square metre (kg/m²)' },
    ],
    answer: 'C',
    explanation:
      'Density = mass per unit volume. Mass is in kilograms (kg) and volume is in cubic metres (m³), giving kg/m³. The ISA sea-level standard density is approximately 1.225 kg/m³.',
  },
  {
    id: 3,
    text: 'Convert +15°C to Kelvin.',
    options: [
      { key: 'A', text: '258 K' },
      { key: 'B', text: '273 K' },
      { key: 'C', text: '288 K' },
      { key: 'D', text: '315 K' },
    ],
    answer: 'C',
    explanation:
      'K = °C + 273. Therefore +15 + 273 = 288 K. This is the ISA standard sea-level temperature and appears frequently in performance and gas-law calculations. Memorise it.',
  },
  {
    id: 4,
    text: 'What is the approximate ISA temperature at the Tropopause (~36,000 ft)?',
    options: [
      { key: 'A', text: '−40°C' },
      { key: 'B', text: '−56.5°C' },
      { key: 'C', text: '−73°C' },
      { key: 'D', text: '0°C' },
    ],
    answer: 'B',
    explanation:
      'In the ISA, temperature decreases at approximately 2°C per 1,000 ft from +15°C at sea level, reaching approximately −56.5°C (216.5 K) at the Tropopause (~36,000 ft). Above this level, temperature remains roughly constant through the lower Stratosphere.',
  },
  {
    id: 5,
    text: "A student states: 'Hot air is heavier and denser than cold air.' Is this correct?",
    options: [
      { key: 'A', text: 'Yes — heat adds energy and therefore mass to the air' },
      { key: 'B', text: 'No — hot air is less dense because molecules move faster and spread further apart' },
      { key: 'C', text: 'Yes — hot air contains more water vapour, increasing density' },
      { key: 'D', text: 'No — temperature has no effect on air density' },
    ],
    answer: 'B',
    explanation:
      'Higher temperature means molecules gain kinetic energy, move faster, and push each other further apart. The same volume of air now contains fewer molecules, reducing mass per unit volume (density). This is why hot air balloons float — the heated air inside is less dense than the cool air outside.',
  },
  {
    id: 6,
    text: 'What is the approximate ISA standard lapse rate in the Troposphere?',
    options: [
      { key: 'A', text: '1°C per 1,000 ft' },
      { key: 'B', text: '2°C per 1,000 ft' },
      { key: 'C', text: '3°C per 1,000 ft' },
      { key: 'D', text: '5°C per 1,000 ft' },
    ],
    answer: 'B',
    explanation:
      'The ISA environmental lapse rate is approximately 2°C per 1,000 ft (more precisely 1.98°C/1,000 ft). Starting from +15°C at sea level, this continues to approximately −56.5°C at the Tropopause (~36,000 ft). Above the Tropopause, temperature remains constant.',
  },
  {
    id: 7,
    text: 'What is the effect of increasing humidity on air density?',
    options: [
      { key: 'A', text: 'Density increases because water is heavier than air' },
      { key: 'B', text: 'Density is unaffected by humidity' },
      { key: 'C', text: 'Density decreases because water vapour molecules are lighter than nitrogen and oxygen' },
      { key: 'D', text: 'Density increases because humid air is more compressed' },
    ],
    answer: 'C',
    explanation:
      'Water vapour (H₂O) has a molecular weight of 18, compared to nitrogen (N₂ = 28) and oxygen (O₂ = 32). When water vapour replaces these heavier molecules in the air mixture, the average molecular weight drops, making the air lighter per unit volume. Wet air is less dense than dry air.',
  },
  {
    id: 8,
    text: 'An aircraft is departing on a cold winter morning (−5°C) compared to a hot summer afternoon (+35°C) at the same airfield. How does take-off performance compare?',
    options: [
      { key: 'A', text: 'Take-off run is longer on the cold morning due to increased drag' },
      { key: 'B', text: 'Performance is identical as pressure has not changed' },
      { key: 'C', text: 'Take-off run is shorter on the cold morning due to higher air density' },
      { key: 'D', text: 'Take-off run is shorter on the hot afternoon due to less aerodynamic resistance' },
    ],
    answer: 'C',
    explanation:
      'Cold air is denser than warm air. Higher density means more mass flow over the wings and through the engine per unit time, generating more lift and more thrust. The aircraft reaches lift-off speed in a shorter distance. Hot afternoons reduce density, requiring a longer run.',
  },
  {
    id: 9,
    text: 'According to the Ideal Gas Law, density (ρ) is proportional to which of the following?',
    options: [
      { key: 'A', text: 'Pressure × Temperature' },
      { key: 'B', text: 'Pressure ÷ Temperature' },
      { key: 'C', text: 'Temperature ÷ Pressure' },
      { key: 'D', text: '1 ÷ (Pressure × Temperature)' },
    ],
    answer: 'B',
    explanation:
      'ρ ∝ P/T. Density is directly proportional to pressure (P↑ → ρ↑) and inversely proportional to absolute temperature (T↑ → ρ↓). Temperature must always be in Kelvin when applying this relationship.',
  },
  {
    id: 10,
    text: 'An aircraft climbs from sea level to FL200. Which statement correctly describes what happens to air density?',
    options: [
      { key: 'A', text: 'Density increases because temperature falls faster than pressure' },
      { key: 'B', text: 'Density remains constant because pressure and temperature both fall equally' },
      { key: 'C', text: 'Density decreases because the pressure reduction effect is dominant over the temperature reduction effect' },
      { key: 'D', text: 'Density decreases only due to the fall in temperature' },
    ],
    answer: 'C',
    explanation:
      'As altitude increases, pressure falls (which reduces density) and temperature also falls (which would increase density). These two effects partially cancel, but the pressure effect is dominant. Overall, density still decreases with altitude, but not as steeply as pressure alone would suggest.',
  },
  {
    id: 11,
    text: 'Using the Ideal Gas Law, if pressure is halved and temperature remains constant, what happens to density?',
    options: [
      { key: 'A', text: 'Density doubles' },
      { key: 'B', text: 'Density is halved' },
      { key: 'C', text: 'Density remains the same' },
      { key: 'D', text: 'Density reduces to one quarter' },
    ],
    answer: 'B',
    explanation:
      'Since ρ ∝ P/T, if pressure (P) is halved and T is constant, the ratio P/T is also halved. Therefore density halves. This is consistent with what happens at approximately 18,000 ft, where pressure (and density) are roughly half their sea-level values.',
  },
  {
    id: 12,
    text: 'An aircraft operates at a pressure altitude of 4,000 ft where ISA temperature is +7°C. The actual OAT is +27°C. What is the approximate density altitude?',
    options: [
      { key: 'A', text: '4,000 ft' },
      { key: 'B', text: '5,200 ft' },
      { key: 'C', text: '6,400 ft' },
      { key: 'D', text: '7,600 ft' },
    ],
    answer: 'C',
    explanation:
      'Density Altitude = Pressure Altitude + [120 × (OAT − ISA Temp)] = 4,000 + [120 × (27 − 7)] = 4,000 + [120 × 20] = 4,000 + 2,400 = 6,400 ft. The aircraft performs as though it is at 6,400 ft despite being physically at 4,000 ft.',
  },
  {
    id: 13,
    text: 'Why must temperature be expressed in Kelvin (not Celsius) when using the Ideal Gas Law formula?',
    options: [
      { key: 'A', text: 'Kelvin is easier to use in mental arithmetic' },
      { key: 'B', text: 'Aviation regulations require Kelvin for all calculations' },
      { key: 'C', text: 'Using Celsius would give physically impossible results: 0°C as denominator would mean division by zero; negative °C would give negative density' },
      { key: 'D', text: 'There is no practical reason; either scale gives the same result' },
    ],
    answer: 'C',
    explanation:
      'The Ideal Gas Law requires absolute temperature. At 0°C, using Celsius gives T=0 in the denominator, which produces division by zero (infinite density — physically impossible). Below 0°C, negative values produce negative density, which is meaningless. Kelvin starts at absolute zero, so T is always a positive value.',
  },
  {
    id: 14,
    text: 'An aircraft is at a sea-level airfield in tropical conditions: temperature +40°C, humidity very high. Compared to ISA standard conditions, the pilot should expect:',
    options: [
      { key: 'A', text: 'Better performance due to the warm, energetic air' },
      { key: 'B', text: 'Significantly reduced performance due to lower density from both high temperature AND high humidity' },
      { key: 'C', text: 'Normal performance because the effects of temperature and humidity cancel each other' },
      { key: 'D', text: 'Slightly improved performance because high humidity increases the oxygen content of air' },
    ],
    answer: 'B',
    explanation:
      'Both high temperature and high humidity independently reduce air density. High temperature causes air to expand (less mass per m³); high humidity replaces heavy N₂/O₂ molecules with lighter H₂O molecules. The combined effect can raise density altitude to several thousand feet above actual elevation, significantly degrading take-off, climb, and engine performance.',
  },
  {
    id: 15,
    text: 'At FL350 (≈35,000 ft) in ISA conditions, temperature is approximately −56.5°C. If the outside air temperature is actually −40°C (warmer than ISA), what effect does this have on air density compared to ISA?',
    options: [
      { key: 'A', text: 'Density is higher than ISA because the air is relatively warm' },
      { key: 'B', text: 'Density is lower than ISA because warmer air expands and has lower mass per unit volume' },
      { key: 'C', text: 'Density is unchanged because only pressure determines density at cruise altitude' },
      { key: 'D', text: 'Density is higher because warm air contains more oxygen molecules' },
    ],
    answer: 'B',
    explanation:
      'Warmer-than-ISA air at any altitude is less dense than ISA air at the same pressure level. Using ρ ∝ P/T: pressure is approximately the same (both at FL350), but T is higher (−40°C = 233 K vs ISA −56.5°C = 216.5 K). Higher T in the denominator means lower ρ. Engine and aerodynamic performance will be below ISA predictions.',
  },

  /* ─── PART B — Multiple Correct Answers (Q16–Q20) ─── */
  {
    id: 16,
    multi: true,
    text: 'Which of the following will cause a decrease in air density? Select ALL that apply.',
    options: [
      { key: 'A', text: 'An increase in air temperature' },
      { key: 'B', text: 'An increase in static pressure' },
      { key: 'C', text: 'An increase in humidity' },
      { key: 'D', text: 'A decrease in static pressure' },
    ],
    answer: ['A', 'C', 'D'],
    explanation:
      'Temperature increase causes molecules to expand (density falls). Humidity increase replaces heavy N₂/O₂ with lighter H₂O (density falls). Pressure decrease reduces compression (density falls). Pressure increase is the only option that RAISES density, not lowers it.',
  },
  {
    id: 17,
    multi: true,
    text: 'Which of the following statements about the Kelvin temperature scale are correct? Select ALL that apply.',
    options: [
      { key: 'A', text: '0 K corresponds to −273°C (absolute zero)' },
      { key: 'B', text: 'The conversion formula is K = °C + 273' },
      { key: 'C', text: 'ISA sea-level temperature is 288 K' },
      { key: 'D', text: 'Kelvin and Celsius have different sized degrees (intervals)' },
    ],
    answer: ['A', 'B', 'C'],
    explanation:
      'Absolute zero is 0 K = −273°C (A correct). K = °C + 273 is the conversion formula (B correct). ISA sea level = +15°C = 288 K (C correct). Option D is wrong: the degree interval (size of one degree) is identical in both Kelvin and Celsius scales. Only the zero point differs.',
  },
  {
    id: 18,
    multi: true,
    text: 'Regarding the Ideal Gas Law (ρ ∝ P/T), which of the following are correct statements? Select ALL that apply.',
    options: [
      { key: 'A', text: 'Density is directly proportional to pressure' },
      { key: 'B', text: 'Density is inversely proportional to absolute temperature' },
      { key: 'C', text: 'Doubling the pressure at constant temperature doubles the density' },
      { key: 'D', text: 'Doubling the temperature at constant pressure doubles the density' },
    ],
    answer: ['A', 'B', 'C'],
    explanation:
      'A: ρ ∝ P — correct, same direction. B: ρ ∝ 1/T — correct, opposite direction. C: if P doubles and T is constant, ρ = P/T, so ρ also doubles — correct. D is wrong: if T doubles at constant P, then ρ = P/(2T), so density HALVES (not doubles). Temperature and density are inversely proportional.',
  },
  {
    id: 19,
    multi: true,
    text: 'As an aircraft climbs from sea level to FL350, which of the following correctly describe changes to atmospheric properties? Select ALL that apply.',
    options: [
      { key: 'A', text: 'Static pressure decreases continuously throughout the climb' },
      { key: 'B', text: 'Temperature decreases at approximately 2°C per 1,000 ft throughout the entire climb' },
      { key: 'C', text: 'Air density decreases throughout the climb' },
      { key: 'D', text: 'Temperature becomes approximately constant above the Tropopause (~36,000 ft)' },
    ],
    answer: ['A', 'C', 'D'],
    explanation:
      'Pressure decreases continuously (A correct). Density decreases overall (C correct). Temperature becomes constant above the Tropopause (D correct). Option B is wrong: the 2°C/1,000 ft lapse rate applies only through the Troposphere (up to ~36,000 ft). Above the Tropopause, temperature remains roughly constant at −56.5°C.',
  },
  {
    id: 20,
    multi: true,
    text: 'A pilot is planning a flight from a high-elevation airfield (7,000 ft) on a hot, humid afternoon (OAT +30°C, high humidity). Which of the following statements are correct? Select ALL that apply.',
    options: [
      { key: 'A', text: 'Density altitude will be significantly higher than the field elevation of 7,000 ft' },
      { key: 'B', text: 'Both high temperature and high humidity are independently reducing air density' },
      { key: 'C', text: 'The aircraft will perform as if it were at a lower altitude than 7,000 ft' },
      { key: 'D', text: 'Take-off distance required will be greater than the chart value for 7,000 ft at ISA' },
    ],
    answer: ['A', 'B', 'D'],
    explanation:
      'High temperature and high humidity both reduce density (B correct), raising density altitude well above 7,000 ft (A correct). More density altitude = longer take-off roll (D correct). Option C is wrong: the aircraft performs as if at a HIGHER altitude than 7,000 ft (not lower), because density altitude exceeds actual pressure altitude. Performance degrades, not improves.',
  },
];
