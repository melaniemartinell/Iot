import React, { Component } from 'react';
import { Link } from 'react-component-routing';
import PropTypes from 'prop-types';

class NavItem extends Component {
  render() {
    const isHome = this.props.text === 'Home';
    return (
      <div className={`Nav-Item ${this.props.active ? 'Nav-Item-Active' : null}`}>
        <Link to={isHome? '' : this.props.text}> {this.props.text} </Link>
      </div>
    );
  }
}

NavItem.propTypes =  {
  text: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired
};

export default NavItem;
