import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import About from './Update/About/About';
import Projects from './Update/Projects/Projects';
import Contact from './Update/Contact/Contact';
import "./App.css"

export default class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route
              exact path="/"
              render={(routerProps) => <About {...routerProps} />}
            />
            <Route
              exact path="/projects"
              render={(routerProps) => <Projects {...routerProps} />}
            />
            <Route
              exact path="/contact"
              render={(routerProps) => <Contact {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
