import React, { Component } from 'react';
import { Content } from 'react-component-routing';
import Home from '../Home/Home';
import Data from '../Data/Data';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Content home={Home} components={[Data]} />
        
      </div>
    );
  }
}

export default App;
