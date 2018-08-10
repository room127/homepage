import React, { Component } from 'react';

import NavigationBar from '../../components/NavigationBar/NavigationBar';

class About extends Component {
  render() {
    return(
      <div>
        <NavigationBar selected="about" />
        About
      </div>
    );
  }
}

export default About;
