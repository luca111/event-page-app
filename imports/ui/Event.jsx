import React, { Component } from 'react';

export default class Event extends Component {
  renderEvents() {
    return this.props.events.map((event) => (
      <li key={event._id}>{event.text}</li>
    ));
  }
  render() {
    return (
      <div>
        {this.renderEvents()}
      </div>
    )
  }
}
