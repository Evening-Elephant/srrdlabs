import Link from 'next/link';
const S = { fontFamily: "Syne, sans-serif" } as const;
const M = { fontFamily: "JetBrains Mono, monospace" } as const;

const POSTS = [
  {
    tag: 'Regulatory Science',
    date: 'May 2025',
    title: 'Understanding ICH M7 and the Rise of Nitrosamine Impurity Testing',
    excerpt: 'How the ICH M7 guideline has reshaped pharmaceutical impurity testing, and what it means for drug manufacturers globally.',
  },
  {
    tag: 'Isotope Chemistry',
    date: 'April 2025',
    title: 'Stable Isotope Labelling in Drug Metabolism Studies: A Practical Overview',
    excerpt: 'Exploring how ¹³C, ²H, and ¹⁵N labelled compounds are used in ADME studies and bioanalytical method development.',
  },
  {
    tag: 'Synthesis Science',
    date: 'March 2025',
    title: 'The Role of Reference Standards in Pharmaceutical Quality Control',
    excerpt: 'Why high-purity reference standards are the cornerstone of reliable analytical testing and regulatory submissions.',
  },
  {
    tag: 'Analytical Chemistry',
    date: 'February 2025',
    title: 'NMR Characterisation of Impurity Reference Standards: Best Practices',
    excerpt: 'A deep dive into how SRRD uses multinuclear NMR to confirm identity and purity of complex pharmaceutical impurities.',
  },
  {
    tag: 'Industry Insight',
    date: 'January 2025',
    title: 'N-Nitroso Compounds in Pharmaceuticals: From Risk Assessment to Reference Standards',
    excerpt: 'A comprehensive look at how the pharmaceutical industry is responding to EMA and FDA guidance on nitrosamine contamination.',
  },
  {
    tag: 'Custom Synthesis',
    date: 'December 2024',
    title: 'Complex Multi-step Synthesis: How SRRD Tackles the Most Challenging Molecules',
    excerpt: 'Inside our approach to designing and executing synthetic routes for difficult, rare, or entirely novel compounds.',
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <div style={{ background: 'var(--grad-hero)', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 50%,rgba(0,196,212,.18) 0%,transparent 55%)', pointerEvents: 'none' }} />
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-20 relative z-10">
          <div style={{ ...M, display: 'inline-block', background: 'rgba(0,196,212,.2)', border: '1px solid rgba(0,196,212,.35)', borderRadius: 100, padding: '0.3rem 1rem', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--cyan)', marginBottom: '1.5rem' }}>
            Scientific Insights
          </div>
          <h1 style={{ ...S, fontSize: 'clamp(2.5rem,4vw,4rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.025em', marginBottom: '1rem', maxWidth: 640 }}>
            SRRD Scientific Blog
          </h1>
          <p style={{ color: 'rgba(255,255,255,.75)', fontSize: '1rem', lineHeight: 1.8, maxWidth: 520 }}>
            Insights, technical articles, and industry commentary from the SRRD Laboratories scientific team.
          </p>
        </div>
      </div>

      {/* Posts */}
      <section style={{ background: '#f4f8fb', padding: '5rem 2rem' }} className="px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {POSTS.map((post, i) => (
            <div key={i} className="flex flex-col rounded-[14px] overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg" style={{ background: 'white', border: '1px solid rgba(10,92,138,.12)' }}>
              <div style={{ height: 3, background: 'linear-gradient(90deg,#1279B0,#00869B)' }} />
              <div className="flex flex-col flex-1 p-7 gap-3">
                <div className="flex items-center gap-3">
                  <span style={{ ...M, fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--teal)', background: 'var(--teal-pale)', padding: '0.2rem 0.65rem', borderRadius: 20 }}>{post.tag}</span>
                  <span style={{ ...M, fontSize: '0.65rem', color: 'var(--ink-muted)' }}>{post.date}</span>
                </div>
                <div style={{ ...S, fontSize: '1.05rem', fontWeight: 700, color: 'var(--ink)', lineHeight: 1.35 }}>{post.title}</div>
                <p style={{ fontSize: '0.875rem', color: 'var(--ink-mid)', lineHeight: 1.65, flex: 1 }}>{post.excerpt}</p>
                <div className="flex items-center gap-1 text-sm font-bold mt-2" style={{ color: 'var(--primary)' }}>
                  Read Article <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div style={{ background: 'var(--ink)', padding: '5rem 2rem', position: 'relative', overflow: 'hidden' }} className="px-6 md:px-16">
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 50%,rgba(0,134,155,.2) 0%,transparent 60%)', pointerEvents: 'none' }} />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div>
            <h2 style={{ ...S, fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 700, color: 'white', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>Have a scientific challenge?</h2>
            <p style={{ color: 'rgba(255,255,255,.6)', fontSize: '1rem' }}>Our team is ready to help with your synthesis and analytical needs.</p>
          </div>
          <Link href="/contact" className="flex-shrink-0 flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-sm no-underline" style={{ background: 'white', color: 'var(--primary)' }}>
            Contact SRRD <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </>
  );
}
