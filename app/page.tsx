import Hero from './components/Hero';
import Header from './components/Header/Header';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <section
        id="section-1"
        className="min-h-screen flex items-center justify-center bg-surface text-primary"
      >
        <h1 className="text-5xl">About Us</h1>
      </section>
      <section
        id="section-2"
        className="min-h-screen flex items-center justify-center bg-neutral text-primary"
      >
        <h1 className="text-5xl">Services</h1>
      </section>
      <section
        id="section-3"
        className="min-h-screen flex items-center justify-center bg-dark text-primary"
      >
        <h1 className="text-5xl">Contact</h1>
      </section>
    </main>
  );
}
