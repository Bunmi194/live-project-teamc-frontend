import React from "react";
import { Layout } from "../Layouts/Layout";
import LeftComponent from "./leftBody";
import RightComponent from "./rightBody";


const Body: React.FC = () => {
    return (
        <Layout 
            leftContent={<LeftComponent />}
            rightContent={<RightComponent />}
            additionalClasses="landingPage__bodyContainer"
            leftContentWidth=""
            rightContentWidth=""
        />
        
            
        
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