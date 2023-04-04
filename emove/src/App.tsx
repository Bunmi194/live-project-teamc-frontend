import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ForgotPassword from "./pages/forgotPassword";
import CheckEmail from './pages/checkEmail';
import { ResetPassword } from './pages/resetPassword';
import { SuccessPage } from './pages/successPage';


// import tw from "tailwind-styled-components";

function App() { 
  return (
    <Routes>
      <Route path="/" element={<Home />} ></Route>
      <Route path="/forgotPassword" element={<ForgotPassword />} ></Route>
      <Route path="/resetPassword/:token" element={<ResetPassword />} ></Route>
      <Route path="/checkemail/:email" element={<CheckEmail />} ></Route>
      <Route path="/success" element={<SuccessPage/>} ></Route>
    </Routes>
  );
}

export default App;
