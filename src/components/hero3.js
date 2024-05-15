import React from 'react'

import PropTypes from 'prop-types'

import './hero3.css'

const Hero3 = (props) => {
  return (
    <div className="hero3-header9">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="thq-img-ratio-16-9"
      />
      <div className="hero3-content thq-section-padding">
        <div className="hero3-max-width thq-flex-row thq-section-max-width">
          <div className="hero3-column">
            <h1 className="thq-heading-1 hero3-text">{props.heading1}</h1>
          </div>
          <div className="hero3-column1">
            <p className="thq-body-large hero3-text1">{props.content1}</p>
            <div className="hero3-actions">
              <button className="thq-button-filled hero3-button">
                <span className="thq-body-small">{props.action1}</span>
              </button>
              <button className="thq-button-outline hero3-button1">
                <span className="thq-body-small">{props.action2}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero3.defaultProps = {
  content1: 'Welcome to the official website of our Football club',
  action1: 'Explore More',
  heading1: 'Join Us and Support Our Team',
  action2: 'Buy Tickets',
  image1Src:
    'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTc2MTgxOHw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Alt: 'Football club logo',
}

Hero3.propTypes = {
  content1: PropTypes.string,
  action1: PropTypes.string,
  heading1: PropTypes.string,
  action2: PropTypes.string,
  image1Src: PropTypes.string,
  image1Alt: PropTypes.string,
}

export default Hero3
