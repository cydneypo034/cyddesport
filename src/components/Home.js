import React, {Component} from "react";
import {Button} from 'react-bootstrap';
import PDF from '../components/uploads/CydneyPollardCVAugust2021.pdf';


export default class Home extends Component {
    render () {
        return (
            <div>
                    <section class="hero is-medium">

                    <div class="hero-body">
                    <h1 className="DocFont">hi, it's nice to meet you!</h1>
                    <h2 className="DocFont">my name is Cydney Pollard.</h2>
                    <p className="DocSubFont">i'm a graphic and web designer + developer with a 
                    background in illustration, brand identity design and strategy, currently residing in Atlanta, Georgia</p>

                    <div className="DocButton">
                    <Button variant="default" style= {{ color: 'white', background: '#D9A3A3'}} href="https://github.com/cydneypo034">Github</Button> {' '}
                    <Button variant="default" style= {{ color: 'white', background: '#D9A3A3'}} href={PDF} target="_blank">CV/Resume</Button>
                    </div>

                    </div>
                    </section>
            </div>
        );
    }
}