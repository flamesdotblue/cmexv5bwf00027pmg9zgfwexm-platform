import { motion } from 'framer-motion';

const items = [
  {
    title: 'Nebula Lounge',
    desc: 'Sip chroma cocktails as auroras ripple across the observation dome.',
    gradient: 'from-cyan-400/20 via-fuchsia-400/10 to-violet-500/10',
  },
  {
    title: 'Starlight Spa',
    desc: 'Float through mineral clouds and infrared stardust saunas.',
    gradient: 'from-violet-400/20 via-indigo-400/10 to-cyan-400/10',
  },
  {
    title: 'Cosmo Coaster',
    desc: 'Ride the edge of gravity with a panoramic galaxy rollercoaster.',
    gradient: 'from-fuchsia-400/20 via-pink-400/10 to-cyan-400/10',
  },
];

export default function Experiences() {
  return (
    <section id="experiences" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Experiences beyond Earth.</h2>
          <p className="mt-3 text-white/70">Curated moments that dissolve the line between science and wonder.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6`}
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${card.gradient}`} />
              <div className="relative z-10">
                <div className="h-40 w-full rounded-xl bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.08),transparent_60%)] border border-white/10" />
                <h3 className="mt-4 text-lg font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm text-white/70">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
