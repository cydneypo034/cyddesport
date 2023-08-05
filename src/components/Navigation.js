import React from "react";
import { Nav, Navbar } from 'react-bootstrap';


class Navigation extends React.Component {

      render() {
          return (
            <div>
            <Navbar expand="lg">
            <Navbar.Brand href="#/" className="para-center">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link href="#/contact" className="para-center">Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
          </Navbar>
          </div>
              
          );
      }
  }

  export default Navigation;