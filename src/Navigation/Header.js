import React, { Component } from 'react';
import logo from '../App/logo.svg';
import Nav from './Nav';

class Header extends Component {
  render() {
    return (
        <div className="App-Header">   
            <img src={logo} className="App-logo" alt="logo"/>IOT Ecosystem

          <Nav />
        </div>
    );
  }
}

export default Header;
