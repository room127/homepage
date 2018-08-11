import React, { Component } from 'react';

import NavigationBar from '../../components/NavigationBar/NavigationBar';

class Pricing extends Component {
  render() {
    return(
      <div>
        <NavigationBar />
        <div className="page-content">
          <h2 className="content-title">Pricing</h2>
          <p>
          Out pricing system is based around tiers. We offer three different tiers of websites at three different prices.
          </p>
          <h2 className="content-title">Level 1</h2>
          <p>A static website (no backend functionality, database, search querys, etc.) with up to four pages. Already designed either professionaly or by yourself. Maintenence for up to one month after deployment.
          </p>

          <h2 className="content-title">Level 2</h2>
          <p>A non-static website with limited backend functionality* with up to 8 pages. Already designed either professionaly or by yourself. Maintenence for up to two months after deployment.
          </p>
          
          <h2 className="content-title">Level 3</h2>
          <p>A non-static website with full backend functionality* and unlimited frontend pages. Already designed either professionaly or by yourself, with some design assistance by our teams. Maintenence for up to six months after deployment.
          </p>
        </div>
      </div>
    )
  }
}

export default Pricing;
