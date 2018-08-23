import React, { Component } from 'react';

import NavigationBar from '../../components/NavigationBar/NavigationBar';

import './Pricing.css';

class Pricing extends Component {
  render() {
    return(
      <div>
        <NavigationBar />
        <div className="page-content">
          <h2 className="content-title">Pricing</h2>
          <div className="horizontal-line" />
          <p>
          Our pricing system is based around tiers. We offer three different tiers of websites at three different prices.
          </p>
          <div className="pricing-tier-header level-one">
            <h2 className="tier-header-text">Level 1</h2>
            <h2 className="tier-header-text price">$100</h2>
          </div>
          <p>
          A static website (no backend functionality, database, search queries, etc.) with up to four pages. Already designed either professionally or by yourself. Maintenence for up to one month after deployment.
          </p>

          <div className="pricing-tier-header level-two">
            <h2 className="tier-header-text">Level 2</h2>
            <h2 className="tier-header-text price">$200</h2>
          </div>
          <p>
          A non-static website with limited backend functionality* with up to 8 pages. Already designed either professionally or by yourself. Maintenence for up to two months after deployment.
          </p>
          
          <div className="pricing-tier-header level-three">
            <h2 className="tier-header-text">Level 3</h2>
            <h2 className="tier-header-text price">$500</h2>
          </div>
          <p>
          A non-static website with full backend functionality* and unlimited frontend pages. Already designed either professionally or by yourself, with some design assistance by our teams. Maintenence for up to six months after deployment.
          </p>
        </div>
      </div>
    )
  }
}

export default Pricing;
