import React, {Component} from "react";
import CBDSlogo from "./images/cbds-logo.png";
import PurposeEden from './images/purposeedenskin.png';
import BoostOfJoy from './images/boostofjoybrand.png';
import HerokuLogo from '../components/images/heroku.png';
import MoonLotusLogo from '../components/images/moonlotuslogo.png';
import GitHubLogo from '../components/images/githublogo.png';

export default class GraphicDesign extends Component {
    render() {
        return (
            <div>
                <h1 className="DocFont">my design portfolio</h1>
                <h2 className="DocSubFont">Below is a list of brand designs I've completed from December 2016 until now.</h2>
            
            <section>
                
                <div className="columns is-multiline">
                

               <div className="column">
               <div className="card" style={{ height: '25rem'}}>
               <img src={CBDSlogo} alt="green-logo-text" className="Portfolio-Image" 
               style={{ height: '25rem'}} />

                   <div className="overlay">
                   <div className="card-content">
                    <div className="media-content">
                        <p className="title is-4">Cydney B Design Services</p>
                        </div>
                    <div className="content">
                    Cydney B Design Services is a brand design studio that helps intuitive coaches
                    tell their story with truth and honesty, while fulfilling their business dream.
                     <div className="SocialMedia-Icons">
                    <a href="https://crownclothes.herokuapp.com"><img src={HerokuLogo} alt="heroku-logo" height="50px" width="50px"/></a>
                    </div>
                    </div>
                </div>
                </div>
                   
                </div>
               </div>
                

               <div className="column">
                <div className="card" style={{ height: '25rem'}}>
                <img src={PurposeEden} alt="website-with-three-artists-and-FIA-company-description" 
                className="Portfolio-Image" style={{ height: '25rem'}}/>

                <div className="overlay">
                <div className="card-content">
                    <div className="media-content">
                        <p className="title is-4">Fiaworld Productions</p>
                    </div>
                    <div className="content">
                    Fiaworld.com is a production company website made with 
                    React, React Router DOM, Python, SQL, Django Rest Framework and Express.Js.
                    <div className="SocialMedia-Icons">
                   <a href="https://github.com/cydneypo034/fiaworld-project"><img src={GitHubLogo} alt="github-logo" height="50px" width="50px"/></a>
                    <a href="https://fierce-mountain-28176.herokuapp.com"><img src={HerokuLogo} alt="heroku-logo" height="50px" width="50px"/></a>
                    </div>
                    </div>
                </div>
                </div>
                
                </div>
                </div>


                <div className="column">
                <div className="card" style={{ height: '25rem'}}>
                <img src={BoostOfJoy} alt="website-page-with-anime-girl" 
                className="Portfolio-Image" style={{ height: '25rem'}}/>

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

                <div className="column">
                <div className="card" style={{ height: '25rem'}}>
                <img src={MoonLotusLogo} alt="website-page-with-anime-girl" 
                className="Portfolio-Image" style={{ height: '25rem'}}/>

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