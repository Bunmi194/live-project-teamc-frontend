import React, { useState } from 'react'
import { Card } from './Card'
import '../styles/signup.styles.css'
import { Button } from './Button'
import { FaTimes } from 'react-icons/fa'



export const FormModal = () => {
    const [selectedValue, setSelectedValue] = useState('')
    const [accountNumber, setAccountNumber] = useState('')
    const [amount, setAmount] = useState('')
    const [showModal, setShowModal] = useState(false)


    const handleOpenModal = () => {
        setShowModal(true)   
    }
  const handleCloseModal = () => {
     setShowModal(false)   
  }
    
    const onHandleClick = (e:any) => {
        e.preventDefault()
        handleCloseModal()
  }  
    
  return (
      <Card
          headerText='Fund Wallet'
        //    button={<Button text={'Submit'} additionalClasses={'successButton'} />}
          additionalNode={
              <>
              {/* <FaTimes onClick={handleCloseModal} className="close" />  */}
              <form className='signup-form-items'>
                  <div className="choose-bank">
                    <label>Bank:</label>
                    <select value={selectedValue} placeholder='Select'>
                        <option></option>
                    </select>
                  </div>
                  <div className="account-number">
                    <label>Account Number:</label>
                    <input
                        type='text'
                        required
                        onChange={(e: any) => setAccountNumber(e.target.value)}
                        value={accountNumber}
                    />    
                  </div>
                  <div className="amount">
                    <label>Amount:</label>
                    <input
                        type='text'
                        required
                        onChange={(e: any) => setAmount(e.target.value)}
                        value={amount}
                    />    
                  </div>
                 <Button text={'Submit'} handleClick={onHandleClick} additionalClasses={'successButton dashboardButton'} />
              </form>
              </>
          }
      />
  )
}
