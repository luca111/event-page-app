import React, { Component } from 'react';

export default class Intro extends Component {
  render() {
    const introTopStyle = {
      backgroundImage: 'url(' + "images/intro_top_image.jpg" + ')',
      backgroundSize: 'cover',
      height: '95vh'
    }
    const introCaptionStyle = {
      textAlign: 'center',
      position: 'relative',
      top: '25vh'
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
          <h1 style={introCaptionStyle}>Create an event page in minutes<br />for free</h1>
          <button style={introTopStartButtonStyle} className="btn btn-success btn-lg" onClick={startButtonClick}>Let's go</button>
        </div>
      </div>
    )
  }
}
