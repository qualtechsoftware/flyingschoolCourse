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
