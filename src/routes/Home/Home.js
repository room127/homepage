import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

import './Home.css';

class Home extends Component {
  render() {
    return(
      <div>
        <NavigationBar />
        <div className="page-content">
          <h2 className="content-title">Who we are.</h2>
          <p>
          room127 was created by a group of college students who believed the freelance web development community could be changed. for the better.
          </p>
          <p>
          We met in high school where we would all hang around the same room during lunch, room 127. Throughout high school and even into college, we were all passionate about web development. However, we thought that the current environment was filled with old frameworks, bad practices, slow load times, and much more. We set out to change all of that.
          </p>
          <h2 className="content-title">What we do.</h2>
          <p>
          Just like most freelance web development companies, we take your website idea and turn it into a reality. Whether you are looking for a personal website or a fully functioning app, we have you covered. What&apos;s the difference between us and the rest of them, we do things better. We take advantage of the latest, fastest web frameworks and technologies so your website is future proof. We make sure your website follows a11y standards so everyone is able to access it.
          </p>
          
          <p>
          Our proccess starts with you contacting us with an idea. We then assess your idea and work to put you in the
          right <Link id="pricing-link" to="/pricing" href="/pricing">pricing</Link> tier. Then, we assign a team to your project and get
          working, updating you along the way so you the exact progress on your website at a given time.
          </p>
        </div>
      </div>
    );
  }
}
export default Home;
