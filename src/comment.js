import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


function ShowComments() {
  const [commentContent, setCommentContent] = useState('')
  const [venueRating, setVenueRating] = useState('')



  async function handleComment() {
  
    try {
      const { data } = await axios.post(
        `${baseUrl}/artists/${artistId}/comments`, 
        { 
          content: commentContent,
          rating: venueRating,        
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }, 
        }
      )
      setArtist(data)
      window.location.reload()
      console.log(data)
    } catch (err) { 
      console.log(err)
    }    
  }


  return ( 
    {/*  // V E N U E  P O S T I N G  A  C O M M E N T // }
    {/*We are only going to show article below to post a comment if "getLoggedInUserId" because if they have a logged in user id they're must be logged in */}
    <div className={""}>
      <article className="w-full">
        <div className={""}>
          <div className="m-4">
            <textarea 
              className="mt-4 mb-4 flex w-full mt-4 rounded-xl"
              maxLength={280}
              placeholder="Write out your post here.."
              onChange={(event) => setCommentContent(event.target.value)}>
            </textarea>
          </div>
          <h2 className="text-sm flex justify-start m-4"> 1 is low and 4 is best</h2>
          <div className="">
            <input 
              className="flex m-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none  focus:ring-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mt-4 mb-4 flex flex-col w-1/2 mt-4 rounded-xl col-span-3"
              type="number"
              placeholder='Select rating'
              min='1'
              max='4'
              onChange={(event) => setVenueRating(event.target.value)}>
            </input>
          </div>

          <div className="field">
            <div className="control">
              <button 
                className="ml-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                onClick={handleComment}>
                Post comment
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
)
}
