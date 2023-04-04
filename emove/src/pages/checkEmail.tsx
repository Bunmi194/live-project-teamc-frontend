import { StyledForgotPassword } from '../styles/forgotPassword.styles'
import getParam from '../utils/getParams'
import { Button } from '../components/Button'
import { EnvelopeIcon } from '../assets/EnvelopeIcon'
import { Card } from '../components/Card'

const CheckEmail = () => {
  const email = getParam(window.location.href)

  const handleClick = async (e: any) => {
    e.preventDefault()
    console.log(email)
    const res = await fetch(`http://localhost:3030/v1/users/forgotpassword`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origins': '*',
      },
      body: JSON.stringify({ email }),
    })
    console.log(res)
    if (res.status === 200) {
      console.log('sent')
    }
  }
  return (
    <>
      {/* <StyledForgotPassword>
        <div className='card'>
          <h3 className='h3_text_fp'>Check your email</h3>
          <p>
            We sent a password reset link to your email. Please click the link to reset your
            password.
          </p>
          <p className='login_link'> Didn’t received an email? 
             <Button handleClick={handleClick} text={"Click to Resend"} additionalClasses={"checkEmailButton"}  />
          </p>
        </div>
          </StyledForgotPassword> */}

      <div style={{ backgroundColor: '#F2F4F7', height: '100vh' }}>
        <Card
          icon={<EnvelopeIcon />}
          headerText={'Check your email'}
          bodyText={
            ' We sent a password reset link to your email. Please click the link to reset your password.'
          }
          additionalNode={
            <p style={{color:"#012a4a"}}>
              
              Didn't received an email?
              <Button
                handleClick={handleClick}
                text={'Click to Resend'}
                additionalClasses={'checkEmailButton'}
              />
            </p>
          }
          button={<Button text={'Back to Login'} additionalClasses={'successButton'}/>}        
        />
      </div>
    </>
  )
}

export default CheckEmail
