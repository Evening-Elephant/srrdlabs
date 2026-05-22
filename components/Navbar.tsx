// 'use client';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { useState, useEffect } from 'react';
// import Image from "next/image";

// const NAV_LINKS = [
//   { href: '/',         label: 'Home' },
//   { href: '/about',    label: 'About' },
//   { href: '/products', label: 'Products' },
//   { href: '/blog',     label: 'Blog' },
//   { href: '/careers',  label: 'Careers' },
//   { href: '/faq',     label: 'Faq' },
// ];

// function isActive(path: string, href: string) {
//   if (href === '/') return path === '/';
//   return path === href || path.startsWith(href + '/');
// }

// export default function Navbar() {
//   const path = usePathname();
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const fn = () => setScrolled(window.scrollY > 40);
//     window.addEventListener('scroll', fn);
//     return () => window.removeEventListener('scroll', fn);
//   }, []);

//   // Close mobile menu on route change
//   useEffect(() => { setOpen(false); }, [path]);

//   return (
//     <nav
//       className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 h-[72px] bg-white/96 backdrop-blur-md transition-all duration-300"
//       style={{
//         borderBottom: '1px solid rgba(10,92,138,0.12)',
//         boxShadow: scrolled ? '0 4px 24px rgba(10,92,138,0.10)' : 'none',
//       }}
//     >
//       {/* ── Logo ── */}
//       <Link href="/" className="flex items-center gap-3 no-underline flex-shrink-0">
//         <div
//           className="w-[38px] h-[38px] rounded-[8px] flex items-center justify-center"
          
//         >
//           {/* <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
//             <path d="M9 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2M9 3v2h6V3M9 3H7m9 8H8m8 4H8" />
//           </svg> */}
//                 <Image
//         src="/logo.png"
//         alt="SRRD Laboratories Logo"
        
//         width={38}
//     height={38}
//     className="object-cover"
//       />
//         </div>
//         <div>
//           <span
//             style={{
//               fontFamily: "Syne, sans-serif",
//               fontSize: '1.15rem',
//               fontWeight: 700,
//               color: 'var(--ink)',
//               letterSpacing: '-0.01em',
//             }}
//           >
//             SRRD{' '}
//             <span style={{ color: 'var(--teal)' }}>Laboratories</span>
//           </span>
//           <div
//             style={{
//               fontFamily: "JetBrains Mono, monospace",
//               fontSize: '0.55rem',
//               letterSpacing: '0.12em',
//               textTransform: 'uppercase',
//               color: 'var(--ink-muted)',
//               marginTop: '-2px',
//             }}
//           >
//             Where Chemistry Meets Confidence
//           </div>
//         </div>
//       </Link>

//       {/* ── Desktop nav ── */}
//       <ul className="hidden lg:flex items-center gap-1 list-none">
//         {NAV_LINKS.map((l) => (
//           <li key={l.href}>
//             <Link
//               href={l.href}
//               className="px-4 py-2 rounded-lg text-sm font-medium transition-all no-underline"
//               style={{
//                 color: isActive(path, l.href) ? 'var(--primary)' : 'var(--ink-mid)',
//                 fontWeight: isActive(path, l.href) ? 600 : 500,
//                 background: isActive(path, l.href) ? 'rgba(10,92,138,0.06)' : 'transparent',
//                 fontFamily: "Plus Jakarta Sans, sans-serif",
//               }}
//             >
//               {l.label}
//             </Link>
//           </li>
//         ))}
//         <li style={{ marginLeft: '0.5rem' }}>
//           <Link
//             href="/contact"
//             className="px-5 py-2 rounded-lg text-sm font-bold text-white no-underline transition-all hover:opacity-90 hover:-translate-y-0.5"
//             style={{
//               background: 'linear-gradient(135deg,#1279B0,#00869B)',
//               boxShadow: '0 4px 14px rgba(10,92,138,0.3)',
//               fontFamily: "Plus Jakarta Sans, sans-serif",
//             }}
//           >
//             Contact Us
//           </Link>
//         </li>
//       </ul>

//       {/* ── Mobile hamburger ── */}
//       <button
//         className="lg:hidden flex flex-col gap-[5px] p-2 rounded-lg transition-colors"
//         onClick={() => setOpen(!open)}
//         aria-label="Toggle menu"
//         style={{ background: open ? 'rgba(10,92,138,0.06)' : 'transparent', border: 'none', cursor: 'pointer' }}
//       >
//         <span
//           className="block w-5 h-[2px] rounded transition-all duration-200"
//           style={{ background: 'var(--ink)', transform: open ? 'rotate(45deg) translateY(7px)' : 'none' }}
//         />
//         <span
//           className="block w-5 h-[2px] rounded transition-all duration-200"
//           style={{ background: 'var(--ink)', opacity: open ? 0 : 1 }}
//         />
//         <span
//           className="block w-5 h-[2px] rounded transition-all duration-200"
//           style={{ background: 'var(--ink)', transform: open ? 'rotate(-45deg) translateY(-7px)' : 'none' }}
//         />
//       </button>

