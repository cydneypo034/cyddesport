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

                <section className="hero is-small">
                    <div className="hero-body">
                    <p className="DocSmallFont">Languages</p>
                    <p className="DocSubSmallFont">HTML, CSS, JavaScript(ES6), Python, SQL, Java</p>
                    </div>
               
                </section>

                <section className="hero is-small">
                    <div className="hero-body">
                    <p className="DocSmallFont">Front End Frameworks</p>
                    <p className="DocSubSmallFont">React.js, React Router DOM</p>
                    </div>
                </section>

                <section className="hero is-small">
                    <div className="hero-body">
                    <p className="DocSmallFont">Back End Techologies</p>
                    <p className="DocSubSmallFont">Mongoose, Node.js, Express.js, Django Rest Framework</p>
                    </div>
                </section>

                <section className="hero is-small">
                    <div className="hero-body">
                    <p className="DocSmallFont">Front End Libraries</p>
                    <p className="DocSubSmallFont">Bulma, Bootstrap, Material Design Bootstrap, Material U</p>
                    </div>
                </section>

                <section className="hero is-small">
                    <div className="hero-body">
                    <p className="DocSmallFont">Coding Tools and Platforms</p>
                    <p className="DocSubSmallFont">Git Version Control, Visual Studio Code, Github, Heroku, Netlify, Figma, Trello</p>
                    </div>
                </section>

            </div>
           
        )
    }
};