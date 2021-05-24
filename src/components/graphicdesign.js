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
                <img src={PurposeEden} alt="skincare-logo-with-red-flowers" 
                className="Portfolio-Image" style={{ height: '25rem'}}/>

                <div className="overlay">
                <div className="card-content">
                    <div className="media-content">
                        <p className="title is-4">Purposefully Eden Skincare</p>
                    </div>
                    <div className="content">
                    Purposefully Eden Skincare is a skincare line for African-american women 
                    <div className="SocialMedia-Icons">
                    <a href="https://fierce-mountain-28176.herokuapp.com"><img 
                    src={HerokuLogo} alt="heroku-logo" height="50px" width="50px"/></a>
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
                        <p className="title is-4">A Boost of Joy Coaching</p>
                    </div>
                    <div className="content">
                    A Boost of Joy Coaching helps womxn reclaim their inner joy, uncover their 
                    true confidence, and run toward their destiny wholeheartedly.
                    <div className="SocialMedia-Icons">
                    <a href="https://feminaku.herokuapp.com/"><img 
                    src={HerokuLogo} alt="heroku-logo" height="50px" width="50px"/></a>
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
                        <p className="title is-4">MoonLotus Digital Services</p>
                    </div>
                    <div className="content">
                    MoonLotus Digital Services helps
                    intuitive and spiritual online service providers with their social media presence so
                    they can serve their clients best and focus on elevating higher.
                    <div className="SocialMedia-Icons">
                    <a href="https://feminaku.herokuapp.com/"><img 
                    src={HerokuLogo} alt="heroku-logo" height="50px" width="50px"/></a>
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