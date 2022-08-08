import React, { useState } from "react";
import styles from "./VenueRegister.module.css"

function VenueRegister() {
  
  const [Q1, setQ1] = React.useState(true)
  const [Q2, setQ2] = React.useState(false)
  const [Q3, setQ3] = React.useState(false)
  const [Q4, setQ4] = React.useState(false)
  const [Q5, setQ5] = React.useState(false)
  const [Q6, setQ6] = React.useState(false)
  const [Q7, setQ7] = React.useState(false)
  const [proccedlogin, setproccedlogin] = React.useState(false)
  const [addanother1, setaddanother1] = React.useState(false)

  const progressBar = document.getElementById("progress")

  

  
  const [formData, setFormData] = useState({
    email:"", //
    username:"", //
    profileImage:"", //
    title:"", //
    role:"", // 
    venueName: "", //
    type: "",
    // venueImage: "", 
    location: "", //
    address:"", //
    budget:"",
    websiteUrl:"",
    // videoUrl:"",
    // optionUrl:"",
    backgroundCardImage:"", 
    galleryImage1:"", //
    galleryImage2: "", //
    galleryImage3: "", //
    description: "", //
    fbUrl: "", //
    twitterUrl:"", //
    youTubeUrl: "", //
    instagramUrl: "", //
  })


  // const [errors, setErrors] = useState({
  //   email:"",
  //   username:"",
  //   profileImage:"",
  //   title:"",
  //   role:"",
  //   venueName: "",
  //   type: "",
  //   venueImage: "",
  //   location: "",
  //   address:"",
  //   budget:"",
  //   websiteUrl:"",
  //   videoUrl:"",
  //   optionUrl:"",
  //   backgroundCardImage:"",
  //   galleryImage1:"",
  //   galleryImage2: "",
  //   galleryImage3: "",
  //   description: "",
  //   fbUrl: "",
  //   twitterUrl:"",
  //   youTubeUrl: "",
  //   instagramUrl: "",
  // })


  function handleChange(e) {
    console.log(e.target.value)
    const { name, value } = e.target
    setFormData({
      ...formData, //  This is whatever the form data was before, all it's fields.
      [name]: value, 
    })
    // setErrors({
    //   ...errors,
    //   [name]: '',
    // })
    console.log(name)
  }

  function handleProfileUpload() {
    window.cloudinary.createUploadWidget(
      {
        cloudName: 'dgk61wxpy', 
        uploadPreset: 'Findartistsandvenues', 
        folder: 'Findartistsandvenues-profile-images',
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


//   async function handleSubmit(event) {
//     event.preventDefault()
//     try {
//       await axios.post(`/venue-signup`, formData)
//       updateButton(!button)
//       navigate('/venue-login')
//     } catch (err) {    
//       setErrors(err.response.data.errors)
//     }
//   }
  
    
  function postQ1() {
    setQ1(false)
    setQ2(true)
    const newCountVal = 12.5
    progressBar.value = newCountVal
  }

  function postQ2() {
    console.log("clicked")
    setQ2(false)
    setQ3(true)
    const newCountVal = 25
    progressBar.value = newCountVal
  }

  function postQ3() {
    console.log("clicked")
    setQ3(false)
    setQ4(true)
    const newCountVal = 37.5
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
    const newCountVal = 62.5
    progressBar.value = newCountVal
  }
  function postQ6() {
    console.log("clicked")
    setQ6(false)
    setQ7(true)
    const newCountVal = 75
    progressBar.value = newCountVal
  }
  function postQ7() {
    console.log("clicked")
    setQ7(false)
    setproccedlogin(true)
    const newCountVal = 87.5
    progressBar.value = newCountVal
  }

  function addanother() {
    setaddanother1(true)
  } 
 return (
    <>
      <progress id="progress" className={styles.formprogress} value="0" max="100"></progress>
      {Q1 ? <>
        <h2 className={styles.titlebanner}>To get started lets setup your login credientials</h2>
        <div className={styles.questionbox}>
          <div >
            <h3 className={styles.h3}>Enter your Email address</h3>
          </div>
          <input onChange={handleChange} className={styles.textinput} type="text" placeholder="examaple@example.com"></input>
          <div>
            <h3 className={styles.h3}>choose a Username</h3>
          </div>
          <input onChange={handleChange} className={styles.textinput} type="text" placeholder="Enter your name"></input>
          <div>
            <h3 className={styles.h3}>choose a password</h3>
          </div>
          <input onChange={handleChange} className={styles.textinput} type="text" placeholder="Enter your name"></input>
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
      <h2 className={styles.titlebanner}>Now a couple of details about you</h2>
      <div className={styles.questionbox}>
        <div>
          <h3 className={styles.h3}>What is your name? -- this will be displayed on our site ==</h3>
        </div>
        <input onChange={handleChange} className={styles.textinput} type="text" placeholder="Enter your Name"></input>
        <div>
          <h3 className={styles.h3}>What is your Job title</h3>
        </div>
        <input onChange={handleChange} className={styles.textinput} type="text" placeholder="eg. Assistant Manager, Owner"></input>
        <button onClick={postQ2} className={styles.nextbutton}>{`Next -> `}</button>
      </div></> : null }
      {Q3 ? <>
        <div className={styles.questionbox}>
          <div className={styles.titlebanner}>
            <h3 className={styles.h3}>What is the Name of your Venue?</h3>
          </div>
          <input onChange={handleChange} className={styles.textinput} type="text" placeholder="eg. The windmill"></input>
          <button onClick={postQ3} className={styles.nextbutton}>{`Next -> `}</button>
        </div></> : null }
      {Q4 ? <>
        <div className={styles.questionbox}>
          <div className={styles.titlebanner}>
            <h3 className={styles.h3}>where is your venue located?</h3>
          </div>
          <select className={styles.optionInput} id="cars" name="cars">
            <option value="london">London</option>
            <option value="manchester">Manchester</option>
            <option value="birmingham">Birmingham</option>
            <option value="leeds">Leeds</option>
          </select>
          <input onChange={handleChange} className={styles.textinput} type="text" placeholder="Enter your street address"></input>
          <button onClick={postQ4} className={styles.nextbutton}>{`Next -> `}</button>
        </div></> : null }
        
        {Q5 ? <>
        <div className={styles.questionbox}>
          <div className={styles.titlebanner}>
            <h3 className={styles.h3}>Write a brief description of you venue</h3>
            <p>this will be displayed on your profile</p>
          </div>
          <textarea onChange={handleChange} placeholder="Click hear to enter a brief description of your venue"></textarea>
          <button onClick={postQ5} className={styles.nextbutton}>{`Next -> `}</button>
        </div></> : null }
      
      { Q6 ? <>
      <div className={styles.questionbox}>
          <div className={styles.titlebanner}>
            <h3 className={styles.h3}>Show Potential Artists what your venue is like</h3>
            <p> add a background cover image and up to three gallery images below</p>
          </div>
                    
          <button onClick={handleBackgroundUpload} className={styles.nextbutton}>upload image +</button>            
          <button onClick={handleGalleryUpload1} className={styles.nextbutton}>upload image +</button>            
          <button onClick={handleGalleryUpload2} className={styles.nextbutton}>upload image +</button>            
          <button onClick={handleGalleryUpload3} className={styles.nextbutton}>upload image +</button>            

          <button onClick={postQ6} className={styles.nextbutton}>{`Next -> `}</button>
  
        </div></> : null}
      {Q7 ? <>
        <div className={styles.questionbox}>
          <div className={styles.titlebanner}>
            <h3 className={styles.h3}>Lifes better when you share! add your social media accounts below</h3>
          </div>
          <input onChange={handleChange} className={styles.textinput} type="text" placeholder="Facebook (optional)"></input>
          <input onChange={handleChange} className={styles.textinput} type="text" placeholder="Twitter (optional)"></input>
          <input onChange={handleChange} className={styles.textinput} type="text" placeholder="YouTube (optional)"></input>
          <input onChange={handleChange} className={styles.textinput} type="text" placeholder="Instagram (optional)"></input>
          {/* { addanother1 ? null : <button onClick={addanother}className={styles.addanotherbutton }>add another + </button>}
          {addanother1 && <><input onChange={handleChange} className={styles.textinput} type="text" placeholder="post the link to another social media account"></input>
            <button onClick={addanother}className={styles.addanotherbutton }>add another + </button></>}
          <button onClick={postQ5} className={styles.nextbutton}>{`Next -> `}</button> */}
          <button onClick={postQ7} className={styles.nextbutton}>{`Next -> `}</button>
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

export default VenueRegister