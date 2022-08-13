import React, { useState } from "react";
import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
import styles from './ArtistRegister.module.css'


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
  const [review, setreview] = React.useState(false)
  const [proccedlogin, setproccedlogin] = React.useState(false)

  // const [addanother1, setaddanother1] = React.useState(false)
  const [button, updateButton] = useState(false)
  // const navigate = useNavigate()

  const progressBar = document.getElementById("progress")


  
  
  

  const [genreType, setGenreType] = React.useState(
    { genre: "" })
  
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
    genre: "",
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
    genre: "",
  })




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
      genre: [{ genre: (e.target.value) }],
      // genre: genres.map(genreElem => ({ genre: genreElem.value })),
      // genreArray: e.target.value,
      // genreObjects: genreArray.map(genreElem => ({ genre: genreElem.value })),
    })
    // console.log(genreType)
  }


    
  // / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
  
  // C L O U D I N A R Y   I M A G E   U P L O A D   F U N C T I O N S
  
  // / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /


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


  // F O R M   S U B M I T //

  async function handleSubmit(event) {
    event.preventDefault()
    const newFormData = {
      ...formData,
      ...genreType,
    }
    try {
      await axios.post(`/api/artist-signup`, newFormData)
      updateButton(!button)
      setreview(false)
      setproccedlogin(true)
    } catch (err) {    
      console.log(err)
      // setErrors(err.response.data.errors[0])
      // if (err.response.data.errors.travel !== null) {
      //   console.log(err.response.data.errors.travel[0])
      //   setErrors({ travel: err.response.data.errors.travel[0] })
      // if (err.response.data.username !== null) {
      //   console.log(err.response.data.username)
      //   setErrors({ username: err.response.data.username }) 
      // } else if (err.response.data.email !== null) {
      //   console.log(err.response.data.email)
      //   setErrors({ email: err.response.data.email }) 
    
      // } else if (err.response.data.errors.profileImage !== null) {
      //   // console.log(err.response.data.errors.profileImage[0])
      //   setErrors({ travel: err.response.data.errors.profileImage[0] }) 
      // } else if (err.response.data.errors.location !== null) {
      //   console.log(err.response.data.errors.location[0])
      //   setErrors({ travel: err.response.data.errors.location[0] }) 
      // } else if (err.response.data.errors.websiteUrl !== null) {
      //   console.log(err.response.data.errors.websiteUrl[0])
      //   setErrors({ travel: err.response.data.errors.websiteUrl[0] }) 
      // } else if (err.response.data.errors.videoUrl !== null) {
      //   console.log(err.response.data.errors.videoUrl[0])
      //   setErrors({ travel: err.response.data.errors.videoUrl[0] }) 
      // } else {
      //   console.log("i'm broke")
      // }
    }
    console.log(newFormData.genre)
    console.log(errors)
  }
  
  // / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
  
  // Q U E S T I O N    R E N D E R I N G 
  
  // / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /

  function postQ1() {
    setQ1(false)
    {errors.email && <small className="errors">{errors.email}</small>}
    setQ2(true)
    progressBar.value =  10
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
      setreview(true)
      progressBar.value = 100
    }
  }

  function postreview() {
    setreview(false)
    setQ9(true)
    progressBar.value = 90
  }
 
  //! / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
  //! / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
  
  //! J S X    R E T U R N
  
  //! / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
  //! / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /

  return (
    <>
      <progress id="progress" className={styles.progressing} value="0" max="100"></progress>
      
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
          <button onClick={handleProfileUpload} className={styles.uploadbutton}>upload profile picture</button>{
            formData.profileImage === "" ? null : <img src={formData.profileImage} alt="profile image"></img>
          }
          {errors.profileImage && <small className="errors">{errors.profileImage}</small>}           
          <button onClick={postQ1} className={styles.nextbutton}>Next Step</button>
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

          <button onClick={postQ2} className={styles.nextbutton}>Next Step</button>
          <button onClick={postQ2} className={styles.backbutton} value='back'><i className="fa-solid fa-arrow-left-long"></i> Previous step</button>
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
          
          <button onClick={postQ3} className={styles.nextbutton}>Next Step</button>
          <button onClick={postQ3} className={styles.backbutton} value='back'><i className="fa-solid fa-arrow-left-long"></i> Previous step</button>
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
          <button onClick={postQ4} className={styles.nextbutton}>Next Step</button>
          <button onClick={postQ4} className={styles.backbutton} value='back'><i className="fa-solid fa-arrow-left-long"></i> Previous step</button>
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
          <button onClick={postQ5} className={styles.nextbutton}>Next Step</button>
          <button onClick={postQ5} className={styles.backbutton} value='back'><i className="fa-solid fa-arrow-left-long"></i> Previous step</button>
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
          <button onClick={postQ6} className={styles.nextbutton}>Next Step</button>
          <button onClick={postQ6} className={styles.backbutton} value='back'><i className="fa-solid fa-arrow-left-long"></i> Previous step</button>
        </div></> : null }
      
      {Q7 ? <>
        <div className={styles.questionbox}>
          <div className={styles.titlebanner}>
            <h3 className={styles.h3}>Show Potential Venues what you are like</h3>
            <p> add a background cover image and up to three gallery images below</p>
          </div>

          {errors.backgroundCardImage && <small className="errors">{errors.backgroundCardImage}</small>}
          <button onClick={handleBackgroundUpload} className={styles.uploadbutton}>upload background cover image</button>            
          {errors.galleryImage1 && <small className="errors">{errors.galleryImage1}</small>}
          <button onClick={handleGalleryUpload1} className={styles.uploadbutton}>upload gallery image</button>            
          <button onClick={handleGalleryUpload2} className={styles.uploadbutton}>upload gallery image</button>            
          <button onClick={handleGalleryUpload3} className={styles.uploadbutton}>upload gallery image</button>            

          <button onClick={postQ7} className={styles.nextbutton}>Next Step</button>
          <button onClick={postQ7} className={styles.backbutton} value='back'><i className="fa-solid fa-arrow-left-long"></i> Previous step</button>
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

          <button onClick={postQ8} className={styles.nextbutton}>Next Step</button>
          <button onClick={postQ8} className={styles.backbutton} value='back'><i className="fa-solid fa-arrow-left-long"></i> Previous step</button>

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
          <button onClick={postQ9} className={styles.nextbutton}>Next Step</button>
          <button onClick={postQ9} className={styles.backbutton} value='back'><i className="fa-solid fa-arrow-left-long"></i> Previous step</button>
        </div></> : null }

      {Q10 ? <>
        <div className={styles.questionbox}>
          <div className={styles.titlebanner}>
            <h3 className={styles.h3}>What genre is your music?</h3>
          </div>
          <input 
            placeholder="Enter genre in here"
            onChange={handleChange} 
            className={styles.textinput} 
            type="text" 
            name="genre" 
            value={formData.genre}
          />
          {errors.genre && <small className="errors">{errors.genre}</small>}
          <button onClick={postQ10} className={styles.nextbutton}>Review and submit</button>
          <button onClick={postQ10} className={styles.backbutton} value='back'><i className="fa-solid fa-arrow-left-long"></i> Previous step</button>
        </div></> : null }
      {review ? <>
        <h2>Review your details</h2>
        <div>
          <div>
            <h2 className={styles.reviewsectiontitle}>Account Details</h2>
            <div className={styles.reviewcontent}>
              <h4 className=" font-bold mr-5">Email</h4>
              <p>{formData.email}</p>
              {/* {errors.email === "" ? null : <small className={styles.errorhandlingtext}>{errors.email}</small>} */}
            </div>
            <div className={styles.reviewcontent}>
              <h4 className="font-bold">username</h4>
              <p>{formData.username}</p>
              {/* {errors.username === "" ? null : <small className={styles.errorhandlingtext}>{errors.username}</small>} */}
            </div> 
            <div className={styles.reviewcontent}>
              <h4 className="font-bold">password</h4>
              <p>{formData.password}</p>
              {/* {errors.password === "" ? null : <small className={styles.errorhandlingtext}>{errors.password}</small>} */}
            </div>
            <div className={styles.reviewcontent}>
              <h4 className="font-bold">profile Avatar</h4>
              <a>view avatar</a>
              {/* {errors.profileImage === "" ? null : <small className={styles.errorhandlingtext}>{errors.profileImage}</small>} */}
            </div>
          </div>
          <div>
            <h2 className={styles.reviewsectiontitle}>Profile details</h2>
            <div>
              <h4 className="font-bold">Location</h4>
              <p>{formData.location}</p>
              {/* {errors.location && <small className="text-red-600">{errors.location}</small>}  */}
            </div>
            <div className={styles.reviewcontent}>
              <h4 className="font-bold">How far will you travel?</h4>
              <p>{formData.travel}</p>
              {/* {errors.travel === "" ? null : <small className={styles.errorhandlingtext}>{errors.travel}</small>} */}
            </div>
            <div className={styles.reviewcontent}>
              <h4 className="font-bold">Website</h4>
              <p>{formData.websiteUrl}</p>
              {/* {errors.websiteUrl === "" ? null : <small className={styles.errorhandlingtext}>{errors.websiteUrl}</small>} */}
            </div>
            <div className={styles.reviewcontent}>
              <h4 className="font-bold">Video of you performing </h4>
              <p>{formData.videoUrl}</p>
              {/* {errors.videoUrl === "" ? null : <small className={styles.errorhandlingtext}>{errors.videoUrl}</small>} */}
            </div>
            <div className={styles.reviewcontent}>
              <h4 className="font-bold">Your music</h4>
              <p>{formData.musicUrl}</p>
              {/* {errors.musicUrl === "" ? null : <small className={styles.errorhandlingtext}>{errors.musicUrl}</small>} */}
            </div> 
            <div className={styles.reviewcontent}> 
              <h4 className="font-bold">Background Card image</h4>
            </div>
            <div className={styles.reviewcontent}>
              <h4 className="font-bold">gallery image 1</h4>
              <p>{formData.galleryImage1}</p>
              {/* {errors.galleryImage1 === "" ? null : <small className={styles.errorhandlingtext}>{errors.galleryImage1}</small>} */}
            </div>
            <div className={styles.reviewcontent}>
              <h4 className="font-bold">gallery image 2 (optional)</h4>
              <p>{formData.galleryImage2}</p>
              {/* {errors.galleryImage2 === "" ? null : <small className={styles.errorhandlingtext}>{errors.galleryImage2}</small>} */}
            </div>
            <div className={styles.reviewcontent}>
              <h4 className="font-bold">gallery image 3 (optional)</h4>
              <p>{formData.galleryImage3}</p>
              {/* {errors.galleryImage3 === "" ? null : <small className={styles.errorhandlingtext}>{errors.galleryImage3}</small>} */}
            </div>
            <div className={styles.reviewcontent}>
              <h4 className="font-bold">Your Bio</h4>
              <p>{formData.bio}</p>
              {/* {errors.bio === "" ? null : <small className={styles.errorhandlingtext}>{errors.bio}</small>} */}
            </div>
            <div className={styles.reviewcontent}>
              <h4 className="font-bold">ArtistName</h4>
              <p>{formData.artistName}</p>
              {/* {errors.artistName === "" ? null : <small className={styles.errorhandlingtext}>{errors.artistName}</small>} */}
            </div>
            <div className={styles.reviewcontent}>
              <h4 className="font-bold">Facebook</h4>
              <p>{formData.fbUrl}</p>
              {/* {errors.fbUrl === "" ? null : <small className={styles.errorhandlingtext}>{errors.fbUrl}</small>} */}
            </div>
            <div className={styles.reviewcontent}>
              <h4 className="font-bold">Twitter</h4>
              <p>{formData.twitterUrl}</p>
              {/* {errors.twitterUrl === "" ? null : <small className={styles.errorhandlingtext}>{errors.twitterUrl}</small>} */}
            </div>
            <div className={styles.reviewcontent}>
              <h4 className="font-bold">YouTube</h4>
              <p>{formData.youTubeUrl}</p>
              {/* {errors.youTubeUrl === "" ? null : <small className={styles.errorhandlingtext}>{errors.youTubeUrl}</small>} */}
            </div>
            <div className={styles.reviewcontent}>
              <h4 className="font-bold">Instagram</h4>
              <p>{formData.instagramUrl}</p>
              {/* {errors.instagramUrl === "" ? null : <small className={styles.errorhandlingtext}>{errors.instagramUrl}</small>} */}
            </div>
          </div>
          <button  className={styles.nextbutton} onClick={handleSubmit}>Submit Registration</button>
          <button onClick={postreview} className={styles.backbutton} value='back'><i className="fa-solid fa-arrow-left-long"></i> Previous step</button>
        </div> </> : null 
      }
      {proccedlogin ? <>
        <div className={styles.procceprdlogin}>
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