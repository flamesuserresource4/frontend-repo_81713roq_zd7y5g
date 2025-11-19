import React from 'react'

const milestones = [
  { year: '2005', title: 'Klub alapítása', text: 'A PE Sakk Klub hivatalos megalakulása az egyetemi sportélet részeként.' },
  { year: '2010', title: 'Első országos siker', text: 'Csapatszinten dobogós helyezés az egyetemi bajnokságon.' },
  { year: '2018', title: 'Utánpótlás program', text: 'Kezdő és haladó csoportok indítása rendszeres edzésekkel.' },
  { year: '2024', title: 'Nemzetközi szereplés', text: 'Nemzetközi tornákon való részvétel és dobogós helyezések.' },
]

export default function History() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
      <h1 className="text-3xl font-bold text-[#0A3D62] mb-8">Történetünk</h1>
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-[#82ccdd]" />
        <div className="space-y-8">
          {milestones.map((m, idx) => (
            <div key={idx} className="relative pl-10">
              <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-[#079992] border-2 border-white shadow" />
              <div className="rounded-xl border border-[#f2f2f2] bg-white p-5 shadow-sm">
                <div className="text-xs text-[#079992] font-semibold">{m.year}</div>
                <h3 className="text-lg font-bold text-[#0A3D62]">{m.title}</h3>
                <p className="text-[#0A3D62]/80">{m.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