//       {/* ── Mobile menu ── */}
//       {open && (
//         <div
//           className="absolute top-[72px] left-0 right-0 lg:hidden shadow-xl"
//           style={{ background: 'white', borderBottom: '1px solid rgba(10,92,138,0.12)', zIndex: 100 }}
//         >
//           <div className="px-5 py-4 flex flex-col gap-1">
//             {NAV_LINKS.map((l) => (
//               <Link
//                 key={l.href}
//                 href={l.href}
//                 className="block px-4 py-3 rounded-lg text-sm font-medium no-underline transition-all"
//                 style={{
//                   color: isActive(path, l.href) ? 'var(--primary)' : 'var(--ink-mid)',
//                   fontWeight: isActive(path, l.href) ? 600 : 500,
//                   background: isActive(path, l.href) ? 'rgba(10,92,138,0.06)' : 'transparent',
//                   fontFamily: "Plus Jakarta Sans, sans-serif",
//                 }}
//               >
//                 {l.label}
//               </Link>
//             ))}
//             <div style={{ height: 1, background: 'var(--border)', margin: '0.5rem 0' }} />
//             <Link
//               href="/contact"
//               className="block text-center px-5 py-3 rounded-lg text-sm font-bold text-white no-underline"
//               style={{
//                 background: 'linear-gradient(135deg,#1279B0,#00869B)',
//                 fontFamily: "Plus Jakarta Sans, sans-serif",
//               }}
//             >
//               Contact Us
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }


'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import Image from "next/image";

const NAV_LINKS = [
  { href: '/',         label: 'Home' },
  { href: '/about',    label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/blog',     label: 'Blog' },
  { href: '/careers',  label: 'Careers' },
  { href: '/faq',      label: 'Faq' },
];

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'zh', label: '中文 (简体)' },
  { code: 'ja', label: '日本語' },
  { code: 'ko', label: '한국어' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'af', label: 'Afrikaans' },
  { code: 'pt', label: 'Português' },
  { code: 'de', label: 'Deutsch' },
  { code: 'ar', label: 'العربية' },
  { code: 'id', label: 'Bahasa Indonesia' },
  { code: 'ru', label: 'Русский' },
];

const CONTACT_EMAIL = 'info@srrdlaboratories.com';

const M = { fontFamily: 'JetBrains Mono, monospace' } as const;
const J = { fontFamily: 'Plus Jakarta Sans, sans-serif' } as const;

function isActive(path: string, href: string) {
  if (href === '/') return path === '/';
  return path === href || path.startsWith(href + '/');
}

