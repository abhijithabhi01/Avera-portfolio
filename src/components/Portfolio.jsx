import Reveal from './Reveal';

const projects = [
  {
    name: 'SaaS Platform',
    category: 'Website rebuild + SEO',
    result: 'Organic traffic grew steadily within 4 months',
    gradient: 'from-primary/20 via-primary/5 to-transparent',
  },
  {
    name: 'D2C Storefront',
    category: 'E-commerce build',
    result: 'Page load time cut to under 1 second',
    gradient: 'from-signal/25 via-signal/5 to-transparent',
  },
  {
    name: 'Fintech Product',
    category: 'Managed hosting & monitoring',
    result: 'Uptime held above 99.9% across the retainer',
    gradient: 'from-primary/15 via-signal/10 to-transparent',
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="py-24 lg:py-32 border-b border-line bg-surface/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-wider text-primary">What the work looks like</span>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl mt-3 tracking-tight mb-3 max-w-xl text-ink">
            Representative outcomes across recent engagement types.
          </h2>
          <p className="text-sm text-muted mb-16 max-w-xl">
            Illustrative examples of the kind of work Avera takes on — client names withheld under NDA.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <div className="rounded-2xl border border-line overflow-hidden bg-white shadow-premium hover:shadow-premium-lg hover:-translate-y-1.5 transition-all duration-300 group h-full">
                <div className={`h-40 bg-gradient-to-br ${p.gradient} flex items-end p-6 relative overflow-hidden`}>
                  <div className="absolute -right-6 -top-6 w-28 h-28 rounded-full bg-white/50 blur-2xl group-hover:scale-125 transition-transform duration-500" />
                  <span className="font-display font-semibold text-2xl relative text-ink">{p.name}</span>
                </div>
                <div className="p-6 border-t border-line">
                  <p className="font-mono text-xs text-muted uppercase tracking-wider mb-3">{p.category}</p>
                  <p className="text-sm font-medium text-primary">{p.result}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
