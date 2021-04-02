import React, {Component} from 'react';
import CydneyProfilePic from '../components/images/cydneyprofilepicture.jpg';
import {Button} from "react-bootstrap";

export default class Contact extends Component {
    render () {
        return (
            <div>
            <h1 className="DocFont">Contact</h1>
            <h2 className="DocSubFont">Here are several ways to get in contact with me:</h2>
            
            <h2 className="DocContactInfo">Email:</h2>
            <Button variant="default" style= {{ color: 'white', background: '#D9A3A3'}} href="mailto: cydneypollard087@gmail.com">cydneypollard087@gmail.com</Button> {' '}
            
            <h2 className="DocContactInfo">LinkedIn:</h2>
            <Button variant="default" style= {{ color: 'white', background: '#D9A3A3'}} href="https://www.linkedin.com/in/cydney-pollard-47aa6212a/">cydneypollard087@gmail.com</Button> {' '}
            
            <img src={CydneyProfilePic} alt="girl-in-yellow-shirt" className="ProfileImage-ContactPage" height="400px" width="400px" />
            
            </div>
        )
    }
};