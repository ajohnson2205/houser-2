import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './components/Login.js';
import Dashboard from './components/Dashboard.js';
// import Wizard from './components/Wizard.js';

export default (
  <Switch>
    <Route component={ Login } exact path="/" />
    <Route component={ Dashboard } path="/dashboard" />
    {/* <Route component={ Wizard } path="/wizard/:step" /> */}
  </Switch>
)
