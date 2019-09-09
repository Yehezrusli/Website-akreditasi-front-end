import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Tamong from './components/pages/tataPamong/TataPamong';
import Home from './components/pages/home/Home';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tataPamong" component={Tamong} />
          </Switch>
        </Router>
      </div>
    )

  }
}
export default App;
