import { UserCheck, FileCheck2, Repeat } from 'lucide-react';
import Reveal from './Reveal';

const pillars = [
  {
    icon: UserCheck,
    title: 'Direct access to the founder',
    desc: 'You work with Aswin Krishnan and a small senior team — no account managers relaying messages between you and the people doing the work.',
  },
  {
    icon: FileCheck2,
    title: 'Fixed scope, fixed price',
    desc: 'Every engagement starts with a written scope and quote before work begins. No surprise line items at invoice time.',
  },
  {
    icon: Repeat,
    title: 'Built to be revisited, not abandoned',
    desc: 'Retainer clients get monthly check-ins and a running log of what changed and why — so the site keeps improving after launch.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 border-b border-line bg-surface/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-wider text-primary">How Avera works with you</span>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl mt-3 tracking-tight mb-16 max-w-xl text-ink">
            What you can expect, every engagement.
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 100}>
              <div className="h-full rounded-2xl border border-line bg-white shadow-premium p-7 hover:shadow-premium-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center mb-5">
                  <Icon size={20} className="text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-semibold text-ink mb-2">{title}</h3>
                <p className="text-sm leading-relaxed text-muted">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
