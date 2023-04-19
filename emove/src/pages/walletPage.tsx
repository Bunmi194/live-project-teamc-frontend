import React, { useEffect, useState } from 'react'
import '../styles/walletPage.styles.css'
import { DashboardLayout } from '../Layouts/DashboardLayout'
import {  UserNavbar } from '../components/UserNavbar'
import { Layout } from '../Layouts/Layout'
import { Button } from '../components/Button'
import { CardBulletPoint } from '../components/CardBulletPoint'
import { FileIcon } from '../components/FileIcon'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Modal from 'react-modal';
import { FormModal } from '../components/FormModal'
import { FaTimes } from 'react-icons/fa'
import ReactModal from 'react-modal'



export const WalletPage = () => {

  const [showModal, setShowModal] = useState(false);

  console.log("local: ", JSON.parse(`${localStorage.getItem('userDetails')}`))
  const details = JSON.parse(`${localStorage.getItem('userDetails')}`);

  const [ data, setData ] = useState(details);
  const navigate = useNavigate()



  
  // useEffect(updateRecord, [])

  const handleOpenModal = () => {
        setShowModal(true)   
    }
  const handleCloseModal = () => {
     setShowModal(false)   
  }

  const verifyPayment = async (ref:string) => {
    const verify = await fetch(`http://localhost:3030/v1/users/paystack/callback?reference=${ref}`);
    const result = await verify.json();
    if(!result || result.message !== "Success"){
      return false;
    }
    if(result.message === "Success"){
      console.log("USER:::::",result.user)
      const user = result.user;
      setData({...details, user});
      return true;
    }
    return false;
  }

  //make verify call
  const payment = localStorage.getItem("payment");
  
  useEffect(() =>{
    if(payment){

      const check = async () => {
        const reference = localStorage.getItem("payment") as string;
        console.log("ref: ", reference);
        const ref = JSON.parse(reference);
        localStorage.removeItem("payment");
        const paymentStatus = verifyPayment(ref.state);
        const status = await paymentStatus;
        if(status){
          //successful payment
          navigate('/user/wallet');
        }
        console.log("paymentStatus: ", await paymentStatus);
        console.log("ref: ", ref);
      }
      check()
    }
  }, [payment]);

  // console.log("special Result: ", result.reference)
  // const status = verifyPayment(result.reference);
  // if(!status){
  //   alert('Payment verification failed');
  //   return;
  // }

  return (
      <>
        <DashboardLayout
          navbar={<UserNavbar />}
          navbarHeight='15%'
          bodyContainerHeight='85%'
          mainContentHeight='85%'
          headerHeight='15%'
          customLeftContentClasses='dashboard-layout-header'
          customRightContentClasses='dashboard-layout-content'
          additionalClasses='dashboard-layout-containers'
          mainContent={
              <Layout
                  useTopBottomLayout
              leftContentWidth='35%'
                rightContentWidth='65%'
                additionalClasses='dashboard-journey-layout'
              leftContent={
                  <div className='walletpage-balance-card'>
                    <div className="walletpage-card-description">
                      <p className='walletpage-card-description-header'>Available Amount</p>
                      <p className='walletpage-card-description-content'>&#8358; {data.user.wallet_balance}</p>
                  </div>
                  <div className="walletpage-fundwallet">
                    <button  onClick={handleOpenModal} >Fund wallet </button>
                    <ReactModal
                      isOpen={showModal}
                      shouldCloseOnOverlayClick={true}
                      contentLabel={"Fund wallet"}>
                      <button onClick={handleCloseModal}
                        className='walletpage-closeModal'>
                        X</button>
                       <FormModal/>
                      </ReactModal>
                     
                   
                  </div>
                  </div>
                  
              }
                customRightContentClasses='walletpage-right-content'
                rightContent={
                  <div className='walletpage-transaction'>
                    <div className="walletpage-transaction-subheaders">
                      <p>Activity</p>
                      <p>Clear all</p>
                    </div>
                    <div className="walletpage-transaction-list">
                      <div className="walletpage-transaction-list-empty">
                      <FileIcon />
                      <p className='walletpage-transaction-list-empty-header'>No Transaction</p>
                      <p className='walletpage-transaction-list-empty-innerText'>You have not made any transaction yet.</p>

                      </div>
                    </div>
                  </div>
                }
            />
          }
          header={<div className="walletpage-header">Wallet</div>}
      />
      </>
  )
}

