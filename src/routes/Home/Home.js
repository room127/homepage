import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return(
      <div>
        Home<br />
        <Link to="/" href="/">Home</Link><br />
        <Link to="/about" href="/about">About</Link>
      </div>
    );
  }
}
export default Home;
