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
  const [proccedlogin, setproccedlogin] = React.useState(false)
  const [addanother1, setaddanother1] = React.useState(false)
  const [button, updateButton] = useState(false)
  const navigate = useNavigate()

  const progressBar = document.getElementById("progress")
  
  const [formData, setFormData] = useState({
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
      await axios.post(`/artist-signup`, formData)
      updateButton(!button)
      navigate('/artist-login')
    } catch (err) {    
      setErrors(err.response.data.errors)
    }
  }
  
    
  function postQ1() {
    setQ1(false)
    setQ2(true)
    const newCountVal = 20
    progressBar.value = newCountVal
  }

  function postQ2() {
    console.log("clicked")
    setQ2(false)
    setQ3(true)
    const newCountVal = 40
    progressBar.value = newCountVal
  }

  function postQ3() {
    console.log("clicked")
    setQ3(false)
    setQ4(true)
    const newCountVal = 60
    progressBar.value = newCountVal
  }
  function postQ4() {
    console.log("clicked")
    setQ4(false)
    setQ5(true)
    const newCountVal = 80
    progressBar.value = newCountVal
  }

  function postQ5() {
    console.log("clicked")
    setQ5(false)
    setQ6(true)
    const newCountVal = 100
    progressBar.value = newCountVal
  }
  function postQ6() {
    console.log("clicked")
    setQ6(false)
    setproccedlogin(true)
    const newCountVal = 100
    progressBar.value = newCountVal
  }

  function addanother() {
    setaddanother1(true)
  } 
  return (
    <>
      <progress id="progress" className={styles.formprogress} value="0" max="100"></progress>
      <h2 className={styles.h2}>signup sheet</h2>
      {Q1 ? <>
        <div className={styles.questionbox}>
          <div className={styles.titlebanner}>
            <h3 className={styles.h3}>What is your name?</h3>
          </div>
          <input onChange={handleChange} className={styles.textinput} type="text" placeholder="Enter your name"></input>
          <button onClick={handleProfileUpload} className={styles.nextbutton}>Click to upload profile picture</button>           
          <button onClick={postQ1} className={styles.nextbutton}>{`Next -> `}</button>
        </div></> : null }

      {Q2 ? <><div className={styles.questionbox}>
        <div className={styles.titlebanner}>
          <h3 className={styles.h3}>Where are you located?</h3>
        </div>
        <select className={styles.optionInput} id="cars" name="cars">
          <option value="london">London</option>
          <option value="manchester">Machester</option>
          <option value="birmingham">Birmingham</option>
          <option value="leeds">Leeds</option>
        </select>
        <button onClick={postQ2} className={styles.nextbutton}>{`Next -> `}</button>
      </div></> : null }

      {Q3 ? <>
        <div className={styles.questionbox}>
          <div className={styles.titlebanner}>
            <h3 className={styles.h3}>How Far can you travel?</h3>
          </div>
          <input onChange={handleChange} className={styles.textinput} type="text" placeholder="Enter distance in KM (Number only)"></input>
          <button onClick={postQ3} className={styles.nextbutton}>{`Next -> `}</button>
        </div></> : null }

      {Q4 ? <>
        <div className={styles.questionbox}>
          <div className={styles.titlebanner}>
            <h3 className={styles.h3}>Show us what you got!</h3>
          </div>
          <input onChange={handleChange} className={styles.textinput} type="text" placeholder="Upload a Link to you perfoming"></input>
          <button onClick={postQ4} className={styles.nextbutton}>{`Next -> `}</button>
        </div></> : null }
      
      {Q5 ? <>
        <div className={styles.questionbox}>
          <div className={styles.titlebanner}>
            <h3 className={styles.h3}>Show us what you got! Upload Your Images</h3>
          </div>
          <input onChange={handleChange} className={styles.textinput} type="text" placeholder="Upload a Link to you perfoming"></input>
          <button onClick={postQ5} className={styles.nextbutton}>{`Next -> `}</button>
        </div></> : null }

          <button onClick={handleBackgroundUpload} className={styles.nextbutton}>Click to upload background picture</button>            
          <button onClick={handleGalleryUpload1} className={styles.nextbutton}>Click to upload gallery picture</button>            
          <button onClick={handleGalleryUpload2} className={styles.nextbutton}>Click to upload gallery picture 2</button>            
          <button onClick={handleGalleryUpload3} className={styles.nextbutton}>Click to upload gallery picture 3</button>            


      {Q6 ? <>
        <div className={styles.questionbox}>
          <div className={styles.titlebanner}>
            <h3 className={styles.h3}>Lifes better when you share!</h3>
          </div>
          <input onChange={handleChange} className={styles.textinput} type="text" placeholder="post the link to your social media account"></input>
          { addanother1 ? null : <button onClick={addanother}className={styles.addanotherbutton }>add another + </button>}
          {addanother1 && <><input onChange={handleChange} className={styles.textinput} type="text" placeholder="post the link to another social media account"></input>
            <button onClick={addanother}className={styles.addanotherbutton }>add another + </button></>}
          <button onClick={postQ6} className={styles.nextbutton}>{`Next -> `}</button>
        </div></> : null }
      {proccedlogin ? <>
        <div className={styles.proccedlogin}>
          <div className={styles.logintext}>
            <h3 className={styles.h3login}>You are now Registered!</h3>
            <h4 className={styles.h4login}>Welcome to our talented family</h4>
            <button className={styles.loginbutton}>Click to proceed to login</button>
          </div>
        </div></> : null }
    </>
  )
}

export default ArtistRegister