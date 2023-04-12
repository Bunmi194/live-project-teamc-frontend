import { MouseEventHandler, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from '../components/Card'
import { Layout } from '../Layouts/Layout'
import { StyledForgotPassword } from '../styles/forgotPassword.styles'
import getParam from '../utils/getParams'

export const ResetPassword = () => {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState(false)
  const navigate = useNavigate()
  const href = window.location.href
  const token = getParam(href)

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = async (e: any) => {
    e.preventDefault()
    if (confirmPassword !== password) {
      return setError(true)
    }
    try {
      const res = await fetch(`http://localhost:3030/v1/users/resetpassword/${token}`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origins': '*',
        },
        body: JSON.stringify({ password, confirmPassword }),
      })
      if (res.status === 200) {
        console.log('OK')
        navigate('/success')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Layout
        leftContentWidth='100%'
        leftContent={
          <div className='cover-div'>
            <Card
              headerText='Reset Password'
              additionalNode={
                <div className='form-items'>
                  <div className='password-field'>
                    <label>Password:</label>
                    <input
                      type='password'
                      onChange={(e: any) => setPassword(e.target.value)}
                      value={password}
                    />
                  </div>
                  <div className='password-field'>
                    <label>Confirm Password:</label>
                    <input
                      type='password'
                      onChange={(e: any) => setConfirmPassword(e.target.value)}
                      value={confirmPassword}
                    />
                  </div>

                  <button className='signup-btn' onClick={handleSubmit}>
                    Reset Password
                  </button>
                </div>
              }
            />
          </div>
        }
      />
    </>
  )
}

//  <StyledForgotPassword>
//         <div className='card'>
//           <form className='signup'>
//             <h3 className='h3_text_fp'>Reset Password</h3>
//             {error && <p>Password and Confirm Password must be the same</p>}
//             <div className='password-field field'>
//               <label>Password:</label>
//               <input
//                 type='password'
//                 onChange={(e: any) => setPassword(e.target.value)}
//                 value={password}
//               />
//             </div>
//             <div className='password-field field'>
//               <label>Confirm Password:</label>
//               <input
//                 type='password'
//                 onChange={(e: any) => setConfirmPassword(e.target.value)}
//                 value={confirmPassword}
//               />
//             </div>
//             <button className='signup-btn' onClick={handleSubmit}>
//               SUBMIT
//             </button>
//           </form>
//         </div>
//       </StyledForgotPassword>
