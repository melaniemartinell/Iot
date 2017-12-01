import React, { Component } from 'react';
import NavItem from './NavItem';

class Nav extends Component {
  render() {
    const path = window.location.pathname.split('/')[1];
    console.log(window.location);
    return (
      <div className="App-Header-Nav">
        <NavItem text={'Home'} active={path === ""} />        
        <NavItem text={'Data'} active={path === 'Data'} />
      </div>
    );
  }
}

export default Nav;
