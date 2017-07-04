import React, { Component } from 'react';

export default class AttendanceList extends Component {
  render() {
    let attendeesDetails = () => {
      let attendanceDetails = this.props.events.find((event) => {return event.eventId === this.props.eventsAttendance});
      if (attendanceDetails.attendeesDetails) {
        return attendanceDetails.attendeesDetails.map((attendant, index) => {
          return (
            <tr key={index}>
              <td>{attendant.firstName}</td>
              <td>{attendant.lastName}</td>
              <td>{attendant.email}</td>
            </tr>
          )
        });

      } else {
        return (
          <tr>
            <td>No attendees registered</td>
          </tr>
        )
      }
    }
    return (
      <div>
        <h2>Attendance List</h2>
        <div className='table-responsive'>
          <table className='table'>
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {attendeesDetails()}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
