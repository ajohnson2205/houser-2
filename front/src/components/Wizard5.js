import React, {Component} from 'react';

import {Link} from 'react-router-dom';


class Wizard5 extends Component {
  constructor() {
    super();

    this.state = {
      dataz: ""
    }
  }

  render() {
    return(
      <div>
        <h1>Step 5</h1>
        <input type="text" placeholder="Desired Rent"></input>
        <Link to="/wizard/4">
          <button>Previous Step</button>
        </Link>
        <Link to="/dashboard">
          <button>Complete</button>
        </Link>
      </div>
    )
  }
}

export default Wizard5;
