import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './NavigationBar.css';

class NavigationBar extends Component {
  render() {
    return(
      <div id="navigation-wrapper">
        <Link to="/" href="/">Home</Link><br />
        <Link to="/about" href="/about">About</Link>
      </div>
    )
  }
}

export default NavigationBar;
