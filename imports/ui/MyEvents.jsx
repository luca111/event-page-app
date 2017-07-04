import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class MyEvents extends Component {
  goToAttendanceList() {
    this.props.prepareAttendanceList(arguments[0]);
  }
  render() {
    let myEvents = this.props.events.map((event, index) => {
      if (event.owner === this.props.currentUser) {
        return (
          <tr key={index}>
            <td>{event.eventName}</td>
            <td>{event.attendees}</td>
            <td>{event.maxAttendees}</td>
            <td onClick={this.goToAttendanceList.bind(this, event.eventId)}>View attendants</td>
            <td><a href={event.eventId}>View page</a></td>
          </tr>
        )
      }
    })
    return (
      <div>
        <h2>My Events</h2>
        <div className='table-responsive'>
          <table className='table'>
            <thead>
              <tr>
                <th>Event</th>
                <th>Attendees</th>
                <th>Max attendees</th>
                <th>Attendance list</th>
                <th>Event page</th>
              </tr>
            </thead>
            <tbody>
              {myEvents}
            </tbody>
          </table>
        </div>
        <Link to='/newevent'><h4>Create new event</h4></Link>
      </div>
    )
  }
}
