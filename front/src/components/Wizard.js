import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import {Link} from 'react-router-dom';

import Navigation from './Navigation.js'

import Wizard1 from './Wizard1.js'
import Wizard2 from './Wizard2.js'
import Wizard3 from './Wizard3.js'
import Wizard4 from './Wizard4.js'
import Wizard5 from './Wizard5.js'





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
        <h1>Add new listing</h1>
        <Link to="/dashboard">
          <button>Cancel</button>
        </Link>
        <Switch>
          <Route path={`${this.props.match.path}1`} component= {Wizard1} />
          <Route path={`${this.props.match.path}2`} component= {Wizard2} />
          <Route path={`${this.props.match.path}3`} component= {Wizard3} />
          <Route path={`${this.props.match.path}4`} component= {Wizard4} />
          <Route path={`${this.props.match.path}5`} component= {Wizard5} />
        </Switch>
      </div>
    )
  }
}

export default Wizard;
