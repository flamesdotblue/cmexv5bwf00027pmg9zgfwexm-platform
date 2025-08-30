import { Rocket, Star, Shield, Wifi } from 'lucide-react';

const features = [
  {
    title: 'Zero-G Suites',
    desc: 'Panoramic galaxy views, adaptive lighting, and floating beds.',
    icon: Star,
  },
  {
    title: 'Orbital Transit',
    desc: 'Private shuttle docking and interplanetary transfer concierge.',
    icon: Rocket,
  },
  {
    title: 'Quantum Security',
    desc: 'Biometric access and shielded privacy fields for your sanctuary.',
    icon: Shield,
  },
  {
    title: 'Cosmic Wi‑Fi',
    desc: 'Faster-than-light entertainment mesh for seamless streams.',
    icon: Wifi,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-gradient-to-b from-black to-[#07070a]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Galactic comforts. Human touch.</h2>
          <p className="mt-3 text-white/70">Designed for explorers, dreamers, and stargazers—crafted with safety and serenity.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/[0.08] hover:border-white/20">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 text-black shadow-md shadow-fuchsia-500/20">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
