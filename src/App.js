import React, { useState, onClick} from 'react';

import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import About from './components/About/About';
import Events from './components/Events/Events';
import Event from './components/Event/Event';
import Dashboard from './components/Dashboard/Dashboard';
import ForgotPassword from './components/ForgotPassword/Forgotpassword';
import Nav from './components/NavBar/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class Ibloov extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
  render() {

    return(
        <Router>
          <div style={{height:'100%'}}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/login" component={Login} />
              <Route path="/forgotPassword" component={ForgotPassword} />
              <Route path="/events" component={Events} />
              <Route path="/event" component={Event} />
              <Dashboard path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </Router>
    )
  }
}

export default Ibloov;
