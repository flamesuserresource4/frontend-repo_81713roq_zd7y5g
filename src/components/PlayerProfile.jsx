import React from 'react'
import { useParams, Link } from 'react-router-dom'

const playerData = {
  1: { id: 1, name: 'Nagy Ádám', elo: 2120, photo: 'https://images.unsplash.com/photo-1603575449299-b3631cb39812?q=80&w=1200&auto=format&fit=crop', bio: 'Stratégiai beállítottságú első táblás játékos, kedvenc megnyitásai a spanyol és a szicíliai védelmeken alapulnak.', results: ['PE Open 2024 – 1. hely', 'Megyei Csapatbajnokság – 2. tábla 6/8'], bestGames: ['Carlsen – Nagy, elemzés helye', 'Nagy – Rapport, elemzés helye'] },
  2: { id: 2, name: 'Kiss Dóra', elo: 1985, photo: 'https://images.unsplash.com/photo-1520975922203-b4141588df8b?q=80&w=1200&auto=format&fit=crop', bio: 'Taktikus, támadószellemű játékos. Kedvenc állásai a király elleni támadások.', results: ['Rapid Kupa – 2. hely', 'Egyetemi Liga – Legjobb női játékos'], bestGames: ['Kiss – Polgár, elemzés helye'] },
  3: { id: 3, name: 'Szabó Péter', elo: 2050, photo: 'https://images.unsplash.com/photo-1541534401786-2077eed87a74?q=80&w=1200&auto=format&fit=crop', bio: 'Pozíciós szemléletű középső táblás, kiváló végjáték-technikával.', results: ['PE Blitz – 1. hely', 'Városi Open – 3. hely'], bestGames: ['Szabó – Anand, elemzés helye'] },
  4: { id: 4, name: 'Tóth Lili', elo: 1830, photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop', bio: 'Ifjú tehetség, stabil fejlődési pályán, erős taktikai érzékkel.', results: ['Junior Open – 1. hely', 'Rapid Liga – 4. hely'], bestGames: ['Tóth – Bán, elemzés helye'] },
}

export default function PlayerProfile() {
  const { id } = useParams()
  const player = playerData[id]

  if (!player) return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <p className="text-[#0A3D62]">Ismeretlen játékos.</p>
    </div>
  )

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
      <Link to="/team" className="text-[#079992] hover:underline">← Vissza</Link>
      <div className="mt-6 grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <img src={player.photo} alt={player.name} className="w-full rounded-xl border border-[#f2f2f2]" />
        </div>
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold text-[#0A3D62]">{player.name} <span className="text-[#079992] text-2xl">ELO {player.elo}</span></h1>
          <p className="mt-3 text-[#0A3D62]/80 leading-relaxed">{player.bio}</p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-[#f2f2f2] bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-[#0A3D62] mb-2">ELO történet</h3>
              <div className="h-40 grid place-items-center text-[#0A3D62]/50 border border-dashed border-[#82ccdd] rounded">Grafikon helye</div>
            </div>
            <div className="rounded-xl border border-[#f2f2f2] bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-[#0A3D62] mb-2">Legjobb partik</h3>
              <ul className="list-disc pl-5 text-[#0A3D62]/80">
                {player.bestGames.map((g, idx) => <li key={idx}>{g}</li>)}
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-[#f2f2f2] bg-white p-5 shadow-sm">
            <h3 className="font-semibold text-[#0A3D62] mb-2">Eredmények</h3>
            <ul className="list-disc pl-5 text-[#0A3D62]/80">
              {player.results.map((r, idx) => <li key={idx}>{r}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
