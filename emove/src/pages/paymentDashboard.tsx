import React from 'react'
import '../styles/paymentDashboard.styles.css'
import { DashboardLayout } from '../Layouts/DashboardLayout'
import { Navbar } from '../components/Navbar'
import { Layout } from '../Layouts/Layout'
import { Button } from '../components/Button'
import { CardBulletPoint } from '../components/CardBulletPoint'


export const PaymentDashboard = () => {
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
              leftContentWidth='65%'
                rightContentWidth='35%'
                additionalClasses='dashboard-journey-layout'
              leftContent={
                  <div className='paymentdashboard-body'>
                      <div className="paymentdashboard-card">
                          {/* <CreditCardImage/> */}
                      </div>
                      <div className="paymentdashboard-addcard">
                          <p> <span> + </span> Add Payment Method</p>
                      </div>
                      <div className="paymentdashboard-header-payment-choice">Payment Type</div>  
                      <div className="paymentdashboard-payment-choice">
                        <CardBulletPoint/> <span>Card</span>
                      </div>  
                  </div>
              }
                customRightContentClasses='paymentdashboard-right-content'
                rightContent={
                    ""
                }
            />
          }
          header={<div className="paymentdashboard-header">Payment Method</div>}
      />
      </>
  )
}

