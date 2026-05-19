'use client';
import { useState } from 'react';
import Link from 'next/link';

const S = { fontFamily: "Syne, sans-serif" } as const;
const M = { fontFamily: "JetBrains Mono, monospace" } as const;

const ROLES = [
  { title: 'Senior Synthetic Chemist', type: 'Full-time', location: 'Hyderabad, India', desc: 'Lead complex multi-step synthesis projects — impurities, isotope-labelled compounds, and custom molecules for pharmaceutical clients.' },
  { title: 'Analytical Scientist (NMR / HRMS)', type: 'Full-time', location: 'Hyderabad, India', desc: 'Characterise pharmaceutical reference standards using advanced NMR, HRMS, HPLC, and IR techniques. Generate analytical data packages for regulatory submissions.' },
  { title: 'Research Chemist – Isotope Labelling', type: 'Full-time', location: 'Hyderabad, India', desc: 'Specialise in radio and stable isotope labelling (¹³C, ²H, ¹⁵N) for pharmaceutical metabolism and bioanalytical research.' },
  { title: 'Project Manager – CRO', type: 'Full-time', location: 'Hyderabad, India', desc: 'Manage scientific projects from kick-off to delivery — coordinating between synthesis teams, analytical scientists, and pharmaceutical clients.' },
];

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '0.85rem 1rem',
  background: '#f4f8fb', border: '1.5px solid rgba(10,92,138,.12)',
  borderRadius: 8, fontFamily: "Plus Jakarta Sans, sans-serif",
  fontSize: '0.9rem', color: 'var(--ink)', outline: 'none',
};

