import React, { Component } from 'react';
import logo from '../App/logo.svg';
import Nav from './Nav';

class Header extends Component {
  render() {
    return (
        <div className="App-Header">   
            {/* <img src={logo} className="App-logo" alt="logo"/>IOT Ecosystem */}
            <span style={{color: '#DCD0C0', fontSize: '40px', paddingRight: '10px'}} className="App-logo fa fa-snowflake-o"> </span>
            <span style={{paddingRight: '10px', fontSize: '25px'}}> IOT Ecosystem </span>

          <Nav />
        </div>
    );
  }
}

export default Header;
