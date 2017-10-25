import React, {Component} from 'react';

import {Link} from 'react-router-dom';


class Wizard1 extends Component {
  constructor() {
    super();

    this.state = {
      dataz: ""
    }
  }

  render() {
    return(
      <div>
        <h1>Step 1</h1>
        <input type="text" placeholder="Property Name"></input>
        <input type="text" placeholder="Property Description"></input>
        <Link to="/wizard/2">
          <button>Next Step</button>
        </Link>
      </div>
    )
  }
}

export default Wizard1;
