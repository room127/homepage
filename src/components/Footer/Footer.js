import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
  render() {
    return(
      <div id="footer">
        <div id="footer-links">
          <div className="footer-text-section">
            <span className="footer-header">Contact</span>
            <div className="footer-link">Pricing</div>
            <div className="footer-link">Job Request</div>
            <div className="footer-link">Feedback</div>
          </div>

          <div className="footer-text-section">
            <span className="footer-header">Company</span>
            <div className="footer-link">Careers</div>
            <div className="footer-link">Our Story</div>
          </div>

          <div className="footer-text-section">
            <span className="footer-header">Legal</span>
            <div className="footer-link">Privacy Policy</div>
            <div className="footer-link">Terms of Service</div>
          </div>
        </div>

        <div id="copywrite">© 2018 room127. All Rights Reserved.</div>
      </div>
    )
  }
}

export default Footer;
