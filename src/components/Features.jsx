import React from 'react'
import { Puzzle, Sparkles, Layers, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: Puzzle,
    title: 'Modular Blocks',
    desc: 'Compose interfaces like stacking bricks — simple, fun, and flexible.'
  },
  {
    icon: Sparkles,
    title: 'Real-time Animations',
    desc: 'Smooth 3D motion powered by Spline for immersive experiences.'
  },
  {
    icon: Layers,
    title: 'Tailwind Styling',
    desc: 'Clean, modern UI with utility-first classes and responsive design.'
  },
  {
    icon: ShieldCheck,
    title: 'API Ready',
    desc: 'Connect to a backend instantly to store progress and content.'
  }
]

export default function Features() {
  return (
    <section id="get-started" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur transition hover:bg-white/10">
            <div className="mb-4 inline-flex rounded-xl bg-orange-500/20 p-3 text-orange-200">
              <f.icon size={22} />
            </div>
            <h3 className="mb-1 text-lg font-semibold">{f.title}</h3>
            <p className="text-sm text-white/70">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
