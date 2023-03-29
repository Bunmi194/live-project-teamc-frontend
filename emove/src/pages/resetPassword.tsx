import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card.component'

export  const ResetPassword = () => {
  const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState(false)
     const navigate = useNavigate()

    const handleSubmit = (e: any) => {
        if (confirmPassword !== password) {
            return setError(true)  
        }
        fetch(`http://localhost:3030/v1/users/resetpassword`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origins': '*',
      },
      body: JSON.stringify({password, confirmPassword}),
        })
        //useNavigate()


  }

  return (
    <div className='card'>
      <form className='signup' onSubmit={handleSubmit}>
        <h3 className='h3_text_fp'>Reset Password</h3>
        {error && <p>Password and Confirm Password must be the same</p>}
        <div className='password-field field'>
          <label>Password:</label>
          <input
            type='password'
            onChange={(e: any) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className='password-field field'>
          <label>Confirm Password:</label>
          <input
            type='password'
            onChange={(e: any) => setConfirmPassword(e.target.value)}
            value={password}
          />
              </div>
                <button className='signup-btn'>SUBMIT</button>
      </form>
    </div>
  )
}
