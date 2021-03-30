import React, {Component} from 'react';


export default class Skills extends Component {
    render () {
        return (
            <div>

                <section class="hero is-small">
                    <div className="hero-body">
                    <h1 className="DocFont">Skills</h1>
                    <h2 className="DocSubFont"> Here are a few of the technologies, libraries, languages and frameworks I've had the chance to worked with: </h2>
                    </div>
                </section>

                <div className="techs">
                <p className="DocSmallFont">Languages: </p>
                    <p className="DocSubSmallFont">HTML, CSS, JavaScript(ES6), Python, SQL, Java</p>
                </div>


            </div>
           
        )
    }
};