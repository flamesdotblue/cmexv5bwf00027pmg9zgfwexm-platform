import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Experiences from './components/Experiences';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Experiences />
        <CTA />
      </main>
    </div>
  );
}

export default App;