export default function CareersPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* Hero */}
      <div style={{ background: 'var(--grad-hero)', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 50%,rgba(0,196,212,.18) 0%,transparent 55%)', pointerEvents: 'none' }} />
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-20 relative z-10">
          <div style={{ ...M, display: 'inline-block', background: 'rgba(0,196,212,.2)', border: '1px solid rgba(0,196,212,.35)', borderRadius: 100, padding: '0.3rem 1rem', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--cyan)', marginBottom: '1.5rem' }}>
            Careers at SRRD
          </div>
          <h1 style={{ ...S, fontSize: 'clamp(2.5rem,4vw,4rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.025em', marginBottom: '1.25rem', maxWidth: 600 }}>
            Work Where Chemistry<br />
            <em style={{ fontStyle: 'italic', color: 'var(--cyan)' }}>Meets Purpose</em>
          </h1>
          <p style={{ color: 'rgba(255,255,255,.75)', fontSize: '1rem', lineHeight: 1.8, maxWidth: 520 }}>
            At SRRD Laboratories, we are always looking for talented scientists and specialists who
            share our commitment to precision, integrity, and meaningful impact in pharmaceutical
            chemistry. If you think deeply and work precisely, we want to hear from you.
          </p>
        </div>
      </div>

      {/* Culture */}
      <section style={{ background: '#fff', padding: '6rem 2rem' }} className="px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div style={{ ...M, fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ width: 20, height: 2, background: 'var(--teal)', borderRadius: 1, display: 'inline-block' }} />Our Culture
            </div>
            <h2 style={{ ...S, fontSize: 'clamp(1.9rem,3vw,2.6rem)', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
              Chemists Who Think Deeply.<br />Deliver Precisely.
            </h2>
            <p style={{ color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.975rem' }}>
              SRRD Laboratories is a place where scientists are given the space to do excellent
              work — without bureaucracy getting in the way. We are a small, highly capable team
              working on molecules that matter: impurities, labelled compounds, and custom
              syntheses that underpin pharmaceutical drug development globally.
            </p>
            <p style={{ color: 'var(--ink-mid)', lineHeight: 1.8, fontSize: '0.975rem' }}>
              If you value scientific rigour, direct collaboration, and the satisfaction of
              delivering something genuinely difficult, SRRD is the right environment for you.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {[
              ['Scientific Rigour', 'We hold ourselves to the highest standards of accuracy, reproducibility, and integrity — in every experiment, every report.'],
              ['Meaningful Work', 'The compounds we deliver support drug development and patient safety. The work matters — and you will feel that.'],
              ['Collaborative Environment', 'Small teams, direct communication, and a culture where every scientific opinion is heard and respected.'],
              ['Continuous Growth', 'Exposure to complex, novel problems across impurity synthesis, isotope chemistry, and analytical science.'],
            ].map(([t, d]) => (
              <div key={t} className="flex gap-4 p-5 rounded-xl" style={{ background: '#f4f8fb', border: '1px solid rgba(10,92,138,.1)' }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--teal)', flexShrink: 0, marginTop: '0.35rem' }} />
                <div>
                  <div style={{ ...S, fontWeight: 700, fontSize: '0.95rem', color: 'var(--ink)', marginBottom: '0.3rem' }}>{t}</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--ink-mid)', lineHeight: 1.65 }}>{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section style={{ background: '#f4f8fb', padding: '6rem 2rem' }} className="px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div style={{ ...M, fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: '0.75rem' }}>Open Positions</div>
            <h2 style={{ ...S, fontSize: 'clamp(1.9rem,3vw,2.6rem)', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.02em' }}>Current Opportunities</h2>
          </div>
          <div className="flex flex-col gap-4">
            {ROLES.map((r) => (
              <div key={r.title} className="flex flex-col md:flex-row md:items-center gap-5 p-7 rounded-[14px] transition-all hover:-translate-y-0.5 hover:shadow-md" style={{ background: 'white', border: '1.5px solid rgba(10,92,138,.12)' }}>
                <div style={{ flex: 1 }}>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span style={{ ...M, fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--teal)', background: 'var(--teal-pale)', padding: '0.2rem 0.6rem', borderRadius: 20 }}>{r.type}</span>
                    <span style={{ ...M, fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-muted)', background: '#f4f8fb', padding: '0.2rem 0.6rem', borderRadius: 20 }}>{r.location}</span>
                  </div>
                  <div style={{ ...S, fontSize: '1.1rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '0.4rem' }}>{r.title}</div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--ink-mid)', lineHeight: 1.65 }}>{r.desc}</p>
                </div>
                <a
                  href="mailto:careers@srrdlabs.com"
                  className="flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm no-underline flex-shrink-0"
                  style={{ background: 'var(--grad-btn)', color: 'white', boxShadow: '0 4px 14px rgba(10,92,138,.3)' }}
                >
                  Apply Now
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open application */}
      <section style={{ background: '#fff', padding: '6rem 2rem' }} className="px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div style={{ ...M, fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: '0.75rem' }}>Don't See Your Role?</div>
            <h2 style={{ ...S, fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>Send Us an Open Application</h2>
            <p style={{ color: 'var(--ink-mid)', lineHeight: 1.7, maxWidth: 500, margin: '0 auto' }}>
              If you are a talented scientist who believes in the SRRD philosophy, we want to hear
              from you — regardless of whether there is a specific opening right now.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-12">
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--teal-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                <svg viewBox="0 0 24 24" width="30" height="30" fill="var(--teal)"><path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <div style={{ ...S, fontSize: '1.3rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '0.5rem' }}>Application Received</div>
              <p style={{ color: 'var(--ink-mid)' }}>Thank you for your interest in SRRD Laboratories. We'll be in touch.</p>
            </div>
          ) : (
            <form className="grid grid-cols-1 md:grid-cols-2 gap-5" onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
              <div className="flex flex-col gap-2">
                <label style={{ ...M, fontSize: '0.65rem', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-mid)', fontWeight: 600 }}>Full Name *</label>
                <input type="text" required placeholder="Dr. Jane Smith" style={inputStyle} />
              </div>
              <div className="flex flex-col gap-2">
                <label style={{ ...M, fontSize: '0.65rem', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-mid)', fontWeight: 600 }}>Email Address *</label>
                <input type="email" required placeholder="jane@university.ac.in" style={inputStyle} />
              </div>
              <div className="flex flex-col gap-2">
                <label style={{ ...M, fontSize: '0.65rem', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-mid)', fontWeight: 600 }}>Area of Expertise *</label>
                <select style={{ ...inputStyle, backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236B8FA8' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '14px', paddingRight: '2.5rem', appearance: 'none', cursor: 'pointer' }}>
                  <option value="">Select your specialisation…</option>
                  <option>Synthetic / Organic Chemistry</option>
                  <option>Isotope Labelling (Radio / Stable)</option>
                  <option>Analytical Chemistry (NMR / HRMS / HPLC)</option>
                  <option>Pharmaceutical Impurity Research</option>
                  <option>Project Management / CRO Operations</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label style={{ ...M, fontSize: '0.65rem', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-mid)', fontWeight: 600 }}>LinkedIn / Portfolio URL</label>
                <input type="url" placeholder="https://linkedin.com/in/yourprofile" style={inputStyle} />
              </div>
              <div className="md:col-span-2 flex flex-col gap-2">
                <label style={{ ...M, fontSize: '0.65rem', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-mid)', fontWeight: 600 }}>Why SRRD Laboratories? *</label>
                <textarea required rows={4} placeholder="Tell us about your background, your scientific philosophy, and why you'd like to join SRRD…" style={{ ...inputStyle, resize: 'vertical' }} />
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="flex items-center gap-2 px-8 py-4 rounded-lg text-white font-bold text-sm" style={{ background: 'var(--grad-btn)', border: 'none', cursor: 'pointer', fontFamily: "Plus Jakarta Sans, sans-serif", boxShadow: '0 6px 20px rgba(10,92,138,.35)' }}>
                  Submit Application
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
