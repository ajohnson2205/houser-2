//Get React going!
import React, {Component} from 'react';

//Get linking going!
import {Link} from 'react-router-dom';

//Get Redux going!
import {connect} from 'react-redux'
import {saveWizardFour} from '../actions/wizardActions'


class Wizard4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loanAmount: "",
      monthlyMortgage: ""
    }
  }




  render() {
    return(
      <div>
        <h1>Step 4</h1>
        <input
          type="text"
          placeholder="Loan Amount"
          onClick={(e) => {this.setState({loanAmount: e.target.value})}}
          ></input>
        <input
          type="text"
          placeholder="Monthly Mortgage"
          onClick={(e) => {this.setState({monthlyMortgage: e.target.value})}}
          ></input>
        <Link to="/wizard/3">
          <button
            onClick={console.log("Button clicked")}
            >Previous Step</button>
        </Link>
        <Link to="/wizard/5">
          <button>Next Step</button>
        </Link>
      </div>
    )
  }
}














const mapStateToProps = state => {
  return {
    loanAmount: state.wizard.loanAmount,
    monthlyMortgage: state.wizard.monthlyMortgage
  }
}

const mapDispatchToProps = {
  saveWizardFour: saveWizardFour
}

export default connect(mapStateToProps, mapDispatchToProps)(Wizard4);
