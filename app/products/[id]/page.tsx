'use client';

import { useState } from 'react';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { getProductById, getRelatedProducts, PRODUCTS } from '@/lib/products';

const S = { fontFamily: "Syne, sans-serif" } as const;
const M = { fontFamily: "JetBrains Mono, monospace" } as const;

/* ── stock badge helper ─────────────────────── */
function stockStyle(s: string) {
  if (s === 'In Stock') return { bg: '#E7F8F0', color: '#1A7D4A', dot: '#1A7D4A', cls: 'badge-stock-in' };
  if (s === 'Limited')  return { bg: '#FFF8E7', color: '#B86A00', dot: '#B86A00', cls: '' };
  return                       { bg: '#FEF0F0', color: '#C0392B', dot: '#C0392B', cls: '' };
}

/* ── spec row ───────────────────────────────── */
function SpecRow({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <tr style={{ borderBottom: '1px solid rgba(10,92,138,.08)' }} className="hover:bg-[#f4f8fb] transition-colors">
      <td style={{ padding: '0.9rem 1.25rem', fontWeight: 600, color: 'var(--ink)', fontSize: '0.875rem', width: 200 }}>{label}</td>
      <td style={{ padding: '0.9rem 1.25rem', color: highlight ? 'var(--teal)' : 'var(--ink-mid)', fontSize: '0.875rem', fontWeight: highlight ? 700 : 400, ...M }}>{value}</td>
    </tr>
  );
}

/* ── pack size button ───────────────────────── */
function PackBtn({ size, selected, onClick }: { size: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="text-xs font-semibold px-3 py-2 rounded-full transition-all"
      style={{
        border: selected ? '1.5px solid var(--teal)' : '1.5px solid rgba(10,92,138,.2)',
        background: selected ? 'var(--teal-pale)' : 'white',
        color: selected ? 'var(--teal)' : 'var(--ink-mid)',
        cursor: 'pointer', fontFamily: "Plus Jakarta Sans, sans-serif"
      }}
    >
      {size}
    </button>
  );
}

