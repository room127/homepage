import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ContactCard.css'

class ContactCard extends Component {
  render() {
    return (
      <div className="contact-card">
        <img className="profile-pic" src={this.props.img} alt={this.props.name} />
        <br />
        <span><b>{this.props.name}</b></span><br />
        <span><i>{this.props.position}</i></span>
      </div>
    );
  }
}

ContactCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string
}

export default ContactCard;