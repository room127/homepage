import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ContactCard.css'

class ContactCard extends Component {
  render() {
    let altImage = 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';
    return (
      <div className="contact-card">
        <img className="profile-pic" src={this.props.img || altImage} alt={this.props.name} />
        < br />
        <span><b>{this.props.name}</b></span> <br />
        <span><i>{this.props.position}</i></span>
      </div >
    );
  }
}

ContactCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string
}

export default ContactCard;