import { useState } from 'react';
import { Plus } from 'lucide-react';
import Reveal from './Reveal';

const faqs = [
  {
    q: 'We\u2019re pre-launch with almost no budget — can Avera still help?',
    a: 'Yes. The Launch package is scoped for exactly this stage. We\u2019ll tell you honestly if a smaller starting point makes more sense before you commit.',
  },
  {
    q: 'Do you only build new sites, or can you take over an existing one?',
    a: 'Both. A lot of our retainer clients came to us with an existing site that needed rescuing — outdated CMS, no monitoring, broken SEO. We audit first, then take it over.',
  },
  {
    q: 'What happens if our site goes down?',
    a: 'Growth and Scale plans include uptime monitoring with alerts to our team, not just you. Most issues are fixed before you\u2019d have noticed them yourself.',
  },
  {
    q: 'Can you handle e-commerce specifically?',
    a: 'Yes — Shopify, WooCommerce, and custom storefronts, including payment gateway setup, product catalogue structure, and ongoing store management.',
  },
  {
    q: 'How fast can we actually launch?',
    a: 'Simple marketing sites: 1–2 weeks. E-commerce or custom builds: 3–6 weeks depending on scope. You\u2019ll get a firm timeline after the scoping call.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-wider text-primary">FAQ</span>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl mt-3 tracking-tight mb-12 text-ink">
            Questions founders actually ask.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="divide-y divide-line border-t border-b border-line rounded-2xl bg-white shadow-premium px-2">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q}>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between gap-4 py-5 px-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-medium text-ink">{f.q}</span>
                    <Plus
                      size={18}
                      className={`shrink-0 text-primary transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                    />
                  </button>
                  <div className={`faq-panel ${isOpen ? 'is-open' : ''}`}>
                    <div>
                      <p className="text-sm text-muted leading-relaxed pb-5 px-4 pr-8">{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
