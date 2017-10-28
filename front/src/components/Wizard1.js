import React, {Component} from 'react';

import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import { saveWizardOne } from '../actions/wizardActions'


class Wizard1 extends Component {
  constructor() {
    super();

    this.state = {
      propertyName: "",
      propertyDescription: ""
    }
  }

  handleChange

  render() {
    console.log('this.props.propertyName', this.props.propertyName)
    console.log('this.state.propertyName', this.state.propertyName)
    return(
      <div>
        <h1>Step 1</h1>
        <input
          type="text"
          placeholder="Property Name"
          onChange={(e) => {this.setState({propertyName: e.target.value})}}
          value={this.state.propertyName || this.props.propertyName}
          ></input>
        <input
          type="text"
          placeholder="Property Description"
          onChange={(e) => {this.setState({propertyDescription: e.target.value})}}
          value={this.state.propertyDescription || this.props.propertyDescription}
          ></input>
        <Link to="/wizard/2">
          {/* Where is this method below coming from? From Redux */}
          <button onClick={() => this.props.saveWizardOne(this.state)}>Next Step</button>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    propertyName: state.wizard.propertyName,
    propertyDescription: state.wizard.propertyDescription
  }
}

const mapDispatchToProps = {
  saveWizardOne: saveWizardOne
}

export default connect(mapStateToProps, mapDispatchToProps)(Wizard1);
