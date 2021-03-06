import React, { Component } from 'react';
import './App.css';

import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Login from './components/Login/index';
import Dashboard from './components/Dashboard/index';
import AddApp from './components/AddApp/index';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/add-app' component={AddApp} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
