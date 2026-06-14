import Link from 'next/link';
import Reveal from '@/components/Reveal';

const S = { fontFamily: "Syne, sans-serif" } as const;
const M = { fontFamily: "JetBrains Mono, monospace" } as const;

/* ── real content from brand document ── */
const VALUES = [
  {
    n: '01',
    title: 'Scientific Integrity',
    desc: 'Data must be honest, reproducible, and defensible. We uphold rigorous documentation, transparent reporting, and uncompromising scientific ethics.',
  },
  {
    n: '02',
    title: 'Precision in Every Step',
    desc: 'Chemistry is detail — and detail defines quality. From route design to final spectra, precision guides every decision we make.',
  },
  {
    n: '03',
    title: 'Confidentiality & Trust',
    desc: 'Your science is your intellectual capital. We protect it with strict confidentiality protocols, secure data systems, and disciplined information handling.',
  },
  {
    n: '04',
    title: 'Innovation with Purpose',
    desc: 'We embrace complexity, challenge assumptions, and engineer smarter solutions. Innovation is creativity backed by scientific discipline.',
  },
  {
    n: '05',
    title: 'Collaboration as Partnership',
    desc: 'We work as an extension of your R&D team. Clear communication, rapid updates, and shared problem-solving define our approach.',
  },
  {
    n: '06',
    title: 'Quality without Compromise',
    desc: 'Every molecule must meet the highest global standards. Purity, accuracy, and regulatory alignment are non-negotiable.',
  },
];

const MISSION_AIMS = [
  'Support drug development with regulatory-ready materials',
  'Enable confident decision-making through robust analytical characterisation',
  'Provide rapid, flexible, and high-quality chemical solutions',
  'Uphold the highest standards of confidentiality, compliance, and scientific ethics',
];

const VISION_AIMS = [
  'Lead the industry in impurity and isotope-labelled compound development',
  'Build a world-class ecosystem of research, quality, and scientific collaboration',
  'Expand our capabilities to support end-to-end pharmaceutical development',
  'Set new benchmarks for precision, transparency, and customer experience',
  'Contribute meaningfully to a future where medicines are safer, purer, and more effective',
];

const TEAM = [
  { name: 'Dr. Srinivas G', role: 'Founder & Director', initials: 'SG' },
  { name: 'Dr. Eda', role: 'Scientific Advisor', initials: 'ED' },
  { name: 'Shyama', role: 'BDM Global & Communication Manager', initials: 'SH' },

  {
    name: 'Dr. B M Choudary',
    role: 'Scientific Advisor',
    initials: 'BC',
    link: 'https://en.wikipedia.org/wiki/B._M._Choudary',
  },
  {
    name: 'Dr. Laxmikantham',
    role: 'Ex-director Scientific Advisor',
    initials: 'LK',
    link: 'https://en.wikipedia.org/wiki/Lakshmi_Kantam',
  },

  {
    name: 'Dr. Partha Saradhy Yellamraju',
    role: 'Scientific Advisor',
    initials: 'SY',
  },
];

const WHO_WE_ARE_PILLARS = [
  {
    title: 'Scientific Excellence',
    desc: 'We approach every synthesis with rigorous planning, methodical execution, and uncompromising analytical validation.',
  },
  {
    title: 'Technical Mastery',
    desc: 'Deep expertise in synthetic route design, impurity profiling, and isotope incorporation for the most complex molecules.',
  },
  {
    title: 'Speed with Precision',
    desc: 'Our agile structure allows us to deliver complex materials faster, without sacrificing quality or regulatory alignment.',
  },
  {
    title: 'Partnership-Driven Collaboration',
    desc: 'We work as an extension of your R&D team — responsive, reliable, and fully aligned with your scientific goals.',
  },
];

