export function DensitySvg() {
  return (
    <svg viewBox="0 0 520 170" fill="none" className="block-svg">
      <rect width="520" height="170" rx="12" fill="#eaf2f8" />
      <rect x="20" y="25" width="110" height="120" rx="8" stroke="#2874a6" strokeWidth="1.5" fill="#d6eaf8" />
      {[35, 55, 75, 95, 115].map((y) =>
        [38, 58, 78, 98].map((x) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="5" fill="#2874a6" opacity="0.8" />
        ))
      )}
      <rect x="180" y="25" width="110" height="120" rx="8" stroke="#d68910" strokeWidth="1.5" fill="#fef9e7" />
      <circle cx="210" cy="55" r="5" fill="#d68910" />
      <circle cx="255" cy="85" r="5" fill="#d68910" />
      <circle cx="230" cy="115" r="5" fill="#d68910" />
      <circle cx="260" cy="50" r="5" fill="#d68910" />
      <line x1="340" y1="60" x2="490" y2="60" stroke="#2874a6" strokeWidth="2.5" markerEnd="url(#arB)" />
      <line x1="340" y1="110" x2="490" y2="110" stroke="#d68910" strokeWidth="2.5" markerEnd="url(#arY)" />
      <defs>
        <marker id="arB" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0L8 4L0 8Z" fill="#2874a6" /></marker>
        <marker id="arY" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0L8 4L0 8Z" fill="#d68910" /></marker>
      </defs>
      <text x="60" y="18" fontSize="12" fill="#2874a6" fontWeight="700" fontFamily="DM Sans,sans-serif">Dense Air</text>
      <text x="210" y="18" fontSize="12" fill="#d68910" fontWeight="700" fontFamily="DM Sans,sans-serif">Thin Air</text>
      <text x="345" y="52" fontSize="12" fill="#2874a6" fontWeight="600" fontFamily="DM Sans,sans-serif">More Lift</text>
      <text x="345" y="102" fontSize="12" fill="#d68910" fontWeight="600" fontFamily="DM Sans,sans-serif">Less Lift</text>
      <text x="345" y="150" fontSize="10" fill="#a0aab4" fontFamily="DM Sans,sans-serif">Density = mass / volume</text>
    </svg>
  )
}

export function AirFluidSvg() {
  return (
    <svg viewBox="0 0 520 170" fill="none" className="block-svg">
      <rect width="520" height="170" rx="12" fill="#eaf2f8" />
      <rect x="20" y="28" width="130" height="55" rx="6" fill="#d6eaf8" stroke="#aed6f1" />
      <rect x="270" y="28" width="130" height="55" rx="6" fill="#fef9e7" stroke="#fad67d" />
      {[[35,48],[55,55],[75,46],[95,58],[115,50],[45,68],[80,70],[125,62]].map(([x,y])=>(
        <circle key={`h${x}${y}`} cx={x} cy={y} r="3.5" fill="#2874a6" />
      ))}
      {[[295,50],[340,62],[370,48]].map(([x,y])=>(
        <circle key={`l${x}${y}`} cx={x} cy={y} r="3.5" fill="#d68910" />
      ))}
      <text x="55" y="22" fontSize="10" fill="#2874a6" fontWeight="700" fontFamily="DM Sans,sans-serif" letterSpacing="0.06em">HIGH PRESSURE</text>
      <text x="295" y="22" fontSize="10" fill="#d68910" fontWeight="700" fontFamily="DM Sans,sans-serif" letterSpacing="0.06em">LOW PRESSURE</text>
      <path d="M160 55C185 48 220 46 250 50C258 51 265 54 270 57" stroke="#3498db" strokeWidth="1.5" strokeDasharray="5 4" fill="none" />
      <text x="190" y="42" fontSize="9" fill="#3498db" fontFamily="DM Sans,sans-serif">Air flows →</text>
      <rect x="20" y="100" width="80" height="50" rx="6" fill="#f4ecf7" stroke="#d7bde2" />
      <text x="30" y="130" fontSize="10" fill="#8e44ad" fontWeight="600" fontFamily="DM Sans,sans-serif">Squeezed</text>
      <text x="22" y="162" fontSize="9" fill="#8e44ad" fontFamily="DM Sans,sans-serif">Compressible</text>
      <rect x="130" y="100" width="80" height="50" rx="6" fill="#eafaf1" stroke="#abebc6" />
      <path d="M145 126C157 118 170 116 192 120" stroke="#27ae60" strokeWidth="1.5" fill="none" />
      <text x="133" y="162" fontSize="9" fill="#27ae60" fontFamily="DM Sans,sans-serif">Low Viscosity</text>
      <text x="260" y="110" fontSize="13" fill="#2c3e50" fontWeight="700" fontFamily="DM Sans,sans-serif">Air is a fluid</text>
      <text x="260" y="128" fontSize="10" fill="#5a6a78" fontFamily="DM Sans,sans-serif">• Flows like water</text>
      <text x="260" y="144" fontSize="10" fill="#5a6a78" fontFamily="DM Sans,sans-serif">• Compressible (unlike water)</text>
      <text x="260" y="160" fontSize="10" fill="#5a6a78" fontFamily="DM Sans,sans-serif">• Very low viscosity</text>
    </svg>
  )
}

export function TropopauseSvg() {
  return (
    <svg viewBox="0 0 520 190" fill="none" className="block-svg">
      <rect width="520" height="190" rx="12" fill="#eaf2f8" />
      <rect x="30" y="12" width="460" height="60" rx="8" fill="#f4ecf7" stroke="#d7bde2" />
      <rect x="30" y="88" width="460" height="80" rx="8" fill="#d6eaf8" stroke="#aed6f1" />
      <line x1="30" y1="76" x2="490" y2="76" stroke="#f39c12" strokeWidth="2.5" strokeDasharray="8 6" />
      <text x="44" y="38" fontSize="14" fill="#8e44ad" fontWeight="700" fontFamily="DM Sans,sans-serif">Stratosphere</text>
      <text x="44" y="54" fontSize="10" fill="#a569bd" fontFamily="DM Sans,sans-serif">Stable · Smooth · Clear</text>
      <text x="360" y="54" fontSize="10" fill="#a569bd" fontFamily="DM Sans,sans-serif">Jets cruise here ✈</text>
      <text x="44" y="114" fontSize="14" fill="#2874a6" fontWeight="700" fontFamily="DM Sans,sans-serif">Troposphere</text>
      <text x="44" y="130" fontSize="10" fill="#5dade2" fontFamily="DM Sans,sans-serif">Weather · Turbulence · Variable temp</text>
      <text x="210" y="72" fontSize="11" fill="#d68910" fontWeight="700" fontFamily="DM Sans,sans-serif">≈ 36,000 ft — Tropopause</text>
      <path d="M120 142C150 134 180 136 210 146" stroke="rgba(93,173,226,0.3)" strokeWidth="12" strokeLinecap="round" fill="none" />
      <path d="M280 150C310 142 350 144 390 158" stroke="rgba(93,173,226,0.2)" strokeWidth="10" strokeLinecap="round" fill="none" />
      <text x="44" y="182" fontSize="9" fill="#a0aab4" fontFamily="DM Sans,sans-serif">▼ Sea level</text>
      <text x="420" y="182" fontSize="9" fill="#a0aab4" fontFamily="DM Sans,sans-serif">▲ 40,000 ft+</text>
    </svg>
  )
}

