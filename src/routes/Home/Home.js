import React, { Component } from 'react';

import NavigationBar from '../../components/NavigationBar/NavigationBar';

class Home extends Component {
  render() {
    return(
      <div>
        <NavigationBar selected="home" />
        Home
      </div>
    );
  }
}
export default Home;