/* ── animated molecule SVG ──────────────────── */
function MoleculeSVG({ formula }: { formula: string }) {
  return (
    <div className="relative rounded-2xl overflow-hidden flex items-center justify-center aspect-video"
      style={{ background: 'linear-gradient(135deg,#0A5C8A,#00869B)' }}>
      <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 30% 40%,rgba(0,196,212,.2) 0%,transparent 55%)', pointerEvents:'none' }} />
      <svg viewBox="0 0 340 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ maxHeight: 320 }}>
        <g style={{ transformOrigin: '170px 130px', animation: 'spin-mol-a 18s linear infinite' }}>
          <circle cx="170" cy="20" r="5" fill="rgba(0,196,212,0.5)"/>
          <circle cx="280" cy="130" r="4" fill="rgba(255,255,255,0.3)"/>
          <circle cx="170" cy="240" r="5" fill="rgba(0,196,212,0.4)"/>
          <circle cx="60" cy="130" r="4" fill="rgba(255,255,255,0.25)"/>
          <circle cx="170" cy="130" r="110" fill="none" stroke="rgba(255,255,255,.1)" strokeWidth="1" strokeDasharray="6 5"/>
        </g>
        <g style={{ transformOrigin: '170px 130px', animation: 'spin-mol-b 26s linear infinite reverse' }}>
          <circle cx="170" cy="60" r="4" fill="rgba(0,196,212,0.6)"/>
          <circle cx="240" cy="130" r="3" fill="rgba(255,255,255,0.2)"/>
          <circle cx="100" cy="130" r="4" fill="rgba(0,196,212,0.4)"/>
          <circle cx="170" cy="130" r="70" fill="none" stroke="rgba(0,196,212,.2)" strokeWidth="1"/>
        </g>
        {/* Hexagon ring */}
        <polygon points="170,80 215,105 215,155 170,180 125,155 125,105" fill="none" stroke="rgba(255,255,255,.35)" strokeWidth="2"/>
        <line x1="170" y1="80" x2="170" y2="180" stroke="rgba(255,255,255,.08)" strokeWidth="1"/>
        <line x1="125" y1="105" x2="215" y2="155" stroke="rgba(255,255,255,.08)" strokeWidth="1"/>
        <line x1="215" y1="105" x2="125" y2="155" stroke="rgba(255,255,255,.08)" strokeWidth="1"/>
        {/* Nodes */}
        <circle cx="170" cy="80" r="8" fill="#00C4D4" opacity="0.95"/>
        <circle cx="215" cy="105" r="7" fill="rgba(255,255,255,.7)"/>
        <circle cx="215" cy="155" r="8" fill="#00C4D4" opacity="0.85"/>
        <circle cx="170" cy="180" r="7" fill="rgba(255,255,255,.65)"/>
        <circle cx="125" cy="155" r="8" fill="#00C4D4" opacity="0.85"/>
        <circle cx="125" cy="105" r="7" fill="rgba(255,255,255,.65)"/>
        {/* Center */}
        <circle cx="170" cy="130" r="22" fill="rgba(0,196,212,.12)"/>
        <circle cx="170" cy="130" r="10" fill="white" opacity="0.8"/>
        {/* Atom labels */}
        {[['170','68','N'],['228','103','O'],['228','160','C'],['170','195','N'],['112','160','C'],['112','103','O']].map(([x,y,t]) => (
          <text key={t+x} x={x} y={y} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill="white" opacity="0.8">{t}</text>
        ))}
        {/* Formula watermark */}
        <text x="170" y="242" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill="rgba(255,255,255,.3)" letterSpacing="2">{formula}</text>
      </svg>
      <style>{`
        @keyframes spin-mol-a { from{transform:rotate(0deg)}to{transform:rotate(360deg)} }
        @keyframes spin-mol-b { from{transform:rotate(360deg)}to{transform:rotate(0deg)} }
      `}</style>
    </div>
  );
}

