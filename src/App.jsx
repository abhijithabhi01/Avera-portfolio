import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoStrip from './components/LogoStrip';
import Services from './components/Services';
import ForStartups from './components/ForStartups';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTAFooter from './components/CTAFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        <Services />
        <ForStartups />
        <Process />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <FAQ />
      </main>
      <CTAFooter />
    </div>
  );
}
