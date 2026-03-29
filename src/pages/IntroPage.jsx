import { CockpitSvg, WingLiftSvg, PerformanceSvg, DensitySvg, AirFluidSvg, TropopauseSvg, CautionSvg } from '../components/Illustrations'

const sections = [
  {
    title: 'Section 1 — What Is the Atmosphere?',
    icon: '🌍',
    Illustration: DensitySvg,
    body: [
      'The atmosphere is a blanket of gases held by gravity. It is a physical medium, not empty space.',
      'For pilots, this medium is the road you fly on. The wing needs air to create lift through pressure and speed changes.',
      'The key pilot property is density: how much mass exists in each cubic meter of air.',
    ],
  },
  {
    title: 'Section 2 — Air Has Mass',
    icon: '💨',
    Illustration: WingLiftSvg,
    body: [
      'Air has measurable force and kinetic energy. Strong winds can damage structures because air is real matter.',
      'Lift depends on mass flow over the wing: mass per second moving through the wing area.',
      'If density drops, speed must increase to keep mass flow and lift at the required level.',
    ],
  },
  {
    title: 'Section 3 — Air as a Compressible Fluid',
    icon: '🫧',
    Illustration: AirFluidSvg,
    body: [
      'Air is a fluid, meaning it flows and changes shape with boundaries.',
      'Unlike water, air is compressible. This matters in aerodynamics and high-speed flight.',
      'Because air has low viscosity, even small pressure differences can direct airflow and support lift generation.',
    ],
  },
  {
    title: 'Section 4 — Atmosphere Changes with Altitude',
    icon: '⬆️',
    Illustration: TropopauseSvg,
    body: [
      'Pressure and density decrease steadily with altitude.',
      'Temperature also decreases, but only up to about 36,000 ft, then levels off at the Tropopause/Stratosphere boundary.',
      'This directly affects aircraft performance, runway requirement, and altimeter reliability.',
    ],
  },
  {
    title: 'Section 5 — Frequent Student Mistakes',
    icon: '⚠️',
    Illustration: CautionSvg,
    body: [
      'Cold air is denser, not thinner. Hot/high conditions reduce performance.',
      'Speed cannot be increased indefinitely due to drag and structural limits.',
      'Aircraft reacts to density altitude, not only geographic altitude.',
    ],
  },
]

function IntroPage() {
  return (
    <div className="lesson-page">
      <section className="glass-card hero-card">
        <div>
          <p className="eyebrow">Ground School Module</p>
          <h2>Why Atmosphere Knowledge Is Mission-Critical</h2>
          <p>
            Your aircraft is fully supported by air. When air properties shift, lift,
            climb performance, takeoff distance, and altitude awareness all shift with
            them. This page condenses the full concept narrative from your summary
            notes into clear pilot-focused blocks.
          </p>
        </div>
        <CockpitSvg />
      </section>

      <section className="visual-grid">
        <article className="glass-card visual-card">
          <WingLiftSvg />
          <h3>Core Lift Rule</h3>
          <p>
            Lift is strongly tied to mass flow over the wing. Lower density means less
            mass per cubic meter, so pilots compensate with higher airspeed.
          </p>
        </article>
        <article className="glass-card visual-card">
          <PerformanceSvg />
          <h3>Tropopause Awareness</h3>
          <p>
            Temperature trend changes around 36,000 ft. Above this, stability often
            improves, which is one reason cruise profiles target this region.
          </p>
        </article>
      </section>

      <section className="section-list">
        {sections.map((section) => (
          <article key={section.title} className="glass-card section-card">
            <section.Illustration />
            <h3>
              <span className="section-icon">{section.icon}</span>{' '}
              {section.title}
            </h3>
            {section.body.map((point) => (
              <p key={point}>{point}</p>
            ))}
          </article>
        ))}
      </section>
    </div>
  )
}

export default IntroPage
