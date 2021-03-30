import React, { Component } from "react";
import CrownClothes from '../components/images/crownclothesproj.png';

export default class Portfolio extends Component {
    render () {
        return (
            <div>
                <h1 className="DocFont">my portfolio</h1>
                <h2 className="DocSubFont">Below is a list of my web applications I've completed from July 2019 until now.</h2>
            
            <section>
                <div className="card-wrapper">
                
                <div className="card">
                <img src={CrownClothes} alt="clothing-store-website" className="Portfolio-Image" />
                <div className="overlay">

                </div>
                </div>
                
                
                
                </div>
            </section>
            </div>
        )
    }
};