'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from "next/image";

const NAV_LINKS = [
  { href: '/',         label: 'Home' },
  { href: '/about',    label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/blog',     label: 'Blog' },
  { href: '/careers',  label: 'Careers' },
];

function isActive(path: string, href: string) {
  if (href === '/') return path === '/';
  return path === href || path.startsWith(href + '/');
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

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [path]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 h-[72px] bg-white/96 backdrop-blur-md transition-all duration-300"
      style={{
        borderBottom: '1px solid rgba(10,92,138,0.12)',
        boxShadow: scrolled ? '0 4px 24px rgba(10,92,138,0.10)' : 'none',
      }}
    >
      {/* ── Logo ── */}
      <Link href="/" className="flex items-center gap-3 no-underline flex-shrink-0">
        <div
          className="w-[38px] h-[38px] rounded-[8px] flex items-center justify-center"
          
        >
          {/* <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
            <path d="M9 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2M9 3v2h6V3M9 3H7m9 8H8m8 4H8" />
          </svg> */}
                <Image
        src="/logo.png"
        alt="SRRD Laboratories Logo"
        
        width={38}
    height={38}
    className="object-cover"
      />
        </div>
        <div>
          <span
            style={{
              fontFamily: "Syne, sans-serif",
              fontSize: '1.15rem',
              fontWeight: 700,
              color: 'var(--ink)',
              letterSpacing: '-0.01em',
            }}
          >
            SRRD{' '}
            <span style={{ color: 'var(--teal)' }}>Laboratories</span>
          </span>
          <div
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: '0.55rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--ink-muted)',
              marginTop: '-2px',
            }}
          >
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
                fontFamily: "Plus Jakarta Sans, sans-serif",
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
            style={{
              background: 'linear-gradient(135deg,#1279B0,#00869B)',
              boxShadow: '0 4px 14px rgba(10,92,138,0.3)',
              fontFamily: "Plus Jakarta Sans, sans-serif",
            }}
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
        <span
          className="block w-5 h-[2px] rounded transition-all duration-200"
          style={{ background: 'var(--ink)', transform: open ? 'rotate(45deg) translateY(7px)' : 'none' }}
        />
        <span
          className="block w-5 h-[2px] rounded transition-all duration-200"
          style={{ background: 'var(--ink)', opacity: open ? 0 : 1 }}
        />
        <span
          className="block w-5 h-[2px] rounded transition-all duration-200"
          style={{ background: 'var(--ink)', transform: open ? 'rotate(-45deg) translateY(-7px)' : 'none' }}
        />
      </button>

      {/* ── Mobile menu ── */}
      {open && (
        <div
          className="absolute top-[72px] left-0 right-0 lg:hidden shadow-xl"
          style={{ background: 'white', borderBottom: '1px solid rgba(10,92,138,0.12)', zIndex: 100 }}
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
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                }}
              >
                {l.label}
              </Link>
            ))}
            <div style={{ height: 1, background: 'var(--border)', margin: '0.5rem 0' }} />
            <Link
              href="/contact"
              className="block text-center px-5 py-3 rounded-lg text-sm font-bold text-white no-underline"
              style={{
                background: 'linear-gradient(135deg,#1279B0,#00869B)',
                fontFamily: "Plus Jakarta Sans, sans-serif",
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