export function PerformanceSvg() {
  return (
    <svg viewBox="0 0 520 170" fill="none" className="block-svg">
      <rect width="520" height="170" rx="12" fill="#eaf2f8" />
      <text x="165" y="20" fontSize="12" fill="#2c3e50" fontWeight="700" fontFamily="DM Sans,sans-serif">Density → Pilot Performance</text>
      <line x1="20" y1="115" x2="500" y2="115" stroke="#a0aab4" strokeWidth="1.5" />
      <line x1="20" y1="115" x2="500" y2="115" stroke="#2874a6" strokeWidth="2" strokeDasharray="12 8" />
      <path d="M85 102L108 78L118 84L97 106Z" fill="#aed6f1" />
      <path d="M85 102L65 88L62 96L80 108Z" fill="#85c1e9" />
      <circle cx="72" cy="112" r="5" fill="#2874a6" /><circle cx="100" cy="112" r="5" fill="#2874a6" />
      <text x="55" y="140" fontSize="11" fill="#2874a6" fontWeight="600" fontFamily="DM Sans,sans-serif">Cold Day ❄</text>
      <text x="50" y="156" fontSize="9" fill="#5dade2" fontFamily="DM Sans,sans-serif">Short take-off</text>
      <path d="M375 102L398 78L408 84L387 106Z" fill="#fdeaa8" />
      <path d="M375 102L355 88L352 96L370 108Z" fill="#fad67d" />
      <circle cx="362" cy="112" r="5" fill="#d68910" /><circle cx="390" cy="112" r="5" fill="#d68910" />
      <text x="345" y="140" fontSize="11" fill="#d68910" fontWeight="600" fontFamily="DM Sans,sans-serif">Hot Day ☀</text>
      <text x="340" y="156" fontSize="9" fill="#f39c12" fontFamily="DM Sans,sans-serif">Longer take-off</text>
      <line x1="115" y1="72" x2="115" y2="42" stroke="#2874a6" strokeWidth="1.5" />
      <path d="M110 47L115 37L120 47" stroke="#2874a6" strokeWidth="1.5" fill="none" />
      <text x="125" y="58" fontSize="9" fill="#2874a6" fontFamily="DM Sans,sans-serif">Better climb</text>
      <line x1="405" y1="72" x2="415" y2="48" stroke="#d68910" strokeWidth="1.5" strokeDasharray="4 3" />
      <text x="420" y="55" fontSize="9" fill="#d68910" fontFamily="DM Sans,sans-serif">Reduced climb</text>
    </svg>
  )
}

export function CautionSvg() {
  return (
    <svg viewBox="0 0 520 160" fill="none" className="block-svg">
      <rect width="520" height="160" rx="12" fill="#fdedec" />
      <path d="M260 10L288 55H232Z" fill="none" stroke="#e74c3c" strokeWidth="2" />
      <text x="254" y="45" fontSize="18" fill="#e74c3c" fontWeight="900" fontFamily="DM Sans,sans-serif">!</text>
      <text x="175" y="75" fontSize="14" fill="#2c3e50" fontWeight="700" fontFamily="Playfair Display,serif">Common Exam Traps</text>
      <line x1="175" y1="82" x2="350" y2="82" stroke="#e74c3c" strokeWidth="1.5" opacity="0.4" />
      <line x1="260" y1="92" x2="260" y2="152" stroke="#e8ecf0" />
      <text x="50" y="110" fontSize="10" fill="#c0392b" fontFamily="DM Sans,sans-serif">✗ "Cold air is thin"</text>
      <text x="50" y="128" fontSize="10" fill="#c0392b" fontFamily="DM Sans,sans-serif">✗ "Fly faster = always fine"</text>
      <text x="50" y="146" fontSize="10" fill="#c0392b" fontFamily="DM Sans,sans-serif">✗ "Atmosphere is constant"</text>
      <text x="280" y="110" fontSize="10" fill="#27ae60" fontFamily="DM Sans,sans-serif">✓ Cold air is denser</text>
      <text x="280" y="128" fontSize="10" fill="#27ae60" fontFamily="DM Sans,sans-serif">✓ Drag rises with V²</text>
      <text x="280" y="146" fontSize="10" fill="#27ae60" fontFamily="DM Sans,sans-serif">✓ Conditions vary daily</text>
    </svg>
  )
}

export function GoldenSvg() {
  return (
    <svg viewBox="0 0 520 150" fill="none" className="block-svg">
      <rect width="520" height="150" rx="12" fill="#fef9e7" />
      <text x="238" y="28" fontSize="22" fill="#f39c12">★</text>
      <text x="180" y="50" fontSize="14" fill="#7d6608" fontWeight="800" fontFamily="Playfair Display,serif">3 Golden Facts</text>
      <line x1="180" y1="56" x2="340" y2="56" stroke="#f39c12" strokeWidth="1.5" opacity="0.4" />
      {[{n:'1',y:80,t:'Density ↓  →  fly faster to keep lift'},{n:'2',y:105,t:'Temp stops falling ≈ 36,000 ft (Tropopause)'},{n:'3',y:130,t:'Air: compressible, low-viscosity, high → low pressure'}].map((r)=>(
        <g key={r.n}>
          <circle cx="70" cy={r.y-4} r="10" fill="none" stroke="#f39c12" strokeWidth="1.2" />
          <text x="66" y={r.y} fontSize="10" fill="#d68910" fontWeight="700" fontFamily="DM Sans,sans-serif">{r.n}</text>
          <text x="90" y={r.y} fontSize="11" fill="#5a4a04" fontFamily="DM Sans,sans-serif">{r.t}</text>
        </g>
      ))}
    </svg>
  )
}

