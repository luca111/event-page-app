import React, { Component } from 'react';

import Accounts from './Accounts.jsx';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    const headerStyle = {
      height: '5vh',
      display: 'flex',
      alignItems: 'center',
      marginBottom: '-20px',
      color: '#ddd',
      backgroundColor: '#333',
    }
    const logoStyle = {
      fontFamily: 'Tahoma, Geneva, sans-serif',
    }
    return (
      <header style={headerStyle}>
        { this.props.currentUser? (
            <div className='col-sm-12'>
              <Link to='/myevents'><h4 className='col-sm-3' style={logoStyle}>Events Page App</h4></Link>
              <Link to='/newevent'><h4 className='col-sm-3' style={logoStyle}>Create Event</h4></Link>
              <Link to='myevents'><h4 className='col-sm-3' style={logoStyle}>My Events</h4></Link>
              <h4 className='col-sm-3 pull-right'><Accounts /></h4>
            </div>
          ) :
          (
            <div className='col-sm-12'>
              <h4 className='col-sm-offset-1 col-sm-4' style={logoStyle}><Link to='/'>Events Page App</Link></h4>
              <h4 className='col-sm-offset-3 col-sm-4 pull-right'><Accounts /></h4>
            </div>
          )
        }

      </header>
    )
  }
}
