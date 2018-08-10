import React, { Component } from 'react';

import NavigationBar from '../../components/NavigationBar/NavigationBar';

class Pricing extends Component {
  render() {
    return(
      <div>
        <NavigationBar selected="pricing" />
        Pricing
      </div>
    )
  }
}

export default Pricing;
