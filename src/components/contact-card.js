import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './contact-card.css'

class ContactCard extends Component {
  render() {
    return (
      <div className="contact-card">
        <h2>{this.props.name}</h2>
        <img src={this.props.img} alt="Profile" />
      </div>
    );
  }
}

ContactCard.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string
}

export default ContactCard;