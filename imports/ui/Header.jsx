import React, { Component } from 'react';

import Accounts from './Accounts.jsx';

import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';

export default class Header extends Component {
  render() {
    const headerStyle = {
      backgroundColor: '#212121',
      height: '12vh'
    }
    const navbarStyle = {
      height: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    }
    const headerElementStyle = {
      display: 'flex',
      alignItems: 'center'
    }
    return (
      <header className='mdc-toolbar' style={headerStyle}>
        { this.props.currentUser? (
            <div className='mdc-toolbar__row' style={navbarStyle}>
              <section className='mdc-toolbar__section mdc-toolbar__section--align-start' style={headerElementStyle}>
                <Link to='/' className='material-icons mdc-toolbar__icon--menu'><h4 style={{fontFamily: 'Gloria Hallelujah, cursive'}}>Event Pages App</h4></Link>
              </section>
              <section className='mdc-toolbar__section mdc-toolbar__section--align-start' style={headerElementStyle}>
                <NavLink to='/newevent' className='material-icons mdc-toolbar__icon--menu' style={{textDecoration: 'none'}}><h4>Create Event</h4></NavLink>
              </section>
              <section className='mdc-toolbar__section mdc-toolbar__section--align-start' style={headerElementStyle}>
                <NavLink to='myevents' className='material-icons mdc-toolbar__icon--menu' style={{textDecoration: 'none'}}><h4>My Events</h4></NavLink>
              </section>
              <section className='mdc-toolbar__section mdc-toolbar__section--align-start' style={headerElementStyle}>
                <h4 className='mdc-toolbar__icon--menu' style={{textDecoration: 'none'}}><Accounts /></h4>
              </section>
            </div>
          ) :
          (
            <div className='mdc-toolbar__row' style={navbarStyle}>
              <section className='mdc-toolbar__section' style={headerElementStyle}>
                <Link to='/' className='material-icons mdc-toolbar__icon--menu' style={{textDecoration: 'none'}}><h4 style={{fontFamily: 'Gloria Hallelujah, cursive'}}>Events Page App</h4></Link>
              </section>
              <section className='mdc-toolbar__section' style={headerElementStyle}>
                <h4 className='mdc-toolbar__icon--menu' style={{textDecoration: 'none'}}><Accounts /></h4>
              </section>
            </div>
          )
        }

      </header>
    )
  }
}
