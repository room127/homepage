import React, { Component } from 'react';

import NavigationBar from '../../components/NavigationBar/NavigationBar';

import './Experience.css';

import mongodb from '../../res/mongodb.png';
import polymer from '../../res/polymer.png';

class Experience extends Component {
  render() {
    return(
      <div>
        <NavigationBar />
        <div className="page-content">
          <h2 className="content-title">Web Experience</h2>
          <p>
          We have over 20 years combined experience in modern web development and design, working
          in both academic and professional settings.
          <br />
          <br />
          Our team has combined skill in many of the most popular modern web languages and frameworks.
          </p>

          <h2 className="content-title">Tools We Use</h2>
          <div id="img-wrapper">
            <img className="tool-icon" src={mongodb} alt="Mongo" />
            <img className="tool-icon" src={polymer} alt="Polymer" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    )
  }
}

export default Experience;