/* ── PAGE ───────────────────────────────────── */
export default function ProductPage() {
  const params  = useParams<{ id: string }>();
  const product = getProductById(params.id);
  if (!product) notFound();

  const related  = getRelatedProducts(product);
  const ss       = stockStyle(product.stock);

  const [tab,       setTab]       = useState('specifications');
  const [pack,      setPack]      = useState('10 mg');
  const [submitted, setSubmitted] = useState(false);

  const PACK_SIZES = ['1 mg','5 mg','10 mg','25 mg','50 mg','100 mg','250 mg','500 mg','1 g','5 g'];
  const TABS = [
    { id: 'specifications', label: 'Specifications' },
    { id: 'analysis',       label: 'Analytical Testing' },
    { id: 'safety',         label: 'Safety & Handling' },
    { id: 'regulatory',     label: 'Regulatory Info' },
    { id: 'enquiry',        label: 'Request Quote' },
  ];

  return (
    <>
      {/* ── BREADCRUMB ── */}
      <div style={{ background: 'white', borderBottom: '1px solid rgba(10,92,138,.1)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex items-center gap-2 text-sm" style={{ color: 'var(--ink-muted)' }}>
          <Link href="/" style={{ color: 'var(--ink-muted)', textDecoration: 'none' }}>Home</Link>
          <span style={{ color: 'rgba(10,92,138,.25)' }}>›</span>
          <Link href="/products" style={{ color: 'var(--ink-muted)', textDecoration: 'none' }}>Products</Link>
          <span style={{ color: 'rgba(10,92,138,.25)' }}>›</span>
          <span style={{ color: 'var(--ink)', fontWeight: 500 }}>{product.abbr ?? product.name.split(' ').slice(0,3).join(' ')}</span>
        </div>
      </div>

      {/* ── PRODUCT HERO ── */}
      <div style={{ background: 'white', borderBottom: '1px solid rgba(10,92,138,.1)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-0">

          {/* Left: info */}
          <div className="py-12 lg:pr-12" style={{ borderRight: '1px solid rgba(10,92,138,.1)' }}>
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-5">
              {[
                { label: product.cat,    bg: 'var(--teal-pale)', color: 'var(--teal)' },
                { label: product.pharma, bg: '#f4f8fb', color: 'var(--ink-mid)' },
                { label: `≥${product.purity}% Purity`, bg: '#E7F8F0', color: '#1A7D4A' },
              ].map(b => (
                <span key={b.label} style={{ ...M, fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.25rem 0.75rem', borderRadius: 20, background: b.bg, color: b.color }}>{b.label}</span>
              ))}
              <span className="flex items-center gap-1" style={{ ...M, fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.25rem 0.75rem', borderRadius: 20, background: ss.bg, color: ss.color }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: ss.dot, display: 'inline-block' }} />
                {product.stock}
              </span>
            </div>

            {/* Name */}
            <h1 style={{ ...S, fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 800, color: 'var(--ink)', lineHeight: 1.1, letterSpacing: '-0.025em', marginBottom: '0.5rem' }}>{product.name}</h1>
            {product.abbr && <div style={{ ...M, fontSize: '0.9rem', color: 'var(--teal)', marginBottom: '1.25rem' }}>Abbreviation: {product.abbr}</div>}

            <p style={{ color: 'var(--ink-mid)', lineHeight: 1.75, fontSize: '1rem', maxWidth: 560, marginBottom: '2rem' }}>{product.desc}</p>

            {/* Quick spec grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-px rounded-xl overflow-hidden mb-8" style={{ background: 'rgba(10,92,138,.1)', border: '1px solid rgba(10,92,138,.1)' }}>
              {[
                ['CAS Number', product.cas],
                ['Molecular Formula', product.formula],
                ['Molecular Weight', product.mw + ' g/mol'],
                ['Purity (HPLC)', `≥${product.purity}%`, true],
                ['Category', product.cat],
                ['Pharmacopoeia', product.pharma],
              ].map(([lbl, val, hi]) => (
                <div key={String(lbl)} style={{ background: '#f4f8fb', padding: '1rem 1.25rem' }}>
                  <div style={{ ...M, fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: '0.3rem' }}>{lbl}</div>
                  <div style={{ ...M, fontSize: '0.88rem', fontWeight: hi ? 700 : 500, color: hi ? 'var(--teal)' : 'var(--ink)' }}>{val}</div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              <button onClick={() => setTab('enquiry')} className="flex items-center gap-2 px-6 py-3 rounded-lg text-white font-bold text-sm" style={{ background: 'var(--grad-btn)', boxShadow: '0 6px 20px rgba(10,92,138,.35)', border: 'none', cursor: 'pointer', fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5"/></svg>
                Request a Quote
              </button>
              <button onClick={() => alert('SDS download would be provided here. Contact info@srrdlabs.com')} className="flex items-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm" style={{ border: '1.5px solid rgba(10,92,138,.2)', background: 'white', color: 'var(--primary)', cursor: 'pointer', fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                Download SDS
              </button>
              <button onClick={() => alert('CoA download would be provided here. Contact info@srrdlabs.com')} className="flex items-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm" style={{ border: '1.5px solid rgba(10,92,138,.2)', background: 'white', color: 'var(--primary)', cursor: 'pointer', fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 2v6h6M9 13h6M9 17h4"/></svg>
                Download CoA
              </button>
            </div>
          </div>

          {/* Right: molecule + CoA card */}
          <div className="py-12 pl-0 lg:pl-10 flex flex-col gap-5">
            <MoleculeSVG formula={product.formula} />

            {/* CoA card */}
            <div style={{ background: 'white', border: '1.5px solid rgba(10,92,138,.12)', borderRadius: 14, overflow: 'hidden' }}>
              <div className="flex items-center justify-between px-5 py-4" style={{ background: 'linear-gradient(90deg,rgba(0,134,155,.08),rgba(10,92,138,.05))', borderBottom: '1px solid rgba(10,92,138,.1)' }}>
                <span style={{ ...S, fontSize: '0.82rem', fontWeight: 700, color: 'var(--ink)' }}>Certificate of Analysis</span>
                <span style={{ ...M, fontSize: '0.6rem', letterSpacing: '0.1em', background: 'var(--teal-pale)', color: 'var(--teal)', padding: '0.2rem 0.6rem', borderRadius: 10 }}>GMP Certified</span>
              </div>
              {[
                ['Product',         product.abbr ?? product.name.split(' ').slice(0,2).join(' ')],
                ['CAS',             product.cas],
                ['Formula',         product.formula],
                ['HPLC Purity',     `≥${product.purity}% ✓`, true],
                ['Water (KF)',       '≤0.5% ✓', true],
                ['Heavy Metals',    '≤10 ppm ✓', true],
                ['Appearance',      'Conforms ✓', true],
                ['Storage',         product.storage],
              ].map(([k, v, pass]) => (
                <div key={String(k)} className="flex items-center justify-between px-5 py-3" style={{ borderBottom: '1px solid rgba(10,92,138,.07)' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--ink-muted)', fontWeight: 500 }}>{k}</span>
                  <span style={{ ...M, fontSize: '0.8rem', color: pass ? '#1A7D4A' : 'var(--ink)', fontWeight: pass ? 700 : 500 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── TABS ── */}
      <div style={{ background: 'white', borderBottom: '1px solid rgba(10,92,138,.1)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          {/* Tab bar */}
          <div className="flex overflow-x-auto gap-0" style={{ borderBottom: '1px solid rgba(10,92,138,.1)' }}>
            {TABS.map(t => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className="px-5 py-4 text-sm font-semibold whitespace-nowrap transition-all"
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  borderBottom: tab === t.id ? '2px solid var(--primary)' : '2px solid transparent',
                  color: tab === t.id ? 'var(--primary)' : 'var(--ink-muted)',
                  marginBottom: -1,
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                }}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="py-10">

            {/* ── SPECIFICATIONS ── */}
            {tab === 'specifications' && (
              <div className="overflow-x-auto">
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: '#f4f8fb', borderBottom: '1px solid rgba(10,92,138,.1)' }}>
                      <th style={{ ...M, fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-muted)', padding: '0.75rem 1.25rem', textAlign: 'left', fontWeight: 500 }}>Parameter</th>
                      <th style={{ ...M, fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-muted)', padding: '0.75rem 1.25rem', textAlign: 'left', fontWeight: 500 }}>Specification</th>
                    </tr>
                  </thead>
                  <tbody>
                    <SpecRow label="Product Name"       value={product.name} />
                    {product.abbr && <SpecRow label="Abbreviation" value={product.abbr} />}
                    <SpecRow label="CAS Number"         value={product.cas} />
                    <SpecRow label="Molecular Formula"  value={product.formula} />
                    <SpecRow label="Molecular Weight"   value={product.mw + ' g/mol'} />
                    <SpecRow label="Category"           value={product.cat} />
                    <SpecRow label="Pharmacopoeia"      value={product.pharma} />
                    <SpecRow label="Purity (HPLC)"      value={`≥${product.purity}%`} highlight />
                    <SpecRow label="Appearance"         value={product.appearance} />
                    <SpecRow label="Melting Point"      value={product.mp} />
                    <SpecRow label="Boiling Point"      value={product.bp} />
                    <SpecRow label="Density"            value={product.density} />
                    <SpecRow label="Solubility"         value={product.solubility} />
                    <SpecRow label="Storage"            value={product.storage} />
                    <SpecRow label="Availability"       value={product.stock} />
                    <SpecRow label="GMP Certified"      value="Yes" />
                    <SpecRow label="CoA Provided"       value="Yes — with every shipment" />
                    <SpecRow label="SDS Available"      value="Yes" />
                  </tbody>
                </table>
              </div>
            )}

            {/* ── ANALYSIS ── */}
            {tab === 'analysis' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  ['🔬 Identification', ['¹H-NMR and ¹³C-NMR spectroscopy','High-resolution Mass Spectrometry (HRMS)','Infrared (IR) spectroscopy','Melting point (where applicable)']],
                  ['📊 Purity Determination', ['HPLC (reversed-phase with UV/DAD detection)','GC-FID or GC-MS (for volatile compounds)','LC-MS/MS for trace-level nitrosamines','Results reported on as-is and dry basis']],
                  ['💧 Water & Residual Solvents', ['Karl Fischer Titration for water content','Headspace GC for residual solvents (ICH Q3C)','Reported as weight % in the CoA','Acceptance criteria per applicable pharmacopoeia']],
                  ['⚗️ Heavy Metals (ICH Q3D)', ['ICP-MS for elemental impurity quantification','Testing for Pb, Cd, Hg, As (Class 1)','Co, Ni, V (Class 2A) when applicable','All results well below ICH PDE limits']],
                ].map(([title, items]) => (
                  <div key={String(title)} style={{ background: '#f4f8fb', border: '1px solid rgba(10,92,138,.1)', borderRadius: 12, padding: '1.5rem' }}>
                    <div style={{ ...S, fontWeight: 700, fontSize: '0.95rem', color: 'var(--ink)', marginBottom: '0.75rem' }}>{title}</div>
                    <ul style={{ paddingLeft: '1.2rem', fontSize: '0.85rem', color: 'var(--ink-mid)', lineHeight: 1.7 }}>
                      {(items as string[]).map(item => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* ── SAFETY ── */}
            {tab === 'safety' && (
              <div>
                <p style={{ color: 'var(--ink-mid)', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: 680, marginBottom: '1.5rem' }}>
                  SRRD Laboratories provides comprehensive Safety Data Sheets (SDS) for all compounds in compliance with GHS/OSHA requirements. Review the SDS before handling any compound.
                </p>
                <button onClick={() => alert('SDS download – contact info@srrdlabs.com')} className="flex items-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm mb-8" style={{ border: '1.5px solid rgba(10,92,138,.2)', background: 'white', color: 'var(--primary)', cursor: 'pointer', fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                  Download Full SDS (PDF)
                </button>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    ['GHS Classification', product.ghs, 'M20 6h-2.18c.07-.44.18-.86.18-1.3C18 2.12 15.88 0 13.3 0c-1.3 0-2.46.52-3.34 1.36L10 1.32C9.14.5 7.97 0 6.7 0 4.12 0 2 2.12 2 4.7c0 .44.11.86.18 1.3H0v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6zm-6.7-4c1.46 0 2.7 1.24 2.7 2.7 0 .44-.11.86-.28 1.3H11.28A3.27 3.27 0 0 1 11 4.7C11 3.24 12.24 2 13.7 2z'],
                    ['Hazard Statements', product.hazard, 'M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01'],
                    ['Storage Conditions', product.storage, 'M3 3h18v18H3zM8 12h8M12 8v8'],
                    ['PPE Required', 'Lab coat, gloves, eye protection, fume hood', 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622C17.176 19.29 21 14.591 21 9c0-1.051-.143-2.072-.408-3.016z'],
                    ['Waste Disposal', 'Dispose as hazardous waste per local regulations. Do not drain.', 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4'],
                    ['First Aid', 'Refer to Section 4 of the SDS for complete first aid measures.', 'M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z'],
                  ].map(([title, val, d]) => (
                    <div key={String(title)} className="flex gap-3 items-start p-4 rounded-xl" style={{ background: '#f4f8fb', border: '1px solid rgba(10,92,138,.1)' }}>
                      <div style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--teal-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="var(--teal)"><path d={d}/></svg>
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--ink)', marginBottom: '0.2rem' }}>{title}</div>
                        <div style={{ ...M, fontSize: '0.78rem', color: 'var(--ink-mid)', lineHeight: 1.5 }}>{val}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── REGULATORY ── */}
            {tab === 'regulatory' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                <div>
                  <h3 style={{ ...S, fontSize: '1.1rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '1rem' }}>Pharmacopoeial Status</h3>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                    <tbody>
                      {[
                        ['Reference Standard', product.pharma],
                        ['ICH Guideline',       'ICH M7 (Mutagenic Impurities)'],
                        ['ICH Q3C',             'Residual Solvents (where applicable)'],
                        ['GMP Compliance',      'Yes — GMP certified facility'],
                        ['DMF Support',         'CoA and documentation package available'],
                      ].map(([k, v]) => (
                        <tr key={String(k)} className="hover:bg-[#f4f8fb]" style={{ borderBottom: '1px solid rgba(10,92,138,.08)' }}>
                          <td style={{ padding: '0.9rem 1rem', fontWeight: 600, color: 'var(--ink)', width: '50%' }}>{k}</td>
                          <td style={{ padding: '0.9rem 1rem', color: 'var(--ink-mid)' }}>{v}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div>
                  <h3 style={{ ...S, fontSize: '1.1rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '1rem' }}>Regulatory Uses</h3>
                  <div className="flex flex-col gap-3">
                    {[
                      ['NDA / ANDA Submissions', 'Used as reference standard for API impurity specification and characterization data.'],
                      ['Method Validation (ICH Q2)', 'Suitable for HPLC/GC method validation — accuracy, precision, LOD, and LOQ studies.'],
                      ['Stability Studies (ICH Q1)', 'Impurity standards for monitoring degradation pathways in stability programs.'],
                    ].map(([t, d]) => (
                      <div key={String(t)} style={{ background: '#f4f8fb', border: '1px solid rgba(10,92,138,.1)', borderRadius: 8, padding: '1rem' }}>
                        <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--ink)', marginBottom: '0.3rem' }}>{t}</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--ink-mid)', lineHeight: 1.6 }}>{d}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ── ENQUIRY ── */}
            {tab === 'enquiry' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl">
                <div>
                  <h3 style={{ ...S, fontSize: '1.3rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '0.75rem' }}>Request a Quote</h3>
                  <p style={{ color: 'var(--ink-mid)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                    Select your required pack size and fill in your details. Our team will respond with pricing and availability within one business day.
                  </p>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--ink-mid)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.75rem' }}>Select Pack Size</div>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {PACK_SIZES.map(s => <PackBtn key={s} size={s} selected={pack === s} onClick={() => setPack(s)} />)}
                  </div>
                  <div style={{ background: 'var(--teal-pale)', border: '1px solid rgba(0,134,155,.2)', borderRadius: 10, padding: '1.25rem' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--teal)', marginBottom: '0.3rem' }}>Custom quantities available</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--ink-mid)', lineHeight: 1.6 }}>Need a non-standard pack size or bulk quantity? We accommodate custom synthesis from mg to kg scale.</div>
                  </div>
                </div>

                <div>
                  {submitted ? (
                    <div className="text-center py-10">
                      <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'var(--teal-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                        <svg viewBox="0 0 24 24" width="28" height="28" fill="var(--teal)"><path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                      </div>
                      <div style={{ ...S, fontSize: '1.3rem', fontWeight: 700, color: 'var(--teal)', marginBottom: '0.4rem' }}>Enquiry Submitted!</div>
                      <p style={{ color: 'var(--ink-mid)', fontSize: '0.875rem' }}>We'll be in touch within one business day.</p>
                      <button onClick={() => setSubmitted(false)} className="mt-5 px-6 py-2 rounded-lg text-white font-bold text-sm" style={{ background: 'var(--grad-btn)', border: 'none', cursor: 'pointer', fontFamily: "Plus Jakarta Sans, sans-serif" }}>Submit Another</button>
                    </div>
                  ) : (
                    <form className="flex flex-col gap-4" onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
                      {[
                        ['text','First Name','John',true],['text','Last Name','Smith',true],
                        ['text','Company / Institution','Pharma Co. Ltd.',true],
                        ['email','Email Address','john@company.com',true],
                      ].map(([type, label, placeholder, required]) => (
                        <div key={String(label)} className="flex flex-col gap-1.5">
                          <label style={{ ...M, fontSize: '0.65rem', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-mid)', fontWeight: 600 }}>{label}</label>
                          <input type={String(type)} placeholder={String(placeholder)} required={!!required} className="w-full px-4 py-3 rounded-lg text-sm outline-none" style={{ background: '#f4f8fb', border: '1.5px solid rgba(10,92,138,.12)', color: 'var(--ink)', fontFamily: "Plus Jakarta Sans, sans-serif" }} />
                        </div>
                      ))}
                      <div className="flex flex-col gap-1.5">
                        <label style={{ ...M, fontSize: '0.65rem', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-mid)', fontWeight: 600 }}>Message / Requirements</label>
                        <textarea rows={4} placeholder={`I am interested in ${product.name}${product.abbr ? ` (${product.abbr})` : ''}, CAS ${product.cas}.\n\nRequired quantity: ${pack}\nIntended use:\nSpecial requirements:`}
                          className="w-full px-4 py-3 rounded-lg text-sm outline-none resize-y"
                          style={{ background: '#f4f8fb', border: '1.5px solid rgba(10,92,138,.12)', color: 'var(--ink)', fontFamily: "Plus Jakarta Sans, sans-serif" }} />
                      </div>
                      <button type="submit" className="flex items-center gap-2 px-6 py-3 rounded-lg text-white font-bold text-sm self-start" style={{ background: 'var(--grad-btn)', border: 'none', cursor: 'pointer', fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        Submit Enquiry
                      </button>
                    </form>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── RELATED PRODUCTS ── */}
      {related.length > 0 && (
        <section style={{ background: '#f4f8fb', padding: '5rem 2rem' }} className="px-6 md:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 style={{ ...S, fontSize: '1.6rem', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.02em' }}>Related Products</h2>
              <Link href="/products" className="flex items-center gap-1 text-sm font-semibold no-underline" style={{ color: 'var(--primary)' }}>
                View All <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map(r => {
                const rss = stockStyle(r.stock);
                return (
                  <Link key={r.id} href={`/products/${r.id}`} className="flex flex-col rounded-[12px] overflow-hidden no-underline transition-all hover:-translate-y-1" style={{ background: 'white', border: '1.5px solid rgba(10,92,138,.12)', color: 'inherit' }}>
                    <div style={{ height: 3, background: 'var(--grad-btn)' }} />
                    <div className="flex-1 p-5">
                      <div style={{ ...M, fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: '0.4rem' }}>{r.cat} · {r.pharma}</div>
                      <div style={{ ...S, fontWeight: 700, fontSize: '0.95rem', color: 'var(--ink)', marginBottom: '0.3rem' }}>{r.name}</div>
                      <div style={{ ...M, fontSize: '0.72rem', color: 'var(--ink-muted)' }}>{r.formula} · CAS {r.cas}</div>
                    </div>
                    <div className="flex items-center justify-between px-5 py-3" style={{ borderTop: '1px solid rgba(10,92,138,.08)' }}>
                      <span style={{ fontSize: '0.7rem', fontWeight: 600, background: 'var(--teal-pale)', color: 'var(--teal)', padding: '0.15rem 0.6rem', borderRadius: 20 }}>≥{r.purity}%</span>
                      <span className="flex items-center gap-1 text-xs font-bold" style={{ color: 'var(--primary)' }}>
                        View <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
