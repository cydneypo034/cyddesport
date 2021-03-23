import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route } from "react-router-dom";
import Navigation from './components/Navigation.js';
import About from './components/About.js';
import Home from './components/Home.js';


export default class App extends Component {
  render() {
    return (
       <HashRouter>
       <Navigation />
       <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
       </Switch>
       </HashRouter>
  );
  }
}