import React, {Component} from 'react';

import {Link} from 'react-router-dom';


class Wizard2 extends Component {
  constructor() {
    super();

    this.state = {
      dataz: ""
    }
  }

  render() {
    return(
      <div>
        <h1>Step 2</h1>
        <input type="text" placeholder="Address"></input>
        <input type="text" placeholder="City"</input>
        <input type="text" placeholder="State"></input>
        <input type="text" placeholder="ZIP"></input>
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
