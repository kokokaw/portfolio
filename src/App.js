import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import Aboutme from './Aboutme';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
          <Header /> 
          <Aboutme />
      </div>
    );
  }
}

export default App;
