import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Magnetic from './Magnetic';

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Approach', href: '#approach' },
  { label: 'Work', href: '#work' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-paper/85 backdrop-blur-md border-b border-line shadow-premium' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 font-display font-semibold text-lg tracking-tight text-ink">
          <span className="relative w-7 h-7 rounded-lg bg-ink flex items-center justify-center overflow-hidden">
            <span className="text-signal font-display text-xs font-bold">A</span>
          </span>
          Avera
        </a>

        <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-wider text-muted">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="px-4 py-2 rounded-full border border-line text-sm font-medium text-ink hover:border-primary hover:text-primary transition-colors"
          >
            Get an audit
          </a>
          <Magnetic>
            <a
              href="#contact"
              className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-ink text-white text-sm font-semibold shadow-premium hover:bg-primary transition-colors"
            >
              Start a project
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Magnetic>
        </div>

        <button
          className="md:hidden p-2 text-ink bg-transparent"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-line bg-paper px-6 py-4 flex flex-col gap-4 font-mono text-sm uppercase tracking-wider text-muted shadow-premium">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="hover:text-ink">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 text-center px-4 py-2 rounded-full bg-ink text-white font-semibold normal-case font-body"
          >
            Start a project
          </a>
        </div>
      )}
    </header>
  );
}