export function CockpitSvg() {
  return (
    <svg viewBox="0 0 520 200" fill="none" className="block-svg">
      <defs>
        <linearGradient id="cksky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d6eaf8" /><stop offset="100%" stopColor="#85c1e9" />
        </linearGradient>
        <linearGradient id="ckpnl" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2c3e50" /><stop offset="100%" stopColor="#1a252f" />
        </linearGradient>
      </defs>
      <rect width="520" height="200" rx="12" fill="#eaf2f8" />
      <rect x="10" y="8" width="500" height="184" rx="10" fill="url(#cksky)" />
      <circle cx="420" cy="42" r="22" fill="#fdeaa8" /><circle cx="420" cy="42" r="12" fill="#f7c948" />
      <path d="M140 60L180 42L190 48L152 64Z" fill="#fff" fillOpacity="0.85" />
      <path d="M140 60L100 48L96 55L135 66Z" fill="#d6eaf8" />
      <path d="M10 118Q140 88 260 93Q380 98 510 118V192H10Z" fill="url(#ckpnl)" />
      <circle cx="120" cy="148" r="22" fill="#34495e" /><circle cx="120" cy="148" r="14" fill="#1a252f" />
      <line x1="120" y1="148" x2="120" y2="136" stroke="#5dade2" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="210" y="128" width="100" height="42" rx="6" fill="#34495e" />
      <rect x="218" y="134" width="84" height="30" rx="4" fill="#1a252f" />
      <text x="232" y="154" fontSize="9" fill="#5dade2" fontFamily="monospace">ALT 5200</text>
      <circle cx="400" cy="148" r="22" fill="#34495e" /><circle cx="400" cy="148" r="14" fill="#1a252f" />
      <path d="M400 136V142" stroke="#5dade2" strokeWidth="1.2" /><path d="M400 154V160" stroke="#5dade2" strokeWidth="1.2" />
    </svg>
  )
}

/* ═══════ CHAPTER 2 — STATIC PRESSURE ═══════ */

export function PressureFormuaSvg() {
  return (
    <svg viewBox="0 0 520 160" fill="none" className="block-svg">
      <rect width="520" height="160" rx="12" fill="#eaf6ee" />
      <text x="130" y="28" fontSize="13" fill="#1e8449" fontWeight="700" fontFamily="DM Sans,sans-serif">Pressure = Force / Area</text>
      <rect x="30" y="44" width="140" height="70" rx="8" fill="#d5f5e3" stroke="#27ae60" strokeWidth="1.5" />
      <text x="55" y="68" fontSize="10" fill="#1e8449" fontWeight="600" fontFamily="DM Sans,sans-serif">1 Pa = 1 N/m²</text>
      <text x="45" y="88" fontSize="9" fill="#27ae60" fontFamily="DM Sans,sans-serif">Very small unit</text>
      <text x="45" y="104" fontSize="9" fill="#27ae60" fontFamily="DM Sans,sans-serif">£1 coin ≈ 100 Pa</text>
      <rect x="195" y="44" width="140" height="70" rx="8" fill="#d6eaf8" stroke="#2874a6" strokeWidth="1.5" />
      <text x="208" y="68" fontSize="10" fill="#2874a6" fontWeight="600" fontFamily="DM Sans,sans-serif">1 hPa = 100 Pa</text>
      <text x="208" y="88" fontSize="9" fill="#5dade2" fontFamily="DM Sans,sans-serif">Aviation standard unit</text>
      <text x="208" y="104" fontSize="9" fill="#5dade2" fontFamily="DM Sans,sans-serif">= 1 millibar (mb)</text>
      <rect x="360" y="44" width="140" height="70" rx="8" fill="#fef9e7" stroke="#f39c12" strokeWidth="1.5" />
      <text x="373" y="68" fontSize="10" fill="#d68910" fontWeight="600" fontFamily="DM Sans,sans-serif">ISA Sea Level</text>
      <text x="373" y="88" fontSize="12" fill="#7d6608" fontWeight="800" fontFamily="DM Sans,sans-serif">1013.25 hPa</text>
      <text x="373" y="104" fontSize="9" fill="#d68910" fontFamily="DM Sans,sans-serif">= 101,325 Pa</text>
      <text x="170" y="145" fontSize="9" fill="#a0aab4" fontFamily="DM Sans,sans-serif">Pa → hPa (×100) → Sea level = 1013.25 hPa = 1013.25 mb</text>
    </svg>
  )
}

export function StaticPressureSvg() {
  return (
    <svg viewBox="0 0 520 180" fill="none" className="block-svg">
      <rect width="520" height="180" rx="12" fill="#eaf2f8" />
      <text x="155" y="24" fontSize="13" fill="#2c3e50" fontWeight="700" fontFamily="DM Sans,sans-serif">Static Pressure — Acts Equally</text>
      <ellipse cx="160" cy="105" rx="75" ry="55" fill="#d6eaf8" stroke="#2874a6" strokeWidth="2" />
      <path d="M160 50L160 38" stroke="#e74c3c" strokeWidth="2" markerEnd="url(#spA)" />
      <path d="M160 160L160 172" stroke="#e74c3c" strokeWidth="2" markerEnd="url(#spA)" />
      <path d="M85 105L73 105" stroke="#e74c3c" strokeWidth="2" markerEnd="url(#spA)" />
      <path d="M235 105L247 105" stroke="#e74c3c" strokeWidth="2" markerEnd="url(#spA)" />
      <path d="M107 68L97 58" stroke="#e74c3c" strokeWidth="1.5" markerEnd="url(#spA)" />
      <path d="M213 68L223 58" stroke="#e74c3c" strokeWidth="1.5" markerEnd="url(#spA)" />
      <path d="M107 142L97 152" stroke="#e74c3c" strokeWidth="1.5" markerEnd="url(#spA)" />
      <path d="M213 142L223 152" stroke="#e74c3c" strokeWidth="1.5" markerEnd="url(#spA)" />
      <defs><marker id="spA" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><circle cx="3" cy="3" r="2.5" fill="#e74c3c" /></marker></defs>
      <text x="130" y="100" fontSize="10" fill="#2874a6" fontWeight="700" fontFamily="DM Sans,sans-serif">Aircraft</text>
      <text x="120" y="116" fontSize="9" fill="#5dade2" fontFamily="DM Sans,sans-serif">cross-section</text>
      <rect x="310" y="40" width="185" height="120" rx="8" fill="#fff" stroke="#e8ecf0" />
      <text x="325" y="62" fontSize="10" fill="#2c3e50" fontWeight="700" fontFamily="DM Sans,sans-serif">Key Principles</text>
      <text x="325" y="82" fontSize="9" fill="#5a6a78" fontFamily="DM Sans,sans-serif">• Equal on all surfaces</text>
      <text x="325" y="98" fontSize="9" fill="#5a6a78" fontFamily="DM Sans,sans-serif">• No net force direction</text>
      <text x="325" y="114" fontSize="9" fill="#5a6a78" fontFamily="DM Sans,sans-serif">• Doesn't create lift/drag</text>
      <text x="325" y="130" fontSize="9" fill="#5a6a78" fontFamily="DM Sans,sans-serif">• Only differences create</text>
      <text x="325" y="146" fontSize="9" fill="#5a6a78" fontFamily="DM Sans,sans-serif">  aerodynamic forces</text>
    </svg>
  )
}

