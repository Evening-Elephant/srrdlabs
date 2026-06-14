// import Link from 'next/link';
// import Reveal from '@/components/Reveal';

// const S = { fontFamily: "Syne, sans-serif" } as const;
// const M = { fontFamily: "JetBrains Mono, monospace" } as const;

// function Eyebrow({ children }: { children: string }) {
//   return (
//     <div className="flex items-center gap-3 mb-3" style={{ ...M, fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--teal)' }}>
//       <span style={{ width: 20, height: 2, background: 'var(--teal)', borderRadius: 1, display: 'inline-block', flexShrink: 0 }} />
//       {children}
//     </div>
//   );
// }

// const SERVICES = [
//   { n: '01', title: 'Impurity Synthesis', desc: 'High-purity pharmaceutical impurities synthesised with rigorous analytical validation — supporting drug development and regulatory compliance.' },
//   { n: '02', title: 'Isotope-Labelled Compounds', desc: 'Radio and stable isotope-labelled compounds for metabolism studies, pharmacokinetics, and bioanalytical research.' },
//   { n: '03', title: 'Custom Chemical Development', desc: 'Complex multi-step synthesis tailored to your R&D needs — from early-stage exploration to regulatory-ready deliverables.' },
//   { n: '04', title: 'N-Nitroso Compounds', desc: 'Specialised reference standards for nitrosamine impurity testing and ICH M7 regulatory submissions.' },
//   { n: '05', title: 'API Impurities', desc: 'Pharmaceutical-grade API impurity standards with full characterisation data, certificates, and regulatory documentation.' },
//   { n: '06', title: 'Analytical Characterisation', desc: 'Robust analytical data packages including NMR, HRMS, HPLC, and IR to support confident decision-making.' },
// ];

// const HERO_PRODUCTS = [
//   { id: 'ndma',        formula: 'C₂H₆N₂O',   name: 'N-Nitrosodimethylamine',  purity: '≥98%' },
//   { id: 'ndea',        formula: 'C₄H₁₀N₂O',  name: 'N-Nitrosodiethylamine',   purity: '≥99%' },
//   { id: 'caffeine-api',formula: 'C₈H₁₀N₄O₂', name: 'Stable Isotope Standards', purity: '≥99%' },
// ];

// const VALUES = [
//   { n: '01', title: 'Scientific Integrity',      desc: 'Honest, reproducible, defensible data. Rigorous documentation and uncompromising scientific ethics in everything we do.' },
//   { n: '02', title: 'Precision in Every Step',   desc: 'Chemistry is detail — and detail defines quality. From route design to final spectra, precision guides every decision.' },
//   { n: '03', title: 'Confidentiality & Trust',   desc: 'Your science is your intellectual capital. We protect it with strict protocols, secure data systems, and disciplined handling.' },
//   { n: '04', title: 'Innovation with Purpose',   desc: 'We embrace complexity, challenge assumptions, and engineer smarter solutions. Innovation backed by scientific discipline.' },
//   { n: '05', title: 'Partnership Collaboration', desc: 'We work as an extension of your R&D team — clear communication, rapid updates, and shared problem-solving define us.' },
//   { n: '06', title: 'Quality without Compromise',desc: 'Every molecule must meet the highest global standards. Purity, accuracy, and regulatory alignment are non-negotiable.' },
// ];

// export default function HomePage() {
//   return (
//     <>
//       {/* ── HERO ── */}
//       <section
//         style={{ minHeight: 'calc(100vh - 72px)', display: 'grid', background: '#fff', overflow: 'hidden' }}
//         className="hero-grid"
//       >
//         {/* Left */}
//         <div className="flex flex-col justify-center px-5 md:px-16 py-14 md:py-20" style={{ minWidth: 0, overflow: 'hidden' }}>
//           <div className="flex items-center gap-2 mb-8 w-fit px-4 py-2 rounded-full"
//             style={{ ...M, fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--teal)', background: 'var(--teal-pale)', border: '1px solid rgba(0,134,155,0.25)' }}>
//             <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--teal)', display: 'inline-block' }} />
//             CRO / CDMO · Hyderabad, India
//           </div>

