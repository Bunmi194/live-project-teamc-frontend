import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ForgotPassword from './pages/forgotPassword';
import CheckEmail from './pages/checkEmail';
// import tw from "tailwind-styled-components";

function App() { 
  return (
    <Routes>
      <Route path="/" element={<Home />} ></Route>
      <Route path="/forgotPassword" element={<ForgotPassword />} ></Route>
      <Route path="/checkemail" element={<CheckEmail />} ></Route>
    </Routes>
  );
}

export default App;