export function PressureAltitudeSvg() {
  return (
    <svg viewBox="0 0 520 210" fill="none" className="block-svg">
      <rect width="520" height="210" rx="12" fill="#eaf2f8" />
      <text x="160" y="24" fontSize="13" fill="#2c3e50" fontWeight="700" fontFamily="DM Sans,sans-serif">Pressure vs Altitude</text>
      <line x1="60" y1="40" x2="60" y2="195" stroke="#a0aab4" strokeWidth="1.5" />
      <line x1="60" y1="195" x2="340" y2="195" stroke="#a0aab4" strokeWidth="1.5" />
      <text x="18" y="120" fontSize="9" fill="#a0aab4" fontFamily="DM Sans,sans-serif" transform="rotate(-90 18 120)">Altitude (ft)</text>
      <text x="180" y="208" fontSize="9" fill="#a0aab4" fontFamily="DM Sans,sans-serif">Pressure (hPa) →</text>
      <path d="M60 190C80 188 140 175 180 155C220 130 260 90 300 55C320 38 335 30 340 28" stroke="#2874a6" strokeWidth="2.5" fill="none" />
      {[{x:60,y:190,alt:'0',p:'1013'},{x:100,y:178,alt:'5k',p:'843'},{x:140,y:162,alt:'10k',p:'697'},{x:195,y:138,alt:'18k',p:'506'},{x:275,y:72,alt:'35k',p:'238'},{x:310,y:50,alt:'40k',p:'188'}].map((d)=>(
        <g key={d.alt}>
          <circle cx={d.x} cy={d.y} r="4" fill="#2874a6" />
          <text x={d.x - 14} y={d.y - 10} fontSize="8" fill="#2874a6" fontWeight="600" fontFamily="DM Sans,sans-serif">{d.alt} ft</text>
          <text x={d.x + 6} y={d.y + 4} fontSize="7" fill="#5dade2" fontFamily="DM Sans,sans-serif">{d.p}</text>
        </g>
      ))}
      <line x1="195" y1="138" x2="195" y2="195" stroke="#f39c12" strokeWidth="1" strokeDasharray="4 3" />
      <text x="155" y="194" fontSize="8" fill="#d68910" fontWeight="600" fontFamily="DM Sans,sans-serif">½ here!</text>
      <rect x="370" y="45" width="135" height="80" rx="8" fill="#fef9e7" stroke="#fad67d" />
      <text x="385" y="66" fontSize="10" fill="#7d6608" fontWeight="700" fontFamily="DM Sans,sans-serif">Key Fact</text>
      <text x="385" y="84" fontSize="9" fill="#d68910" fontFamily="DM Sans,sans-serif">Pressure halves</text>
      <text x="385" y="98" fontSize="9" fill="#d68910" fontFamily="DM Sans,sans-serif">every ~18,000 ft</text>
      <text x="385" y="116" fontSize="8" fill="#c0392b" fontWeight="600" fontFamily="DM Sans,sans-serif">NOT every 10,000 ft!</text>
      <rect x="370" y="140" width="135" height="50" rx="8" fill="#d5f5e3" stroke="#27ae60" />
      <text x="385" y="160" fontSize="9" fill="#1e8449" fontWeight="600" fontFamily="DM Sans,sans-serif">Non-linear curve</text>
      <text x="385" y="176" fontSize="8" fill="#27ae60" fontFamily="DM Sans,sans-serif">Logarithmic decay</text>
    </svg>
  )
}

export function StaticPortSvg() {
  return (
    <svg viewBox="0 0 520 170" fill="none" className="block-svg">
      <rect width="520" height="170" rx="12" fill="#eaf2f8" />
      <text x="160" y="24" fontSize="13" fill="#2c3e50" fontWeight="700" fontFamily="DM Sans,sans-serif">The Static Port System</text>
      <path d="M50 90C100 70 180 60 260 62C340 64 420 76 470 95" fill="#d6eaf8" stroke="#2874a6" strokeWidth="2" />
      <path d="M50 96C100 80 180 72 260 74C340 76 420 86 470 100" fill="#85c1e9" stroke="#2874a6" strokeWidth="1.5" />
      <rect x="180" y="66" width="12" height="6" rx="2" fill="#e74c3c" />
      <line x1="186" y1="72" x2="186" y2="110" stroke="#e74c3c" strokeWidth="1" strokeDasharray="3 2" />
      <text x="145" y="58" fontSize="8" fill="#e74c3c" fontWeight="700" fontFamily="DM Sans,sans-serif">Static Port</text>
      <path d="M40 82L60 74" stroke="#3498db" strokeWidth="1" strokeDasharray="3 3" />
      <path d="M40 86L60 80" stroke="#3498db" strokeWidth="1" strokeDasharray="3 3" />
      <path d="M40 90L60 86" stroke="#3498db" strokeWidth="1" strokeDasharray="3 3" />
      <text x="10" y="80" fontSize="7" fill="#3498db" fontFamily="DM Sans,sans-serif">Air</text>
      <rect x="310" y="100" width="80" height="32" rx="6" fill="#34495e" />
      <circle cx="330" cy="116" r="8" fill="#1a252f" /><text x="325" y="120" fontSize="7" fill="#5dade2" fontFamily="monospace">ALT</text>
      <rect x="310" y="60" width="80" height="32" rx="6" fill="#34495e" />
      <circle cx="330" cy="76" r="8" fill="#1a252f" /><text x="325" y="80" fontSize="7" fill="#5dade2" fontFamily="monospace">VSI</text>
      <rect x="410" y="80" width="80" height="32" rx="6" fill="#34495e" />
      <circle cx="430" cy="96" r="8" fill="#1a252f" /><text x="425" y="100" fontSize="7" fill="#5dade2" fontFamily="monospace">ASI</text>
      <line x1="192" y1="110" x2="310" y2="116" stroke="#e74c3c" strokeWidth="1" />
      <line x1="192" y1="105" x2="310" y2="76" stroke="#e74c3c" strokeWidth="1" />
      <line x1="192" y1="108" x2="410" y2="96" stroke="#e74c3c" strokeWidth="1" />
      <rect x="30" y="130" width="460" height="30" rx="6" fill="#fdedec" stroke="#e74c3c" strokeWidth="1" />
      <text x="110" y="150" fontSize="10" fill="#c0392b" fontWeight="600" fontFamily="DM Sans,sans-serif">⚠ Block the static port → ALL THREE instruments fail simultaneously</text>
    </svg>
  )
}

