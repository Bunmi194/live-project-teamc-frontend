import React from 'react'
import { SuccessIcon } from '../assets/SuccessIcon'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import '../styles/button.styles.css'

export const SuccessPage = () => {
  return (
    <div style={{ backgroundColor: '#F2F4F7', height:"100vh" }}>
      <Card
        icon={<SuccessIcon />}
        headerText={'Success'}
        bodyText={'Your password has been changed successfully. Login to access your account'}
        button={<Button text={'Continue to Login'} additionalClasses={'successButton'} />}
      />
    </div>
  )
}
