

// 'use client';

// import { useState, useMemo, useEffect } from 'react';
// import Link from 'next/link';
// import { PRODUCTS, Product } from '@/lib/products';

// /* ─── constants ─────────────────────────────── */
// const S = { fontFamily: 'Syne, sans-serif' } as const;
// const M = { fontFamily: 'JetBrains Mono, monospace' } as const;

// const PER_PAGE = 12;

// const CAT_GRAD: Record<string, string> = {
//   Nitrosamine: 'linear-gradient(90deg,#0A5C8A,#00C4D4)',
//   'APIs Impurities': 'linear-gradient(90deg,#00869B,#0A5C8A)',
//   Impurity: 'linear-gradient(90deg,#1279B0,#00869B)',
//   Metabolite: 'linear-gradient(90deg,#00C4D4,#1279B0)',
//   'Isotope labelled compounds':
//     'linear-gradient(90deg,#00869B,#00C4D4)',
// };

// const CATEGORIES = [
//   'Nitrosamine',
//   'APIs Impurities',
//   'Impurity',
//   'Metabolite',
//   'Isotope labelled compounds',
// ];

// const PHARMACOPEIA = ['USP', 'EP'];

// const STOCK_OPTS = ['In Stock', 'Limited', 'On Request'];

// const ALPHABETS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

// /* ─── stock badge ───────────────────────────── */
// function stockStyle(s: string) {
//   if (s === 'In Stock')
//     return { bg: '#E7F8F0', color: '#1A7D4A', dot: '#1A7D4A' };

//   if (s === 'Limited')
//     return { bg: '#FFF8E7', color: '#B86A00', dot: '#B86A00' };

//   return { bg: '#FEF0F0', color: '#C0392B', dot: '#C0392B' };
// }

// /* ─── filter checkbox ───────────────────────── */
// function FilterCheck({
//   label,
//   count,
//   checked,
//   onChange,
// }: {
//   label: string;
//   count: number;
//   checked: boolean;
//   onChange: () => void;
// }) {
//   return (
//     <label className="flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer hover:bg-[#f4f8fb] transition-colors select-none">
//       <input
//         type="checkbox"
//         checked={checked}
//         onChange={onChange}
//         className="hidden"
//       />

//       <span
//         className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0 transition-all"
//         style={{
//           border: checked
//             ? 'none'
//             : '1.5px solid rgba(10,92,138,0.2)',
//           background: checked ? 'var(--teal)' : 'white',
//         }}
//       >
//         {checked && (
//           <svg viewBox="0 0 10 8" width="10" height="8" fill="none">
//             <path
//               d="M1 4l3 3 5-6"
//               stroke="white"
//               strokeWidth="1.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         )}
//       </span>

//       <span
//         className="flex-1 text-sm font-medium"
//         style={{ color: 'var(--ink-mid)' }}
//       >
//         {label}
//       </span>

//       <span
//         className="text-xs rounded-full px-2 py-0.5"
//         style={{
//           ...M,
//           background: '#f4f8fb',
//           color: 'var(--ink-muted)',
//         }}
//       >
//         {count}
//       </span>
//     </label>
//   );
// }

// /* ─── product card ──────────────────────────── */
// function ProductCard({ p }: { p: Product }) {
//   const ss = stockStyle(p.stock);

//   return (
//     <Link
//       href={`/products/${p.id}`}
//       className="group flex flex-col rounded-[14px] overflow-hidden no-underline transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
//       style={{
//         background: 'white',
//         border: '1.5px solid rgba(10,92,138,0.12)',
//         color: 'inherit',
//       }}
//     >
//       <div
//         style={{
//           height: 3,
//           background: CAT_GRAD[p.cat] ?? 'var(--grad-btn)',
//         }}
//       />

//       <div className="flex flex-col flex-1 p-6 gap-3">
//         <div
//           style={{
//             ...M,
//             fontSize: '0.6rem',
//             letterSpacing: '0.12em',
//             textTransform: 'uppercase',
//             color: 'var(--teal)',
//           }}
//         >
//           {p.cat} · {p.pharma}
//         </div>

//         <div
//           style={{
//             ...S,
//             fontSize: '1rem',
//             fontWeight: 700,
//             color: 'var(--ink)',
//             lineHeight: 1.3,
//           }}
//         >
//           {p.name}
//         </div>

//         <div
//           style={{
//             ...M,
//             fontSize: '0.75rem',
//             color: 'var(--ink-muted)',
//           }}
//         >
//           {p.formula} &nbsp;|&nbsp; CAS {p.cas}
//         </div>

//         <p
//           className="text-sm leading-relaxed flex-1"
//           style={{
//             color: 'var(--ink-mid)',
//             fontSize: '0.82rem',
//           }}
//         >
//           {p.desc}
//         </p>

//         <div className="flex flex-wrap gap-2">
          
