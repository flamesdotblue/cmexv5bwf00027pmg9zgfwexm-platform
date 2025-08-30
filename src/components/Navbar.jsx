import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5 border border-white/10">
          <div className="h-14 flex items-center justify-between px-4">
            <a href="#hero" className="flex items-center gap-2 font-semibold tracking-tight">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-cyan-400 text-black">
                <Rocket className="h-5 w-5" />
              </span>
              <span className="text-white">Spacy</span>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
              <a href="#features" className="hover:text-white transition">Features</a>
              <a href="#experiences" className="hover:text-white transition">Experiences</a>
              <a href="#book" className="hover:text-white transition">Book</a>
            </nav>
            <a href="#book" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-4 py-2 text-sm font-medium text-black shadow-lg shadow-fuchsia-500/20 hover:brightness-110 transition">
              Book Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
