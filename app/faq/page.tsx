'use client';

import Link from 'next/link';

const S = { fontFamily: 'Syne, sans-serif' } as const;
const M = { fontFamily: 'JetBrains Mono, monospace' } as const;

const FAQS = [
  {
    section: 'General Questions',
    items: [
      {
        q: 'What does SRRD Laboratories do?',
        a: (
          <>
            <p>SRRD specialises in:</p>
            <ul>
              <li>Impurity synthesis</li>
              <li>Isotope-labelled compounds</li>
              <li>Custom chemical development</li>
              <li>CRO/CDMO support for pharmaceutical R&amp;D</li>
            </ul>
            <p>
              We provide high-purity materials and analytical support for drug discovery,
              development, and regulatory submissions.
            </p>
          </>
        ),
      },
      {
        q: 'Who are your typical clients?',
        a: 'Pharma companies, biotech firms, CROs, academic labs, and analytical testing facilities requiring reference standards or custom synthesis.',
      },
    ],
  },
  {
    section: 'Products & Services',
    items: [
      {
        q: 'Do you supply custom impurities or intermediates?',
        a: (
          <>
            <p>Yes — SRRD synthesises:</p>
            <ul>
              <li>Process impurities</li>
              <li>Degradation products</li>
              <li>Intermediates</li>
              <li>Metabolite analogues</li>
            </ul>
            <p>All can be delivered with full analytical data.</p>
          </>
        ),
      },
      {
        q: 'Do you offer isotope-labelled compounds?',
        a: (
          <>
            <p>Yes — including ¹³C, ²H, ¹⁵N, and multi-labelled compounds for:</p>
            <ul>
              <li>PK/PD studies</li>
              <li>Metabolite tracking</li>
              <li>Bioanalytical quantification</li>
            </ul>
          </>
        ),
      },
      {
        q: 'Can SRRD develop analytical methods?',
        a: 'Yes — NMR, LC-MS, HPLC, GC, purity profiling, and method optimisation.',
      },
    ],
  },
  {
    section: 'Ordering & Pricing',
    items: [
      {
        q: 'How do I place an order?',
        a: (
          <>
            <p>Send a purchase order via email including:</p>
            <ul>
              <li>Product name</li>
              <li>Quantity</li>
              <li>Specifications</li>
              <li>Delivery address</li>
              <li>Billing details</li>
            </ul>
          </>
        ),
      },
      {
        q: 'Do you provide quotations?',
        a: 'Yes — quotations are issued within 24–48 hours and valid for 30 days.',
      },
      {
        q: 'What payment terms do you offer?',
        a: 'Standard terms: 30 days from invoice date.',
      },
    ],
  },
  {
    section: 'Shipping & Delivery',
    items: [
      {
        q: 'What are your delivery terms?',
        a: (
          <>
            <p>Standard terms: EXW (Ex-Works).</p>
            <p>We can ship via DHL, FedEx, UPS, or your preferred courier.</p>
          </>
        ),
      },
      {
        q: 'Do you ship internationally?',
        a: 'Yes — SRRD supplies clients worldwide, subject to chemical transport regulations.',
      },
      {
        q: 'How long does delivery take?',
        a: (
          <ul>
            <li>Stock items: 1–2 days</li>
            <li>Custom synthesis: depends on complexity (typically 1–6 weeks)</li>
          </ul>
        ),
      },
    ],
  },
  {
    section: 'Quality & Documentation',
    items: [
      {
        q: 'Do you provide Certificates of Analysis?',
        a: 'Yes — CoA, NMR, LC-MS, HPLC, and purity data are provided where applicable.',
      },
      {
        q: 'What quality standards do you follow?',
        a: 'SRRD follows internal QC procedures aligned with pharmaceutical R&D expectations.',
      },
      {
        q: 'Can you match client specifications?',
        a: 'Yes — we can synthesise and release materials to your exact analytical criteria.',
      },
    ],
  },
  {
    section: 'Legal & Compliance',
    items: [
      {
        q: 'Are your products for human use?',
        a: 'No — all products are for research use only, not for human or veterinary use.',
      },
      {
        q: 'Do you transfer intellectual property?',
        a: 'No — custom synthesis does not transfer underlying methods, routes, or know-how unless explicitly agreed.',
      },
      {
        q: 'Where can I find your Terms & Conditions?',
        a: 'Included with all quotations, invoices, and available upon request.',
      },
    ],
  },
];

function FAQAccordion({
  question,
  answer,
}: {
  question: string;
  answer: React.ReactNode;
}) {
  return (
    <details
      className="group overflow-hidden rounded-2xl transition-all duration-300"
      style={{
        background: '#fff',
        border: '1.5px solid rgba(10,92,138,.12)',
        boxShadow: '0 8px 30px rgba(10,92,138,.05)',
      }}
    >
      <summary
        className="flex items-center justify-between cursor-pointer list-none p-5 md:p-6"
        style={{
          userSelect: 'none',
          outline: 'none',
        }}
      >
        <div
          style={{
            ...S,
            fontSize: '1rem',
            fontWeight: 700,
            color: 'var(--ink)',
            lineHeight: 1.5,
            paddingRight: '1rem',
          }}
        >
          {question}
        </div>

        <div
          className="faq-icon"
          style={{
            width: 36,
            height: 36,
            borderRadius: 10,
            background: 'var(--teal-pale)',
            color: 'var(--teal)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            fontSize: '1.4rem',
            fontWeight: 500,
            transition: 'all .3s ease',
          }}
        >
          +
        </div>
      </summary>

      <div
        className="faq-answer"
        style={{
          padding: '0 1.5rem 1.5rem',
          borderTop: '1px solid rgba(10,92,138,.08)',
          color: 'var(--ink-mid)',
          fontSize: '0.92rem',
          lineHeight: 1.8,
        }}
      >
        {typeof answer === 'string' ? <p>{answer}</p> : answer}
      </div>
    </details>
  );
}

