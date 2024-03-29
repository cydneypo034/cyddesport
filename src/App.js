import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Navigation from './components/Navigation.js';
import Home from './components/Home.js';
import Portfolio from './components/Portfolio.js';
import Contact from './components/Contact.js';

export default class App extends Component {
  render() {
    return (
      <HashRouter>
      <Navigation />
      <Switch>
       <Route path="/" exact component={Home} />
       <Route path="/portfolio" component={Portfolio} />
       <Route path="/contact" component={Contact} />
      </Switch>
      </HashRouter>       
  );
  }
}