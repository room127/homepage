import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ContactCard.css'

class ContactCard extends Component {
  render() {
    return (
      <div className="contact-card">
        <div className="profile-pic" />
        <br />
        <span>{this.props.name}</span>
      </div>
    );
  }
}

ContactCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string
}

export default ContactCard;