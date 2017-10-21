import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import {Link} from 'react-router-dom';

import Navigation from './Navigation.js'

import Wizard1 from './Wizard1.js'





class Wizard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataz: ""
    }
  }

  render() {
    console.log(this.props.match)

    return(
      <div>
        <Navigation />
        <h1>Main wizard component</h1>
        <Switch>
          <Route path={`${this.props.match.path}1`} component= {Wizard1} />
        </Switch>
      </div>
    )
  }
}

export default Wizard;
