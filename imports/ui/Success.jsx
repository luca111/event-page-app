import React, { Component } from 'react';

export default class Success extends Component {
  render() {
    const successStyle = {
    textAlign: 'center',
    paddingTop: '30vh'
    }
    return (
      <div>
        <h2 style={successStyle}>You are registered for the event!</h2>
      </div>
    )
  }
}
