import React, { Component } from 'react';

import NavigationBar from '../../components/NavigationBar/NavigationBar';

import './Experience.css';

import mongodb from '../../res/mongodb.png';
import node from '../../res/node.png';
import react from '../../res/react.png';

class Experience extends Component {
  render() {
    return(
      <div>
        <NavigationBar />
        <div className="page-content">
          <h2 className="content-title">Web Experience</h2>
          <div className="horizontal-line" />
          <p>
          We have over 20 years combined experience in modern web development and design, working
          in both academic and professional settings.
          <br />
          <br />
          Our team has combined skill in many of the most popular modern web languages and frameworks.
          </p>

          <h2 className="content-title">Tools We Use</h2>
          <div className="horizontal-line" />
          <div id="img-wrapper">
            
            <img className="tool-icon" src={node} alt="Node" />
            <img className="tool-icon" src={react} alt="React" />
            
            </div>
          <div id="img-wrapper">
            <img className="tool-icon" src={mongodb} alt="Mongo" />
          </div>
          <h2 className="content-title">Our Work</h2>
          <div className="horizontal-line" />
          <p>We currently do not have any past clients.</p>
          <p>Be the first?</p>
        </div>
      </div>
    )
  }
}

export default Experience;