import React, {Component} from "react";
import Image from 'react-bootstrap/Image';
import Cydney from './images/cydneyaboutmephoto.png'

export default class About extends Component {
    render () {
        return (
            <section class="section is-large">
                <div className="AboutMeImage">
                <Image src={Cydney} roundedCircle />
                </div>
            <h1 class="DocFont">here's my story</h1>
            <h2 class="DocSubFont">
                I am a software engineer with an eye for Front-End Web Development. 
                I have a passion for creating and have used my creative capabilities for service in different ways.
                My love for drawing began to form when I was in elementary school and since then, I wanted to find my place in the world
                as a creative person. It took many years of working as an graphic designer, focusing on designing brand identities and working as
                a visual artist in digital illustration and painting. I still love and am involved in these forms of creativity, but I searched for another
                way I could be creative and have a satisfying career. Hence, the start of my journey as a web developer began in July of 2019.
                Through front-end web development, I have grown to love the process of designing layouts for web applications and 
                it challenges me to think of how to structure my coding projects, what things to consider when it comes to the
                memory and time complexity of data, and how to figure out what real world problem I am solving.            </h2>
            </section>
        )
    }
};
