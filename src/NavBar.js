import React from 'react'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'

function NavBar() {

  const navigate = useNavigate()

  async function logout(e) {

    e.preventDefault()

    try {
      const { data } = await axios.post('/api/artist-login')
      localStorage.removeItem('token', data.token)
      sessionStorage.removeItem('token', data.token)
      console.log(data.token)
      console.log('removed token')
      // window.location.reload()
      navigate('/')
    } catch (err) {
      console.log(err.response.data)
    }
  }
 
  return <nav className="bg-transparent px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
    <button onClick={logout} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 p-8 m-2" type="button">Log out</button>
    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 p-8" type="button">Menu</button>
    <div className="z-10 w-44 bg-black shadow dark:bg-gray-700">
      <svg width="75" height="47" viewBox="0 0 75 47" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="3" y1="3" x2="72" y2="3" stroke="white" strokeWidth="6" strokeLinecap="round"/>
        <line x1="3" y1="22.4211" x2="72" y2="22.4211" stroke="white" strokeWidth="6" strokeLinecap="round"/>
        <line x1="3" y1="44" x2="72" y2="44" stroke="white" strokeWidth="6" strokeLinecap="round"/>
      </svg>
    </div>
    <div id="dropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">  
      <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
        <li>
          <a href="/artist-login" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Login</a>
        </li>
        <li>
          <a href="artists" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">View artists</a>
        </li>
        <li>
          <a href="venues" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">View venues</a>
        </li>
        <li>
          <a href="/artist-dashboard" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">My dashboard</a>
        </li>
      </ul>
    </div>
  </nav>

  
}

export default NavBar



