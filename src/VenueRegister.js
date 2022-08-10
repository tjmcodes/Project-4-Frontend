import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import styles from "./VenueRegister.module.css"
import { set } from "mongoose";

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

  const [proccedlogin, setproccedlogin] = React.useState(false)
  const [addanother1, setaddanother1] = React.useState(false)
  const [button, updateButton] = useState(false)
  const navigate = useNavigate()

  const progressBar = document.getElementById("progress")
  

  const [mail, setmail] = React.useState("")
  function mailChange(e) {
    setmail(e.target.value)
    console.log(mail)
  }

  const [formData, setFormData] = useState({
    email: mail, //
    username:"", //
    password: "",//
    profileImage:"", //
    title:"", //
    role:"", // 
    venueName: "", //
    type: [],
    // venueImage: "", 
    location: "", //
    address:"", //
    budget:"",
    websiteUrl:"",
    // videoUrl:"",
    // optionUrl:"",
    backgroundCardImage:"", //
    galleryImage1:"", //
    galleryImage2: "", //
    galleryImage3: "", //
    description: "", //
    fbUrl: "", //
    twitterUrl:"", //
    youTubeUrl: "", //
    instagramUrl: "", //
  })


  const [errors, setErrors] = useState({
    email:"",
    username:"",
    profileImage:"",
    title:"",
    role:"",
    venueName: "",
    type: "",
    venueImage: "",
    location: "",
    address:"",
    budget:"",
    websiteUrl:"",
    // videoUrl:"",
    // optionUrl:"",
    backgroundCardImage:"",
    galleryImage1:"",
    galleryImage2: "",
    galleryImage3: "",
    description: "",
    fbUrl: "",
    twitterUrl:"",
    youTubeUrl: "",
    instagramUrl: "",
  })

  // async function handleSubmit(event) {
  //   event.preventDefault()
  //   try {
  //     await axios.post(`/api/venue-signup`, formData)
  //     updateButton(!button)
  //     navigate('/venue-login')
  //   } catch (err) {    
  //     setErrors(err.response.data.errors)
  //   }
  // }

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
    console.log(name)
  }

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
    try {
      await axios.post(`/api/venue-signup`, formData)
      updateButton(!button)
      navigate('/venue-login')
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

  function postQ2(event) {
    
    console.log("clicked")
  
      setQ2(false)
      if (event.target.value === 'back') {
      setQ1(true)
      } else {
      setQ3(true)
      const newCountVal = 30
      progressBar.value = newCountVal
  }
}

  function postQ3() {
    console.log("clicked")
    setQ3(false)
    setQ4(true)
    const newCountVal = 40
    progressBar.value = newCountVal
  }
  function postQ4() {
    console.log("clicked")
    setQ4(false)
    setQ5(true)
    const newCountVal = 50
    progressBar.value = newCountVal
  }

  function postQ5() {
    console.log("clicked")
    setQ5(false)
    setQ6(true)
    const newCountVal = 60
    progressBar.value = newCountVal
  }
  function postQ6() {
    console.log("clicked")
    setQ6(false)
    setQ7(true)
    const newCountVal = 70
    progressBar.value = newCountVal
  }
  function postQ7() {
    console.log("clicked")
    setQ7(false)
    setQ8(true)
    const newCountVal = 80
    progressBar.value = newCountVal
  }
  function postQ8() {
    console.log("clicked")
    setQ8(false)
    setQ9(true)
    const newCountVal = 90
    progressBar.value = newCountVal
  }
  function postQ9() {
    console.log("clicked")
    const typearray = formData.type 
    console.log(typearray)
    const typeobject = typearray.map((tag, index) => ({ type: tag, index: index + 1 }));
    console.log(typeobject)
    formData.type = typeobject
    setQ9(false)
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
  {Q1 ? <>
    <h2 className={styles.titlebanner}>To get started lets setup your login credentials</h2>
    <div className={styles.questionbox}>
      <div >
        <h3 className={styles.h3}>Enter your Email address</h3>
      </div>
      <input 
        onChange={mailChange} 
        className={styles.textinput} 
        type="text" 
        name={'email'}
        value={mail}
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
        type="text" 
        placeholder="Enter your password"
        name={'password'}
        value={formData.password}>
      </input>
      
      <div>
        <h3 className={styles.h3}>Please upload a profile image by clicking on the button below</h3>
      </div>
      <button onClick={handleProfileUpload} className={styles.uploadbutton}>upload profile picture</button>{
        formData.profileImage === "" ? null : <img src={formData.profileImage} alt="profile image"></img>
      }
      <button onClick={postQ1} className={styles.nextbutton}>{`Next Step`}</button>
    </div>
    </> : null }

  {Q2 ? <>
  <h2 className={styles.titlebanner}>Now a couple of details about you</h2>
  <div className={styles.questionbox}>
    <div>
      <h3 className={styles.h3}>What is your name? (This will be displayed on our site)</h3>
    </div>
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
    <button onClick={postQ2} className={styles.nextbutton}>Next Step</button>
    <button onClick={postQ2} className={styles.backbutton} value='back'>Previous step</button>
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
      <button onClick={postQ3} className={styles.nextbutton}>{`Next -> `}</button>
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
      <button onClick={postQ4} className={styles.nextbutton}>{`Next -> `}</button>
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
      <button onClick={postQ5} className={styles.nextbutton}>{`Next -> `}</button>
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
      <button onClick={postQ6} className={styles.nextbutton}>{`Next -> `}</button>
    </div></> : null }

  { Q7 ? <>
  <div className={styles.questionbox}>
      <div className={styles.titlebanner}>
        <h3 className={styles.h3}>Show Potential Artists what your venue is like</h3>
        <p className={styles.subheading}> add a background cover image and up to three gallery images below</p>
      </div>
                
      <button onClick={handleBackgroundUpload} className={styles.gallerybutton}>upload background cover image</button>            
      <button onClick={handleGalleryUpload1} className={styles.gallerybutton}>upload gallery image</button>            
      <button onClick={handleGalleryUpload2} className={styles.gallerybutton}>upload gallery image</button>            
      <button onClick={handleGalleryUpload3} className={styles.gallerybutton}>upload gallery image</button>            

      <button onClick={postQ7} className={styles.nextbutton}>{`Next -> `}</button>

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
      <button onClick={postQ8} className={styles.nextbutton}>{`Next -> `}</button>
    </div></> : null }

  {Q9 ? <>
      <div className={styles.questionbox}>
        <div className={styles.titlebanner}>
          <h3 className={styles.h3}>Type</h3> {/* Genres posting */}
        </div>
        <input 
          onChange={handleChange} 
          className={styles.textinput} 
          type="text" 
          placeholder="enter the type of venue you are"
          name="type" 
          value={formData.type}
        />
        { addanother1 ? null : <button onClick={addanother}className={styles.addanotherbutton }>add another + </button>}
        {addanother1 && <>
          <input 
          onChange={handleChange} 
          className={styles.textinput} 
          type="text" 
          placeholder="enter another genre that best suits your music"
          name="type" 
          value={formData.type}
        />
        <button onClick={addanother}className={styles.addanotherbutton }>add another + </button></>}
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

export default VenueRegister