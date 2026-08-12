import { Check } from 'lucide-react';
import Reveal from './Reveal';
import Magnetic from './Magnetic';

const tiers = [
  {
    name: 'Launch',
    price: '₹45,000',
    period: 'one-time',
    desc: 'A polished marketing site to get a new business live and credible.',
    features: ['Up to 6 pages', 'Responsive premium design', 'Basic on-page SEO', 'Analytics setup', '2 weeks turnaround'],
    highlight: false,
  },
  {
    name: 'Growth',
    price: '₹25,000',
    period: '/month',
    desc: 'Ongoing build, SEO, and management for businesses actively growing.',
    features: ['Everything in Launch', 'Monthly SEO & content', 'Uptime & security monitoring', 'Unlimited small updates', 'Priority support'],
    highlight: true,
  },
  {
    name: 'Scale',
    price: 'Custom',
    period: 'talk to us',
    desc: 'E-commerce or multi-site setups with dedicated marketing support.',
    features: ['Everything in Growth', 'E-commerce store management', 'Paid campaign management', 'Dedicated account lead', 'Custom integrations'],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32 border-b border-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-wider text-primary">Pricing</span>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl mt-3 tracking-tight text-ink">
              Simple enough to fit a seed-stage budget.
            </h2>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 100} className="h-full">
              <div
                className={`h-full rounded-2xl p-8 border flex flex-col transition-all duration-300 ${
                  t.highlight
                    ? 'border-primary bg-white shadow-premium-lg lg:-translate-y-3 relative'
                    : 'border-line bg-white shadow-premium hover:shadow-premium-lg hover:-translate-y-1'
                }`}
              >
                {t.highlight && (
                  <span className="absolute -top-3 left-8 font-mono text-[10px] tracking-wider bg-ink text-signal rounded-full px-3 py-1">
                    MOST PICKED
                  </span>
                )}
                <h3 className="font-display font-semibold text-xl text-ink">{t.name}</h3>
                <p className="text-sm text-muted mt-2 mb-6 leading-relaxed">{t.desc}</p>
                <div className="mb-6">
                  <span className="font-display text-3xl font-semibold text-ink">{t.price}</span>
                  <span className="text-muted text-sm ml-1">{t.period}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted">
                      <Check size={16} className="text-signal-ink shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Magnetic className="w-full">
                  <a
                    href="#contact"
                    className={`block text-center px-5 py-2.5 rounded-full font-medium text-sm transition-colors ${
                      t.highlight
                        ? 'bg-ink text-white shadow-premium hover:bg-primary'
                        : 'border border-line text-ink hover:border-ink/40'
                    }`}
                  >
                    Get started
                  </a>
                </Magnetic>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="text-center text-xs text-muted mt-10 font-mono">
          Prices indicative — final quote depends on scope. No hidden fees.
        </p>
      </div>
    </section>
  );
}
