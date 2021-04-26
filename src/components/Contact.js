import React, {Component} from 'react';
import emailjs from 'emailjs-com';


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
        const serviceId = process.env.REACT_APP_EMAILJS_SERVICEID;
        const templateId = process.env.REACT_APP_EMAILJS_TEMPLATEID;
        const userId = process.env.REACT_APP_EMAILJS_USERID;

        let emailTempParams = {
            to_name: name,
            from_name: email,
            subject: subject,
            message_html: message,
        }

        emailjs.send(
            serviceId,
            templateId,
            emailTempParams,
            userId
        )

        this.resetForm();

    }

    resetForm(){
        this.setState({
            name:'',
            email:'',
            subject:'',
            message:'',
        })
    }

    handleChange = (parameters, e) => {
        this.setState({[parameters]: e.target.value})
    }

    render () {

        return (
            <div>
                <section className="hero is-small">
                <h1 className="DocFont">Contact Me</h1>
                <h2 className="DocSubFont">Feel free to fill out the contact form below if you'd like to contact me in regards to job and network opportunities.</h2>

                </section>
               
            <div className= "ContactForm">
                <form class="control" onSubmit={this.handleSubmit.bind(this)}>

                <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input className="input" type="text" value={this.state.name}
                    onChange={this.handleChange.bind(this, 'name')}
                    name="name" placeholder="Name"/>
                </div>
                </div>

                <div className="field">
                <label className="label">Email</label>
                <div className="control">
                    <input className="input" type="text" value={this.state.email}
                    onChange={this.handleChange.bind(this, 'email')}
                    name="email" placeholder="Email"/>
                </div>
                </div>

                <div className="field">
                <label className="label">Subject</label>
                <div className="control">
                    <input className="input" type="text" value={this.state.subject}
                    onChange={this.handleChange.bind(this,'subject')}
                    name="subject" placeholder="Subject"/>
                </div>
                </div>

                <div className="field">
                <label className="label">Message</label>
                <div className="control">
                    <textarea className="textarea" value={this.state.message}
                    onChange={this.handleChange.bind(this, 'message')}
                    name="message" placeholder="Message"></textarea>
                </div>
                </div>


                <div className="field">
                <div className="control">
                    <button className="button is-link" style= {{ color: 'white', background: '#D9A3A3'}}>Submit</button>
                </div>
                </div>
                
                </form>

            </div>
            </div>

        )
    }
};