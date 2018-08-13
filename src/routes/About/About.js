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
          <p>
            Our team is made up of four college students, two are rising sophmores and two are rising freshmen.
            We are incredibly passionate about web development and are always working on small side projects.
            Our combined background in both formal computer science and web development makes us unique in the
            freelance world. We utlilize the our technical knowledge to create better, faster, and more intuitive
            web experiences.
          </p>

          <h2 className="content-title">Meet the developers</h2>
          <div id="meet-section">
            <ContactCard name="Sebastian Boyd" img="https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg" />
            <ContactCard name="Duncan Grubbs" img="https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg" />
            <ContactCard name="Leo Krashanoff" img="https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg" />
            <ContactCard name="Max Starr" img="https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg" />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
