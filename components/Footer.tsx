import Link from 'next/link';
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ background: 'var(--ink)', color: 'rgba(255,255,255,0.6)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 md:px-16 py-16">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-3 no-underline mb-4">
            <div className="w-[38px] h-[38px] rounded-lg flex items-center justify-center flex-shrink-0" >
             <Image
                     src="/logo.png"
                     alt="SRRD Laboratories Logo"
                     
                     width={38}
                 height={38}
                 className="object-cover"
                   />
            </div>
            <span style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:'1.1rem', color:'white', letterSpacing:'-0.01em' }}>
              SRRD <span style={{ color:'var(--cyan)' }}>Laboratories</span>
            </span>
          </Link>
          <p style={{ fontSize:'0.85rem', color:'rgba(255,255,255,0.4)', lineHeight:1.7, maxWidth:260 }}>
            Premier Contract Research Organisation delivering excellence in pharmaceutical research, custom synthesis, and analytical services from Hyderabad, India.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 style={{ fontFamily:'Syne,sans-serif', fontSize:'0.75rem', fontWeight:700, color:'white', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:'1.25rem' }}>Navigation</h4>
          <ul className="list-none flex flex-col gap-3">
            {[['/', 'Home'], ['/about','About Us'], ['/products','Products'], ['/contact','Contact']].map(([h, l]) => (
              <li key={h}><Link href={h} style={{ fontSize:'0.875rem', color:'rgba(255,255,255,0.45)', textDecoration:'none' }}>{l}</Link></li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 style={{ fontFamily:'Syne,sans-serif', fontSize:'0.75rem', fontWeight:700, color:'white', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:'1.25rem' }}>Key Products</h4>
          <ul className="list-none flex flex-col gap-3">
            {[
              ['ndma','N-Nitrosodimethylamine'],
              ['ndea','N-Nitrosodiethylamine'],
              ['nmor','N-Nitrosomorpholine'],
              ['caffeine-api','Caffeine Reference Std'],
            ].map(([id, name]) => (
              <li key={id}><Link href={`/products/${id}`} style={{ fontSize:'0.875rem', color:'rgba(255,255,255,0.45)', textDecoration:'none' }}>{name}</Link></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ fontFamily:'Syne,sans-serif', fontSize:'0.75rem', fontWeight:700, color:'white', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:'1.25rem' }}>Contact</h4>
          <ul className="list-none flex flex-col gap-3">
            <li><a href="mailto:info@srrdlabs.com" style={{ fontSize:'0.875rem', color:'rgba(255,255,255,0.45)', textDecoration:'none' }}>info@srrdlabs.com</a></li>
            <li><a href="tel:+919885204920" style={{ fontSize:'0.875rem', color:'rgba(255,255,255,0.45)', textDecoration:'none' }}>+91 98852 04920</a></li>
            <li><span style={{ fontSize:'0.875rem', color:'rgba(255,255,255,0.45)' }}>Balangar, Hyderabad</span></li>
            <li><span style={{ fontSize:'0.875rem', color:'rgba(255,255,255,0.45)' }}>Telangana 500037, India</span></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center px-6 md:px-16 py-5 gap-2" style={{ borderTop:'1px solid rgba(255,255,255,0.07)', fontSize:'0.78rem' }}>
        <span>© 2025 SRRD Laboratories. All rights reserved.</span>
        <span>A 1/5, SV Cooperative Society, Balangar, Hyderabad</span>
      </div>
    </footer>
  );
}
