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
    const eventTitleStyle = {
      textAlign: 'center',
      paddingTop: '15vh'
    }
    const eventTimePlaceStyle = {
      textAlign: 'center',
      marginTop: '30vh'
    }
    const eventOrganizerStyle = {
      textAlign: 'center',
      marginTop: '5vh'
    }
    const rsvpButtonStyle = {
      textAlign: 'center',
      marginTop: '5vh'
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
          <h1 style={eventTitleStyle}>{this.props.eventToDisplay.eventName}</h1>
          <h3 style={eventTimePlaceStyle}>{this.props.eventToDisplay.eventStart} • {this.props.eventToDisplay.location}</h3>
          <h3 style={eventOrganizerStyle}>By {this.props.eventToDisplay.organizer}</h3>
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