export function HapsMnemonicSvg() {
  return (
    <svg viewBox="0 0 520 130" fill="none" className="block-svg">
      <rect width="520" height="130" rx="12" fill="#fef9e7" />
      <text x="210" y="24" fontSize="13" fill="#7d6608" fontWeight="700" fontFamily="DM Sans,sans-serif">HAPS</text>
      {[
        {x:30,l:'H',t:'Hectopascal',sub:'Aviation pressure unit',c:'#27ae60',bg:'#d5f5e3'},
        {x:152,l:'A',t:'Always acts',sub:'On the aircraft',c:'#2874a6',bg:'#d6eaf8'},
        {x:275,l:'P',t:'Presses equally',sub:'On all surfaces',c:'#8e44ad',bg:'#f4ecf7'},
        {x:398,l:'S',t:'Static = still air',sub:'Stationary state',c:'#d68910',bg:'#fef9e7'},
      ].map((d)=>(
        <g key={d.l}>
          <rect x={d.x} y="38" width="105" height="78" rx="8" fill={d.bg} stroke={d.c} strokeWidth="1.5" />
          <circle cx={d.x+20} cy="60" r="12" fill={d.c} />
          <text x={d.x+16} y="65" fontSize="14" fill="#fff" fontWeight="800" fontFamily="DM Sans,sans-serif">{d.l}</text>
          <text x={d.x+38} y="62" fontSize="9" fill={d.c} fontWeight="700" fontFamily="DM Sans,sans-serif">{d.t}</text>
          <text x={d.x+12} y="96" fontSize="8" fill="#5a6a78" fontFamily="DM Sans,sans-serif">{d.sub}</text>
        </g>
      ))}
    </svg>
  )
}

/* ═══════ CHAPTER 3 — TEMPERATURE & AIR DENSITY ═══════ */

export function ThermometerScaleSvg() {
  return (
    <svg viewBox="0 0 520 220" fill="none" className="block-svg">
      <rect width="520" height="220" rx="12" fill="#eaf2f8" />
      <text x="158" y="22" fontSize="13" fill="#2c3e50" fontWeight="700" fontFamily="DM Sans,sans-serif">Temperature Scales: °C vs Kelvin</text>
      {/* Celsius thermometer */}
      <rect x="70" y="40" width="22" height="150" rx="11" fill="#d6eaf8" stroke="#2874a6" strokeWidth="1.5" />
      <rect x="74" y="72" width="14" height="114" rx="7" fill="#e74c3c" opacity="0.7" />
      <circle cx="81" cy="192" r="14" fill="#e74c3c" opacity="0.8" />
      <text x="56" y="36" fontSize="11" fill="#2874a6" fontWeight="700" fontFamily="DM Sans,sans-serif">°C</text>
      {[{y:78,l:'100°C — Boils'},{y:114,l:'+37°C — Body'},{y:128,l:'+15°C — ISA sea level',bold:true},{y:162,l:'0°C — Freezes'},{y:186,l:'−56.5°C — Tropopause'}].map((d,i)=>(
        <g key={i}>
          <line x1="92" y1={d.y} x2="102" y2={d.y} stroke="#2874a6" strokeWidth="1" />
          <text x="106" y={d.y+3} fontSize={d.bold?'9':'8'} fill={d.bold?'#2874a6':'#5a6a78'} fontWeight={d.bold?'700':'400'} fontFamily="DM Sans,sans-serif">{d.l}</text>
        </g>
      ))}
      {/* Kelvin thermometer */}
      <rect x="340" y="40" width="22" height="150" rx="11" fill="#fef9e7" stroke="#d68910" strokeWidth="1.5" />
      <rect x="344" y="72" width="14" height="114" rx="7" fill="#f39c12" opacity="0.6" />
      <circle cx="351" cy="192" r="14" fill="#f39c12" opacity="0.7" />
      <text x="332" y="36" fontSize="11" fill="#d68910" fontWeight="700" fontFamily="DM Sans,sans-serif">K</text>
      {[{y:78,l:'373 K'},{y:114,l:'310 K'},{y:128,l:'288 K ← memorise!',bold:true},{y:162,l:'273 K'},{y:186,l:'216.5 K'}].map((d,i)=>(
        <g key={i}>
          <line x1="362" y1={d.y} x2="372" y2={d.y} stroke="#d68910" strokeWidth="1" />
          <text x="376" y={d.y+3} fontSize={d.bold?'9':'8'} fill={d.bold?'#d68910':'#7d6608'} fontWeight={d.bold?'700':'400'} fontFamily="DM Sans,sans-serif">{d.l}</text>
        </g>
      ))}
      {/* Conversion arrow */}
      <rect x="195" y="95" width="120" height="36" rx="8" fill="#d5f5e3" stroke="#27ae60" strokeWidth="1.5" />
      <text x="213" y="118" fontSize="14" fill="#1e8449" fontWeight="800" fontFamily="DM Sans,sans-serif">K = °C + 273</text>
      <path d="M142 115L195 115" stroke="#27ae60" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#tmA)" />
      <path d="M315 115L362 115" stroke="#27ae60" strokeWidth="1.5" strokeDasharray="4 3" />
      <defs><marker id="tmA" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0 0L6 3L0 6Z" fill="#27ae60" /></marker></defs>
      <text x="180" y="210" fontSize="8" fill="#a0aab4" fontFamily="DM Sans,sans-serif">0 K = absolute zero (−273°C) — molecular motion stops</text>
    </svg>
  )
}

