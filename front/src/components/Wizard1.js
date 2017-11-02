//Get React going!
import React, {Component} from 'react';

//Get linking going!
import {Link} from 'react-router-dom';

//Get Redux going!
import { connect } from 'react-redux';
import { saveWizardOne } from '../actions/wizardActions'


class Wizard1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      propertyName: this.props.propertyName || "",
      propertyDescription: this.props.propertyDescription || ""
    }
  }




  render() {

    console.log('this.props.propertyName', this.props.propertyName)

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
          <button
            onClick={() => this.props.saveWizardOne(this.state)}
            >Next Step</button>
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
