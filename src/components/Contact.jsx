import React from 'react'

export default function Contact() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
      <h1 className="text-3xl font-bold text-[#0A3D62] mb-6">Kapcsolat</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#0A3D62]">Név</label>
            <input className="mt-1 w-full rounded-md border border-[#e6e6e6] p-2 focus:outline-none focus:ring-2 focus:ring-[#82ccdd]" placeholder="Teljes neved" />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#0A3D62]">Email</label>
            <input type="email" className="mt-1 w-full rounded-md border border-[#e6e6e6] p-2 focus:outline-none focus:ring-2 focus:ring-[#82ccdd]" placeholder="email@pelda.hu" />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#0A3D62]">Üzenet</label>
            <textarea rows="5" className="mt-1 w-full rounded-md border border-[#e6e6e6] p-2 focus:outline-none focus:ring-2 focus:ring-[#82ccdd]" placeholder="Írd meg üzeneted..." />
          </div>
          <button type="submit" className="rounded-md bg-[#079992] px-5 py-2.5 text-white font-semibold">Küldés</button>
        </form>
        <div className="space-y-4">
          <div className="rounded-xl border border-[#f2f2f2] bg-white p-5 shadow-sm">
            <h3 className="font-semibold text-[#0A3D62] mb-2">Elérhetőség</h3>
            <p className="text-[#0A3D62]/80">Email: sakkklub@uni-pannon.hu</p>
            <p className="text-[#0A3D62]/80">Helyszín: Pannon Egyetem, PE Sportközpont</p>
          </div>
          <div className="rounded-xl overflow-hidden border border-[#f2f2f2] bg-white shadow-sm">
            <iframe title="map" src="https://www.google.com/maps?q=Pannon%20University&output=embed" className="h-64 w-full" loading="lazy" />
          </div>
          <div className="rounded-xl border border-[#f2f2f2] bg-white p-5 shadow-sm">
            <h3 className="font-semibold text-[#0A3D62] mb-2">Találkozz az edzővel</h3>
            <p className="text-[#0A3D62]/80">Vezető: Dr. Sakk Mester</p>
            <p className="text-[#0A3D62]/80">Megközelítés: Edzések előtt 10 perccel érdemes érkezni, a bejáratnál várjuk az új tagokat.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
