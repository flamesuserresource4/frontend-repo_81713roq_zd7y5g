import React, { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Kezdőlap' },
  { to: '/training', label: 'Edzések' },
  { to: '/team', label: 'Sportolóink' },
  { to: '/results', label: 'Eredményeink' },
  { to: '/history', label: 'Történetünk' },
  { to: '/gallery', label: 'Galéria' },
  { to: '/contact', label: 'Kapcsolat' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#f2f2f2] bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded bg-[#079992] text-white grid place-items-center font-bold">PE</div>
          <div className="leading-tight">
            <div className="font-bold text-[#0A3D62] tracking-tight">Pannon Egyetem</div>
            <div className="text-xs text-[#079992]">Sakk Klubja</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? 'text-[#079992]' : 'text-[#0A3D62]/80 hover:text-[#0A3D62]'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="inline-flex items-center justify-center rounded-md border border-[#0A3D62]/10 p-2 text-[#0A3D62] md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#f2f2f2] bg-white md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded px-2 py-2 text-sm font-medium ${isActive ? 'text-[#079992] bg-[#82ccdd]/10' : 'text-[#0A3D62]/80 hover:text-[#0A3D62]'} `
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
