import React, { Component } from 'react';

export default class Intro extends Component {
  render() {
    const introTopStyle = {
      backgroundImage: 'url(' + "images/intro_top_image.jpg" + ')',
      backgroundSize: 'cover',
      height: '88vh'
    }
    const introCaptionStyle = {
      textAlign: 'center',
      position: 'relative',
      top: '25vh',
      fontFamily: 'Roboto, sans-serif'
    }
    const introTopStartButtonStyle = {
      textAlign: 'center',
      position: 'relative',
      top: '27vh',
      display: 'flex',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
    const startButtonClick = () => {
      if(!this.props.currentUser) {
        document.getElementById('login-sign-in-link').click()
      } else {
        this.props.history.push('/myevents');
      }
    }
    return (
      <div>
        <div style={introTopStyle}>
          <h2 style={introCaptionStyle}>Create an event page in minutes<br />for free</h2>
          <button className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent' style={introTopStartButtonStyle} onClick={startButtonClick}>Let's go</button>
        </div>
      </div>
    )
  }
}
