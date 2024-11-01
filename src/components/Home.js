import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import CydneyPortfolio from '../components/images/cydneyportfolio.png';
import PDF from '../components/uploads/CPollard_Resume-2024.pdf';
import ThatGirlCodes from '../components/images/thatgirlcodes.png';
import HelloFriend from '../components/images/hellofriend.png';
import FrontEnd from '../components/images/frontend-mentor.png';
import DEV from '../components/images/dev-to.png';
import CodeWars from '../components/images/codears.png';
import Cydney from '../components/images/cydney.png';



export default class Home extends Component {
    render() {
        return (
            <div>

                {/* Home Section */}
                <section class="hero is-large">
                    <div class="hero-body">
                        <h1 className="h1Font" style={{ color: '#C18FC6' }}>Hi, I'm Cydney! 👋🏾 </h1>
                        <h4 className="h4Font">Your Friendly Resident Tech Specialist! </h4>
                        <p className="DocSubFont">My specialties include customer support, APIs, full-stack web development, and graphic design</p>
                    </div>
                </section>

                {/* About Section */}
                <section class="hero is-medium">
                    <div class="hero-body" >
                        <h1 className="h1Font" style={{ color: '#C18FC6' }}>Here's a Bit About Me</h1>
                        <h4 className="DocSubFont">
                        My name’s Cydney Pollard and I’m a tech professional based in Atlanta, GA, who has successfully pivoted from the creative industry 
                        into tech. With my background in design, software engineering, manual testing, and customer support,  
                        my unconventional path into this industry is a strength not a liability, making me well-rounded and an asset in client-facing roles!
                        I'm excited to continue tackling new challenges and continue growing within my tech career. Please feel 
                        free to reach out to me to discuss potential collaborations and networking opportunities.

                        </h4>
                        <div className="container">
                            <Row className="justify-content-md-center">
                                <Col xs={12} sm={4} md={4}>
                                    <Image src={Cydney} roundedCircle className="AboutMeImage" />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </section>

                {/* Portfolio Section */}
                <section class="hero is-small">
                    <div class="hero-body">
                        <h1 className="h1Font" style={{ color: '#C18FC6' }}> My Recent Projects</h1>
                        <p className="DocSubFont">Here's some projects I've designed and developed so far.</p>
                        <div>&nbsp;</div>
                        <div className="columns is-multiline">
                            <div className="column">
                                <div class="card">
                                    <div class="card-image">
                                        <figure className="Portfolio-Image">
                                            <img src={CydneyPortfolio} alt="website-with-purple-text" />
                                        </figure>
                                    </div>
                                    <div class="card-content">
                                        <p class="title is-4">Cydney's Portfolio</p>

                                        <div class="content">
                                            Cydney's Portfolio is a digital portfolio made with React, React Router DOM, Bulma and Bootstrap.
                                            <div>&nbsp;</div>
                                            <div class="container">
                                                <Button variant="default" style={{ color: 'white', background: '#C18FC6' }} href="https://github.com/cydneypo034/cyddesport">Github</Button> {' '}
                                                <Button variant="default" style={{ color: 'white', background: '#C18FC6' }} href="https://cydneypo034.github.io/cyddesport/#/">Website</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="column">
                        <div class="card">
                            <div class="card-image">
                                <figure className="Portfolio-Image">
                                    <img src={ThatGirlCodes} alt="dark-grey-background-with-2-images-of-black-women-and-white-text" />
                                </figure>
                            </div>
                            <div class="card-content">
                                <p class="title is-4">That Girl Codes App</p>
                                <div class="content">
                                That Girl Codes App is an app that helps women who want to code network and gain resources. Built using the MERN stack and API creation.
                                    <div>&nbsp;</div>
                                    <div class="container">
                                        <Button variant="default" style={{ color: 'white', background: '#C18FC6' }} href="https://github.com/cydneypo034/thatgirlcodes">Github</Button> {' '}
                                        <Button variant="default" style={{ color: 'white', background: '#C18FC6' }} href="https://thatgirlcodes.onrender.com/">Website</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                            <div className="column">
                        <div class="card">
                            <div class="card-image">
                                <figure className="Portfolio-Image">
                                    <img src={HelloFriend} alt="tan-background-with-clock-music_player-and-dark-mode-in-dark-text" />
                                </figure>
                            </div>
                            <div class="card-content">
                                <p class="title is-4">Hello Friend App</p>
                                <div class="content">
                                Hello Friend...Remember App is an app with the goal of relaxation built with HTML, CSS, and JavaScript.
                                    <div>&nbsp;</div>
                                    <div class="container">
                                        <Button variant="default" style={{ color: 'white', background: '#C18FC6' }} href="https://github.com/cydneypo034/hellofriend">Github</Button> {' '}
                                        <Button variant="default" style={{ color: 'white', background: '#C18FC6' }} href="https://hellofriendremember.netlify.app/">Website</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                        </div>
                        <div>&nbsp;</div>
                        <p className="DocSubFont"><a href="#/portfolio" style={{ color: '#C18FC6' }}>View All Projects</a></p>
                    </div>
                </section>
                <div>&nbsp;</div>

                {/* Skills Section */}
                <section class="hero is-medium">

                    <div class="hero-body">
                        <h1 className="h1Font" style={{ color: '#C18FC6' }}> My Skill Set</h1>
                        <p className="DocSubFont">In completing my projects and in my daily work, I've gained knowledges on tools, technology stacks, and more.</p>
                        <div>&nbsp;</div>

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
                        <div>&nbsp;</div>
                        <p className="DocSubFont"><a href={PDF} style={{ color: '#C18FC6' }}>View Full Resume</a></p>
                    </div>
                </section>

                

                {/*See Me On Section */}
                <section class="hero is-small">
                    <div class="hero-body">
                        <h1 className="h1Font" style={{ color: '#C18FC6' }}>Let's Connect 🫶🏾</h1>
                        <p className="DocSubFont">View my communial and challenge participation below.</p>
                        <div>&nbsp;</div>

                        <nav class="level">
                            <div class="level-item has-text-centered">
                                <div>
                                    <a href="https://www.frontendmentor.io/profile/cydneypo034"><img src={FrontEnd} alt="frontend-mentor-logo" height="50px" width="500px" /></a>
                                </div>
                            </div>
                            <div class="level-item has-text-centered">
                                <div>
                                    <a href="https://dev.to/cydneypo034"><img src={DEV} alt="dev-to-logo" height="50px" width="100px" /></a>
                                </div>
                            </div>
                            <div class="level-item has-text-centered">
                                <div>
                                    <a href="https://www.codewars.com/users/cydneypo034"><img src={CodeWars} alt="codewars-logo" height="50px" width="500px" /></a>
                                </div>
                            </div>
                        </nav>

                    </div>
                </section>

                {/*Contact Section */}
                <section class="hero is-medium">
                    <div class="hero-body" >
                        <div className="DocButton">
                            <h4 className="h4Font" style={{ color: '#C18FC6' }}>Interested in Contacting Me?</h4>
                            <p className="DocSubFont">Please feel 
                        free to reach out to me in the contact form below to discuss potential collaborations and networking opportunities.</p>
                            <Button variant="default" style={{ color: 'white', background: '#C18FC6' }} href="#/contact">Contact Me</Button> {' '}
                            <Button variant="default" style={{ color: 'white', background: '#C18FC6' }} href="https://github.com/cydneypo034">Github</Button> {' '}
                            <Button variant="default" style={{ color: 'white', background: '#C18FC6' }} href="https://www.linkedin.com/in/cydney-p-47aa6212a/">LinkedIn</Button> {' '}
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