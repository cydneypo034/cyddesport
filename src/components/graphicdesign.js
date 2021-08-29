import React, {Component} from "react";
import {Button} from 'react-bootstrap';
import CBDSlogo from "./images/cbds-logo.png";
import PurposeEden from './images/purposeedenskin.png';
import BoostOfJoy from './images/boostofjoybrand.png';
import Closetconfidence from './images/closetconfidencepng.png';
import MoonLotusLogo from '../components/images/moonlotuslogo.png';
import CWOWLogo from '../components/images/cwowlogo.jpg';
import ARSLogo from '../components/images/ars-logo.png';
import ChurchWowPDF from '../components/uploads/CWOWpdf.pdf';
import CydneyBDSPDF from '../components/uploads/CBDS-Pdf.pdf';
import MLDSPDF from '../components/uploads/MLDSPDF.pdf';
import PurposeSkinPDF from '../components/uploads/PESkin-PDF.pdf';
import BoostofJoyPDF from '../components/uploads/boostofjoy-PDF.pdf';
import CConfidencePDF from '../components/uploads/CCpdf.pdf';
import CCstrategyPDF from '../components/uploads/IGStrategyCC.pdf';
import AestheticRightPDF from '../components/uploads/ars-PRESENTFILE.pdf';
import ARSWorkbookPDF from '../components/uploads/DISCOVERWORKBOOK.pdf';

