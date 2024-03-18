import React from "react"
import NavbarComp from "../../Navbar/navbar";
import "./home.css";
import HomeHero from "../../Hero/hero";

function Home(){
    return(
       <div className="Ancestor">
         <NavbarComp />
         <HomeHero />
       </div>
    )
}
export default Home;
