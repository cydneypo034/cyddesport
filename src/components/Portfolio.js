import React, { Component } from "react";
import CydneyPortfolio from '../components/images/cydneyportfolioimage.png';
import CrownClothes from '../components/images/crownclothesproj.png';
import WeatherPage from '../components/images/weatherphoto.png';
import Feminaku from '../components/images/feminakufrontpage.png';
import MySimonSays from '../components/images/littleponyphoto.png';
import GitHubLogo from '../components/images/githublogo.png';
import HerokuLogo from '../components/images/heroku.png';
import netlify from '../components/images/logomark.png';

export default class Portfolio extends Component {
    render () {
        return (
            <div>
                <h1 className="DocFont">my portfolio</h1>
                <h2 className="DocSubFont">Below is a list of my web applications I've completed from July 2019 until now.</h2>
            
            <section>
                
                <div className="columns is-multiline">

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
                    <a href="https://github.com/cydneypo034/artist-app"><img src={GitHubLogo} alt="github-logo" height="50px" width="50px"/></a>
                    <a href="https://vast-dusk-81442.herokuapp.com/artstore"><img src={HerokuLogo} alt="heroku-logo" height="50px" width="50px"/></a>
                    </div>
                    </div>
                </div>
                </div>
               
                </div>
                </div>
                
                <div className="column">
                <div className="card">
                <img src={MySimonSays} alt="site-with-ponies-in-sqaures" className="Portfolio-Image" />

                <div className="overlay">
                <div className="card-content">
                    <div className="media-content">
                        <p className="title is-4">My Best Friend Says</p>
                    </div>
                    <div className="content">
                    My Best Friend Says is a rendition of the Simon Says game featuring My Little Pony 
                    characters made with HTML, CSS and ES6 JavaScript.
                    <div className="SocialMedia-Icons">
                    <a href="https://github.com/cydneypo034/mybestfriendsays"><img src={GitHubLogo} alt="github-logo" height="50px" width="50px"/></a>
                    <a href="https://adoring-bhaskara-ff6b52.netlify.com/"><img src={netlify} alt="heroku-logo" height="50px" width="50px"/></a>
                    </div>
                    </div>
                </div>
                </div>
                
                </div>
                </div>
                

               <div className="column">
                <div className="card">
                <img src={WeatherPage} alt="website-with-weather-display-for-city" className="Portfolio-Image" />

                <div className="overlay">
                <div className="card-content">
                    <div className="media-content">
                        <p className="title is-4">Celcius Weather App</p>
                    </div>
                    <div className="content">
                    Celcius Weather App is a weather display application made with 
                    React, Await & Async, Bootstrap, and OpenWeatherMap API.
                    <div className="SocialMedia-Icons">
                   <a href="https://github.com/cydneypo034/celciusweatherapp"><img src={GitHubLogo} alt="github-logo" height="50px" width="50px"/></a>
                    <a href="https://celciusweather.netlify.app/"><img src={netlify} alt="heroku-logo" height="50px" width="50px"/></a>
                    </div>
                    </div>
                </div>
                </div>
                
                </div>
                </div>

                <div className="column">
               <div className="card">
               <img src={CrownClothes} alt="clothing-store-website-with-5-shopping-categories" className="Portfolio-Image" />

                   <div className="overlay">
                   <div className="card-content">
                    <div className="media-content">
                        <p className="title is-4">CRWN Clothing Ltd.</p>
                        </div>
                    <div className="content">
                    CRWN Clothing Ltd. is a e-commerce fashion website made with
                     React, React Router DOM, React Redux, Stripe API, Firebase, and Reselect. 
                     <div className="SocialMedia-Icons">
                    <a href="https://github.com/cydneypo034/crown-clothing"><img src={GitHubLogo} alt="github-logo" height="50px" width="50px"/></a>
                    <a href="https://crownclothes.herokuapp.com"><img src={HerokuLogo} alt="heroku-logo" height="50px" width="50px"/></a>
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
                        <p className="title is-4">Feminaku Social Database</p>
                    </div>
                    <div className="content">
                    Feminaku Social Database is an social media application made with 
                    React, React Router DOM, Mongoose, MDBootstrap, and Mongo DB.
                    <div className="SocialMedia-Icons">
                    <a href="https://github.com/cydneypo034/feminakutwo"><img src={GitHubLogo} alt="github-logo" height="50px" width="50px"/></a>
                    <a href="https://feminaku.herokuapp.com/"><img src={HerokuLogo} alt="heroku-logo" height="50px" width="50px"/></a>
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