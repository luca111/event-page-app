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
    const previewImageStyle = {
      backgroundImage: 'url(' + this.props.previewData.eventImage + ')',
      backgroundSize: 'cover',
      height: '95vh'
    }
    return (
      <div style={previewImageStyle}>
        <h3>data from filled-in form:</h3>
        eventName: {this.props.previewData.eventName}
        <br />
        organizer: {this.props.previewData.organizer}
        <br />
        eventStart: {this.props.previewData.eventStart}
        <br />
        location: {this.props.previewData.location}
        <br />
        maxAttendees: {this.props.previewData.maxAttendees}
        <br />
        eventDescription: {this.props.previewData.eventDescription}
        <br />
        <button className="btn btn-danger btn-lg" onClick={this.goModifyPreview.bind(this)}>Cancel</button>
        <button className="btn btn-success btn-lg" onClick={this.publishEvent.bind(this)}>Publish</button>
      </div>
    )
  }
}
