import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

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


	logoutUser = () => {
		axios
			.post('http://localhost:1337/api/auth/logout')
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
				<Link to="/">
					<button
						onClick={this.logoutUser}
						>Logout</button>
				</Link>
      </div>
    )
  }
}

export default Navigation;
