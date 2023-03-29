import { StyledForgotPassword } from '../styles/forgotPassword.styled'
import { Link } from 'react-router-dom'

const CheckEmail = () => {
  return (
    <>
      <StyledForgotPassword>
        <div className='card'>
          <h3 className='h3_text_fp'>Check your email</h3>
          <p>
            We sent a password reset link to your email. Please click the link to reset your
            password.
          </p>
          <p className='login_link'> Didn’t received an email? 
            <Link to='/login'>Click to Resend</Link>
          </p>
        </div>
      </StyledForgotPassword>
    </>
  )
}

export default CheckEmail