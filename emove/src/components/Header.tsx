import React from 'react';
import { Link } from "react-router-dom";
// import styled from "styled-components";

const Header: React.FC = () => {
  return (
    <div style={headerContainer} className="landingPage__headerContainer">        
        <div className='landingPage__logo'>
            <div>
                <img src='/emove-logo.png' alt='logo' className='landingPage__logoImage'/>
            </div>
            <div>
                <span className='landingPage__appName'>E-Move</span>
            </div>
        </div>
        <div className="landingPage__rightHeader">
            <Link to="/about" style={{textDecoration: "none"}}>
                <span className="landingPage__navItem">About</span>
            </Link>
            <span className="landingPage__pipe"></span>
            <Link to="/login" style={{textDecoration: "none"}}>
                <span className="landingPage__navItem">Login</span>
            </Link>
            <Link to="/signup" style={{textDecoration: "none"}}>
                <button className="landingPage__navItemButton">Get Started</button>
            </Link>
        </div>
    </div>


  )
}

// const logoImage = {
//     width: '60%'
// }
// const pipe = {
    
// }
// const appName = {
//     fontSize: "22px",
//     marginLeft: "-70%",
//     display: "inline-block",
//     border: "1px solid red"

// }

// const logo = {
//     display: "grid",
//     alignItems: "center",
//     gridTemplateColumns: "1fr 1fr 1fr 1fr",
//     width: "60%",
//     // border: "1px solid red",
//     paddingLeft: "5%"
// }

const headerContainer = {
    display: "flex",
    width: "100%",
    margin: "auto",
    // border: "1px solid red",
}

// const rightHeader = {
//     margin: "auto",
//     paddingTop: "5px",
//     width: "60%",
//     // border: "1px solid red"
// }
// const navItem = {
//     margin: "0px 5px",
//     textDecoration: "none"
// }

// const navItemButton = {
//     margin: "0px 5px",
//     backgroundColor: "#F2903D",
//     color: "#FFFFFF",
//     padding: "5px 10px",
//     borderRadius: "5px"

// }
export default Header;