import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { createContainer } from 'meteor/react-meteor-data';

import { Events } from '../api/events.js';

import Header from './Header.jsx';
import Main from './Main.jsx'
import Footer from './Footer.jsx'

class App extends Component {
  render() {
    const clearingDivStyle = {
      clear: 'both',
      height: '0px'
    }
    return (
      <Router>
        <div>
          <Header currentUser={this.props.currentUser} />
          <Main currentUser={this.props.currentUser} events={this.props.events} />
          <div style={clearingDivStyle} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('events');
  Meteor.subscribe('eventsAttendees');
  return {
    currentUser: Meteor.userId(),
    events: Events.find({}).fetch()
  }
}, App);
