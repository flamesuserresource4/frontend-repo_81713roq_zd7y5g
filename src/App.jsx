import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Background accents */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <Hero />
      <Features />
      <Footer />
    </div>
  )
}

export default App
