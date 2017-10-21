import React, {Component} from 'react';
import logoLarge from "../assets/logo-large.png"


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    }
  }

  render() {
    return(
      <div className='login-main'>
        <div className='login-center'>
          <img src={logoLarge} />
          <div className='user-input'>
            <label for="usernameInput">User Name</label>
            <input
              ref="usernameInput"
              type="text"
              placeholder="Username"
              onChange={(e) => this.setState({username: this.refs.usernameInput.value})}
              ></input>
          </div>
          <div className='user-password'>
            <label for="passwordInput">Password</label>
            <input
              ref="passwordInput"
              type="text"
              placeholder="Password"
              onChange={(e) => this.setState({password: this.refs.passwordInput.value})}
            ></input>
          </div>
          <div className="login-and-register">
            <button>Login</button>
            <button>Register</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
