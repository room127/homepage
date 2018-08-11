import React, { Component } from 'react';

import NavigationBar from '../../components/NavigationBar/NavigationBar';

class Experience extends Component {
  render() {
    return(
      <div>
        <NavigationBar />
        <div className="page-content">
          <h2 className="content-title">Web Experience</h2>
          <p>
          We have over 20 years combined experience in modern web development and design.
          </p>
          <p>
          Our team has combined skill in modern web languages and frameworks.
          </p>

          <h2 className="content-title">Tools We Use</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          
          <p>
            Our team is made up of four college students, two are rising sophmores and two are rising freshmen. Our team is incredibly passionate about web development and is always working on small side projects.
          </p>
        </div>
      </div>
    )
  }
}

export default Experience;