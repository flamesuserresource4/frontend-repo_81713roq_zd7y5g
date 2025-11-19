import React from 'react'
import { Link } from 'react-router-dom'

const posts = [
  { id: 1, title: 'Egyetemi Bajnokság 2024 – Beszámoló', date: '2024.12.12.', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop', summary: 'Részletes beszámoló a hétvégi versenyről és eredményekről.' },
  { id: 2, title: 'Rapid Kupa – Gyorshír', date: '2024.11.03.', image: 'https://images.unsplash.com/photo-1605116900847-77c07153a083?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFZ3lldGVtaSUyMEJham5va3MlQzMlQTFnJTIwMjAyNCUyMCVFMiU4MCU5M3xlbnwwfDB8fHwxNzYzNTQ5Mjg4fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', summary: 'Gyors összefoglaló a rapid tornáról.' },
  { id: 3, title: 'Csapatbajnokság – Forduló 5', date: '2024.10.20.', image: 'https://images.unsplash.com/photo-1605116900847-77c07153a083?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFZ3lldGVtaSUyMEJham5va3MlQzMlQTFnJTIwMjAyNCUyMCVFMiU4MCU5M3xlbnwwfDB8fHwxNzYzNTQ5Mjg4fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', summary: 'Izgalmas forduló, kulcspillanatok és tanulságok.' },
]

export default function Results() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
      <h1 className="text-3xl font-bold text-[#0A3D62] mb-6">Eredményeink</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((p) => (
          <Link key={p.id} to={`/results/${p.id}`} className="group rounded-xl overflow-hidden border border-[#e9e9e9] bg-white shadow-sm">
            <img src={p.image} alt={p.title} className="h-48 w-full object-cover transition group-hover:scale-[1.02]" />
            <div className="p-5">
              <div className="text-xs text-[#0A3D62]/70">{p.date}</div>
              <h3 className="mt-1 text-lg font-bold text-[#0A3D62]">{p.title}</h3>
              <p className="mt-1 text-sm text-[#0A3D62]/70">{p.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
