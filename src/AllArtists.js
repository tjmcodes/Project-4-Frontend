import React from 'react'
import unheart from './images/unheart.jpg'
import Loader from './loader.js'
import { Link } from 'react-router-dom'
import NavBar from './NavBar.js'
import { baseUrl } from "./config.js"

function AllArtists() {
  const [artists, setArtists] = React.useState([])
  const [searchparam, setSearchParams] = React.useState("")
  const [filter,setfilter] = React.useState()

  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${baseUrl}/artists`)
      const json = await res.json()
      setArtists(json)
    }
    getData()
  }, [])

  function handleselect(e) {

    const _filter = e.target.value
  
    setfilter(_filter)
  }
  function artistsSearch() {
    if (filter === "location") {
      return artists.filter((artist) => {
        return ( artist.location.toLowerCase().includes(searchparam.toLowerCase()))
      })
    } else if (filter === 'name') {
      return artists.filter((artist) => {
        return ( artist.venueName.toLowerCase().includes(searchparam.toLowerCase()))
      })
    } else {
      return artists
    }
  }
  

  return (
    <div className="bg-hero-pattern bg-cover bg-fixed min-h-screen bg-center">
      <NavBar />
      <div className=" desktop:grid desktop:grid-cols-3 tablet:block fold:block mobile:block">
        <div>
          <h1 className="text-8xl text-white font-bold  pt-20 mb-10 ml-12 font-light"> All Artists </h1>
        </div>
        <div className='col-span-2 flex flex-wrap content-center'>
          <input 
            className="ml-12 w-10/12 mt-10 bg-zinc-800 text-2xl pt-2 pb-2 pl-4 border-none"
            type="text" 
            placeholder="pick an option below and start searching"
            onChange={(e) => setSearchParams(e.target.value)}>
          </input>
          <select 
            className="ml-12 w-10/12 mt10 bg-pink-700 text-white border-none" 
            name={'filter'}
            onChange={handleselect}>
            <option>Filter by...</option>
            <option value="location">Location</option>
            <option value="name">Name</option>
          </select>    
        </div>
      </div>
      <p className='text-white ml-12 mt-10 text-xl'>Click on a card to view full Artist profile</p>
      <div className=" desktop:p-5 desktop:m-2 mx-auto laptop:p-4 laptop:m-2 tablet:m-2 fold:p-1 fold:m-1">
        {artists === [] ? <div className=" mt-20 w-full flex items-center justify-around flex-col" ><Loader /> <p className='text-white mt-5'>Venues loading please wait</p></div> :
          <div className="tablet:grid grid-cols-3">
            {artistsSearch().map((artist, index) => 
              <div className="bg-cover laptop:bg-center rounded-xl desktop:m-5 tablet:m-1 fold:mb-7" key={index} style={{ backgroundImage: `url(${ artist.backgroundCardImage })` }}>
              
                {/* V E N U E S   S O C I A L S */}
                <div className="flex justify-end tablet:items-center fold:items-center">
                  <div className="flex justify-end laptop:m-4 laptop:items-center tablet:mx-auto tablet:mt-2 fold:m-1">
                    {artist.fbUrl === "" ? null : <a className="mx-2" href={artist.fbUrl}>
                      <svg width="33" height="33" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M32.8791 4.60352C32.8791 2.39438 31.0882 0.603516 28.8791 0.603516H4.49512C2.28598 0.603516 0.495117 2.39438 0.495117 4.60352V29.7278C0.495117 31.9369 2.28598 33.7278 4.49512 33.7278H28.8791C31.0882 33.7278 32.8791 31.9369 32.8791 29.7278V4.60352Z" fill="#1877F2"/>
                        <path d="M24.7828 17.1656C24.7828 12.611 21.1396 8.88452 16.6868 8.88452C12.234 8.88452 8.59082 12.611 8.59082 17.1656C8.59082 21.3061 11.5256 24.7221 15.3712 25.3431V19.5464H13.3472V17.1656H15.3712V15.3023C15.3712 13.2321 16.5856 12.0934 18.4072 12.0934C19.318 12.0934 20.2288 12.3005 20.2288 12.3005V14.3707H19.2168C18.2048 14.3707 17.9012 14.9918 17.9012 15.6129V17.1656H20.1276L19.7228 19.5464H17.8V25.4467C21.848 24.8256 24.7828 21.3061 24.7828 17.1656Z" fill="white"/>
                      </svg>
                    </a>}
                    { artist.twitterUrl === "" ? null : <a className="mx-2" href={artist.twitterUrl}>
                      <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M32.6564 5.60352C32.6564 2.84209 30.4178 0.603516 27.6564 0.603516L5.27247 0.603516C2.51104 0.603516 0.272461 2.84209 0.272461 5.60352V28.7278C0.272461 31.4892 2.51104 33.7278 5.27246 33.7278H27.6564C30.4178 33.7278 32.6564 31.4892 32.6564 28.7278V5.60352Z" fill="#1DA1F2"/>
                        <path d="M24.5601 11.99C23.9529 12.3005 23.3457 12.404 22.6373 12.5075C23.3457 12.0935 23.8517 11.4724 24.0541 10.6443C23.4469 11.0583 22.7385 11.2654 21.9289 11.4724C21.3217 10.8513 20.4109 10.4373 19.5001 10.4373C17.375 10.4373 15.7558 12.5075 16.2618 14.5778C13.5294 14.4743 11.1006 13.1286 9.38016 11.0583C8.46936 12.611 8.97536 14.5778 10.3922 15.6129C9.88616 15.6129 9.38016 15.4059 8.87416 15.1989C8.87416 16.7516 9.98736 18.2008 11.5054 18.6148C10.9994 18.7183 10.4934 18.8218 9.98736 18.7183C10.3922 20.064 11.6066 21.0991 13.1246 21.0991C11.9102 22.0307 10.0886 22.5483 8.36816 22.3413C9.88616 23.2729 11.6066 23.894 13.4282 23.894C19.6013 23.894 23.0421 18.6148 22.8397 13.7497C23.5481 13.3356 24.1553 12.7145 24.5601 11.99Z" fill="white"/>
                      </svg>
                    </a>}
                    { artist.youTubeUrl === "" ? null : <a className="mx-2" href={artist.youTubeUrl}>
                      <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.4328 0.603516L5.04883 0.603516C2.2874 0.603516 0.0488281 2.84209 0.0488281 5.60352V28.7278C0.0488281 31.4892 2.2874 33.7278 5.04882 33.7278H27.4328C30.1942 33.7278 32.4328 31.4892 32.4328 28.7278V5.60352C32.4328 2.84209 30.1942 0.603516 27.4328 0.603516Z" fill="#FF0000"/>
                        <path d="M23.9317 13.1286C23.7293 12.404 23.2233 11.8865 22.5149 11.6794C21.3005 11.3689 16.1393 11.3689 16.1393 11.3689C16.1393 11.3689 11.0793 11.3689 9.76373 11.6794C9.05534 11.8865 8.54933 12.404 8.34693 13.1286C8.14453 14.4743 8.14453 17.1656 8.14453 17.1656C8.14453 17.1656 8.14453 19.857 8.44813 21.2027C8.65053 21.9273 9.15653 22.4448 9.86493 22.6518C11.0793 22.9624 16.2405 22.9624 16.2405 22.9624C16.2405 22.9624 21.3005 22.9624 22.6161 22.6518C23.3245 22.4448 23.8305 21.9273 24.0329 21.2027C24.3365 19.857 24.3365 17.1656 24.3365 17.1656C24.3365 17.1656 24.3365 14.4743 23.9317 13.1286ZM14.6213 19.65V14.6813L18.8717 17.1656L14.6213 19.65Z" fill="white"/>
                      </svg>
                    </a>}
                    { artist.instagramUrl === "" ? null : <a className="mx-2" href={artist.instagramUrl}>
                      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M33.2101 5.60352C33.2101 2.84209 30.9715 0.603516 28.2101 0.603516L5.82617 0.603516C3.06475 0.603516 0.826172 2.84209 0.826172 5.60352V28.7278C0.826172 31.4892 3.06475 33.7278 5.82617 33.7278H28.2101C30.9715 33.7278 33.2101 31.4892 33.2101 28.7278V5.60352Z" fill="#F00073"/>
                        <path d="M17.0177 10.1268C19.2441 10.1268 19.5477 10.1268 20.4585 10.1268C21.2681 10.1268 21.6729 10.3338 21.9765 10.4373C22.3813 10.6444 22.6849 10.7479 22.9885 11.0584C23.2921 11.369 23.4945 11.6795 23.5957 12.0936C23.6969 12.4041 23.7981 12.8181 23.8993 13.6463C23.8993 14.5779 23.8993 14.7849 23.8993 17.1657C23.8993 19.5465 23.8993 19.7535 23.8993 20.6852C23.8993 21.5133 23.6969 21.9273 23.5957 22.2379C23.3933 22.6519 23.2921 22.9624 22.9885 23.273C22.6849 23.5835 22.3813 23.7906 21.9765 23.8941C21.6729 23.9976 21.2681 24.1011 20.4585 24.2046C19.5477 24.2046 19.3453 24.2046 17.0177 24.2046C14.6901 24.2046 14.4877 24.2046 13.5769 24.2046C12.7674 24.2046 12.3626 23.9976 12.059 23.8941C11.6542 23.687 11.3506 23.5835 11.047 23.273C10.7434 22.9624 10.541 22.6519 10.4398 22.2379C10.3386 21.9273 10.2374 21.5133 10.1362 20.6852C10.1362 19.7535 10.1362 19.5465 10.1362 17.1657C10.1362 14.7849 10.1362 14.5779 10.1362 13.6463C10.1362 12.8181 10.3386 12.4041 10.4398 12.0936C10.6422 11.6795 10.7434 11.369 11.047 11.0584C11.3506 10.7479 11.6542 10.5409 12.059 10.4373C12.3626 10.3338 12.7674 10.2303 13.5769 10.1268C14.4877 10.1268 14.7913 10.1268 17.0177 10.1268ZM17.0177 8.5741C14.6901 8.5741 14.4877 8.5741 13.5769 8.5741C12.6662 8.5741 12.059 8.78112 11.553 8.98815C11.047 9.19518 10.541 9.50572 10.035 10.0233C9.52896 10.5409 9.32656 10.9549 9.02296 11.576C8.82056 12.0936 8.71936 12.7146 8.61816 13.6463C8.61816 14.5779 8.61816 14.8884 8.61816 17.1657C8.61816 19.5465 8.61816 19.7535 8.61816 20.6852C8.61816 21.6168 8.82056 22.2379 9.02296 22.7554C9.22536 23.273 9.52896 23.7906 10.035 24.3081C10.541 24.8257 10.9458 25.0327 11.553 25.3433C12.059 25.5503 12.6662 25.6538 13.5769 25.7573C14.4877 25.7573 14.7913 25.7573 17.0177 25.7573C19.2441 25.7573 19.5477 25.7573 20.4585 25.7573C21.3693 25.7573 21.9765 25.5503 22.4825 25.3433C22.9885 25.1362 23.4945 24.8257 24.0005 24.3081C24.5065 23.7906 24.7089 23.3765 25.0125 22.7554C25.2149 22.2379 25.3161 21.6168 25.4173 20.6852C25.4173 19.7535 25.4173 19.443 25.4173 17.1657C25.4173 14.8884 25.4173 14.5779 25.4173 13.6463C25.4173 12.7146 25.2149 12.0936 25.0125 11.576C24.8101 11.0584 24.5065 10.5409 24.0005 10.0233C23.4945 9.50572 23.0897 9.29869 22.4825 8.98815C21.9765 8.78112 21.3693 8.67761 20.4585 8.5741C19.5477 8.5741 19.3453 8.5741 17.0177 8.5741Z" fill="white"/>
                        <path d="M17.0177 12.7146C14.5889 12.7146 12.6662 14.6814 12.6662 17.1657C12.6662 19.65 14.5889 21.6168 17.0177 21.6168C19.4465 21.6168 21.3693 19.65 21.3693 17.1657C21.3693 14.6814 19.4465 12.7146 17.0177 12.7146ZM17.0177 20.0641C15.4997 20.0641 14.1841 18.8219 14.1841 17.1657C14.1841 15.613 15.3985 14.2673 17.0177 14.2673C18.5357 14.2673 19.8513 15.5095 19.8513 17.1657C19.8513 18.7184 18.5357 20.0641 17.0177 20.0641Z" fill="white"/>
                        <path d="M21.4705 13.6463C22.0294 13.6463 22.4825 13.1828 22.4825 12.6111C22.4825 12.0394 22.0294 11.576 21.4705 11.576C20.9116 11.576 20.4585 12.0394 20.4585 12.6111C20.4585 13.1828 20.9116 13.6463 21.4705 13.6463Z" fill="white"/>
                      </svg>
                    </a>}
                  </div>
                </div>
              
                {/* V E N U E   D E T A I L S*/}
                <Link to={`/show-artist/${artist.id}`}>
                  <div className="flex flex-col justify-start laptop:pt-20 laptop:pb-1  fold:pt-10 fold:pb-1">
                    <div className="bg-gray-100 opacity-75 rounded-xl flex justify-between flex-row laptop:p-4 laptop:m-6 tablet:p-4 tablet:mt-8 fold:p-2 fold:m-2 fold:mt-8">
                      <div className="flex flex-col">
                        <h2 className="laptop:text-xl fold:text-sm font-bold capitalize">{artist.artistName}</h2>
                        <p className="laptop:text-xl fold:text-xs capitalize">{artist.location}</p>    
                      </div>
                      {/* V E N U E  L I K E  */}
                      <div className="flex items-center">
                        <img src={unheart} alt="unlike"></img>
                      </div>  
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </div> }

      </div>
    </div>
  )
}

export default AllArtists