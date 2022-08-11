import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import styles from './ArtistRegister.module.css'
import genres from './data/genres.js'
import Select from 'react-select'

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
  const [Q10, setQ10] = React.useState(false)

  
  
  const [proccedlogin, setproccedlogin] = React.useState(false)
  // const [addanother1, setaddanother1] = React.useState(false)
  const [button, updateButton] = useState(false)
  const navigate = useNavigate()

  const progressBar = document.getElementById("progress")


  
  // F O R M   R E T U R N

  

  const [genreType, setGenreType] = React.useState(
    { genre: [] })
  
  const [formData, setFormData] = useState({
    username: "",

    email: "", 
    artistName: "",
    password: "",
    profileImage: "",
    location: "",
    travel: "",
    // totalRatings: "",
    // price: "",
    websiteUrl: "",
    videoUrl: "",
    // optionUrl: "",
    musicUrl: "",
    backgroundCardImage: "",
    galleryImage1: "",
    galleryImage2: "",
    galleryImage3: "",
    bio: "",
    fbUrl: "",
    twitterUrl: "",
    youTubeUrl: "",
    instagramUrl: "",
    genre: [],
  })

  const [errors, setErrors] = useState({
    username: "",
    email: "" , 
    artistName: "",
    password: "",
    profileImage: "",
    location: "",
    travel: "",
    // totalRatings: "",
    // price: "",
    websiteUrl: "",
    videoUrl: "",
    // optionUrl: "",
    musicUrl: "",
    backgroundCardImage: "",
    galleryImage1: "",
    galleryImage2: "",
    galleryImage3: "",
    bio: "",
    fbUrl: "",
    twitterUrl: "",
    youTubeUrl: "",
    instagramUrl: "",
    genre: [],
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
    setGenreType({
      genre: (genreType.map(genreElem => ({ genre: genreElem.value }))),
      // genreArray: e.target.value,
      // genreObjects: genreArray.map(genreElem => ({ genre: genreElem.value })),
    })
    console.log(genreType)
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
          backgroundCardImage: result.info.url,
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
    const newFormData = {
      ...formData,
      ...genreType,
    }
    try {
      await axios.post(`/api/artist-signup`, newFormData)
      updateButton(!button)
      navigate('/artist-login')
    } catch (err) {    
      setErrors(err.response.data.errors)
    }
  }
  
  // / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
  
  // Q U E S T I O N    R E N D E R I N G 
  
  // / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /

  function postQ1() {
    setQ1(false)
    {errors.email && <small className="errors">{errors.email}</small>}
    setQ2(true)
    const newCountVal = 10
    progressBar.value = newCountVal
  }

  function postQ2(event) {
    setQ2(false)
    if (event.target.value === 'back') {
      setQ1(true)
      progressBar.value = 10
    } else {
      setQ3(true)
      progressBar.value = 20
    }
  }

  function postQ3(event) {
    setQ3(false)
    if (event.target.value === 'back') {
      setQ2(true)
      progressBar.value = 20
    } else {
      setQ4(true)
      progressBar.value = 30
    }
  }

  function postQ4(event) {
    setQ4(false)
    if (event.target.value === 'back') {
      setQ3(true)
      progressBar.value = 30
    } else {
      setQ5(true)
      progressBar.value = 40
    }
  }

  function postQ5(event) {
    setQ5(false)
    if (event.target.value === 'back') {
      setQ4(true)
      progressBar.value = 40
    } else {
      setQ6(true)
      progressBar.value = 50
    }
  }

  function postQ6(event) {
    setQ6(false)
    if (event.target.value === 'back') {
      setQ5(true)
      progressBar.value = 50
    } else {
      setQ7(true)
      progressBar.value = 60
    }
  }

  function postQ7(event) {
    setQ7(false)
    if (event.target.value === 'back') {
      setQ6(true)
      progressBar.value = 60
    } else {
      setQ8(true)
      progressBar.value = 70
    }
  }

  function postQ8(event) {
    setQ8(false)
    if (event.target.value === 'back') {
      setQ7(true)
      progressBar.value = 70
    } else {
      setQ9(true)
      progressBar.value = 80
    }
  }

  function postQ9(event) {
    setQ9(false)
    if (event.target.value === 'back') {
      setQ8(true)
      progressBar.value = 80
    } else {
      setQ10(true)
      progressBar.value = 90
    }
  }

  function postQ10(event) {
    setQ10(false)
    if (event.target.value === 'back') {
      setQ9(true)
      progressBar.value = 90
    } else {
      setproccedlogin(true)
      progressBar.value = 100
    }
  }
 
  
  // / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
  
  // J S X    R E T U R N
  
  // / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /

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
          {errors.username && <small className="errors">{errors.username}</small>}
                    
          <div>
            <h3 className={styles.h3}>Choose a password</h3>
          </div>
          <input 
            onChange={handleChange} 
            className={styles.textinput} 
            type="password" 
            placeholder="Enter your password"
            name="password"
            value={formData.password}>
          </input>
          {errors.password && <small className="errors">{errors.password}</small>}
          
          <div>
            <h3 className={styles.h3}>Please upload a profile image by clicking on the button below</h3>
          </div>
          <button onClick={handleProfileUpload} className={styles.nextbutton}>upload profile picture</button>{
            formData.profileImage === "" ? null : <img src={formData.profileImage} alt="profile image"></img>
          }
          {errors.profileImage && <small className="errors">{errors.profileImage}</small>}           
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

          {errors.location && <small className="errors">{errors.location}</small>}

          <button onClick={postQ2} className={styles.backbutton} value='back'>Previous step</button>
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
          {errors.travel && <small className="errors">{errors.travel}</small>}
          <button onClick={postQ3} className={styles.nextbutton}>{`Next -> `}</button>
          <button onClick={postQ3} className={styles.backbutton} value='back'>Previous step</button>
        </div></> : null }

      {Q4 ? <>
        <div className={styles.questionbox}>
          <h3 className={styles.h3}>What is your website address?</h3>
          <div className={styles.titlebanner}>
          </div>
          <input 
            onChange={handleChange} 
            className={styles.textinput} 
            type="text" 
            placeholder="Enter your website address (url)"
            name="websiteUrl" 
            value={formData.websiteUrl}
          />
          {errors.websiteUrl && <small className="errors">{errors.websiteUrl}</small>}
          <button onClick={postQ4} className={styles.backbutton} value='back'>Previous step</button>
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
          {errors.videoUrl && <small className="errors">{errors.videoUrl}</small>}
          <button onClick={postQ5} className={styles.backbutton} value='back'>Previous step</button>
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
          {errors.musicUrl && <small className="errors">{errors.musicUrl}</small>}
          <button onClick={postQ6} className={styles.backbutton} value='back'>Previous step</button>
          <button onClick={postQ6} className={styles.nextbutton}>{`Next -> `}</button>
        </div></> : null }
      
      {Q7 ? <>
        <div className={styles.questionbox}>
          <div className={styles.titlebanner}>
            <h3 className={styles.h3}>Show Potential Venues what you are like</h3>
            <p> add a background cover image and up to three gallery images below</p>
          </div>

          {errors.backgroundCardImage && <small className="errors">{errors.backgroundCardImage}</small>}
          <button onClick={handleBackgroundUpload} className={styles.nextbutton}>upload background cover image</button>            
          {errors.galleryImage1 && <small className="errors">{errors.galleryImage1}</small>}
          <button onClick={handleGalleryUpload1} className={styles.nextbutton}>upload gallery image</button>            
          <button onClick={handleGalleryUpload2} className={styles.nextbutton}>upload gallery image</button>            
          <button onClick={handleGalleryUpload3} className={styles.nextbutton}>upload gallery image</button>            

          <button onClick={postQ7} className={styles.backbutton} value='back'>Previous step</button>
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
          {errors.artistName && <small className="errors">{errors.artistName}</small>}
          
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
          {errors.bio && <small className="errors">{errors.bio}</small>}
          
          <button onClick={postQ8} className={styles.backbutton} value='back'>Previous step</button>
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
          {errors.fbUrl && <small className="errors">{errors.fbUrl}</small>}

          <input 
            placeholder="Twitter (optional)"
            onChange={handleChange} 
            className={styles.textinput} 
            type="text" 
            name="twitterUrl" 
            value={formData.twitterUrl}
          />
          {errors.twitterUrl && <small className="errors">{errors.twitterUrl}</small>}
          
          <input 
            placeholder="YouTube (optional)"
            onChange={handleChange} 
            className={styles.textinput} 
            type="text" 
            name="youTubeUrl" 
            value={formData.youTubeUrl}
          />
          {errors.youTubeUrl && <small className="errors">{errors.youTubeUrl}</small>}
          
          <input 
            placeholder="Instagram (optional)"
            onChange={handleChange} 
            className={styles.textinput} 
            type="text" 
            name="instagramUrl" 
            value={formData.instagramUrl}
          />
          {errors.instagramUrl && <small className="errors">{errors.instagramUrl}</small>}
          <button onClick={postQ9} className={styles.backbutton} value='back'>Previous step</button>
          <button onClick={postQ9} className={styles.nextbutton}>{`Next -> `}</button>
        </div></> : null }

      {Q10 ? <>
        <div className={styles.questionbox}>
          <div className={styles.titlebanner}>
            <h3 className={styles.h3}>What genre?</h3>
          </div>
          <Select
            defaultValue={[]}
            isMulti
            name="genre"
            options={genres}
            className="basic-multi-select"
            classNamePrefix="select"
            // onChange={(genre) => setFormData({ ...formData, genre })}
            onChange={handleChange}
            value={formData.genre}
          />
          {errors.genre && <small className="errors">{errors.genre}</small>}
          <button onClick={postQ10} className={styles.backbutton} value='back'>Previous step</button>
          <button onClick={postQ10} className={styles.nextbutton}>{`Submit form -> `}</button>
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