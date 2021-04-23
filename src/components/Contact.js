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
                <label class="label">Subject</label>
                <div class="control has-icons-left has-icons-right">
                    <input class="input is-success" type="text" placeholder="Text input" value="bulma"/>
                </div>
                </div>

            </div>
            
        )
    }
};