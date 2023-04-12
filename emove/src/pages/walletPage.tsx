import React from 'react'
import '../styles/walletPage.styles.css'
import { DashboardLayout } from '../Layouts/DashboardLayout'
import { Navbar } from '../components/Navbar'
import { Layout } from '../Layouts/Layout'
import { Button } from '../components/Button'
import { CardBulletPoint } from '../components/CardBulletPoint'


export const WalletPage = () => {
  return (
      <>
        <DashboardLayout
          navbar={<Navbar />}
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
                  </div>
              }
                customRightContentClasses='walletpage-right-content'
                rightContent={
                    ""
                }
            />
          }
          header={<div className="walletpage-header">Wallet</div>}
      />
      </>
  )
}

