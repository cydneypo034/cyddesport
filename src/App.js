import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from './components/Navigation.js';
import {About} from './components/About.js';


export default class App extends Component {
  render() {
    return (
    <React.Fragment>
     <Router>
       <Navigation />

       <Route path="/about" component={About} />
     </Router>
    </React.Fragment>
  );
  }
}