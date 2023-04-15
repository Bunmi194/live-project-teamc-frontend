import React from 'react'
import '../styles/tripDetailsDashboard.styles.css'
import { DashboardLayout } from '../Layouts/DashboardLayout'
import { Layout } from '../Layouts/Layout'
import { Button } from '../components/Button'
import { Sidebar } from '../components/Sidebar'
import { AdminNavbar } from '../components/AdminNavbar'

export const AdminDashboard = () => {
  return (
    <>
      <DashboardLayout
        navbar={<AdminNavbar />}
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
