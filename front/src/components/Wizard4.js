//Get React going!
import React, {Component} from 'react';

//Get linking going!
import {Link} from 'react-router-dom';

//Get Redux going!
import {connect} from 'react-redux'
import {saveWizardFour} from '../actions/wizardActions'
import {writeLoanField} from '../actions/wizardActions'
import {writeMortgageField} from '../actions/wizardActions'


class Wizard4 extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     loanAmount: this.props.loanAmount,
  //     monthlyMortgage: ""
  //   }
  // }




  render() {
    return(
      <div>
        <h1>Step 4</h1>
        <input
          type="text"
          placeholder="Loan Amount"
          onChange={(e) => {this.props.writeLoanField({mortgageTotal: e.target.value})}}
          ></input>
        <input
          type="text"
          placeholder="Monthly Mortgage"
          onChange={(e) => {this.props.writeMortgageField({mortgageMonthly: e.target.value})}}
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













const mapDispatchToProps = {
  writeLoanField: writeLoanField,
  writeMortgageField: writeMortgageField
}

export default connect(null, mapDispatchToProps)(Wizard4);
