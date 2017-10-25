import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import Navigation from './Navigation.js'


import '../normalize.css'
import '../App.css'

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      properties: []
    }
  }


  getAllProperties = () => {
    axios
      .get('http://localhost:1337/api/properties')
      .then((response) => {
        this.setState({properties: response.data});
        console.log("Here is the response: ", response)
      } )
  }

  componentWillMount() {
    this.getAllProperties();
  }


  render() {
    return (
      <div>
        <Navigation />
        <div className="dashboard-top">
          <div>
            <Link to="/wizard/1">
              <button>Add new property</button>
            </Link>
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
        <div className="dashboard-bottom">
          {this.state.properties.map(property => {
            return <div>{property.city}</div>
          })}

        </div>
        <div>
          <h1>To Do</h1>
          <ol>
            <li>Make sure that the cancel button clears out the Redux store (in addition to routing back to the dashboard [which it does currently])</li>
            <li>Make sure the complete button writes to the Redux store</li>
          </ol>
        </div>
      </div>
    )
  }
}

export default Dashboard