//           <h1 style={{ ...S, fontSize: 'clamp(2rem,4.5vw,4.4rem)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.025em', color: 'var(--ink)', marginBottom: '1.5rem' }}>
//             The Chemistry<br />
//             <span style={{ background: 'var(--grad-hero)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Behind Confidence.</span>
//           </h1>

//           <p style={{ fontSize: '1rem', color: 'var(--ink-mid)', lineHeight: 1.8, maxWidth: '100%', marginBottom: '0.75rem' }}>
//             SRRD Laboratories is a science-first CRO/CDMO specialising in <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>impurity synthesis</strong>, <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>isotope-labelled compounds</strong>, and <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>custom chemical development</strong>.
//           </p>
//           <p style={{ fontSize: '0.95rem', color: 'var(--ink-mid)', lineHeight: 1.75, maxWidth: '100%', marginBottom: '2.5rem' }}>
//             Supporting global pharmaceutical and biotechnology organisations in their pursuit of innovation, compliance, and patient safety.
//           </p>

//           <div className="flex flex-wrap gap-3 mb-10">
//             <Link href="/contact" className="flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-lg text-white font-bold text-sm no-underline"
//               style={{ background: 'var(--grad-btn)', boxShadow: '0 6px 20px rgba(10,92,138,0.35)' }}>
//               Partner With Us
//               <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
//             </Link>
//             <Link href="/products" className="flex items-center gap-2 px-5 py-3 md:px-6 md:py-4 rounded-lg font-semibold text-sm no-underline"
//               style={{ border: '1.5px solid var(--border-mid)', color: 'var(--primary)' }}>
//               View Products
//             </Link>
//           </div>

//           {/* Stats – vertical on mobile, horizontal on desktop */}
//           <div className="pt-5" style={{ borderTop: '1px solid var(--border)' }}>
//             <div className="hero-stats">
//               {[['Impurities','Synthesised'],['Isotope','Labelled Cpds'],['Custom','Multi-step']].map(([v, l]) => (
//                 <div key={v} className="hero-stat-item flex flex-col gap-1">
//                   <span style={{ ...S, fontSize: '1.35rem', fontWeight: 800, color: 'var(--primary)', lineHeight: 1 }}>{v}</span>
//                   <span style={{ ...M, fontSize: '0.6rem', color: 'var(--ink-muted)', textTransform: 'uppercase', letterSpacing: '0.07em' }}>{l}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right – video panel */}
//         <div className="relative overflow-hidden hidden md:block">
//           <video
//             autoPlay
//             muted
//             loop
//             playsInline
//             className="absolute inset-0 w-full h-full object-cover"
//           >
//             <source src="/lab.mp4" type="video/mp4" />
//           </video>

//           {/* Optional dark overlay */}
//           <div
//             className="absolute inset-0"
//             style={{
//               background: "linear-gradient(to right, rgba(0,0,0,0.45), rgba(0,0,0,0.25))",
//             }}
//           />

//           {/* Top Content */}
//           <div
//             style={{
//               position: "absolute",
//               top: "1.5rem",
//               right: "1.5rem",
//               textAlign: "right",
//               zIndex: 3,
//             }}
//           >
//             <div
//               style={{
//                 display: "inline-block",
//                 background: "rgba(0,196,212,0.2)",
//                 border: "1px solid rgba(0,196,212,0.4)",
//                 borderRadius: 6,
//                 padding: "0.3rem 0.85rem",
//                 fontSize: "0.62rem",
//                 letterSpacing: "0.12em",
//                 textTransform: "uppercase",
//                 color: "#00C4D4",
//                 marginBottom: "0.4rem",
//               }}
//             >
//               ICH · GMP · ISO
//             </div>

//             <div
//               style={{
//                 fontSize: "1.1rem",
//                 fontWeight: 700,
//                 color: "white",
//                 lineHeight: 1.3,
//               }}
//             >
//               Science-First
//               <br />
//               Precision
//             </div>
//           </div>

