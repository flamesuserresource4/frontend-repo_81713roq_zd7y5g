import React from 'react'
import { Link } from 'react-router-dom'

const colors = {
  navy: '#0A3D62',
  teal: '#079992',
  lightBlue: '#82ccdd',
  white: '#ffffff',
  gray: '#f2f2f2',
}

function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-[#0A3D62]">{title}</h2>
      {subtitle && <p className="text-[#0A3D62]/70 mt-1">{subtitle}</p>}
    </div>
  )
}

export default function Homepage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative">
        <img
          src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1600&auto=format&fit=crop"
          alt="Chess hero"
          className="h-[60vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0A3D62]/80 via-[#0A3D62]/40 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-4">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-sm">Pannon Egyetem Sakk Klubja</h1>
            <p className="mt-3 text-lg md:text-xl text-white/90">Közösség. Tudás. Verseny.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/training" className="rounded-md bg-[#079992] px-5 py-3 text-white font-semibold hover:bg-[#068b85] transition">Jelentkezés edzésekre</Link>
              <Link to="/team" className="rounded-md bg-white/90 px-5 py-3 text-[#0A3D62] font-semibold hover:bg-white transition">Sportolóink</Link>
              <Link to="/results" className="rounded-md border border-white/60 bg-white/10 px-5 py-3 text-white font-semibold hover:bg-white/20 transition">Eredményeink</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming trainings */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <SectionTitle title="Következő edzések" subtitle="Csatlakozz hozzánk a következő alkalmakon" />
        <div className="grid gap-6 md:grid-cols-3">
          {[1,2,3].map((i) => (
            <div key={i} className="rounded-xl border border-[#f2f2f2] bg-white p-5 shadow-sm">
              <div className="text-sm text-[#079992] font-semibold">2025. 01. {10+i} · 17:00</div>
              <h3 className="mt-1 text-lg font-bold text-[#0A3D62]">Edzés #{i}</h3>
              <p className="text-sm text-[#0A3D62]/70">Helyszín: PE Sportközpont · Kezdő/haladó vegyes</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-[#0A3D62]/70">Szabad helyek: {10 - i}</span>
                <Link to="/training" className="rounded-md bg-[#079992] px-4 py-2 text-white text-sm font-semibold">Jelentkezés</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest articles */}
      <section className="bg-[#f2f2f2]">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <SectionTitle title="Friss hírek és eredmények" />
          <div className="grid gap-6 md:grid-cols-3">
            {[1,2,3].map((i) => (
              <Link key={i} to="/results/placeholder" className="group rounded-xl overflow-hidden border border-[#e9e9e9] bg-white shadow-sm">
                <img src={`https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop`} alt="article" className="h-44 w-full object-cover transition group-hover:scale-[1.02]" />
                <div className="p-5">
                  <div className="text-xs text-[#0A3D62]/70">2024. 12. 12.</div>
                  <h3 className="mt-1 text-lg font-bold text-[#0A3D62]">Verseny beszámoló #{i}</h3>
                  <p className="mt-1 text-sm text-[#0A3D62]/70">Rövid összefoglaló a hétvégi megmérettetésről és a csapat teljesítményéről.</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <SectionTitle title="Rólunk" />
            <p className="text-[#0A3D62]/80 leading-relaxed">A Pannon Egyetem Sakk Klubja közösséget épít: kezdőktől a versenyzőkig mindenkit várunk. Célunk a tudásfejlesztés, sportolói szemlélet és a versenyeken való sikeres részvétel. Edzéseink modern, támogató környezetben zajlanak, hangsúlyt fektetve a stratégiai gondolkodásra és csapatmunkára.</p>
            <div className="mt-6">
              <Link to="/history" className="text-[#079992] font-semibold hover:underline">Történetünk megtekintése →</Link>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border border-[#f2f2f2]">
            <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1200&auto=format&fit=crop" alt="about" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#f2f2f2] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="https://images.unsplash.com/photo-1665227424931-165a0b9a809c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQYW5ub24lMjBFZ3lldGVtfGVufDB8MHx8fDE3NjM1NDkyODh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Pannon Egyetem" className="h-8 w-auto" />
            <span className="text-sm text-[#0A3D62]/70">© {new Date().getFullYear()} Pannon Egyetem Sakk Klubja</span>
          </div>
          <div className="flex items-center gap-4 text-[#0A3D62]/80">
            <a href="#" aria-label="Facebook" className="hover:text-[#079992]">Facebook</a>
            <a href="#" aria-label="Instagram" className="hover:text-[#079992]">Instagram</a>
            <a href="/contact" className="hover:text-[#079992]">Kapcsolat</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
