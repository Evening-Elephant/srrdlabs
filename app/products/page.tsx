'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { PRODUCTS, Product } from '@/lib/products';

/* ─── constants ─────────────────────────────── */
const S = { fontFamily: "Syne, sans-serif" } as const;
const M = { fontFamily: "JetBrains Mono, monospace" } as const;
const PER_PAGE = 12;

const CAT_GRAD: Record<string, string> = {
  Nitrosamine: 'linear-gradient(90deg,#0A5C8A,#00C4D4)',
  API:         'linear-gradient(90deg,#00869B,#0A5C8A)',
  Impurity:    'linear-gradient(90deg,#1279B0,#00869B)',
  Metabolite:  'linear-gradient(90deg,#00C4D4,#1279B0)',
  GC:          'linear-gradient(90deg,#00869B,#00C4D4)',
};

const CATEGORIES   = ['Nitrosamine', 'API', 'Impurity', 'Metabolite', 'GC'];
const PHARMACOPEIA = ['ICH', 'USP', 'EP', 'BP'];
const STOCK_OPTS   = ['In Stock', 'Limited', 'On Request'];

/* ─── stock badge ────────────────────────────── */
function stockStyle(s: string) {
  if (s === 'In Stock') return { bg: '#E7F8F0', color: '#1A7D4A', dot: '#1A7D4A' };
  if (s === 'Limited')  return { bg: '#FFF8E7', color: '#B86A00', dot: '#B86A00' };
  return                       { bg: '#FEF0F0', color: '#C0392B', dot: '#C0392B' };
}

/* ─── filter checkbox ───────────────────────── */
function FilterCheck({
  label, count, checked, onChange,
}: { label: string; count: number; checked: boolean; onChange: () => void }) {
  return (
    <label className="flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer hover:bg-[#f4f8fb] transition-colors select-none">
      <input type="checkbox" checked={checked} onChange={onChange} className="hidden" />
      <span
        className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0 transition-all"
        style={{
          border: checked ? 'none' : '1.5px solid rgba(10,92,138,0.2)',
          background: checked ? 'var(--teal)' : 'white',
        }}
      >
        {checked && (
          <svg viewBox="0 0 10 8" width="10" height="8" fill="none">
            <path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </span>
      <span className="flex-1 text-sm font-medium" style={{ color: 'var(--ink-mid)' }}>{label}</span>
      <span
        className="text-xs rounded-full px-2 py-0.5"
        style={{ ...M, background: '#f4f8fb', color: 'var(--ink-muted)' }}
      >
        {count}
      </span>
    </label>
  );
}

/* ─── product card (grid) ───────────────────── */
function ProductCard({ p }: { p: Product }) {
  const ss = stockStyle(p.stock);
  return (
    <Link
      href={`/products/${p.id}`}
      className="group flex flex-col rounded-[14px] overflow-hidden no-underline transition-all duration-250 hover:-translate-y-1"
      style={{ background: 'white', border: '1.5px solid rgba(10,92,138,0.12)', color: 'inherit' }}
    >
      <div style={{ height: 3, background: CAT_GRAD[p.cat] ?? 'var(--grad-btn)' }} />
      <div className="flex flex-col flex-1 p-6 gap-3">
        <div style={{ ...M, fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--teal)' }}>
          {p.cat} · {p.pharma}
        </div>
        <div style={{ ...S, fontSize: '1rem', fontWeight: 700, color: 'var(--ink)', lineHeight: 1.3 }}>{p.name}</div>
        <div style={{ ...M, fontSize: '0.75rem', color: 'var(--ink-muted)' }}>
          {p.formula} &nbsp;|&nbsp; CAS {p.cas}
        </div>
        <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--ink-mid)', fontSize: '0.82rem' }}>{p.desc}</p>
        <div className="flex flex-wrap gap-2">
          <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: 'var(--teal-pale)', color: 'var(--teal)' }}>
            ≥{p.purity}% Purity
          </span>
          <span className="text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1" style={{ background: ss.bg, color: ss.color }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: ss.dot, display: 'inline-block' }} />
            {p.stock}
          </span>
        </div>
      </div>
      <div
        className="flex items-center justify-between px-6 py-4"
        style={{ borderTop: '1px solid rgba(10,92,138,0.1)' }}
      >
        <span style={{ fontSize: '0.72rem', color: 'var(--ink-muted)' }}>MW: {p.mw}</span>
        <span className="flex items-center gap-1 text-sm font-bold transition-all group-hover:gap-2" style={{ color: 'var(--primary)' }}>
          View Details
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </span>
      </div>
    </Link>
  );
}

