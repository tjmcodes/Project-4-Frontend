// import React from 'react'
// import { useParams, Link } from 'react-router-dom'
// import heart from './images/heart.jpg'
// import unheart from './images/unheart.jpg'
// import NavBar from './NavBar.js'
// import moment from 'moment'

// function ArtistDashboard() {
//   const [artist, setArtist] = React.useState([])
//   const [venues, setVenues] = React.useState([])
//   const [like, setLike] = React.useState(false)
//   const [activeLike, setactivelike] = React.useState()
//   const { artistId } = useParams()

//   React.useEffect(() => {
//     const getData = async () => {
//       const res = await fetch(`/api/artists/${artistId}`)
//       const json = await res.json()
//       setArtist(json)
//     }
//     getData()
//   }, [artistId])

//   // React.useEffect(() => {
//   //   const getData = async () => {
//   //     const res = await fetch('/api/venues')
//   //     const json = await res.json()
//   //     setVenues(json)
//   //   }
//   //   getData()
//   // }, [])

  

//   return <div className="bg-black">
//     <NavBar />
//     {artist ? (
//       <>
//         <p>{artist.username}</p>
//       </>

//     ) : (
//       <p>...loading</p>
//     )}



//   </div>
// }

// export default ArtistDashboard