export default class GraphicDesign extends Component {
    render() {
        return (
            <div>
                <h1 className="DocFont">my design portfolio</h1>
                <h2 className="DocSubFont">Below is a list of brand designs I've completed.</h2>
            
            <section>
                
                <div className="columns is-multiline">

                <div className="column">
                <div className="card" style={{ height: '25rem'}}>
                <img src={ARSLogo} alt="green-logo-with-rectangle" 
                className="Portfolio-Image" style={{ height: '25rem'}}/>
                <div className="overlay">
                <div className="card-content">
                    <div className="media-content">
                        <p className="title is-4">Aesthetically Righteous Studios</p>
                    </div>
                    <div className="content">
                    Aesthetically Righteous Studios is an art studio located in Atlanta, Georgia. They're main focus is providing
                    artwork and designs that displays God's heart for His people. Below is a PDF of one of their workbooks
                    they use to aid their clients in finding their ideal clients and discovering what pain points to solve for them.
                    </div>

                    <div className="SocialMedia-Icons">
                    <Button variant="default" style= {{ color: 'white', background: '#D9A3A3', margin: '10px'}}
                     href={AestheticRightPDF} target="_blank">View Aesthetically Righteous PDF</Button>

                    <Button variant="default" style= {{ color: 'white', background: '#D9A3A3'}}
                     href={ARSWorkbookPDF} target="_blank">View ARS Discover Workbook PDF</Button>
                     </div>
                </div>
                </div>
                </div>
                </div>

               <div className="column">
               <div className="card" style={{ height: '25rem'}}>
               <img src={CBDSlogo} alt="green-logo-text" 
               className="Portfolio-Image" style={{ height: '25rem'}} />
                   <div className="overlay">
                   <div className="card-content">
                    <div className="media-content">
                        <p className="title is-4">Cydney B Design Services</p>
                        </div>
                    <div className="content">
                    Cydney B Design Services is a brand design studio that helps intuitive coaches
                    tell their story with truth and honesty, while fulfilling their business dream.
                    They do this through a unique approach of actively listening to their clients,
                    creating designs unique and specific to their coaching practices, and allowing the
                    heart and spirit behind a brand to truly shine.
                    </div>
                    <div className="SocialMedia-Icons">
                     <Button variant="default" style= {{ color: 'white', background: '#D9A3A3'}}
                     href={CydneyBDSPDF} target="_blank">View Cydney B Design Services PDF</Button>
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
                    Their products are designed to improve the skin and nourish the soul with 
                    ingredients grown in Nigeria.
                    </div>
                    <div className="SocialMedia-Icons">
                    <Button variant="default" style= {{ color: 'white', background: '#D9A3A3'}}
                     href={PurposeSkinPDF} target="_blank">View Purposefully Eden Skin PDF</Button>
                    </div>
                </div>
                </div>
                </div>
                </div>


                <div className="column">
                <div className="card" style={{ height: '25rem'}}>
                <img src={BoostOfJoy} alt="flower-logos-with-stars-and-font" 
                className="Portfolio-Image" style={{ height: '25rem'}}/>
                <div className="overlay">
                <div className="card-content">
                    <div className="media-content">
                        <p className="title is-4">A Boost of Joy Coaching</p>
                    </div>
                    <div className="content">
                    A Boost of Joy Coaching helps womxn reclaim their inner joy, uncover their 
                    true confidence, and run toward their destiny wholeheartedly. They do this through
                    a unique approach of having womxn look back at when they were younger and reach within themselves
                    to apologize to their inner child so they can encourage them to dream again.
                    </div>
                    <div className="SocialMedia-Icons">
                    <Button variant="default" style= {{ color: 'white', background: '#D9A3A3'}}
                     href={BoostofJoyPDF} target="_blank">View A Boost of Joy Coaching PDF</Button>
                    </div>
                </div>
                </div>
                </div>
                </div>


                <div className="column">
                <div className="card" style={{ height: '25rem'}}>
                <img src={MoonLotusLogo} alt="sun-flower-logo-with-moon-details" 
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
                    </div>
                    <div className="SocialMedia-Icons">
                    <Button variant="default" style= {{ color: 'white', background: '#D9A3A3'}}
                     href={MLDSPDF} target="_blank">View MDLS PDF</Button>
                    </div>
                </div>
                </div>
                </div>
                </div>


                <div className="column">
                <div className="card" style={{ height: '25rem'}}>
                <img src={Closetconfidence} alt="logo-with-clothes-hanger-and-crown" 
                className="Portfolio-Image" style={{ height: '25rem'}}/>
                <div className="overlay">
                <div className="card-content">
                    <div className="media-content">
                        <p className="title is-4">Closet Confidence, LLC.</p>
                    </div>
                    <div className="content">
                    Closet Confidence, LLC. is a lifestyle brand that helps women and men
                    love themselves as God loves them. They do this through merchandise, 
                    podcasts, and social media posts that help people who lack confidence
                    gain true, genuine security within themselves and see who they are as God does.
                    </div>
                    <div className="SocialMedia-Icons">
                    <Button variant="default" style= {{ color: 'white', background: '#D9A3A3', margin: '10px'}}
                     href={CConfidencePDF} target="_blank">View Closet Confidence PDF</Button>
                     
                     <Button variant="default" style= {{ color: 'white', background: '#D9A3A3'}}
                     href={CCstrategyPDF} target="_blank">View Closet Confidence IG Strategy</Button>
                    </div>
                </div>
                </div>
                </div>
                </div>


                <div className="column">
                <div className="card" style={{ height: '25rem'}}>
                <img src={CWOWLogo} alt="black-and-white-logo-with-c" 
                className="Portfolio-Image" style={{ height: '25rem'}}/>
                <div className="overlay">
                <div className="card-content">
                    <div className="media-content">
                        <p className="title is-4">Church Without Walls</p>
                    </div>
                    <div className="content">
                    Church Without Walls' is known as being "The House of the Hungry". They are a multi-church;
                    meaning they are multi-generational, multi-cultural, and multi-denominational. They welcome
                    all who look for God to experience Him in a way they maybe haven't seen before.
                    </div>
                    <div className="SocialMedia-Icons">
                    <Button variant="default" style= {{ color: 'white', background: '#D9A3A3'}}
                     href={ChurchWowPDF} target="_blank">View CWOW Church Flyers PDF</Button>
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