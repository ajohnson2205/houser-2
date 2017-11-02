import React, {Component} from 'react';

import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import { saveWizardTwo } from '../actions/wizardActions'


class Wizard2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: this.props.address || "",
      city: this.props.city || "",
      state: this.props.state || "",
      zip: this.props.zip || ""
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
          value={this.state.address || this.props.address}
          ></input>
        <input
          type="text"
          placeholder="City"
          onChange={(e) => {this.setState({city: e.target.value})}}
          value={this.state.city || this.props.city}
          ></input>
        <input
          type="text"
          placeholder="State"
          onChange={(e) => {this.setState({state: e.target.value})}}
          value={this.state.state || this.props.state}
          ></input>
        <input
          type="text"
          placeholder="ZIP"
          onChange={(e) => {this.setState({zip: e.target.value})}}
          value={this.state.zip  || this.props.zip}
          ></input>
        <Link to="/wizard/1">
          <button
            onClick={() => this.props.saveWizardTwo(this.state)}
            >Previous Step</button>
        </Link>
        <Link to="/wizard/3">
          <button onClick={() => this.props.saveWizardTwo(this.state)}>Next Step</button>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    address: state.wizard.address,
    city: state.wizard.city,
    state: state.wizard.state,
    zip: state.wizard.zip
  }
}

const mapDispatchToProps = {
  saveWizardTwo: saveWizardTwo
}

export default connect(mapStateToProps, mapDispatchToProps)(Wizard2);
