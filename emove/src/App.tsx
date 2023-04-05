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
// import tw from "tailwind-styled-components";

function App() { 
  return (
    <Routes>
      <Route path="/forgotPassword" element={<ForgotPassword />} ></Route>
      <Route path="/resetPassword/:token" element={<ResetPassword />} ></Route>
      <Route path="/checkemail/:email" element={<CheckEmail />} ></Route>
      <Route path="/success" element={<SuccessPage/>} ></Route>
      <Route path="/" element={<LandingPage />} ></Route>
      {/* <Route path="/login" element={<LoginPage />} ></Route>
      <Route path="/signup" element={<SignupPage />} ></Route> */}
      <Route path="/layout" element={<Layout />} ></Route>
    </Routes>
  );
}

export default App;
