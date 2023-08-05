import React, {Component} from "react";
import {Button} from 'react-bootstrap';
import PDF from '../components/uploads/cydneypollardCVNOV2021.pdf';


export default class Home extends Component {
    render () {
        return (
            <div>
                    <section class="hero is-medium">

                    <div class="hero-body">
                    <h1> Hi, I'm Cydney! 👋🏾 </h1>
                    <h4>i build and design fun things for the web.</h4>
                    <p>i'm a tech unicorn 🦄✨ with specialties in customer support, front end web developement, QA testing and graphic design</p>

                    {/* <div>
                    <Button variant="default" style= {{ color: 'white', background: '#C18FC6'}} href="https://github.com/cydneypo034">Github</Button> {' '}
                    <Button variant="default" style= {{ color: 'white', background: '#C18FC6'}} href={PDF} target="_blank">CV/Resume</Button>
                    </div> */}

                    </div>
                    </section>
            </div>
        );
    }
}