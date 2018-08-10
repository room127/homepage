import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './NavigationBar.css';

class NavigationBar extends Component {
  componentDidMount() {
    if (this.props.selected) {
      const selectedNavItem = document.getElementsByName(this.props.selected)[0];
      selectedNavItem.className = 'nav-link selected';
    }
  }

  render() {
    return(
      <div id="navigation-wrapper">

        <nav id="navigation-links">
          <Link className="nav-link" name="home" to="/" href="/">Home</Link>
          <Link className="nav-link" name="about" to="/about" href="/about">About</Link>
          <Link className="nav-link" name="experience" to="/experience" href="/experience">Experience</Link>
          <Link className="nav-link" name="pricing" to="/pricing" href="/pricing">Pricing</Link>
        </nav>
      </div>
    )
  }
}

NavigationBar.propTypes = {
  selected: propTypes.string,
};

export default NavigationBar;
