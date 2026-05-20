import Link from 'next/link';
import Reveal from '@/components/Reveal';

const S = { fontFamily: "Syne, sans-serif" } as const;
const M = { fontFamily: "JetBrains Mono, monospace" } as const;

function Eyebrow({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 mb-3" style={{ ...M, fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--teal)' }}>
      <span style={{ width: 20, height: 2, background: 'var(--teal)', borderRadius: 1, display: 'inline-block', flexShrink: 0 }} />
      {children}
    </div>
  );
}

const SERVICES = [
  { n: '01', title: 'Impurity Synthesis', desc: 'High-purity pharmaceutical impurities synthesised with rigorous analytical validation — supporting drug development and regulatory compliance.' },
  { n: '02', title: 'Isotope-Labelled Compounds', desc: 'Radio and stable isotope-labelled compounds for metabolism studies, pharmacokinetics, and bioanalytical research.' },
  { n: '03', title: 'Custom Chemical Development', desc: 'Complex multi-step synthesis tailored to your R&D needs — from early-stage exploration to regulatory-ready deliverables.' },
  { n: '04', title: 'N-Nitroso Compounds', desc: 'Specialised reference standards for nitrosamine impurity testing and ICH M7 regulatory submissions.' },
  { n: '05', title: 'API Impurities', desc: 'Pharmaceutical-grade API impurity standards with full characterisation data, certificates, and regulatory documentation.' },
  { n: '06', title: 'Analytical Characterisation', desc: 'Robust analytical data packages including NMR, HRMS, HPLC, and IR to support confident decision-making.' },
];

const HERO_PRODUCTS = [
  { id: 'ndma',        formula: 'C₂H₆N₂O',   name: 'N-Nitrosodimethylamine',  purity: '≥98%' },
  { id: 'ndea',        formula: 'C₄H₁₀N₂O',  name: 'N-Nitrosodiethylamine',   purity: '≥99%' },
  { id: 'caffeine-api',formula: 'C₈H₁₀N₄O₂', name: 'Stable Isotope Standards', purity: '≥99%' },
];

