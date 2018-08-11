import React, { Component } from 'react';
// import propTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './NavigationBar.css';

import logo from '../../res/tempLogo@2x.png';
import icon from '../../res/icon@2x.png';

class NavigationBar extends Component {

  // componentDidMount() {
  //   if (this.props.selected) {
  //     const selectedNavItem = document.getElementsByName(this.props.selected)[0]
  //     selectedNavItem.classList.add('selected');
  //   }
  // }

  render() {
    return (
      <div id="navigation-wrapper">
        <div id="nav-top"><img id="" src={icon} alt="Icon" /></div>
        <div id="nav-middle">
          <img id="big-logo" src={logo} alt="Logo" />
          <div id="vertical-bar" />
          <div id="header-text">
            <span id="bigtext">web<br />development<br />collective</span><br />
            <span id="subtext">pushing freelance web <br />development into the<br /> future</span>
          </div>
        </div>
        <nav id="navigation-links">
          <NavLink exact className="nav-link" activeClassName="selected" name="home" to="/" href="/">Home</NavLink>
          <NavLink exact className="nav-link" activeClassName="selected" name="experience" to="/experience" href="/experience">Experience</NavLink>
          <NavLink exact className="nav-link" activeClassName="selected" name="pricing" to="/pricing" href="/pricing">Pricing</NavLink>
          <NavLink exact className="nav-link" activeClassName="selected" name="about" to="/about" href="/about">About</NavLink>
        </nav>
      </div>
    )
  }
}

// NavigationBar.propTypes = {
//   selected: propTypes.string,
// };

export default NavigationBar;
