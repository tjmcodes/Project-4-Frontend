import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import styles from "./VenueRegister.module.css"

// import features from './data/features.js'
// import Select from 'react-select'

function VenueRegister() {
  
  const [Q1, setQ1] = React.useState(true)
  const [Q2, setQ2] = React.useState(false)
  const [Q3, setQ3] = React.useState(false)
  const [Q4, setQ4] = React.useState(false)
  const [Q5, setQ5] = React.useState(false)
  const [Q6, setQ6] = React.useState(false)
  const [Q7, setQ7] = React.useState(false)
  const [Q8, setQ8] = React.useState(false)
  const [Q9, setQ9] = React.useState(false)
  const [review, setreview] = React.useState(false)

  const [proccedlogin, setproccedlogin] = React.useState(false)
  // const [addanother1, setaddanother1] = React.useState(false)
  const [button, updateButton] = useState(false)
  const navigate = useNavigate()

  const progressBar = document.getElementById("progress")

  const [venueType, setVenueType] = React.useState( 
    { type: "" } );

  const [formData, setFormData] = useState({
    email: "", //
    username: "", //
    password: "",//
    profileImage: "", //
    title: "", //
    role: "", // 
    venueName: "", //
    type: "",
    // venueImage: "", 
    location: "", //
    address: "", //
    budget: "",
    websiteUrl: "",
    // videoUrl:"",
    // optionUrl:"",
    backgroundCardImage: "", //
    galleryImage1: "", //
    galleryImage2: "", //
    galleryImage3: "", //
    description: "", //
    fbUrl: "", //
    twitterUrl: "", //
    youTubeUrl: "", //
    instagramUrl: "", //
  })


  const [errors, setErrors] = useState({
    email: "", //
    username: "", //
    password: "",//
    profileImage: "", //
    title: "", //
    role: "", // 
    venueName: "", //
    type: "",
    // venueImage: "", 
    location: "", //
    address: "", //
    budget: "",
    websiteUrl: "",
    // videoUrl:"",
    // optionUrl:"",
    backgroundCardImage: "", //
    galleryImage1: "", //
    galleryImage2: "", //
    galleryImage3: "", //
    description: "", //
    fbUrl: "", //
    twitterUrl: "", //
    youTubeUrl: "", //
    instagramUrl: "", //
  })

  
  function handleChange(e) {
    console.log(e.target.value)
    const { name, value } = e.target
    setFormData({
      ...formData, //  This is whatever the form data was before, all it's fields.
      [name]: value, 
      
    })
    console.log(formData)
    setErrors({
      ...errors,
      [name]: '',
    })
    setVenueType({
      type: [{ type: (e.target.value) }],
    })
  }
  // console.log(type)

  function handleProfileUpload() {
    window.cloudinary.createUploadWidget(
      {
        cloudName: 'dgk61wxpy', 
        uploadPreset: 'venue-user-profile', 
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
    
  function handleBackgroundUpload() {
    window.cloudinary.createUploadWidget(
      {
        cloudName: 'dgk61wxpy', 
        uploadPreset: 'venue-background-card-image', 
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



  function handleGalleryUpload1() {
    window.cloudinary.createUploadWidget(
      {
        cloudName: 'dgk61wxpy', 
        uploadPreset: 'venue-gallery-images', 
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

  function handleGalleryUpload2() {
    window.cloudinary.createUploadWidget(
      {
        cloudName: 'dgk61wxpy', 
        uploadPreset: 'venue-gallery-images', 
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

  function handleGalleryUpload3() {
    window.cloudinary.createUploadWidget(
      {
        cloudName: 'dgk61wxpy', 
        uploadPreset: 'venue-gallery-images', 
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



  async function handleSubmit(event) {
    event.preventDefault()
    const newFormData = {
      ...formData,
      ...venueType,
    }
    console.log(event.target.value)
    try {
      await axios.post(`/api/venue-signup`, newFormData)
      updateButton(!button)
      setreview(false)
      setproccedlogin(true)
    } catch (err) {    
      setErrors(err.response.data.errors[0])
    }
    console.log(newFormData.type)
    console.log(errors)
  }
 
    
  function postQ1() {
    setQ1(false)
    setQ2(true)
    progressBar.value = 20
  }

  function postQ2(event) {
    setQ2(false)
    if (event.target.value === 'back') {
      setQ1(true)
      progressBar.value = 0
    } else {
      setQ3(true)
      progressBar.value = 30
    }
  }

  function postQ3(event) {
    setQ3(false)
    if (event.target.value === 'back') {
      setQ2(true)
      progressBar.value = 20
    } else {
      setQ4(true)
      progressBar.value = 40
    }
  }

  function postQ4(event) {
    setQ4(false)
    if (event.target.value === 'back') {
      setQ3(true)
      progressBar.value = 30
    } else {
      setQ5(true)
      progressBar.value = 50
    }
  }

  function postQ5(event) {
    setQ5(false)
    if (event.target.value === 'back') {
      setQ4(true)
      progressBar.value = 40
    } else {
      setQ6(true)
      progressBar.value = 60
    }
  }

  function postQ6(event) {
    setQ6(false)
    if (event.target.value === 'back') {
      setQ5(true)
      progressBar.value = 50
    } else {
      setQ7(true)
      progressBar.value = 70
    }
  }


  function postQ7(event) {
    setQ7(false)
    if (event.target.value === 'back') {
      setQ6(true)
      progressBar.value = 60
    } else {
      setQ8(true)
      progressBar.value = 80
    }
  }

  function postQ8(event) {
    setQ8(false)
    if (event.target.value === 'back') {
      setQ7(true)
      progressBar.value = 70
    } else {
      setQ9(true)
      progressBar.value = 90
    }
  }
  function postQ9(event) {
    setQ9(false)
    if (event.target.value === 'back') {
      setQ8(true)
      progressBar.value = 80
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

  // function postQ9() {
  //   console.log("clicked")
  //   const typearray = formData.type 
  //   console.log(typearray)
  //   const typeobject = typearray.map((tag, index) => ({ type: tag, index: index + 1 }));
  //   console.log(typeobject)
  //   formData.type = typeobject
  //   setQ9(false)
  //   setproccedlogin(true)
  //   const newCountVal = 100
  //   progressBar.value = newCountVal
  // }


  return (
    <div className={styles.page}>
      <progress id="progress" className={styles.formprogress} value="0" max="100"></progress>
      <p className={styles.indicator}>Venue Registration</p>
      {Q1 ? <>
        <h2 className={styles.titlebanner}>To get started lets setup your login credentials</h2>
        <div className={styles.questionbox}>
          <div >
            <h3 className={styles.h3}>Enter your Email address</h3>
          </div>
          <input 
            onChange={handleChange} 
            className={styles.textinput} 
            type="text" 
            name={'email'}
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
            name={'username'}
            value={formData.username}>
          </input>
      
          <div>
            <h3 className={styles.h3}>Choose a password</h3>
          </div>
          <input 
            onChange={handleChange} 
            className={styles.textinput} 
            type="password" 
            placeholder="Enter your password"
            name={'password'}
            value={formData.password}>
          </input>
      
          <div>
            <h3 className={styles.h3}>Please upload a profile image by clicking on the button below</h3>
          </div>
          <div className={styles.previewdiv}>
            <button onClick={handleProfileUpload} className={styles.uploadbutton}>upload profile picture</button>{
              formData.profileImage === "" ? null : <img src={formData.profileImage} className={styles.avatar} alt="profile image"></img>
            }
          </div>
          <button onClick={postQ1} className={styles.nextbutton}>{`Next Step`}</button>
        </div>
      </> : null }

      {Q2 ? <>
        <h2 className={styles.titlebanner}>Now a couple of details about you</h2>
        <div className={styles.questionbox}>
          <div>
            <h3 className={styles.h3}>What is your name? (This will be displayed on our site)</h3>
          </div>
          <div className={styles.questioncontainer}>
            <input 
              onChange={handleChange} 
              className={styles.textinput} 
              type="text" 
              placeholder="Enter your Name"   
              name={'title'}
              value={formData.title}>
            </input>
            <div>
              <h3 className={styles.h3}>What is your Job title</h3>
            </div>
            <input 
              onChange={handleChange} 
              className={styles.textinput} 
              type="text" 
              placeholder="eg. Assistant Manager, Owner"
              name={'role'}
              value={formData.role}>
            </input>
          </div>
          < div className={styles.buttondiv}>
            <button onClick={postQ2} className={styles.nextbutton}>Next Step</button>
            <button onClick={postQ2} className={styles.backbutton} value='back'><i className="fa-solid fa-arrow-left-long"></i> Previous step</button>
          </div>
        </div></> : null }
  
      {Q3 ? <>
        <div className={styles.questionbox}>
          <div className={styles.titlebanner}>
            <h3 className={styles.h3}>What is the Name of your Venue?</h3>
          </div>
          <input 
            onChange={handleChange} 
            className={styles.textinput} 
            type="text" 
            placeholder="eg. The windmill"
            name={'venueName'}
            value={formData.venueName}>
          </input>
          <button onClick={postQ3} className={styles.nextbutton}>Next Step</button>
          <button onClick={postQ3} className={styles.backbutton} value='back'><i className="fa-solid fa-arrow-left-long"></i> Previous step</button>
        </div></> : null }
  
      {Q4 ? <>
        <div className={styles.questionbox}>
          <div className={styles.titlebanner}>
            <h3 className={styles.h3}>Where is your venue located?</h3>
          </div>
          <select 
            className={styles.optionInput} 
            name={'location'}
            value={formData.location}
          >
            <option value="london">London</option>
            <option value="manchester">Manchester</option>
            <option value="birmingham">Birmingham</option>
            <option value="leeds">Leeds</option>
          </select>
          <input 
            onChange={handleChange} 
            className={styles.textinput} 
            type="text" 
            placeholder="Enter your street address"
            name={'address'}
            value={formData.address}></input>
          <button onClick={postQ4} className={styles.nextbutton}>Next Step</button>
          <button onClick={postQ4} className={styles.backbutton} value='back'><i className="fa-solid fa-arrow-left-long"></i> Previous step</button>
        </div></> : null }
    
      {Q5 ? <>
        <div className={styles.questionbox}>
          <div className={styles.titlebanner}>
            <h3 className={styles.h3}>Write a brief description of your venue</h3>
            <p className={styles.subheading}>(this will be displayed on your profile)</p>
          </div>
          <textarea 
            onChange={handleChange} 
            className={styles.textarea} 
            placeholder="Click hear to enter a brief description of your venue"
            name={'description'}
            value={formData.description}
          ></textarea>
          <button onClick={postQ5} className={styles.nextbutton}>Next Step</button>
          <button onClick={postQ5} className={styles.backbutton} value='back'><i className="fa-solid fa-arrow-left-long"></i> Previous step</button>
        </div></> : null }
  
      {Q6 ? <>
        <h2 className={styles.titlebanner}></h2>
        <div className={styles.questionbox}>
          <div>
            <h3 className={styles.h3}>What is your website?</h3>
          </div>
          <input 
            onChange={handleChange} 
            className={styles.textinput} 
            type="text" 
            placeholder="Enter your website URL"   
            name={'websiteUrl'}
            value={formData.websiteUrl}>
          </input>
          <div>
            <h3 className={styles.h3}>what is your budget for performers(£)</h3>
          </div>
          <input 
            onChange={handleChange} 
            className={styles.textinput} 
            type="text" 
            placeholder="100"
            name={'budget'}
            value={formData.budget}>
          </input>
          <button onClick={postQ6} className={styles.nextbutton}>Next Step</button>
          <button onClick={postQ6} className={styles.backbutton} value='back'><i className="fa-solid fa-arrow-left-long"></i> Previous step</button>
        </div></> : null }

      { Q7 ? <>
        <div className={styles.questionbox}>
          <div className={styles.titlebanner}>
            <h3 className={styles.h3}>Show Potential Artists what your venue is like</h3>
            <p className={styles.subheading}> add a background cover image and up to three gallery images below</p>
          </div>
                
          <button onClick={handleBackgroundUpload} className={styles.gallerybutton}>upload background cover image</button>{
            formData.backgroundCardImage === "" ? null : <a href={formData.backgroundCardImage}>Image uploaded Preview here</a>
          }            
          <button onClick={handleGalleryUpload1} className={styles.gallerybutton}>upload gallery image</button>{
            formData.galleryImage1 === "" ? null : <a href={formData.galleryImage1}>Image uploaded Preview here</a>
          }                      
          <button onClick={handleGalleryUpload2} className={styles.gallerybutton}>upload gallery image</button>{
            formData.galleryImage2 === "" ? null : <a href={formData.galleryImage2}>Image uploaded Preview here</a>
          }                        
          <button onClick={handleGalleryUpload3} className={styles.gallerybutton}>upload gallery image</button>{
            formData.galleryImage3 === "" ? null : <a href={formData.galleryImage3}>Image uploaded Preview here</a>
          }                        

          <button onClick={postQ7} className={styles.nextbutton}>Next Step</button>
          <button onClick={postQ7} className={styles.backbutton} value='back'><i className="fa-solid fa-arrow-left-long"></i> Previous step</button>

        </div></> : null}

      {Q8 ? <>
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
          {/* { addanother1 ? null : <button onClick={addanother}className={styles.addanotherbutton }>add another + </button>}
      {addanother1 && <><input onChange={handleChange} className={styles.textinput} type="text" placeholder="post the link to another social media account"></input>
        <button onClick={addanother}className={styles.addanotherbutton }>add another + </button></>}
      <button onClick={postQ5} className={styles.nextbutton}>{`Next -> `}</button> */}
          <button onClick={postQ8} className={styles.nextbutton}>Next Step</button>
          <button onClick={postQ8} className={styles.backbutton} value='back'><i className="fa-solid fa-arrow-left-long"></i> Previous step</button>
        </div></> : null }

      {Q9 ? <>
        <div className={styles.questionbox}>
          <div className={styles.titlebanner}>
            <h3 className={styles.h3}>What is the type of your venue? (Indoor, outdoor etc)</h3>
          </div>
          <input 
            placeholder="Enter type in here"
            onChange={handleChange} 
            className={styles.textinput} 
            type="text" 
            name="type" 
            value={formData.type}
          />
          <button onClick={postQ9} className={styles.nextbutton}>Review Details</button>
          <button onClick={postQ9} className={styles.backbutton} value='back'><i className="fa-solid fa-arrow-left-long"></i> Previous step</button>
        </div></> : null }
      {review ? <>
        <h2>Review your details</h2>
        <div>
          <div>
            <h4 className="font-bold">Email</h4>
            <p>{formData.email}</p>
            {/* {errors.email === "" ? null : <small className={styles.errorhandlingtext}>{errors.email}</small>} */}
          </div>
          <div>
            <h4 className="font-bold">username</h4>
            <p>{formData.username}</p>
            {/* {errors.username === "" ? null : <small className={styles.errorhandlingtext}>{errors.username}</small>} */}
          </div> 
          <div>
            <h4 className="font-bold">password</h4>
            <p>{formData.password}</p>
            {/* {errors.password === "" ? null : <small className={styles.errorhandlingtext}>{errors.password}</small>} */}
          </div>
          <div>
            <h4 className="font-bold">profile Avatar</h4>
            <a href={formData.profileImage}>view avatar</a>
            {/* {errors.profileImage === "" ? null : <small className={styles.errorhandlingtext}>{errors.profileImage}</small>} */}
          </div>
          <div>
            <h4 className="font-bold">Venue Name</h4>
            <p>{formData.venueName}</p>
          </div>
          <div>
            <h4 className="font-bold">Your description</h4>
            <p>{formData.description}</p>
          </div>
          <div>
            <h4 className="font-bold">Location</h4>
            <p>{formData.location}</p>
            {/* {errors.location && <small className="text-red-600">{errors.location}</small>}  */}
          </div>
          <div>
            <h4 className="font-bold">Website</h4>
            <p>{formData.websiteUrl}</p>
            {/* {errors.websiteUrl === "" ? null : <small className={styles.errorhandlingtext}>{errors.websiteUrl}</small>} */}
          </div>
          <div>
            <h4 className="font-bold">gallery image 1</h4>
            <p>{formData.galleryImage1}</p>
            {/* {errors.galleryImage1 === "" ? null : <small className={styles.errorhandlingtext}>{errors.galleryImage1}</small>} */}
          </div>
          <div>
            <h4 className="font-bold">gallery image 2 (optional)</h4>
          
            <p>{formData.galleryImage2}</p>
            {/* {errors.galleryImage2 === "" ? null : <small className={styles.errorhandlingtext}>{errors.galleryImage2}</small>} */}
          </div>
          <div>
            <h4 className="font-bold">gallery image 3 (optional)</h4>
            <p>{formData.galleryImage3}</p>
            {/* {errors.galleryImage3 === "" ? null : <small className={styles.errorhandlingtext}>{errors.galleryImage3}</small>} */}
          </div>
          <div>
            <h4 className="font-bold">Facebook</h4>
            <p>{formData.fbUrl}</p>
          </div>
          <div>
            <h4 className="font-bold">Twitter</h4>
            <p>{formData.twitterUrl}</p>
            <div>
              <h4 className="font-bold">YouTube</h4>
              <p>{formData.youTubeUrl}</p>
            </div>
            <div>
              <h4 className="font-bold">Instagram</h4>
              <p>{formData.instagramUrl}</p>
            </div>
          </div>
          <button  className={styles.nextbutton} onClick={handleSubmit}>Submit Registration</button>
          <button onClick={postreview} className={styles.backbutton} value='back'><i className="fa-solid fa-arrow-left-long"></i> Previous step</button>
        </div> </> : null 
      }

      {proccedlogin ? <>
        <div className={styles.proccedlogin}>
          <div className={styles.logintext}>
            <h3 className={styles.h3login}>You are now Registered!</h3>
            <h4 className={styles.h4login}>You can now find Talented artists</h4>
            <button onClick={navigate("/venue-login")} className={styles.loginbutton}>Proceed to Login</button>
          </div>
        </div></> : null }
    </div>
  )
}

export default VenueRegister