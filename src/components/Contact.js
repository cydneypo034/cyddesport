import React, {Component} from 'react';
import{ init } from 'emailjs-com';


export default class Contact extends Component {

    state = {
        name:'',
        email:'',
        subject:'',
        message:'',
    }
    
    handleSubmit(e){
        e.preventDefault();

        const {name, email, subject, message} = this.state;

        
        console.log(state)

    }

    render () {

        return (
            <div className= "ContactForm">
                <form onSubmit={this.handleSubmit.bind(this)}>

                <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input className="input" type="text" value={this.state.name} name="name" placeholder="Name"/>
                </div>
                </div>

                <div className="field">
                <label className="label">Email</label>
                <div className="control">
                    <input className="input" type="text" value={this.state.email} name="email" placeholder="Email"/>
                </div>
                </div>

                <div className="field">
                <label className="label">Subject</label>
                <div className="control">
                <input className="input" type="text" value={this.state.subject} name="subject" placeholder="Subject"/>
                </div>
                </div>

                <div className="field">
                <label className="label">Message</label>
                <div className="control">
                    <textarea className="textarea" value={this.state.message} name="message" placeholder="Message"></textarea>
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