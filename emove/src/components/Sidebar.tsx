import React from 'react'
import "../styles/sidebar.styles.css"
import { Tab } from './Tab'
import { DashboardIcon } from './DashboardIcon'
import { AddDriverIcon } from './AddDriverIcon'
import { MoneyBillIcon } from './MoneyBillIcon'

export const Sidebar = () => {
  return (
    <div className='sidebar-container'>
          <ul className='sidebar-list'>
              {/* <li className='sidebar-list-item'>Main</li> */}
              <li className='sidebar-list-item'>
                  <Tab
                      icon={<DashboardIcon/>}
                      text="Dashboard" 
                      customClasses='tab-dashboard-active'
                  />
                  
              </li>
              <li className='sidebar-list-item'>
                  <Tab
                      icon={<AddDriverIcon/>}
                      text="Add Driver" 
                  />
                  </li>
              <li className='sidebar-list-item'>
                  <Tab
                    icon={<MoneyBillIcon/>}
                    text="Pricing"
                  />
              </li>
          </ul>      
    </div>
  )
}

