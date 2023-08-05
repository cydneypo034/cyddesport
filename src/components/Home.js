import React, { Component } from "react";
// import Image from 'react-bootstrap/Image';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import PDF from '../components/uploads/CPOLLARD-Resume2023 (1).pdf';
import CydneyPortfolio from '../components/images/cydneyportfolioimage.png';
import MemoryGame from '../components/images/memorycardgame.png';
import CrunchyrollPage from '../components/images/crunchyroll-loginpage.png';
import GitHubLogo from '../components/images/githublogo.png';
// import HerokuLogo from '../components/images/heroku.png';
import NetlifyLogo from '../components/images/logomark.png';
import WebsiteLogo from '../components/images/website-logo.png';


export default class Home extends Component {
    render() {
        return (
            <div>

                {/* Home Section */}
                <section class="hero is-large">
                    <div class="hero-body">
                        <h1 className="h1Font" style={{ color: '#C18FC6'}}>Hi, I'm Cydney! 👋🏾 </h1>
                        <h4 className="h4Font">Your Friendly Resident Tech Unicorn 🦄✨ </h4>
                        <p className="DocSubFont">My specialties include customer support, front end web developement, QA testing and graphic design</p>

                        <div className="DocButton">
                            <Button variant="default" style={{ color: 'white', background: '#C18FC6' }} href="https://github.com/cydneypo034">Github</Button> {' '}
                            <Button variant="default" style={{ color: 'white', background: '#C18FC6' }} href={PDF} target="_blank">CV/Resume</Button>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section class="hero is-large">
                    <div class="hero-body" >
                    <h4 className="h4Font" style={{ color: '#C18FC6'}}>Here's a Bit About Me</h4>
                        <h4 className="DocSubFont">
                            My love for art began to form when I was in elementary school and since then, I wanted
                            to find my place in the world as a creative person. I worked for many years as a graphic
                            and brand designer, digital illustrator and painter. I still love and am involved in these
                            forms of creativity, but I searched for another way I could be creative and have a satisfying
                            career. Hence, the start of my journey as a web developer began in July of 2019. I have grown
                            to love the process of designing and developing layouts for web applications and it challenges
                            me to think of how to structure my coding projects, what things to consider when it comes to the
                            memory and time complexity of data, and how to figure out what real world problem I am solving.
                        </h4>

                    </div>
                </section>

                {/* Portfolio Section */}
                <section class="hero is-large">
                <h1 className="h1Font" style={{ color: '#C18FC6'}}> My Recent Projects ✨</h1>
                <p className="DocSubFont">Here's some pretty cool projects I've designed and developed so far.</p>
                    <div class="hero-body">

                        <div className="columns is-multiline">
                            <div className="column">
                                <div className="card">
                                    <img src={CydneyPortfolio} alt="website-with-pink-text" className="Portfolio-Image" />
                                    <div className="overlay">
                                        <div className="card-content">
                                            <div className="media-content">
                                                <p className="title is-4">Cydney's Portfolio</p>
                                            </div>
                                            <div className="content">
                                                Cydney's Portfolio is a digital portfolio
                                                made with React, React Router DOM, Bulma and Bootstrap.
                                                <div className="SocialMedia-Icons">
                                                    <a href="https://github.com/cydneypo034/cyddesport"><img src={GitHubLogo} alt="github-logo" height="50px" width="50px" /></a>
                                                    <a href="https://cydneypo034.github.io/cyddesport/#/"><img src={WebsiteLogo} alt="heroku-logo" height="50px" width="50px" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="column">
                                <div className="card">
                                    <img src={MemoryGame} alt="four-cards-with-one-card-flipped" className="Portfolio-Image" />
                                    <div className="overlay">
                                        <div className="card-content">
                                            <div className="media-content">
                                                <p className="title is-4">Memory Card Game</p>
                                            </div>
                                            <div className="content">
                                                Memory Card Game involves matching 2 out of 4 cards called Concentration. The goal is to match a pair of cards.
                                                <div className="SocialMedia-Icons">
                                                    <a href="https://github.com/cydneypo034/memorygame"><img src={GitHubLogo} alt="github-logo" height="50px" width="50px" /></a>
                                                    <a href="https://concentrationmemorygame.netlify.app/"><img src={NetlifyLogo} alt="heroku-logo" height="50px" width="50px" /></a>
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
                                                    <a href="https://github.com/cydneypo034/crunchyrolllogin"><img src={GitHubLogo} alt="github-logo" height="50px" width="50px" /></a>
                                                    <a href="https://crunchyroll-login.netlify.app/"><img src={NetlifyLogo} alt="heroku-logo" height="50px" width="50px" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                {/* Skills Section */}
                <section class="hero is-medium">
                <h1 className="h1Font" style={{ color: '#C18FC6'}}> My Skill Set 💻</h1>
                <p className="DocSubFont">In completing my projects and in my daily work, I've gained knowledges on tools, technology stacks, and more.</p>
                <div class="hero-body">

                    <div className="columns is-multiline">

                        <div className="column">
                            <div class="card">
                                <div class="card-content">
                                    <div class="content">
                                        <h1 className="header-title-second">
                                            Front End Web Development
                                        </h1>
                                        <hr />

                                        <span class="icon-text">
                                            <p>Libraries, Languages and Frameworks I love:</p>
                                            <p>HTML</p>
                                            <p>CSS</p>
                                            <p>Javascript</p>
                                            <p>Bulma</p>
                                            <p>React.js</p>
                                            <p>React Router DOM</p>
                                            <p>Bootstrap</p>
                                            <p>Material Design Bootstrap</p>
                                        </span>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="column">
                            <div class="card">
                                <div class="card-content">
                                    <div class="content">
                                        <h1 className="header-title-second">
                                            Back End Web Development
                                        </h1>
                                        <hr />

                                        <span class="icon-text">
                                            <p>Technologies and Languages I've used:</p>
                                            <p>Node.js</p>
                                            <p>Express.js</p>
                                            <p>MongoDB (Mongoose)</p>
                                            <p>memSQL</p>
                                            <p>Django Rest</p>
                                            <p>Python</p>
                                            <p>REST APIs</p>
                                            <p>QA Testing Methodologies</p>
                                        </span>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="column">
                            <div class="card">
                                <div class="card-content">
                                    <div class="content">
                                        <h1 className="header-title-second">
                                            Other Skills and Tools Used
                                        </h1>
                                        <hr />

                                        <span class="icon-text">
                                            <p>Skills and Tools acquired:</p>
                                            <p>Command Line</p>
                                            <p>Postman</p>
                                            <p>Slack</p>
                                            <p>Adobe XD</p>
                                            <p>Figma</p>
                                            <p>Trello</p>
                                            <p>Google Workspace</p>
                                            <p>Brand Design and Strategy</p>
                                        </span>

                                    </div>
                                </div>
                            </div>
                        </div>


                        </div>
                    </div>
                </section>

                {/*Contact Section */}
                <section class="hero is-medium">
                    <div class="hero-body" >
                    <div className="DocButton">
                    <h4 className="h4Font" style={{ color: '#C18FC6'}}>Interested in Contacting Me? 🚀</h4>
                    <p className="DocSubFont">I'm always open to new employment and network opportunities.</p>
                            <Button variant="default" style={{ color: 'white', background: '#C18FC6' }} href="#/contact">Contact Me</Button>
                    </div>
                    </div>
                </section>

                {/*Footer Section */}
                <section>
                    <div>
                    <p className="DocSubFont">Designed and Developed with 💖 by Cydney Pollard</p>
                    </div>
                </section>
            </div>
        );
    }
}