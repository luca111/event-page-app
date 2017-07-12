import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class NewEvent extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      image: undefined
    });
  }
  prepareImagePreview(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = document.getElementById('eventImage').files[0];
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.setState({
        image: reader.result
      });
    }

    // reader.onload = (e) => {
    //   this.setState({
    //     imageUrl: e.target.result,
    //     imageFile: reader.readAsDataURL(file)
    //   });
    // }

    // let reader = new FileReader();
    // let file = e.target.files[0];
    // console.log(file);
    // console.log(reader.result);
    // reader.onloadend = () => {
    //   this.setState({
    //     imageFile: file,
    //     imageUrl: reader.result
    //   });
    // };
    // this.setState({
    //   preparedImage: e.target.files[0]
    // });
  }
  preparePreview(e) {
    e.preventDefault();
    let filledForm = {
      eventName: this.refs.eventName.value,
      organizer: this.refs.organizer.value,
      eventStart: this.refs.eventStart.value,
      location: this.refs.location.value,
      maxAttendees: this.refs.maxAttendees.value,
      eventDescription: this.refs.eventDescription.value,
      eventImage: this.state.image
    };
    this.props.onFormFilled(filledForm);
    return false;
  }
  render() {
    const placeholdersOrPrefilled = () => {
      if (this.props.eventPlanningDetails.eventName) {
        return (
          <div>
            <div className='mdc-textfield' style={{width: '100%'}}>
              <label htmlFor='eventName'>Please enter a name for the event</label>
              <br />
              <input className='mdc-textfield__input' style={{width: '100%'}} id='eventName' type='text' ref='eventName' defaultValue={this.props.eventPlanningDetails.eventName} required />
            </div>
            <div className='mdc-textfield' style={{width: '100%'}}>
              <label htmlFor='organizer'>Please enter the organizer</label>
              <br />
              <input className='mdc-textfield__input' style={{width: '100%'}} type='text' ref='organizer' id='organizer' defaultValue={this.props.eventPlanningDetails.organizer} required />
            </div>
            <div className='mdc-textfield' style={{width: '100%'}}>
              <label htmlFor='eventStart'>Please enter the start time and date</label>
              <br />
              <input className='mdc-textfield__input' style={{width: '100%'}} type='text' ref='eventStart' id='eventStart' defaultValue={this.props.eventPlanningDetails.eventStart} required />
            </div>
            <div className='mdc-textfield' style={{width: '100%'}}>
              <label htmlFor='location'>Please enter the location</label>
              <br />
              <input className='mdc-textfield__input' style={{width: '100%'}} type='text' ref='location' id='location' defaultValue={this.props.eventPlanningDetails.location} required />
            </div>
            <div className='mdc-textfield' style={{width: '100%'}}>
              <label htmlFor='maxAttendees'>Please enter the maximum number of attendees</label>
              <br />
              <input className='mdc-textfield__input' style={{width: '100%'}} type='number' ref='maxAttendees' id='maxAttendees' defaultValue={this.props.eventPlanningDetails.maxAttendees} required />
            </div>
            <br />
            <label htmlFor='eventDescription'>Please enter the event description</label>
            <br />
            <div className='mdc-textfield mdc-textfield--multiline' style={{width: '100%'}}>
              <textArea rows='10' className='mdc-textfield__input' style={{width: '100%'}} ref='eventDescription' id='eventDescription' defaultValue={this.props.eventPlanningDetails.eventDescription} required />
            </div>
            <div className='mdc-textfield' style={{width: '100%'}}>
              <label style={{fontFamily: 'Helvetica,Arial,sans-serif', fontWeight: '400', lineHeight: '20px', fontSize: '12px'}} htmlFor='eventImage'>Please enter an image to use for background</label>
              <br />
              <input type='file' ref='eventImage' id='eventImage' onChange={(e) => {this.prepareImagePreview(e)}} required />
            </div>
          </div>
        )
      }
      else {
        return (
          <div>
            <div className='mdc-textfield' style={{width: '100%'}}>
              <label htmlFor='eventName'>Please enter a name for the event</label>
              <br />
              <input className='mdc-textfield__input' style={{width: '100%'}} id='eventName' type='text' ref='eventName' placeholder='Event name' required />
            </div>
            <div className='mdc-textfield' style={{width: '100%'}}>
              <label htmlFor='organizer'>Please enter the organizer</label>
              <br />
              <input className='mdc-textfield__input' style={{width: '100%'}} type='text' ref='organizer' id='organizer' placeholder='Organizer' required />
            </div>
            <div className='mdc-textfield' style={{width: '100%'}}>
              <label htmlFor='eventStart'>Please enter the start time and date</label>
              <br />
              <input className='mdc-textfield__input' style={{width: '100%'}} type='text' ref='eventStart' id='eventStart' placeholder='Start time and date' required />
            </div>
            <div className='mdc-textfield' style={{width: '100%'}}>
              <label htmlFor='location'>Please enter the location</label>
              <br />
              <input className='mdc-textfield__input' style={{width: '100%'}} type='text' ref='location' id='location' placeholder='location' required />
            </div>
            <div className='mdc-textfield' style={{width: '100%'}}>
              <label htmlFor='maxAttendees'>Please enter the maximum number of attendees</label>
              <br />
              <input className='mdc-textfield__input' style={{width: '100%'}} type='number' ref='maxAttendees' id='maxAttendees' placeholder='Maximum attendees' required />
            </div>
            <br />
            <label htmlFor='eventDescription'>Please enter the event description</label>
            <br />
            <div className='mdc-textfield mdc-textfield--multiline' style={{width: '100%'}}>
              <textArea rows='10' style={{width: '100%'}} className='mdc-textfield__input' ref='eventDescription' id='eventDescription' placeholder='Event description' required />
            </div>
            <div className='mdc-textfield' style={{width: '100%'}}>
              <label style={{fontFamily: 'Helvetica,Arial,sans-serif', fontWeight: '400', lineHeight: '20px', fontSize: '12px'}} htmlFor='eventImage'>Please enter an image to use for background</label>
              <br />
              <input type='file' ref='eventImage' id='eventImage' onChange={(e) => {this.prepareImagePreview(e)}} required />
            </div>
          </div>
        )
      }
    }
    const allFieldsFilled = () => {
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
          <button className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent' type='submit'>Preview</button>
        )
      } else {
        return (
          <button className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent' disabled type='submit'>Preview</button>
        )
      }
    }
    return (
      <div>
        <h2 style={{marginTop: '8vh', textAlign: 'center'}}>New Event</h2>
        <form style={{marginRight: 'auto', marginBottom: '10vh', marginLeft: 'auto', width: '35vw'}} encType='multipart/form-data' onSubmit={this.preparePreview.bind(this)}>
          {placeholdersOrPrefilled()}
          {allFieldsFilled()}
        </form>
      </div>
    )
  }
}
