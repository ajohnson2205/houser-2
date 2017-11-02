import React, {Component} from 'react';

import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import { saveWizardThree } from '../actions/wizardActions'


class Wizard3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUrl: this.props.imageUrl || ""
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
          value={this.state.imageUrl || this.props.imageUrl}
          ></input>
        <Link to="/wizard/2">
          <button>Previous Step</button>
        </Link>
        <Link to="/wizard/4">
          <button
            onClick={() => this.props.saveWizardThree(this.state)}
            >Next Step</button>
        </Link>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    imageUrl: state.wizard.imageUrl
  }
}

const mapDispatchToProps = {
  saveWizardThree: saveWizardThree
}

export default connect(mapStateToProps, mapDispatchToProps)(Wizard3);
