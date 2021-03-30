import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class Portfolio extends Component {
    render () {
        return (
            <div>
                <h1 className="DocFont">my portfolio</h1>
                <h2 className="DocSubFont">below is a list of my web applications I've completed from July 2019 until now.</h2>
            
            <section>
                

                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </section>
            </div>
        )
    }
};