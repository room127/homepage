import React, { Component } from 'react';

import NavigationBar from '../../components/NavigationBar/NavigationBar';
import ContactCard from '../../components/ContactCard/ContactCard';

class About extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <div className="page-content">
          <h2 className="content-title">About</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <h2 className="content-title">Our Team</h2>
          <div>
            <ContactCard name="Duncan Grubbs" img="https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg" />
            <ContactCard name="Duncan Grubbs" img="https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg" />
            <ContactCard name="Duncan Grubbs" img="https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg" />
            <ContactCard name="Duncan Grubbs" img="https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg" />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
