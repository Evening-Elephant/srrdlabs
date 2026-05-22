'use client';

import { useState } from 'react';
import Reveal from '@/components/Reveal';

const S = { fontFamily: "Syne, sans-serif" } as const;
const M = { fontFamily: "JetBrains Mono, monospace" } as const;

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.85rem 1rem',
  background: '#f4f8fb',
  border: '1.5px solid rgba(10,92,138,0.12)',
  borderRadius: 8,
  fontFamily: "Plus Jakarta Sans, sans-serif",
  fontSize: '0.9rem',
  color: 'var(--ink)',
  outline: 'none',
};

const FAQS = [
  [
    'What compounds can SRRD synthesise?',
    'SRRD Laboratories specialises in pharmaceutical impurities, stable isotope-labelled compounds (¹³C, ²H, ¹⁵N, ¹⁸O), N-nitroso compounds, API impurities, and complex custom multi-step synthesis — from milligram to kilogram scale.',
  ],
  [
    'Do you work with isotope-labelled compounds?',
    'Yes. Isotope labelling is one of our core specialities. We deliver radio and stable isotope-labelled compounds for metabolism studies, pharmacokinetics, bioanalytical research, and drug development.',
  ],
  [
    'How do you ensure regulatory compliance?',
    'All deliverables are accompanied by full analytical characterisation data including NMR, HRMS, HPLC, and IR spectra. We provide Certificates of Analysis, full documentation packages, and support for regulatory filings aligned with ICH guidelines.',
  ],
  [
    'How do you handle confidentiality?',
    'Confidentiality is fundamental to how we operate. We execute NDAs before project discussions, maintain secure data systems, and apply strict information handling protocols throughout the project lifecycle.',
  ],
  [
    'What is your typical project turnaround?',
    'Timelines depend on complexity. Our agile structure allows us to deliver complex materials faster than many larger organisations, without compromising quality. We will agree a realistic timeline with you at project kick-off.',
  ],
  [
    'Can you deliver globally?',
    'Yes. SRRD Laboratories works with pharmaceutical and biotechnology organisations globally, and has experience managing international shipment of specialised chemical materials with all required documentation.',
  ],
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

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
              'radial-gradient(ellipse at 70% 50%, rgba(0,196,212,0.18) 0%, transparent 55%)',
            pointerEvents: 'none',
          }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div
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
              Contact Us
            </div>
            <h1
              style={{
                ...S,
                fontSize: 'clamp(2.5rem,4vw,4rem)',
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: '-0.025em',
                marginBottom: '1.25rem',
              }}
            >
              Start a Scientific<br />
              <em style={{ fontStyle: 'italic', color: 'var(--cyan)' }}>Collaboration</em>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem', lineHeight: 1.8, maxWidth: 440 }}>
              Whether you need a complex impurity, an isotope-labelled compound, or a multi-step
              custom synthesis — our team is ready to help. Tell us about your project and we'll
              get back to you within one business day.
            </p>
          </div>

          {/* Quick contact cards */}
          <div className="grid grid-cols-1 gap-3">
            {[
              {
                label: 'Email',
                val: 'info@srrdlaboratories.com',
                href: 'mailto:info@srrdlaboratories.com',
                d: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
              },
              {
                label: 'Phone',
                val: '+91 98852 04920',
                href: 'tel:+919885204920',
                d: 'M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z',
              },
              {
                label: 'Address',
                val: 'Balangar, Hyderabad 500037, India',
                href: '#',
                d: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
              },
            ].map(({ label, val, href, d }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-4 rounded-xl p-4 no-underline transition-all"
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 9,
                    background: 'rgba(0,196,212,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="var(--cyan)">
                    <path d={d} />
                  </svg>
                </div>
                <div>
                  <div
                    style={{
                      ...M,
                      fontSize: '0.6rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.6)',
                      marginBottom: '0.2rem',
                    }}
                  >
                    {label}
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 500, color: 'white' }}>{val}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── FORM + INFO ── */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px]">
        {/* Form */}
        <div
          style={{ background: '#fff', borderRight: '1px solid rgba(10,92,138,0.1)' }}
          className="px-6 md:px-16 py-16"
        >
          <Reveal>
            <div
              style={{
                ...M,
                fontSize: '0.68rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--teal)',
                marginBottom: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
              }}
            >
              <span style={{ width: 20, height: 2, background: 'var(--teal)', borderRadius: 1, display: 'inline-block' }} />
              Send a Message
            </div>
            <h2
              style={{
                ...S,
                fontSize: 'clamp(1.8rem,2.5vw,2.4rem)',
                fontWeight: 700,
                color: 'var(--ink)',
                letterSpacing: '-0.02em',
                marginBottom: '0.75rem',
              }}
            >
              Tell Us About<br />Your Project
            </h2>
            <p style={{ color: 'var(--ink-muted)', fontSize: '0.9rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
              We respond to all project enquiries within one business day. All communications are treated with strict confidentiality — we can also execute an NDA before discussing project details if required
Saturday- 09: 00 to 17:00

            </p>
          </Reveal>

          {submitted ? (
            <div className="text-center py-16">
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: '50%',
                  background: 'var(--teal-pale)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                }}
              >
                <svg viewBox="0 0 24 24" width="36" height="36" fill="var(--teal)">
                  <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div style={{ ...S, fontSize: '1.5rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '0.5rem' }}>
                Message Received
              </div>
              <p style={{ color: 'var(--ink-mid)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                Thank you for reaching out. Our scientific team will review your enquiry and respond
                within one business day.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-3 rounded-lg text-white font-bold text-sm"
                style={{
                  background: 'var(--grad-btn)',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form
              className="flex flex-col gap-5"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label style={{ ...M, fontSize: '0.65rem', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-mid)', fontWeight: 600 }}>
                    First Name *
                  </label>
                  <input type="text" required placeholder="John" style={inputStyle} />
                </div>
                <div className="flex flex-col gap-2">
                  <label style={{ ...M, fontSize: '0.65rem', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-mid)', fontWeight: 600 }}>
                    Last Name *
                  </label>
                  <input type="text" required placeholder="Smith" style={inputStyle} />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label style={{ ...M, fontSize: '0.65rem', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-mid)', fontWeight: 600 }}>
                    Email Address *
                  </label>
                  <input type="email" required placeholder="john@company.com" style={inputStyle} />
                </div>
                <div className="flex flex-col gap-2">
                  <label style={{ ...M, fontSize: '0.65rem', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-mid)', fontWeight: 600 }}>
                    Phone Number
                  </label>
                  <input type="tel" placeholder="+1 (555) 000-0000" style={inputStyle} />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label style={{ ...M, fontSize: '0.65rem', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-mid)', fontWeight: 600 }}>
                  Company / Institution *
                </label>
                <input type="text" required placeholder="Pharma Company Ltd." style={inputStyle} />
              </div>
              <div className="flex flex-col gap-2">
                <label style={{ ...M, fontSize: '0.65rem', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-mid)', fontWeight: 600 }}>
                  Project Type
                </label>
                <select
                  style={{
                    ...inputStyle,
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236B8FA8' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    backgroundSize: '14px',
                    paddingRight: '2.5rem',
                    cursor: 'pointer',
                    appearance: 'none',
                  }}
                >
                  <option value="">Select project type…</option>
                  <option>Impurity Synthesis</option>
                  <option>Stable Isotope-Labelled Compounds</option>
                  <option>Radio-Labelled Compounds</option>
                  <option>N-Nitroso Compounds</option>
                  <option>API Impurities</option>
                  <option>Custom Multi-step Synthesis</option>
                  <option>Analytical Characterisation</option>
                  <option>General Enquiry</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label style={{ ...M, fontSize: '0.65rem', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-mid)', fontWeight: 600 }}>
                  Project Details *
                </label>
                <textarea
                  required
                  placeholder="Please describe your compound, required quantity, purity specifications, intended use, and any timeline requirements…"
                  rows={5}
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
              </div>
              <div
                className="flex items-start gap-3 p-4 rounded-lg"
                style={{ background: 'var(--teal-pale)', border: '1px solid rgba(0,134,155,0.2)' }}
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="var(--teal)" style={{ flexShrink: 0, marginTop: 2 }}>
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                </svg>
                <p style={{ fontSize: '0.8rem', color: 'var(--ink-mid)', lineHeight: 1.65 }}>
                  All enquiries are handled with strict confidentiality. We can execute an NDA before
                  discussing project-specific details if required.
                </p>
              </div>
              <button
                type="submit"
                className="flex items-center gap-2 px-8 py-4 rounded-lg text-white font-bold text-sm self-start"
                style={{
                  background: 'var(--grad-btn)',
                  boxShadow: '0 6px 20px rgba(10,92,138,0.35)',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                }}
              >
                Send Project Enquiry
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          )}
        </div>

        {/* Info panel */}
        <div style={{ background: '#f4f8fb' }} className="px-6 md:px-10 py-16 flex flex-col gap-10">
          {/* Contact details */}
          <Reveal>
            <div>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: '1.25rem' }}>
                Contact Details
              </div>
              <div className="flex flex-col gap-3">
                {[
                  { label: 'Email', val: 'info@srrdlaboratories.com', href: 'mailto:info@srrdlaboratories.com', d: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z' },
                  { label: 'Phone', val: '+91 98852 04920', href: 'tel:+919885204920', d: 'M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z' },
                  { label: 'Address', val: 'Balangar, Hyderabad 500037', href: '#', d: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' },
                ].map(({ label, val, href, d }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-start gap-4 p-4 rounded-xl no-underline transition-all"
                    style={{ background: '#fff', border: '1px solid rgba(10,92,138,0.12)' }}
                  >
                    <div style={{ width: 40, height: 40, borderRadius: 8, background: 'var(--teal-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="var(--teal)"><path d={d} /></svg>
                    </div>
                    <div>
                      <div style={{ ...M, fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-muted)', fontWeight: 600, marginBottom: '0.25rem' }}>{label}</div>
                      <div style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--ink)', lineHeight: 1.5 }}>{val}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Business hours */}
          <Reveal delay={80}>
            <div>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: '1.25rem' }}>
                Business Hours (IST)
              </div>
              <div className="flex flex-col gap-2">
                {[['Monday – Friday', '09:00 – 18:00'], ['Saturday', '09:00 – 14:00'], ['Sunday', 'Closed']].map(([day, time]) => (
                  <div key={day} className="flex justify-between items-center p-4 rounded-lg" style={{ background: '#fff', border: '1px solid rgba(10,92,138,0.12)' }}>
                    <span style={{ fontSize: '0.875rem', color: 'var(--ink-mid)', fontWeight: 500 }}>{day}</span>
                    <span style={{ ...M, fontSize: '0.82rem', color: time === 'Closed' ? 'var(--ink-muted)' : 'var(--ink)', fontWeight: 500 }}>{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Careers note */}
          <Reveal delay={120}>
            <div className="rounded-xl p-6" style={{ background: 'var(--grad-hero)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 20%, rgba(0,196,212,0.2) 0%, transparent 60%)', pointerEvents: 'none' }} />
              <div className="relative z-10">
                <div style={{ ...M, fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--cyan)', marginBottom: '0.75rem' }}>Careers at SRRD</div>
                <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.65, marginBottom: '1rem' }}>
                  We are always looking for talented synthetic chemists, analytical scientists, and
                  project specialists who share our commitment to scientific excellence.
                </p>
                <a
                  href="mailto:careers@srrdlabs.com"
                  style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--cyan)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  Send your CV
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ── FAQ ── */}
      <section style={{ background: '#fff', padding: '7rem 2rem' }} className="px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <div style={{ ...M, fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: '0.75rem' }}>FAQs</div>
              <h2 style={{ ...S, fontSize: 'clamp(1.9rem,3vw,2.6rem)', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>Common Questions</h2>
              <p style={{ color: 'var(--ink-mid)', lineHeight: 1.7 }}>Everything you need to know about working with SRRD Laboratories.</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FAQS.map(([q, a]) => (
              <Reveal key={q}>
                <details
                  className="group rounded-xl overflow-hidden"
                  style={{ border: '1.5px solid rgba(10,92,138,0.12)', background: '#f4f8fb' }}
                >
                  <summary
                    className="flex items-center justify-between p-5 cursor-pointer list-none gap-3 font-semibold text-sm"
                    style={{ color: 'var(--ink)' }}
                  >
                    {q}
                    <svg
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="var(--ink-muted)"
                      strokeWidth="2"
                      className="flex-shrink-0 transition-transform group-open:rotate-180"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </summary>
                  <div
                    style={{
                      padding: '0 1.25rem 1.25rem',
                      fontSize: '0.875rem',
                      color: 'var(--ink-mid)',
                      lineHeight: 1.7,
                    }}
                  >
                    {a}
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
