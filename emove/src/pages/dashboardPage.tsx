import React, { useEffect, useState } from 'react'
import { Layout } from '../Layouts/Layout'
import {  UserNavbar } from '../components/UserNavbar'
import '../styles/dashboard.styles.css'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { DashboardLayout } from '../Layouts/DashboardLayout'
import { Arrow } from '../components/Arrow'
import { FaChevronDown } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { MoreRoutes } from '../components/MoreRoutes'

export const DashboardPage = () => {
  // const userCompleteDetails: string = localStorage.getItem('userDetails') as unknown as string;
  // const userObject = JSON.parse(userCompleteDetails).user;
  // return (
  //     <>
  //        <Layout useTopBottomLayout
  //         leftContentWidth='15vh'
  //         rightContentWidth='85vh'
  //       leftContent={<Navbar />}
  //       rightContent={
  //         <div style={{ height: "100%", width:"80%" }}>
  //           <div className="dashboard-header">Choose  route</div>
  //           <div className="body-container">
  //           <Layout
  //             leftContentWidth='65%'
  //               rightContentWidth='35%'
  //               additionalClasses='dashboard-journey-layout'
  //             leftContent={
  //               <div className='dashboard-card'>
  //                 <div className="dashboard-journey-card">
  //                   Bariga ------- Gbagada
  //                 </div>
  //                 <div className="dashboard-route-options">
  //                  <p>See more options</p> 
  //                 </div>
  //                 <div className="dashboard-button">
  //                  {<Button text={'Continue'} additionalClasses={'successButton dashboardButton'}  />}
  //                 </div>
  //               </div>
  //             }
  //               rightContent={
  //                 <div className="dashboard-image-container">
  const [more, setMore] = useState<boolean>(false)
  const [routes, setRoutes] = useState([])
  const [selectedValue, setSelectedValue] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    const getRoutes = async () => {
      const response = await fetch(`http://localhost:3030/v1/routes/getAllRoutes`)
      const responseJSON = await response.json()
      const data = responseJSON.routes
      setRoutes(data)
      console.log(responseJSON.routes)
    }
    getRoutes()
  }, [])

  const handleMore = () => {
    setMore(!more)
  }

  const handleChange = (e:any) => {
    setSelectedValue(e.target.value)
    console.log(selectedValue)
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
            leftContentWidth='65%'
            rightContentWidth='35%'
            additionalClasses='dashboard-journey-layout'
            leftContent={
              <div className='dashboard-card'>
                <div className='dashboard-journey-card'>
                  <p className='dashboard-route-name'>Bariga</p>
                  <span className='dashboard-route-arrow'>
                    {' '}
                    <Arrow />
                  </span>
                  <p className='dashboard-route-name'>Gbagada</p>
                </div>
                 {/* <div className="dashboard-route-options">
                    <p onClick={handleMore}>See more options <FaChevronDown /></p> 
                  </div>  */}
                <div className='dashboard-route-moreoptions'>
                   {/* {more && <MoreRoutes />} 
                   <MoreRoutes />  */}
                  <select className='more-routes-list'
                    value={selectedValue}
                    onChange={handleChange}
                    placeholder='See more options'
                    
                  >
                    <option disabled className='more-routes-list-items' label='See more options'>See more options</option> 

                    <>
                      {routes &&
                        routes.map((route: any) => (
                          <option className='more-routes-list-items' value={`${route.pickUpStation} - ${route.destination}`} key={route._id}>
                              {route.pickUpStation} - {route.destination}                           
                          </option>
                        ))}
                    </>
                  </select>
                </div>
                <div className='dashboard-button'>
                  {<Button text={'Continue'} additionalClasses={'successButton dashboardButton'} />}
                </div>
              </div>
            }
            customRightContentClasses='dashboard-right-content'
            rightContent={<div className='dashboard-image-container'></div>}
          />
        }
        header={<div className='dashboard-header'>Choose route</div>}
      />
    </>
  )
}