//           <span
//             className="text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1"
//             style={{
//               background: ss.bg,
//               color: ss.color,
//             }}
//           >
//             <span
//               style={{
//                 width: 5,
//                 height: 5,
//                 borderRadius: '50%',
//                 background: ss.dot,
//                 display: 'inline-block',
//               }}
//             />

//             {p.stock}
//           </span>
//         </div>
//       </div>

//       <div
//         className="flex items-center justify-between px-6 py-4"
//         style={{
//           borderTop: '1px solid rgba(10,92,138,0.1)',
//         }}
//       >
//         <span
//           style={{
//             fontSize: '0.72rem',
//             color: 'var(--ink-muted)',
//           }}
//         >
//           MW: {p.mw}
//         </span>

//         <span
//           className="flex items-center gap-1 text-sm font-bold transition-all group-hover:gap-2"
//           style={{ color: 'var(--primary)' }}
//         >
//           View Details

//           <svg
//             viewBox="0 0 24 24"
//             width="13"
//             height="13"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2.5"
//           >
//             <path d="M5 12h14M12 5l7 7-7 7" />
//           </svg>
//         </span>
//       </div>
//     </Link>
//   );
// }

// /* ─── main page ─────────────────────────────── */
// export default function ProductsPage() {
//   const [query, setQuery] = useState('');
//   const [alphabet, setAlphabet] = useState('');
//   const [cats, setCats] = useState<string[]>([]);
//   const [pharmas, setPharmas] = useState<string[]>([]);
//   const [stocks, setStocks] = useState<string[]>([]);
//   const [sort, setSort] = useState('name');
//   const [page, setPage] = useState(1);

//   /* ─── helpers ─────────────────────────────── */
//   const toggle = (arr: string[], val: string) =>
//     arr.includes(val)
//       ? arr.filter((x) => x !== val)
//       : [...arr, val];

//   const countCat = (c: string) =>
//     PRODUCTS.filter((p) => p.cat === c).length;

//   const countPharma = (c: string) =>
//     PRODUCTS.filter((p) => p.pharma === c).length;

//   const countStock = (c: string) =>
//     PRODUCTS.filter((p) => p.stock === c).length;

//   /* ─── filtered list ───────────────────────── */
//   const filtered = useMemo(() => {
//     let list = PRODUCTS.filter((p) => {
//       const q = query.toLowerCase();

//       /* search */
//       if (
//         q &&
//         !p.name.toLowerCase().includes(q) &&
//         !p.formula.toLowerCase().includes(q) &&
//         !p.cas.toLowerCase().includes(q) &&
//         !(p.abbr?.toLowerCase().includes(q))
//       ) {
//         return false;
//       }

//       /* alphabet */
//       if (
//         alphabet &&
//         !p.name.toUpperCase().startsWith(alphabet)
//       ) {
//         return false;
//       }

//       /* category */
//       if (cats.length && !cats.includes(p.cat)) {
//         return false;
//       }

//       /* pharmacopoeia */
//       if (
//         pharmas.length &&
//         !pharmas.includes(p.pharma)
//       ) {
//         return false;
//       }

//       /* stock */
//       if (
//         stocks.length &&
//         !stocks.includes(p.stock)
//       ) {
//         return false;
//       }

//       return true;
//     });

//     list = [...list].sort((a, b) => {
//       if (sort === 'name')
//         return a.name.localeCompare(b.name);

//       if (sort === 'name-desc')
//         return b.name.localeCompare(a.name);

     

//       if (sort === 'cat')
//         return (
//           a.cat.localeCompare(b.cat) ||
//           a.name.localeCompare(b.name)
//         );

//       return 0;
//     });

//     return list;
//   }, [query, alphabet, cats, pharmas, stocks, sort]);

//   /* ─── pagination ──────────────────────────── */
//   const totalPages = Math.max(
//     1,
//     Math.ceil(filtered.length / PER_PAGE)
//   );

//   const safePage = Math.min(page, totalPages);

//   const pageItems = filtered.slice(
//     (safePage - 1) * PER_PAGE,
//     safePage * PER_PAGE
//   );

//   useEffect(() => {
//     setPage(1);
//   }, [query, alphabet, cats, pharmas, stocks, sort]);

//   const resetAll = () => {
//     setQuery('');
//     setAlphabet('');
//     setCats([]);
//     setPharmas([]);
//     setStocks([]);
//     setSort('name');
//     setPage(1);
//   };

//   return (
//     <>
//       {/* ── HERO ───────────────────────────── */}
//       <div
//         style={{
//           background: 'var(--grad-hero)',
//           color: 'white',
//           position: 'relative',
//           overflow: 'hidden',
//         }}
//       >
//         <div
//           style={{
//             position: 'absolute',
//             inset: 0,
//             background:
//               'radial-gradient(ellipse at 75% 50%,rgba(0,196,212,.18) 0%,transparent 55%)',
//             pointerEvents: 'none',
//           }}
//         />

