import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ContactCard.css'

class ContactCard extends Component {
  render() {
    return (
      <div className="contact-card">
        <img className="profile-pic" src={this.props.img} alt="Profile" />
        <h3>{this.props.name}</h3>
      </div>
    );
  }
}

ContactCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string
}

export default ContactCard;