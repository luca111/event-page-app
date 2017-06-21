import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    const footerStyle = {
      color: '#ddd',
      backgroundColor: '#333',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around'
    }
    return (
      <footer style={footerStyle}>
        <h4>About</h4>
        <h4>T&C</h4>
        <h4>Help</h4>
        <h4>Contact</h4>
      </footer>
    )
  }
}
