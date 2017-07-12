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
    const allRsvpFieldsFilled = () => {
      if (
        true // TO FIX
        // this.refs.eventName.value &&
        // this.refs.organizer.value &&
        // this.refs.eventStart.value &&
        // this.refs.location.value &&
        // this.refs.maxAttendees.value &&
        // this.refs.eventDescription.value &&
        // this.state.image
      ) {
        return (
          <button className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent' type='submit'>Ok</button>
        )
      } else {
        return (
          <button className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent' disabled type='submit'>Ok</button>
        )
      }
    }
    return (
      <div>
        <h2 style={{marginTop: '8vh', textAlign: 'center'}}>RSVP</h2>
        <form style={{marginRight: 'auto', marginBottom: '10vh', marginLeft: 'auto', width: '35vw'}} onSubmit={this.submitRsvp.bind(this)}>

          <div className='mdc-textfield' style={{width: '100%'}}>
            <label htmlFor='attendeeFirstName'>Please enter your first name</label>
            <br />
            <input className='mdc-textfield__input' type='text' ref='attendeeFirstName' id='attendeeFirstName' placeholder='First name' required />
          </div>
          <div className='mdc-textfield' style={{width: '100%'}}>
          <label htmlFor='attendeeLastName'>Please enter your last name</label>
          <br />
          <input className='mdc-textfield__input' type='text' ref='attendeeLastName' id='attendeeLastName' placeholder='Last name' required />
          </div>
          <div className='mdc-textfield' style={{width: '100%'}}>
          <label htmlFor='attendeeEmail'>Please enter your email</label>
          <br />
          <input className='mdc-textfield__input' type='email' ref='attendeeEmail' id='attendeeEmail' placeholder='Email' required />
          </div>
          {allRsvpFieldsFilled()}
        </form>
      </div>
    )
  }
}
