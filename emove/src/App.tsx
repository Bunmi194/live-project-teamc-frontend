import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import ForgotPassword from "./pages/forgotPassword";
import CheckEmail from './pages/checkEmail';
import { ResetPassword } from './pages/resetPassword';
import { SuccessPage } from './pages/successPage';


import LandingPage from "./pages/LandingPage";
// import LoginPage from "./pages/LoginPage";
// import SignupPage from "./pages/SignupPage";
import { Layout } from './Layouts/Layout';
import { SignUpPage } from './pages/signUpPage';
import { LoginPage } from './pages/loginPage';
import { DashboardPage } from './pages/dashboardPage';
import { DashboardLayout } from './Layouts/DashboardLayout';
import { Navbar } from './components/Navbar';
import './styles/dashboard.styles.css'
import { Button } from './components/Button';
import { TripDetailsDashboard } from './pages/tripDetailsDashboard';
import { PaymentDashboard } from './pages/paymentDashboard';
import { ViewPaymentMethod } from './pages/viewPaymentMethod';
import { WalletPage } from './pages/walletPage';

// import tw from "tailwind-styled-components";

function App() { 
  return (
    <Routes>
      <Route path="/forgotPassword" element={<ForgotPassword />} ></Route>
      <Route path="/resetPassword/:token" element={<ResetPassword />} ></Route>
      <Route path="/checkemail/:email" element={<CheckEmail />} ></Route>
      <Route path="/success" element={<SuccessPage />} ></Route>
      <Route path="/signup" element={<SignUpPage />} ></Route>
      <Route path="/login" element={<LoginPage />} ></Route>
      <Route path="/dashboard" element={<DashboardPage />} ></Route>
      <Route path="/tripdashboard" element={<TripDetailsDashboard />} ></Route>
      <Route path="/paymentdashboard" element={<PaymentDashboard/>} ></Route>
      <Route path="/viewpaymentmethod" element={<ViewPaymentMethod/>} ></Route>
      <Route path="/wallet" element={<WalletPage/>} ></Route>
      {/* <Route path="/dashboardlayout" element={
        <DashboardLayout
          navbar={<Navbar />}
          navbarHeight='15%'
          bodyContainerHeight='85%'
          mainContentHeight='85%'
          headerHeight='15%'
          mainContent={
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
          }
          header={<div className="dashboard-header">Choose  route</div>}
        />} >
        
      </Route> */}
      <Route path="/" element={<LandingPage />} ></Route>
     
      {/* <Route path="/login" element={<LoginPage />} ></Route>
      <Route path="/signup" element={<SignupPage />} ></Route> */}
      <Route path="/layout" element={<Layout />} ></Route>
    </Routes>
  );
}

export default App;
