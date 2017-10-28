import React, {Component} from 'react';

import {Link} from 'react-router-dom';

import { saveWizardThree } from '../actions/wizardActions'

import {connect} from 'react-redux';

class Wizard3 extends Component {
  constructor() {
    super();

    this.state = {
      imageUrl: ""
    }
  }

  render() {
    return(
      <div>
        <h1>Step 3</h1>
        <input
          type="text"
          placeholder="Image URL"
          onChange={(e) => {this.setState({imageUrl: e.target.value})}}
          ></input>
        <Link to="/wizard/2">
          <button>Previous Step</button>
        </Link>
        <Link to="/wizard/4">
          <button>Next Step</button>
        </Link>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    imageUrl: state.wizard.imageUrl,
  }
}

const mapDispatchToProps = {
  saveWizardThree: saveWizardThree
}

export default connect(mapStateToProps, mapDispatchToProps)(Wizard3);
