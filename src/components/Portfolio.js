import React, { Component } from "react";
import CydneyPortfolio from '../components/images/cydneyportfolioimage.png';
import WeatherPage from '../components/images/weatherphoto.png';
import Feminaku from '../components/images/feminakuhomepage.png';
import AnimeBae from '../components/images/animebaephoto.png';
import MySimonSays from '../components/images/littleponyphoto.png';
import GitHubLogo from '../components/images/githublogo.png';
import HerokuLogo from '../components/images/heroku.png';
import NetlifyLogo from '../components/images/logomark.png';
import WebsiteLogo from '../components/images/website-logo.png';

export default class Portfolio extends Component {
    render () {
        return (
            <div>
                <h1 className="DocFont">my portfolio</h1>
                <h2 className="DocSubFont">Below is a list of my web applications 
                I've completed from my time in coding bootcamp until now.</h2>
            
            <section>
                
                <div className="columns is-multiline">

                <div className="column">
                <div className="card">
                <img src={AnimeBae} alt="website-page-with-anime-girl" className="Portfolio-Image" />

                <div className="overlay">
                <div className="card-content">
                    <div className="media-content">
                        <p className="title is-4">Anime Bae MERN App</p>
                    </div>
                    <div className="content">
                    Anime Bae is an CRUD database application made with 
                    React, React Router DOM, Mongoose, MDBootstrap, and Mongo DB.
                    <div className="SocialMedia-Icons">
                    <a href="https://github.com/cydneypo034/animebaedeaux"><img src={GitHubLogo} alt="github-logo" height="50px" width="50px"/></a>
                    <a href="https://animebaeapp.herokuapp.com/"><img src={HerokuLogo} alt="heroku-logo" height="50px" width="50px"/></a>
                    </div>
                    </div>
                </div>
                </div>
               
                </div>
                </div>

                <div className="column">
                <div className="card">
                <img src={Feminaku} alt="website-page-with-anime-girl" className="Portfolio-Image" />

                <div className="overlay">
                <div className="card-content">
                    <div className="media-content">
                        <p className="title is-4">Feminaku App</p>
                    </div>
                    <div className="content">
                    Feminaku is a front-end web application made with 
                    React, React Router DOM, MDBootstrap,and Bulma.
                    <div className="SocialMedia-Icons">
                    <a href="https://github.com/cydneypo034/feminakubabes"><img src={GitHubLogo} alt="github-logo" height="50px" width="50px"/></a>
                    <a href="https://feminakubabes.netlify.app/"><img src={NetlifyLogo} alt="heroku-logo" height="50px" width="50px"/></a>
                    </div>
                    </div>
                </div>
                </div>
               
                </div>
                </div>
                

                <div className="column">
                <div className="card">
                <img src={CydneyPortfolio} alt="website-with-pink-text" className="Portfolio-Image" />

                <div className="overlay">
                <div className="card-content">
                    <div className="media-content">
                        <p className="title is-4">Cydney Pollard Portfolio</p>
                    </div>
                    <div className="content">
                    Cydney Pollard's Portfolio is a digital portfolio
                    made with React, React Router DOM, Bulma and Bootstrap.
                    <div className="SocialMedia-Icons">
                    <a href="https://github.com/cydneypo034/cyddesport"><img src={GitHubLogo} alt="github-logo" height="50px" width="50px"/></a>
                    <a href="https://cydneypo034.github.io/cyddesport/#/"><img src={WebsiteLogo} alt="heroku-logo" height="50px" width="50px"/></a>
                    </div>
                    </div>
                </div>
                </div>
               
                </div>
                </div>

                


                </div>
                
            </section>
            </div>
        )
    }
};