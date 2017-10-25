import React, {Component} from 'react';

import {Link} from 'react-router-dom';


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
          <button>Next Step</button>
        </Link>
      </div>
    )
  }
}

export default Wizard2;