//           {/* Bottom Glass Card */}
//           <div
//             style={{
//               position: "absolute",
//               bottom: "1.5rem",
//               left: "1.5rem",
//               right: "1.5rem",
//               background: "rgba(255,255,255,0.12)",
//               backdropFilter: "blur(20px)",
//               border: "1px solid rgba(255,255,255,0.25)",
//               borderRadius: 14,
//               padding: "1.25rem 1.5rem",
//               display: "flex",
//               alignItems: "center",
//               gap: "1.25rem",
//               zIndex: 3,
//             }}
//           >
//             <div
//               style={{
//                 width: 42,
//                 height: 42,
//                 borderRadius: 10,
//                 background: "rgba(255,255,255,0.18)",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 flexShrink: 0,
//               }}
//             >
//               🧪
//             </div>

//             <div style={{ flex: 1 }}>
//               <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "white" }}>
//                 Do the science right. With integrity. With purpose.
//               </div>
//               <div style={{ fontSize: "0.73rem", color: "rgba(255,255,255,0.65)", marginTop: "0.1rem" }}>
//                 — SRRD Scientific Philosophy
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── TRUST BAR ── */}
//       <div style={{ background: '#f4f8fb', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '1.25rem 2rem', overflowX: 'auto' }}>
//         <div className="flex items-center gap-6 flex-wrap max-w-7xl mx-auto">
//           <span style={{ ...M, fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink-muted)', whiteSpace: 'nowrap' }}>Capabilities</span>
//           <div style={{ width: 1, height: 24, background: 'var(--border-mid)', flexShrink: 0 }} />
//           <div className="flex gap-6 flex-wrap">
//             {['Isotope Labelling','Custom Multi-step Synthesis','Impurities','N-Nitroso Compounds','Regulatory-Ready Materials'].map(t => (
//               <div key={t} className="flex items-center gap-2" style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--ink-mid)', whiteSpace: 'nowrap' }}>
//                 <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--teal)', display: 'inline-block' }} />{t}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ── WHO WE ARE ── */}
//       <section style={{ background: '#fff', padding: '7rem 2rem' }} className="px-6 md:px-16">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
//           <Reveal>
//             <div>
//               <Eyebrow>Who We Are</Eyebrow>
//               <h2 style={{ ...S, fontSize: 'clamp(1.9rem,3vw,2.8rem)', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
//                 A Scientific Partner<br />in Innovation
//               </h2>
//               <p style={{ color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '0.975rem' }}>
//                 We are a contract research and development organisation dedicated to solving the chemical challenges that drive pharmaceutical progress. At SRRD Laboratories, we combine deep scientific expertise with a problem-solving mindset, enabling us to deliver molecules that are often difficult, rare, or entirely novel.
//               </p>
//               <p style={{ color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '0.975rem' }}>
//                 SRRD Laboratories is not just a service provider. We are a scientific partner in innovation. We don't just deliver compounds — we deliver <strong style={{ color: 'var(--ink)' }}>confidence, clarity, and scientific certainty.</strong>
//               </p>
//               <Link href="/about" className="inline-flex items-center gap-2 font-bold text-sm no-underline" style={{ color: 'var(--primary)' }}>
//                 Our Full Story
//                 <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
//               </Link>
//             </div>
//           </Reveal>
//           <Reveal delay={100}>
//             <div className="grid grid-cols-1 gap-4">
//               {[
//                 ['Technical Mastery', 'Deep expertise in synthetic route design, impurity profiling, and isotope incorporation for the most complex molecules.'],
//                 ['Speed with Precision', 'Our agile structure allows us to deliver complex materials faster, without sacrificing quality or regulatory alignment.'],
//                 ['Partnership-Driven', 'We work as an extension of your R&D team — responsive, reliable, and fully aligned with your scientific goals.'],
//               ].map(([t, d]) => (
//                 <div key={t} className="flex gap-4 p-5 rounded-xl" style={{ background: '#f4f8fb', border: '1px solid var(--border)' }}>
//                   <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--teal)', flexShrink: 0, marginTop: '0.35rem' }} />
//                   <div>
//                     <div style={{ ...S, fontWeight: 700, fontSize: '0.95rem', color: 'var(--ink)', marginBottom: '0.3rem' }}>{t}</div>
//                     <div style={{ fontSize: '0.875rem', color: 'var(--ink-mid)', lineHeight: 1.65 }}>{d}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       {/* ── SERVICES ── */}
//       <section style={{ background: '#f4f8fb', padding: '7rem 2rem' }} className="px-6 md:px-16">
//         <div className="max-w-7xl mx-auto">
//           <Reveal>
//             <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-14">
//               <div>
//                 <Eyebrow>What We Do</Eyebrow>
//                 <h2 style={{ ...S, fontSize: 'clamp(1.9rem,3vw,2.8rem)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em', color: 'var(--ink)' }}>
//                   Specialised Chemistry<br />Services
//                 </h2>
//               </div>
//               <p style={{ fontSize: '1rem', color: 'var(--ink-mid)', lineHeight: 1.7, maxWidth: 340 }}>
//                 From early-stage R&amp;D to regulatory submissions — high-purity materials and robust analytical data.
//               </p>
//             </div>
//           </Reveal>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {SERVICES.map((s, i) => (
//               <Reveal key={s.n} delay={i % 3 * 100}>
//                 <div className="group relative rounded-[14px] p-9 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
//                   style={{ background: '#fff', border: '1px solid var(--border)', overflow: 'hidden' }}>
//                   <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'var(--grad-btn)', transform: 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.3s' }} className="group-hover:scale-x-100" />
//                   <span style={{ ...M, fontSize: '0.62rem', letterSpacing: '0.1em', color: 'var(--ink-muted)' }}>{s.n}</span>
//                   <div style={{ ...S, fontSize: '1.05rem', fontWeight: 700, color: 'var(--ink)' }}>{s.title}</div>
//                   <p style={{ fontSize: '0.875rem', color: 'var(--ink-mid)', lineHeight: 1.65 }}>{s.desc}</p>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── PHILOSOPHY STATEMENT ── */}
//       <section style={{ background: 'var(--grad-hero)', padding: '7rem 2rem', position: 'relative', overflow: 'hidden' }} className="px-6 md:px-16">
//         <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 20% 50%, rgba(255,255,255,0.06) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(0,196,212,0.1) 0%, transparent 50%)', pointerEvents: 'none' }} />
//         <div className="max-w-5xl mx-auto relative z-10 text-center">
//           <Reveal>
//             <div style={{ ...M, fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--cyan)', marginBottom: '2rem' }}>Our Scientific Philosophy</div>
//             <blockquote style={{ ...S, fontSize: 'clamp(1.6rem,3vw,2.8rem)', fontWeight: 700, color: 'white', lineHeight: 1.3, letterSpacing: '-0.02em', marginBottom: '2rem' }}>
//               "At SRRD Laboratories, we believe that precision chemistry is the foundation of safer, more effective medicines."
//             </blockquote>
//             <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: 680, margin: '0 auto 2rem' }}>
//               Every impurity, every labelled compound, every analytical spectrum carries a responsibility — to the science, to the data, and ultimately to the patient.
//             </p>
//             <div style={{ display: 'inline-block', background: 'rgba(0,196,212,0.15)', border: '1px solid rgba(0,196,212,0.35)', borderRadius: 12, padding: '1.25rem 2.5rem' }}>
//               <div style={{ ...S, fontSize: '1.3rem', fontWeight: 800, color: 'var(--cyan)', letterSpacing: '-0.01em' }}>
//                 Do the science right. Do it with integrity. Do it with purpose.
//               </div>
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       {/* ── VALUES ── */}
//       <section style={{ background: '#fff', padding: '7rem 2rem' }} className="px-6 md:px-16">
//         <div className="max-w-7xl mx-auto">
//           <Reveal>
//             <div className="text-center mb-14">
//               <Eyebrow>Our Values</Eyebrow>
//               <h2 style={{ ...S, fontSize: 'clamp(1.9rem,3vw,2.8rem)', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
//                 The Principles That Shape<br />Every Molecule We Deliver
//               </h2>
//             </div>
//           </Reveal>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {VALUES.map((v, i) => (
//               <Reveal key={v.n} delay={i % 3 * 80}>
//                 <div className="rounded-[14px] p-8 h-full transition-all duration-300 hover:-translate-y-1"
//                   style={{ background: '#f4f8fb', border: '1px solid var(--border)' }}>
//                   <div style={{ ...M, fontSize: '0.62rem', letterSpacing: '0.1em', color: 'var(--teal)', marginBottom: '0.75rem' }}>{v.n}</div>
//                   <div style={{ ...S, fontSize: '1rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '0.5rem' }}>{v.title}</div>
//                   <p style={{ fontSize: '0.875rem', color: 'var(--ink-mid)', lineHeight: 1.65 }}>{v.desc}</p>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── PRODUCTS PREVIEW ── */}
//       <section style={{ background: '#f4f8fb', padding: '7rem 2rem' }} className="px-6 md:px-16">
//         <div className="max-w-7xl mx-auto">
//           <Reveal>
//             <div className="text-center mb-12">
//               <Eyebrow>Our Products</Eyebrow>
//               <h2 style={{ ...S, fontSize: 'clamp(1.9rem,3vw,2.8rem)', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>Specialised Reference Compounds</h2>
//               <p style={{ color: 'var(--ink-mid)', lineHeight: 1.7, maxWidth: 540, margin: '0 auto' }}>
//                 Stable isotope-labelled compounds, API impurities, and N-nitroso compounds — fully characterised and regulatory-ready.
//               </p>
//             </div>
//           </Reveal>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-10">
//             {[
//               { label: 'Stable Isotope Labelled Compounds', desc: '¹³C, ²H, ¹⁵N, ¹⁸O labelled compounds for metabolism, pharmacokinetics, and bioanalytical research.' },
//               { label: "API's Impurities", desc: 'Pharmaceutical-grade API impurity reference standards with full characterisation and documentation packages.' },
//               { label: 'N-Nitroso Compounds', desc: 'Specialised nitrosamine standards including NDMA, NDEA, NMOR for ICH M7 regulatory compliance.' },
//             ].map((p, i) => (
//               <Reveal key={p.label} delay={i * 100}>
//                 <Link href="/products" className="block no-underline rounded-[16px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group" style={{ background: '#fff', border: '1px solid var(--border)', color: 'inherit' }}>
//                   <div style={{ height: 3, background: 'var(--grad-btn)' }} />
//                   <div className="p-9">
//                     <div style={{ ...S, fontSize: '1.1rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '0.75rem', lineHeight: 1.3 }}>{p.label}</div>
//                     <p style={{ fontSize: '0.875rem', color: 'var(--ink-mid)', lineHeight: 1.65, marginBottom: '1.25rem' }}>{p.desc}</p>
//                     <div className="flex items-center gap-2 font-bold text-sm transition-all group-hover:gap-3" style={{ color: 'var(--primary)' }}>
//                       Explore <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
//                     </div>
//                   </div>
//                 </Link>
//               </Reveal>
//             ))}
//           </div>
//           <Reveal>
//             <div className="text-center">
//               <Link href="/products" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white font-bold text-sm no-underline"
//                 style={{ background: 'var(--grad-btn)', boxShadow: '0 6px 20px rgba(10,92,138,0.3)' }}>
//                 View Full Catalogue
//                 <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
//               </Link>
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       {/* ── BRAND STORY QUOTE ── */}
//       <section style={{ background: 'var(--ink)', padding: '6rem 2rem', position: 'relative', overflow: 'hidden' }} className="px-6 md:px-16">
//         <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 50%, rgba(0,134,155,0.18) 0%, transparent 60%)', pointerEvents: 'none' }} />
//         <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
//           <div className="flex-1">
//             <div style={{ ...M, fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--cyan)', marginBottom: '1.5rem' }}>SRRD Laboratories</div>
//             <blockquote style={{ ...S, fontSize: 'clamp(1.4rem,2.5vw,2rem)', fontWeight: 700, color: 'white', lineHeight: 1.4, letterSpacing: '-0.02em', marginBottom: '1.25rem', fontStyle: 'italic' }}>
//               "At SRRD, we don't chase volume. We chase accuracy, purity, and scientific truth."
//             </blockquote>
//             <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: 520, fontSize: '0.975rem' }}>
//               Because in pharmaceutical chemistry, precision is not a luxury — it is the foundation of trust. Every medicine begins with a molecule, and every molecule carries a responsibility.
//             </p>
//           </div>
//           <div className="flex-shrink-0 text-center">
//             <div style={{ ...S, fontSize: '1.15rem', fontWeight: 700, color: 'white', marginBottom: '0.25rem' }}>SRRD Laboratories</div>
//             <div style={{ ...M, fontSize: '0.75rem', color: 'var(--cyan)', letterSpacing: '0.1em' }}>Where Chemistry Meets Confidence</div>
//             <div className="mt-6 flex flex-col gap-3">
//               <Link href="/contact" className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-sm no-underline"
//                 style={{ background: 'white', color: 'var(--primary)' }}>
//                 Start a Collaboration
//               </Link>
//               <Link href="/about" className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm no-underline"
//                 style={{ border: '1.5px solid rgba(255,255,255,0.2)', color: 'white' }}>
//                 Our Story
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       <style>{`
//         /* ── Hero grid ── */
//         .hero-grid { grid-template-columns: 1fr 1fr; }
//         @media (max-width: 768px) {
//           .hero-grid { grid-template-columns: 1fr !important; }
//         }

//         /* ── Service card top bar hover ── */
//         .group:hover [style*="scaleX(0)"] { transform: scaleX(1) !important; }

//         /* ── Stats: horizontal row on desktop ── */
//         .hero-stats {
//           display: flex;
//           align-items: center;
//           gap: 0;
//         }
//         .hero-stat-item {
//           padding-right: 1.5rem;
//           margin-right: 1.5rem;
//           border-right: 1px solid var(--border);
//         }
//         .hero-stat-item:last-child {
//           border-right: none;
//           padding-right: 0;
//           margin-right: 0;
//         }

//         /* ── Stats: vertical stack on mobile ── */
//         @media (max-width: 768px) {
//           .hero-stats {
//             flex-direction: column;
//             align-items: flex-start;
//             gap: 1rem;
//           }
//           .hero-stat-item {
//             border-right: none;
//             border-bottom: 1px solid var(--border);
//             padding-right: 0;
//             margin-right: 0;
//             padding-bottom: 1rem;
//             width: 100%;
//           }
//           .hero-stat-item:last-child {
//             border-bottom: none;
//             padding-bottom: 0;
//           }
//         }
//       `}</style>
//     </>
//   );
// }