export function MoleculeMotionSvg() {
  return (
    <svg viewBox="0 0 520 170" fill="none" className="block-svg">
      <rect width="520" height="170" rx="12" fill="#eaf2f8" />
      <text x="148" y="22" fontSize="13" fill="#2c3e50" fontWeight="700" fontFamily="DM Sans,sans-serif">Temperature &amp; Molecular Motion</text>
      {/* Cold box */}
      <rect x="20" y="38" width="150" height="110" rx="8" fill="#d6eaf8" stroke="#2874a6" strokeWidth="1.5" />
      <text x="50" y="56" fontSize="10" fill="#2874a6" fontWeight="700" fontFamily="DM Sans,sans-serif">COLD AIR ❄</text>
      {[[42,72],[62,80],[82,70],[58,98],[78,90],[98,78],[48,110],[68,104],[88,112],[108,96],[72,120],[92,128]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="5" fill="#2874a6" opacity="0.75" />
      ))}
      <text x="30" y="158" fontSize="8" fill="#2874a6" fontFamily="DM Sans,sans-serif">Packed tight → MORE dense</text>
      {/* Hot box */}
      <rect x="200" y="38" width="150" height="110" rx="8" fill="#fef9e7" stroke="#d68910" strokeWidth="1.5" />
      <text x="235" y="56" fontSize="10" fill="#d68910" fontWeight="700" fontFamily="DM Sans,sans-serif">HOT AIR ☀</text>
      {[[218,74],[268,90],[310,72],[242,118],[290,130],[328,108],[256,68],[222,128]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="5" fill="#d68910" opacity="0.7" />
      ))}
      <text x="206" y="158" fontSize="8" fill="#d68910" fontFamily="DM Sans,sans-serif">Spread out → LESS dense</text>
      {/* Summary */}
      <rect x="380" y="42" width="125" height="100" rx="8" fill="#fff" stroke="#e8ecf0" />
      <text x="395" y="62" fontSize="10" fill="#2c3e50" fontWeight="700" fontFamily="DM Sans,sans-serif">Key Takeaway</text>
      <text x="395" y="82" fontSize="9" fill="#2874a6" fontFamily="DM Sans,sans-serif">Cold → dense</text>
      <text x="395" y="96" fontSize="9" fill="#2874a6" fontFamily="DM Sans,sans-serif">= better performance</text>
      <text x="395" y="116" fontSize="9" fill="#d68910" fontFamily="DM Sans,sans-serif">Hot → thin</text>
      <text x="395" y="130" fontSize="9" fill="#d68910" fontFamily="DM Sans,sans-serif">= worse performance</text>
    </svg>
  )
}

export function DensityTriangleSvg() {
  return (
    <svg viewBox="0 0 520 200" fill="none" className="block-svg">
      <rect width="520" height="200" rx="12" fill="#eaf2f8" />
      <text x="138" y="22" fontSize="13" fill="#2c3e50" fontWeight="700" fontFamily="DM Sans,sans-serif">Three Controls of Air Density</text>
      {/* Centre circle */}
      <circle cx="260" cy="115" r="35" fill="#fff" stroke="#2874a6" strokeWidth="2" />
      <text x="243" y="112" fontSize="16" fill="#2874a6" fontWeight="800" fontFamily="DM Sans,sans-serif">ρ</text>
      <text x="237" y="128" fontSize="8" fill="#5dade2" fontFamily="DM Sans,sans-serif">Density</text>
      {/* Pressure */}
      <rect x="30" y="50" width="120" height="60" rx="8" fill="#d5f5e3" stroke="#27ae60" strokeWidth="1.5" />
      <text x="42" y="72" fontSize="11" fill="#1e8449" fontWeight="700" fontFamily="DM Sans,sans-serif">Pressure (P)</text>
      <text x="42" y="90" fontSize="9" fill="#27ae60" fontFamily="DM Sans,sans-serif">P ↑ → ρ ↑</text>
      <text x="42" y="103" fontSize="8" fill="#27ae60" fontFamily="DM Sans,sans-serif">Same direction</text>
      <line x1="150" y1="80" x2="225" y2="105" stroke="#27ae60" strokeWidth="2" markerEnd="url(#dtG)" />
      {/* Temperature */}
      <rect x="370" y="50" width="130" height="60" rx="8" fill="#fdedec" stroke="#e74c3c" strokeWidth="1.5" />
      <text x="380" y="72" fontSize="11" fill="#c0392b" fontWeight="700" fontFamily="DM Sans,sans-serif">Temperature (T)</text>
      <text x="380" y="90" fontSize="9" fill="#e74c3c" fontFamily="DM Sans,sans-serif">T ↑ → ρ ↓</text>
      <text x="380" y="103" fontSize="8" fill="#e74c3c" fontFamily="DM Sans,sans-serif">Opposite direction!</text>
      <line x1="370" y1="80" x2="295" y2="105" stroke="#e74c3c" strokeWidth="2" markerEnd="url(#dtR)" />
      {/* Humidity */}
      <rect x="190" y="160" width="140" height="35" rx="8" fill="#f4ecf7" stroke="#8e44ad" strokeWidth="1.5" />
      <text x="205" y="178" fontSize="10" fill="#8e44ad" fontWeight="700" fontFamily="DM Sans,sans-serif">Humidity (H)</text>
      <text x="308" y="178" fontSize="9" fill="#8e44ad" fontFamily="DM Sans,sans-serif">H ↑ → ρ ↓</text>
      <line x1="260" y1="160" x2="260" y2="150" stroke="#8e44ad" strokeWidth="2" markerEnd="url(#dtP)" />
      <defs>
        <marker id="dtG" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0 0L6 3L0 6Z" fill="#27ae60" /></marker>
        <marker id="dtR" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0 0L6 3L0 6Z" fill="#e74c3c" /></marker>
        <marker id="dtP" markerWidth="6" markerHeight="6" refX="3" refY="5" orient="auto"><path d="M0 6L3 0L6 6Z" fill="#8e44ad" /></marker>
      </defs>
    </svg>
  )
}

