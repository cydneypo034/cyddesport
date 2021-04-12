import React, {Component} from 'react';
import {Button, Form, Row, Col, InputGroup} from "react-bootstrap";
import emailjs from 'emailjs-com';

export default class Contact extends Component {
    render () {
        return (
            <div>
            <h1 className="DocFont">Contact</h1>
            <h2 className="DocSubFont">Here are several ways to get in contact with me:</h2>
            
            <Form>
            <Form.Group as={Row} controlId="formHorizontalName">
                <Form.Label column sm={2}>
                Name
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="name" placeholder="Name" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                Email
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="email" placeholder="Email" />
                </Col>
            </Form.Group>
            
            <Form.Group as={Row} controlId="formHorizontalSubject">
                <Form.Label column sm={2}>
                Subject
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="subject" placeholder="Subject" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalMessage">
                <Form.Label column sm={2}>
                Message
                </Form.Label>
                <Col sm={10}>
                <InputGroup as="textarea" aria-label="With textarea" type="textarea" placeholder="Type Your Message Here" />
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit" variant="default" style= {{ color: 'white', background: '#D9A3A3'}}>Submit</Button>
                </Col>
            </Form.Group>
            </Form>
            
            </div>
        )
    }
};