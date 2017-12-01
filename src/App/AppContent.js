import React, { Component } from 'react';
import Header from '../Navigation/Header';

class AppContent extends Component {
  render() {
    return (
      <div className="AppContent">
        <Header />
        <div className="App-Content">
          {this.props.children}
        </div>
      </div> 
    );
  }
}

export default AppContent;
