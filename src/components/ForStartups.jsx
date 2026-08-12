import { Rocket, ShieldCheck, Wallet } from 'lucide-react';
import Reveal from './Reveal';

const points = [
  {
    icon: Rocket,
    title: 'Built for pre-seed to scale-up',
    desc: 'We move at startup speed — first version live in days, not months, so you can start testing with real users.',
  },
  {
    icon: Wallet,
    title: 'Pricing that scales with you',
    desc: 'Fixed-scope launch packages plus a monthly retainer for management, so cash flow stays predictable.',
  },
  {
    icon: ShieldCheck,
    title: 'We stay after launch',
    desc: 'Most agencies disappear after handoff. Avera monitors uptime, ships fixes, and keeps SEO compounding month over month.',
  },
];

export default function ForStartups() {
  return (
    <section id="approach" className="py-24 lg:py-32 border-b border-line bg-surface/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-start">
        <Reveal>
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-primary">Why founders pick Avera</span>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl mt-3 tracking-tight leading-tight text-ink">
              Run by someone who's shipped under a deadline too.
            </h2>
            <p className="mt-5 text-muted leading-relaxed max-w-md">
              Avera was founded by Aswin Krishnan specifically for founders and teams who need a site
              that works now — and a partner who's still around when it needs to change six months from now.
            </p>
            <a
              href="#pricing"
              className="mt-8 inline-flex items-center gap-2 font-mono text-sm text-primary hover:underline underline-offset-4"
            >
              See packages →
            </a>
          </div>
        </Reveal>

        <div className="space-y-5">
          {points.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 90}>
              <div className="flex gap-4 p-5 rounded-xl border border-line bg-white shadow-premium hover:shadow-premium-lg hover:-translate-x-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-signal/15 flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-signal-ink" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-ink">{title}</h3>
                  <p className="text-sm text-muted mt-1 leading-relaxed">{desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
