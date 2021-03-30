import React, { Component } from "react";
import CrownClothes from '../components/images/crownclothesproj.png';
import GitHubLogo from '../components/images/githublogo.png';
import HerokuLogo from '../components/images/heroku.png';

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
                <div className="card-content">
                    <div className="media-content">
                        <p className="title is-4">CRWN Clothing Ltd.</p>
                    </div>
                    <div className="content">
                    CRWN Clothing Ltd. is a e-commerce fashion website made with React, React Router DOM, React Redux, Stripe API, Firebase, and Reselect. 
                    &nbsp; <a href="https://github.com/cydneypo034/crown-clothing"><img src={GitHubLogo} alt="github-logo" height="50px" width="50px"/></a>
                    <a href="https://crownclothes.herokuapp.com"><img src={HerokuLogo} alt="heroku-logo" height="50px" width="50px"/></a>
                    </div>
                </div>
                </div>


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