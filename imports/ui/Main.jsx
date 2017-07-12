import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

import { withRouter } from 'react-router-dom';

import Intro from './Intro.jsx';

import MyEvents from './MyEvents.jsx';
import NewEvent from './NewEvent.jsx';
import Preview from './Preview.jsx';

import Event from './Event.jsx';

import Rsvp from './Rsvp.jsx';

import Success from './Success.jsx'

import AttendanceList from './AttendanceList.jsx';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previewData: {}
    }
  }
  onFormFilled(eventDetails) {
    this.setState({
      previewData: {
        eventName: eventDetails.eventName,
        organizer: eventDetails.organizer,
        eventStart: eventDetails.eventStart,
        location: eventDetails.location,
        maxAttendees: parseInt(eventDetails.maxAttendees),
        eventDescription: eventDetails.eventDescription,
        eventImage: eventDetails.eventImage
      }
    });
    this.props.history.push('/preview');
  }
  modifyPreview() {
    this.props.history.push('/newevent');
  }
  clearEventDetails() {
    this.setState({
      previewData: {
        eventName: undefined,
        organizer: undefined,
        eventStart: undefined,
        location: undefined,
        maxAttendees: undefined,
        eventDescription: undefined,
        eventImage: undefined
      }
    });
  }
  prepareRsvp(eventId) {
    this.setState({
      eventId: eventId
    });
    this.props.history.push('/rsvp');
  }
  prepareAttendanceList(eventId) {
    this.setState({
      eventForAttendance: eventId
    });
    this.props.history.push('/attendancelist');
  }
  render() {
    let events = this.props.events.map((event, index) => {
      let eventPath = '/' + event.eventId;
      return (
        <Route key={index} path={eventPath} render={(props) => <Event {...props} eventToDisplay={event} prepareRsvp={this.prepareRsvp.bind(this)} />} />
      )
    })
    const mainStyle = {
      minHeight: '80vh'
    }
    return (
      <div style={mainStyle}>
        <Route exact path='/' render={props => <Intro {...props} currentUser={this.props.currentUser} />} />
        <Route path='/myevents' render={props => <MyEvents {...props} currentUser={this.props.currentUser} events={this.props.events} prepareAttendanceList={this.prepareAttendanceList.bind(this)} />} />
        <Route path='/newevent' render={(props) => (
          <NewEvent {...props} onFormFilled={this.onFormFilled.bind(this)} eventPlanningDetails={this.state.previewData} />
        )} />
        <Route path='/preview' render={(props) => (
          <Preview {...props} previewData={this.state.previewData} modifyPreview={this.modifyPreview.bind(this)} clearEventDetails={this.clearEventDetails.bind(this)} />
        )} />
        {events}
        <Route path='/rsvp' render={props => <Rsvp {...props} rsvpEventId={this.state.eventId} />} />
        <Route path='/success' render={props => <Success />} />
        <Route path='/attendancelist' render={(props) => (
          <AttendanceList {...props} events={this.props.events} eventsAttendance={this.state.eventForAttendance} events={this.props.events} />
        )} />
      </div>
    )
  }
}

export default withRouter(Main);
