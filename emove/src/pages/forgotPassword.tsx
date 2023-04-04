import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { StyledForgotPassword } from '../styles/forgotPassword.styles'

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState()
    const [loading, setLoading] = useState()
    
    const navigate = useNavigate()

  const handleSubmit = async(e: any) => {
    e.preventDefault()
    console.log(email)
    const res = await fetch(`http://localhost:3030/v1/users/forgotpassword`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origins': '*',
      },
      body: JSON.stringify({email}),
    })
    console.log(res)
      if (res.status === 200) {
          navigate(`/checkemail/${email}`)
        console.log('sent')
      }
      
  }
  return (
    <>
      <StyledForgotPassword>
        <div className='card'>
          <form className='signup' onSubmit={handleSubmit}>
            <h3 className='h3_text_fp'>Forgot Password</h3>
            <p>
              Enter the email associated with your account and we’ll send an email with instructions
              to reset your password
            </p>
            <div className='email-field field'>
              <label>Email:</label>
              <input type='email' required onChange={(e: any) => setEmail(e.target.value)} value={email} />
            </div>

            {loading ? (
              <button className='signup-btn'>Just a Sec...</button>
            ) : (
              <button className='signup-btn'>SUBMIT</button>
            )}
            <p className='login_link'>
              <Link to='/login'>Back to Login</Link>
            </p>
          </form>
        </div>
      </StyledForgotPassword>
    </>
  )
}

export default ForgotPassword
