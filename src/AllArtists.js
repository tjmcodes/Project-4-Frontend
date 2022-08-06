
import React from 'react'

function AllArtists() {
  const [artists, setArtists] = React.useState([])

  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch('/api/artists')
      const json = await res.json()
      setArtists(json)
    }
    getData()
  }, [])

  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <h1 className="text-3xl text-gray-700 font-bold mb-5"> All the Artists </h1>
      <div className="text-gray-500 text-lg">
        {artists.map(artists => 
        <><h2 key={artists.artistName}>{artists.artistName}</h2>
            <img key={artists.id} src={artists.profileImage} alt={""}></img>
            <p key={artists.location}>{artists.location}</p>
            <p key={artists.price}>£{artists.price}</p>
            </>)}
        {console.log(artists)}
      </div>
    </div>
  )
}

export default AllArtists

