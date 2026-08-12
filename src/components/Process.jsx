import Reveal from './Reveal';

const steps = [
  {
    n: '01',
    status: 'SCOPE',
    title: 'Audit & scope',
    desc: 'We review what exists — or start from a blank page — and agree on a fixed scope, timeline, and price before anything is built.',
  },
  {
    n: '02',
    status: 'BUILD',
    title: 'Design & build',
    desc: 'Design moves in weekly reviews, not a single big reveal. You see the site take shape and can redirect early.',
  },
  {
    n: '03',
    status: 'DEPLOY',
    title: 'Launch',
    desc: 'Domain, hosting, SSL, analytics, and search console — all wired up so the site is measurable from day one.',
  },
  {
    n: '04',
    status: 'MONITOR',
    title: 'Manage & grow',
    desc: 'Ongoing retainer covers updates, uptime monitoring, and SEO/marketing work that compounds month over month.',
  },
];

export default function Process() {
  return (
    <section className="py-24 lg:py-32 border-b border-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-wider text-primary">How a project runs</span>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl mt-3 tracking-tight mb-16 text-ink">
            Four stages, one point of contact.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div className="relative h-full p-6 rounded-2xl bg-white border border-line shadow-premium hover:shadow-premium-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-muted">{s.n}</span>
                  <span className="font-mono text-[10px] tracking-wider text-primary border border-primary/30 rounded-full px-2 py-0.5">
                    {s.status}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-lg mb-2 text-ink">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 -right-4 w-8 h-px bg-line" />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
