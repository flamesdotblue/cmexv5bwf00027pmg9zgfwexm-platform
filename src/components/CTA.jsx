export default function CTA() {
  return (
    <section id="book" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/3 -top-12 h-72 w-72 rounded-full bg-fuchsia-400/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-500/20 via-violet-500/20 to-cyan-400/20 p-8 sm:p-12 backdrop-blur">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Book your orbit at Spacy</h2>
          <p className="mt-3 max-w-2xl text-white/80">Launch windows open monthly. Reserve now and receive complimentary shuttle transfers and a guided constellation tour.</p>
          <form className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
            <input type="text" placeholder="Full name" className="col-span-1 md:col-span-2 rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/60" />
            <input type="email" placeholder="Email" className="col-span-1 rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/60" />
            <button type="submit" className="col-span-1 rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-4 py-3 font-semibold text-black shadow-lg shadow-fuchsia-500/20 hover:brightness-110 transition">Request Booking</button>
          </form>
          <p className="mt-4 text-xs text-white/60">By requesting a booking, you agree to our orbital terms and stellar conditions.</p>
        </div>
        <footer className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50">
          <p>© {new Date().getFullYear()} Spacy Space Hotel. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-2 sm:mt-0">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#experiences" className="hover:text-white transition">Experiences</a>
            <a href="#hero" className="hover:text-white transition">Back to top</a>
          </div>
        </footer>
      </div>
    </section>
  );
}