/* ─── product row (list) ────────────────────── */
function ProductRow({ p }: { p: Product }) {
  const ss = stockStyle(p.stock);
  return (
    <Link
      href={`/products/${p.id}`}
      className="flex items-center rounded-[12px] overflow-hidden no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
      style={{ background: 'white', border: '1.5px solid rgba(10,92,138,0.12)', color: 'inherit' }}
    >
      <div style={{ width: 3, alignSelf: 'stretch', background: CAT_GRAD[p.cat] ?? 'var(--grad-btn)', flexShrink: 0 }} />
      <div className="flex flex-1 items-center gap-6 px-5 py-4 flex-wrap">
        <div className="flex-1 min-w-0">
          <div style={{ ...M, fontSize: '0.58rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: '0.2rem' }}>{p.cat} · {p.pharma}</div>
          <div style={{ ...S, fontWeight: 700, fontSize: '0.95rem', color: 'var(--ink)' }}>{p.name}</div>
          <div style={{ ...M, fontSize: '0.72rem', color: 'var(--ink-muted)', marginTop: '0.15rem' }}>{p.formula} · CAS {p.cas}</div>
        </div>
        <div className="flex gap-2 flex-wrap">
          <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: 'var(--teal-pale)', color: 'var(--teal)' }}>≥{p.purity}%</span>
          <span className="text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1" style={{ background: ss.bg, color: ss.color }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: ss.dot, display: 'inline-block' }} />{p.stock}
          </span>
        </div>
        <div className="flex items-center gap-1 text-sm font-bold" style={{ color: 'var(--primary)', whiteSpace: 'nowrap' }}>
          View <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
      </div>
    </Link>
  );
}

