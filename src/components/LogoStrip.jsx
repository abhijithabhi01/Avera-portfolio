const industries = ['SaaS', 'D2C & E-commerce', 'Fintech', 'Healthtech', 'EdTech', 'Marketplaces', 'Hospitality', 'Professional Services'];
const loopItems = [...industries, ...industries];

export default function LogoStrip() {
  return (
    <section className="border-y border-line py-8 bg-surface/50 overflow-hidden" aria-label="Industries Avera works with">
      <p className="text-center font-mono text-xs uppercase tracking-wider text-muted mb-6">
        Built for founders and teams across —
      </p>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-surface to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-surface to-transparent z-10" />
        <div className="flex w-max marquee-track">
          {loopItems.map((n, i) => (
            <span
              key={`${n}-${i}`}
              className="font-display text-lg text-muted/80 hover:text-primary transition-colors px-6 whitespace-nowrap"
            >
              {n}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