//         <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 relative z-10">
//           <div
//             style={{
//               ...M,
//               display: 'inline-block',
//               background: 'rgba(0,196,212,.2)',
//               border: '1px solid rgba(0,196,212,.35)',
//               borderRadius: 100,
//               padding: '0.3rem 1rem',
//               fontSize: '0.65rem',
//               letterSpacing: '0.12em',
//               textTransform: 'uppercase',
//               color: 'var(--cyan)',
//               marginBottom: '1.25rem',
//             }}
//           >
//             Reference Standards Catalogue
//           </div>

//           <h1
//             style={{
//               ...S,
//               fontSize: 'clamp(2.2rem,3.5vw,3.5rem)',
//               fontWeight: 800,
//               lineHeight: 1.08,
//               letterSpacing: '-0.025em',
//               marginBottom: '0.75rem',
//             }}
//           >
//             Pharmaceutical
//             <br />
//             Grade Products
//           </h1>

//           <p
//             style={{
//               color: 'rgba(255,255,255,.75)',
//               lineHeight: 1.8,
//               maxWidth: 650,
//               fontSize: '1rem',
//             }}
//           >
//             High-purity reference standards, impurity compounds,
//             isotope labelled compounds, and APIs — certified,
//             documented, and ready for regulatory use.
//           </p>
//         </div>
//       </div>

//       {/* ── SEARCH + ALPHABET ─────────────── */}
//       <div
//         className="max-w-7xl mx-auto px-4 md:px-8 py-8"
//         style={{
//           borderBottom: '1px solid rgba(10,92,138,.08)',
//         }}
//       >
//         {/* Search */}
//         <div className="relative mb-6">
//           <svg
//             className="absolute left-4 top-1/2 -translate-y-1/2"
//             viewBox="0 0 24 24"
//             width="18"
//             height="18"
//             fill="none"
//             stroke="var(--ink-muted)"
//             strokeWidth="2"
//           >
//             <circle cx="11" cy="11" r="6" />
//             <path d="M21 21l-4.35-4.35" />
//           </svg>

//           <input
//             type="text"
//             placeholder="Search by product name / chemical name / CAS number"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             className="w-full pl-12 pr-5 py-4 rounded-xl text-sm outline-none"
//             style={{
//               background: 'white',
//               border: '1.5px solid rgba(10,92,138,.12)',
//               color: 'var(--ink)',
//               fontFamily: 'Plus Jakarta Sans, sans-serif',
//             }}
//           />
//         </div>

//         {/* Alphabet Filter */}
//         <div className="flex flex-wrap gap-2">
//           <button
//             onClick={() => setAlphabet('')}
//             className="w-9 h-9 rounded-md text-xs font-bold transition-all"
//             style={{
//               background: alphabet === '' ? 'var(--grad-btn)' : '#EEF5F8',
//               color: alphabet === '' ? 'white' : 'var(--ink-mid)',
//               border: 'none',
//             }}
//           >
//             All
//           </button>

//           {ALPHABETS.map((letter) => (
//             <button
//               key={letter}
//               onClick={() => setAlphabet(letter)}
//               className="w-9 h-9 rounded-md text-xs font-bold transition-all"
//               style={{
//                 background:
//                   alphabet === letter
//                     ? 'var(--grad-btn)'
//                     : '#EEF5F8',
//                 color:
//                   alphabet === letter
//                     ? 'white'
//                     : 'var(--ink-mid)',
//                 border: 'none',
//               }}
//             >
//               {letter}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* ── MAIN LAYOUT ───────────────────── */}
//       <div className="max-w-7xl mx-auto flex min-h-screen">
//         {/* ── SIDEBAR FILTER ─────────────── */}
//         <aside
//   className="hidden lg:flex flex-col gap-0 flex-shrink-0"
//   style={{
//     width: 280,
//     background: 'white',
//     borderRight: '1px solid rgba(10,92,138,.12)',
//     padding: '2rem 1.75rem',
//     position: 'sticky',
//     top: 72,

//     /* change this */
//     height: 'calc(100vh - 120px)',

//     overflowY: 'auto',

//     /* add these */
//     marginBottom: '4rem',
//     alignSelf: 'flex-start',
//   }}
// >
//           {/* Category */}
//           <div className="mb-8">
//             <div
//               style={{
//                 ...M,
//                 fontSize: '0.65rem',
//                 letterSpacing: '0.12em',
//                 textTransform: 'uppercase',
//                 color: 'var(--ink-muted)',
//                 marginBottom: '0.8rem',
//               }}
//             >
//               Category
//             </div>

//             {CATEGORIES.map((c) => (
//               <FilterCheck
//                 key={c}
//                 label={c}
//                 count={countCat(c)}
//                 checked={cats.includes(c)}
//                 onChange={() => setCats(toggle(cats, c))}
//               />
//             ))}
//           </div>

