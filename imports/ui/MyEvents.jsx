import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class MyEvents extends Component {
  render() {
    return (
      <div>
        <h2>My Events</h2>
        existing events to be pulled from the DB
        <Link to='/newevent'><h4>Create new event</h4></Link>
      </div>
    )
  }
}
