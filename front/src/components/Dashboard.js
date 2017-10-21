import React, {Component} from 'react';
import {Link} from 'react-router-dom'


import Navigation from './Navigation.js'


import '../normalize.css'
import '../App.css'

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataz: ""
    }
  }

  render() {
    return(
      <div>
        <Navigation />
        <h1>This is a Dashboard cat</h1>
        <p>Here is a paragraph</p>
        <ul>
          <li>These are items</li>
          <li>These are items</li>
          <li>These are items</li>
        </ul>
      </div>
    )
  }
}

export default Dashboard
