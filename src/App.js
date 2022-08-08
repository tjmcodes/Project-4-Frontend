import React from 'react'
import LandingPage from './LandingPage.js'
import AllVenues from './AllVenues.js'
import AllArtists from './AllArtists.js'
import ArtistRegister from './ArtistRegister.js'
import VenueRegister from './VenueRegister.js'
import ArtistLogin from './ArtistLogin.js'
import VenueLogin from './VenueLogin.js'
import ShowArtist from './ShowArtist.js'
import ShowVenue from './ShowVenue.js'
import StartJourney from './StartJourney.js'
import ArtistStart from './ArtistStart.js'
import VenueStart from './VenueStart.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/venues' element={<AllVenues />} />
        <Route path='/show-venue/:venueid' element={<ShowVenue />} />
        <Route path='/artists' element={<AllArtists />} />
        <Route path='/show-artist/:artistid' element={<ShowArtist />} />
        <Route path='/artist-register' element={<ArtistRegister />} />
        <Route Path='/venue-register' element={<VenueRegister /> } />
        <Route path='/artist-login' element={<ArtistLogin />} />  
        <Route path='/venue-login' element={<VenueLogin />} />
        <Route path='/startjourney' element={<StartJourney/> } />
        <Route path='/artiststart' element={<ArtistStart />} />
        <Route path='/venuestart' element={<VenueStart />} />
      </Routes>
    </Router>
  )
}

export default App
