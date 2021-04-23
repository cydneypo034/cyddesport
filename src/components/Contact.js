import React, {Component} from 'react';
import {Button, Form, Row, Col, InputGroup} from "react-bootstrap";
import{ init } from 'emailjs-com';

export default class Contact extends Component {


    render () {
        return (
            <div>
                <div class="field">
                <label class="label">Name</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Text input"/>
                </div>
                </div>

                <div class="field">
                <label class="label">Email</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Text input"/>
                </div>
                </div>

                <div class="field">
                <label class="label">Subject</label>
                <div class="control">
                    <div class="select">
                    <select>
                        <option>Select dropdown</option>
                        <option>Networking Opportunity</option>
                        <option>Quick Zoom Chat</option>
                    </select>
                    </div>
                </div>
                </div>

                <div class="field">
                <label class="label">Message</label>
                <div class="control">
                    <textarea class="textarea" placeholder="Textarea"></textarea>
                </div>
                </div>

                <div class="field">
                <div class="control">
                    <button class="button is-link">Submit</button>
                </div>
                </div>

            </div>
            
        )
    }
};