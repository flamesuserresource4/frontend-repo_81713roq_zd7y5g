import React from 'react'
import { Link } from 'react-router-dom'

const players = [
  { id: 1, name: 'Nagy Ádám', elo: 2120, photo: 'https://images.unsplash.com/photo-1603575449299-b3631cb39812?q=80&w=800&auto=format&fit=crop' },
  { id: 2, name: 'Kiss Dóra', elo: 1985, photo: 'https://images.unsplash.com/photo-1520975922203-b4141588df8b?q=80&w=800&auto=format&fit=crop' },
  { id: 3, name: 'Szabó Péter', elo: 2050, photo: 'https://images.unsplash.com/photo-1541534401786-2077eed87a74?q=80&w=800&auto=format&fit=crop' },
  { id: 4, name: 'Tóth Lili', elo: 1830, photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop' },
]

export default function Team() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
      <h1 className="text-3xl font-bold text-[#0A3D62] mb-6">Sportolóink</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {players.map((p) => (
          <div key={p.id} className="group overflow-hidden rounded-xl border border-[#f2f2f2] bg-white shadow-sm">
            <img src={p.photo} alt={p.name} className="h-56 w-full object-cover transition group-hover:scale-[1.03]" />
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-[#0A3D62]">{p.name}</h3>
                <span className="text-sm text-[#079992] font-semibold">ELO {p.elo}</span>
              </div>
              <Link to={`/team/${p.id}`} className="mt-3 inline-block rounded-md bg-[#079992] px-3 py-2 text-white text-sm font-semibold">Profil</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
