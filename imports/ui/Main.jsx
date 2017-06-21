import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Event from './Event.jsx';
import Intro from './Intro.jsx';

import MyEvents from './MyEvents.jsx';
import NewEvent from './NewEvent.jsx';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Intro} />
        <Route path='/myevents' component={MyEvents} />
        <Route path='/newevent' component={NewEvent} />
        <Event events={this.props.events} />
      </div>
    )
  }
}
