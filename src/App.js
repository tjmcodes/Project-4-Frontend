import React from 'react'
import AllArtists from './AllArtists.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllArtists />} />
      </Routes>
    </Router>
  )
}

export default App
