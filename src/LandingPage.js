import React from 'react'

function LandingPage() {
  const [artists, setArtists] = React.useState([])
  const [venues, setVenues] = React.useState([])

  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch('/api/artists')
      const json = await res.json()
      setArtists(json)
    }
    getData()
  }, [])

  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch('/api/venues')
      const json = await res.json()
      setVenues(json)
    }
    getData()
  }, [])

  return ( <>
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <h1 className="text-3xl text-gray-700 font-bold mb-5"> All the Artists </h1>
      <div className="text-gray-500 text-lg">
        {artists.map(artist => 
          <div key={artist.artistName}>
            <h2>{artist.artistName}</h2>
            <img src={artist.backgroundCardImage} alt={""}></img>
            <p>{artist.location}</p>
            <p>£{artist.price}</p>
            <p>{artist.socialMediaUrl1}</p>
            <p>{artist.socialMediaUrl2}</p>
            <p>{artist.socialMediaUrl3}</p>
          </div>
        )}
        {console.log(artists)}
      </div>
    </div>
    
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <h1 className="text-3xl text-gray-700 font-bold mb-5"> All the Venues </h1>
      <div className="text-gray-500 text-lg">
        {venues.map(venue => 
        <div key={venue.venueName}><h2>{venue.venueName}</h2>
            <img src={venue.backgroundCardImage} alt={""}></img>
            <p>{venue.location}</p>
            <p>£{venue.budget}</p>
            <p>{venue.socialMediaUrl1}</p>
            <p>{venue.socialMediaUrl2}</p>
            <p>{venue.socialMediaUrl3}</p>
            </div>)}
        {console.log(venues)}
      </div>
    </div>
  </>
  )
}

export default LandingPage

