import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './cta1.css'

const CTA1 = (props) => {
  return (
    <div className="cta1-container thq-section-padding">
      <div className="cta1-max-width thq-section-max-width">
        <div className="cta1-content">
          <h2 className="cta1-heading1 thq-heading-2">{props.heading1}</h2>
          <p className="cta1-content1 thq-body-large">{props.content1}</p>
          <div className="cta1-actions">
            <button className="thq-button-filled cta1-button">
              <span className="cta1-action1 thq-body-small">
                {props.action1}
              </span>
            </button>
            <button className="thq-button-outline cta1-button1">
              <Link to="/page" className="cta1-action2 thq-body-small">
                {props.action2}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA1.defaultProps = {
  heading1: 'Become a part of our football family',
  action1: 'Join our team',
  content1:
    'Experience the thrill of playing for a professional football club. Join us and showcase your skills on the field.',
  action2: 'Buy tickets now',
}

CTA1.propTypes = {
  heading1: PropTypes.string,
  action1: PropTypes.string,
  content1: PropTypes.string,
  action2: PropTypes.string,
}

export default CTA1
