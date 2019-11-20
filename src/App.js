import React, { Component } from 'react';
import './App.css';

import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Login from './components/Login/index';
import Dashboard from './components/Dashboard/index';
import AddApp from './components/AddApp/index';
import ViewApp from './components/ViewApp/index';

class App extends Component {
  render() {
    const BACKENDURL = "http://127.0.0.1:8080/";

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/add-app' component={AddApp} />
          <Route path='/view-app' component={ViewApp} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