//           {/* Pharmacopoeia */}
//           <div className="mb-8">
//             <div
//               style={{
//                 ...M,
//                 fontSize: '0.65rem',
//                 letterSpacing: '0.12em',
//                 textTransform: 'uppercase',
//                 color: 'var(--ink-muted)',
//                 marginBottom: '0.8rem',
//               }}
//             >
//               Pharmacopoeia
//             </div>

//             {PHARMACOPEIA.map((c) => (
//               <FilterCheck
//                 key={c}
//                 label={c}
//                 count={countPharma(c)}
//                 checked={pharmas.includes(c)}
//                 onChange={() => setPharmas(toggle(pharmas, c))}
//               />
//             ))}
//           </div>

//           {/* Availability */}
//           <div className="mb-8">
//             <div
//               style={{
//                 ...M,
//                 fontSize: '0.65rem',
//                 letterSpacing: '0.12em',
//                 textTransform: 'uppercase',
//                 color: 'var(--ink-muted)',
//                 marginBottom: '0.8rem',
//               }}
//             >
//               Availability
//             </div>

//             {STOCK_OPTS.map((c) => (
//               <FilterCheck
//                 key={c}
//                 label={c}
//                 count={countStock(c)}
//                 checked={stocks.includes(c)}
//                 onChange={() => setStocks(toggle(stocks, c))}
//               />
//             ))}
//           </div>

//           {/* Reset */}
//           <button
//             onClick={resetAll}
//             className="w-full py-3 rounded-lg text-sm font-semibold transition-all mt-auto"
//             style={{
//               border: '1.5px solid rgba(10,92,138,.15)',
//               background: 'white',
//               color: 'var(--ink-mid)',
//               cursor: 'pointer',
//               fontFamily: 'Plus Jakarta Sans, sans-serif',
//             }}
//           >
//             Reset All Filters
//           </button>
//         </aside>

//         {/* ── CONTENT ───────────────────── */}
//         <main className="flex-1 px-4 md:px-8 py-8">
//           {/* Top Toolbar */}
//           <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
//             <div
//               className="text-sm font-medium"
//               style={{ color: 'var(--ink-muted)' }}
//             >
//               <span
//                 style={{
//                   fontWeight: 700,
//                   color: 'var(--ink)',
//                 }}
//               >
//                 {filtered.length}
//               </span>{' '}
//               products found
//             </div>

//             <select
//               value={sort}
//               onChange={(e) => setSort(e.target.value)}
//               className="text-sm rounded-lg px-3 py-2 outline-none"
//               style={{
//                 background: 'white',
//                 border: '1.5px solid rgba(10,92,138,.12)',
//                 color: 'var(--ink)',
//                 fontFamily: 'Plus Jakarta Sans, sans-serif',
//               }}
//             >
//               <option value="name">Name A–Z</option>
//               <option value="name-desc">Name Z–A</option>
//               <option value="purity">Highest Purity</option>
//               <option value="cat">Category</option>
//             </select>
//           </div>

//           {/* Products */}
//           {pageItems.length === 0 ? (
//             <div className="text-center py-24">
//               <div
//                 style={{
//                   fontSize: '3rem',
//                   marginBottom: '1rem',
//                 }}
//               >
//                 🔬
//               </div>

//               <h3
//                 style={{
//                   ...S,
//                   fontSize: '1.4rem',
//                   fontWeight: 700,
//                   color: 'var(--ink)',
//                 }}
//               >
//                 No compounds found
//               </h3>

//               <p
//                 className="mt-2"
//                 style={{ color: 'var(--ink-muted)' }}
//               >
//                 Try adjusting your filters or search query.
//               </p>

//               <button
//                 onClick={resetAll}
//                 className="mt-6 px-6 py-3 rounded-lg text-sm font-bold text-white"
//                 style={{
//                   background: 'var(--grad-btn)',
//                   border: 'none',
//                 }}
//               >
//                 Reset Filters
//               </button>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
//               {pageItems.map((p) => (
//                 <ProductCard key={p.id} p={p} />
//               ))}
//             </div>
//           )}

//           {/* Pagination */}
//           {totalPages > 1 && (
//             <div className="flex items-center justify-center gap-2 pt-12">
//               <button
//                 onClick={() =>
//                   setPage((p) => Math.max(1, p - 1))
//                 }
//                 disabled={safePage === 1}
//                 className="w-10 h-10 rounded-lg"
//                 style={{
//                   border:
//                     '1.5px solid rgba(10,92,138,.12)',
//                   background: 'white',
//                 }}
//               >
//                 ←
//               </button>

