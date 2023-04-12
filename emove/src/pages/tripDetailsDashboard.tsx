import React from 'react'
import '../styles/tripDetailsDashboard.styles.css'
import { DashboardLayout } from '../Layouts/DashboardLayout'
import { Navbar } from '../components/Navbar'
import { Layout } from '../Layouts/Layout'
import { Button } from '../components/Button'
import { Sidebar } from '../components/Sidebar'

export const TripDetailsDashboard = () => {
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
        toggleSidebar
        sidebar={<Sidebar />}
        mainContentWidth='80%'
        sidebarWidth='20%'
        mainContent={
          <Layout
            leftContentWidth='65%'
            rightContentWidth='35%'
            additionalClasses='dashboard-journey-layout'
            leftContent={
              <div className='tripdetails-card'>
                <div className='tripdetails-card-subheader-container'>
                  <h3 className='tripdetails-card-subheader'>Trip Details</h3>
                </div>
                <div className='tripdetails-map-container'> </div>
                <div className='tripdetails-journey-card'>
                  <div className='tripdetails-card-description'>
                    <p className='tripdetails-card-description-header'>Destination</p>
                    <p className='tripdetails-card-description-content'>Bariga - Gbagada</p>
                  </div>
                  <div className='tripdetails-card-description'>
                    <p className='tripdetails-card-description-header'>Amount</p>
                    <p className='tripdetails-card-description-content'>N 600.00</p>
                  </div>
                  <div className='tripdetails-card-description'>
                    <p className='tripdetails-card-description-header'>Date</p>
                    <p className='tripdetails-card-description-content'>Mon 7th - 4:00 PM</p>
                  </div>
                </div>
                <div className='tripdetails-button'>
                  {<Button text={'Continue'} additionalClasses={'successButton dashboardButton'} />}
                </div>
              </div>
            }
            customRightContentClasses='tripdetails-right-content'
            rightContent={<div className='tripdetails-image-container'></div>}
          />
        }
        header={<div className='tripdetails-header'>&#8592; Book a Trip</div>}
      />
    </>
  )
}
