import React from 'react'
import Spline from '@splinetool/react-spline'
import { ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/95Gu7tsx2K-0F3oi/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay for readability (does not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/20 to-slate-900/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-3 py-1 text-sm text-orange-200 backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-orange-400" />
          Live 3D — Playful building blocks
        </div>
        <h1 className="text-balance text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
          Build playful experiences with 3D blocks
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-lg text-orange-100/90 sm:text-xl">
          A shiny, animated plus of orange building blocks — made for education, gaming, and creative apps.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#get-started"
            className="group inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-white shadow-lg shadow-orange-500/30 transition hover:-translate-y-0.5 hover:bg-orange-600"
          >
            Get Started
            <ArrowRight className="transition-transform group-hover:translate-x-0.5" size={18} />
          </a>
          <a
            href="/test"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-white backdrop-blur transition hover:bg-white/20"
          >
            <Play size={18} />
            Backend Test
          </a>
        </div>
      </div>
    </section>
  )
}
