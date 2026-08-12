import { useInView } from '../hooks/useReveal';

/**
 * Wraps children in a scroll-triggered fade/rise reveal.
 * `delay` is in ms and staggers nicely inside .map() lists.
 */
export default function Reveal({ children, as: Tag = 'div', delay = 0, scale = false, className = '' }) {
  const [ref, inView] = useInView();

  return (
    <Tag
      ref={ref}
      className={`${scale ? 'reveal-scale' : 'reveal'} ${inView ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  );
}
