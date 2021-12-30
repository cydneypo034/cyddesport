import React, { Component } from "react";
import CydneyPortfolio from '../components/images/cydneyportfolioimage.png';
import CrunchyrollPage from '../components/images/crunchyroll-loginpage.png';
import AnimeBae from '../components/images/animebaephoto.png';
import GhibliClock from '../components/images/ghibliclock.png';
import GitHubLogo from '../components/images/githublogo.png';
import HerokuLogo from '../components/images/heroku.png';
import NetlifyLogo from '../components/images/logomark.png';
import WebsiteLogo from '../components/images/website-logo.png';

export default class Portfolio extends Component {
    render () {
        return (
            <div>
                <h1 className="DocFont">my developer portfolio</h1>
            
            <section>
                
                <div className="columns is-multiline">

                <div className="column">
                <div className="card">
                <img src={GhibliClock} alt="ghibli-movie-slideshow" className="Portfolio-Image" />

                <div className="overlay">
                <div className="card-content">
                    <div className="media-content">
                        <p className="title is-4">Ghibli Clock App</p>
                    </div>
                    <div className="content">
                    The Ghibli Clock is a clock app with a slideshow of Studio Ghibli movies built with HTML, CSS, and JavaScript.
                    <div className="SocialMedia-Icons">
                    <a href="https://github.com/cydneypo034/myghibliclock"><img src={GitHubLogo} alt="github-logo" height="50px" width="50px"/></a>
                    <a href="https://myghibliclock.netlify.app/"><img src={NetlifyLogo} alt="heroku-logo" height="50px" width="50px"/></a>
                    </div>
                    </div>
                </div>
                </div>
               
                </div>
                </div>


                <div className="column">
                <div className="card">
                <img src={AnimeBae} alt="website-page-with-anime-girl" className="Portfolio-Image" />

                <div className="overlay">
                <div className="card-content">
                    <div className="media-content">
                        <p className="title is-4">Anime Bae App</p>
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



                <div className="column">
                <div className="card">
                <img src={CrunchyrollPage} alt="crunchyroll-login-page" className="Portfolio-Image" />

                <div className="overlay">
                <div className="card-content">
                    <div className="media-content">
                        <p className="title is-4">Crunchyroll Login Page</p>
                    </div>
                    <div className="content">
                    The Crunchyroll Sign In Page is a clone project based on 
                    Crunchyroll.com's sign-in page built with HTML, CSS and JavaScript.
                    <div className="SocialMedia-Icons">
                    <a href="https://github.com/cydneypo034/crunchyrolllogin"><img src={GitHubLogo} alt="github-logo" height="50px" width="50px"/></a>
                    <a href="https://crunchyroll-login.netlify.app/"><img src={NetlifyLogo} alt="heroku-logo" height="50px" width="50px"/></a>
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