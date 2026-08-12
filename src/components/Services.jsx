import { Code2, ShoppingCart, Search, Megaphone, ServerCog, LineChart } from 'lucide-react';
import Reveal from './Reveal';

const services = [
  {
    icon: Code2,
    tag: 'BUILD',
    title: 'Web Design & Development',
    desc: 'Fast, responsive marketing sites and web apps built on React, Next.js, or your CMS of choice — designed to convert, not just look good.',
  },
  {
    icon: ShoppingCart,
    tag: 'SELL',
    title: 'E-commerce',
    desc: 'Shopify, WooCommerce, or custom storefronts. Product catalogues, checkout flows, and payment gateways set up to actually sell.',
  },
  {
    icon: Search,
    tag: 'RANK',
    title: 'SEO',
    desc: 'Technical audits, on-page fixes, content strategy, and link building focused on organic traffic that turns into signups.',
  },
  {
    icon: Megaphone,
    tag: 'GROW',
    title: 'Digital Marketing',
    desc: 'Paid search, social campaigns, and content marketing calibrated to your budget — every rupee tracked back to results.',
  },
  {
    icon: ServerCog,
    tag: 'MANAGE',
    title: 'Website Management',
    desc: 'Ongoing updates, backups, uptime monitoring, and security patches. We watch it so a 2am outage isn\u2019t your problem alone.',
  },
  {
    icon: LineChart,
    tag: 'MEASURE',
    title: 'Analytics & Reporting',
    desc: 'Dashboards that show what\u2019s working — traffic, conversion, and campaign performance in language a founder actually needs.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 border-b border-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl mb-16">
            <span className="font-mono text-xs uppercase tracking-wider text-primary">What we run</span>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl mt-3 tracking-tight text-ink">
              Everything a growing business's web presence needs, under one roof.
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, tag, title, desc }, i) => (
            <Reveal key={title} delay={i * 70}>
              <div className="h-full bg-white p-8 rounded-2xl border border-line shadow-premium hover:shadow-premium-lg hover:-translate-y-1.5 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center group-hover:bg-primary group-hover:rotate-6 transition-all duration-300">
                    <Icon size={22} className="text-primary group-hover:text-white transition-colors" strokeWidth={1.5} />
                  </div>
                  <span className="font-mono text-[10px] tracking-wider text-muted border border-line rounded-full px-2 py-0.5 group-hover:border-signal-ink/50 group-hover:text-signal-ink transition-colors">
                    {tag}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-lg mb-2 text-ink">{title}</h3>
                <p className="text-sm text-muted leading-relaxed">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
