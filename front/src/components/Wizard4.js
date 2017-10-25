import React, {Component} from 'react';

import {Link} from 'react-router-dom';


class Wizard4 extends Component {
  constructor() {
    super();

    this.state = {
      dataz: ""
    }
  }

  render() {
    return(
      <div>
        <h1>Step 4</h1>
        <input type="text" placeholder="Loan Amount"></input>
        <input type="text" placeholder="Monthly Mortgage"></input>
        <Link to="/wizard/3">
          <button>Previous Step</button>
        </Link>
        <Link to="/wizard/5">
          <button>Next Step</button>
        </Link>
      </div>
    )
  }
}

export default Wizard4;
