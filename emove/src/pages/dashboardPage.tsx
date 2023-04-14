import React from 'react'
import { Layout } from '../Layouts/Layout'
import { Navbar } from '../components/Navbar'
import '../styles/dashboard.styles.css'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { DashboardLayout } from '../Layouts/DashboardLayout'
import { Arrow } from '../components/Arrow'


export const DashboardPage = () => {
  // const userCompleteDetails: string = localStorage.getItem('userDetails') as unknown as string;
  // const userObject = JSON.parse(userCompleteDetails).user;
  return (
      <>
        {/* <Layout useTopBottomLayout
          leftContentWidth='15vh'
          rightContentWidth='85vh'
        leftContent={<Navbar />}
        rightContent={
          <div style={{ height: "100%", width:"80%" }}>
            <div className="dashboard-header">Choose  route</div>
            <div className="body-container">
            <Layout
              leftContentWidth='65%'
                rightContentWidth='35%'
                additionalClasses='dashboard-journey-layout'
              leftContent={
                <div className='dashboard-card'>
                  <div className="dashboard-journey-card">
                    Bariga ------- Gbagada
                  </div>
                  <div className="dashboard-route-options">
                   <p>See more options</p> 
                  </div>
                  <div className="dashboard-button">
                   {<Button text={'Continue'} additionalClasses={'successButton dashboardButton'}  />}
                  </div>
                </div>
              }
                rightContent={
                  <div className="dashboard-image-container">

                  </div>
                }
            />

            </div>
          </div>
        }
        /> */}
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
                <div className='dashboard-card'>
                  <div className="dashboard-journey-card">
                    <p className='dashboard-route-name'>Bariga</p>
                    <span className='dashboard-route-arrow'> <Arrow/></span>
                    <p className='dashboard-route-name'>Gbagada</p>
                    
                  </div>
                  <div className="dashboard-route-options">
                   <p>See more options</p> 
                  </div>
                  <div className="dashboard-button">
                   {<Button text={'Continue'} additionalClasses={'successButton dashboardButton'}  />}
                  </div>
                </div>
              }
                customRightContentClasses='dashboard-right-content'
                rightContent={
                  <div className="dashboard-image-container">

                  </div>
                }
            />
          }
          header={<div className="dashboard-header">Choose  route</div>}
      />
      </>
          
      
  )
}

