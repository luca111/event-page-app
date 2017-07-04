import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class NewEvent extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      image: undefined
    });
  }
  placeholdersOrPrefilled() {
    if (this.props.eventPlanningDetails.eventName) {
      return (
        <div>
          <div className='form-group'>
            <input type='text' className='form-control' ref='eventName' defaultValue={this.props.eventPlanningDetails.eventName} required />
          </div>
          <div className='form-group'>
            <input type='text' className='form-control' ref='organizer' defaultValue={this.props.eventPlanningDetails.organizer} required />
          </div>
          <div className='form-group'>
            <input type='text' className='form-control' ref='eventStart' defaultValue={this.props.eventPlanningDetails.eventStart} required />
          </div>
          <div className='form-group'>
            <input type='text' className='form-control' ref='location' defaultValue={this.props.eventPlanningDetails.location} required />
          </div>
          <div className='form-group'>
            <input type='number' className='form-control' ref='maxAttendees' defaultValue={this.props.eventPlanningDetails.maxAttendees} required />
          </div>
          <div className='form-group'>
            <input type='text' className='form-control' ref='eventDescription' defaultValue={this.props.eventPlanningDetails.eventDescription} required />
          </div>
          <div className='form-group'>
            <label htmlFor='eventImage'>Please enter an image to use for background</label>
            <input type='file' className='form-control' ref='eventImage' id='eventImage' onChange={(e) => {this.prepareImagePreview(e)}} required />
          </div>
        </div>
      )
    }
    else {
      return (
        <div>
          <div className='form-group'>
            <input type='text' className='form-control' ref='eventName' placeholder='Please enter the event name' required />
          </div>
          <div className='form-group'>
            <input type='text' className='form-control' ref='organizer' placeholder='Please enter the organizer' required />
          </div>
          <div className='form-group'>
            <input type='text' className='form-control' ref='eventStart' placeholder='Please enter the start time and date' required />
          </div>
          <div className='form-group'>
            <input type='text' className='form-control' ref='location' placeholder='Please enter the location' required />
          </div>
          <div className='form-group'>
            <input type='number' className='form-control' ref='maxAttendees' placeholder='Please enter the maximum number of attendees' required />
          </div>
          <div className='form-group'>
            <input type='text' className='form-control' ref='eventDescription' placeholder='Please enter the event description' required />
          </div>
          <div className='form-group'>
            <label htmlFor='eventImage'>Please enter an image to use for background</label>
            <input type='file' className='form-control' ref='eventImage' id='eventImage' onChange={(e) => {this.prepareImagePreview(e)}} required />
          </div>
        </div>
      )
    }
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
    }
    this.props.onFormFilled(filledForm);
    return false;
  }
  render() {
    return (
      <div>
        <h2>New Event</h2>
        <form encType='multipart/form-data' onSubmit={this.preparePreview.bind(this)}>
          {this.placeholdersOrPrefilled()}
          <button type='submit' className='btn btn-default'>Preview</button>
        </form>
      </div>
    )
  }
}