//               {Array.from(
//                 { length: totalPages },
//                 (_, i) => i + 1
//               ).map((n) => (
//                 <button
//                   key={n}
//                   onClick={() => setPage(n)}
//                   className="w-10 h-10 rounded-lg text-sm font-semibold"
//                   style={{
//                     border:
//                       n === safePage
//                         ? 'none'
//                         : '1.5px solid rgba(10,92,138,.12)',
//                     background:
//                       n === safePage
//                         ? 'var(--grad-btn)'
//                         : 'white',
//                     color:
//                       n === safePage
//                         ? 'white'
//                         : 'var(--ink-mid)',
//                   }}
//                 >
//                   {n}
//                 </button>
//               ))}

//               <button
//                 onClick={() =>
//                   setPage((p) =>
//                     Math.min(totalPages, p + 1)
//                   )
//                 }
//                 disabled={safePage === totalPages}
//                 className="w-10 h-10 rounded-lg"
//                 style={{
//                   border:
//                     '1.5px solid rgba(10,92,138,.12)',
//                   background: 'white',
//                 }}
//               >
//                 →
//               </button>
//             </div>
//           )}
//         </main>
//       </div>
//     </>
//   );
// }


'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { PRODUCTS, Product } from '@/lib/products';

/* ─── constants ─────────────────────────────── */
const S = { fontFamily: 'Syne, sans-serif' } as const;
const M = { fontFamily: 'JetBrains Mono, monospace' } as const;

const PER_PAGE = 12;

const CAT_GRAD: Record<string, string> = {
  Nitrosamine: 'linear-gradient(90deg,#0A5C8A,#00C4D4)',
  'APIs Impurities': 'linear-gradient(90deg,#00869B,#0A5C8A)',
  Impurity: 'linear-gradient(90deg,#1279B0,#00869B)',
  Metabolite: 'linear-gradient(90deg,#00C4D4,#1279B0)',
  'Isotope labelled compounds':
    'linear-gradient(90deg,#00869B,#00C4D4)',
};

const CATEGORIES = [
  'Nitrosamine',
  'APIs Impurities',
  'Impurity',
  'Metabolite',
  'Isotope labelled compounds',
];

const PHARMACOPEIA = ['USP', 'EP'];

const STOCK_OPTS = ['In Stock', 'Limited', 'On Request'];

const ALPHABETS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

/* ─── stock badge ───────────────────────────── */
function stockStyle(s: string) {
  if (s === 'In Stock')
    return { bg: '#E7F8F0', color: '#1A7D4A', dot: '#1A7D4A' };
  if (s === 'Limited')
    return { bg: '#FFF8E7', color: '#B86A00', dot: '#B86A00' };
  return { bg: '#FEF0F0', color: '#C0392B', dot: '#C0392B' };
}