export function IdealGasLawSvg() {
  return (
    <svg viewBox="0 0 520 170" fill="none" className="block-svg">
      <rect width="520" height="170" rx="12" fill="#eaf2f8" />
      <text x="168" y="22" fontSize="13" fill="#2c3e50" fontWeight="700" fontFamily="DM Sans,sans-serif">The Ideal Gas Law</text>
      {/* Big formula */}
      <rect x="160" y="34" width="200" height="48" rx="10" fill="#fff" stroke="#2874a6" strokeWidth="2" />
      <text x="198" y="64" fontSize="22" fill="#2874a6" fontWeight="800" fontFamily="DM Sans,sans-serif">ρ ∝ P / T</text>
      {/* Labels */}
      <text x="44" y="68" fontSize="9" fill="#5a6a78" fontFamily="DM Sans,sans-serif">ρ = density (kg/m³)</text>
      <text x="390" y="56" fontSize="9" fill="#5a6a78" fontFamily="DM Sans,sans-serif">P = pressure (hPa)</text>
      <text x="390" y="72" fontSize="9" fill="#5a6a78" fontFamily="DM Sans,sans-serif">T = temp (Kelvin!)</text>
      {/* Tug of war visual */}
      <line x1="100" y1="120" x2="420" y2="120" stroke="#a0aab4" strokeWidth="2" />
      <circle cx="260" cy="120" r="6" fill="#2874a6" />
      <text x="247" y="110" fontSize="8" fill="#2874a6" fontWeight="700" fontFamily="DM Sans,sans-serif">ρ</text>
      {/* Pressure side */}
      <rect x="50" y="100" width="90" height="40" rx="6" fill="#d5f5e3" stroke="#27ae60" strokeWidth="1" />
      <text x="60" y="118" fontSize="10" fill="#1e8449" fontWeight="700" fontFamily="DM Sans,sans-serif">Pressure ↑</text>
      <text x="60" y="132" fontSize="8" fill="#27ae60" fontFamily="DM Sans,sans-serif">→ pulls ρ UP</text>
      <path d="M140 120L254 120" stroke="#27ae60" strokeWidth="2" markerEnd="url(#igG)" />
      {/* Temperature side */}
      <rect x="380" y="100" width="105" height="40" rx="6" fill="#fdedec" stroke="#e74c3c" strokeWidth="1" />
      <text x="388" y="118" fontSize="10" fill="#c0392b" fontWeight="700" fontFamily="DM Sans,sans-serif">Temperature ↑</text>
      <text x="388" y="132" fontSize="8" fill="#e74c3c" fontFamily="DM Sans,sans-serif">→ pulls ρ DOWN</text>
      <path d="M380 120L266 120" stroke="#e74c3c" strokeWidth="2" markerEnd="url(#igR)" />
      <text x="185" y="160" fontSize="8" fill="#a0aab4" fontFamily="DM Sans,sans-serif">T must ALWAYS be in Kelvin — NEVER Celsius</text>
      <defs>
        <marker id="igG" markerWidth="6" markerHeight="6" refX="1" refY="3" orient="auto"><path d="M6 0L0 3L6 6Z" fill="#27ae60" /></marker>
        <marker id="igR" markerWidth="6" markerHeight="6" refX="1" refY="3" orient="auto"><path d="M6 0L0 3L6 6Z" fill="#e74c3c" /></marker>
      </defs>
    </svg>
  )
}

export function DensityAltSvg() {
  return (
    <svg viewBox="0 0 520 200" fill="none" className="block-svg">
      <rect width="520" height="200" rx="12" fill="#eaf2f8" />
      <text x="158" y="22" fontSize="13" fill="#2c3e50" fontWeight="700" fontFamily="DM Sans,sans-serif">Density Altitude — What the Aircraft Feels</text>
      {/* Altitude bar — actual */}
      <rect x="60" y="50" width="30" height="120" rx="4" fill="#d6eaf8" stroke="#2874a6" strokeWidth="1.5" />
      <rect x="60" y="110" width="30" height="60" rx="4" fill="#2874a6" opacity="0.6" />
      <text x="52" y="44" fontSize="9" fill="#2874a6" fontWeight="700" fontFamily="DM Sans,sans-serif">Actual</text>
      <text x="96" y="140" fontSize="8" fill="#2874a6" fontFamily="DM Sans,sans-serif">5,000 ft</text>
      {/* Altitude bar — density */}
      <rect x="180" y="50" width="30" height="120" rx="4" fill="#fef9e7" stroke="#d68910" strokeWidth="1.5" />
      <rect x="180" y="80" width="30" height="90" rx="4" fill="#d68910" opacity="0.5" />
      <text x="168" y="44" fontSize="9" fill="#d68910" fontWeight="700" fontFamily="DM Sans,sans-serif">Density Alt</text>
      <text x="216" y="122" fontSize="8" fill="#d68910" fontFamily="DM Sans,sans-serif">7,400 ft</text>
      {/* Arrow showing difference */}
      <path d="M120 112L170 92" stroke="#e74c3c" strokeWidth="1.5" strokeDasharray="4 3" />
      <text x="118" y="100" fontSize="7" fill="#e74c3c" fontWeight="600" fontFamily="DM Sans,sans-serif">+2,400 ft</text>
      {/* Formula */}
      <rect x="280" y="50" width="220" height="42" rx="8" fill="#fff" stroke="#2874a6" strokeWidth="1.5" />
      <text x="292" y="68" fontSize="8" fill="#2874a6" fontWeight="700" fontFamily="DM Sans,sans-serif">DA = Press Alt + [120 × (OAT − ISA)]</text>
      <text x="292" y="82" fontSize="7" fill="#5dade2" fontFamily="DM Sans,sans-serif">5000 + [120 × (25 − 5)] = 5000 + 2400 = 7400 ft</text>
      {/* Explanation boxes */}
      <rect x="280" y="100" width="105" height="55" rx="6" fill="#fdedec" stroke="#e74c3c" strokeWidth="1" />
      <text x="290" y="118" fontSize="9" fill="#c0392b" fontWeight="700" fontFamily="DM Sans,sans-serif">Hot day effect</text>
      <text x="290" y="132" fontSize="8" fill="#e74c3c" fontFamily="DM Sans,sans-serif">DA &gt; Actual Alt</text>
      <text x="290" y="146" fontSize="8" fill="#e74c3c" fontFamily="DM Sans,sans-serif">Worse performance</text>
      <rect x="395" y="100" width="105" height="55" rx="6" fill="#d5f5e3" stroke="#27ae60" strokeWidth="1" />
      <text x="405" y="118" fontSize="9" fill="#1e8449" fontWeight="700" fontFamily="DM Sans,sans-serif">Cold day effect</text>
      <text x="405" y="132" fontSize="8" fill="#27ae60" fontFamily="DM Sans,sans-serif">DA &lt; Actual Alt</text>
      <text x="405" y="146" fontSize="8" fill="#27ae60" fontFamily="DM Sans,sans-serif">Better performance</text>
      <rect x="280" y="165" width="220" height="28" rx="6" fill="#fef9e7" stroke="#f39c12" strokeWidth="1" />
      <text x="295" y="184" fontSize="9" fill="#7d6608" fontWeight="600" fontFamily="DM Sans,sans-serif">⚠ Always check DA at high-elevation / hot airfields</text>
    </svg>
  )
}

