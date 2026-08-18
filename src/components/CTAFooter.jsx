import { useState } from 'react';
import { ArrowUpRight, Mail, Phone, MapPin, Send } from 'lucide-react';
import Reveal from './Reveal';
import Magnetic from './Magnetic';

// lucide-react no longer ships brand icons — small inline replacements
const LinkedinIcon = ({ size = 16, className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} className={className}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.44-2.14 2.94v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.27 2.38 4.27 5.47zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57z" />
  </svg>
);
const InstagramIcon = ({ size = 16, className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width={size} height={size} className={className}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);
const XIcon = ({ size = 16, className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} className={className}>
    <path d="M13.6 10.6 20.4 3h-1.7l-5.9 6.6L8.1 3H3l7.1 10.2L3 21h1.7l6.2-7 5 7h5.1l-7.4-10.4Zm-2.2 2.5-.7-1L5 4.3h2.2l4.6 6.6.7 1 6 8.6h-2.2l-4.9-7Z" />
  </svg>
);

// TODO: replace these with Avera's real contact details before going live.
const CONTACT = {
  email: 'avera.techsolutions.in@gmail.com',
  phone: '+91 7025 7789 49',
  phoneHref: '+917025778949',
  location: 'Kochi,Kerala, India',
  linkedin: 'https://www.linkedin.com/company/avera',
  instagram: 'https://www.instagram.com/avera.studio',
  twitter: 'https://twitter.com/avera_studio',
};

const contactCards = [
  { icon: Mail, label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: Phone, label: 'Phone', value: CONTACT.phone, href: `tel:${CONTACT.phoneHref}` },
  { icon: MapPin, label: 'Studio', value: CONTACT.location, href: 'https://maps.google.com/?q=Bengaluru,India' },
];

const socials = [
  { icon: LinkedinIcon, label: 'LinkedIn', href: CONTACT.linkedin },
  { icon: InstagramIcon, label: 'Instagram', href: CONTACT.instagram },
  { icon: XIcon, label: 'X (Twitter)', href: CONTACT.twitter },
];

export default function CTAFooter() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${form.name || 'website visitor'}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <section id="contact" className="relative py-24 lg:py-32 border-t border-line blueprint-grid overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface/40 via-white to-white pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl mb-16">
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-signal-ink border border-signal/40 bg-signal/10 rounded-full px-3 py-1 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-signal-ink status-dot" />
                Open for new projects
              </span>
              <h2 className="font-display font-semibold text-3xl sm:text-5xl tracking-tight leading-tight text-ink">
                Tell us what you're building.
                <br />
                <span className="italic text-primary">We'll tell you</span> what it takes to ship it.
              </h2>
              <p className="mt-5 text-muted max-w-md">
                Free 20-minute audit call with Aswin Krishnan — no pitch deck, just a straight answer on scope and cost.
              </p>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Direct contact cards */}
            <Reveal delay={80} className="lg:col-span-2 space-y-4">
              <div>
                {contactCards.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="group flex items-center gap-4 p-5 rounded-2xl border border-line bg-white shadow-premium hover:shadow-premium-lg hover:-translate-y-1 hover:border-primary/40 transition-all duration-300 mb-4"
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                      <Icon size={19} className="text-primary group-hover:text-white transition-colors" strokeWidth={1.5} />
                    </div>
                    <div className="min-w-0">
                      <p className="font-mono text-[10px] uppercase tracking-wider text-muted">{label}</p>
                      <p className="font-display font-medium text-ink truncate">{value}</p>
                    </div>
                    <ArrowUpRight size={16} className="ml-auto text-muted group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                  </a>
                ))}

                <div className="flex items-center gap-3 pt-2">
                  {socials.map(({ icon: Icon, label, href }) => (
                    <Magnetic key={label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="w-10 h-10 rounded-full border border-line bg-white flex items-center justify-center text-muted hover:text-primary hover:border-primary/40 shadow-premium transition-colors"
                      >
                        <Icon size={16} strokeWidth={1.5} />
                      </a>
                    </Magnetic>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Contact form */}
            <Reveal delay={160} className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-line bg-white shadow-premium-lg p-6 sm:p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="field">
                    <input
                      id="name"
                      type="text"
                      placeholder=" "
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                    <label htmlFor="name">Your name</label>
                  </div>
                  <div className="field">
                    <input
                      id="email"
                      type="email"
                      placeholder=" "
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                    <label htmlFor="email">Work email</label>
                  </div>
                </div>
                <div className="field">
                  <textarea
                    id="message"
                    placeholder=" "
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                  <label htmlFor="message">What are you building?</label>
                </div>
                <Magnetic className="w-full sm:w-auto">
                  <button
                    type="submit"
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-ink text-white font-semibold shadow-premium-lg hover:bg-primary transition-colors"
                  >
                    Send message
                    <Send size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </Magnetic>
                <p className="text-xs text-muted font-mono">Opens your email client, addressed to {CONTACT.email}.</p>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="border-t border-line py-12 bg-surface/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 font-display font-semibold text-ink">
            <span className="w-6 h-6 rounded-md bg-ink flex items-center justify-center">
              <span className="text-signal font-display text-[10px] font-bold">A</span>
            </span>
            Avera
          </div>
          <p className="font-mono text-xs text-muted text-center">
            Digital marketing &amp; web development, founded by Aswin Krishnan — Bengaluru
          </p>
          <p className="font-mono text-xs text-muted">© {new Date().getFullYear()} Avera</p>
        </div>
      </footer>
    </>
  );
}
