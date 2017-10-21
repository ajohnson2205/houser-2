import React, {Component} from 'react';
import {Link} from 'react-router-dom'


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
				<Link to="/dashboard">
					<img src={logo} />
				</Link>
				<Link to="/dashboard">
        	<h1>Houser</h1>
				</Link>	
        <h1>Dashboard</h1>
        <h1>Logout</h1>
      </div>
    )
  }
}

export default Navigation;