/* ─── filter checkbox ───────────────────────── */
function FilterCheck({
  label,
  count,
  checked,
  onChange,
}: {
  label: string;
  count: number;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer hover:bg-[#f4f8fb] transition-colors select-none">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      <span
        className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0 transition-all"
        style={{
          border: checked ? 'none' : '1.5px solid rgba(10,92,138,0.2)',
          background: checked ? 'var(--teal)' : 'white',
        }}
      >
        {checked && (
          <svg viewBox="0 0 10 8" width="10" height="8" fill="none">
            <path
              d="M1 4l3 3 5-6"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      <span className="flex-1 text-sm font-medium" style={{ color: 'var(--ink-mid)' }}>
        {label}
      </span>
      <span
        className="text-xs rounded-full px-2 py-0.5"
        style={{ ...M, background: '#f4f8fb', color: 'var(--ink-muted)' }}
      >
        {count}
      </span>
    </label>
  );
}

/* ─── product card ──────────────────────────── */
function ProductCard({ p }: { p: Product }) {
  const ss = stockStyle(p.stock);
  return (
    <Link
      href={`/products/${p.id}`}
      className="group flex flex-col rounded-[14px] overflow-hidden no-underline transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      style={{
        background: 'white',
        border: '1.5px solid rgba(10,92,138,0.12)',
        color: 'inherit',
      }}
    >
      <div style={{ height: 3, background: CAT_GRAD[p.cat] ?? 'var(--grad-btn)' }} />
      <div className="flex flex-col flex-1 p-6 gap-3">
        <div style={{ ...M, fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--teal)' }}>
          {p.cat} · {p.pharma}
        </div>
        <div style={{ ...S, fontSize: '1rem', fontWeight: 700, color: 'var(--ink)', lineHeight: 1.3 }}>
          {p.name}
        </div>
        <div style={{ ...M, fontSize: '0.75rem', color: 'var(--ink-muted)' }}>
          {p.formula} &nbsp;|&nbsp; CAS {p.cas}
        </div>
        <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--ink-mid)', fontSize: '0.82rem' }}>
          {p.desc}
        </p>
        <div className="flex flex-wrap gap-2">
          <span
            className="text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1"
            style={{ background: ss.bg, color: ss.color }}
          >
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
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

/* ─── sidebar filter panel (shared between desktop aside & mobile drawer) ── */
function FilterPanel({
  cats, setCats,
  pharmas, setPharmas,
  stocks, setStocks,
  countCat, countPharma, countStock,
  toggle, resetAll,
  onClose,
}: {
  cats: string[]; setCats: (v: string[]) => void;
  pharmas: string[]; setPharmas: (v: string[]) => void;
  stocks: string[]; setStocks: (v: string[]) => void;
  countCat: (c: string) => number;
  countPharma: (c: string) => number;
  countStock: (c: string) => number;
  toggle: (arr: string[], val: string) => string[];
  resetAll: () => void;
  onClose?: () => void;
}) {
  return (
    <div className="flex flex-col gap-0 h-full">
      {/* Mobile drawer header */}
      {onClose && (
        <div className="flex items-center justify-between pb-5 mb-2" style={{ borderBottom: '1px solid rgba(10,92,138,0.1)' }}>
          <span style={{ ...S, fontWeight: 700, fontSize: '1.05rem', color: 'var(--ink)' }}>Filters</span>
          <button
            onClick={onClose}
            style={{ background: '#f4f8fb', border: 'none', borderRadius: 8, width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--ink-mid)' }}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* Category */}
      <div className="mb-8">
        <div style={{ ...M, fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: '0.8rem' }}>
          Category
        </div>
        {CATEGORIES.map((c) => (
          <FilterCheck key={c} label={c} count={countCat(c)} checked={cats.includes(c)} onChange={() => setCats(toggle(cats, c))} />
        ))}
      </div>

      {/* Pharmacopoeia */}
      <div className="mb-8">
        <div style={{ ...M, fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: '0.8rem' }}>
          Pharmacopoeia
        </div>
        {PHARMACOPEIA.map((c) => (
          <FilterCheck key={c} label={c} count={countPharma(c)} checked={pharmas.includes(c)} onChange={() => setPharmas(toggle(pharmas, c))} />
        ))}
      </div>

      {/* Availability */}
      <div className="mb-8">
        <div style={{ ...M, fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: '0.8rem' }}>
          Availability
        </div>
        {STOCK_OPTS.map((c) => (
          <FilterCheck key={c} label={c} count={countStock(c)} checked={stocks.includes(c)} onChange={() => setStocks(toggle(stocks, c))} />
        ))}
      </div>

      {/* Reset */}
      <button
        onClick={() => { resetAll(); onClose?.(); }}
        className="w-full py-3 rounded-lg text-sm font-semibold transition-all mt-auto"
        style={{ border: '1.5px solid rgba(10,92,138,.15)', background: 'white', color: 'var(--ink-mid)', cursor: 'pointer', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
      >
        Reset All Filters
      </button>
    </div>
  );
}

/* ─── main page ─────────────────────────────── */
export default function ProductsPage() {
  const [query, setQuery] = useState('');
  const [alphabet, setAlphabet] = useState('');
  const [cats, setCats] = useState<string[]>([]);
  const [pharmas, setPharmas] = useState<string[]>([]);
  const [stocks, setStocks] = useState<string[]>([]);
  const [sort, setSort] = useState('name');
  const [page, setPage] = useState(1);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  /* ─── helpers ─────────────────────────────── */
  const toggle = (arr: string[], val: string) =>
    arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val];

  const countCat = (c: string) => PRODUCTS.filter((p) => p.cat === c).length;
  const countPharma = (c: string) => PRODUCTS.filter((p) => p.pharma === c).length;
  const countStock = (c: string) => PRODUCTS.filter((p) => p.stock === c).length;

  const activeFilterCount = cats.length + pharmas.length + stocks.length;

  /* ─── filtered list ───────────────────────── */
  const filtered = useMemo(() => {
    let list = PRODUCTS.filter((p) => {
      const q = query.toLowerCase();
      if (
        q &&
        !p.name.toLowerCase().includes(q) &&
        !p.formula.toLowerCase().includes(q) &&
        !p.cas.toLowerCase().includes(q) &&
        !(p.abbr?.toLowerCase().includes(q))
      ) return false;
      if (alphabet && !p.name.toUpperCase().startsWith(alphabet)) return false;
      if (cats.length && !cats.includes(p.cat)) return false;
      if (pharmas.length && !pharmas.includes(p.pharma)) return false;
      if (stocks.length && !stocks.includes(p.stock)) return false;
      return true;
    });

    list = [...list].sort((a, b) => {
      if (sort === 'name') return a.name.localeCompare(b.name);
      if (sort === 'name-desc') return b.name.localeCompare(a.name);
      if (sort === 'cat') return a.cat.localeCompare(b.cat) || a.name.localeCompare(b.name);
      return 0;
    });

    return list;
  }, [query, alphabet, cats, pharmas, stocks, sort]);

  /* ─── pagination ──────────────────────────── */
  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const pageItems = filtered.slice((safePage - 1) * PER_PAGE, safePage * PER_PAGE);

  useEffect(() => { setPage(1); }, [query, alphabet, cats, pharmas, stocks, sort]);

  /* Lock body scroll when mobile drawer is open */
  useEffect(() => {
    document.body.style.overflow = mobileFiltersOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileFiltersOpen]);

  const resetAll = () => {
    setQuery('');
    setAlphabet('');
    setCats([]);
    setPharmas([]);
    setStocks([]);
    setSort('name');
    setPage(1);
  };

  return (
    <>
      {/* ── HERO ───────────────────────────── */}
      <div style={{ background: 'var(--grad-hero)', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 75% 50%,rgba(0,196,212,.18) 0%,transparent 55%)', pointerEvents: 'none' }} />
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 relative z-10">
          <div style={{ ...M, display: 'inline-block', background: 'rgba(0,196,212,.2)', border: '1px solid rgba(0,196,212,.35)', borderRadius: 100, padding: '0.3rem 1rem', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--cyan)', marginBottom: '1.25rem' }}>
            Reference Standards Catalogue
          </div>
          <h1 style={{ ...S, fontSize: 'clamp(2.2rem,3.5vw,3.5rem)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.025em', marginBottom: '0.75rem' }}>
            Pharmaceutical<br />Grade Products
          </h1>
          <p style={{ color: 'rgba(255,255,255,.75)', lineHeight: 1.8, maxWidth: 650, fontSize: '1rem' }}>
            High-purity reference standards, impurity compounds, isotope labelled compounds, and APIs — certified, documented, and ready for regulatory use.
          </p>
        </div>
      </div>

      {/* ── SEARCH + ALPHABET ─────────────── */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8" style={{ borderBottom: '1px solid rgba(10,92,138,.08)' }}>
        {/* Search */}
        <div className="relative mb-6">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--ink-muted)" strokeWidth="2">
            <circle cx="11" cy="11" r="6" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Search by product name / chemical name / CAS number"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-12 pr-5 py-4 rounded-xl text-sm outline-none"
            style={{ background: 'white', border: '1.5px solid rgba(10,92,138,.12)', color: 'var(--ink)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          />
        </div>

        {/* Alphabet Filter – horizontally scrollable on mobile */}
        <div className="alpha-strip flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
          <button
            onClick={() => setAlphabet('')}
            className="flex-shrink-0 rounded-md text-xs font-bold transition-all"
            style={{ width: 36, height: 36, background: alphabet === '' ? 'var(--grad-btn)' : '#EEF5F8', color: alphabet === '' ? 'white' : 'var(--ink-mid)', border: 'none', cursor: 'pointer' }}
          >
            All
          </button>
          {ALPHABETS.map((letter) => (
            <button
              key={letter}
              onClick={() => setAlphabet(letter)}
              className="flex-shrink-0 rounded-md text-xs font-bold transition-all"
              style={{ width: 36, height: 36, background: alphabet === letter ? 'var(--grad-btn)' : '#EEF5F8', color: alphabet === letter ? 'white' : 'var(--ink-mid)', border: 'none', cursor: 'pointer' }}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>

      {/* ── MOBILE FILTER BUTTON ──────────── */}
      <div className="lg:hidden px-4 py-3 flex items-center justify-between" style={{ borderBottom: '1px solid rgba(10,92,138,.08)', background: '#f9fbfd' }}>
        <button
          onClick={() => setMobileFiltersOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold"
          style={{ background: 'white', border: '1.5px solid rgba(10,92,138,.15)', color: 'var(--ink-mid)', cursor: 'pointer', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M7 12h10M10 18h4" />
          </svg>
          Filters
          {activeFilterCount > 0 && (
            <span style={{ background: 'var(--teal)', color: 'white', borderRadius: '50%', width: 18, height: 18, fontSize: '0.65rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {activeFilterCount}
            </span>
          )}
        </button>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="text-sm rounded-lg px-3 py-2 outline-none"
          style={{ background: 'white', border: '1.5px solid rgba(10,92,138,.12)', color: 'var(--ink)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
        >
          <option value="name">Name A–Z</option>
          <option value="name-desc">Name Z–A</option>
          <option value="purity">Highest Purity</option>
          <option value="cat">Category</option>
        </select>
      </div>

      {/* ── MOBILE FILTER DRAWER ─────────── */}
      {/* Overlay */}
      <div
        className="lg:hidden fixed inset-0 z-40 transition-opacity duration-300"
        style={{ background: 'rgba(10,30,50,0.55)', backdropFilter: 'blur(2px)', opacity: mobileFiltersOpen ? 1 : 0, pointerEvents: mobileFiltersOpen ? 'auto' : 'none' }}
        onClick={() => setMobileFiltersOpen(false)}
      />
      {/* Drawer */}
      <div
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 rounded-t-[20px] overflow-y-auto transition-transform duration-300"
        style={{
          background: 'white',
          padding: '1.5rem 1.25rem 2rem',
          maxHeight: '82vh',
          transform: mobileFiltersOpen ? 'translateY(0)' : 'translateY(100%)',
          boxShadow: '0 -8px 40px rgba(10,40,80,0.18)',
        }}
      >
        {/* Drag handle */}
        <div style={{ width: 40, height: 4, borderRadius: 2, background: '#e0e8f0', margin: '0 auto 1.25rem' }} />
        <FilterPanel
          cats={cats} setCats={setCats}
          pharmas={pharmas} setPharmas={setPharmas}
          stocks={stocks} setStocks={setStocks}
          countCat={countCat} countPharma={countPharma} countStock={countStock}
          toggle={toggle} resetAll={resetAll}
          onClose={() => setMobileFiltersOpen(false)}
        />
      </div>

      {/* ── MAIN LAYOUT ───────────────────── */}
      <div className="max-w-7xl mx-auto flex min-h-screen">

        {/* ── DESKTOP SIDEBAR ─────────────── */}
        <aside
          className="hidden lg:flex flex-col gap-0 flex-shrink-0"
          style={{
            width: 280,
            background: 'white',
            borderRight: '1px solid rgba(10,92,138,.12)',
            padding: '2rem 1.75rem',
            position: 'sticky',
            top: 72,
            height: 'calc(100vh - 120px)',
            overflowY: 'auto',
            marginBottom: '4rem',
            alignSelf: 'flex-start',
          }}
        >
          <FilterPanel
            cats={cats} setCats={setCats}
            pharmas={pharmas} setPharmas={setPharmas}
            stocks={stocks} setStocks={setStocks}
            countCat={countCat} countPharma={countPharma} countStock={countStock}
            toggle={toggle} resetAll={resetAll}
          />
        </aside>

        {/* ── CONTENT ───────────────────── */}
        <main className="flex-1 px-4 md:px-8 py-8">
          {/* Top Toolbar – desktop only (mobile toolbar is above the layout) */}
          <div className="hidden lg:flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="text-sm font-medium" style={{ color: 'var(--ink-muted)' }}>
              <span style={{ fontWeight: 700, color: 'var(--ink)' }}>{filtered.length}</span> products found
            </div>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="text-sm rounded-lg px-3 py-2 outline-none"
              style={{ background: 'white', border: '1.5px solid rgba(10,92,138,.12)', color: 'var(--ink)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              <option value="name">Name A–Z</option>
              <option value="name-desc">Name Z–A</option>
              <option value="purity">Highest Purity</option>
              <option value="cat">Category</option>
            </select>
          </div>

          {/* Mobile result count */}
          <div className="lg:hidden mb-5 text-sm font-medium" style={{ color: 'var(--ink-muted)' }}>
            <span style={{ fontWeight: 700, color: 'var(--ink)' }}>{filtered.length}</span> products found
          </div>

          {/* Products grid */}
          {pageItems.length === 0 ? (
            <div className="text-center py-24">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔬</div>
              <h3 style={{ ...S, fontSize: '1.4rem', fontWeight: 700, color: 'var(--ink)' }}>No compounds found</h3>
              <p className="mt-2" style={{ color: 'var(--ink-muted)' }}>Try adjusting your filters or search query.</p>
              <button
                onClick={resetAll}
                className="mt-6 px-6 py-3 rounded-lg text-sm font-bold text-white"
                style={{ background: 'var(--grad-btn)', border: 'none', cursor: 'pointer' }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {pageItems.map((p) => (
                <ProductCard key={p.id} p={p} />
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 pt-12 flex-wrap">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={safePage === 1}
                className="w-10 h-10 rounded-lg"
                style={{ border: '1.5px solid rgba(10,92,138,.12)', background: 'white', cursor: safePage === 1 ? 'not-allowed' : 'pointer', opacity: safePage === 1 ? 0.45 : 1 }}
              >
                ←
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  className="w-10 h-10 rounded-lg text-sm font-semibold"
                  style={{
                    border: n === safePage ? 'none' : '1.5px solid rgba(10,92,138,.12)',
                    background: n === safePage ? 'var(--grad-btn)' : 'white',
                    color: n === safePage ? 'white' : 'var(--ink-mid)',
                    cursor: 'pointer',
                  }}
                >
                  {n}
                </button>
              ))}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={safePage === totalPages}
                className="w-10 h-10 rounded-lg"
                style={{ border: '1.5px solid rgba(10,92,138,.12)', background: 'white', cursor: safePage === totalPages ? 'not-allowed' : 'pointer', opacity: safePage === totalPages ? 0.45 : 1 }}
              >
                →
              </button>
            </div>
          )}
        </main>
      </div>

      <style>{`
        .alpha-strip::-webkit-scrollbar { display: none; }
        .alpha-strip { -webkit-overflow-scrolling: touch; }
      `}</style>
    </>
  );
}