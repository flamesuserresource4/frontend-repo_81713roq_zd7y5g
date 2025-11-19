import React from 'react'

const sessions = [
  { id: 1, date: '2025.01.12', time: '17:00', location: 'PE Sportközpont', type: 'Kezdő', spots: 8 },
  { id: 2, date: '2025.01.15', time: '18:00', location: 'PE Sportközpont', type: 'Haladó', spots: 5 },
  { id: 3, date: '2025.01.20', time: '17:30', location: 'PE Aula', type: 'Vegyes', spots: 9 },
]

export default function Training() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
      <h1 className="text-3xl font-bold text-[#0A3D62] mb-6">Edzések</h1>
      <p className="text-[#0A3D62]/80 mb-6">Válaszd ki a számodra megfelelő időpontot és jelentkezz az edzésre.</p>
      <div className="grid gap-6 md:grid-cols-3">
        {sessions.map((s) => (
          <div key={s.id} className="rounded-xl border border-[#f2f2f2] bg-white p-5 shadow-sm">
            <div className="text-sm text-[#079992] font-semibold">{s.date} · {s.time}</div>
            <h3 className="mt-1 text-lg font-bold text-[#0A3D62]">{s.type} edzés</h3>
            <p className="text-sm text-[#0A3D62]/70">Helyszín: {s.location}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className={`text-sm ${s.spots > 0 ? 'text-[#0A3D62]/70' : 'text-red-600'}`}>Szabad helyek: {s.spots}</span>
              <button className="rounded-md bg-[#079992] px-4 py-2 text-white text-sm font-semibold disabled:opacity-50" disabled={s.spots === 0}>Jelentkezés</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