/* ─── main page ─────────────────────────────── */
export default function ProductsPage() {
  const [query,    setQuery]    = useState('');
  const [cats,     setCats]     = useState<string[]>([]);
  const [pharmas,  setPharmas]  = useState<string[]>([]);
  const [stocks,   setStocks]   = useState<string[]>([]);
  const [minPurity,setMinPurity]= useState(95);
  const [sort,     setSort]     = useState('name');
  const [view,     setView]     = useState<'grid'|'list'>('grid');
  const [page,     setPage]     = useState(1);

  /* toggle helpers */
  const toggle = (arr: string[], val: string) =>
    arr.includes(val) ? arr.filter(x => x !== val) : [...arr, val];

  /* count helpers for sidebar */
  const countCat   = (c: string) => PRODUCTS.filter(p => p.cat    === c).length;
  const countPharma= (c: string) => PRODUCTS.filter(p => p.pharma === c).length;
  const countStock = (c: string) => PRODUCTS.filter(p => p.stock  === c).length;

  /* filtered + sorted list */
  const filtered = useMemo(() => {
    let list = PRODUCTS.filter(p => {
      const q = query.toLowerCase();
      if (q && !p.name.toLowerCase().includes(q) && !p.formula.toLowerCase().includes(q)
             && !(p.abbr?.toLowerCase().includes(q)) && !p.cas.includes(q)) return false;
      if (cats.length    && !cats.includes(p.cat))      return false;
      if (pharmas.length && !pharmas.includes(p.pharma)) return false;
      if (stocks.length  && !stocks.includes(p.stock))   return false;
      if (p.purity < minPurity) return false;
      return true;
    });
    list = [...list].sort((a, b) => {
      if (sort === 'name')      return a.name.localeCompare(b.name);
      if (sort === 'name-desc') return b.name.localeCompare(a.name);
      if (sort === 'purity')    return b.purity - a.purity;
      if (sort === 'cat')       return a.cat.localeCompare(b.cat) || a.name.localeCompare(b.name);
      return 0;
    });
    return list;
  }, [query, cats, pharmas, stocks, minPurity, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const safePage   = Math.min(page, totalPages);
  const pageItems  = filtered.slice((safePage - 1) * PER_PAGE, safePage * PER_PAGE);

  const activeTags = [
    ...cats.map(v => ({ label: v,            remove: () => { setCats(toggle(cats, v));     setPage(1); } })),
    ...pharmas.map(v => ({ label: v,          remove: () => { setPharmas(toggle(pharmas, v)); setPage(1); } })),
    ...stocks.map(v => ({ label: v,           remove: () => { setStocks(toggle(stocks, v));  setPage(1); } })),
    ...(minPurity > 95 ? [{ label: `≥${minPurity}%`, remove: () => { setMinPurity(95); setPage(1); } }] : []),
    ...(query ? [{ label: `"${query}"`,       remove: () => { setQuery('');             setPage(1); } }] : []),
  ];

  const resetAll = () => { setQuery(''); setCats([]); setPharmas([]); setStocks([]); setMinPurity(95); setPage(1); };

  const purityPct = ((minPurity - 95) / (99.9 - 95) * 100).toFixed(1);

  return (
    <>
      {/* ── HERO ── */}
      <div style={{ background: 'var(--grad-hero)', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 75% 50%,rgba(0,196,212,.18) 0%,transparent 55%)', pointerEvents: 'none' }} />
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10">
          <div>
            <div style={{ ...M, display: 'inline-block', background: 'rgba(0,196,212,.2)', border: '1px solid rgba(0,196,212,.35)', borderRadius: 100, padding: '0.3rem 1rem', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--cyan)', marginBottom: '1.25rem' }}>
              Reference Standards Catalogue
            </div>
            <h1 style={{ ...S, fontSize: 'clamp(2.2rem,3.5vw,3.5rem)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.025em', marginBottom: '0.75rem' }}>
              Pharmaceutical<br />Grade Products
            </h1>
            <p style={{ color: 'rgba(255,255,255,.7)', lineHeight: 1.7, maxWidth: 480, fontSize: '1rem' }}>
              High-purity reference standards, impurity compounds, and APIs — certified, documented, and ready for regulatory use.
            </p>
          </div>
          <div className="flex gap-4 flex-wrap">
            {[['50+', 'Compounds'], ['99%+', 'Max Purity'], ['GMP', 'Certified']].map(([n, l]) => (
              <div key={l} className="text-center rounded-xl px-8 py-5 min-w-[100px]" style={{ background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.15)' }}>
                <div style={{ ...S, fontSize: '2rem', fontWeight: 800, color: 'var(--cyan)', lineHeight: 1 }}>{n}</div>
                <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,.6)', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '0.3rem' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── LAYOUT ── */}
      <div className="max-w-7xl mx-auto flex gap-0 min-h-screen">

        {/* ── SIDEBAR ── */}
        <aside
          className="hidden lg:flex flex-col gap-0 flex-shrink-0"
          style={{ width: 280, background: 'white', borderRight: '1px solid rgba(10,92,138,.12)', padding: '2rem 1.75rem', position: 'sticky', top: 72, height: 'calc(100vh - 72px)', overflowY: 'auto' }}
        >
          {/* Search */}
          <div className="relative mb-7">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="var(--ink-muted)" strokeWidth="2">
              <circle cx="11" cy="11" r="6"/><path d="M21 21l-4.35-4.35"/>
            </svg>
            <input
              type="text"
              placeholder="Search compounds…"
              value={query}
              onChange={e => { setQuery(e.target.value); setPage(1); }}
              className="w-full pl-9 pr-4 py-3 rounded-lg text-sm outline-none"
              style={{ background: '#f4f8fb', border: '1.5px solid rgba(10,92,138,.12)', color: 'var(--ink)', fontFamily: "Plus Jakarta Sans, sans-serif" }}
            />
          </div>

          {/* Category */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <span style={{ ...M, fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-muted)' }}>Category</span>
              <button onClick={() => { setCats([]); setPage(1); }} className="text-xs font-semibold" style={{ color: 'var(--teal)', background: 'none', border: 'none', cursor: 'pointer' }}>Clear</button>
            </div>
            {CATEGORIES.map(c => (
              <FilterCheck key={c} label={c} count={countCat(c)} checked={cats.includes(c)} onChange={() => { setCats(toggle(cats, c)); setPage(1); }} />
            ))}
          </div>

          <div style={{ height: 1, background: 'var(--border)', margin: '0 0 1.5rem' }} />

          {/* Pharmacopoeia */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <span style={{ ...M, fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-muted)' }}>Pharmacopoeia</span>
              <button onClick={() => { setPharmas([]); setPage(1); }} className="text-xs font-semibold" style={{ color: 'var(--teal)', background: 'none', border: 'none', cursor: 'pointer' }}>Clear</button>
            </div>
            {PHARMACOPEIA.map(c => (
              <FilterCheck key={c} label={c} count={countPharma(c)} checked={pharmas.includes(c)} onChange={() => { setPharmas(toggle(pharmas, c)); setPage(1); }} />
            ))}
          </div>

          <div style={{ height: 1, background: 'var(--border)', margin: '0 0 1.5rem' }} />

          {/* Availability */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <span style={{ ...M, fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-muted)' }}>Availability</span>
              <button onClick={() => { setStocks([]); setPage(1); }} className="text-xs font-semibold" style={{ color: 'var(--teal)', background: 'none', border: 'none', cursor: 'pointer' }}>Clear</button>
            </div>
            {STOCK_OPTS.map(c => (
              <FilterCheck key={c} label={c} count={countStock(c)} checked={stocks.includes(c)} onChange={() => { setStocks(toggle(stocks, c)); setPage(1); }} />
            ))}
          </div>

          <div style={{ height: 1, background: 'var(--border)', margin: '0 0 1.5rem' }} />

          {/* Purity slider */}
          <div className="mb-6">
            <div style={{ ...M, fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: '0.75rem' }}>Min. Purity (%)</div>
            <div className="flex justify-between mb-2">
              <span style={{ ...M, fontSize: '0.72rem', color: 'var(--ink-mid)' }}>95%</span>
              <span style={{ ...M, fontSize: '0.72rem', color: 'var(--ink-mid)', fontWeight: 600 }}>≥ {minPurity}%</span>
            </div>
            <input
              type="range" min={95} max={99.9} step={0.5}
              value={minPurity}
              onChange={e => { setMinPurity(parseFloat(e.target.value)); setPage(1); }}
              style={{
                width: '100%', height: 4, borderRadius: 2, outline: 'none', cursor: 'pointer', appearance: 'none',
                background: `linear-gradient(to right, var(--teal) ${purityPct}%, rgba(10,92,138,.15) ${purityPct}%)`,
              }}
            />
          </div>

          <div style={{ height: 1, background: 'var(--border)', margin: '0 0 1.5rem' }} />

          <button
            onClick={resetAll}
            className="w-full py-3 rounded-lg text-sm font-semibold transition-all"
            style={{ border: '1.5px solid rgba(10,92,138,.2)', background: 'white', color: 'var(--ink-mid)', cursor: 'pointer', fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            Reset All Filters
          </button>
        </aside>

        {/* ── MAIN ── */}
        <main className="flex-1 px-4 md:px-8 py-8 min-w-0">

          {/* Mobile search */}
          <div className="lg:hidden relative mb-5">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="var(--ink-muted)" strokeWidth="2">
              <circle cx="11" cy="11" r="6"/><path d="M21 21l-4.35-4.35"/>
            </svg>
            <input
              type="text"
              placeholder="Search compounds…"
              value={query}
              onChange={e => { setQuery(e.target.value); setPage(1); }}
              className="w-full pl-9 pr-4 py-3 rounded-lg text-sm outline-none"
              style={{ background: 'white', border: '1.5px solid rgba(10,92,138,.12)', color: 'var(--ink)', fontFamily: "Plus Jakarta Sans, sans-serif" }}
            />
          </div>

          {/* Mobile category pills */}
          <div className="lg:hidden flex gap-2 flex-wrap mb-5">
            {CATEGORIES.map(c => (
              <button
                key={c}
                onClick={() => { setCats(toggle(cats, c)); setPage(1); }}
                className="text-xs font-semibold px-3 py-1.5 rounded-full transition-all"
                style={{ background: cats.includes(c) ? 'var(--teal)' : 'white', color: cats.includes(c) ? 'white' : 'var(--ink-mid)', border: '1.5px solid ' + (cats.includes(c) ? 'var(--teal)' : 'rgba(10,92,138,.15)'), cursor: 'pointer', fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-7">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium" style={{ color: 'var(--ink-muted)' }}>
                <span style={{ fontWeight: 700, color: 'var(--ink)' }}>{filtered.length}</span> products
              </span>
              {activeTags.map((t, i) => (
                <span key={i} className="flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ background: 'var(--teal-pale)', color: 'var(--teal)', border: '1px solid rgba(0,134,155,.25)' }}>
                  {t.label}
                  <button onClick={t.remove} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--teal)', fontSize: '1rem', lineHeight: 1, padding: 0 }}>×</button>
                </span>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <select
                value={sort}
                onChange={e => { setSort(e.target.value); setPage(1); }}
                className="text-sm rounded-lg px-3 py-2 outline-none"
                style={{ background: 'white', border: '1.5px solid rgba(10,92,138,.12)', color: 'var(--ink)', fontFamily: "Plus Jakarta Sans, sans-serif", backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236B8FA8' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.5rem center', backgroundSize: '14px', paddingRight: '2rem', appearance: 'none' }}
              >
                <option value="name">Name A–Z</option>
                <option value="name-desc">Name Z–A</option>
                <option value="purity">Highest Purity</option>
                <option value="cat">Category</option>
              </select>
              <div className="flex rounded-lg overflow-hidden" style={{ border: '1.5px solid rgba(10,92,138,.12)' }}>
                {(['grid','list'] as const).map(v => (
                  <button
                    key={v}
                    onClick={() => setView(v)}
                    className="p-2 transition-colors"
                    style={{ background: view === v ? 'var(--teal-pale)' : 'white', border: 'none', cursor: 'pointer', color: view === v ? 'var(--teal)' : 'var(--ink-muted)' }}
                  >
                    {v === 'grid'
                      ? <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
                      : <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><circle cx="3" cy="6" r="1" fill="currentColor"/><circle cx="3" cy="12" r="1" fill="currentColor"/><circle cx="3" cy="18" r="1" fill="currentColor"/></svg>}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Grid / List */}
          {pageItems.length === 0 ? (
            <div className="text-center py-24" style={{ color: 'var(--ink-muted)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔬</div>
              <h3 style={{ ...S, fontSize: '1.25rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '0.5rem' }}>No compounds found</h3>
              <p className="text-sm">Try adjusting your search or filters.</p>
              <button onClick={resetAll} className="mt-5 px-6 py-2 rounded-lg text-sm font-bold text-white" style={{ background: 'var(--grad-btn)', border: 'none', cursor: 'pointer', fontFamily: "Plus Jakarta Sans, sans-serif" }}>Reset filters</button>
            </div>
          ) : view === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {pageItems.map(p => <ProductCard key={p.id} p={p} />)}
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {pageItems.map(p => <ProductRow key={p.id} p={p} />)}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 pt-10">
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={safePage === 1}
                className="w-9 h-9 flex items-center justify-center rounded-lg transition-all disabled:opacity-30"
                style={{ border: '1.5px solid rgba(10,92,138,.12)', background: 'white', cursor: safePage === 1 ? 'not-allowed' : 'pointer', color: 'var(--ink-mid)' }}
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).filter(n => n === 1 || n === totalPages || Math.abs(n - safePage) <= 1).map((n, idx, arr) => (
                <>
                  {idx > 0 && arr[idx - 1] !== n - 1 && <span key={`e${n}`} className="text-sm" style={{ color: 'var(--ink-muted)' }}>…</span>}
                  <button
                    key={n}
                    onClick={() => setPage(n)}
                    className="w-9 h-9 flex items-center justify-center rounded-lg text-sm font-semibold transition-all"
                    style={{ border: n === safePage ? 'none' : '1.5px solid rgba(10,92,138,.12)', background: n === safePage ? 'var(--grad-btn)' : 'white', color: n === safePage ? 'white' : 'var(--ink-mid)', cursor: 'pointer' }}
                  >
                    {n}
                  </button>
                </>
              ))}
              <button
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={safePage === totalPages}
                className="w-9 h-9 flex items-center justify-center rounded-lg transition-all disabled:opacity-30"
                style={{ border: '1.5px solid rgba(10,92,138,.12)', background: 'white', cursor: safePage === totalPages ? 'not-allowed' : 'pointer', color: 'var(--ink-mid)' }}
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            </div>
          )}
        </main>
      </div>

      <style>{`
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none; width: 16px; height: 16px; border-radius: 50%;
          background: var(--teal); border: 2px solid white;
          box-shadow: 0 1px 4px rgba(0,134,155,.4); cursor: pointer;
        }
      `}</style>
    </>
  );
}
