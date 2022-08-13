import React from 'react'
import LandingPage from './LandingPage.js'
import AllVenues from './AllVenues.js'
import AllArtists from './AllArtists.js'
import ArtistRegister from './ArtistRegister.js'
import ArtistLogin from './ArtistLogin.js'
import VenueLogin from './VenueLogin.js'
import ShowArtist from './ShowArtist.js'
import ShowVenue from './ShowVenue.js'
import StartJourney from './StartJourney.js'
import ArtistStart from './ArtistStart.js'
import VenueStart from './VenueStart.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import VenueRegister from './VenueRegister.js'
import ArtistDashboard from './ArtistDashboard.js'
// import VenueDashboard from './VenueDashboard.js'
import NavBar from './NavBar.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/nav' element={<NavBar />} />
        <Route path='/venues' element={<AllVenues />} />
        <Route path='/show-venue/:venueId' element={<ShowVenue />} />
        <Route path='/artists' element={<AllArtists />} />
        <Route path='/show-artist/:artistId' element={<ShowArtist />} />
        <Route path='/artist-register' element={<ArtistRegister />} />
        <Route path='/artist-login' element={<ArtistLogin />} />  
        <Route path='/venue-login' element={<VenueLogin />} />
        <Route path='/startjourney' element={<StartJourney/> } />
        <Route path='/artiststart' element={<ArtistStart />} />
        <Route path='/venuestart' element={<VenueStart />} />
        <Route path='/venue-register' element={<VenueRegister/>} />
        <Route path='/artist-dashboard' element={<ArtistDashboard/>} />
        {/* <Route path='/venue-dashboard' element={<VenueDashboard />} /> */}
      </Routes>
    </Router>
  )
}

export default App