export function TempLapseRateSvg() {
  return (
    <svg viewBox="0 0 520 200" fill="none" className="block-svg">
      <rect width="520" height="200" rx="12" fill="#eaf2f8" />
      <text x="140" y="22" fontSize="13" fill="#2c3e50" fontWeight="700" fontFamily="DM Sans,sans-serif">Temperature Lapse Rate &amp; Layers</text>
      {/* Axes */}
      <line x1="70" y1="40" x2="70" y2="185" stroke="#a0aab4" strokeWidth="1.5" />
      <line x1="70" y1="185" x2="380" y2="185" stroke="#a0aab4" strokeWidth="1.5" />
      <text x="22" y="115" fontSize="9" fill="#a0aab4" fontFamily="DM Sans,sans-serif" transform="rotate(-90 22 115)">Altitude (ft)</text>
      <text x="200" y="198" fontSize="9" fill="#a0aab4" fontFamily="DM Sans,sans-serif">Temperature (°C) →</text>
      {/* Troposphere line — falling temp */}
      <path d="M310 175L150 72" stroke="#2874a6" strokeWidth="2.5" />
      {/* Tropopause + Stratosphere — constant temp */}
      <path d="M150 72L150 42" stroke="#8e44ad" strokeWidth="2.5" />
      {/* Tropopause boundary */}
      <line x1="70" y1="72" x2="370" y2="72" stroke="#f39c12" strokeWidth="2" strokeDasharray="8 5" />
      <text x="260" y="68" fontSize="9" fill="#d68910" fontWeight="700" fontFamily="DM Sans,sans-serif">~36,000 ft Tropopause</text>
      {/* Data points */}
      <circle cx="310" cy="175" r="4" fill="#2874a6" />
      <text x="316" y="178" fontSize="8" fill="#2874a6" fontWeight="600" fontFamily="DM Sans,sans-serif">+15°C (sea level)</text>
      <circle cx="150" cy="72" r="4" fill="#f39c12" />
      <text x="75" y="62" fontSize="8" fill="#d68910" fontWeight="600" fontFamily="DM Sans,sans-serif">−56.5°C (Tropopause)</text>
      {/* Lapse rate annotation */}
      <path d="M235 130L235 100" stroke="#2874a6" strokeWidth="1" />
      <path d="M235 100L240 106" stroke="#2874a6" strokeWidth="1" />
      <path d="M235 100L230 106" stroke="#2874a6" strokeWidth="1" />
      <text x="242" y="118" fontSize="8" fill="#2874a6" fontFamily="DM Sans,sans-serif">~2°C / 1,000 ft</text>
      {/* Region labels */}
      <rect x="395" y="40" width="110" height="40" rx="6" fill="#f4ecf7" stroke="#8e44ad" strokeWidth="1" />
      <text x="408" y="58" fontSize="9" fill="#8e44ad" fontWeight="700" fontFamily="DM Sans,sans-serif">Stratosphere</text>
      <text x="408" y="72" fontSize="7" fill="#a569bd" fontFamily="DM Sans,sans-serif">Temp constant</text>
      <rect x="395" y="90" width="110" height="52" rx="6" fill="#d6eaf8" stroke="#2874a6" strokeWidth="1" />
      <text x="408" y="108" fontSize="9" fill="#2874a6" fontWeight="700" fontFamily="DM Sans,sans-serif">Troposphere</text>
      <text x="408" y="122" fontSize="7" fill="#5dade2" fontFamily="DM Sans,sans-serif">Temp falls ~2°C</text>
      <text x="408" y="134" fontSize="7" fill="#5dade2" fontFamily="DM Sans,sans-serif">per 1,000 ft</text>
    </svg>
  )
}

export function PressureBlanketsSvg() {
  return (
    <svg viewBox="0 0 520 180" fill="none" className="block-svg">
      <rect width="520" height="180" rx="12" fill="#eaf2f8" />
      <text x="130" y="22" fontSize="12" fill="#2c3e50" fontWeight="700" fontFamily="DM Sans,sans-serif">Atmosphere = Stack of Blankets</text>
      {[{y:35,o:0.15,l:'40,000 ft — very light'},{y:60,o:0.25,l:'35,000 ft — light'},{y:85,o:0.4,l:'18,000 ft — half weight'},{y:110,o:0.6,l:'10,000 ft — heavy'},{y:135,o:0.8,l:'5,000 ft — heavier'},{y:155,o:1,l:'Sea Level — maximum compression'}].map((b,i)=>(
        <g key={i}>
          <rect x="30" y={b.y} width="220" height="20" rx="4" fill="#2874a6" fillOpacity={b.o} stroke="#2874a6" strokeOpacity={b.o+0.1} strokeWidth="0.5" />
          <text x="260" y={b.y+14} fontSize="9" fill="#5a6a78" fontFamily="DM Sans,sans-serif">{b.l}</text>
        </g>
      ))}
      <path d="M140 170L140 30" stroke="#f39c12" strokeWidth="1.5" strokeDasharray="4 3" />
      <path d="M135 35L140 25L145 35" fill="#f39c12" />
      <text x="148" y="34" fontSize="8" fill="#d68910" fontWeight="600" fontFamily="DM Sans,sans-serif">Less weight above</text>
    </svg>
  )
}

export function WingLiftSvg() {
  return (
    <svg viewBox="0 0 520 180" fill="none" className="block-svg">
      <rect width="520" height="180" rx="12" fill="#eaf2f8" />
      <path d="M40 95C130 55 310 48 480 85L475 105C320 78 150 82 50 125Z" fill="#5dade2" fillOpacity="0.6" />
      <path d="M50 90C140 55 310 50 475 82" stroke="#2874a6" strokeWidth="2" />
      <path d="M55 120C145 95 320 88 470 110" stroke="#2874a6" strokeWidth="1.5" opacity="0.4" />
      <path d="M70 38C140 22 260 16 370 26C430 32 470 42 490 52" stroke="#3498db" strokeWidth="1.5" strokeDasharray="5 5" fill="none" />
      <path d="M75 145C160 132 300 128 420 142C460 147 480 153 495 160" stroke="#f39c12" strokeWidth="1.5" strokeDasharray="5 5" fill="none" />
      <path d="M250 12L262 36L238 36Z" fill="#3498db" />
      <path d="M250 168L238 144L262 144Z" fill="#f39c12" />
      <text x="272" y="32" fontSize="11" fill="#2874a6" fontWeight="600" fontFamily="DM Sans,sans-serif">Low pressure — faster flow</text>
      <text x="272" y="160" fontSize="11" fill="#d68910" fontWeight="600" fontFamily="DM Sans,sans-serif">Higher pressure — slower flow</text>
    </svg>
  )
}
