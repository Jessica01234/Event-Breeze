import React from "react";
import "./hero.css";
import HomeImg1 from "../Assets/home-img 1.png";
import HomeImg2 from "../Assets/home-img 2.png";
import HomeImg3 from "../Assets/home-img 3.png";

function HomeHero(){

    return(
        <div>
            <nav className="heroContainer">
               <section className="h1container">
                    <h1 className="heroh1">Find Every <span >Web3</span>
                    <br/>
                    Events here
                    </h1>
               </section>
                <div className="heroImgContainer col-lg-12">
                    <img className="col-3 col-lg-3" src={HomeImg1} alt=""/>
                    <img className="col-3 col-lg-3" src={HomeImg2} alt=""/>
                    <img className="col-3 col-lg-3" src={HomeImg3} alt=""/>
                </div>
            </nav>
        </div>
    )
}
export default HomeHero;