import Hero from './components/Hero';
import Header from './components/Header';
import Services from './components/Services';
import About from './components/About';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <About />
      <section
        id="section-3"
        className="min-h-screen flex items-center justify-center text-primary"
      >
        <h1 className="text-5xl">Contact</h1>
      </section>
      <Footer />
    </main>
  );
}
