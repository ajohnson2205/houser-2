import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './components/Login.js';
import Dashboard from './components/Dashboard.js';
import Wizard from './components/Wizard.js';



export default (
  <Switch>
    <Route exact path="/" component={ Login }  />
    <Route path="/dashboard" component={ Dashboard }  />
    <Route path="/wizard/" component= {Wizard} />
    )}
  />

  </Switch>
)
