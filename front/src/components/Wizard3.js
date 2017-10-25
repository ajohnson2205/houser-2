import React, {Component} from 'react';

import {Link} from 'react-router-dom';


class Wizard3 extends Component {
  constructor() {
    super();

    this.state = {
      dataz: ""
    }
  }

  render() {
    return(
      <div>
        <h1>Step 3</h1>
        <input type="text" placeholder="Image URL"></input>
        <Link to="/wizard/2">
          <button>Previous Step</button>
        </Link>
        <Link to="/wizard/4">
          <button>Next Step</button>
        </Link>
      </div>
    )
  }
}

export default Wizard3;
