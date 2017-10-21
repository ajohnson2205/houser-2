import React, {Component} from 'react';
import logoLarge from "../assets/logo-large.png";
import axios from 'axios';
import {Link} from 'react-router-dom'

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    }
  }

  registerUser = () => {
    let {username, password} = this.state;
    axios
      .post('http://localhost:1337/api/auth/user', {
        username,
        password
      })
  }

  loginUser = () => {
    let {username, password} = this.state;
    axios
      .post('http://localhost:1337/api/auth/login', {
        username,
        password
      })
  }


  render() {
    return(
      <div className='login-main'>
        <div className='login-center'>
          <img src={logoLarge} />
          <div className='user-input'>
            <label for="usernameInput">User Name</label>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => this.setState({username: e.target.value})}
              ></input>
          </div>
          <div className='user-password'>
            <label for="passwordInput">Password</label>
            <input
              type="text"
              placeholder="Password"
              onChange={(e) => this.setState({password: e.target.value})}
            ></input>
          </div>
          <div className="login-and-register">
            <Link to="/dashboard">
              <button onClick={this.loginUser}>Login</button>
            </Link>
            <Link to="/dashboard">
              <button onClick={this.registerUser}>Register!</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
