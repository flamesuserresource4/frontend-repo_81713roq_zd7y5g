import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import Training from './components/Training'
import Team from './components/Team'
import PlayerProfile from './components/PlayerProfile'
import Results from './components/Results'
import Article from './components/Article'
import History from './components/History'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-[#0A3D62]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/training" element={<Training />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team/:id" element={<PlayerProfile />} />
        <Route path="/results" element={<Results />} />
        <Route path="/results/:id" element={<Article />} />
        <Route path="/history" element={<History />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
