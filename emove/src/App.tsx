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
//import { Navbar } from './components/UserNavbar';
import './styles/dashboard.styles.css'
import { Button } from './components/Button';
import { TripDetailsDashboard } from './pages/tripDetailsDashboard';
import { PaymentDashboard } from './pages/paymentDashboard';
import { ViewPaymentMethod } from './pages/viewPaymentMethod';
import { WalletPage } from './pages/walletPage';
import { MoreRoutes } from './components/MoreRoutes';
import { AdminPricingPage } from './pages/AdminPricingPage';
import { FormModal } from './components/FormModal';
import { AdminDriversPage } from './pages/AdminDriversPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';
import { AdminViewDriversPage } from './pages/AdminViewDriversPage';

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
      <Route path="/" element={<LandingPage />} ></Route>

      {/* User Dashboard */}
      <Route path="/user/book_trip" element={<DashboardPage />} ></Route>
      <Route path="/user/trip_details" element={<TripDetailsDashboard />} ></Route>
      <Route path="/user/make_payment" element={<PaymentDashboard/>} ></Route>
      <Route path="/user/payment_options" element={<ViewPaymentMethod/>} ></Route>
      <Route path="/user/wallet" element={<WalletPage />} ></Route>
      
      
      

      {/*Admin Dashboard  */}
      <Route path="/admin/pricing" element={<AdminPricingPage />} ></Route>
      <Route path="/admin/drivers" element={<AdminDriversPage />} ></Route>
      <Route path="/admin/driver" element={<AdminViewDriversPage />} ></Route>
      <Route path="/admin/dashboard" element={<AdminDashboardPage />} ></Route>


      <Route path="/moreroutes" element={<MoreRoutes />} ></Route>
      
      
     
      {/* <Route path="/login" element={<LoginPage />} ></Route>
      <Route path="/signup" element={<SignupPage />} ></Route> */}
      <Route path="/layout" element={<Layout />} ></Route>
    </Routes>
  );
}

export default App;
