import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useInView, useCountUp } from '../hooks/useReveal';
import Magnetic from './Magnetic';
import Reveal from './Reveal';

const metrics = [
  { label: 'AVG UPTIME', value: 99.98, suffix: '%', decimals: 2 },
  { label: 'AVG LOAD TIME', value: 0.8, suffix: 's', decimals: 1 },
  { label: 'AVG SEO SCORE', value: 96, suffix: '/100', decimals: 0 },
  { label: 'SITES MANAGED', value: 140, suffix: '+', decimals: 0 },
];

function Metric({ m, inView }) {
  const val = useCountUp(m.value, inView, { decimals: m.decimals, duration: 1600 });
  return (
    <div className="px-5 py-6">
      <div className="font-mono text-[11px] tracking-wider text-muted mb-1">{m.label}</div>
      <div className="font-display text-2xl font-semibold text-ink tabular-nums">
        {val}{m.suffix}
      </div>
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef(null);
  const [chartRef, chartInView] = useInView();

  const handleMouseMove = (e) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty('--x', `${x}%`);
    el.style.setProperty('--y', `${y}%`);
  };

  return (
    <section
      id="top"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 mesh-bg dot-grid overflow-hidden"
    >
      <div className="cursor-glow hidden lg:block" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        

        <Reveal delay={80}>
          <h1 className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight max-w-3xl text-ink">
            Your website isn't a project. It's{' '}
            <span className="italic text-primary">infrastructure.</span>
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 text-lg text-muted max-w-xl leading-relaxed">
            Avera is a digital marketing and web development studio. We design, build, host, and grow
            web presence for founders and businesses — marketing sites, e-commerce stores, and the SEO
            and campaigns that bring people to them. We stay on after launch so nothing you built goes stale.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Magnetic>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-white font-semibold shadow-premium-lg hover:bg-primary transition-colors"
              >
                Start a project
                <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
            <a
              href="#services"
              className="px-6 py-3 rounded-full border border-line text-ink hover:border-ink/40 hover:bg-surface transition-colors font-medium"
            >
              See what we manage
            </a>
          </div>
        </Reveal>

        {/* Signature element: the growth ledger — animated live status console */}
        <div
          ref={chartRef}
          className="relative mt-16 rounded-2xl border border-line bg-white shadow-premium-lg overflow-hidden scan-line reveal-scale is-visible"
        >
          <div className="flex items-center justify-between px-5 py-3 border-b border-line bg-surface/60">
            <div className="flex items-center gap-2 font-mono text-xs text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-signal-ink status-dot" />
              LIVE — the growth ledger
            </div>
            <span className="font-mono text-xs text-muted hidden sm:inline">updated moments ago</span>
          </div>

          {/* animated ascending line chart */}
          <div className="px-5 pt-6 pb-2 border-b border-line">
            <svg viewBox="0 0 600 140" className="w-full h-28 sm:h-32" preserveAspectRatio="none">
              <defs>
                <linearGradient id="fillGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1f3af0" stopOpacity="0.14" />
                  <stop offset="100%" stopColor="#1f3af0" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,120 L0,110 C 60,105 90,95 130,88 C 180,80 210,70 260,58 C 310,46 340,50 390,38 C 440,26 470,20 520,14 C 550,10 580,6 600,4 L600,120 Z"
                fill="url(#fillGrad)"
              />
              <path
                d="M0,110 C 60,105 90,95 130,88 C 180,80 210,70 260,58 C 310,46 340,50 390,38 C 440,26 470,20 520,14 C 550,10 580,6 600,4"
                fill="none"
                stroke="#1f3af0"
                strokeWidth="2.5"
                strokeLinecap="round"
                className={`draw-path ${chartInView ? 'is-visible' : ''}`}
                style={{ '--path-length': 900 }}
              />
              <circle cx="600" cy="4" r="5" fill="#a6ff2e" stroke="#0b0c10" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-line">
            {metrics.map((m) => (
              <Metric key={m.label} m={m} inView={chartInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
