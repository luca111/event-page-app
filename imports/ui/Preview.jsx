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
          <div style={eventTitleDivStyle}>
            <h1 style={eventInfoStyle}>{this.props.previewData.eventName}</h1>
          </div>
          <div style={eventInfoStyle}>
            <h3 style={eventTimePlaceStyle}>{this.props.previewData.eventStart}<br />•<br />{this.props.previewData.location}</h3>
            <h3>By {this.props.previewData.organizer}</h3>
          </div>
          <div style={rsvpButtonStyle}><button className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent'>RSVP</button></div>
        </div>
        <div style={eventPageBottomStyle}>
          <div style={eventDescriptionDivStyle}>
            <h4 style={eventDescriptionStyle}>{this.props.previewData.eventDescription}</h4>
          </div>
          <div style={rsvpButtonStyle}><button className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent'>RSVP</button></div>
          <div style={rsvpButtonStyle}>
            <button style={modifyPreviewButtonStyle} className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored' onClick={this.goModifyPreview.bind(this)}>Edit</button>
            <button style={publishButtonStyle} className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent' onClick={this.publishEvent.bind(this)}>Publish</button>
          </div>
        </div>
      </div>
    )
  }
}
