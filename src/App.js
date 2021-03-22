import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Navigation} from './components/Navigation.js';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  render() {
    return (
    <div className="App">
     <Router>
       <Navigation />
     </Router>
    </div>
  );
  }
}

export default App;
