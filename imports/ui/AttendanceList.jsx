import React, { Component } from 'react';

export default class AttendanceList extends Component {
  render() {
    let attendeesDetails = () => {
      let attendanceDetails = this.props.events.find((event) => {return event.eventId === this.props.eventsAttendance});
      if (attendanceDetails.attendeesDetails) {
        return attendanceDetails.attendeesDetails.map((attendant, index) => {
          return (
            <tr key={index}>
              <td className='mdl-data-table__cell--non-numeric'>{attendant.firstName}</td>
              <td className='mdl-data-table__cell--non-numeric'>{attendant.lastName}</td>
              <td className='mdl-data-table__cell--non-numeric'>{attendant.email}</td>
            </tr>
          )
        });

      } else {
        return (
          <tr>
            <td colSpan='3' style={{textAlign: 'center'}}>No attendees registered</td>
          </tr>
        )
      }
    }
    const attendantsTableDivStyle = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: '10vh'
    }
    return (
      <div>
        <h2 style={{marginTop: '8vh', textAlign: 'center'}}>Attendance List</h2>
        <div style={attendantsTableDivStyle}>
          <table className='mdl-data-table mdl-js-data-table'>
            <thead>
              <tr>
                <th className='mdl-data-table__cell--non-numeric'>First name</th>
                <th className='mdl-data-table__cell--non-numeric'>Last name</th>
                <th className='mdl-data-table__cell--non-numeric'>Email</th>
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
