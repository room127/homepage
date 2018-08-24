import React, { Component } from 'react';

import NavigationBar from '../../components/NavigationBar/NavigationBar';
import ContactCard from '../../components/ContactCard/ContactCard';

import './About.css';

class About extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <div className="page-content">
          <h2 className="content-title">About Us</h2>
          <div className="horizontal-line" />
          <p>
            Our team is made up of four college students, two are rising sophomores and two are rising freshmen. We are incredibly passionate about web development and are always working on small side projects. Our combined background in both formal computer science and web development makes us unique in the freelance world. We utilize our technical knowledge to create better, faster, and more intuitive web experiences.
          </p>
          <h2 className="content-title">Meet the Developers</h2>
          <div className="horizontal-line" />
          <div id="meet-section">
            <ContactCard
              name="Sebastian Boyd"
              position="UC Davis"
            />
            <ContactCard
              name="Duncan Grubbs"
              position="University of Rochester"
              img="https://piggiesultimate.weebly.com/uploads/1/0/7/2/107257249/duncan_orig.jpg" />
            <ContactCard
              name="Leo Krashanoff"
              position="UCLA"
            />
            <ContactCard
              name="Max Starr"
              position="UCSC"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
