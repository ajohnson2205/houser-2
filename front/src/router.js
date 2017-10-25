import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './components/Login.js';
import Dashboard from './components/Dashboard.js';
import Wizard from './components/Wizard.js';

import Wizard1 from './components/Wizard1.js';
import Wizard2 from './components/Wizard2.js';
import Wizard3 from './components/Wizard3.js';
import Wizard4 from './components/Wizard4.js';
import Wizard5 from './components/Wizard5.js';




export default (
  <Switch>
    <Route exact path="/" component={ Login }  />
    <Route path="/dashboard" component={ Dashboard }  />
    <Route path="/wizard/" component= {Wizard} />
    <Route path="/wizard/1" component= {Wizard1} />
    <Route path="/wizard/2" component= {Wizard2} />
    <Route path="/wizard/3" component= {Wizard3} />
    <Route path="/wizard/4" component= {Wizard4} />
    <Route path="/wizard/5" component= {Wizard5} />

    )}
  />

  </Switch>
)
