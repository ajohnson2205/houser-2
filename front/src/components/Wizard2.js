import React, {Component} from 'react';

import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import { saveWizardTwo } from '../actions/wizardActions'


class Wizard2 extends Component {
  constructor() {
    super();

    this.state = {
      address: "",
      city: "",
      state: "",
      zip: ""
    }
  }

  render() {
    return(
      <div>
        <h1>Step 2</h1>
        <input
          type="text"
          placeholder="Address"
          onChange={(e) => {this.setState({address: e.target.value})}}
          ></input>
        <input
          type="text"
          placeholder="City"
          onChange={(e) => {this.setState({city: e.target.value})}}
          ></input>
        <input
          type="text"
          placeholder="State"
          onChange={(e) => {this.setState({state: e.target.value})}}
          ></input>
        <input
          type="text"
          placeholder="ZIP"
          onChange={(e) => {this.setState({zip: e.target.value})}}
          ></input>
        <Link to="/wizard/1">
          <button>Previous Step</button>
        </Link>
        <Link to="/wizard/3">
          <button onClick={() => this.props.saveWizardTwo(this.state)}>Next Step</button>
        </Link>
      </div>
    )
  }
}

const mapDispatchToProps = {
  saveWizardTwo: saveWizardTwo
}

export default connect(null, mapDispatchToProps)(Wizard2);
