import React, { Component } from 'react';

export default class Intro extends Component {
  render() {
    const introTopStyle = {
      backgroundImage: 'url(' + "images/intro_top_image.jpg" + ')',
      backgroundSize: 'cover',
      height: '88vh',
      marginTop: '-24px'
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
        document.getElementById('login-sign-in-link').click();
        scroll(0,0);
      } else {
        this.props.history.push('/myevents');
        scroll(0,0);
      }
    }
    const introSecondSectionStyle = {
      borderStyle: 'groove none none none',
      backgroundColor: '#eee',
      height: '75vh'
    }
    const secondSectionTitle = {
      marginTop: '15vh',
      textAlign: 'center'
    }
    const benefitDivStyle = {
      marginTop: '10vh',
      height: '30vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'flex-start'
    }
    const cardStyle = {
      width: '22vw'
    }
    const firstCardImgStyle = {
      backgroundImage: 'url(' + "images/create.jpg" + ')',
      backgroundSize: 'cover',
      height: '12rem',
      width: '22vw',
      overflowWrap: 'normal'
    }
    const secondCardImgStyle = {
      backgroundImage: 'url(' + "images/ticket.jpg" + ')',
      backgroundSize: 'cover',
      height: '12rem',
      width: '22vw',
      overflowWrap: 'normal'
    }
    const thirdCardImgStyle = {
      backgroundImage: 'url(' + "images/list.jpg" + ')',
      backgroundSize: 'cover',
      height: '12rem',
      width: '22vw',
      overflowWrap: 'normal'
    }
    const mdcCardSupportingTextStyle = {
      padding: '16px 16px 8px 16px',
      fontFamily: 'Roboto, sans-serif'
    }
    const introThirdSectionStyle = {
      borderStyle: 'groove none none none',
      backgroundColor: '#E8EAF6',
      height: '95vh'
    }
    const thirdSectionTitle = {
      marginTop: '10vh',
      textAlign: 'center'
    }
    const testimonialsDivStyle = {
      marginTop: '10vh',
      height: '30vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'flex-start'
    }
    const testimonialStyle = {
      width: '22vw'
    }
    const firstTestimonialImgStyle = {
      backgroundImage: 'url(' + "images/testimonial1.jpg" + ')',
      borderRadius: '50%',
      backgroundSize: 'cover',
      height: '22vw',
      width: '22vw',
      overflowWrap: 'normal',
      objectFit: 'none',
      objectPosition: 'center'
    }
    const secondTestimonialImgStyle = {
      backgroundImage: 'url(' + "images/testimonial2.jpeg" + ')',
      borderRadius: '50%',
      backgroundSize: 'cover',
      height: '22vw',
      width: '22vw',
      overflowWrap: 'normal',
      objectFit: 'none',
      objectPosition: 'center'
    }
    const thirdTestimonialImgStyle = {
      backgroundImage: 'url(' + "images/testimonial3.jpeg" + ')',
      borderRadius: '50%',
      backgroundSize: 'cover',
      height: '22vw',
      width: '22vw',
      overflowWrap: 'normal',
      objectFit: 'none',
      objectPosition: 'center'
    }
    const testimonialNameStyle = {
      fontWeight: 'bold'
    }
    const testimonialQuoteStyle = {
      fontStyle: 'italic'
    }
    const introfourthSectionStyle = {
      backgroundColor: '#eee',
      height: '75vh',
      backgroundImage: 'url(' + "images/intro_bottom_image.jpg" + ')',
      backgroundSize: 'cover',
      marginTop: '-5vh'
    }
    const fourthSectionTitle = {
      paddingTop: '14vh',
      paddingBottom: '10vh',
      textAlign: 'center',
      background: 'linear-gradient(rgba(0,0,0,.90),rgba(0,0,0,0))',
      color: "#ddd"
    }
    const introBottomStartButtonStyle = {
      textAlign: 'center',
      marginTop: '5vh',
      display: 'flex',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
    return (
      <div>

        <div style={introTopStyle}>
          <h1 style={introCaptionStyle}>Create an event page in minutes<br />for free</h1>
          <button className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent' style={introTopStartButtonStyle} onClick={startButtonClick}>Let's go</button>
        </div>

        <div style={introSecondSectionStyle}>
          <h2 style={secondSectionTitle}>Create a unique page that you can share and manage</h2>
          <div style={benefitDivStyle}>
            <div class='mdc-card' style={cardStyle}>
              <section class='mdc-card__media' style={firstCardImgStyle}></section>
              <section style={mdcCardSupportingTextStyle}>
                Easily create a beautiful page for your event
              </section>
            </div>
            <div class='mdc-card' style={cardStyle}>
              <section class='mdc-card__media' style={secondCardImgStyle}></section>
              <section style={mdcCardSupportingTextStyle}>
                Simple signup for the attendants
              </section>
            </div>
            <div class='mdc-card' style={cardStyle}>
              <section class='mdc-card__media' style={thirdCardImgStyle}></section>
              <section style={mdcCardSupportingTextStyle}>
                Get the full list of attendants with their details
              </section>
            </div>
          </div>
        </div>

        <div  style={introThirdSectionStyle}>
          <h3 style={thirdSectionTitle}>What people say about us</h3>
          <div style={testimonialsDivStyle}>
            <div class='mdc-card' style={testimonialStyle}>
              <section class='mdc-card__media' style={firstTestimonialImgStyle}></section>
              <section style={mdcCardSupportingTextStyle}>
                <span style={testimonialNameStyle}>Adam</span>
                <br />
                <span style={testimonialQuoteStyle}>Thanks to this site, creating pages for events has become a breeze!</span>
              </section>
            </div>
            <div class='mdc-card' style={testimonialStyle}>
              <section class='mdc-card__media' style={secondTestimonialImgStyle}></section>
              <section style={mdcCardSupportingTextStyle}>
                <span style={testimonialNameStyle}>Sophie</span>
                <br />
                <span style={testimonialQuoteStyle}>If you need a page for your event, look no further!</span>
              </section>
            </div>
            <div class='mdc-card' style={testimonialStyle}>
              <section class='mdc-card__media' style={thirdTestimonialImgStyle}></section>
              <section style={mdcCardSupportingTextStyle}>
                <span style={testimonialNameStyle}>Mark</span>
                <br />
                <span style={testimonialQuoteStyle}>Definitely the best site around for creating an event page.</span>
              </section>
            </div>

          </div>
        </div>

        <div style={introfourthSectionStyle}>
          <h2 style={fourthSectionTitle}>Create your first page in minutes in few easy steps</h2>
          <button className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent' style={introBottomStartButtonStyle} onClick={startButtonClick}>Let's go</button>
        </div>

      </div>
    )
  }
}
