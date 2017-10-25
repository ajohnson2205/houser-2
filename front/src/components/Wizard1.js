import React, {Component} from 'react';

import {Link} from 'react-router-dom';


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
    return(
      <div>
        <h1>Step 1</h1>
        <input
          type="text"
          placeholder="Property Name"
          onChange={(e) => {this.setState({propertyName: e.target.value})}}
          ></input>
        <input
          type="text"
          placeholder="Property Description"
          onChange={(e) => {this.setState({propertyDescription: e.target.value})}}  
          ></input>
        <Link to="/wizard/2">
          <button>Next Step</button>
        </Link>
      </div>
    )
  }
}

export default Wizard1;
