import React, { Component } from 'react';

import Accounts from './Accounts.jsx';

import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';

export default class Header extends Component {
  render() {
    const headerStyle = {
      backgroundColor: '#212121',
      marginBottom: '-25px',
      height: '12vh'
    }
    const navbarStyle = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around'
    }
    return (
      <header className='mdc-toolbar' style={headerStyle}>
        { this.props.currentUser? (
            <div className='mdc-toolbar__row'>
              <section className='mdc-toolbar__section mdc-toolbar__section--align-start'>
                <Link to='/myevents' className='material-icons mdc-toolbar__icon--menu'><h4 style={{fontFamily: 'Gloria Hallelujah, cursive'}}>Events Page App</h4></Link>
              </section>
              <section className='mdc-toolbar__section mdc-toolbar__section--align-start'>
                <NavLink to='/newevent' className='material-icons mdc-toolbar__icon--menu' style={{textDecoration: 'none'}}><h4>Create Event</h4></NavLink>
              </section>
              <section className='mdc-toolbar__section mdc-toolbar__section--align-start'>
                <NavLink to='myevents' className='material-icons mdc-toolbar__icon--menu' style={{textDecoration: 'none'}}><h4>My Events</h4></NavLink>
              </section>
              <section className='mdc-toolbar__section mdc-toolbar__section--align-start'>
                <h4 className='mdc-toolbar__icon--menu' style={{textDecoration: 'none'}}><Accounts /></h4>
              </section>
            </div>
          ) :
          (
            <div className='mdc-toolbar__row'>
              <section className='mdc-toolbar__section'>
                <Link to='/myevents' className='material-icons mdc-toolbar__icon--menu' style={{textDecoration: 'none'}}><h4 style={{fontFamily: 'Gloria Hallelujah, cursive'}}>Events Page App</h4></Link>
              </section>
              <section className='mdc-toolbar__section'>
                <h4 className='mdc-toolbar__icon--menu' style={{textDecoration: 'none'}}><Accounts /></h4>
              </section>
            </div>
          )
        }

      </header>
    )
  }
}
