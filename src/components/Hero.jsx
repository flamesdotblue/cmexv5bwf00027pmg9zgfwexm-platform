import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative h-[100dvh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black" />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="pointer-events-none"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-fuchsia-200 to-cyan-200 drop-shadow-lg">
              Spacy
            </h1>
            <p className="mt-4 max-w-2xl text-base sm:text-lg md:text-xl text-white/85">
              A luxury hotel among the stars. Zero-gravity suites, aurora-view lounges, and a cosmic rollercoaster skyline.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#book"
                className="pointer-events-auto inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-black shadow-xl shadow-fuchsia-500/30 hover:brightness-110 transition"
              >
                Reserve Your Orbit
              </a>
              <a
                href="#features"
                className="pointer-events-auto inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                Explore Features
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
