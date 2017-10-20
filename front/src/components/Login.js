import React, {Component} from 'react';

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
      <h1>Cats!</h1>
    )
  }
}

export default Login;
