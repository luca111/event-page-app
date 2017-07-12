import React, { Component } from 'react';

import { Meteor } from 'meteor/meteor';

export default class Preview extends Component {
  publishEvent() {
    Meteor.call('eventPublication', this.props.previewData);
    this.props.clearEventDetails();
    this.props.history.push('/myevents');
  }
  goModifyPreview() {
    this.props.modifyPreview();
  }
  render() {
    const eventPageTopStyle = {
      backgroundImage: 'url(' + this.props.previewData.eventImage + ')',
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
    const modifyPreviewButtonStyle = {
      textAlign: 'center',
      marginTop: '5vh',
      display: 'inlineBlock',
      marginRight: '5vw'
    }
    const publishButtonStyle = {
      textAlign: 'center',
      marginTop: '5vh',
      display: 'inlineBlock',
      marginLeft: '5vw'
    }
    return (
      <div>
        <div style={eventPageTopStyle}>
          <h1 style={eventTitleStyle}>{this.props.previewData.eventName}</h1>
          <h3 style={eventTimePlaceStyle}>{this.props.previewData.eventStart} • {this.props.previewData.location}</h3>
          <h3 style={eventOrganizerStyle}>By {this.props.previewData.organizer}</h3>
          <div style={rsvpButtonStyle}>
            <button className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent'>RSVP</button>
          </div>
        </div>
        <div style={eventPageBottomStyle}>
          <div style={eventDescriptionDivStyle}>
            <h4 style={eventDescriptionStyle}>{this.props.previewData.eventDescription}</h4>
          </div>
          <div style={rsvpButtonStyle}>
            <button className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent'>RSVP</button>
          </div>
          <div style={rsvpButtonStyle}>
            <button style={modifyPreviewButtonStyle} className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored' onClick={this.goModifyPreview.bind(this)}>Edit</button>
            <button style={publishButtonStyle} className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent' onClick={this.publishEvent.bind(this)}>Publish</button>
          </div>
        </div>
      </div>
    )
  }
}
