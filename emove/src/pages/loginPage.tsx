import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Layout } from '../Layouts/Layout'
import { RoadIcon } from '../assets/RoadIcon'
import '../styles/login.styles.css'
import SignUpImage from '../assets/sign-up-image.png'

export const LoginPage = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [loading, setLoading] = useState()

  const navigate = useNavigate()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const res = await fetch(`http://localhost:3030/v1/users/login`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origins': '*',
      },
      body: JSON.stringify({ email, password }),
    })
    console.log(res)
    if (res.status === 200) {
      navigate(`/checkemail/${email}`)
      console.log('sent')
    }
  }
  return (
    <div className='login-container'>
      <Layout
        leftContent={
          <Layout
            leftContentWidth='40%'
            rightContentWidth='60%'
            additionalClasses='login-custom-layout'
            customLeftContentClasses='login-left-content'
            customRightContentClasses='login-right-content'
            leftContent={
              <div className='left-content-container'>
                <div className='login-icon-container'>
                  <div className='sign-road-icon'>
                    <RoadIcon />
                    <h2 className='login-icon-text'>E-Move</h2>
                  </div>
                </div>
                <div className='login-form-items'>
                  {/* <div className='login-icon-container'>
                <div className='sign-road-icon'>
                  <RoadIcon />
                  <h2 className='login-icon-text'>E-Move</h2>
                </div>
              </div> */}
                  <p className='login-header-text'>Hi, Welcome back</p>

                  <label>Email:</label>
                  <input
                    type='email'
                    required
                    onChange={(e: any) => setEmail(e.target.value)}
                    value={email}
                  />

                  <label>Password:</label>
                  <input
                    type='password'
                    required
                    onChange={(e: any) => setPassword(e.target.value)}
                    value={password}
                  />
                  <Link className='login-forgot-password' to='/forgotpassword'>
                    Forgot Password?
                  </Link>

                  {loading ? (
                    <button className='login-form-btn'>Just a Sec...</button>
                  ) : (
                    <button className='login-form-btn' onClick={handleSubmit}>
                      Login
                    </button>
                  )}
                  <p className='sign-login-link'>
                    Don’t have an account?
                    <Link to='/signup'>Create account</Link>
                  </p>
                </div>
              </div>
            }
            rightContent={
              <div className='login-image-container'>
                {/* <img src= {SignUpImage} alt='Sign up' />      */}
              </div>
            }
          />
        }
      />
    </div>
  )
}