import Link from 'next/link';
import Reveal from '@/components/Reveal';

const S = { fontFamily: "Syne, sans-serif" } as const;
const M = { fontFamily: "JetBrains Mono, monospace" } as const;

// function Eyebrow({ children }: { children: string }) {
//   return (
//     <div className="mb-4">
//       <span
//         style={{
//           display: 'inline-flex',
//           alignItems: 'center',
//           gap: '10px',
//           padding: '8px 18px',
//           background: 'rgba(212, 175, 55, 0.12)',
//           border: '1px solid #D4AF37',
//           borderRadius: '999px',
//           color: '#D4AF37',
//           fontSize: '0.85rem',
//           fontWeight: 600,
//           letterSpacing: '0.18em',
//           textTransform: 'uppercase',
//         }}
//       >
//         {/* <span
//           style={{
//             width: 24,
//             height: 2,
//             background: '#D4AF37',
//             borderRadius: 2,
//           }}
//         /> */}
//         {children}
//       </span>
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
        style={{ minHeight: 'calc(100vh - 108px)', display: 'grid', background: '#fff', overflow: 'hidden' }}
        className="hero-grid"
      >
        {/* Left */}
        <div className="flex flex-col justify-center px-5 md:px-16 py-14 md:py-20" style={{ minWidth: 0, overflow: 'hidden' }}>
          <div className="flex items-center gap-2 mb-8 w-fit px-4 py-2 rounded-full"
            style={{ ...M, fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--teal)', background: 'var(--teal-pale)', border: '1px solid rgba(0,134,155,0.25)' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--teal)', display: 'inline-block' }} />
            CRO / CDMO · Hyderabad, India
          </div>

          <h1 style={{ ...S, fontSize: 'clamp(2rem,4.5vw,4.4rem)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.025em', color: 'var(--ink)', marginBottom: '1.5rem' }}>
            The Chemistry<br />
            <span style={{ background: 'var(--grad-hero)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Behind Confidence.</span>
          </h1>

          <p style={{ fontSize: '1rem', color: 'var(--ink-mid)', lineHeight: 1.8, maxWidth: '100%', marginBottom: '0.75rem' }}>
            SRRD Laboratories is a science-first CRO/CDMO specialising in <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>impurity synthesis</strong>, <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>isotope-labelled compounds</strong>, and <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>custom chemical development</strong>.
          </p>
          <p style={{ fontSize: '0.95rem', color: 'var(--ink-mid)', lineHeight: 1.75, maxWidth: '100%', marginBottom: '2.5rem' }}>
            Supporting global pharmaceutical and biotechnology organisations in their pursuit of innovation, compliance, and patient safety.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <Link href="/contact" className="flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-lg text-white font-bold text-sm no-underline"
              style={{ background: 'var(--grad-btn)', boxShadow: '0 6px 20px rgba(10,92,138,0.35)' }}>
              Partner With Us
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link href="/products" className="flex items-center gap-2 px-5 py-3 md:px-6 md:py-4 rounded-lg font-semibold text-sm no-underline"
              style={{ border: '1.5px solid var(--border-mid)', color: 'var(--primary)' }}>
              View Products
            </Link>
          </div>

          {/* Stats – vertical on mobile, horizontal on desktop */}
          <div className="pt-5" style={{ borderTop: '1px solid var(--border)' }}>
            <div className="hero-stats">
              {[['Impurities','Synthesised'],['Isotope','Labelled Cpds'],['Custom','Multi-step']].map(([v, l]) => (
                <div key={v} className="hero-stat-item flex flex-col gap-1">
                  <span style={{ ...S, fontSize: '1.35rem', fontWeight: 800, color: 'var(--primary)', lineHeight: 1 }}>{v}</span>
                  <span style={{ ...M, fontSize: '0.6rem', color: 'var(--ink-muted)', textTransform: 'uppercase', letterSpacing: '0.07em' }}>{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right – video panel */}
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
              background: "linear-gradient(to right, rgba(0,0,0,0.45), rgba(0,0,0,0.25))",
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
              <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "white" }}>
                Do the science right. With integrity. With purpose.
              </div>
              <div style={{ fontSize: "0.73rem", color: "rgba(255,255,255,0.65)", marginTop: "0.1rem" }}>
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
            {['Isotope Labelling','Custom Multi-step Synthesis','Impurities','N-Nitroso Compounds','Peptides'].map(t => (
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
                  {/* <span style={{ ...M, fontSize: '0.62rem', letterSpacing: '0.1em', color: 'var(--ink-muted)' }}>{s.n}</span> */}
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
                  {/* <div style={{ ...M, fontSize: '0.62rem', letterSpacing: '0.1em', color: 'var(--teal)', marginBottom: '0.75rem' }}>{v.n}</div> */}
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
        /* ── Hero grid ── */
        .hero-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }

        /* ── Service card top bar hover ── */
        .group:hover [style*="scaleX(0)"] { transform: scaleX(1) !important; }

        /* ── Stats: horizontal row on desktop ── */
        .hero-stats {
          display: flex;
          align-items: center;
          gap: 0;
        }
        .hero-stat-item {
          padding-right: 1.5rem;
          margin-right: 1.5rem;
          border-right: 1px solid var(--border);
        }
        .hero-stat-item:last-child {
          border-right: none;
          padding-right: 0;
          margin-right: 0;
        }

        /* ── Stats: vertical stack on mobile ── */
        @media (max-width: 768px) {
          .hero-stats {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          .hero-stat-item {
            border-right: none;
            border-bottom: 1px solid var(--border);
            padding-right: 0;
            margin-right: 0;
            padding-bottom: 1rem;
            width: 100%;
          }
          .hero-stat-item:last-child {
            border-bottom: none;
            padding-bottom: 0;
          }
        }
      `}</style>
    </>
  );
}