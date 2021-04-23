import React, {Component} from 'react';
import{ init } from 'emailjs-com';


export default class Contact extends Component {

    state = {
        name='',
        email='',
        subject='',
        message='',
    }

    onSubmit(values) {
        console.log(values);
    }

    render () {

        return (
            <div className= "ContactForm">
                <form onSubmit={handleSubmit(onSubmit)}>

                <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input className="input" type="text" name="name" placeholder="Name"/>
                </div>
                </div>

                <div className="field">
                <label className="label">Email</label>
                <div className="control">
                    <input className="input" type="text" name="email" placeholder="Email"/>
                </div>
                </div>

                <div className="field">
                <label className="label">Subject</label>
                <div className="control">
                <input className="input" type="text" name="subject" placeholder="Subject"/>
                </div>
                </div>

                <div className="field">
                <label className="label">Message</label>
                <div className="control">
                    <textarea className="textarea" name="message" placeholder="Message"></textarea>
                </div>
                </div>


                <div className="field">
                <div className="control">
                    <button className="button is-link">Submit</button>
                </div>
                </div>
                
                </form>

            </div>
            
        )
    }
};