import {  } from 'react'
import axios from 'axios'
import { Menu } from '@headlessui/react'

import { useNavigate } from 'react-router-dom'

function NavBar() {

  const navigate = useNavigate()
  // const [isOpen, setIsOpen] = useNavigate()

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
 
  return <div className="relative bg-black bg-fixed flex justify-end p-4">
    <Menu as="div" className="relative">
    
      {/*BUTTON FOR HAMBURGER MENU */}
      <Menu.Button className="absolute flex inline-flex justify-end rounded-md border-gray-300 shadow-sm px-4 py-2 bg-transparent text-sm font-medium text-gray-700 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
        <svg className="flex justify-center"width="75" height="47" viewBox="0 0 75 47" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="3" y1="3" x2="72" y2="3" stroke="white" strokeWidth="6" strokeLinecap="round"/>
          <line x1="3" y1="22.4211" x2="72" y2="22.4211" stroke="white" strokeWidth="6" strokeLinecap="round"/>
          <line x1="3" y1="44" x2="72" y2="44" stroke="white" strokeWidth="6" strokeLinecap="round"/>
        </svg>
      </Menu.Button>

      <div className="flex bg-black shadow dark:bg-gray-700">
        
      </div>

      {/*MENU ITEMS */}
      <Menu.Items className="justify-start text-white origin-top-right fixed z-90 right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-gray-100">  
        <div className="flex flex-col py-1">
          <Menu.Item >
            {({ active }) => (
              <a href="/artist-login" className={`flex items-start px-4 py-2 text-sm
                ${active ? "bg-indigo-500 text-white" : "text-gray-700"}
                  hover:bg-indigo-500 hover:text-white`}>
                  Login
              </a>
            )}
          </Menu.Item>
          
          <Menu.Item>
            {({ active }) => (
              <a href="/artist-dashboard" className={`flex items-center px-4 py-2 text-sm
                ${active ? "bg-indigo-500 text-white" : "text-gray-700"}
                  hover:bg-indigo-500 hover:text-white`}>
                  Dashboard
              </a>
            )}
          </Menu.Item>
          
          <Menu.Item>
            {({ active }) => (
              <a href="/venue-dashboard" className={`flex items-center px-4 py-2 text-sm
                ${active ? "bg-indigo-500 text-white" : "text-gray-700"}
                  hover:bg-indigo-500 hover:text-white`}>
                  Dashboard
              </a>
            )}
          </Menu.Item>

          <Menu.Item>
            {({ active }) => (
              <a href="/artists" className={`flex items-center px-4 py-2 text-sm
                ${active ? "bg-indigo-500 text-white" : "text-gray-700"}
                  hover:bg-indigo-500 hover:text-white`}>
                  Artists
              </a>
            )}
          </Menu.Item>

          <Menu.Item>
            {({ active }) => (
              <a href="/venues" className={`flex items-center px-4 py-2 text-sm
                ${active ? "bg-indigo-500 text-white" : "text-gray-700"}
                  hover:bg-indigo-500 hover:text-white`}>
                  Venues
              </a>
            )}
          </Menu.Item>

          <Menu.Item>
            {({ active }) => (
              <a href="/start-journey" onClick={logout} className={`flex items-center px-4 py-2 text-sm
                ${active ? "bg-indigo-500 text-white" : "text-gray-700"}
                  hover:bg-indigo-500 hover:text-white`}>
                  Logout
              </a>
            )}
          </Menu.Item>

          
        </div>
          
      </Menu.Items>
    </Menu>
  </div>

  
}

export default NavBar



