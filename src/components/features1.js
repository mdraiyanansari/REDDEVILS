import React from 'react'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  return (
    <div className="features1-layout251 thq-section-padding">
      <div className="features1-max-width thq-section-max-width">
        <div className="thq-flex-row features1-section-title">
          <div className="features1-column thq-flex-column">
            <span className="thq-body-small">{props.slogan}</span>
            <h2 className="thq-heading-2 features1-text1">
              {props.sectionTitle}
            </h2>
          </div>
          <span className="thq-body-small">{props.sectionDescription}</span>
        </div>
        <div className="features1-content">
          <div className="features1-row thq-flex-row">
            <div className="features1-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 features1-feature1-image"
              />
              <div className="features1-content1 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature1Title}</h3>
                <span className="thq-body-small">
                  {props.feature1Description}
                </span>
              </div>
            </div>
            <div className="features1-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 features1-feature2-image"
              />
              <div className="features1-content2 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature2Title}</h3>
                <span className="thq-body-small">
                  {props.feature2Description}
                </span>
              </div>
            </div>
            <div className="features1-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 features1-feature3-image"
              />
              <div className="features1-content3 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature3Title}</h3>
                <span className="thq-body-small">
                  {props.feature3Description}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="features1-actions">
          <button className="thq-button-filled features1-button">
            <span className="thq-body-small">{props.mainAction}</span>
          </button>
          <button className="thq-button-outline features1-button1">
            <span className="thq-body-small">{props.secondaryAction}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1510944331067-02ff35ce969b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTc2MzI2MXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Description:
    'Get detailed insights into our teams, players, and staff.',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1526854497059-89ac894e3168?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTc2MzI2Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Title: 'Merchandise Shop',
  secondaryAction: 'Buy Tickets',
  feature2ImageAlt: 'Match Highlights Image',
  feature3Description:
    'Shop for official club merchandise and show your support.',
  feature1Title: 'Team Information',
  feature1ImageAlt: 'Team Information Image',
  mainAction: 'Join the Club',
  feature2Title: 'Match Highlights',
  feature3ImageAlt: 'Merchandise Shop Image',
  feature2Description:
    'Relive the best moments of our matches with exclusive highlights.',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1518112390430-f4ab02e9c2c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTc2MzI2Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  sectionTitle: 'Exciting Features',
  sectionDescription:
    'Discover the amazing features we offer to enhance your football club experience.',
  slogan: 'Experience the passion of football with us!',
}

Features1.propTypes = {
  feature2ImageSrc: PropTypes.string,
  feature1Description: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature3Title: PropTypes.string,
  secondaryAction: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature3Description: PropTypes.string,
  feature1Title: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  mainAction: PropTypes.string,
  feature2Title: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature2Description: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  sectionTitle: PropTypes.string,
  sectionDescription: PropTypes.string,
  slogan: PropTypes.string,
}

export default Features1
