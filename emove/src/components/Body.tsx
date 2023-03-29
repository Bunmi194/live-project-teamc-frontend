import React from "react";

const Body: React.FC = () => {
    return (
        <div className="landingPage__bodyContainer">
            <div className="landingPageBody">
                <h3 className="landingPageHeader">Need to go out?</h3>
                <p>You no longer need cash! Make payment to go to your daily routes via E-move.</p>
                
                <span className="landingPageHowTo" >How to book a trip</span>
                
                <ul>
                    <li><span>Pick a route</span></li>
                    <li><span>Make your booking</span></li>
                    <li><span>Board a registered vehicle</span></li>
                    <li><span>Make payment</span></li>
                    <li><span>Arrive at your destination safely</span></li>
                </ul>
            </div>
            <div className="landingPageImage">
                <img src="/bus.svg" alt="bus" className="landingPage__bus"/>
            </div>
        </div>
    )
}

// const bodyContainer = {
//     display: "flex",
//     margin: "10% 5%"
// }
// const howTo = {
//     display: "2px solid red"
// }
// const landingPageHeader = {
//     textAlign: "center"
// }

export default Body;