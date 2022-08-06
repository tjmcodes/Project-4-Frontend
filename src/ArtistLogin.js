import React from 'react';
// import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import styles from './ArtistLogin.module.css'

function ArtistLogin() {

  // const navigate = useNavigate() --> this will allow the page to navigate to ... once user is logged in.

  const [formData, setFormData] = React.useState({
    password: "",
    email: "",
  })

  function handleChange(e) {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    console.log(formData)
  }

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      const { data } = await axios.post('/api/artist-login', formData)
      localStorage.setItem('token', data.token)
      console.log(data.token)
    } catch (err) {
      console.log(err.response.data)
    }
  }

  return ( <>
    <div className={styles.page}>
      <div className={styles.signinpage}>
        <div className={styles.welcome}>
          {/* <i className="fa-solid fa-microphone fa-2x"></i> */}
        </div>
        <div className={styles.signinform}>
          <div>
            <h2 className={styles.welcometext}>Hello Artist!</h2>
            <h3 className={styles.loginbanner}>Login to your account</h3>
          </div>
          <div className={styles.loginform}>
            <form onSubmit={handleSubmit}>
              <label className={styles.label}>Email</label>
              <input 
                className={styles.textinput} 
                type="text" 
                placeholder="example@example.com"
                name={'email'}
                value={formData.email}
                onChange={handleChange}>
              </input>
              <label className={styles.label}>Password</label>
              <input 
                className={styles.textinput} 
                type="text" 
                placeholder="Enter your Password" 
                name={'password'}
                value={formData.password}
                onChange={handleChange}>
              </input>
              <div className={styles.buttondiv}>
                <button className={styles.loginbutton}>Log in </button>
                <button className={styles.button} >Switch to Venue Login</button>
                <button className={styles.venuebutton}>Dont have an account? <b className={styles.link}>Sign up</b></button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.imageside}>

        <div className={styles.sideHero}>
          <div className={styles.sideHeroText}>
            <h2>Welcome Back</h2>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default ArtistLogin