export default function FAQPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: 'linear-gradient(135deg,#f4f8fb 0%,#ffffff 50%,#eef8fa 100%)', borderBottom: '1px solid rgba(10,92,138,.08)' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-16 py-14 md:py-24">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-7" style={{ color: 'var(--ink-muted)' }}>
            <Link href="/" style={{ color: 'var(--ink-muted)', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: 'rgba(10,92,138,.25)' }}>›</span>
            <span style={{ color: 'var(--ink)', fontWeight: 600 }}>FAQ</span>
          </div>

          <div className="max-w-3xl">
            <div style={{ ...M, fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: '1rem' }}>
              SRRD Laboratories
            </div>

            <h1 style={{ ...S, fontSize: 'clamp(2rem,5vw,4.5rem)', fontWeight: 800, color: 'var(--ink)', lineHeight: 1.05, letterSpacing: '-0.035em', marginBottom: '1.25rem' }}>
              Frequently Asked<br />
              <span style={{ color: 'var(--teal)' }}>Questions</span>
            </h1>

            <p style={{ color: 'var(--ink-mid)', fontSize: '0.975rem', lineHeight: 1.9, maxWidth: 620 }}>
              Answers to common questions regarding SRRD Laboratories, custom synthesis,
              impurity standards, isotope-labelled compounds, analytical support, ordering,
              shipping, and compliance.
            </p>

            {/* Quick-jump pills — scrollable on mobile */}
            <div className="faq-pills flex gap-2 mt-8 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
              {FAQS.map((s) => (
                <a
                  key={s.section}
                  href={`#${s.section.toLowerCase().replace(/[^a-z]+/g, '-')}`}
                  className="flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold no-underline transition-all hover:-translate-y-0.5"
                  style={{ ...M, background: 'var(--teal-pale)', color: 'var(--teal)', border: '1px solid rgba(10,92,138,.12)', letterSpacing: '0.04em' }}
                >
                  {s.section}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ CONTENT ── */}
      <section style={{ background: '#f4f8fb', padding: '4rem 0 6rem' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-16">
          <div className="flex flex-col gap-12 md:gap-16">
            {FAQS.map((section) => (
              <div key={section.section} id={section.section.toLowerCase().replace(/[^a-z]+/g, '-')}>
                {/* Section header */}
                <div className="flex items-center gap-4 mb-7">
                  <div style={{ width: 3, height: 34, borderRadius: 4, background: 'var(--grad-btn)', flexShrink: 0 }} />
                  <div>
                    <div style={{ ...M, fontSize: '0.65rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: '0.3rem' }}>
                      FAQ Section
                    </div>
                    <h2 style={{ ...S, fontSize: 'clamp(1.4rem,3vw,1.85rem)', fontWeight: 800, color: 'var(--ink)', letterSpacing: '-0.03em', lineHeight: 1 }}>
                      {section.section}
                    </h2>
                  </div>
                </div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
                  {section.items.map((item) => (
  <FAQAccordion
    key={item.q}
    question={item.q}
    answer={item.a}
  />
))}
                </div>
              </div>
            ))}
          </div>

          {/* ── CTA ── */}
          <div
            className="mt-16 md:mt-20 rounded-[20px] md:rounded-[28px] overflow-hidden"
            style={{ background: 'linear-gradient(135deg,#0A5C8A 0%,#00869B 100%)', boxShadow: '0 25px 60px rgba(10,92,138,.18)' }}
          >
            <div className="px-6 md:px-14 py-12 md:py-16 text-center">
              <div style={{ ...M, fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,.7)', marginBottom: '1rem' }}>
                Need More Information?
              </div>
              <h3 style={{ ...S, fontSize: 'clamp(1.6rem,3vw,3rem)', fontWeight: 800, color: 'white', lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                Speak with Our Scientific Team
              </h3>
              <p style={{ color: 'rgba(255,255,255,.82)', fontSize: '0.975rem', lineHeight: 1.8, maxWidth: 620, margin: '0 auto 2rem' }}>
                Contact SRRD Laboratories for quotations, custom synthesis, isotope-labelled
                compounds, analytical services, or technical documentation.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-white font-bold text-sm no-underline"
                  style={{ background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.18)', backdropFilter: 'blur(10px)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  Contact Us
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
                <Link
                  href="/products"
                  className="flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-sm font-bold no-underline"
                  style={{ background: 'white', color: 'var(--primary)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  Browse Products
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .faq-pills::-webkit-scrollbar { display: none; }
        .faq-content ul { margin-top: 0.5rem; margin-bottom: 0.75rem; padding-left: 1.1rem; }
        .faq-content li { margin-bottom: 0.3rem; }
        .faq-content p { margin-bottom: 0.65rem; }
        .faq-content p:last-child, .faq-content li:last-child { margin-bottom: 0; }
      `}</style>
    </>
  );
}