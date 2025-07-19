import Hero from './components/Hero';
import Header from './components/Header';
import Services from './components/Services';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <section
        id="section-2"
        className="min-h-screen flex items-center justify-center text-primary"
      >
        <h1 className="text-5xl">Services</h1>
      </section>
      <section
        id="section-3"
        className="min-h-screen flex items-center justify-center text-primary"
      >
        <h1 className="text-5xl">Contact</h1>
      </section>
    </main>
  );
}
