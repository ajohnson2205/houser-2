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
    return (
      <div>
        <Navigation />
        <div className="dashboard-top">
          <div>
            <button>Add new property</button>
          </div>
          <div className="dashboard-options">
            <p>List properties with "desired rent" greater than: $</p>
            <input
              type="text"
              placeholder="0">
            </input>
            <button>Filter</button>
            <button>Reset</button>
          </div>
        </div>



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
