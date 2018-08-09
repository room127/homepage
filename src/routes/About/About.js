import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return(
      <div>
        About<br />
        <Link to="/" href="/">Home</Link><br />
        <Link to="/about" href="/about">About</Link>
      </div>
    );
  }
}

export default About;
