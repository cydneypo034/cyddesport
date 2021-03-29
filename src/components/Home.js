import React, {Component} from "react";
import {Button} from 'react-bootstrap';
import PDF from '../components/uploads/CydneyPollardCV2021.pdf';


export default class Home extends Component {
    render () {
        return (
            <div>
                    <section class="hero is-medium">

                    <div class="hero-body">
                    <h1 className="HomeFont">hi, it's nice to meet you.</h1>
                    <h2 className="HomeFont">my name is Cydney Pollard.</h2>
                    <p className="HomeSubFont">i'm a software engineer with a 
                    background in graphic design, currently residing in Atlanta, Georgia</p>

                    <div class="HomeButton">
                    <Button variant="warning" href="https://github.com/cydneypo034">Github</Button> {' '}
                    <Button variant="warning" href={PDF} target="_blank">CV/Resume</Button>
                    </div>

                    </div>
                    </section>
            </div>
        );
    }
}