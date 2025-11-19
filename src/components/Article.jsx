import React from 'react'
import { useParams, Link } from 'react-router-dom'

export default function Article() {
  const { id } = useParams()

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
      <Link to="/results" className="text-[#079992] hover:underline">← Vissza</Link>
      <header className="mt-6">
        <h1 className="text-3xl font-bold text-[#0A3D62]">Esemény #{id} – Címsor</h1>
        <p className="text-sm text-[#0A3D62]/70 mt-1">2024.12.12. · Veszprém</p>
      </header>

      <article className="prose max-w-none prose-p:text-[#0A3D62] prose-headings:text-[#0A3D62] mt-6">
        <p>Szövegtartalom helye: részletes beszámoló az eseményről, kulcspillanatok, játékosaink teljesítménye.</p>
        <h3>Játékoseredmények</h3>
        <ul>
          <li>Nagy Ádám – 1/1</li>
          <li>Kiss Dóra – 0.5/1</li>
        </ul>
        <h3>Fotógaléria</h3>
        <div className="grid gap-3 grid-cols-2">
          <img className="rounded" src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop" alt="" />
          <img className="rounded" src="https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM1MTI1ODN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="" />
        </div>
        <h3>PGN szekció</h3>
        <div className="rounded border border-dashed border-[#82ccdd] p-4 text-sm text-[#0A3D62]/70">PGN megjelenítő helye</div>
      </article>
    </div>
  )
}
