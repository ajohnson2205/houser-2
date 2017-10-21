import React, { Component } from 'react';
import './App.css';
import Login from './components/Login.js';


import './normalize.css';

import router from './router.js'

class App extends Component {
  render() {
    return (
      <div>
        {router}
      </div>
    );
  }
}

export default App;