// function Eyebrow({ children, light = false }: { children: string; light?: boolean }) {
//   return (
//     <div
//       className="flex items-center gap-3 mb-3"
//       style={{
//         ...M,
//         fontSize: '0.68rem',
//         letterSpacing: '0.15em',
//         textTransform: 'uppercase',
//         color: light ? 'var(--cyan)' : 'var(--teal)',
//       }}
//     >
//       <span
//         style={{
//           width: 20,
//           height: 2,
//           background: light ? 'var(--cyan)' : 'var(--teal)',
//           borderRadius: 1,
//           display: 'inline-block',
//           flexShrink: 0,
//         }}
//       />
//       {children}
//     </div>
//   );
// }
function Eyebrow({ children }: { children: string }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <span
        style={{
          display: 'inline-block',
          padding: '0.55rem 1.4rem',
          background: 'linear-gradient(135deg, #E5C158, #C9A227)',
          color: '#fff',
          borderRadius: '999px',
          fontSize: '0.8rem',
          fontWeight: 700,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          boxShadow: '0 4px 12px rgba(201,162,39,0.25)',
          fontFamily: 'Plus Jakarta Sans, sans-serif',
        }}
      >
        {children}
      </span>
    </div>
  );
}
export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <div
        style={{
          background: 'var(--grad-hero)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse at 75% 50%, rgba(0,196,212,0.18) 0%, transparent 55%)',
            pointerEvents: 'none',
          }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            {/* <div
              style={{
                ...M,
                display: 'inline-block',
                background: 'rgba(0,196,212,0.2)',
                border: '1px solid rgba(0,196,212,0.35)',
                borderRadius: 100,
                padding: '0.3rem 1rem',
                fontSize: '0.65rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--cyan)',
                marginBottom: '1.5rem',
              }}
            >
              About Us
            </div> */}
            <h1
              style={{
                ...S,
                fontSize: 'clamp(2.5rem,4vw,4rem)',
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: '-0.025em',
                marginBottom: '1.25rem',
              }}
            >
              Science-First.<br />
              <em style={{ fontStyle: 'italic', color: 'var(--cyan)' }}>Precision-Driven.</em>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem', lineHeight: 1.8, maxWidth: 480 }}>
              SRRD Laboratories is a science-first CRO/CDMO built on the belief that precision
              chemistry is the backbone of safer, more effective pharmaceuticals. We specialise in
              impurity synthesis, isotope-labelled compounds, and custom chemical development —
              supporting global pharmaceutical and biotechnology organisations.
            </p>
          </div>
          <div className="flex flex-col gap-[2px]">
            {[
              ['Specialisation', 'Impurity Synthesis & Isotope Labelling'],
              ['Approach',       'Science-First CRO / CDMO'],
              ['Compliance',     'Regulatory-Ready Deliverables'],
            ].map(([lbl, val]) => (
              <div
                key={lbl}
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  padding: '1.75rem 2.25rem',
                }}
              >
                <div
                  style={{
                    ...M,
                    fontSize: '0.62rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--cyan)',
                    marginBottom: '0.4rem',
                  }}
                >
                  {lbl}
                </div>
                <div style={{ ...S, fontSize: '1.3rem', fontWeight: 700, color: 'white' }}>{val}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── ABOUT US ── */}
      <section style={{ background: '#fff', padding: '7rem 2rem' }} className="px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <Reveal>
            <div>
              <Eyebrow>About Us</Eyebrow>
              <h2
                style={{
                  ...S,
                  fontSize: 'clamp(1.9rem,3vw,2.8rem)',
                  fontWeight: 700,
                  color: 'var(--ink)',
                  letterSpacing: '-0.02em',
                  marginBottom: '1.5rem',
                }}
              >
                Built on the Belief That<br />Precision Chemistry Matters
              </h2>
              <div className="flex flex-col gap-5">
                <p style={{ color: 'var(--ink-mid)', lineHeight: 1.8, fontSize: '0.975rem' }}>
                  SRRD Laboratories is a science-first CRO/CDMO built on the belief that precision
                  chemistry is the backbone of safer, more effective pharmaceuticals. We specialise in
                  impurity synthesis, isotope-labelled compounds, and custom chemical development,
                  supporting global pharmaceutical and biotechnology organisations in their pursuit of
                  innovation, compliance, and patient safety.
                </p>
                <p style={{ color: 'var(--ink-mid)', lineHeight: 1.8, fontSize: '0.975rem' }}>
                  Our team brings together synthetic chemists, analytical scientists, and project
                  specialists who share a common philosophy: chemistry must be accurate, reliable, and
                  delivered with absolute scientific integrity.
                </p>
                <p style={{ color: 'var(--ink-mid)', lineHeight: 1.8, fontSize: '0.975rem' }}>
                  From early-stage R&amp;D to regulatory submissions, SRRD Laboratories provides
                  high-purity materials, robust analytical data, and dependable scientific
                  collaboration. Every project is handled with the same level of care — whether it's a
                  milligram-scale impurity or a complex multi-step labelled compound.
                </p>
                <p style={{ color: 'var(--ink-mid)', lineHeight: 1.8, fontSize: '0.975rem' }}>
                  We operate with a culture of transparency, confidentiality, and continuous
                  improvement, ensuring that our partners receive not only high-quality deliverables
                  but also a seamless, professional experience from start to finish.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex flex-col gap-5">
              <div
                style={{
                  ...S,
                  fontSize: '1.35rem',
                  fontWeight: 600,
                  lineHeight: 1.5,
                  color: 'var(--ink)',
                  borderLeft: '3px solid var(--teal)',
                  paddingLeft: '1.5rem',
                  marginBottom: '0.5rem',
                }}
              >
                "We operate with a culture of transparency, confidentiality, and continuous improvement."
              </div>
              <div className="grid grid-cols-2 gap-4 mt-2">
                {[
                  ['Impurity\nSynthesis',         'Core Speciality'],
                  ['Isotope\nLabelling',           'Radio & Stable'],
                  ['Custom\nSynthesis',            'mg → kg Scale'],
                  ['Regulatory\nReady',            'Full Documentation'],
                ].map(([v, l]) => (
                  <div
                    key={v}
                    style={{
                      background: '#f4f8fb',
                      border: '1px solid var(--border)',
                      borderRadius: 10,
                      padding: '1.25rem 1.5rem',
                    }}
                  >
                    <div
                      style={{
                        ...S,
                        fontSize: '1rem',
                        fontWeight: 800,
                        color: 'var(--primary)',
                        lineHeight: 1.2,
                        whiteSpace: 'pre-line',
                        marginBottom: '0.3rem',
                      }}
                    >
                      {v}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--ink-muted)', fontWeight: 500 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section style={{ background: '#f4f8fb', padding: '7rem 2rem' }} className="px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="max-w-3xl mb-14">
              <Eyebrow>Who We Are</Eyebrow>
              <h2
                style={{
                  ...S,
                  fontSize: 'clamp(1.9rem,3vw,2.8rem)',
                  fontWeight: 700,
                  color: 'var(--ink)',
                  letterSpacing: '-0.02em',
                  marginBottom: '1.25rem',
                }}
              >
                A Scientific Partner<br />in Innovation
              </h2>
              <p style={{ color: 'var(--ink-mid)', lineHeight: 1.8, fontSize: '0.975rem', marginBottom: '1rem' }}>
                We are a contract research and development organisation dedicated to solving the
                chemical challenges that drive pharmaceutical progress. At SRRD Laboratories, we
                combine deep scientific expertise with a problem-solving mindset, enabling us to
                deliver molecules that are often difficult, rare, or entirely novel.
              </p>
              <p
  style={{
    color: 'var(--ink-mid)',
    lineHeight: 1.8,
    fontSize: '0.975rem',
  }}
>
  <strong style={{ color: 'var(--ink)' }}>
    SRRD Laboratories is not just a service provider; we don’t just deliver
    compounds —
  </strong>{' '}
  we are a scientific partner in innovation, delivering confidence, clarity,
  and scientific certainty.
  <br />
  <br />
  Our identity is shaped by four pillars.
</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {WHO_WE_ARE_PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div
                  className="rounded-[14px] p-8 h-full transition-all duration-300 hover:-translate-y-1"
                  style={{ background: '#fff', border: '1px solid var(--border)' }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: 'var(--teal-pale)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1rem',
                    }}
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="var(--teal)">
                      <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div style={{ ...S, fontSize: '1.05rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '0.5rem' }}>
                    {p.title}
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--ink-mid)', lineHeight: 1.65 }}>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION + VISION ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Mission */}
        <div
          style={{ background: 'var(--grad-hero)', position: 'relative', overflow: 'hidden' }}
          className="px-6 md:px-14 py-20"
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(ellipse at 80% 20%, rgba(0,196,212,0.15) 0%, transparent 55%)',
              pointerEvents: 'none',
            }}
          />
          <div className="relative z-10">
            <Eyebrow >Our Mission</Eyebrow>
            <h2
              style={{
                ...S,
                fontSize: 'clamp(1.7rem,2.5vw,2.4rem)',
                fontWeight: 700,
                color: 'white',
                marginBottom: '1.25rem',
                letterSpacing: '-0.02em',
              }}
            >
              Empowering Pharmaceutical Innovation
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '0.975rem' }}>
              Our mission is to empower pharmaceutical innovation by delivering high-purity
              impurities, isotope-labelled compounds, and custom chemical solutions with unmatched
              scientific accuracy and reliability.
            </p>
            <div className="flex flex-col gap-3 mb-2">
              {MISSION_AIMS.map((aim) => (
                <div key={aim} className="flex items-start gap-3">
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: '50%',
                      background: 'rgba(0,196,212,0.25)',
                      border: '1px solid rgba(0,196,212,0.5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '0.1rem',
                    }}
                  >
                    <svg viewBox="0 0 24 24" width="11" height="11" fill="var(--cyan)">
                      <path d="M5 12l5 5L20 7" stroke="var(--cyan)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.65 }}>{aim}</span>
                </div>
              ))}
            </div>
            <p
              style={{
                marginTop: '2rem',
                ...S,
                fontStyle: 'italic',
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--cyan)',
                lineHeight: 1.5,
              }}
            >
              "Our mission is simple yet powerful: to advance global healthcare by strengthening the chemistry behind it."
            </p>
          </div>
        </div>

        {/* Vision */}
        <div style={{ background: '#f4f8fb' }} className="px-6 md:px-14 py-20">
          <Eyebrow>Our Vision</Eyebrow>
          <h2
            style={{
              ...S,
              fontSize: 'clamp(1.7rem,2.5vw,2.4rem)',
              fontWeight: 700,
              color: 'var(--ink)',
              marginBottom: '1.25rem',
              letterSpacing: '-0.02em',
            }}
          >
            A Globally Recognised<br />Centre of Excellence
          </h2>
          <p style={{ color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '0.975rem' }}>
            Our vision is to become a globally recognised centre of excellence known for scientific
            integrity, innovation, and excellence in complex chemical synthesis.
          </p>
          <div className="flex flex-col gap-3 mb-6">
            {VISION_AIMS.map((aim) => (
              <div key={aim} className="flex items-start gap-3">
                <div
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    background: 'var(--teal-pale)',
                    border: '1px solid rgba(0,134,155,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '0.1rem',
                  }}
                >
                  <svg viewBox="0 0 24 24" width="11" height="11">
                    <path d="M5 12l5 5L20 7" stroke="var(--teal)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span style={{ fontSize: '0.875rem', color: 'var(--ink-mid)', lineHeight: 1.65 }}>{aim}</span>
              </div>
            ))}
          </div>
          <p style={{ color: 'var(--ink-mid)', lineHeight: 1.75, fontSize: '0.875rem', fontStyle: 'italic' }}>
            Our long-term vision is to position SRRD Laboratories as a trusted global partner for
            pharmaceutical companies seeking accuracy, reliability, and scientific depth.
          </p>
        </div>
      </div>

      {/* ── VALUES ── */}
      <section style={{ background: '#fff', padding: '7rem 2rem' }} className="px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <Eyebrow>Our Values & Scientific Philosophy</Eyebrow>
              <h2
                style={{
                  ...S,
                  fontSize: 'clamp(1.9rem,3vw,2.8rem)',
                  fontWeight: 700,
                  color: 'var(--ink)',
                  letterSpacing: '-0.02em',
                  marginBottom: '0.75rem',
                }}
              >
                The Principles That Shape<br />Every Molecule We Deliver
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {VALUES.map((v, i) => (
              <Reveal key={v.n} delay={i % 3 * 80}>
                <div
                  className="rounded-[14px] p-8 h-full transition-all duration-300 hover:-translate-y-1"
                  style={{ background: '#f4f8fb', border: '1px solid var(--border)' }}
                >
                  {/* <div style={{ ...M, fontSize: '0.62rem', letterSpacing: '0.1em', color: 'var(--teal)', marginBottom: '0.75rem' }}>
                    {v.n}
                  </div> */}
                  <div style={{ ...S, fontSize: '1rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '0.5rem' }}>
                    {v.title}
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--ink-mid)', lineHeight: 1.65 }}>{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Philosophy centrepiece */}
          <Reveal>
            <div
              className="rounded-2xl text-center p-12 md:p-16"
              style={{ background: 'var(--grad-hero)', position: 'relative', overflow: 'hidden' }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(ellipse at 50% 50%, rgba(0,196,212,0.15) 0%, transparent 60%)',
                  pointerEvents: 'none',
                }}
              />
              <div className="relative z-10">
                <div
                  style={{
                    ...M,
                    fontSize: '0.68rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--cyan)',
                    marginBottom: '1.5rem',
                  }}
                >
                  Our Scientific Philosophy
                </div>
                <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, maxWidth: 680, margin: '0 auto 2rem', fontSize: '1rem' }}>
                  At SRRD Laboratories, we believe that precision chemistry is the foundation of
                  safer, more effective medicines. Every impurity, every labelled compound, every
                  analytical spectrum carries a responsibility — to the science, to the data, and
                  ultimately to the patient.
                </p>
                <div
                  style={{
                    display: 'inline-block',
                    background: 'rgba(0,196,212,0.15)',
                    border: '1px solid rgba(0,196,212,0.35)',
                    borderRadius: 12,
                    padding: '1.25rem 2.5rem',
                  }}
                >
                  <div
  style={{
    ...S,
    fontSize: '1.3rem',
    fontWeight: 800,
    letterSpacing: '-0.01em',
    background: 'linear-gradient(135deg, #F4D03F, #C9A227)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  }}
>
  Do the science right. Do it with integrity. Do it with purpose.
</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOUNDER'S MESSAGE ── */}
      <section style={{ background: '#f4f8fb', padding: '7rem 2rem' }} className="px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16 items-start">
          <Reveal>
            <div>
              <Eyebrow>Founder's Message</Eyebrow>
              <h2
                style={{
                  ...S,
                  fontSize: 'clamp(1.9rem,3vw,2.6rem)',
                  fontWeight: 700,
                  color: 'var(--ink)',
                  letterSpacing: '-0.02em',
                  marginBottom: '2rem',
                }}
              >
                Built for Precision.<br />Driven by Purpose.
              </h2>
              <div className="flex flex-col gap-5 max-w-2xl">
                <p style={{ color: 'var(--ink-mid)', lineHeight: 1.85, fontSize: '0.975rem' }}>
                  When I founded SRRD Laboratories, I had one clear intention: to build a scientific
                  organisation where precision is not an aspiration, but a discipline.
                </p>
                <p style={{ color: 'var(--ink-mid)', lineHeight: 1.85, fontSize: '0.975rem' }}>
                  Throughout my career in radio and stable isotope labelling and synthetic chemistry,
                  I saw a recurring challenge — the industry needed partners who could deliver complex
                  molecules with absolute reliability, not just acceptable quality. Impurities,
                  metabolites, labelled compounds — these are not routine materials. They demand
                  expertise, patience, and scientific integrity.
                </p>
                <p style={{ color: 'var(--ink-mid)', lineHeight: 1.85, fontSize: '0.975rem' }}>
                  SRRD Laboratories was created to meet that need. We built this organisation on
                  three principles:
                </p>
                <div className="flex flex-col gap-3 pl-2">
                  {[
                    'Do the science right, every time',
                    'Communicate with honesty and clarity',
                    'Protect the trust our clients place in us',
                  ].map((p) => (
                    <div key={p} className="flex items-start gap-3">
                      <div
                        style={{
                          width: 22,
                          height: 22,
                          borderRadius: '50%',
                          background: 'var(--teal-pale)',
                          border: '1px solid rgba(0,134,155,0.3)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: '0.1rem',
                        }}
                      >
                        <svg viewBox="0 0 24 24" width="12" height="12">
                          <path d="M5 12l5 5L20 7" stroke="var(--teal)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span style={{ fontSize: '0.9rem', color: 'var(--ink)', fontWeight: 500, lineHeight: 1.6 }}>{p}</span>
                    </div>
                  ))}
                </div>
                <p style={{ color: 'var(--ink-mid)', lineHeight: 1.85, fontSize: '0.975rem' }}>
                  Today, SRRD stands as a reflection of those values — a place where chemists think
                  deeply, work precisely, and deliver confidently.
                </p>
                <p style={{ color: 'var(--ink-mid)', lineHeight: 1.85, fontSize: '0.975rem' }}>
                  To every partner who works with us — thank you for trusting SRRD with your
                  science. We will continue to honour that trust with the highest standards of
                  quality, confidentiality, and technical excellence.
                </p>
              </div>

              {/* Signature */}
              <div
                className="mt-8 pt-8 flex items-center gap-5"
                style={{ borderTop: '1px solid var(--border)' }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    background: 'var(--grad-btn)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 4px 16px rgba(10,92,138,0.3)',
                  }}
                >
                  <span
                    style={{
                      ...S,
                      fontSize: '1.1rem',
                      fontWeight: 800,
                      color: 'white',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    SG
                  </span>
                </div>
                <div>
                  <div style={{ ...S, fontSize: '1.05rem', fontWeight: 700, color: 'var(--ink)' }}>
                    Dr. Srinivas G
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--ink-muted)', marginTop: '0.15rem' }}>
                    Founder, SRRD Laboratories
                  </div>
                  <div
                    style={{
                      ...M,
                      fontSize: '0.72rem',
                      color: 'var(--teal)',
                      marginTop: '0.4rem',
                      letterSpacing: '0.05em',
                    }}
                  >
                    SRRD Laboratories — Where Chemistry Meets Confidence
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Sidebar accent */}
          <Reveal delay={150}>
            <div className="flex flex-col gap-5">
              <div
                className="rounded-2xl p-8"
                style={{ background: 'var(--grad-hero)', position: 'relative', overflow: 'hidden' }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(ellipse at 80% 20%, rgba(0,196,212,0.2) 0%, transparent 60%)',
                    pointerEvents: 'none',
                  }}
                />
                <div className="relative z-10">
                  <div
                    style={{
                      ...M,
                      fontSize: '0.62rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--cyan)',
                      marginBottom: '1rem',
                    }}
                  >
                    Brand Story
                  </div>
                  <p
                    style={{
                      ...S,
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: 'white',
                      lineHeight: 1.55,
                      fontStyle: 'italic',
                    }}
                  >
                    "Every medicine begins with a molecule — and every molecule carries a responsibility."
                  </p>
                </div>
              </div>
              <div
                className="rounded-2xl p-7"
                style={{ background: '#fff', border: '1px solid var(--border)' }}
              >
                <div
                  style={{
                    ...M,
                    fontSize: '0.62rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--teal)',
                    marginBottom: '1rem',
                  }}
                >
                  Our Commitment
                </div>
                {['Absolute scientific integrity', 'Regulatory-ready deliverables', 'Strict confidentiality', 'Relentless problem-solving'].map((c) => (
                  <div key={c} className="flex items-center gap-3 py-2" style={{ borderBottom: '1px solid var(--border)' }}>
                    <span
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: '50%',
                        background: 'var(--teal)',
                        display: 'inline-block',
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ fontSize: '0.875rem', color: 'var(--ink-mid)' }}>{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── MEET OUR PEOPLE ── */}
      <section style={{ background: '#fff', padding: '7rem 2rem' }} className="px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <Eyebrow>Meet Our People</Eyebrow>
              <h2
                style={{
                  ...S,
                  fontSize: 'clamp(1.9rem,3vw,2.8rem)',
                  fontWeight: 700,
                  color: 'var(--ink)',
                  letterSpacing: '-0.02em',
                  marginBottom: '0.75rem',
                }}
              >
                The Scientists Behind<br />Every Molecule
              </h2>
              <p style={{ color: 'var(--ink-mid)', lineHeight: 1.7, maxWidth: 520, margin: '0 auto' }}>
                Our team brings together synthetic chemists, analytical scientists, and project
                specialists united by one philosophy: deliver with precision, integrity, and purpose.
              </p>
            </div>
          </Reveal>
          {/* <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {TEAM.map((person, i) => (
              <Reveal key={person.name} delay={i * 60}>
                <div className="flex flex-col items-center text-center gap-3">
                  <div
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      background: 'var(--grad-btn)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 6px 20px rgba(10,92,138,0.25)',
                      marginBottom: '0.25rem',
                    }}
                  >
                    <span style={{ ...S, fontSize: '1.25rem', fontWeight: 800, color: 'white' }}>
                      {person.initials}
                    </span>
                  </div>
                  <div>
                    <div style={{ ...S, fontSize: '0.9rem', fontWeight: 700, color: 'var(--ink)', lineHeight: 1.3 }}>
                      {person.name}
                    </div>
                    <div
                      style={{
                        ...M,
                        fontSize: '0.65rem',
                        color: 'var(--teal)',
                        letterSpacing: '0.05em',
                        marginTop: '0.3rem',
                        lineHeight: 1.4,
                      }}
                    >
                      {person.role}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div> */}
          <div
  className="flex gap-8 overflow-x-auto pb-4"
  style={{
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
  }}
>
  {TEAM.map((person, i) => (
    <Reveal key={person.name} delay={i * 60}>
      <div
        className="flex flex-col items-center text-center gap-3 flex-shrink-0"
        style={{ width: '180px' }}
      >
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            background: 'var(--grad-btn)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 6px 20px rgba(10,92,138,0.25)',
            marginBottom: '0.25rem',
          }}
        >
          <span
            style={{
              ...S,
              fontSize: '1.25rem',
              fontWeight: 800,
              color: 'white',
            }}
          >
            {person.initials}
          </span>
        </div>

        <div>
          <div
            style={{
              ...S,
              fontSize: '0.9rem',
              fontWeight: 700,
              color: 'var(--ink)',
              lineHeight: 1.3,
            }}
          >
            {person.link ? (
              <a
                href={person.link}
                target="_blank"
                rel="noopener noreferrer"
                className="team-link"
              >
                {person.name} ↗
              </a>
            ) : (
              person.name
            )}
          </div>

          <div
            style={{
              ...M,
              fontSize: '0.65rem',
              color: 'var(--teal)',
              letterSpacing: '0.05em',
              marginTop: '0.3rem',
              lineHeight: 1.4,
            }}
          >
            {person.role}
          </div>
        </div>
      </div>
    </Reveal>
  ))}
</div>
        </div>
      </section>

      {/* ── CTA ── */}
      <div
        style={{
          background: 'var(--ink)',
          padding: '5rem 2rem',
          position: 'relative',
          overflow: 'hidden',
        }}
        className="px-6 md:px-16"
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at 80% 50%, rgba(0,134,155,0.2) 0%, transparent 60%)',
            pointerEvents: 'none',
          }}
        />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div>
            <h2
              style={{
                ...S,
                fontSize: 'clamp(1.6rem,2.5vw,2.2rem)',
                fontWeight: 700,
                color: 'white',
                letterSpacing: '-0.02em',
                marginBottom: '0.5rem',
              }}
            >
              Ready to partner with a science-first CRO?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem' }}>
              Reach out to explore how SRRD Laboratories can deliver the molecules your research
              depends on.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-sm no-underline"
            style={{ background: 'white', color: 'var(--primary)', boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }}
          >
            Contact Us
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}
