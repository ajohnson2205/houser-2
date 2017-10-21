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
        <div className="dashboard-bottom">
          {this.state.properties.map(property => {
            return <div>{property.city}</div>
          })}

        </div>
      </div>
    )
  }
}

export default Dashboard
