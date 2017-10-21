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
        <h1>Wizard 1</h1>
        <input type="text" placeholder="cat"></input>
      </div>
    )
  }
}

export default Wizard1;
