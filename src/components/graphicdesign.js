import React, {Component} from "react";
import {Button} from 'react-bootstrap';
import CBDSlogo from "./images/cbds-logo.png";
import PurposeEden from './images/purposeedenskin.png';
import BoostOfJoy from './images/boostofjoybrand.png';
import MLDSPDF from '../components/uploads/MLDSPDF.pdf';
import MoonLotusLogo from '../components/images/moonlotuslogo.png';

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
                    Purposefully Eden Skincare is a skincare line that provides holistic and 
                    effective skincare and wellness products designed for african-american women. 
                    Their products are designed to improve the skin and nourish the soul with ingredients grown in Nigeria.
                    <div className="SocialMedia-Icons">
                    
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
                    <Button variant="default" style= {{ color: 'white', background: '#D9A3A3'}}
                     href={MLDSPDF} target="_blank">View MDLS PDF</Button>
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