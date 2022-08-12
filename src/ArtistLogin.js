import React from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import styles from './ArtistLogin.module.css'
import { Link } from 'react-router-dom';

function ArtistLogin() {

  //  --> this will allow the page to navigate to ... once user is logged in.
  const navigate = useNavigate()
  const [formData, setFormData] = React.useState({
    password: "",
    email: "",
  })

  const [errors, setErrors] = React.useState({
    password: "",
    email: "",
  })
  function handleChange(e) {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    setErrors({
      ...errors,
      [name]: '',
    })
    console.log(formData)
  }

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      const { data } = await axios.post('/api/artist-login', formData)
      localStorage.setItem('token', data.token)
      console.log(data.token)
      console.log('logged in')
      navigate('/venues') 
    } catch (err) {
      if (err.response.data.message === "No Registered user with this email, please try again") {
        setErrors({ email: err.response.data.message })
        console.log(errors)
      } else if (err.response.data. message === "Incorrect Password") {
        setErrors({ password: err.response.data.message })
        console.log(errors)
      }
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
              {errors.email === "" ? null : <small className={styles.errorhandlingtext}>{errors.email}</small>} 

              <label className={styles.label}>Password</label>
              <input 
                className={styles.textinput} 
                type="password" 
                placeholder="Enter your Password" 
                name={'password'}
                value={formData.password}
                onChange={handleChange}>
              </input>
              {errors.password === "" ? null : <small className={styles.errorhandlingtext}>{errors.password}</small>} 
              <div className={styles.buttondiv}>

                <button className={styles.loginbutton}>Log in </button>
                
                <Link to="/venue-login"> 
                  <button className={styles.button} >Switch to Venue Login</button>
                </Link>
                
                {/* <button onClick={logout} className={styles.loginbutton}>Log out </button> */}

                <Link to="/artist-register">
                  <button className={styles.venuebutton}>Dont have an account? <b className={styles.link}>Sign up</b></button>
                </Link>
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