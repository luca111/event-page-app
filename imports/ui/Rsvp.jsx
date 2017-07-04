import React, { Component } from 'react';

export default class Rsvp extends Component {
  submitRsvp(e) {
    e.preventDefault();
    let rsvpInfo = {
      rsvpEventId: this.props.rsvpEventId,
      firstName: this.refs.attendeeFirstName.value,
      lastName: this.refs.attendeeLastName.value,
      email: this.refs.attendeeEmail.value
    };
    Meteor.call('rsvp', rsvpInfo, (error, result) => {
      if (error) {
        alert(error)
      } else {
        this.props.history.push('/success');
      }
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.submitRsvp.bind(this)}>
          <div className='form-group'>
            <input type='text' className='form-control' ref='attendeeFirstName' placeholder='Please enter your first name' required />
          </div>
          <div className='form-group'>
            <input type='text' className='form-control' ref='attendeeLastName' placeholder='Please enter your last name' required />
          </div>
          <div className='form-group'>
            <input type='email' className='form-control' ref='attendeeEmail' placeholder='Please enter your email' required />
          </div>
          <button type='submit' className='btn btn-default'>Ok</button>
        </form>
      </div>
    )
  }
}
