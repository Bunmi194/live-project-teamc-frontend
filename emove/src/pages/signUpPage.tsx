import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Layout } from '../Layouts/Layout'
import { RoadIcon } from '../assets/RoadIcon'
import '../styles/signup.styles.css'
import SignUpImage from '../assets/sign-up-image.png'

export const SignUpPage = () => {
  const [email, setEmail] = useState()
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState()
  const [password, setPassword] = useState()
  const [loading, setLoading] = useState()

  const navigate = useNavigate()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const splitName = name!.split(' ')
    const [firstName, lastName] = splitName

    const res = await fetch(`http://localhost:3030/v1/users/signup`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origins': '*',
      },
      body: JSON.stringify({ email, password, phoneNumber, firstName, lastName }),
    })
    console.log(res)
    if (res.status === 200) {
      navigate(`/checkemail/${email}`)
      console.log('sent')
    }
  }
  return (
    <div className='signup-container'>
      <Layout
        leftContent={
          <Layout
            leftContentWidth='40%'
            rightContentWidth='60%'
            additionalClasses='signup-custom-layout'
            leftContent={
              <div className='left-content-container'>
                <div className='signup-icon-container'>
                  <div className='sign-road-icon'>
                    <RoadIcon />
                    <h2 className='signup-icon-text'>E-Move</h2>
                  </div>
                </div>
                <div className='signup-form-items'>
                  {/* <div className='signup-icon-container'>
                <div className='sign-road-icon'>
                  <RoadIcon />
                  <h2 className='signup-icon-text'>E-Move</h2>
                </div>
              </div> */}
                  <p className='signup-header-text'>Create your account</p>

                  <label>Full Name:</label>
                  <input
                    type='text'
                    required
                    onChange={(e: any) => setName(e.target.value)}
                    value={name}
                  />
                  <label>Email:</label>
                  <input
                    type='email'
                    required
                    onChange={(e: any) => setEmail(e.target.value)}
                    value={email}
                  />
                  <label>Phone Number:</label>
                  <input
                    type='text'
                    required
                    onChange={(e: any) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                  />
                  <label>Password:</label>
                  <input
                    type='password'
                    required
                    onChange={(e: any) => setPassword(e.target.value)}
                    value={password}
                  />

                  {loading ? (
                    <button className='signup-form-btn'>Just a Sec...</button>
                  ) : (
                    <button className='signup-form-btn' onClick={handleSubmit}>
                      Login
                    </button>
                  )}
                  <p className='sign-login-link'>
                    Already an account?
                    <Link to='/login'>Login</Link>
                  </p>
                </div>
              </div>
            }
            rightContent={
              <div className='signup-image-container'>
                {/* <img src= {SignUpImage} alt='Sign up' />      */}
              </div>
            }
          />
        }
      />
    </div>
  )
}
