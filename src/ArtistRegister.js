import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import styles from "./ArtistRegister.module.css"

function ArtistRegister() {

  const [Q1, setQ1] = React.useState(true)
  const [Q2, setQ2] = React.useState(false)
  const [Q3, setQ3] = React.useState(false)
  const [Q4, setQ4] = React.useState(false)
  const [Q5, setQ5] = React.useState(false)
  const [Q6, setQ6] = React.useState(false)
  const [Q7, setQ7] = React.useState(false)
  const [Q8, setQ8] = React.useState(false)
  const [Q9, setQ9] = React.useState(false)
  
  
  const [proccedlogin, setproccedlogin] = React.useState(false)
  // const [addanother1, setaddanother1] = React.useState(false)
  const [button, updateButton] = useState(false)
  const navigate = useNavigate()

  const progressBar = document.getElementById("progress")
  
  const [formData, setFormData] = useState({
    username: "",
    email:  "" , 
    artistName: "",
    password: "",
    profileImage: "",
    location: "",
    travel: "",
    totalRatings: "",
    price: "",
    websiteUrl: "",
    videoUrl: "",
    optionUrl: "",
    musicUrl: "",
    backgroundCoverCardImage: "",
    galleryImage1: "",
    galleryImage2: "",
    galleryImage3: "",
    bio: "",
    fbUrl: "",
    twitterUrl: "",
    youTubeUrl: "",
    instagramUrl:"",
    genre: ""
  })

  const [errors, setErrors] = useState({
    username: "",
    email:  "" , 
    artistName: "",
    profileImage: "",
    location: "",
    travel: "",
    totalRatings: "",
    price: "",
    websiteUrl: "",
    videoUrl: "",
    optionUrl: "",
    musicUrl: "",
    backgroundCoverCardImage: "",
    galleryImage1: "",
    galleryImage2: "",
    galleryImage3: "",
    bio: "",
    fbUrl: "",
    twitterUrl: "",
    youTubeUrl: "",
    instagramUrl:"",
    genre: ""
  })


  // Cloudinary 
  // form submission
  // Genre
  //field validation
  // errors 
  // rendering 


  function handleChange(e) {
    console.log(e.target.value)
    const { name, value } = e.target
    setFormData({
      ...formData, //  This is whatever the form data was before, all it's fields.
      [name]: value, 
    })
    setErrors({
      ...errors,
      [name]: '',
    })
    console.log(name)
  }

  function handleProfileUpload() {
    window.cloudinary.createUploadWidget(
      {
        cloudName: 'tjmcodes', 
        uploadPreset: 'artist-user-profile', 
        folder: 'VenuesArtists',
        cropping: true,
        placeholderImage: true,
        clientAllowedFormats: ['JPG', 'PNG', 'GIF', 'BMP', 'TIFF', 'ICO', 'PDF', 'EPS', 'PSD', 'SVG', 'WebP', 'JXR', 'WDP'],
        maxFileSize: 1048576, 
      },
      (err, result) => {
        if (result.event !== 'success') {
          return
        }
        setFormData({
          ...formData,
          profileImage: result.info.url,
        })
      }
      ).open()
    }
    console.log(formData)
    
  function handleBackgroundUpload() {
    window.cloudinary.createUploadWidget(
      {
        cloudName: 'tjmcodes', 
        uploadPreset: 'artist-background-card-image', 
        folder: 'VenuesArtists',
        cropping: true,
        placeholderImage: true,
        clientAllowedFormats: ['JPG', 'PNG', 'GIF', 'BMP', 'TIFF', 'ICO', 'PDF', 'EPS', 'PSD', 'SVG', 'WebP', 'JXR', 'WDP'],
        maxFileSize: 1048576, 
      },
      (err, result) => {
        if (result.event !== 'success') {
          return
        }
        setFormData({
          ...formData,
          backgroundCoverCardImage: result.info.url,
        })
      }
      ).open()
    }
    console.log(formData)
  function handleGalleryUpload1() {
    window.cloudinary.createUploadWidget(
      {
        cloudName: 'tjmcodes', 
        uploadPreset: 'artist-gallery-images', 
        folder: 'VenuesArtists',
        cropping: true,
        placeholderImage: true,
        clientAllowedFormats: ['JPG', 'PNG', 'GIF', 'BMP', 'TIFF', 'ICO', 'PDF', 'EPS', 'PSD', 'SVG', 'WebP', 'JXR', 'WDP'],
        maxFileSize: 1048576, 
      },
      (err, result) => {
        if (result.event !== 'success') {
          return
        }
        setFormData({
          ...formData,
          galleryImage1: result.info.url,
        })
      }
      ).open()
    }
    console.log(formData)
  function handleGalleryUpload2() {
    window.cloudinary.createUploadWidget(
      {
        cloudName: 'tjmcodes', 
        uploadPreset: 'artist-gallery-images', 
        folder: 'VenuesArtists',
        cropping: true,
        placeholderImage: true,
        clientAllowedFormats: ['JPG', 'PNG', 'GIF', 'BMP', 'TIFF', 'ICO', 'PDF', 'EPS', 'PSD', 'SVG', 'WebP', 'JXR', 'WDP'],
        maxFileSize: 1048576, 
      },
      (err, result) => {
        if (result.event !== 'success') {
          return
        }
        setFormData({
          ...formData,
          galleryImage2: result.info.url,
        })
      }
      ).open()
    }
    console.log(formData)

  function handleGalleryUpload3() {
    window.cloudinary.createUploadWidget(
      {
        cloudName: 'tjmcodes', 
        uploadPreset: 'artist-gallery-images', 
        folder: 'VenuesArtists',
        cropping: true,
        placeholderImage: true,
        clientAllowedFormats: ['JPG', 'PNG', 'GIF', 'BMP', 'TIFF', 'ICO', 'PDF', 'EPS', 'PSD', 'SVG', 'WebP', 'JXR', 'WDP'],
        maxFileSize: 1048576, 
      },
      (err, result) => {
        if (result.event !== 'success') {
          return
        }
        setFormData({
          ...formData,
          galleryImage3: result.info.url,
        })
      }
      ).open()
    }
    console.log(formData)

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      await axios.post(`/api/artist-signup`, formData)
      updateButton(!button)
      navigate('/artist-login')
    } catch (err) {    
      setErrors(err.response.data.errors)
    }
  }
  
    
  function postQ1() {
    setQ1(false)
    setQ2(true)
    const newCountVal = 10
    progressBar.value = newCountVal
  }

  function postQ2() {
    console.log("clicked")
    setQ2(false)
    setQ3(true)
    const newCountVal = 20
    progressBar.value = newCountVal
  }

  function postQ3() {
    console.log("clicked")
    setQ3(false)
    setQ4(true)
    const newCountVal = 30    
    progressBar.value = newCountVal
  }
  function postQ4() {
    console.log("clicked")
    setQ4(false)
    setQ5(true)
    const newCountVal = 40  
    progressBar.value = newCountVal
  }

  function postQ5() {
    console.log("clicked")
    setQ5(false)
    setQ6(true)
    const newCountVal = 50
    progressBar.value = newCountVal
  }
  function postQ6() {
    console.log("clicked")
    setQ6(false)
    setQ7(true)
    const newCountVal = 60
    progressBar.value = newCountVal
  }
  function postQ7() {
    console.log("clicked")
    setQ7(false)
    setQ8(true)
    const newCountVal = 70
    progressBar.value = newCountVal
  }
  function postQ8() {
    console.log("clicked")
    setQ8(false)
    setQ9(true)
    const newCountVal = 80
    progressBar.value = newCountVal
  }
  function postQ9() {
    console.log("clicked")
    setQ9(false)
    setproccedlogin(true)
    const newCountVal = 90
    progressBar.value = newCountVal
  }
  // function addanother() {
  //   setaddanother1(true)
  // } 
  return (
    <>
      <progress id="progress" className={styles.formprogress} value="0" max="100"></progress>
      
      {Q1 ? <>
        <h2 className={styles.titlebanner}>To get started lets setup your login credentials</h2>
        <div className={styles.questionbox}>
          <div>
            <h3 className={styles.h3}>Enter your Email address</h3>
          </div>
          <input 
            onChange={handleChange} 
            className={styles.textinput} 
            type="text" 
            name="email"
            value={formData.email} 
            placeholder="examaple@example.com">
          </input>
          
          <div>
            <h3 className={styles.h3}>Choose a Username</h3>
          </div>
          <input 
            onChange={handleChange} 
            className={styles.textinput} 
            type="text" 
            placeholder="Enter your name"
            name="username"
            value={formData.username}> 
          </input>
                    
          <div>
            <h3 className={styles.h3}>Choose a password</h3>
          </div>
          <input 
            onChange={handleChange} 
            className={styles.textinput} 
            type="text" 
            placeholder="Enter your password"
            name="password"
            value={formData.password}>
            </input>
          <div>
            <h3 className={styles.h3}>Please upload a profile image by clicking on the button below</h3>
          </div>
          <button onClick={handleProfileUpload} className={styles.nextbutton}>upload profile picture</button>{
            formData.profileImage === "" ? null : <img src={formData.profileImage} alt="profile image"></img>
          }           
          <button onClick={postQ1} className={styles.nextbutton}>{`Next -> `}</button>
        </div>
        </> : null }

      {Q2 ? <>
      <div className={styles.questionbox}>
        <div className={styles.titlebanner}>
          <h3 className={styles.h3}>Where are you located?</h3>
        </div>
        <select className={styles.optionInput} name="location" value={formData.location} onChange={handleChange} id="cities">
          <option value="london">London</option>
          <option value="manchester">Manchester</option>
          <option value="birmingham">Birmingham</option>
          <option value="leeds">Leeds</option>
          <option value="Liverpool">Liverpool</option>
        </select>
        <button onClick={postQ2} className={styles.nextbutton}>{`Next -> `}</button>
      </div></> : null }

      {Q3 ? <>
        <div className={styles.questionbox}>
          
          <div className={styles.titlebanner}>
            <h3 className={styles.h3}>How far are you willing to travel?</h3>
          </div>
          <input 
            onChange={handleChange} 
            className={styles.textinput} 
            type="number" 
            placeholder="Enter maximum distance in miles (Number only)"
            name="travel" 
            value={formData.travel}
          />
          <button onClick={postQ3} className={styles.nextbutton}>{`Next -> `}</button>
        </div></> : null }

      {Q4 ? <>
        <div className={styles.questionbox}>
          <div className={styles.titlebanner}>
            <h3 className={styles.h3}>What is your website address?</h3>
          </div>
          <input 
            onChange={handleChange} 
            className={styles.textinput} 
            type="text" 
            placeholder="Enter your website address (url)"
            name="websiteUrl" 
            value={formData.websiteUrl}
          />
          <button onClick={postQ4} className={styles.nextbutton}>{`Next -> `}</button>
        </div></> : null }
      
      {Q5 ? <>
        <div className={styles.questionbox}>
          <div className={styles.titlebanner}>
            <h3 className={styles.h3}>Upload a link to you performing live</h3>
          </div>
          <input 
            onChange={handleChange} 
            className={styles.textinput} 
            type="text" 
            placeholder="Upload your link"
            name="videoUrl" 
            value={formData.videoUrl}
          />
         
          <button onClick={postQ5} className={styles.nextbutton}>{`Next -> `}</button>
        </div></> : null }
      
      {Q6 ? <>
        <div className={styles.questionbox}>
          <div className={styles.titlebanner}>
            <h3 className={styles.h3}>Where can we listen to your music?</h3>
          </div>
          <input 
            onChange={handleChange} 
            className={styles.textinput} 
            type="text" 
            placeholder="Upload the link to your music (Spotify / Bandcamp etc.)"
            name="musicUrl" 
            value={formData.musicUrl}
          />
          <button onClick={postQ6} className={styles.nextbutton}>{`Next -> `}</button>
        </div></> : null }
      
      {Q7 ? <>
        <div className={styles.questionbox}>
          <div className={styles.titlebanner}>
            <h3 className={styles.h3}>Show Potential Venues what you are like</h3>
            <p> add a background cover image and up to three gallery images below</p>
          </div>

          <button onClick={handleBackgroundUpload} className={styles.nextbutton}>upload background cover image</button>            
          <button onClick={handleGalleryUpload1} className={styles.nextbutton}>upload gallery image</button>            
          <button onClick={handleGalleryUpload2} className={styles.nextbutton}>upload gallery image</button>            
          <button onClick={handleGalleryUpload3} className={styles.nextbutton}>upload gallery image</button>            

          <button onClick={postQ7} className={styles.nextbutton}>{`Next -> `}</button>
        </div></> : null }
    
      {Q8 ? <>
        <div className={styles.questionbox}>
          <div className={styles.titlebanner}>
            <h3 className={styles.h3}>What is your Artist Name?</h3>
          </div>
          <input 
            onChange={handleChange} 
            className={styles.textinput} 
            type="text" 
            placeholder="Enter your artist name"
            name="artistName" 
            value={formData.artistName}
          />
          
          <div className={styles.titlebanner}>
            <h3 className={styles.h3}>Add your bio</h3>
          </div>
          <input 
            onChange={handleChange} 
            className={styles.textinput} 
            type="text" 
            placeholder="Enter your bio info here"
            name="bio" 
            value={formData.bio}
          />
          
          <button onClick={postQ8} className={styles.nextbutton}>{`Next -> `}</button>
        </div></> : null }
     
      {Q9 ? <>
        <div className={styles.questionbox}>
          <div className={styles.titlebanner}>
            <h3 className={styles.h3}>Lifes better when you share! add your social media accounts below</h3>
          </div>
          <input 
            placeholder="Facebook (optional)"
            onChange={handleChange} 
            className={styles.textinput} 
            type="text" 
            name="fbUrl" 
            value={formData.fbUrl}
          />
          <input 
            placeholder="Twitter (optional)"
            onChange={handleChange} 
            className={styles.textinput} 
            type="text" 
            name="twitterUrl" 
            value={formData.twitterUrl}
          />
          <input 
            placeholder="YouTube (optional)"
            onChange={handleChange} 
            className={styles.textinput} 
            type="text" 
            name="youTubeUrl" 
            value={formData.youTubeUrl}
          />
          <input 
            placeholder="Instagram (optional)"
            onChange={handleChange} 
            className={styles.textinput} 
            type="text" 
            name="instagramUrl" 
            value={formData.instagramUrl}
          />
          <button onClick={postQ9} className={styles.nextbutton}>{`Submit Form -> `}</button>
        </div></> : null }
   

      {proccedlogin ? <>
        <div className={styles.proccedlogin}>
          <div className={styles.logintext}>
            <h3 className={styles.h3login}>You are now Registered!</h3>
            <h4 className={styles.h4login}>Welcome to our talented family</h4>
            <button onClick={handleSubmit} className={styles.loginbutton}>Click to proceed to login</button>
          </div>
        </div></> : null }
    </>
  )
}

export default ArtistRegister