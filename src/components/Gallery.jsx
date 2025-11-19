import React from 'react'

const images = [
  'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518600577031-39b7d303a87e?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1591729455000-2919b017ebce?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop',
]

export default function Gallery() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
      <h1 className="text-3xl font-bold text-[#0A3D62] mb-6">Galéria</h1>
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 [column-fill:_balance]
      *:mb-4">
        {images.map((src, idx) => (
          <img key={idx} src={src} alt="galéria" className="w-full rounded-lg border border-[#f2f2f2]" />
        ))}
      </div>
    </div>
  )
}
