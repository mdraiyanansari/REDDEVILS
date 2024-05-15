import React from 'react'

import PropTypes from 'prop-types'

import './features17.css'

const Features17 = (props) => {
  return (
    <div className="features17-layout349 thq-section-padding">
      <div className="features17-max-width thq-section-max-width">
        <div className="features17-image-container">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="thq-img-ratio-16-9"
          />
        </div>
        <div className="features17-content">
          <div className="features17-section-title">
            <span className="thq-body-small">{props.feature1Slogan}</span>
            <div className="features17-content1">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <p className="thq-body-large">{props.feature1Description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features17.defaultProps = {
  feature1Title: 'Live Match Updates',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1590650213165-c1fef80648c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTc2MTgxOHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Slogan: 'Stay up to date with real-time match updates',
  feature1Description:
    'Get minute-by-minute updates on scores, player stats, and match events as they happen',
  feature1ImageAlt: 'Live Match Updates Image',
}

Features17.propTypes = {
  feature1Title: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature1Slogan: PropTypes.string,
  feature1Description: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
}

export default Features17
