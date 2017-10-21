import React, {Component} from 'react';

import '../normalize.css'
import '../App.css'

import logo from "../assets/logo-small.png"

class Navigation extends Component {
	constructor(props) {
    super(props);

    this.state = {
      dataz: ""
    }
  }

  render() {
    return(
      <div className="navigation-div">
        <img src={logo} />
        <h1>Houser</h1>
        <h2>Dashboard</h2>
        <h3>Logout</h3>
      </div>
    )
  }
}

export default Navigation;
