//Get React going!
import React, {Component} from 'react';

//Get linking going!
import {Link} from 'react-router-dom';

//Get Redux going!
import {connect} from 'react-redux';
import {saveWizardFive} from '../actions/wizardActions'

//axios
import axios from 'axios';

class Wizard5 extends Component {
  constructor() {
    super();

    this.state = {
      dataz: ""
    }
  }


  sendDataToStore = () => {
    let {property_name, description, address, city, state, zip, url, mortgage_total, mortgage_monthly, desired_rent, user_id} = this.props;
    axios
      .post('http://localhost:1337/api/properties', {
        property_name,
        description,
        address,
        city,
        state,
        zip,
        url,
        mortgage_total,
        mortgage_monthly,
        desired_rent,
        user_id

      })
  }

  render() {
    return(
      <div>
        <h1>Step 5</h1>
        <input type="text" placeholder="Desired Rent"></input>
        <Link to="/wizard/4">
          <button>Previous Step</button>
        </Link>
        {/* <Link to="/dashboard"> */}
          <button
            onClick={this.sendDataToStore}
            >Complete</button>
        {/* </Link> */}
      </div>
    )
  }
}



const mapStateToProps = state => {
  return {
    property_name: state.wizard.propertyName,
    description: state.wizard.propertyDescription,
    address: state.wizard.address,
    city: state.wizard.city,
    state: state.wizard.state,
    zip: state.wizard.zip,
    url: state.wizard.imageUrl,
    mortgage_total: state.wizard.mortgageTotal,
    mortgage_monthly: state.wizard.mortgageMonthly,
    desired_rent: state.wizard.desiredRent,
    user_id: state.wizard.UserId
  }
}

const mapDispatchToProps = {
  saveWizardFive: saveWizardFive
}

export default connect(mapStateToProps, mapDispatchToProps)(Wizard5);
