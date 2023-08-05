import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Cydney from './images/cydneyaboutmephoto.png';
import { Button } from 'react-bootstrap';
import PDF from '../components/uploads/cydneypollardCVNOV2021.pdf';


export default class Home extends Component {
    render() {
        return (
            <div>
                <section class="hero is-medium">

                    <div class="hero-body">
                        <h1> Hi, I'm Cydney! 👋🏾 </h1>
                        <h4>Your Friendly Resident Tech Unicorn 🦄✨ </h4>
                        <p>My specialties include customer support, front end web developement, QA testing and graphic design</p>

                        {/* <div>
                    <a style= {{ color: '#C18FC6'}} href="https://github.com/cydneypo034">Github</a> 
                    { ' ' }
                    <a style= {{ color: '#C18FC6'}} href={PDF} target="_blank">CV/Resume</a>
                    </div> */}

                    </div>
                </section>
                <section class="hero is-medium">

                    <div class="hero-body">
                        <h4>
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
            </div>
        );
    }
}