const VALUES = [
  { n: '01', title: 'Scientific Integrity',      desc: 'Honest, reproducible, defensible data. Rigorous documentation and uncompromising scientific ethics in everything we do.' },
  { n: '02', title: 'Precision in Every Step',   desc: 'Chemistry is detail — and detail defines quality. From route design to final spectra, precision guides every decision.' },
  { n: '03', title: 'Confidentiality & Trust',   desc: 'Your science is your intellectual capital. We protect it with strict protocols, secure data systems, and disciplined handling.' },
  { n: '04', title: 'Innovation with Purpose',   desc: 'We embrace complexity, challenge assumptions, and engineer smarter solutions. Innovation backed by scientific discipline.' },
  { n: '05', title: 'Partnership Collaboration', desc: 'We work as an extension of your R&D team — clear communication, rapid updates, and shared problem-solving define us.' },
  { n: '06', title: 'Quality without Compromise',desc: 'Every molecule must meet the highest global standards. Purity, accuracy, and regulatory alignment are non-negotiable.' },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{ minHeight: 'calc(100vh - 72px)', display: 'grid', gridTemplateColumns: '1fr 1fr', background: '#fff' }}
        className="hero-grid"
      >
        {/* Left */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-20">
          <div className="flex items-center gap-2 mb-8 w-fit px-4 py-2 rounded-full"
            style={{ ...M, fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--teal)', background: 'var(--teal-pale)', border: '1px solid rgba(0,134,155,0.25)' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--teal)', display: 'inline-block' }} />
            CRO / CDMO · Hyderabad, India
          </div>

          <h1 style={{ ...S, fontSize: 'clamp(2.6rem,4.5vw,4.4rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.025em', color: 'var(--ink)', marginBottom: '1.5rem' }}>
            The Chemistry<br />
            <span style={{ background: 'var(--grad-hero)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Behind Confidence.</span>
          </h1>

          <p style={{ fontSize: '1rem', color: 'var(--ink-mid)', lineHeight: 1.8, maxWidth: 460, marginBottom: '0.75rem' }}>
            SRRD Laboratories is a science-first CRO/CDMO specialising in <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>impurity synthesis</strong>, <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>isotope-labelled compounds</strong>, and <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>custom chemical development</strong>.
          </p>
          <p style={{ fontSize: '0.95rem', color: 'var(--ink-mid)', lineHeight: 1.75, maxWidth: 440, marginBottom: '2.5rem' }}>
            Supporting global pharmaceutical and biotechnology organisations in their pursuit of innovation, compliance, and patient safety.
          </p>

          <div className="flex flex-wrap gap-4 mb-14">
            <Link href="/contact" className="flex items-center gap-2 px-8 py-4 rounded-lg text-white font-bold text-sm no-underline"
              style={{ background: 'var(--grad-btn)', boxShadow: '0 6px 20px rgba(10,92,138,0.35)' }}>
              Partner With Us
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link href="/products" className="flex items-center gap-2 px-6 py-4 rounded-lg font-semibold text-sm no-underline"
              style={{ border: '1.5px solid var(--border-mid)', color: 'var(--primary)' }}>
              View Products
            </Link>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-2 pr-8 mr-8 pt-5" style={{ borderTop: '1px solid var(--border)' }}>
            {[['Impurities','Synthesised'],['Isotope','Labelled Cpds'],['Custom','Multi-step Synthesis']].map(([v, l], i) => (
              <div key={v} className="flex flex-col gap-1 pr-8 mr-8" style={i < 2 ? { borderRight: '1px solid var(--border)' } : {}}>
                <span style={{ ...S, fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)', lineHeight: 1 }}>{v}</span>
                <span style={{ ...M, fontSize: '0.62rem', color: 'var(--ink-muted)', textTransform: 'uppercase', letterSpacing: '0.07em' }}>{l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right – Pharma Image Panel */}
        {/* <div className="relative overflow-hidden hidden md:block" style={{ background: 'var(--grad-hero)' }}>
          <div style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 3 }}>
            
            <div style={{ background: 'linear-gradient(135deg,#083d5c,#0A5C8A)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 320 280" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ maxHeight: '50vh' }}>
                <path d="M130 60 L130 140 L80 220 L240 220 L190 140 L190 60 Z" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="2.5"/>
                <rect x="118" y="50" width="84" height="18" rx="4" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5"/>
                <path d="M97 195 Q160 185 223 195 L240 220 L80 220 Z" fill="rgba(0,196,212,0.4)"/>
                <path d="M110 210 Q160 200 210 210 L225 220 L95 220 Z" fill="rgba(0,196,212,0.6)"/>
                <circle cx="145" cy="192" r="4" fill="rgba(255,255,255,0.3)"/>
                <circle cx="175" cy="198" r="3" fill="rgba(255,255,255,0.2)"/>
                <line x1="140" y1="120" x2="155" y2="120" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                <line x1="137" y1="140" x2="152" y2="140" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                <text x="160" y="252" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="rgba(255,255,255,0.4)" letterSpacing="2">IMPURITY SYNTHESIS</text>
              </svg>
            </div>
            
            <div style={{ background: 'linear-gradient(135deg,#00637A,#00869B)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 320 280" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ maxHeight: '50vh' }}>
                <g transform="translate(160,140)">
                  <polygon points="0,-80 69,-40 69,40 0,80 -69,40 -69,-40" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5"/>
                  <polygon points="0,-45 39,-22 39,22 0,45 -39,22 -39,-22" fill="none" stroke="rgba(0,196,212,0.5)" strokeWidth="1.5"/>
                  <circle cx="0" cy="-80" r="8" fill="#00C4D4" opacity="0.9"/>
                  <circle cx="69" cy="-40" r="7" fill="rgba(255,255,255,0.5)"/>
                  <circle cx="69" cy="40" r="8" fill="#00C4D4" opacity="0.8"/>
                  <circle cx="0" cy="80" r="7" fill="rgba(255,255,255,0.5)"/>
                  <circle cx="-69" cy="40" r="8" fill="#00C4D4" opacity="0.8"/>
                  <circle cx="-69" cy="-40" r="7" fill="rgba(255,255,255,0.5)"/>
                  <circle cx="0" cy="0" r="10" fill="white" opacity="0.8"/>
                  <text x="0" y="-90" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill="rgba(255,255,255,0.75)">¹³C</text>
                  <text x="80" y="-38" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill="rgba(255,255,255,0.65)">²H</text>
                  <text x="0" y="97" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill="rgba(255,255,255,0.65)">¹⁵N</text>
                </g>
                <text x="160" y="262" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="rgba(255,255,255,0.4)" letterSpacing="2">ISOTOPE LABELLING</text>
              </svg>
            </div>
            
            <div style={{ background: 'linear-gradient(135deg,#083d5c,#104F74)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 320 280" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ maxHeight: '50vh' }}>
                <line x1="30" y1="230" x2="300" y2="230" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                <line x1="30" y1="30" x2="30" y2="230" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                <path d="M30 220 L75 220 Q90 210 105 40 Q110 210 115 220 Q160 218 178 180 Q195 40 205 178 Q216 210 260 215 L300 215" fill="none" stroke="rgba(0,196,212,0.8)" strokeWidth="2"/>
                <path d="M30 220 L75 220 Q90 210 105 40 Q110 210 115 220 Q160 218 178 180 Q195 40 205 178 Q216 210 260 215 L300 215 L300 230 L30 230 Z" fill="rgba(0,196,212,0.12)"/>
                <text x="105" y="32" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fill="rgba(0,196,212,0.8)">Impurity A</text>
                <text x="195" y="32" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fill="rgba(0,196,212,0.8)">Impurity B</text>
                <text x="160" y="268" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="rgba(255,255,255,0.35)" letterSpacing="2">HPLC ANALYSIS</text>
              </svg>
            </div>
           
            <div style={{ background: 'linear-gradient(135deg,#006880,#00869B)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 320 280" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ maxHeight: '50vh' }}>
                <rect x="55" y="40" width="210" height="200" rx="10" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
                <rect x="55" y="40" width="210" height="42" rx="10" fill="rgba(255,255,255,0.12)"/>
                <text x="160" y="68" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill="white" fontWeight="bold" letterSpacing="1">CERTIFICATE OF ANALYSIS</text>
                <rect x="75" y="100" width="60" height="6" rx="3" fill="rgba(255,255,255,0.25)"/><rect x="145" y="100" width="100" height="6" rx="3" fill="rgba(0,196,212,0.5)"/>
                <rect x="75" y="118" width="60" height="6" rx="3" fill="rgba(255,255,255,0.25)"/><rect x="145" y="118" width="80" height="6" rx="3" fill="rgba(255,255,255,0.2)"/>
                <rect x="75" y="136" width="60" height="6" rx="3" fill="rgba(255,255,255,0.25)"/><rect x="145" y="136" width="90" height="6" rx="3" fill="rgba(255,255,255,0.2)"/>
                <rect x="75" y="186" width="170" height="32" rx="6" fill="rgba(0,196,212,0.2)" stroke="rgba(0,196,212,0.4)" strokeWidth="1"/>
                <text x="160" y="207" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="13" fill="#00C4D4" fontWeight="bold">Purity: ≥99.0%</text>
                <circle cx="248" cy="58" r="14" fill="rgba(0,196,212,0.3)" stroke="rgba(0,196,212,0.6)" strokeWidth="1.5"/>
                <path d="M241 58 L246 63 L255 52" fill="none" stroke="#00C4D4" strokeWidth="2.5" strokeLinecap="round"/>
                <text x="160" y="268" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="rgba(255,255,255,0.4)" letterSpacing="2">GMP DOCUMENTATION</text>
              </svg>
            </div>
          </div>
          <div style={{ position:'absolute', inset:0, background:'linear-gradient(to right,rgba(10,92,138,0.15) 0%,transparent 40%)', pointerEvents:'none' }} />
          <div style={{ position:'absolute', top:'1.5rem', right:'1.5rem', textAlign:'right', zIndex:3 }}>
            <div style={{ ...M, display:'inline-block', background:'rgba(0,196,212,0.2)', border:'1px solid rgba(0,196,212,0.4)', borderRadius:6, padding:'0.3rem 0.85rem', fontSize:'0.62rem', letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--cyan)', marginBottom:'0.4rem' }}>ICH · GMP · ISO</div>
            <div style={{ ...S, fontSize:'1.1rem', fontWeight:700, color:'white', lineHeight:1.3 }}>Science-First<br/>Precision</div>
          </div>
          <div style={{ position:'absolute', bottom:'1.5rem', left:'1.5rem', right:'1.5rem', background:'rgba(255,255,255,0.12)', backdropFilter:'blur(20px)', border:'1px solid rgba(255,255,255,0.25)', borderRadius:14, padding:'1.25rem 1.5rem', display:'flex', alignItems:'center', gap:'1.25rem', zIndex:3 }}>
            <div style={{ width:42, height:42, borderRadius:10, background:'rgba(255,255,255,0.18)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="white"><path d="M9 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2M9 3v2h6V3M9 3H7"/></svg>
            </div>
            <div style={{ flex:1 }}>
              <div style={{ fontSize:'0.88rem', fontWeight:600, color:'white' }}>Do the science right. With integrity. With purpose.</div>
              <div style={{ fontSize:'0.73rem', color:'rgba(255,255,255,0.65)', marginTop:'0.1rem' }}>— SRRD Scientific Philosophy</div>
            </div>
          </div>
        </div> */}
        <div className="relative overflow-hidden hidden md:block">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/lab.mp4" type="video/mp4" />
  </video>

  {/* Optional dark overlay */}
  <div
    className="absolute inset-0"
    style={{
      background:
        "linear-gradient(to right, rgba(0,0,0,0.45), rgba(0,0,0,0.25))",
    }}
  />

  {/* Top Content */}
  <div
    style={{
      position: "absolute",
      top: "1.5rem",
      right: "1.5rem",
      textAlign: "right",
      zIndex: 3,
    }}
  >
    <div
      style={{
        display: "inline-block",
        background: "rgba(0,196,212,0.2)",
        border: "1px solid rgba(0,196,212,0.4)",
        borderRadius: 6,
        padding: "0.3rem 0.85rem",
        fontSize: "0.62rem",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "#00C4D4",
        marginBottom: "0.4rem",
      }}
    >
      ICH · GMP · ISO
    </div>

    <div
      style={{
        fontSize: "1.1rem",
        fontWeight: 700,
        color: "white",
        lineHeight: 1.3,
      }}
    >
      Science-First
      <br />
      Precision
    </div>
  </div>

  {/* Bottom Glass Card */}
  <div
    style={{
      position: "absolute",
      bottom: "1.5rem",
      left: "1.5rem",
      right: "1.5rem",
      background: "rgba(255,255,255,0.12)",
      backdropFilter: "blur(20px)",
      border: "1px solid rgba(255,255,255,0.25)",
      borderRadius: 14,
      padding: "1.25rem 1.5rem",
      display: "flex",
      alignItems: "center",
      gap: "1.25rem",
      zIndex: 3,
    }}
  >
    <div
      style={{
        width: 42,
        height: 42,
        borderRadius: 10,
        background: "rgba(255,255,255,0.18)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      🧪
    </div>

    <div style={{ flex: 1 }}>
      <div
        style={{
          fontSize: "0.88rem",
          fontWeight: 600,
          color: "white",
        }}
      >
        Do the science right. With integrity. With purpose.
      </div>

      <div
        style={{
          fontSize: "0.73rem",
          color: "rgba(255,255,255,0.65)",
          marginTop: "0.1rem",
        }}
      >
        — SRRD Scientific Philosophy
      </div>
    </div>
  </div>
</div>
      </section>

      {/* ── TRUST BAR ── */}
      <div style={{ background: '#f4f8fb', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '1.25rem 2rem', overflowX: 'auto' }}>
        <div className="flex items-center gap-6 flex-wrap max-w-7xl mx-auto">
          <span style={{ ...M, fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink-muted)', whiteSpace: 'nowrap' }}>Capabilities</span>
          <div style={{ width: 1, height: 24, background: 'var(--border-mid)', flexShrink: 0 }} />
          <div className="flex gap-6 flex-wrap">
            {['Isotope Labelling','Custom Multi-step Synthesis','Impurities','N-Nitroso Compounds','Regulatory-Ready Materials'].map(t => (
              <div key={t} className="flex items-center gap-2" style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--ink-mid)', whiteSpace: 'nowrap' }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--teal)', display: 'inline-block' }} />{t}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── WHO WE ARE ── */}
      <section style={{ background: '#fff', padding: '7rem 2rem' }} className="px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <Reveal>
            <div>
              <Eyebrow>Who We Are</Eyebrow>
              <h2 style={{ ...S, fontSize: 'clamp(1.9rem,3vw,2.8rem)', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
                A Scientific Partner<br />in Innovation
              </h2>
              <p style={{ color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '0.975rem' }}>
                We are a contract research and development organisation dedicated to solving the chemical challenges that drive pharmaceutical progress. At SRRD Laboratories, we combine deep scientific expertise with a problem-solving mindset, enabling us to deliver molecules that are often difficult, rare, or entirely novel.
              </p>
              <p style={{ color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '0.975rem' }}>
                SRRD Laboratories is not just a service provider. We are a scientific partner in innovation. We don't just deliver compounds — we deliver <strong style={{ color: 'var(--ink)' }}>confidence, clarity, and scientific certainty.</strong>
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 font-bold text-sm no-underline" style={{ color: 'var(--primary)' }}>
                Our Full Story
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="grid grid-cols-1 gap-4">
              {[
                ['Technical Mastery', 'Deep expertise in synthetic route design, impurity profiling, and isotope incorporation for the most complex molecules.'],
                ['Speed with Precision', 'Our agile structure allows us to deliver complex materials faster, without sacrificing quality or regulatory alignment.'],
                ['Partnership-Driven', 'We work as an extension of your R&D team — responsive, reliable, and fully aligned with your scientific goals.'],
              ].map(([t, d]) => (
                <div key={t} className="flex gap-4 p-5 rounded-xl" style={{ background: '#f4f8fb', border: '1px solid var(--border)' }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--teal)', flexShrink: 0, marginTop: '0.35rem' }} />
                  <div>
                    <div style={{ ...S, fontWeight: 700, fontSize: '0.95rem', color: 'var(--ink)', marginBottom: '0.3rem' }}>{t}</div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--ink-mid)', lineHeight: 1.65 }}>{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ background: '#f4f8fb', padding: '7rem 2rem' }} className="px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-14">
              <div>
                <Eyebrow>What We Do</Eyebrow>
                <h2 style={{ ...S, fontSize: 'clamp(1.9rem,3vw,2.8rem)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em', color: 'var(--ink)' }}>
                  Specialised Chemistry<br />Services
                </h2>
              </div>
              <p style={{ fontSize: '1rem', color: 'var(--ink-mid)', lineHeight: 1.7, maxWidth: 340 }}>
                From early-stage R&amp;D to regulatory submissions — high-purity materials and robust analytical data.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <Reveal key={s.n} delay={i % 3 * 100}>
                <div className="group relative rounded-[14px] p-9 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{ background: '#fff', border: '1px solid var(--border)', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'var(--grad-btn)', transform: 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.3s' }} className="group-hover:scale-x-100" />
                  <span style={{ ...M, fontSize: '0.62rem', letterSpacing: '0.1em', color: 'var(--ink-muted)' }}>{s.n}</span>
                  <div style={{ ...S, fontSize: '1.05rem', fontWeight: 700, color: 'var(--ink)' }}>{s.title}</div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--ink-mid)', lineHeight: 1.65 }}>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY STATEMENT ── */}
      <section style={{ background: 'var(--grad-hero)', padding: '7rem 2rem', position: 'relative', overflow: 'hidden' }} className="px-6 md:px-16">
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 20% 50%, rgba(255,255,255,0.06) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(0,196,212,0.1) 0%, transparent 50%)', pointerEvents: 'none' }} />
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <Reveal>
            <div style={{ ...M, fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--cyan)', marginBottom: '2rem' }}>Our Scientific Philosophy</div>
            <blockquote style={{ ...S, fontSize: 'clamp(1.6rem,3vw,2.8rem)', fontWeight: 700, color: 'white', lineHeight: 1.3, letterSpacing: '-0.02em', marginBottom: '2rem' }}>
              "At SRRD Laboratories, we believe that precision chemistry is the foundation of safer, more effective medicines."
            </blockquote>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: 680, margin: '0 auto 2rem' }}>
              Every impurity, every labelled compound, every analytical spectrum carries a responsibility — to the science, to the data, and ultimately to the patient.
            </p>
            <div style={{ display: 'inline-block', background: 'rgba(0,196,212,0.15)', border: '1px solid rgba(0,196,212,0.35)', borderRadius: 12, padding: '1.25rem 2.5rem' }}>
              <div style={{ ...S, fontSize: '1.3rem', fontWeight: 800, color: 'var(--cyan)', letterSpacing: '-0.01em' }}>
                Do the science right. Do it with integrity. Do it with purpose.
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section style={{ background: '#fff', padding: '7rem 2rem' }} className="px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <Eyebrow>Our Values</Eyebrow>
              <h2 style={{ ...S, fontSize: 'clamp(1.9rem,3vw,2.8rem)', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
                The Principles That Shape<br />Every Molecule We Deliver
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <Reveal key={v.n} delay={i % 3 * 80}>
                <div className="rounded-[14px] p-8 h-full transition-all duration-300 hover:-translate-y-1"
                  style={{ background: '#f4f8fb', border: '1px solid var(--border)' }}>
                  <div style={{ ...M, fontSize: '0.62rem', letterSpacing: '0.1em', color: 'var(--teal)', marginBottom: '0.75rem' }}>{v.n}</div>
                  <div style={{ ...S, fontSize: '1rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '0.5rem' }}>{v.title}</div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--ink-mid)', lineHeight: 1.65 }}>{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS PREVIEW ── */}
      <section style={{ background: '#f4f8fb', padding: '7rem 2rem' }} className="px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <Eyebrow>Our Products</Eyebrow>
              <h2 style={{ ...S, fontSize: 'clamp(1.9rem,3vw,2.8rem)', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>Specialised Reference Compounds</h2>
              <p style={{ color: 'var(--ink-mid)', lineHeight: 1.7, maxWidth: 540, margin: '0 auto' }}>
                Stable isotope-labelled compounds, API impurities, and N-nitroso compounds — fully characterised and regulatory-ready.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-10">
            {[
              { label: 'Stable Isotope Labelled Compounds', desc: '¹³C, ²H, ¹⁵N, ¹⁸O labelled compounds for metabolism, pharmacokinetics, and bioanalytical research.' },
              { label: "API's Impurities", desc: 'Pharmaceutical-grade API impurity reference standards with full characterisation and documentation packages.' },
              { label: 'N-Nitroso Compounds', desc: 'Specialised nitrosamine standards including NDMA, NDEA, NMOR for ICH M7 regulatory compliance.' },
            ].map((p, i) => (
              <Reveal key={p.label} delay={i * 100}>
                <Link href="/products" className="block no-underline rounded-[16px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group" style={{ background: '#fff', border: '1px solid var(--border)', color: 'inherit' }}>
                  <div style={{ height: 3, background: 'var(--grad-btn)' }} />
                  <div className="p-9">
                    <div style={{ ...S, fontSize: '1.1rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '0.75rem', lineHeight: 1.3 }}>{p.label}</div>
                    <p style={{ fontSize: '0.875rem', color: 'var(--ink-mid)', lineHeight: 1.65, marginBottom: '1.25rem' }}>{p.desc}</p>
                    <div className="flex items-center gap-2 font-bold text-sm transition-all group-hover:gap-3" style={{ color: 'var(--primary)' }}>
                      Explore <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="text-center">
              <Link href="/products" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white font-bold text-sm no-underline"
                style={{ background: 'var(--grad-btn)', boxShadow: '0 6px 20px rgba(10,92,138,0.3)' }}>
                View Full Catalogue
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── BRAND STORY QUOTE ── */}
      <section style={{ background: 'var(--ink)', padding: '6rem 2rem', position: 'relative', overflow: 'hidden' }} className="px-6 md:px-16">
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 50%, rgba(0,134,155,0.18) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <div style={{ ...M, fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--cyan)', marginBottom: '1.5rem' }}>SRRD Laboratories</div>
            <blockquote style={{ ...S, fontSize: 'clamp(1.4rem,2.5vw,2rem)', fontWeight: 700, color: 'white', lineHeight: 1.4, letterSpacing: '-0.02em', marginBottom: '1.25rem', fontStyle: 'italic' }}>
              "At SRRD, we don't chase volume. We chase accuracy, purity, and scientific truth."
            </blockquote>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: 520, fontSize: '0.975rem' }}>
              Because in pharmaceutical chemistry, precision is not a luxury — it is the foundation of trust. Every medicine begins with a molecule, and every molecule carries a responsibility.
            </p>
          </div>
          <div className="flex-shrink-0 text-center">
            <div style={{ ...S, fontSize: '1.15rem', fontWeight: 700, color: 'white', marginBottom: '0.25rem' }}>SRRD Laboratories</div>
            <div style={{ ...M, fontSize: '0.75rem', color: 'var(--cyan)', letterSpacing: '0.1em' }}>Where Chemistry Meets Confidence</div>
            <div className="mt-6 flex flex-col gap-3">
              <Link href="/contact" className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-sm no-underline"
                style={{ background: 'white', color: 'var(--primary)' }}>
                Start a Collaboration
              </Link>
              <Link href="/about" className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm no-underline"
                style={{ border: '1.5px solid rgba(255,255,255,0.2)', color: 'white' }}>
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) { .hero-grid { grid-template-columns: 1fr !important; } }
        .group:hover [style*="scaleX(0)"] { transform: scaleX(1) !important; }
      `}</style>
    </>
  );
}
