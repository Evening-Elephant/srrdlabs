import Link from 'next/link';
const S = { fontFamily: "Syne, sans-serif" } as const;
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔬</div>
      <h1 style={{ ...S, fontSize: '2rem', fontWeight: 800, color: 'var(--ink)', marginBottom: '0.5rem' }}>Page Not Found</h1>
      <p style={{ color: 'var(--ink-mid)', marginBottom: '2rem' }}>The compound you're looking for doesn't exist in our catalogue.</p>
      <Link href="/products" className="px-6 py-3 rounded-lg text-white font-bold text-sm no-underline" style={{ background: 'var(--grad-btn)' }}>Browse All Products</Link>
    </div>
  );
}
