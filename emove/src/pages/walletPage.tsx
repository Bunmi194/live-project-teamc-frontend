import React, { useState } from 'react'
import '../styles/walletPage.styles.css'
import { DashboardLayout } from '../Layouts/DashboardLayout'
import {  UserNavbar } from '../components/UserNavbar'
import { Layout } from '../Layouts/Layout'
import { Button } from '../components/Button'
import { CardBulletPoint } from '../components/CardBulletPoint'
import { FileIcon } from '../components/FileIcon'
import { Link } from 'react-router-dom'
import Modal from 'react-modal';
import { FormModal } from '../components/FormModal'
import { FaTimes } from 'react-icons/fa'
import ReactModal from 'react-modal'



export const WalletPage = () => {

  const [showModal, setShowModal] = useState(false)

  const handleOpenModal = () => {
        setShowModal(true)   
    }
  const handleCloseModal = () => {
     setShowModal(false)   
  }

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
                      <p className='walletpage-card-description-content'>N 2,035</p>
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

