import React, { Component } from 'react';

export default class Event extends Component {
  goToRsvp() {
    this.props.prepareRsvp(this.props.eventToDisplay.eventId);
    return false;
  }
  rsvpButtonToDisplay() {
    if (this.props.eventToDisplay.attendees < this.props.eventToDisplay.maxAttendees) {
      return  (
        <button className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent' onClick={this.goToRsvp.bind(this)}>RSVP</button>
      )
    } else {
      return (
        <button className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent' disabled>SOLD OUT</button>
      )
    }
  }
  render() {
    const eventPageTopStyle = {
      backgroundImage: 'url(' + this.props.eventToDisplay.eventImage + ')',
      backgroundSize: 'cover',
      height: '88vh'
    }
    const eventTitleDivStyle = {
      paddingTop: '8vh'
    }
    const eventInfoStyle = {
      textAlign: 'center',
      color: '#ddd',
      background: 'radial-gradient(rgba(0,0,0,0.20),rgba(0,0,0,0))',
      padding: '3vh 3vw 3vh 3vw',
      width: '50vw',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
    const eventTimePlaceStyle = {
      textAlign: 'center',
      marginTop: '6vh'
    }
    const eventOrganizerStyle = {
      textAlign: 'center',
      marginTop: '1vh'
    }
    const rsvpButtonStyle = {
      textAlign: 'center',
      marginTop: '1vh'
    }
    const eventPageBottomStyle = {
      color: "#ddd",
      backgroundColor: '#222',
      paddingTop: '8vh',
      paddingBottom: '15vh'
    }
    const eventDescriptionDivStyle = {
      width: '60vw',
      marginRight: 'auto',
      marginLeft: 'auto'
    }
    const eventDescriptionStyle = {
      whiteSpace: 'pre-wrap'
    }
    return (
      <div>
        <div style={eventPageTopStyle}>
          <div style={eventTitleDivStyle}>
            <h1 style={eventInfoStyle}>{this.props.eventToDisplay.eventName}</h1>
          </div>
          <div style={eventInfoStyle}>
            <h3 style={eventTimePlaceStyle}>{this.props.eventToDisplay.eventStart}<br />•<br />{this.props.eventToDisplay.location}</h3>
            <h3>By {this.props.eventToDisplay.organizer}</h3>
          </div>
          <div style={rsvpButtonStyle}>{this.rsvpButtonToDisplay()}</div>
        </div>
        <div style={eventPageBottomStyle}>
          <div style={eventDescriptionDivStyle}>
            <h4 style={eventDescriptionStyle}>{this.props.eventToDisplay.eventDescription}</h4>
          </div>
          <div style={rsvpButtonStyle}>{this.rsvpButtonToDisplay()}</div>
        </div>
      </div>
    )
  }
}
