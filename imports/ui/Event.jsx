import React, { Component } from 'react';

export default class Event extends Component {
  goToRsvp() {
    this.props.prepareRsvp(this.props.eventToDisplay.eventId);
    return false;
  }
  rsvpButtonToDisplay() {
    if (this.props.eventToDisplay.attendees < this.props.eventToDisplay.maxAttendees) {
      return  (
        <button className='btn btn-success' onClick={this.goToRsvp.bind(this)}>RSVP</button>
      )
    } else {
      return (
        <button className='btn btn-danger'>SOLD OUT</button>
      )
    }
  }
  render() {
    const eventTopDivStyle = {
      backgroundImage: 'url(' + this.props.eventToDisplay.eventImage + ')',
      backgroundSize: 'cover',
      height: '60vh'
    }
    const eventTitleStyle = {
      textAlign: 'center',
      paddingTop: '15vh'
    }
    return (
      <div>
        <div style={eventTopDivStyle}>
          <h1 style={eventTitleStyle}>{this.props.eventToDisplay.eventName}</h1>
          <h3>{this.props.eventToDisplay.eventStart}</h3> • <h3>{this.props.eventToDisplay.location}</h3>
          <h3>{this.props.eventToDisplay.organizer}</h3>
          {this.rsvpButtonToDisplay()}
          <h4>{this.props.eventToDisplay.eventDescription}</h4>
          {this.rsvpButtonToDisplay()}
        </div>
      </div>
    )
  }
}
