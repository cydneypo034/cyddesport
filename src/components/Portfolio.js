import React, { Component } from "react";
import CydneyPortfolio from '../components/images/cydneyportfolio.png';
import MemoryGame from '../components/images/memorygame.png';
import DisneyLogin from '../components/images/disneylogin.png';
//import Feminaku from '../components/images/feminaku.png';
import { Button } from 'react-bootstrap';


export default class Home extends Component {
    render() {
        return (

            <section class="hero is-small">
            <div class="hero-body">
                <h1 className="h1Font" style={{ color: '#C18FC6' }}> My Recent Projects ✨</h1>
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
                                    <img src={MemoryGame} alt="four-cards-with-one-card-flipped" />
                                </figure>
                            </div>
                            <div class="card-content">
                                <p class="title is-4">Memory Game</p>

                                <div class="content">
                                    Memory Card Game involves matching 2 out of 4 cards called Concentration built with HTML, CSS and Javascript.
                                    <div>&nbsp;</div>
                                    <div class="container">
                                        <Button variant="default" style={{ color: 'white', background: '#C18FC6' }} href="https://github.com/cydneypo034/memorygame">Github</Button> {' '}
                                        <Button variant="default" style={{ color: 'white', background: '#C18FC6' }} href="https://concentrationmemorygame.netlify.app/">Website</Button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <div class="card">
                            <div class="card-image">
                                <figure className="Portfolio-Image">
                                    <img src={DisneyLogin} alt="Disney-login-page" />
                                </figure>
                            </div>
                            <div class="card-content">
                                <p class="title is-4">Disney SignIn Page</p>
                                <div class="content">
                                    The Disney Sign In Page is a clone project based on
                                    Disneyworld.com's sign-in page built with HTML and CSS.
                                    <div>&nbsp;</div>
                                    <div class="container">
                                        <Button variant="default" style={{ color: 'white', background: '#C18FC6' }} href="https://github.com/cydneypo034/disneyloginpage">Github</Button> {' '}
                                        <Button variant="default" style={{ color: 'white', background: '#C18FC6' }} href="https://disneyloginpage.netlify.app/">Website</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="column">
                        <div class="card">
                            <div class="card-image">
                                <figure className="Portfolio-Image">
                                    <img src={Feminaku} alt="website-page-with-anime-girl" />
                                </figure>
                            </div>
                            <div class="card-content">
                                <p class="title is-4">FEMINAKU</p>
                                <div class="content">
                                    Feminaku is a woman-owned brand that sells otaku-themed clothing in a monthly membership made with React.
                                    <div>&nbsp;</div>
                                    <div class="container">
                                        <Button variant="default" style={{ color: 'white', background: '#C18FC6' }} href="https://github.com/cydneypo034/feminakubabes">Github</Button> {' '}
                                        <Button variant="default" style={{ color: 'white', background: '#C18FC6' }} href="https://cydneypo034.github.io/feminakubabes/#/">Website</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                </div>

            </div>
        </section>

        )
    }
}