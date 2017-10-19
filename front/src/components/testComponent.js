import React, {Component} from 'react';
import axios from 'axios';


const getAllUrl = 'http://localhost:1337/api/properties'
const postUrl = 'http://localhost:1337/api/properties'




class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      testData: []
    }
  }

  getAllProperties() {
    axios
      .get(getAllUrl)
      .then((response) => {this.setState({testData: response.data})})
  }

  createNewProperty() {
    axios
      .post(postUrl)
      .then((response) => console.log(response))
  }

  componentWillMount() {
    this.getAllProperties();
  }


  render() {

    var myTestData = this.state.testData.map(dataPoint => {
      return(
        <div key={dataPoint.property_id}>
        <h3>{dataPoint.property_name}</h3>
        <ul>
          <li>Address: {dataPoint.property_name}</li>
          <li>City: {dataPoint.city}</li>

        </ul>
        </div>
    )})

    return(
      <div>
        <h1>Cat!</h1>
        <ul>
          {myTestData}
        </ul>
      </div>
    )
  }
}

export default Test;
