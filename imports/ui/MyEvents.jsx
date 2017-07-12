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
            <td className='mdl-data-table__cell--non-numeric'>{event.eventName}</td>
            <td>{event.attendees}</td>
            <td>{event.maxAttendees}</td>
            <td className='mdl-data-table__cell--non-numeric' onClick={this.goToAttendanceList.bind(this, event.eventId)}><a href="#">View attendants</a></td>
            <td className='mdl-data-table__cell--non-numeric'><a href={event.eventId}>View page</a></td>
          </tr>
        )
      }
    })
    const myEventsTableDivStyle = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: '10vh'
    }
    return (
      <div>
        <h2 style={{marginTop: '8vh', textAlign: 'center'}}>My Events</h2>
        <div style={myEventsTableDivStyle}>
          <table className='mdl-data-table mdl-js-data-table'>
            <thead>
              <tr>
                <th className='mdl-data-table__cell--non-numeric'>Event</th>
                <th>Attendees</th>
                <th>Max attendees</th>
                <th className='mdl-data-table__cell--non-numeric'>Attendance list</th>
                <th className='mdl-data-table__cell--non-numeric'>Event page</th>
              </tr>
            </thead>
            <tbody>
              {myEvents}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