/* ── Language Dropdown ── */
function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(LANGUAGES[0]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 transition-opacity hover:opacity-80"
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.2rem 0.4rem', borderRadius: 4, ...J, fontSize: '0.72rem', color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}
      >
        {/* Globe icon */}
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0, opacity: 0.8 }}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3c-2.5 3-4 5.5-4 9s1.5 6 4 9M12 3c2.5 3 4 5.5 4 9s-1.5 6-4 9M3 12h18" />
        </svg>
        {selected.label}
        <svg viewBox="0 0 10 6" width="8" height="8" fill="currentColor" style={{ opacity: 0.7, transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'none' }}>
          <path d="M0 0l5 6 5-6z" />
        </svg>
      </button>

      {open && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            right: 0,
            background: 'white',
            border: '1.5px solid rgba(10,92,138,0.12)',
            borderRadius: 10,
            boxShadow: '0 8px 32px rgba(10,40,80,0.14)',
            minWidth: 190,
            zIndex: 200,
            overflow: 'hidden',
          }}
        >
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => { setSelected(lang); setOpen(false); }}
              className="w-full flex items-center justify-between px-4 py-2.5 text-left transition-colors hover:bg-[#f4f8fb]"
              style={{
                background: selected.code === lang.code ? 'rgba(10,92,138,0.05)' : 'transparent',
                border: 'none',
                cursor: 'pointer',
                ...J,
                fontSize: '0.8rem',
                color: selected.code === lang.code ? 'var(--primary)' : 'var(--ink-mid)',
                fontWeight: selected.code === lang.code ? 600 : 400,
              }}
            >
              {lang.label}
              {selected.code === lang.code && (
                <svg viewBox="0 0 10 8" width="10" height="8" fill="none">
                  <path d="M1 4l3 3 5-6" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setOpen(false); }, [path]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">

      {/* ══ TOP UTILITY BAR ══ */}
      <div style={{ background: 'linear-gradient(90deg, #0A5C8A, #00869B)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="max-w-screen-xl mx-auto px-5 md:px-16 flex items-center justify-between" style={{ height: 36 }}>

          {/* Left – email */}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="flex items-center gap-1.5 no-underline transition-opacity hover:opacity-80"
            style={{ ...M, fontSize: '0.65rem', color: 'rgba(255,255,255,0.85)', letterSpacing: '0.02em' }}
          >
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0, opacity: 0.75 }}>
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M2 7l10 7 10-7" />
            </svg>
            {CONTACT_EMAIL}
          </a>

          {/* Right – language + employee login */}
          <div className="flex items-center gap-4">
            <LanguageSelector />

            {/* Divider */}
            <span style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.2)', display: 'inline-block', flexShrink: 0 }} />

            {/* Employee login */}
            <a
              href="/employee-login"
              className="flex items-center gap-1.5 no-underline transition-opacity hover:opacity-80"
              style={{ ...J, fontSize: '0.72rem', color: 'rgba(255,255,255,0.9)', fontWeight: 600 }}
            >
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0, opacity: 0.8 }}>
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
              <span className="hidden sm:inline">Employee Login</span>
              <span className="sm:hidden">Login</span>
            </a>
          </div>
        </div>
      </div>

      {/* ══ MAIN NAVBAR ══ */}
      <nav
        className="flex items-center justify-between px-5 md:px-16 h-[72px] bg-white/96 backdrop-blur-md transition-all duration-300"
        style={{
          borderBottom: '1px solid rgba(10,92,138,0.12)',
          boxShadow: scrolled ? '0 4px 24px rgba(10,92,138,0.10)' : 'none',
        }}
      >
        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-3 no-underline flex-shrink-0">
          <div className="w-[38px] h-[38px] rounded-[8px] flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="SRRD Laboratories Logo"
              width={38}
              height={38}
              className="object-cover"
            />
          </div>
          <div>
            <span style={{ fontFamily: "Syne, sans-serif", fontSize: '1.15rem', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.01em' }}>
              SRRD{' '}<span style={{ color: 'var(--teal)' }}>Laboratories</span>
            </span>
            <div style={{ ...M, fontSize: '0.55rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginTop: '-2px' }}>
              Where Chemistry Meets Confidence
            </div>
          </div>
        </Link>

        {/* ── Desktop nav ── */}
        <ul className="hidden lg:flex items-center gap-1 list-none">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all no-underline"
                style={{
                  color: isActive(path, l.href) ? 'var(--primary)' : 'var(--ink-mid)',
                  fontWeight: isActive(path, l.href) ? 600 : 500,
                  background: isActive(path, l.href) ? 'rgba(10,92,138,0.06)' : 'transparent',
                  ...J,
                }}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li style={{ marginLeft: '0.5rem' }}>
            <Link
              href="/contact"
              className="px-5 py-2 rounded-lg text-sm font-bold text-white no-underline transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg,#1279B0,#00869B)', boxShadow: '0 4px 14px rgba(10,92,138,0.3)', ...J }}
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* ── Mobile hamburger ── */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-2 rounded-lg transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{ background: open ? 'rgba(10,92,138,0.06)' : 'transparent', border: 'none', cursor: 'pointer' }}
        >
          <span className="block w-5 h-[2px] rounded transition-all duration-200" style={{ background: 'var(--ink)', transform: open ? 'rotate(45deg) translateY(7px)' : 'none' }} />
          <span className="block w-5 h-[2px] rounded transition-all duration-200" style={{ background: 'var(--ink)', opacity: open ? 0 : 1 }} />
          <span className="block w-5 h-[2px] rounded transition-all duration-200" style={{ background: 'var(--ink)', transform: open ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
        </button>

        {/* ── Mobile menu ── */}
        {open && (
          <div
            className="absolute left-0 right-0 lg:hidden shadow-xl"
            style={{ top: '72px', background: 'white', borderBottom: '1px solid rgba(10,92,138,0.12)', zIndex: 100 }}
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block px-4 py-3 rounded-lg text-sm font-medium no-underline transition-all"
                  style={{
                    color: isActive(path, l.href) ? 'var(--primary)' : 'var(--ink-mid)',
                    fontWeight: isActive(path, l.href) ? 600 : 500,
                    background: isActive(path, l.href) ? 'rgba(10,92,138,0.06)' : 'transparent',
                    ...J,
                  }}
                >
                  {l.label}
                </Link>
              ))}
              <div style={{ height: 1, background: 'var(--border)', margin: '0.5rem 0' }} />
              <Link
                href="/contact"
                className="block text-center px-5 py-3 rounded-lg text-sm font-bold text-white no-underline"
                style={{ background: 'linear-gradient(135deg,#1279B0,#00869B)', ...J }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}