import React from 'react'

import PropTypes from 'prop-types'

import './gallery1.css'

const Gallery1 = (props) => {
  return (
    <div className="gallery1-gallery3 thq-section-padding">
      <div className="gallery1-max-width thq-section-max-width">
        <div className="gallery1-section-title">
          <h2 className="gallery1-text thq-heading-2">{props.heading1}</h2>
          <span className="gallery1-fgbg thq-body-large">{props.content1}</span>
        </div>
        <div className="gallery1-content">
          <div className="gallery1-container">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="thq-img-ratio-4-3"
            />
          </div>
          <div className="gallery1-container1">
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="thq-img-ratio-4-3"
            />
          </div>
          <div className="gallery1-container2">
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="thq-img-ratio-4-3"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery1.defaultProps = {
  image1Alt: 'Match Highlight 1',
  content1: 'Check out the latest match highlights from our games.',
  image2Src:
    'https://images.unsplash.com/photo-1624880357913-a8539238245b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxmb290YmFsbHxlbnwwfHx8fDE3MTU3NjIzNzV8MA&ixlib=rb-4.0.3&w=1400',
  heading1: 'Match Highlights',
  image3Src:
    'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGZvb3RiYWxsfGVufDB8fHx8MTcxNTc2MjM3NXww&ixlib=rb-4.0.3&w=1400',
  image2Alt: 'Match Highlight 2',
  image3Alt: 'Match Highlight 3',
  image1Src:
    'https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGNyaXN0aWFub3xlbnwwfHx8fDE3MTU3NjE4NjJ8MA&ixlib=rb-4.0.3&w=1400',
}

Gallery1.propTypes = {
  image1Alt: PropTypes.string,
  content1: PropTypes.string,
  image2Src: PropTypes.string,
  heading1: PropTypes.string,
  image3Src: PropTypes.string,
  image2Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  image1Src: PropTypes.string,
}

export default Gallery1
