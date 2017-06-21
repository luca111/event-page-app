import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class NewEvent extends Component {
  preparePreview(e){
    e.preventDefault;
    let filledForm = {
      eventName: this.refs.eventName.value,
      organizer: this.refs.organizer.value,
      eventStart: this.refs.eventStart.value,
      location: this.refs.location.value,
      maxAttendees: this.refs.maxAttendees.value,
      eventDescription: this.refs.eventDescription.value,
      eventImage: this.refs.eventImage.value
    }
    this.props.onFormFilled(filledForm);
    return false;
  }
  render() {
    return (
      <div>
        <h2>New Event</h2>
        <form onSubmit={this.preparePreview.bind(this)}>
          <div className='form-group'>
            <input type='text' className='form-control' ref='eventName' placeholder='Enter event name' required />
          </div>
          <div className='form-group'>
            <input type='text' className='form-control' ref='organizer' placeholder='Enter organizer name' required />
          </div>
          <div className='form-group'>
            <input type='text' className='form-control' ref='eventStart' placeholder='Enter event date and time' required />
          </div>
          <div className='form-group'>
            <input type='text' className='form-control' ref='location' placeholder='Enter event location' required />
          </div>
          <div className='form-group'>
            <input type='text' className='form-control' ref='maxAttendees' placeholder='Enter max number of attendees' required />
          </div>
          <div className='form-group'>
            <input type='text' className='form-control' ref='eventDescription' placeholder='Enter event description' required />
          </div>
          <div className='form-group'>
            <input type='text' className='form-control' ref='eventImage' placeholder='Enter event image - TO FIX' required />
          </div>
          <button type='submit' className='btn btn-default'>Preview</button>
        </form>
      </div>
    )
  }
}
