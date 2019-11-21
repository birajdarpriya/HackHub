import React, { Component } from 'react';
import './App.css';

import { Switch, Route, BrowserRouter } from 'react-router-dom';

//import Login from './components/Login/index';
import Dashboard from './components/Dashboard/index';
import AddApp from './components/AddApp/index';
import ViewApp from './components/ViewApp/index';
import Login from "./containers/Login";
import Logout from "./containers/Logout";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/add-app' component={AddApp} />
          <Route path='/view-app' component={ViewApp} />
          <Route path='/login' component={Login} />
          <Route path='/logout' component={Logout} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
